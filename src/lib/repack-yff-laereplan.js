export const repackLaereplan = (maal) => {
  if (!maal || !Array.isArray(maal)) return []

  const utplasseringer = {}
  maal.forEach(mal => {
    if (!utplasseringer[mal.referanseID]) {
      utplasseringer[mal.referanseID] = { id: mal.referanseID, name: mal.referanseTittel, maal: [] }
    }
    utplasseringer[mal.referanseID].maal.push({
      grep: mal.grep,
      programomraade: mal.programomraade,
      arbeidsoppgaver: mal.arbeidsoppgaver
    })
  })

  return Object.values(utplasseringer)
}

export default repackLaereplan
