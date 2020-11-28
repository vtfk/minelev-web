import data from './vtfk.json'
import { generateResponseObject } from './handlers'

/**
 * Henter mock data for brreg
 * @param {string} company Navnet på firma
 * @returns {object} objekt med data array and count antall
 */
function getBrregData (company) {
  return company && company.length > 0 ? data : generateResponseObject([])
}

export default getBrregData
