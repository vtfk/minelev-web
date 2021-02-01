const { writeFileSync } = require('fs')
const { getStudents, getStudent, getStudentClasses, getStudentTeachers } = require('./pifu')
const { DOCUMENTS: { behaviourReasons, courseReasons, orderReasons, periods } } = require('../data/documents')
const documentsToCreate = 80

const { data: students } = getStudents()
const documents = []

const randomId = () => {
  const timestamp = (new Date().getTime() / 1000 | 0).toString(16)
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
    return (Math.random() * 16 | 0).toString(16)
  }).toLowerCase()
}

const getRandomDate = () => {
  const start = new Date(2020, 0, 1)
  const end = new Date(2021, 6, 15)
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  if (date.getDay() === 0 || date.getDay() > 5) date.setDate(date.getDate() + 3)
  if (date.getHours() < 7 || date.getHours() > 18) date.setHours(Math.floor(Math.random() * (18 - 7 + 1)) + 7)
  return date
}

const getRandomVariant = () => {
  const variants = [
    { type: 'varsel', variant: 'orden' },
    { type: 'varsel', variant: 'orden' },
    { type: 'varsel', variant: 'orden' },
    { type: 'varsel', variant: 'atferd' },
    { type: 'varsel', variant: 'atferd' },
    { type: 'varsel', variant: 'atferd' },
    { type: 'varsel', variant: 'fag' },
    { type: 'varsel', variant: 'fag' },
    { type: 'varsel', variant: 'fag' },
    { type: 'varsel', variant: 'fag' },
    { type: 'varsel', variant: 'fag' },
    { type: 'varsel', variant: 'fag' },
    { type: 'samtale', variant: 'samtale' },
    { type: 'samtale', variant: 'ikke-samtale' },
    { type: 'notat', variant: 'notat' },
    { type: 'notat', variant: 'notat' },
    { type: 'notat', variant: 'notat' },
    { type: 'notat', variant: 'notat' },
    { type: 'notat', variant: 'notat' }
  ]
  const randomType = variants[Math.floor(Math.random() * variants.length)]
  return [randomType.type, randomType.variant]
}

function getRandom (array, max) {
  const shuffled = array.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, (max || array.length))
}

const getRandomStudent = () => {
  const randomStudent = students[Math.floor(Math.random() * students.length)]
  const { data } = getStudent(randomStudent.id)
  return data
}

const getRandomClasses = (studentId) => {
  const { data: classes } = getStudentClasses(studentId)
  const faggruppor = classes.filter(item => item.type === 'undervisningsgruppe' && !item.id.includes('KLFAG'))
  const randomclasses = []
  for (let i = 0; i < (Math.floor(Math.random() * 2) + 1); i++) {
    randomclasses.push(faggruppor[i])
  }
  return randomclasses.map(item => ({ id: item.id, ...item.grep.kortform }))
}

const getRandomTeacher = (studentId) => {
  const { data: teachers } = getStudentTeachers(studentId)
  return getRandom(teachers)
}

const getStatuses = (variant, createdDate) => {
  const statuses = []
  statuses.push({ status: 'queued', timestamp: createdDate.getTime() })
  if (!['notat', 'samtale'].includes(variant)) statuses.push({ status: 'sent', timestamp: createdDate.setTime(createdDate.getTime() + 3451) })
  statuses.push({ status: 'archived', timestamp: createdDate.setTime(createdDate.getTime() + 6542) })
  return statuses
}

const flattenObj = (obj) => {
  return {
    id: obj.id,
    ...obj.value
  }
}

for (let i = 0; i < documentsToCreate; i++) {
  const [type, variant] = getRandomVariant()
  const date = getRandomDate()
  const student = getRandomStudent()
  const classes = getRandomClasses(student.id)
  const teacher = getRandomTeacher(student.id)[0]
  const statuses = getStatuses(variant, date)

  const document = {
    _id: randomId(),
    created: {
      timestamp: date.getTime(),
      createdBy: teacher.username
    },
    modified: [
      {
        timestamp: date.getTime(),
        modifiedBy: teacher.username
      }
    ],
    type,
    variant,
    teacher: {
      username: teacher.username,
      name: teacher.fullName,
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      mobile: teacher.mobile ? teacher.mobile.toString() : '',
      mail: teacher.mail
    },
    student: {
      username: student.username,
      name: student.fullName,
      firstName: student.firstName,
      lastName: student.lastName,
      mobile: student.mobile ? student.mobile.toString() : '',
      mail: student.mail,
      classId: student.classId,
      level: student.level
    },
    school: {
      id: student.schoolId,
      name: student.schoolName,
      shortName: student.schoolShortName
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: type === 'notat',
    status: statuses,
    isQueued: false
  }

  // Varsel content
  if (type === 'varsel') {
    document.content.period = getRandom(periods).map(flattenObj)[0]
    document.content.reasons = getRandom(variant === 'fag' ? courseReasons : variant === 'orden' ? orderReasons : behaviourReasons).map(flattenObj).slice(0, 2)
    if (variant === 'fag') document.content.classes = classes
  }

  documents.push(document)
}

writeFileSync('./document-mock.json', JSON.stringify(documents, null, 2))
