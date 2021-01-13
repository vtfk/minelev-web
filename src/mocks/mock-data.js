// Static demo data

export const CURRENT_USER = {
  displayName: 'Trine Testesen',
  givenName: 'Trine',
  name: 'Trine Testesen',
  onPremisesSamAccountName: 'tri0308',
  surname: 'Testesen',
  tenantId: '08f3813c-9f29-482f-9aec-16ef7cbf477a',
  userPrincipalName: 'trine.testesen@vtfk.no',
  username: 'trine.testesen@vtfk.no'
}

export const STUDENTS = [
  {
    id: 'alv1706',
    firstName: 'Alvorlig',
    lastName: 'Lykke',
    fullName: 'Alvorlig Lykke',
    birthdate: '2004-06-17T00:00:00.000Z',
    username: 'alv1706',
    mail: 'alv1706@skole.vtfk.no',
    mobile: 4798765432,
    isContactTeacher: true,
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:2STB',
    classShortId: '2STB',
    programomraade: {
      kode: 'STSSA2----',
      type: 'studieforberedende',
      tittel: {
        en: 'Språk, samfunnsfag og økonomi Vg2',
        nb: 'Språk, samfunnsfag og økonomi Vg2',
        nn: 'Språk, samfunnsfag og økonomi Vg2'
      },
      kortform: {
        en: 'Språk, samfunnsfag og økonomi',
        nb: 'Språk, samfunnsfag og økonomi',
        nn: 'Språk, samfunnsfag og økonomi'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        en: 'Studiespesialisering',
        nb: 'Studiespesialisering'
      }
    },
    groups: [{
      id: '1_2STB_TESVS@38099',
      type: 'basisgruppe',
      name: '2STB',
      groupId: 'TESVS:2STB',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs'
    },
    {
      id: '2_2STB/KRO1005_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KRO1005',
      groupId: 'TESVS:2STB/KRO1005',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'KRO1005',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/KRO1005',
        tittel: {
          en: 'Kroppsøving Vg2',
          nb: 'Kroppsøving Vg2',
          nn: 'Kroppsøving Vg2'
        },
        kortform: {
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      }
    },
    {
      id: '2_2STB/HIS1001_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/HIS1001',
      groupId: 'TESVS:2STB/HIS1001',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HIS1001',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HIS1001',
        tittel: {
          en: 'Historie Vg2 studieforberedende utdanningsprogram',
          nb: 'Historie Vg2 studieforberedende utdanningsprogram',
          nn: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      }
    },
    {
      id: '2_2STB/KLFAG_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KLFAG',
      groupId: 'TESVS:2STB/KLFAG',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: '2STB/KLFAG',
        kortform: {
          en: 'Læreplan generell del',
          nb: 'Læreplan generell del'
        }
      }
    },
    {
      id: '2_2STB/NOR1208_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/NOR1208',
      groupId: 'TESVS:2STB/NOR1208',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'NOR1208',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/NOR1208',
        tittel: {
          en: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nb: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nn: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          en: 'Norsk hovedmål, skriftlig',
          nb: 'Norsk hovedmål, skriftlig',
          nn: 'Norsk hovudmål, skriftleg'
        }
      }
    },
    {
      id: '2_2MP2/MAT1015_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2MP2/MAT1015',
      groupId: 'TESVS:2MP2/MAT1015',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'MAT1015',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/MAT1015',
        tittel: {
          en: 'Matematikk 2P',
          nb: 'Matematikk 2P',
          nn: 'Matematikk 2P'
        },
        kortform: {
          en: 'Matematikk 2P',
          nb: 'Matematikk 2P',
          nn: 'Matematikk 2P'
        }
      }
    },
    {
      id: '2_2RL1A/SAM3022_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2RL1A/SAM3022',
      groupId: 'TESVS:2RL1A/SAM3022',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3022',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3022',
        tittel: {
          en: 'Rettslære 1',
          nb: 'Rettslære 1',
          nn: 'Rettslære 1'
        },
        kortform: {
          en: 'Rettslære 1',
          nb: 'Rettslære 1',
          nn: 'Rettslære 1'
        }
      }
    },
    {
      id: '2_2PS1A/SAM3037_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2PS1A/SAM3037',
      groupId: 'TESVS:2PS1A/SAM3037',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3037',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3037',
        tittel: {
          en: 'Psykologi 1',
          nb: 'Psykologi 1',
          nn: 'Psykologi 1'
        },
        kortform: {
          en: 'Psykologi 1',
          nb: 'Psykologi 1',
          nn: 'Psykologi 1'
        }
      }
    },
    {
      id: '2_2SP2A/FSP5095_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2SP2A/FSP5095',
      groupId: 'TESVS:2SP2A/FSP5095',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'FSP5095',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/FSP5095',
        tittel: {
          en: 'Spansk II',
          nb: 'Spansk II',
          nn: 'Spansk II'
        },
        kortform: {
          en: 'Spansk II',
          nb: 'Spansk II',
          nn: 'Spansk II'
        }
      }
    },
    {
      id: '2_2MFL1/SAM3005_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2MFL1/SAM3005',
      groupId: 'TESVS:2MFL1/SAM3005',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3005',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3005',
        tittel: {
          en: 'Markedsføring og ledelse 1',
          nb: 'Markedsføring og ledelse 1',
          nn: 'Marknadsføring og leiing 1'
        },
        kortform: {
          en: 'Markedsføring og ledelse 1',
          nb: 'Markedsføring og ledelse 1',
          nn: 'Marknadsføring og leiing 1'
        }
      }
    }
    ]
  },
  {
    id: 'ett09051',
    firstName: 'Etterpåklok Underfundig',
    lastName: 'Filetfrue',
    fullName: 'Etterpåklok Underfundig Filetfrue',
    birthdate: '2003-05-09T00:00:00.000Z',
    username: 'ett09051',
    mail: 'ett09051@skole.vtfk.no',
    mobile: 4748765678,
    isContactTeacher: true,
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:2STB',
    classShortId: '2STB',
    programomraade: {
      kode: 'STSSA2----',
      type: 'studieforberedende',
      tittel: {
        en: 'Språk, samfunnsfag og økonomi Vg2',
        nb: 'Språk, samfunnsfag og økonomi Vg2',
        nn: 'Språk, samfunnsfag og økonomi Vg2'
      },
      kortform: {
        en: 'Språk, samfunnsfag og økonomi',
        nb: 'Språk, samfunnsfag og økonomi',
        nn: 'Språk, samfunnsfag og økonomi'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        en: 'Studiespesialisering',
        nb: 'Studiespesialisering'
      }
    },
    groups: [{
      id: '1_2STB_TESVS@38099',
      type: 'basisgruppe',
      name: '2STB',
      groupId: 'TESVS:2STB',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs'
    },
    {
      id: '2_2STB/KRO1005_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KRO1005',
      groupId: 'TESVS:2STB/KRO1005',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'KRO1005',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/KRO1005',
        tittel: {
          en: 'Kroppsøving Vg2',
          nb: 'Kroppsøving Vg2',
          nn: 'Kroppsøving Vg2'
        },
        kortform: {
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      }
    },
    {
      id: '2_2STB/HIS1001_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/HIS1001',
      groupId: 'TESVS:2STB/HIS1001',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HIS1001',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HIS1001',
        tittel: {
          en: 'Historie Vg2 studieforberedende utdanningsprogram',
          nb: 'Historie Vg2 studieforberedende utdanningsprogram',
          nn: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      }
    },
    {
      id: '2_2STB/KLFAG_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KLFAG',
      groupId: 'TESVS:2STB/KLFAG',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: '2STB/KLFAG',
        kortform: {
          en: 'Læreplan generell del',
          nb: 'Læreplan generell del'
        }
      }
    },
    {
      id: '2_2STB/NOR1208_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/NOR1208',
      groupId: 'TESVS:2STB/NOR1208',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'NOR1208',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/NOR1208',
        tittel: {
          en: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nb: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nn: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          en: 'Norsk hovedmål, skriftlig',
          nb: 'Norsk hovedmål, skriftlig',
          nn: 'Norsk hovudmål, skriftleg'
        }
      }
    },
    {
      id: '2_2MP2/MAT1015_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2MP2/MAT1015',
      groupId: 'TESVS:2MP2/MAT1015',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'MAT1015',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/MAT1015',
        tittel: {
          en: 'Matematikk 2P',
          nb: 'Matematikk 2P',
          nn: 'Matematikk 2P'
        },
        kortform: {
          en: 'Matematikk 2P',
          nb: 'Matematikk 2P',
          nn: 'Matematikk 2P'
        }
      }
    },
    {
      id: '2_2RL1A/SAM3022_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2RL1A/SAM3022',
      groupId: 'TESVS:2RL1A/SAM3022',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3022',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3022',
        tittel: {
          en: 'Rettslære 1',
          nb: 'Rettslære 1',
          nn: 'Rettslære 1'
        },
        kortform: {
          en: 'Rettslære 1',
          nb: 'Rettslære 1',
          nn: 'Rettslære 1'
        }
      }
    },
    {
      id: '2_2PS1A/SAM3037_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2PS1A/SAM3037',
      groupId: 'TESVS:2PS1A/SAM3037',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3037',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3037',
        tittel: {
          en: 'Psykologi 1',
          nb: 'Psykologi 1',
          nn: 'Psykologi 1'
        },
        kortform: {
          en: 'Psykologi 1',
          nb: 'Psykologi 1',
          nn: 'Psykologi 1'
        }
      }
    },
    {
      id: '2_2TY2B/FSP5122_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2TY2B/FSP5122',
      groupId: 'TESVS:2TY2B/FSP5122',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'FSP5122',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/FSP5122',
        tittel: {
          en: 'Tysk II',
          nb: 'Tysk II',
          nn: 'Tysk II'
        },
        kortform: {
          en: 'Tysk II',
          nb: 'Tysk II',
          nn: 'Tysk II'
        }
      }
    },
    {
      id: '2_2SOA/SAM3019_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2SOA/SAM3019',
      groupId: 'TESVS:2SOA/SAM3019',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3019',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3019',
        tittel: {
          en: 'Sosiologi og sosialantropologi',
          nb: 'Sosiologi og sosialantropologi',
          nn: 'Sosiologi og sosialantropologi'
        },
        kortform: {
          en: 'Sosiologi og sosialantropologi',
          nb: 'Sosiologi og sosialantropologi',
          nn: 'Sosiologi og sosialantropologi'
        }
      }
    }
    ]
  },
  {
    id: 'opp2004',
    firstName: 'Oppfyllende',
    lastName: 'Palmeolje',
    fullName: 'Oppfyllende Palmeolje',
    birthdate: '2004-04-20T00:00:00.000Z',
    username: 'opp2004',
    mail: 'opp2004@skole.vtfk.no',
    mobile: 4794321000,
    isContactTeacher: true,
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:2STB',
    classShortId: '2STB',
    programomraade: {
      kode: 'STSSA2----',
      type: 'studieforberedende',
      tittel: {
        en: 'Språk, samfunnsfag og økonomi Vg2',
        nb: 'Språk, samfunnsfag og økonomi Vg2',
        nn: 'Språk, samfunnsfag og økonomi Vg2'
      },
      kortform: {
        en: 'Språk, samfunnsfag og økonomi',
        nb: 'Språk, samfunnsfag og økonomi',
        nn: 'Språk, samfunnsfag og økonomi'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        en: 'Studiespesialisering',
        nb: 'Studiespesialisering'
      }
    },
    groups: [{
      id: '1_2STB_TESVS@38099',
      type: 'basisgruppe',
      name: '2STB',
      groupId: 'TESVS:2STB',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs'
    },
    {
      id: '2_2STB/KRO1005_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KRO1005',
      groupId: 'TESVS:2STB/KRO1005',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'KRO1005',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/KRO1005',
        tittel: {
          en: 'Kroppsøving Vg2',
          nb: 'Kroppsøving Vg2',
          nn: 'Kroppsøving Vg2'
        },
        kortform: {
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      }
    },
    {
      id: '2_2STB/HIS1001_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/HIS1001',
      groupId: 'TESVS:2STB/HIS1001',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HIS1001',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HIS1001',
        tittel: {
          en: 'Historie Vg2 studieforberedende utdanningsprogram',
          nb: 'Historie Vg2 studieforberedende utdanningsprogram',
          nn: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      }
    },
    {
      id: '2_2STB/KLFAG_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KLFAG',
      groupId: 'TESVS:2STB/KLFAG',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: '2STB/KLFAG',
        kortform: {
          en: 'Læreplan generell del',
          nb: 'Læreplan generell del'
        }
      }
    },
    {
      id: '2_2STB/NOR1208_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/NOR1208',
      groupId: 'TESVS:2STB/NOR1208',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'NOR1208',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/NOR1208',
        tittel: {
          en: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nb: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nn: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          en: 'Norsk hovedmål, skriftlig',
          nb: 'Norsk hovedmål, skriftlig',
          nn: 'Norsk hovudmål, skriftleg'
        }
      }
    },
    {
      id: '2_2RL1B/SAM3022_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2RL1B/SAM3022',
      groupId: 'TESVS:2RL1B/SAM3022',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3022',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3022',
        tittel: {
          en: 'Rettslære 1',
          nb: 'Rettslære 1',
          nn: 'Rettslære 1'
        },
        kortform: {
          en: 'Rettslære 1',
          nb: 'Rettslære 1',
          nn: 'Rettslære 1'
        }
      }
    },
    {
      id: '2_2SOB/SAM3019_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2SOB/SAM3019',
      groupId: 'TESVS:2SOB/SAM3019',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3019',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3019',
        tittel: {
          en: 'Sosiologi og sosialantropologi',
          nb: 'Sosiologi og sosialantropologi',
          nn: 'Sosiologi og sosialantropologi'
        },
        kortform: {
          en: 'Sosiologi og sosialantropologi',
          nb: 'Sosiologi og sosialantropologi',
          nn: 'Sosiologi og sosialantropologi'
        }
      }
    },
    {
      id: '2_2PS1B/SAM3037_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2PS1B/SAM3037',
      groupId: 'TESVS:2PS1B/SAM3037',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3037',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3037',
        tittel: {
          en: 'Psykologi 1',
          nb: 'Psykologi 1',
          nn: 'Psykologi 1'
        },
        kortform: {
          en: 'Psykologi 1',
          nb: 'Psykologi 1',
          nn: 'Psykologi 1'
        }
      }
    },
    {
      id: '2_2MP2/MAT1015_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2MP2/MAT1015',
      groupId: 'TESVS:2MP2/MAT1015',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'MAT1015',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/MAT1015',
        tittel: {
          en: 'Matematikk 2P',
          nb: 'Matematikk 2P',
          nn: 'Matematikk 2P'
        },
        kortform: {
          en: 'Matematikk 2P',
          nb: 'Matematikk 2P',
          nn: 'Matematikk 2P'
        }
      }
    },
    {
      id: '2_2SP1/FSP5092_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2SP1/FSP5092',
      groupId: 'TESVS:2SP1/FSP5092',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'FSP5092',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/FSP5092',
        tittel: {
          en: 'Spansk I',
          nb: 'Spansk I',
          nn: 'Spansk I'
        },
        kortform: {
          en: 'Spansk I',
          nb: 'Spansk I',
          nn: 'Spansk I'
        }
      }
    }
    ]
  },
  {
    id: 'vis05042',
    firstName: 'Vis',
    lastName: 'Motbakkeklaring',
    fullName: 'Vis Motbakkeklaring',
    birthdate: '2004-04-05T00:00:00.000Z',
    username: 'vis05042',
    mail: 'vis05042@skole.vtfk.no',
    mobile: 4791919191,
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:2STB',
    classShortId: '2STB',
    isContactTeacher: false,
    programomraade: {
      kode: 'STSSA2----',
      type: 'studieforberedende',
      tittel: {
        en: 'Språk, samfunnsfag og økonomi Vg2',
        nb: 'Språk, samfunnsfag og økonomi Vg2',
        nn: 'Språk, samfunnsfag og økonomi Vg2'
      },
      kortform: {
        en: 'Språk, samfunnsfag og økonomi',
        nb: 'Språk, samfunnsfag og økonomi',
        nn: 'Språk, samfunnsfag og økonomi'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        en: 'Studiespesialisering',
        nb: 'Studiespesialisering'
      }
    },
    groups: [{
      id: '1_2STB_TESVS@38099',
      type: 'basisgruppe',
      name: '2STB',
      groupId: 'TESVS:2STB',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs'
    },
    {
      id: '2_2STB/KRO1005_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KRO1005',
      groupId: 'TESVS:2STB/KRO1005',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'KRO1005',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/KRO1005',
        tittel: {
          en: 'Kroppsøving Vg2',
          nb: 'Kroppsøving Vg2',
          nn: 'Kroppsøving Vg2'
        },
        kortform: {
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      }
    },
    {
      id: '2_2STB/HIS1001_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/HIS1001',
      groupId: 'TESVS:2STB/HIS1001',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HIS1001',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HIS1001',
        tittel: {
          en: 'Historie Vg2 studieforberedende utdanningsprogram',
          nb: 'Historie Vg2 studieforberedende utdanningsprogram',
          nn: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      }
    },
    {
      id: '2_2STB/KLFAG_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KLFAG',
      groupId: 'TESVS:2STB/KLFAG',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: '2STB/KLFAG',
        kortform: {
          en: 'Læreplan generell del',
          nb: 'Læreplan generell del'
        }
      }
    },
    {
      id: '2_2STB/NOR1208_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/NOR1208',
      groupId: 'TESVS:2STB/NOR1208',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'NOR1208',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/NOR1208',
        tittel: {
          en: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nb: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nn: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          en: 'Norsk hovedmål, skriftlig',
          nb: 'Norsk hovedmål, skriftlig',
          nn: 'Norsk hovudmål, skriftleg'
        }
      }
    },
    {
      id: '2_2MS1B/REA3026_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2MS1B/REA3026',
      groupId: 'TESVS:2MS1B/REA3026',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'REA3026',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/REA3026',
        tittel: {
          en: 'Matematikk S1',
          nb: 'Matematikk S1',
          nn: 'Matematikk S1'
        },
        kortform: {
          en: 'Matematikk S1',
          nb: 'Matematikk S1',
          nn: 'Matematikk S1'
        }
      }
    },
    {
      id: '2_2SOB/SAM3019_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2SOB/SAM3019',
      groupId: 'TESVS:2SOB/SAM3019',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3019',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3019',
        tittel: {
          en: 'Sosiologi og sosialantropologi',
          nb: 'Sosiologi og sosialantropologi',
          nn: 'Sosiologi og sosialantropologi'
        },
        kortform: {
          en: 'Sosiologi og sosialantropologi',
          nb: 'Sosiologi og sosialantropologi',
          nn: 'Sosiologi og sosialantropologi'
        }
      }
    },
    {
      id: '2_2PS1B/SAM3037_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2PS1B/SAM3037',
      groupId: 'TESVS:2PS1B/SAM3037',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SAM3037',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SAM3037',
        tittel: {
          en: 'Psykologi 1',
          nb: 'Psykologi 1',
          nn: 'Psykologi 1'
        },
        kortform: {
          en: 'Psykologi 1',
          nb: 'Psykologi 1',
          nn: 'Psykologi 1'
        }
      }
    },
    {
      id: '2_2TY1/FSP5119_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2TY1/FSP5119',
      groupId: 'TESVS:2TY1/FSP5119',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'FSP5119',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/FSP5119',
        tittel: {
          en: 'Tysk I',
          nb: 'Tysk I',
          nn: 'Tysk I'
        },
        kortform: {
          en: 'Tysk I',
          nb: 'Tysk I',
          nn: 'Tysk I'
        }
      }
    },
    {
      id: '2_2IT1/REA3014_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2IT1/REA3014',
      groupId: 'TESVS:2IT1/REA3014',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'REA3014',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/REA3014',
        tittel: {
          en: 'Informasjonsteknologi 1',
          nb: 'Informasjonsteknologi 1',
          nn: 'Informasjonsteknologi 1'
        },
        kortform: {
          en: 'Informasjonsteknologi 1',
          nb: 'Informasjonsteknologi 1',
          nn: 'Informasjonsteknologi 1'
        }
      }
    }
    ]
  },
  {
    id: 'tro1407',
    firstName: 'Trofast',
    lastName: 'Bomullballsko',
    fullName: 'Trofast Bomullballsko',
    birthdate: '2003-07-14T00:00:00.000Z',
    username: 'tro1407',
    mail: 'tro1407@skole.vtfk.no',
    mobile: 4747474747,
    isContactTeacher: true,
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:2STB',
    classShortId: '2STB',
    programomraade: {
      kode: 'STREA2----',
      type: 'Ukjent',
      kortform: {
        en: 'Realfag',
        nb: 'Realfag'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        en: 'Studiespesialisering',
        nb: 'Studiespesialisering'
      }
    },
    groups: [{
      id: '1_2STB_TESVS@38099',
      type: 'basisgruppe',
      name: '2STB',
      groupId: 'TESVS:2STB',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs'
    },
    {
      id: '2_2STB/KRO1005_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KRO1005',
      groupId: 'TESVS:2STB/KRO1005',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'KRO1005',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/KRO1005',
        tittel: {
          en: 'Kroppsøving Vg2',
          nb: 'Kroppsøving Vg2',
          nn: 'Kroppsøving Vg2'
        },
        kortform: {
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      }
    },
    {
      id: '2_2STB/HIS1001_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/HIS1001',
      groupId: 'TESVS:2STB/HIS1001',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HIS1001',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HIS1001',
        tittel: {
          en: 'Historie Vg2 studieforberedende utdanningsprogram',
          nb: 'Historie Vg2 studieforberedende utdanningsprogram',
          nn: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      }
    },
    {
      id: '2_2STB/KLFAG_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/KLFAG',
      groupId: 'TESVS:2STB/KLFAG',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: '2STB/KLFAG',
        kortform: {
          en: 'Læreplan generell del',
          nb: 'Læreplan generell del'
        }
      }
    },
    {
      id: '2_2STB/NOR1208_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2STB/NOR1208',
      groupId: 'TESVS:2STB/NOR1208',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'NOR1208',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/NOR1208',
        tittel: {
          en: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nb: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nn: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          en: 'Norsk hovedmål, skriftlig',
          nb: 'Norsk hovedmål, skriftlig',
          nn: 'Norsk hovudmål, skriftleg'
        }
      }
    },
    {
      id: '2_2MR1B/REA3022_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2MR1B/REA3022',
      groupId: 'TESVS:2MR1B/REA3022',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'REA3022',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/REA3022',
        tittel: {
          en: 'Matematikk R1',
          nb: 'Matematikk R1',
          nn: 'Matematikk R1'
        },
        kortform: {
          en: 'Matematikk R1',
          nb: 'Matematikk R1',
          nn: 'Matematikk R1'
        }
      }
    },
    {
      id: '2_2ENSA/SPR3008_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2ENSA/SPR3008',
      groupId: 'TESVS:2ENSA/SPR3008',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SPR3008',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SPR3008',
        tittel: {
          en: 'Internasjonal engelsk, skriftlig',
          nb: 'Internasjonal engelsk, skriftlig',
          nn: 'Internasjonal engelsk, skriftleg'
        },
        kortform: {
          en: 'Internasj. engelsk, skriftlig',
          nb: 'Internasj. engelsk, skriftlig',
          nn: 'Internasj. engelsk, skriftleg'
        }
      }
    },
    {
      id: '2_2FY1B/REA3004_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2FY1B/REA3004',
      groupId: 'TESVS:2FY1B/REA3004',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'REA3004',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/REA3004',
        tittel: {
          en: 'Fysikk 1',
          nb: 'Fysikk 1',
          nn: 'Fysikk 1'
        },
        kortform: {
          en: 'Fysikk 1',
          nb: 'Fysikk 1',
          nn: 'Fysikk 1'
        }
      }
    },
    {
      id: '2_2ENMA/SPR3009_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2ENMA/SPR3009',
      groupId: 'TESVS:2ENMA/SPR3009',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'SPR3009',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/SPR3009',
        tittel: {
          en: 'Internasjonal engelsk, muntlig',
          nb: 'Internasjonal engelsk, muntlig',
          nn: 'Internasjonal engelsk, munnleg'
        },
        kortform: {
          en: 'Internasjonal engelsk, muntlig',
          nb: 'Internasjonal engelsk, muntlig',
          nn: 'Internasjonal engelsk, munnleg'
        }
      }
    },
    {
      id: '2_2IT1/REA3014_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '2IT1/REA3014',
      groupId: 'TESVS:2IT1/REA3014',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'REA3014',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/REA3014',
        tittel: {
          en: 'Informasjonsteknologi 1',
          nb: 'Informasjonsteknologi 1',
          nn: 'Informasjonsteknologi 1'
        },
        kortform: {
          en: 'Informasjonsteknologi 1',
          nb: 'Informasjonsteknologi 1',
          nn: 'Informasjonsteknologi 1'
        }
      }
    }
    ]
  },
  {
    id: 'lil1312',
    firstName: 'Lilla',
    lastName: 'Spenne',
    fullName: 'Lilla Spenne',
    birthdate: '2002-12-13T00:00:00.000Z',
    username: 'lil1312',
    mail: 'lil1312@skole.vtfk.no',
    mobile: '',
    isContactTeacher: false,
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:1HOA',
    classShortId: '1HOA',
    programomraade: {
      kode: 'HSHSF1----',
      type: 'yrkesfaglig',
      tittel: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      },
      kortform: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      }
    },
    utdanningsprogram: {
      kode: 'HS',
      type: 'yrkesfaglig',
      tittel: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      },
      kortform: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      }
    },
    groups: [{
      id: '1_1HOA_TESVS@38099',
      type: 'basisgruppe',
      name: '1HOA',
      groupId: 'TESVS:1HOA',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs'
    },
    {
      id: '2_1ENYA/ENG1009_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1ENYA/ENG1009',
      groupId: 'TESVS:1ENYA/ENG1009',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'ENG1009',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/ENG1009',
        tittel: {
          en: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nb: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nn: 'Engelsk, Vg1 yrkesfaglege utdanningprogram'
        },
        kortform: {
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      }
    },
    {
      id: '2_1HOA/KLFAG_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/KLFAG',
      groupId: 'TESVS:1HOA/KLFAG',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: '1HOA/KLFAG',
        kortform: {
          en: 'Læreplan generell del',
          nb: 'Læreplan generell del'
        }
      }
    },
    {
      id: '2_1HOA/HSF1008_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/HSF1008',
      groupId: 'TESVS:1HOA/HSF1008',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HSF1008',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HSF1008',
        tittel: {
          en: 'Yrkesliv i helse- og oppvekstfag',
          nb: 'Yrkesliv i helse- og oppvekstfag',
          nn: 'Yrkesliv i helse- og oppvekstfag'
        },
        kortform: {
          en: 'Yrkesliv i helse- og oppv.fag',
          nb: 'Yrkesliv i helse- og oppv.fag',
          nn: 'Yrkesliv i helse- og oppv.fag'
        }
      }
    },
    {
      id: '2_1HOA/HSF1006_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/HSF1006',
      groupId: 'TESVS:1HOA/HSF1006',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HSF1006',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HSF1006',
        tittel: {
          en: 'Helsefremmende arbeid',
          nb: 'Helsefremmende arbeid',
          nn: 'Helsefremjande arbeid'
        },
        kortform: {
          en: 'Helsefremmende arbeid',
          nb: 'Helsefremmende arbeid',
          nn: 'Helsefremjande arbeid'
        }
      }
    },
    {
      id: '2_1HOA/KRO1017_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/KRO1017',
      groupId: 'TESVS:1HOA/KRO1017',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'KRO1017',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/KRO1017',
        tittel: {
          en: 'Kroppsøving Vg1',
          nb: 'Kroppsøving Vg1',
          nn: 'Kroppsøving Vg1'
        },
        kortform: {
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      }
    },
    {
      id: '2_1HOA/YFF4106_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/YFF4106',
      groupId: 'TESVS:1HOA/YFF4106',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'YFF4106',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/YFF4106',
        tittel: {
          en: 'Yrkesfaglig fordypning Vg1',
          nb: 'Yrkesfaglig fordypning Vg1',
          nn: 'Yrkesfagleg fordjuping Vg1'
        },
        kortform: {
          en: 'Yrkesfaglig fordypning Vg1',
          nb: 'Yrkesfaglig fordypning Vg1',
          nn: 'Yrkesfagleg fordjuping Vg1'
        }
      }
    },
    {
      id: '2_1HOA/HSF1007_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/HSF1007',
      groupId: 'TESVS:1HOA/HSF1007',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HSF1007',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HSF1007',
        tittel: {
          en: 'Kommunikasjon og samhandling',
          nb: 'Kommunikasjon og samhandling',
          nn: 'Kommunikasjon og samhandling'
        },
        kortform: {
          en: 'Kommunikasjon og samhandling',
          nb: 'Kommunikasjon og samhandling',
          nn: 'Kommunikasjon og samhandling'
        }
      }
    }
    ]
  },
  {
    id: 'dyn06061',
    firstName: 'Dynamisk Hevngjerrig',
    lastName: 'Statist',
    fullName: 'Dynamisk Hevngjerrig Statist',
    birthdate: '2003-06-06T00:00:00.000Z',
    username: 'dyn06061',
    mail: 'dyn06061@skole.vtfk.no',
    mobile: 4791234567,
    isContactTeacher: false,
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:1HOA',
    classShortId: '1HOA',
    programomraade: {
      kode: 'HSHSF1----',
      type: 'yrkesfaglig',
      tittel: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      },
      kortform: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      }
    },
    utdanningsprogram: {
      kode: 'HS',
      type: 'yrkesfaglig',
      tittel: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      },
      kortform: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      }
    },
    groups: [{
      id: '1_1HOA_TESVS@38099',
      type: 'basisgruppe',
      name: '1HOA',
      groupId: 'TESVS:1HOA',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs'
    },
    {
      id: '2_1MPYD/MAT1117_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1MPYD/MAT1117',
      groupId: 'TESVS:1MPYD/MAT1117',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'MAT1117',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/MAT1117',
        tittel: {
          en: 'Matematikk 1P-Y  HS',
          nb: 'Matematikk 1P-Y  HS',
          nn: 'Matematikk 1P-Y  HS'
        },
        kortform: {
          en: 'Matematikk 1P-Y',
          nb: 'Matematikk 1P-Y',
          nn: 'Matematikk 1P-Y'
        }
      }
    },
    {
      id: '2_1ENYA/ENG1009_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1ENYA/ENG1009',
      groupId: 'TESVS:1ENYA/ENG1009',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'ENG1009',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/ENG1009',
        tittel: {
          en: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nb: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nn: 'Engelsk, Vg1 yrkesfaglege utdanningprogram'
        },
        kortform: {
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      }
    },
    {
      id: '2_1HOA/KLFAG_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/KLFAG',
      groupId: 'TESVS:1HOA/KLFAG',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: '1HOA/KLFAG',
        kortform: {
          en: 'Læreplan generell del',
          nb: 'Læreplan generell del'
        }
      }
    },
    {
      id: '2_1HOA/HSF1008_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/HSF1008',
      groupId: 'TESVS:1HOA/HSF1008',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HSF1008',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HSF1008',
        tittel: {
          en: 'Yrkesliv i helse- og oppvekstfag',
          nb: 'Yrkesliv i helse- og oppvekstfag',
          nn: 'Yrkesliv i helse- og oppvekstfag'
        },
        kortform: {
          en: 'Yrkesliv i helse- og oppv.fag',
          nb: 'Yrkesliv i helse- og oppv.fag',
          nn: 'Yrkesliv i helse- og oppv.fag'
        }
      }
    },
    {
      id: '2_1HOA/HSF1006_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/HSF1006',
      groupId: 'TESVS:1HOA/HSF1006',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HSF1006',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HSF1006',
        tittel: {
          en: 'Helsefremmende arbeid',
          nb: 'Helsefremmende arbeid',
          nn: 'Helsefremjande arbeid'
        },
        kortform: {
          en: 'Helsefremmende arbeid',
          nb: 'Helsefremmende arbeid',
          nn: 'Helsefremjande arbeid'
        }
      }
    },
    {
      id: '2_1HOA/KRO1017_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/KRO1017',
      groupId: 'TESVS:1HOA/KRO1017',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'KRO1017',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/KRO1017',
        tittel: {
          en: 'Kroppsøving Vg1',
          nb: 'Kroppsøving Vg1',
          nn: 'Kroppsøving Vg1'
        },
        kortform: {
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      }
    },
    {
      id: '2_1HOA/YFF4106_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/YFF4106',
      groupId: 'TESVS:1HOA/YFF4106',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'YFF4106',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/YFF4106',
        tittel: {
          en: 'Yrkesfaglig fordypning Vg1',
          nb: 'Yrkesfaglig fordypning Vg1',
          nn: 'Yrkesfagleg fordjuping Vg1'
        },
        kortform: {
          en: 'Yrkesfaglig fordypning Vg1',
          nb: 'Yrkesfaglig fordypning Vg1',
          nn: 'Yrkesfagleg fordjuping Vg1'
        }
      }
    },
    {
      id: '2_1HOA/NAT1011_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/NAT1011',
      groupId: 'TESVS:1HOA/NAT1011',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'NAT1011',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/NAT1011',
        tittel: {
          en: 'Naturfag Vg1 HS',
          nb: 'Naturfag Vg1 HS',
          nn: 'Naturfag Vg1 HS'
        },
        kortform: {
          en: 'Naturfag',
          nb: 'Naturfag',
          nn: 'Naturfag'
        }
      }
    },
    {
      id: '2_1HOA/HSF1007_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/HSF1007',
      groupId: 'TESVS:1HOA/HSF1007',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HSF1007',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HSF1007',
        tittel: {
          en: 'Kommunikasjon og samhandling',
          nb: 'Kommunikasjon og samhandling',
          nn: 'Kommunikasjon og samhandling'
        },
        kortform: {
          en: 'Kommunikasjon og samhandling',
          nb: 'Kommunikasjon og samhandling',
          nn: 'Kommunikasjon og samhandling'
        }
      }
    }
    ]
  },
  {
    id: 'uin2704',
    firstName: 'Uinspirert Rektangulær',
    lastName: 'Sykkel',
    fullName: 'Uinspirert Rektangulær Sykkel',
    birthdate: '2004-04-27T00:00:00.000Z',
    username: 'uin2704',
    mail: 'uin2704@skole.vtfk.no',
    mobile: 4794567891,
    isContactTeacher: false,
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:1HOA',
    classShortId: '1HOA',
    programomraade: {
      kode: 'HSHSF1----',
      type: 'yrkesfaglig',
      tittel: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      },
      kortform: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      }
    },
    utdanningsprogram: {
      kode: 'HS',
      type: 'yrkesfaglig',
      tittel: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      },
      kortform: {
        en: 'Helse- og oppvekstfag',
        nb: 'Helse- og oppvekstfag',
        nn: 'Helse- og oppvekstfag'
      }
    },
    groups: [{
      id: '1_1HOA_TESVS@38099',
      type: 'basisgruppe',
      name: '1HOA',
      groupId: 'TESVS:1HOA',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs'
    },
    {
      id: '2_1ENYA/ENG1009_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1ENYA/ENG1009',
      groupId: 'TESVS:1ENYA/ENG1009',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'ENG1009',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/ENG1009',
        tittel: {
          en: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nb: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nn: 'Engelsk, Vg1 yrkesfaglege utdanningprogram'
        },
        kortform: {
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      }
    },
    {
      id: '2_1MPYA/MAT1117_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1MPYA/MAT1117',
      groupId: 'TESVS:1MPYA/MAT1117',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'MAT1117',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/MAT1117',
        tittel: {
          en: 'Matematikk 1P-Y  HS',
          nb: 'Matematikk 1P-Y  HS',
          nn: 'Matematikk 1P-Y  HS'
        },
        kortform: {
          en: 'Matematikk 1P-Y',
          nb: 'Matematikk 1P-Y',
          nn: 'Matematikk 1P-Y'
        }
      }
    },
    {
      id: '2_1HOA/KLFAG_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/KLFAG',
      groupId: 'TESVS:1HOA/KLFAG',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: '1HOA/KLFAG',
        kortform: {
          en: 'Læreplan generell del',
          nb: 'Læreplan generell del'
        }
      }
    },
    {
      id: '2_1HOA/HSF1008_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/HSF1008',
      groupId: 'TESVS:1HOA/HSF1008',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HSF1008',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HSF1008',
        tittel: {
          en: 'Yrkesliv i helse- og oppvekstfag',
          nb: 'Yrkesliv i helse- og oppvekstfag',
          nn: 'Yrkesliv i helse- og oppvekstfag'
        },
        kortform: {
          en: 'Yrkesliv i helse- og oppv.fag',
          nb: 'Yrkesliv i helse- og oppv.fag',
          nn: 'Yrkesliv i helse- og oppv.fag'
        }
      }
    },
    {
      id: '2_1HOA/HSF1006_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/HSF1006',
      groupId: 'TESVS:1HOA/HSF1006',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HSF1006',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HSF1006',
        tittel: {
          en: 'Helsefremmende arbeid',
          nb: 'Helsefremmende arbeid',
          nn: 'Helsefremjande arbeid'
        },
        kortform: {
          en: 'Helsefremmende arbeid',
          nb: 'Helsefremmende arbeid',
          nn: 'Helsefremjande arbeid'
        }
      }
    },
    {
      id: '2_1HOA/KRO1017_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/KRO1017',
      groupId: 'TESVS:1HOA/KRO1017',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'KRO1017',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/KRO1017',
        tittel: {
          en: 'Kroppsøving Vg1',
          nb: 'Kroppsøving Vg1',
          nn: 'Kroppsøving Vg1'
        },
        kortform: {
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      }
    },
    {
      id: '2_1HOA/YFF4106_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/YFF4106',
      groupId: 'TESVS:1HOA/YFF4106',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'YFF4106',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/YFF4106',
        tittel: {
          en: 'Yrkesfaglig fordypning Vg1',
          nb: 'Yrkesfaglig fordypning Vg1',
          nn: 'Yrkesfagleg fordjuping Vg1'
        },
        kortform: {
          en: 'Yrkesfaglig fordypning Vg1',
          nb: 'Yrkesfaglig fordypning Vg1',
          nn: 'Yrkesfagleg fordjuping Vg1'
        }
      }
    },
    {
      id: '2_1HOA/NAT1011_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/NAT1011',
      groupId: 'TESVS:1HOA/NAT1011',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'NAT1011',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/NAT1011',
        tittel: {
          en: 'Naturfag Vg1 HS',
          nb: 'Naturfag Vg1 HS',
          nn: 'Naturfag Vg1 HS'
        },
        kortform: {
          en: 'Naturfag',
          nb: 'Naturfag',
          nn: 'Naturfag'
        }
      }
    },
    {
      id: '2_1HOA/HSF1007_TESVS@38099',
      type: 'undervisningsgruppe',
      name: '1HOA/HSF1007',
      groupId: 'TESVS:1HOA/HSF1007',
      schoolId: 'TESVS@38099',
      schoolName: 'Testen videregående skole',
      schoolShortName: 'Testen vgs',
      grep: {
        kode: 'HSF1007',
        dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/HSF1007',
        tittel: {
          en: 'Kommunikasjon og samhandling',
          nb: 'Kommunikasjon og samhandling',
          nn: 'Kommunikasjon og samhandling'
        },
        kortform: {
          en: 'Kommunikasjon og samhandling',
          nb: 'Kommunikasjon og samhandling',
          nn: 'Kommunikasjon og samhandling'
        }
      }
    }
    ]
  }
]

