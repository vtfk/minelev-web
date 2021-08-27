import getSchools from 'vtfk-schools-info'

/**
 * Funksjon som sjekker om eleven skal ha YFF eller ei
 * @param {Object} student studentobjekt fra pifu
 * @returns {boolean} true/false
 */
function isYff (student) {
  if (!student) throw new TypeError('Student må være objekt')

  // Sjekk om skolen har YFF, eller returner false her om skolen ikke har det
  const school = getSchools({ schoolId: student.schoolId })
  if (school && school.length > 0 && !school[0].yff) return false

  // Sjekk om elevens utdanningsprogram er yrkesfaglig
  const utdanningsprogram = student?.utdanningsprogram?.type

  // Fikk vi ikke inn utdanningsprogram viser vi fram det vi har
  if (!utdanningsprogram) return true

  const sikker = utdanningsprogram === 'yrkesfaglig'
  const usikker = utdanningsprogram === 'Ukjent'
  return sikker || usikker
}

/**
 * Funksjon som sjekker om eleven i et dokument har YFF eller ei
 * @param {Object} document dokumentobjektet som brukes for å sjekke
 * @returns {boolean} true/false basert på om eleven har YFF eller ei
 */
function documentStudenthasYff (document) {
  return isYff({ ...document.student, schoolId: document.school.id })
}

export default isYff
export { isYff, documentStudenthasYff }
