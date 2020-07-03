// Static demo data

export const CURRENT_USER = {
  firstName: 'Charlotte',
  lastName: 'Testine',
}

export const STUDENTS = [
  {
      id: 1,
      firstName: 'Brage',
      lastName: 'Dahle',
      bornDate: '01.01.01',
      schoolName: 'Kragerø VGS',
      className: 'VK1 – Helsefag',
    },
    {
      id: 2,
      firstName: 'Erik',
      lastName: 'Wang',
      bornDate: '01.01.01',
      schoolName: 'Kragerø VGS',
      className: 'VK1 – Helsefag',
    },
    {
      id: 3,
      firstName: 'Per Andre',
      lastName: 'Olsen',
      bornDate: '01.01.01',
      schoolName: 'Kragerø VGS',
      className: 'VK1 – Helsefag',
    },
    {
      id: 4,
      firstName: 'Dag Otto',
      lastName: 'Johannesen',
      bornDate: '01.01.01',
      schoolName: 'Kragerø VGS',
      className: 'VK1 – Helsefag',
    },
    {
      id: 5,
      firstName: 'Per Andre',
      lastName: 'Haler-Olsen',
      bornDate: '01.01.01',
      schoolName: 'Kragerø VGS',
      className: 'VK1 – Helsefag',
    }
]

export const CLASSES = [
  {
      id: 1,
      schoolName: 'Kragerø VGS',
      className: 'VK1 – Helsefag',
      shortName: 'ABC',
    },
    {
      id: 2,
      schoolName: 'Kragerø VGS',
      className: 'VK2 – Helsefag',
      shortName: 'ABC',
    },
    {
      id: 3,
      schoolName: 'Kragerø VGS',
      className: 'VK3 – Helsefag',
      shortName: 'ABC',
    },
]

export const ACTIVITIES = [
    {
      id: 1,
      studentId: 1,
      firstName: 'Brage',
      lastName: 'Dahle',
      type: 'Varselbrev atferd',
      date: '12. juni 2020', // TODO: date
      status: 'Sendt',
      sentBy: 'Charlotte Testine',
    },
    {
      id: 2,
      studentId: 2,
      firstName: 'Erik',
      lastName: 'Wang',
      type: 'Varselbrev fag',
      date: '12. juni 2020', // TODO: date
      status: 'I kø',
      sentBy: 'Robert Gaarden',
    },
    {
      id: 3,
      studentId: 3,
      firstName: 'Per Andre',
      lastName: 'Olsen',
      type: 'Varselbrev atferd',
      date: '12. juni 2020', // TODO: date
      status: 'Arkivert',
      sentBy: 'Charlotte Testine',
    },
    {
      id: 4,
      studentId: 4,
      firstName: 'Dag Otto',
      lastName: 'Johannesen',
      type: 'Varselbrev fag',
      date: '12. juni 2020', // TODO: date
      status: 'I kø',
      sentBy: 'Robert Gaarden',
    },
    {
      id: 5,
      studentId: 5,
      firstName: 'Per Andre',
      lastName: 'Haler-Olsen',
      type: 'Varselbrev atferd',
      date: '12. juni 2020', // TODO: date
      status: 'Arkivert',
      sentBy: 'Charlotte Testine',
    }
]

export function getSelectedStudent(id) {
  return STUDENTS.find(student => student.id === id);
}

export function getSelectedClass(id) {
  return CLASSES.find(schoolClass => schoolClass.id === id);
}