export const TEACHERS = [
  {
    id: 'pre0711',
    username: 'pre0711',
    fullName: 'Presis Damesykkel',
    firstName: 'Presis',
    lastName: 'Damesykkel',
    mail: 'presis.damesykkel@vtfk.no',
    isContactTeacher: true,
    relatedGroupIds: [
      '1_1HOA_TESVS@38099',
      '2_1HOA/ATF1_TESVS@38099',
      '2_1HOA/ORD1_TESVS@38099',
      '2_1HOA/KLFAG_TESVS@38099',
      '2_1HOA/YFF4106_TESVS@38099',
      '2_1HOA/NAT1011_TESVS@38099',
      '2_1HOA/HSF1006_TESVS@38099'
    ]
  },
  {
    id: 'fal0309',
    username: 'fal0309',
    fullName: 'Falsk Handlekraft',
    firstName: 'Falsk',
    lastName: 'Handlekraft',
    mail: 'falsk.handlekraft@vtfk.no',
    isContactTeacher: false,
    relatedGroupIds: [
      '2_1ENYA/ENG1009_TESVS@38099'
    ]
  },
  {
    id: 'vik2606',
    username: 'vik2606',
    fullName: 'Viktig Kjærlig',
    firstName: 'Viktig',
    lastName: 'Kjærlig',
    mail: 'viktig.kaerlig@vtfk.no',
    isContactTeacher: false,
    relatedGroupIds: [
      '2_1HOA/YFF4106_TESVS@38099',
      '2_1HOA/HSF1006_TESVS@38099'
    ]
  },
  {
    id: 'rus26021',
    username: 'rus26021',
    fullName: 'Ru Sovealkove',
    firstName: 'Ru',
    lastName: 'Sovealkove',
    mail: 'ru.sovealkove@vtfk.no',
    mobile: 4748048048,
    isContactTeacher: false,
    relatedGroupIds: [
      '2_1HOA/HSF1007_TESVS@38099'
    ]
  },
  {
    id: 'opp1805',
    username: 'opp1805',
    fullName: 'Oppfyllende Kråke',
    firstName: 'Oppfyllende',
    lastName: 'Kråke',
    mail: 'oppfyllende.krake@vtfk.no',
    mobile: 4791111119,
    isContactTeacher: false,
    relatedGroupIds: [
      '2_1HOA/HSF1008_TESVS@38099'
    ]
  },
  {
    id: 'skj1207',
    username: 'skj1207',
    fullName: 'Skjønn Initiativrik Plikt',
    firstName: 'Skjønn Initiativrik',
    lastName: 'Plikt',
    mail: 'skjoenn.initiativrik.plikt@vtfk.no',
    mobile: 4799779977,
    isContactTeacher: false,
    relatedGroupIds: [
      '2_1HOA/KRO1017_TESVS@38099',
      '2_2STB/KRO1005_TESVS@38099'
    ]
  },
  {
    id: 'tri0308',
    username: 'tri0308',
    fullName: 'Trine Testesen',
    firstName: 'Trine',
    lastName: 'Testesen',
    mail: 'trine.testesen@vtfk.no',
    mobile: 4794949494,
    isContactTeacher: false,
    relatedGroupIds: [
      '2_1HOA/YFF4106_TESVS@38099',
      '1_2STB_TESVS@38099',
      '2_2STB/KLFAG_TESVS@38099',
      '2_2STB/ATF2_TESVS@38099',
      '2_2STB/ORD2_TESVS@38099',
      '2_2STB/NOR1208_TESVS@38099'
    ]
  },
  {
    id: 'bev0304',
    username: 'bev0304',
    fullName: 'Bevisst Turbin',
    firstName: 'Bevisst',
    lastName: 'Turbin',
    mail: 'bevisst.turbin@vtfk.no',
    mobile: 4795959595,
    isContactTeacher: false,
    relatedGroupIds: [
      '2_1MPYA/MAT1117_TESVS@38099'
    ]
  },
  {
    id: 'use0306',
    username: 'use0306',
    fullName: 'Usedvanlig Eske',
    firstName: 'Usedvanlig',
    lastName: 'Eske',
    mail: 'usedvanlig.eske@vtfk.no',
    isContactTeacher: false,
    relatedGroupIds: [
      '2_2FY1A/REA3004_TESVS@38099'
    ]
  },
  {
    id: 'fly2507',
    username: 'fly2507',
    fullName: 'Flyktig Logg',
    firstName: 'Flyktig',
    lastName: 'Logg',
    mail: 'flyktig.logg@vtfk.no',
    isContactTeacher: false,
    relatedGroupIds: [
      '2_2TY2B/FSP5122_TESVS@38099'
    ]
  },
  {
    id: 'bar0407',
    username: 'bar0407',
    fullName: 'Barmhjertig Eplekake',
    firstName: 'Barmhjertig',
    lastName: 'Eplekake',
    mail: 'barmhjertig.eplekake@vtfk.no',
    mobile: 4745000054,
    isContactTeacher: false,
    relatedGroupIds: [
      '2_2IT1/REA3014_TESVS@38099'
    ]
  },
  {
    id: 'dis0904',
    username: 'dis0904',
    fullName: 'Diskret Telefonkiosk',
    firstName: 'Diskret',
    lastName: 'Telefonkiosk',
    mail: 'diskret.telefonkiosk@vtfk.no',
    isContactTeacher: false,
    relatedGroupIds: [
      '2_2KJ1B/REA3011_TESVS@38099'
    ]
  },
  {
    id: 'ven2411',
    username: 'ven2411',
    fullName: 'Vennlig Arm',
    firstName: 'Vennlig',
    lastName: 'Arm',
    mail: 'vennlig.arm@vtfk.no',
    isContactTeacher: false,
    relatedGroupIds: [
      '2_2MR1B/REA3022_TESVS@38099'
    ]
  },
  {
    id: 'sto3006',
    username: 'sto3006',
    fullName: 'Stolt Komplisert Blindvegsjiraff',
    firstName: 'Stolt Komplisert',
    lastName: 'Blindvegsjiraff',
    mail: 'stolt.blindvegsjiraff@vtfk.no',
    mobile: 4793949494,
    isContactTeacher: false,
    relatedGroupIds: [
      '2_2STB/HIS1001_TESVS@38099'
    ]
  },
  {
    id: 'kra0801',
    username: 'kra0801',
    fullName: 'Kranglete Sykkel',
    firstName: 'Kranglete',
    lastName: 'Sykkel',
    mail: 'kra0801@skole.vtfk.no',
    isContactTeacher: false,
    relatedGroupIds: [
      '2_2STB/HIS1001_TESVS@38099'
    ]
  }
]

