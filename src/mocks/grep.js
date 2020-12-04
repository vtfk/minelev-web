import utdanningsprogrammer from './utdanningsprogrammer.json'
import ba from './ba.json'

/**
 * Henter mock data for grep
 * @param {string} kode grep kode
 * @returns {object} objekt med data objekt hvis 1 og data array plus count antall ved flere
 */
function getGrepData (kode) {
  return kode ? ba : utdanningsprogrammer
}

export default getGrepData
