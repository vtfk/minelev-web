const { DOCUMENTS: { documentStatuses } } = require('../data/documents')

const getLocalizedStatus = (status, long, language) => {
  try {
    const matchingType = documentStatuses.find(doc => doc.id === status)
    if (matchingType !== null) {
      return matchingType[long ? 'description' : 'short'][language]
    }
  } catch (error) {
    console.error(error)
  }

  return long ? 'Ukjent status' : 'Ukjent'
}

/**
 * Henter visningsverdi for siste dokumentstatus
 * @param {Object[]} statuses Statuser fra dokumentobjektet - `document.status`
 * @param {Boolean} long Skal lang beskrivelse returneres? Eks: `Arkivert i elevens elevmappe` kontra `Arkivert`.
 *                        Lang beskrivelse kan brukes ved visning av dokumentet i sin helhet med status.
 * @param {String} language Språk det skal returneres i. `nb`, `nn` eller `en`.
 */
const repackDocumentStatus = (statuses = [], long = false, language = 'nb') => {
  const types = statuses.map(status => status.status)
  if (types.includes('archived')) return getLocalizedStatus('archived', long, language)
  if (types.includes('sent')) return getLocalizedStatus('sent', long, language)
  if (types.includes('queued')) return getLocalizedStatus('queued', long, language)

  return types.length > 0 ? getLocalizedStatus(types[0], long) : 'Ukjent'
}

module.exports = repackDocumentStatus