export const CLASSES = [
  {
    id: '1_2STB_TESVS@38099',
    type: 'basisgruppe',
    name: '2STB',
    groupId: 'TESVS:2STB',
    schoolId: 'TESVS@38099',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs'
  },
  {
    id: '2_2HOS/NOR1208_TESVS@38099',
    type: 'undervisningsgruppe',
    name: '2HOS/NOR1208',
    groupId: 'TESVS:2HOS/NOR1208',
    schoolId: 'TESVS@38099',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    grep: {
      kode: 'NOR1208',
      dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/NOR1208',
      tittel: {
        en: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
        nb: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
        nn: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
      },
      kortform: {
        en: 'Norsk hovedmål, skriftlig',
        nb: 'Norsk hovedmål, skriftlig',
        nn: 'Norsk hovudmål, skriftleg'
      }
    }
  },
  {
    id: '2_1GK_TESVS@38099',
    type: 'undervisningsgruppe',
    name: '1GK',
    groupId: 'TESVS:1GK',
    schoolId: 'TESVS@38099',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    grep: {
      kode: '1GK',
      kortform: {
        en: 'Grunnkompetanse',
        nb: 'Grunnkompetanse'
      }
    }
  },
  {
    id: '2_2STB/KLFAG_TESVS@38099',
    type: 'undervisningsgruppe',
    name: '2STB/KLFAG',
    groupId: 'TESVS:2STB/KLFAG',
    schoolId: 'TESVS@38099',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    grep: {
      kode: '2STB/KLFAG',
      kortform: {
        en: 'Læreplan generell del',
        nb: 'Læreplan generell del'
      }
    }
  },
  {
    id: '2_1HOA/YFF4106_TESVS@38099',
    type: 'undervisningsgruppe',
    name: '1HOA/YFF4106',
    groupId: 'TESVS:1HOA/YFF4106',
    schoolId: 'TESVS@38099',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    grep: {
      kode: 'YFF4106',
      dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/YFF4106',
      tittel: {
        en: 'Yrkesfaglig fordypning Vg1',
        nb: 'Yrkesfaglig fordypning Vg1',
        nn: 'Yrkesfagleg fordjuping Vg1'
      },
      kortform: {
        en: 'Yrkesfaglig fordypning Vg1',
        nb: 'Yrkesfaglig fordypning Vg1',
        nn: 'Yrkesfagleg fordjuping Vg1'
      }
    }
  },
  {
    id: '2_2STB/NOR1208_TESVS@38099',
    type: 'undervisningsgruppe',
    name: '2STB/NOR1208',
    groupId: 'TESVS:2STB/NOR1208',
    schoolId: 'TESVS@38099',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    grep: {
      kode: 'NOR1208',
      dataUrl: 'https://data.udir.no/kl06/v201906/fagkoder/NOR1208',
      tittel: {
        en: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
        nb: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
        nn: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
      },
      kortform: {
        en: 'Norsk hovedmål, skriftlig',
        nb: 'Norsk hovedmål, skriftlig',
        nn: 'Norsk hovudmål, skriftleg'
      }
    }
  }
]

