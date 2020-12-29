/**
 * YFF består egentlig bare av mål og utplassering
 * læreplan = alle mål (knyttet mot utplasseringer)
 * tilbakemelding = utplassering og mål/arbeidsoppgaver lagt opp for utplasseringen
 */

const maal = {
  _id: '5d7f2af09f7cda0008d292d4',
  type: 'maal',
  created: {
    timeStamp: 1568615152589,
    createdBy: 'arv1204'
  },
  modified: [
    {
      timeStamp: 1568615152589,
      modifiedBy: 'arv1204'
    }
  ],
  studentUserName: 'fer0804',
  referanseID: '5d7f29d059e31d0007cc9ff5',
  referanseTittel: 'Norges røde kors',
  grep: {
    kode: 'K3703',
    'url-data': 'https://data.udir.no/kl06/v201906/kompetansemaal/K3703',
    tittel: {
      nb: 'planleggje, gjennomføre, dokumentere og vurdere  arbeidet',
      nn: 'planleggje, gjennomføre, dokumentere og vurdere  arbeidet',
      en: 'planleggje, gjennomføre, dokumentere og vurdere  arbeidet'
    }
  },
  arbeidsoppgaver: 'lede morgentrimmen',
  tilbakemelding: false
}

const maalmal = {
  _id: '5d7f2af09f7cda0008d292d4',
  type: 'maalmal',
  created: {
    timeStamp: 1568615152589,
    createdBy: 'arv1204'
  },
  modified: [
    {
      timeStamp: 1568615152589,
      modifiedBy: 'arv1204'
    }
  ],
  owner: 'arv208',
  name: 'Mal for tip utplasseringer',
  description: 'Inneholder en smaling kompetansemål som gjelder for alle som skal ut på Herøya'
}

const utplassering = {
  _id: '5d7f29d059e31d0007cc9ff5',
  type: 'utplassering',
  sted: 'bedrift',
  created: {
    timeStamp: 1568615152589,
    createdBy: 'arv1204'
  },
  modified: [
    {
      timeStamp: 1568615152589,
      modifiedBy: 'arv1204'
    }
  ],
  studentUserName: 'fer0804',
  bedriftsNavn: 'NOTODDEN KOMMUNE BY/HEDDAL HJEMMETJENESTE',
  bedriftsData: {
    organisasjonsNummer: '976825063',
    navn: 'NOTODDEN KOMMUNE BY/HEDDAL HJEMMETJENESTE',
    adresse: 'Sauheradvegen 5',
    postnummer: '3683',
    poststed: 'NOTODDEN',
    avdeling: 'HBT 2'
  },
  kontaktpersonData: [
    {
      navn: 'Fornavn Etternavn',
      telefon: '98765432',
      epost: 'fornavn.etternavn@notodden.kommune.no',
      avdeling: ''
    }
  ],
  parorendeData: [
    {
      navn: 'Fornavn Etternavn',
      telefon: '98765432'
    }
  ],
  utplasseringData: {
    startDato: '19. august 2019',
    sluttDato: '20. oktober 2019',
    daysPerWeek: '3',
    startTid: '07:30',
    sluttTid: '15:00',
    oppmotested: 'Sauheradvegen'
  },
  tilbakemelding: false
}

const tilbakemelding = {
  evaluering: [
    {
      id: 'hms',
      name: 'Eleven følger retningslinjer og HMS innenfor fagområdet',
      score: 'Som forventet'
    },
    {
      id: 'respekt-retningslinjer',
      name: 'Eleven viser gode holdninger og respekt for opplæringsstedets regler og retningslinjer',
      score: 'Over forventet'
    },
    {
      id: 'respekt-mennesker',
      name: 'Eleven viser gode holdninger og respekt for mennesker de møter under utplasseringen',
      score: 'Som forventet'
    },
    {
      id: 'tilpasningsdyktig',
      name: 'Eleven er tilpasningsdyktig og kan samarbeide',
      score: 'Som forventet'
    },
    {
      id: 'kommunikasjon',
      name: 'Eleven har kommunikasjonsevner i møte med kollegaer, kunder og brukere',
      score: 'Som forventet'
    },
    {
      id: 'veiledning',
      name: 'Eleven tar imot veiledning',
      score: 'Som forventet'
    },
    {
      id: 'oppfylle',
      name: 'Eleven utfører tildelte arbeidsoppgaver',
      score: 'Som forventet'
    },
    {
      id: 'initiativ',
      name: 'Eleven viser initiativ og interesse for arbeidet',
      score: 'Over forventet'
    },
    {
      id: 'orden',
      name: 'Orden (punktlighet)',
      score: 'Som forventet'
    },
    {
      id: 'atferd',
      name: 'Atferd (holdninger, respekt)',
      score: 'Som forventet'
    }
  ],
  fravarDager: '0',
  fravarTimer: '0',
  varsletFravar: '0'
}

module.exports = params => {
  const { student, type, id } = params
  // console.log(student, type, id)
  const arr = id ? [0] : [1, 2, 3, 4, 5]
  const data = {
    maal,
    maalmal,
    utplassering
  }
  if (student && !type && !id) {
    return {
      maal: arr.fill(maal),
      utplasseringer: [utplassering]
    }
  } else {
    return data[type] ? arr.fill(data[type]) : []
  }
}

module.exports.utplassering = utplassering

module.exports.tilbakemelding = tilbakemelding
