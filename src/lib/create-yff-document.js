/**
 * Funksjon som lager innhold for yff-dokumenter
 * @param {Object} data objekt med innhold som skal tilpasses
 * @returns {Object} ferdig dokumentinnhold
 */
function createYFFDocument (data) {
  return {
    year: new Date().getFullYear()
  }
}

export default createYFFDocument
