/**
 * Funksjon som sjekker om eleven skal ha YFF eller ei
 * @param {Object} student studentobjekt fra pifu
 * @returns {boolean} true/false
 */
function isYff (student) {
  if (!student) throw new TypeError('Student må være objekt')
  const programomraade = student?.programomraade?.type
  const utdanningsprogram = student?.utdanningsprogram?.type
  const sikker = programomraade === 'yrkesfaglig' || utdanningsprogram === 'yrkesfaglig'
  const usikker = programomraade === 'Ukjent' && utdanningsprogram === 'Ukjent'
  return sikker || usikker
}

export default isYff
