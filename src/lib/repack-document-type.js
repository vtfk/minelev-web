const { DOCUMENTS: { documentTypes, documentTypesYFF } } = require('../data/documents')

/**
 * Henter visningsverdi for dokumenttype/-variant
 * @param {String} type Typen som skal matches og returneres
 * @param {String} variant Undervariant
 * @param {String} language Språk det skal returneres i
 */
const repackDocumentType = (type, variant, language = 'nb') => {
  try {
    const matchingType = (type === 'yff' ? documentTypesYFF : documentTypes).find(doc => doc.id === type || doc.id === variant)
    if (matchingType && matchingType.description[language]) return matchingType.description[language]
  } catch (error) {
    console.error(error)
  }

  return (type.charAt(0).toUpperCase() + type.slice(1)).replace('-', ' ').trim()
}

module.exports = repackDocumentType
