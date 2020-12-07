module.exports = (langObj) => ({
  nb: langObj.nb || langObj.nob || langObj.default,
  nn: langObj.nn || langObj.nno || langObj.default,
  en: langObj.en || langObj.eng || langObj.default
})
