/**
 * Funksjon som lager innhold for yff-dokumenter
 * @param {Object} data objekt med innhold som skal tilpasses
 * @returns {Object} ferdig content for dokument
 */
function createYFFContent (data) {
  return {
    year: new Date().getFullYear()
  }
}

export default createYFFContent
