import utdanningsprogrammer from './utdanningsprogrammer.json'
import ba from './ba.json'
import { generateResponseObject } from './handlers'

/**
 * Henter mock data for grep
 * @param {string} kode grep kode
 * @returns {object} objekt med data array and count antall
 */
function getGrepData (kode) {
  return kode ? generateResponseObject([ba]) : utdanningsprogrammer
}

export default getGrepData