export const DOCUMENTS = [
  {
    _id: '5fa2aeb54b1f46f7ad4fb84a',
    created: {
      timestamp: 1601557954198,
      username: 'rus26021'
    },
    modified: [
      {
        timestamp: 1601557954198,
        username: 'rus26021'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje'
    },
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove',
      firstName: 'Ru',
      lastName: 'Sovealkove'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601557954198,
        status: 'queued'
      },
      {
        timestamp: 1601557954218,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5cc80a6dadedfc7fe',
    created: {
      timestamp: 1601490382619,
      username: 'vik2606'
    },
    modified: [
      {
        timestamp: 1601490382619,
        username: 'vik2606'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du forstyrrer undervisning eller skoleaktivitet'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601490382619,
        status: 'queued'
      },
      {
        timestamp: 1601490382629,
        status: 'sent'
      },
      {
        timestamp: 1601490382639,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb58040f6ca7cba5fb0',
    created: {
      timestamp: 1600258358720,
      username: 'pre0711'
    },
    modified: [
      {
        timestamp: 1600258358720,
        username: 'pre0711'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 2. termin',
      reasons: [
        'Du har brutt skolens ordensreglement'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600258358720,
        status: 'queued'
      },
      {
        timestamp: 1600258358730,
        status: 'sent'
      },
      {
        timestamp: 1600258358740,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb52eec1257c9959c32',
    created: {
      timestamp: 1600809487966,
      username: 'fly2507'
    },
    modified: [
      {
        timestamp: 1600809487966,
        username: 'fly2507'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist'
    },
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg',
      firstName: 'Flyktig',
      lastName: 'Logg'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600809487966,
        status: 'queued'
      },
      {
        timestamp: 1600809487976,
        status: 'sent'
      },
      {
        timestamp: 1600809487986,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb57f0f0f2051bf8bc9',
    created: {
      timestamp: 1602865392823,
      username: 'pre0711'
    },
    modified: [
      {
        timestamp: 1602865392823,
        username: 'pre0711'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1602865392823,
        status: 'queued'
      },
      {
        timestamp: 1602865392843,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5e863b8e3e27c5239',
    created: {
      timestamp: 1600650072239,
      username: 'fly2507'
    },
    modified: [
      {
        timestamp: 1600650072239,
        username: 'fly2507'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg',
      firstName: 'Flyktig',
      lastName: 'Logg'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600650072239,
        status: 'queued'
      },
      {
        timestamp: 1600650072249,
        status: 'sent'
      },
      {
        timestamp: 1600650072259,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5c1c52683b6ee0789',
    created: {
      timestamp: 1602495682375,
      username: 'vik2606'
    },
    modified: [
      {
        timestamp: 1602495682375,
        username: 'vik2606'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har manglende eller for sen innlevering av arbeid',
        'Du har udokumentert fravær'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1602495682375,
        status: 'queued'
      },
      {
        timestamp: 1602495682385,
        status: 'sent'
      },
      {
        timestamp: 1602495682395,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb519aa565a82d5126b',
    created: {
      timestamp: 1599453926144,
      username: 'sto3006'
    },
    modified: [
      {
        timestamp: 1599453926144,
        username: 'sto3006'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599453926144,
        status: 'queued'
      },
      {
        timestamp: 1599453926164,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5c27778c41f8daea2',
    created: {
      timestamp: 1599030208075,
      username: 'kra0801'
    },
    modified: [
      {
        timestamp: 1599030208075,
        username: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 2. termin',
      reasons: [
        'Du har manglende eller for sen innlevering av arbeid',
        'Du har udokumentert fravær'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599030208075,
        status: 'queued'
      },
      {
        timestamp: 1599030208085,
        status: 'sent'
      },
      {
        timestamp: 1599030208095,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb566d7f2b99b066c50',
    created: {
      timestamp: 1601402806095,
      username: 'bar0407'
    },
    modified: [
      {
        timestamp: 1601402806095,
        username: 'bar0407'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake',
      firstName: 'Barmhjertig',
      lastName: 'Eplekake'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601402806095,
        status: 'queued'
      },
      {
        timestamp: 1601402806115,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5f43d2624fad36cf8',
    created: {
      timestamp: 1598732617838,
      username: 'use0306'
    },
    modified: [
      {
        timestamp: 1598732617838,
        username: 'use0306'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske',
      firstName: 'Usedvanlig',
      lastName: 'Eske'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598732617838,
        status: 'queued'
      },
      {
        timestamp: 1598732617848,
        status: 'sent'
      },
      {
        timestamp: 1598732617858,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5c41540f576f3ae47',
    created: {
      timestamp: 1597953142230,
      username: 'kra0801'
    },
    modified: [
      {
        timestamp: 1597953142230,
        username: 'kra0801'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1597953142230,
        status: 'queued'
      },
      {
        timestamp: 1597953142250,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb581482f15154eec28',
    created: {
      timestamp: 1598833191091,
      username: 'use0306'
    },
    modified: [
      {
        timestamp: 1598833191091,
        username: 'use0306'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske',
      firstName: 'Usedvanlig',
      lastName: 'Eske'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Standpunktkarakter',
      reasons: [
        'Du utviser provoserende atferd mot ansatte eller medelever',
        'Du har fusket'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598833191091,
        status: 'queued'
      },
      {
        timestamp: 1598833191101,
        status: 'sent'
      },
      {
        timestamp: 1598833191111,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5abf4a83758083596',
    created: {
      timestamp: 1599206972644,
      username: 'skj1207'
    },
    modified: [
      {
        timestamp: 1599206972644,
        username: 'skj1207'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599206972644,
        status: 'queued'
      },
      {
        timestamp: 1599206972654,
        status: 'sent'
      },
      {
        timestamp: 1599206972664,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5670cc04a5f875ee2',
    created: {
      timestamp: 1597777699304,
      username: 'fal0309'
    },
    modified: [
      {
        timestamp: 1597777699304,
        username: 'fal0309'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1597777699304,
        status: 'queued'
      },
      {
        timestamp: 1597777699324,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb59694f1fea9d2abe0',
    created: {
      timestamp: 1597971632052,
      username: 'sto3006'
    },
    modified: [
      {
        timestamp: 1597971632052,
        username: 'sto3006'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1597971632052,
        status: 'queued'
      },
      {
        timestamp: 1597971632072,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb514b2b4b11ce8ea56',
    created: {
      timestamp: 1599313534086,
      username: 'vik2606'
    },
    modified: [
      {
        timestamp: 1599313534086,
        username: 'vik2606'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599313534086,
        status: 'queued'
      },
      {
        timestamp: 1599313534096,
        status: 'sent'
      },
      {
        timestamp: 1599313534106,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb51f7547e4fea1e054',
    created: {
      timestamp: 1601746377500,
      username: 'skj1207'
    },
    modified: [
      {
        timestamp: 1601746377500,
        username: 'skj1207'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har manglende vurderingsgrunnlag'
      ],
      courses: [
        'TESVS:2STB/NOR1208',
        'TESVS:2HOS/NOR1208'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601746377500,
        status: 'queued'
      },
      {
        timestamp: 1601746377510,
        status: 'sent'
      },
      {
        timestamp: 1601746377520,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb580cf494aa67f6607',
    created: {
      timestamp: 1601917341017,
      username: 'bar0407'
    },
    modified: [
      {
        timestamp: 1601917341017,
        username: 'bar0407'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake',
      firstName: 'Barmhjertig',
      lastName: 'Eplekake'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 2. termin',
      reasons: [
        'Du har manglende vurderingsgrunnlag'
      ],
      courses: [
        'TESVS:2HOS/NOR1208',
        'TESVS:2STB/NOR1208'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601917341017,
        status: 'queued'
      },
      {
        timestamp: 1601917341027,
        status: 'sent'
      },
      {
        timestamp: 1601917341037,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb580e6d88abdb2cac5',
    created: {
      timestamp: 1604072226472,
      username: 'use0306'
    },
    modified: [
      {
        timestamp: 1604072226472,
        username: 'use0306'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske',
      firstName: 'Usedvanlig',
      lastName: 'Eske'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Standpunktkarakter',
      reasons: [
        'Du utviser provoserende atferd mot ansatte eller medelever',
        'Du har benyttet rusmidler i skoletida'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1604072226472,
        status: 'queued'
      },
      {
        timestamp: 1604072226482,
        status: 'sent'
      },
      {
        timestamp: 1604072226492,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5b108eb85bc98af20',
    created: {
      timestamp: 1600960994640,
      username: 'skj1207'
    },
    modified: [
      {
        timestamp: 1600960994640,
        username: 'skj1207'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600960994640,
        status: 'queued'
      },
      {
        timestamp: 1600960994650,
        status: 'sent'
      },
      {
        timestamp: 1600960994660,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb504d7f478eab11077',
    created: {
      timestamp: 1602870609990,
      username: 'pre0711'
    },
    modified: [
      {
        timestamp: 1602870609990,
        username: 'pre0711'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1602870609990,
        status: 'queued'
      },
      {
        timestamp: 1602870610000,
        status: 'sent'
      },
      {
        timestamp: 1602870610010,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5bbaf170672f36c90',
    created: {
      timestamp: 1604347514248,
      username: 'fal0309'
    },
    modified: [
      {
        timestamp: 1604347514248,
        username: 'fal0309'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du er for sen til undervisning',
        'Du har udokumentert fravær'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1604347514248,
        status: 'queued'
      },
      {
        timestamp: 1604347514258,
        status: 'sent'
      },
      {
        timestamp: 1604347514268,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5e2a045dd3dc8baa2',
    created: {
      timestamp: 1602292228780,
      username: 'bev0304'
    },
    modified: [
      {
        timestamp: 1602292228780,
        username: 'bev0304'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel'
    },
    teacher: {
      username: 'bev0304',
      name: 'Bevisst Turbin',
      firstName: 'Bevisst',
      lastName: 'Turbin'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1602292228780,
        status: 'queued'
      },
      {
        timestamp: 1602292228790,
        status: 'sent'
      },
      {
        timestamp: 1602292228800,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb517694cf13dc51c35',
    created: {
      timestamp: 1597928834727,
      username: 'bar0407'
    },
    modified: [
      {
        timestamp: 1597928834727,
        username: 'bar0407'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake',
      firstName: 'Barmhjertig',
      lastName: 'Eplekake'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1597928834727,
        status: 'queued'
      },
      {
        timestamp: 1597928834737,
        status: 'sent'
      },
      {
        timestamp: 1597928834747,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5bc55c90142ebafce',
    created: {
      timestamp: 1602006464562,
      username: 'tri0308'
    },
    modified: [
      {
        timestamp: 1602006464562,
        username: 'tri0308'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen',
      firstName: 'Trine',
      lastName: 'Testesen'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har udokumentert fravær',
        'Du har udokumentert fravær'
      ],
      courses: [
        'TESVS:2HOS/NOR1208'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1602006464562,
        status: 'queued'
      },
      {
        timestamp: 1602006464572,
        status: 'sent'
      },
      {
        timestamp: 1602006464582,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5ef40a0fefc0e7343',
    created: {
      timestamp: 1600277377532,
      username: 'fal0309'
    },
    modified: [
      {
        timestamp: 1600277377532,
        username: 'fal0309'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 2. termin',
      reasons: [
        'Du har brutt skolens ordensreglement'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600277377532,
        status: 'queued'
      },
      {
        timestamp: 1600277377542,
        status: 'sent'
      },
      {
        timestamp: 1600277377552,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5357d44b5fc1b306d',
    created: {
      timestamp: 1604186806754,
      username: 'fal0309'
    },
    modified: [
      {
        timestamp: 1604186806754,
        username: 'fal0309'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du utviser provoserende atferd mot ansatte eller medelever'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1604186806754,
        status: 'queued'
      },
      {
        timestamp: 1604186806764,
        status: 'sent'
      },
      {
        timestamp: 1604186806774,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5256392249990e39d',
    created: {
      timestamp: 1602818303334,
      username: 'pre0711'
    },
    modified: [
      {
        timestamp: 1602818303334,
        username: 'pre0711'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1602818303334,
        status: 'queued'
      },
      {
        timestamp: 1602818303354,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5d12c4d7432d6c135',
    created: {
      timestamp: 1602595420172,
      username: 'fal0309'
    },
    modified: [
      {
        timestamp: 1602595420172,
        username: 'fal0309'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Standpunktkarakter',
      reasons: [
        'Du har manglende vurderingsgrunnlag',
        'Du har udokumentert fravær'
      ],
      courses: [
        'TESVS:1HOA/YFF4106'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1602595420172,
        status: 'queued'
      },
      {
        timestamp: 1602595420182,
        status: 'sent'
      },
      {
        timestamp: 1602595420192,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb53e8019713248942f',
    created: {
      timestamp: 1603237798683,
      username: 'tri0308'
    },
    modified: [
      {
        timestamp: 1603237798683,
        username: 'tri0308'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen',
      firstName: 'Trine',
      lastName: 'Testesen'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Standpunktkarakter',
      reasons: [
        'Du har udokumentert fravær'
      ],
      courses: [
        'TESVS:2HOS/NOR1208',
        'TESVS:1GK'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1603237798683,
        status: 'queued'
      },
      {
        timestamp: 1603237798693,
        status: 'sent'
      },
      {
        timestamp: 1603237798703,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5f57123792bf3972f',
    created: {
      timestamp: 1601474996085,
      username: 'skj1207'
    },
    modified: [
      {
        timestamp: 1601474996085,
        username: 'skj1207'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601474996085,
        status: 'queued'
      },
      {
        timestamp: 1601474996095,
        status: 'sent'
      },
      {
        timestamp: 1601474996105,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb50e8d5a615d11a0d4',
    created: {
      timestamp: 1598133490679,
      username: 'ven2411'
    },
    modified: [
      {
        timestamp: 1598133490679,
        username: 'ven2411'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje'
    },
    teacher: {
      username: 'ven2411',
      name: 'Vennlig Arm',
      firstName: 'Vennlig',
      lastName: 'Arm'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Standpunktkarakter',
      reasons: [
        'Du har manglende vurderingsgrunnlag'
      ],
      courses: [
        'TESVS:2STB/KLFAG',
        'TESVS:1GK'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598133490679,
        status: 'queued'
      },
      {
        timestamp: 1598133490689,
        status: 'sent'
      },
      {
        timestamp: 1598133490699,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb59ae2e4ea9330ec0f',
    created: {
      timestamp: 1600352983308,
      username: 'opp1805'
    },
    modified: [
      {
        timestamp: 1600352983308,
        username: 'opp1805'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'opp1805',
      name: 'Oppfyllende Kråke',
      firstName: 'Oppfyllende',
      lastName: 'Kråke'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har benyttet rusmidler i skoletida'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600352983308,
        status: 'queued'
      },
      {
        timestamp: 1600352983318,
        status: 'sent'
      },
      {
        timestamp: 1600352983328,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb526b62413029e5f90',
    created: {
      timestamp: 1604478430700,
      username: 'use0306'
    },
    modified: [
      {
        timestamp: 1604478430700,
        username: 'use0306'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske',
      firstName: 'Usedvanlig',
      lastName: 'Eske'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1604478430700,
        status: 'queued'
      },
      {
        timestamp: 1604478430710,
        status: 'sent'
      },
      {
        timestamp: 1604478430720,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5d81a32ea10ae3fcb',
    created: {
      timestamp: 1603488966683,
      username: 'sto3006'
    },
    modified: [
      {
        timestamp: 1603488966683,
        username: 'sto3006'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1603488966683,
        status: 'queued'
      },
      {
        timestamp: 1603488966703,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb58b3608f8202cb3ef',
    created: {
      timestamp: 1601923442560,
      username: 'fal0309'
    },
    modified: [
      {
        timestamp: 1601923442560,
        username: 'fal0309'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601923442560,
        status: 'queued'
      },
      {
        timestamp: 1601923442580,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5d9822c3fc71856e1',
    created: {
      timestamp: 1600946652285,
      username: 'dis0904'
    },
    modified: [
      {
        timestamp: 1600946652285,
        username: 'dis0904'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk',
      firstName: 'Diskret',
      lastName: 'Telefonkiosk'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Standpunktkarakter',
      reasons: [
        'Du har manglende eller for sen innlevering av arbeid'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600946652285,
        status: 'queued'
      },
      {
        timestamp: 1600946652295,
        status: 'sent'
      },
      {
        timestamp: 1600946652305,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5a65dd58b9858beb5',
    created: {
      timestamp: 1598907632132,
      username: 'skj1207'
    },
    modified: [
      {
        timestamp: 1598907632132,
        username: 'skj1207'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 2. termin',
      reasons: [
        'Du utviser provoserende atferd mot ansatte eller medelever'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598907632132,
        status: 'queued'
      },
      {
        timestamp: 1598907632142,
        status: 'sent'
      },
      {
        timestamp: 1598907632152,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb56625ae735925775c',
    created: {
      timestamp: 1597796486937,
      username: 'dis0904'
    },
    modified: [
      {
        timestamp: 1597796486937,
        username: 'dis0904'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk',
      firstName: 'Diskret',
      lastName: 'Telefonkiosk'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1597796486937,
        status: 'queued'
      },
      {
        timestamp: 1597796486957,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb520d5e3042dc9cde7',
    created: {
      timestamp: 1599743332073,
      username: 'kra0801'
    },
    modified: [
      {
        timestamp: 1599743332073,
        username: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har udokumentert fravær'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599743332073,
        status: 'queued'
      },
      {
        timestamp: 1599743332083,
        status: 'sent'
      },
      {
        timestamp: 1599743332093,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb58c4337286a2c10ae',
    created: {
      timestamp: 1598039525189,
      username: 'fal0309'
    },
    modified: [
      {
        timestamp: 1598039525189,
        username: 'fal0309'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598039525189,
        status: 'queued'
      },
      {
        timestamp: 1598039525199,
        status: 'sent'
      },
      {
        timestamp: 1598039525209,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5e56f2a05b8f5f6e6',
    created: {
      timestamp: 1598175435076,
      username: 'tri0308'
    },
    modified: [
      {
        timestamp: 1598175435076,
        username: 'tri0308'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen',
      firstName: 'Trine',
      lastName: 'Testesen'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598175435076,
        status: 'queued'
      },
      {
        timestamp: 1598175435086,
        status: 'sent'
      },
      {
        timestamp: 1598175435096,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5989a12ec168b7dc7',
    created: {
      timestamp: 1599146020639,
      username: 'skj1207'
    },
    modified: [
      {
        timestamp: 1599146020639,
        username: 'skj1207'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har ikke nødvendig skolemateriell klart til undervisning',
        'Du har udokumentert fravær',
        'Du har brutt skolens ordensreglement'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599146020639,
        status: 'queued'
      },
      {
        timestamp: 1599146020649,
        status: 'sent'
      },
      {
        timestamp: 1599146020659,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb57b7569b0c91f47ea',
    created: {
      timestamp: 1603095899820,
      username: 'use0306'
    },
    modified: [
      {
        timestamp: 1603095899820,
        username: 'use0306'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske',
      firstName: 'Usedvanlig',
      lastName: 'Eske'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Standpunktkarakter',
      reasons: [
        'Du har fusket',
        'Du utviser provoserende atferd mot ansatte eller medelever',
        'Du forstyrrer undervisning eller skoleaktivitet'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1603095899820,
        status: 'queued'
      },
      {
        timestamp: 1603095899830,
        status: 'sent'
      },
      {
        timestamp: 1603095899840,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb54d908a6d26279652',
    created: {
      timestamp: 1600364365628,
      username: 'rus26021'
    },
    modified: [
      {
        timestamp: 1600364365628,
        username: 'rus26021'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove',
      firstName: 'Ru',
      lastName: 'Sovealkove'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600364365628,
        status: 'queued'
      },
      {
        timestamp: 1600364365648,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb51b995bdc2d460717',
    created: {
      timestamp: 1598390881071,
      username: 'skj1207'
    },
    modified: [
      {
        timestamp: 1598390881071,
        username: 'skj1207'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Standpunktkarakter',
      reasons: [
        'Du har udokumentert fravær'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598390881071,
        status: 'queued'
      },
      {
        timestamp: 1598390881081,
        status: 'sent'
      },
      {
        timestamp: 1598390881091,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb516ca936ba748d550',
    created: {
      timestamp: 1601958525263,
      username: 'vik2606'
    },
    modified: [
      {
        timestamp: 1601958525263,
        username: 'vik2606'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601958525263,
        status: 'queued'
      },
      {
        timestamp: 1601958525283,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5e1998cf14be191c0',
    created: {
      timestamp: 1601305127595,
      username: 'dis0904'
    },
    modified: [
      {
        timestamp: 1601305127595,
        username: 'dis0904'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk',
      firstName: 'Diskret',
      lastName: 'Telefonkiosk'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601305127595,
        status: 'queued'
      },
      {
        timestamp: 1601305127605,
        status: 'sent'
      },
      {
        timestamp: 1601305127615,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5372aa80d2cfb9348',
    created: {
      timestamp: 1598453724856,
      username: 'tri0308'
    },
    modified: [
      {
        timestamp: 1598453724856,
        username: 'tri0308'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen',
      firstName: 'Trine',
      lastName: 'Testesen'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598453724856,
        status: 'queued'
      },
      {
        timestamp: 1598453724876,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5ee0cf028551f21e1',
    created: {
      timestamp: 1602462719313,
      username: 'rus26021'
    },
    modified: [
      {
        timestamp: 1602462719313,
        username: 'rus26021'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove',
      firstName: 'Ru',
      lastName: 'Sovealkove'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har fusket'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1602462719313,
        status: 'queued'
      },
      {
        timestamp: 1602462719323,
        status: 'sent'
      },
      {
        timestamp: 1602462719333,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5959c53386d411c97',
    created: {
      timestamp: 1600230827016,
      username: 'skj1207'
    },
    modified: [
      {
        timestamp: 1600230827016,
        username: 'skj1207'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600230827016,
        status: 'queued'
      },
      {
        timestamp: 1600230827026,
        status: 'sent'
      },
      {
        timestamp: 1600230827036,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5a0243ed25a9f142a',
    created: {
      timestamp: 1598707478054,
      username: 'kra0801'
    },
    modified: [
      {
        timestamp: 1598707478054,
        username: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 2. termin',
      reasons: [
        'Du har benyttet rusmidler i skoletida'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598707478054,
        status: 'queued'
      },
      {
        timestamp: 1598707478064,
        status: 'sent'
      },
      {
        timestamp: 1598707478074,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5f21749d5766174fb',
    created: {
      timestamp: 1597821508409,
      username: 'use0306'
    },
    modified: [
      {
        timestamp: 1597821508409,
        username: 'use0306'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske',
      firstName: 'Usedvanlig',
      lastName: 'Eske'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 2. termin',
      reasons: [
        'Du har udokumentert fravær',
        'Du har brutt skolens ordensreglement'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1597821508409,
        status: 'queued'
      },
      {
        timestamp: 1597821508419,
        status: 'sent'
      },
      {
        timestamp: 1597821508429,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb52d2f736b0df4f4c6',
    created: {
      timestamp: 1601151223154,
      username: 'vik2606'
    },
    modified: [
      {
        timestamp: 1601151223154,
        username: 'vik2606'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du er for sen til undervisning',
        'Du har manglende eller for sen innlevering av arbeid'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601151223154,
        status: 'queued'
      },
      {
        timestamp: 1601151223164,
        status: 'sent'
      },
      {
        timestamp: 1601151223174,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb55bb20671f45abd7e',
    created: {
      timestamp: 1600099240914,
      username: 'sto3006'
    },
    modified: [
      {
        timestamp: 1600099240914,
        username: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har ikke nødvendig skolemateriell klart til undervisning',
        'Du har udokumentert fravær'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600099240914,
        status: 'queued'
      },
      {
        timestamp: 1600099240924,
        status: 'sent'
      },
      {
        timestamp: 1600099240934,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb53e9b4efdd1a4c580',
    created: {
      timestamp: 1598428341261,
      username: 'pre0711'
    },
    modified: [
      {
        timestamp: 1598428341261,
        username: 'pre0711'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598428341261,
        status: 'queued'
      },
      {
        timestamp: 1598428341281,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5b2b8869105830a2c',
    created: {
      timestamp: 1599484407456,
      username: 'dis0904'
    },
    modified: [
      {
        timestamp: 1599484407456,
        username: 'dis0904'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk',
      firstName: 'Diskret',
      lastName: 'Telefonkiosk'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599484407456,
        status: 'queued'
      },
      {
        timestamp: 1599484407476,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5456b1ccb67fc6d41',
    created: {
      timestamp: 1603000236779,
      username: 'bev0304'
    },
    modified: [
      {
        timestamp: 1603000236779,
        username: 'bev0304'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel'
    },
    teacher: {
      username: 'bev0304',
      name: 'Bevisst Turbin',
      firstName: 'Bevisst',
      lastName: 'Turbin'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1603000236779,
        status: 'queued'
      },
      {
        timestamp: 1603000236799,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb57c46534bacb8460f',
    created: {
      timestamp: 1598424198048,
      username: 'sto3006'
    },
    modified: [
      {
        timestamp: 1598424198048,
        username: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har fusket',
        'Du har benyttet rusmidler i skoletida'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598424198048,
        status: 'queued'
      },
      {
        timestamp: 1598424198058,
        status: 'sent'
      },
      {
        timestamp: 1598424198068,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb570fa67453610bd6d',
    created: {
      timestamp: 1601282808947,
      username: 'dis0904'
    },
    modified: [
      {
        timestamp: 1601282808947,
        username: 'dis0904'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk',
      firstName: 'Diskret',
      lastName: 'Telefonkiosk'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Standpunktkarakter',
      reasons: [
        'Du har ikke nødvendig skolemateriell klart til undervisning'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1601282808947,
        status: 'queued'
      },
      {
        timestamp: 1601282808957,
        status: 'sent'
      },
      {
        timestamp: 1601282808967,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5d8ffc101ac615f4e',
    created: {
      timestamp: 1600506404763,
      username: 'tri0308'
    },
    modified: [
      {
        timestamp: 1600506404763,
        username: 'tri0308'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen',
      firstName: 'Trine',
      lastName: 'Testesen'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600506404763,
        status: 'queued'
      },
      {
        timestamp: 1600506404783,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb53a99f6e831697038',
    created: {
      timestamp: 1599981639613,
      username: 'vik2606'
    },
    modified: [
      {
        timestamp: 1599981639613,
        username: 'vik2606'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599981639613,
        status: 'queued'
      },
      {
        timestamp: 1599981639623,
        status: 'sent'
      },
      {
        timestamp: 1599981639633,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5f5d8b7f68a0d4154',
    created: {
      timestamp: 1598920368545,
      username: 'bar0407'
    },
    modified: [
      {
        timestamp: 1598920368545,
        username: 'bar0407'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake',
      firstName: 'Barmhjertig',
      lastName: 'Eplekake'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: true
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1598920368545,
        status: 'queued'
      },
      {
        timestamp: 1598920368565,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb51077cc49bc79c1b4',
    created: {
      timestamp: 1602497629119,
      username: 'bev0304'
    },
    modified: [
      {
        timestamp: 1602497629119,
        username: 'bev0304'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'bev0304',
      name: 'Bevisst Turbin',
      firstName: 'Bevisst',
      lastName: 'Turbin'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har manglende vurderingsgrunnlag'
      ],
      courses: [
        'TESVS:1HOA/YFF4106',
        'TESVS:2STB/KLFAG'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1602497629119,
        status: 'queued'
      },
      {
        timestamp: 1602497629129,
        status: 'sent'
      },
      {
        timestamp: 1602497629139,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb513f51e5ab2a5b8f5',
    created: {
      timestamp: 1600756351729,
      username: 'skj1207'
    },
    modified: [
      {
        timestamp: 1600756351729,
        username: 'skj1207'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 2. termin',
      reasons: [
        'Du utviser provoserende atferd mot ansatte eller medelever'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600756351729,
        status: 'queued'
      },
      {
        timestamp: 1600756351739,
        status: 'sent'
      },
      {
        timestamp: 1600756351749,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb52ccfd4b1f99d2284',
    created: {
      timestamp: 1599687535241,
      username: 'kra0801'
    },
    modified: [
      {
        timestamp: 1599687535241,
        username: 'kra0801'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      samtale: false
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599687535241,
        status: 'queued'
      },
      {
        timestamp: 1599687535251,
        status: 'sent'
      },
      {
        timestamp: 1599687535261,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb5ea579d71d0f2303e',
    created: {
      timestamp: 1600336414748,
      username: 'fal0309'
    },
    modified: [
      {
        timestamp: 1600336414748,
        username: 'fal0309'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 1. termin',
      reasons: [
        'Du har brutt skolens ordensreglement',
        'Du forlater undervisning uten avklaring med lærer',
        'Du har brutt skolens ordensreglement'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1600336414748,
        status: 'queued'
      },
      {
        timestamp: 1600336414758,
        status: 'sent'
      },
      {
        timestamp: 1600336414768,
        status: 'archived'
      }
    ]
  },
  {
    _id: '5fa2aeb597cd0c99af620558',
    created: {
      timestamp: 1599031288490,
      username: 'rus26021'
    },
    modified: [
      {
        timestamp: 1599031288490,
        username: 'rus26021'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje'
    },
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove',
      firstName: 'Ru',
      lastName: 'Sovealkove'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole'
    },
    content: {
      period: 'Halvårsvurdering 2. termin',
      reasons: [
        'Du har udokumentert fravær',
        'Du er for sen til undervisning',
        'Du har udokumentert fravær'
      ]
    },
    encrypted: false,
    isQueued: false,
    status: [
      {
        timestamp: 1599031288490,
        status: 'queued'
      },
      {
        timestamp: 1599031288500,
        status: 'sent'
      },
      {
        timestamp: 1599031288510,
        status: 'archived'
      }
    ]
  }
]

export const STATS_TYPE = [
  {
    type: 'notat',
    variants: [
      {
        variant: 'notat',
        count: 222
      }
    ],
    count: 222
  },
  {
    type: 'samtale',
    variants: [
      {
        variant: 'samtale',
        count: 279
      },
      {
        variant: 'ikke-samtale',
        count: 10
      }
    ],
    count: 289
  },
  {
    type: 'varsel',
    variants: [
      {
        variant: 'fag',
        count: 750
      },
      {
        variant: 'orden',
        count: 329
      },
      {
        variant: 'atferd',
        count: 329
      }
    ],
    count: 1408
  }
]

export const STATS_SCHOOL = [
  {
    id: 'TESVS',
    name: 'Testen videregående skole',
    types: [
      {
        type: 'samtale',
        count: 246
      },
      {
        type: 'varsel',
        count: 282
      },
      {
        type: 'notat',
        count: 75
      }
    ],
    count: 603
  },
  {
    id: 'FYLLVS',
    name: 'Fylkeskommunal videregående skole',
    types: [
      {
        type: 'samtale',
        count: 43
      },
      {
        type: 'varsel',
        count: 1126
      },
      {
        type: 'notat',
        count: 147
      }
    ],
    count: 1316
  }
]

export const STATS_TYPE_SCHOOL = [
  {
    type: 'notat',
    schools: [
      {
        id: 'TESVS',
        name: 'Testen videregående skole',
        count: 75
      },
      {
        id: 'FYLLVS',
        name: 'Fylkeskommunal videregående skole',
        count: 147
      }
    ],
    count: 222
  },
  {
    type: 'samtale',
    schools: [
      {
        id: 'TESVS',
        name: 'Testen videregående skole',
        count: 246
      },
      {
        id: 'FYLLVS',
        name: 'Fylkeskommunal videregående skole',
        count: 43
      }
    ],
    count: 289
  },
  {
    type: 'varsel',
    schools: [
      {
        id: 'TESVS',
        name: 'Testen videregående skole',
        count: 282
      },
      {
        id: 'FYLLVS',
        name: 'Fylkeskommunal videregående skole',
        count: 1126
      }
    ],
    count: 1408
  }
]

export const getRandomObjectId = function () {
  const timestamp = (new Date().getTime() / 1000 | 0).toString(16)
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16)
  }).toLowerCase()
}
