import getSchools from 'vtfk-schools-info'

/**
 * Funksjon som sjekker om eleven skal ha YFF eller ei
 * @param {Object} student studentobjekt fra pifu
 * @returns {boolean} true/false
 */
function isYff (student) {
  if (!student) throw new TypeError('Student må være objekt')

  // Sjekk om skolen har YFF, eller returner false her om skolen ikke har det
  const school = getSchools({ shortName: student.schoolId })
  if (school && school.length > 0 && !school[0].yff) return false

  // Sjekk om elevens programområde / utdanningsprogram er yrkesfaglig
  const programomraade = student?.programomraade?.type
  const utdanningsprogram = student?.utdanningsprogram?.type
  const sikker = programomraade === 'yrkesfaglig' || utdanningsprogram === 'yrkesfaglig'
  const usikker = programomraade === 'Ukjent' && utdanningsprogram === 'Ukjent'
  return sikker || usikker
}

export default isYff
