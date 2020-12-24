/**
 * Funksjon som lager innhold for yff-dokumenter
 * @param {Object} data objekt med innhold som skal tilpasses
 * @returns {Object} ferdig dokumentinnhold
 */
function createYFFDocument (data) {
  const { variant, student, content } = data
  return {
    type: 'yff',
    variant,
    student,
    content: {
      ...content,
      year: new Date().getFullYear()
    }
  }
}

export default createYFFDocument
