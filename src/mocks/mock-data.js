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
    level: 'VG2',
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
    level: 'VG2',
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
    level: 'VG2',
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
    level: 'VG2',
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
    level: 'VG2',
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
    level: 'VG1',
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
    level: 'VG1',
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
    level: 'VG1',
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
    _id: '60186ae3ac2f891274e2abe7',
    created: {
      timestamp: 1581529615819,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1581529615819,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'yff',
    variant: 'bekreftelse',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    "content": {
      "bekreftelse": {
        "oppmotested": "Whatever",
        "kopiPrEpost": ["runely@vtfk.no"],
        "fraDato": "02.02.2021",
        "tilDato": "03.02.2021",
        "daysPerWeek": "17",
        "startTid": "08:00",
        "sluttTid": "16:00",
        "kontaktpersonData": [{
          "navn": "Whatever",
          "telefon": "81549300",
          "epost": "nei@nei.no",
          "avdeling": "Whatever"
        }],
        "parorendeData": [{
          "navn": "Allah",
          "telefon": "Sakesak"
        }],
        "bedriftsNavn": "VESTFOLD OG TELEMARK FYLKESKOMMUNE",
        "bedriftsData": {
          "organisasjonsNummer": "821227062",
          "navn": "VESTFOLD OG TELEMARK FYLKESKOMMUNE",
          "adresse": "Postboks 2844",
          "postnummer": "3702",
          "poststed": "SKIEN",
          "avdeling": "Whatever"
        }
      },
      "utdanningsprogram": {
        "kode": "HS",
        "type": "yrkesfaglig",
        "tittel": {
          "en": "Helse- og oppvekstfag",
          "nb": "Helse- og oppvekstfag",
          "nn": "Helse- og oppvekstfag"
        },
        "kortform": {
          "en": "Helse- og oppvekstfag",
          "nb": "Helse- og oppvekstfag",
          "nn": "Helse- og oppvekstfag"
        }
      },
      "level": "VG1",
      "year": "2020/2021"
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1581529605826
      },
      {
        status: 'sent',
        timestamp: 1581529609277
      },
      {
        status: 'archived',
        timestamp: 1581529615819
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3ac2f891274e2abe7',
    created: {
      timestamp: 1581529615819,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1581529615819,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_1ENYA/ENG1009_TESVS@38099',
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1581529605826
      },
      {
        status: 'sent',
        timestamp: 1581529609277
      },
      {
        status: 'archived',
        timestamp: 1581529615819
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3b0248728b2dc18a8',
    created: {
      timestamp: 1585327707015,
      createdBy: 'vik2606'
    },
    modified: [
      {
        timestamp: 1585327707015,
        modifiedBy: 'vik2606'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig',
      mobile: '',
      mail: 'viktig.kaerlig@vtfk.no'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel',
      mobile: '4794567891',
      mail: 'uin2704@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '03',
          nb: 'Du har manglende eller for sen innlevering av arbeid',
          nn: 'Du har manglande eller for sein innlevering av arbeid',
          en: 'Du har manglende eller for sen innlevering av arbeid'
        },
        {
          id: '04',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fravær',
          en: 'Du har udokumentert fravær'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1585327697022
      },
      {
        status: 'sent',
        timestamp: 1585327700473
      },
      {
        status: 'archived',
        timestamp: 1585327707015
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae384492af29edcd9a9',
    created: {
      timestamp: 1606840804789,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1606840804789,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1606840794796
      },
      {
        status: 'sent',
        timestamp: 1606840798247
      },
      {
        status: 'archived',
        timestamp: 1606840804789
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3ee0ac21670ce0c9c',
    created: {
      timestamp: 1592561861911,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1592561861911,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '05',
          nb: 'Du har benyttet rusmidler i skoletida',
          nn: 'Du har nytta rusmiddel i skuletida',
          en: 'Du har benyttet rusmidler i skoletida'
        },
        {
          id: '04',
          nb: 'Du har fusket',
          nn: 'Du har fuska',
          en: 'Du har fusket'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1592561851918
      },
      {
        status: 'sent',
        timestamp: 1592561855369
      },
      {
        status: 'archived',
        timestamp: 1592561861911
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3f523207210c553b8',
    created: {
      timestamp: 1612364119389,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1612364119389,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko',
      mobile: '4747474747',
      mail: 'tro1407@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1612364112847
      },
      {
        status: 'archived',
        timestamp: 1612364119389
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3f2ff1d1a97ba809e',
    created: {
      timestamp: 1612457685519,
      createdBy: 'fly2507'
    },
    modified: [
      {
        timestamp: 1612457685519,
        modifiedBy: 'fly2507'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg',
      firstName: 'Flyktig',
      lastName: 'Logg',
      mobile: '',
      mail: 'flyktig.logg@vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1612457675526
      },
      {
        status: 'sent',
        timestamp: 1612457678977
      },
      {
        status: 'archived',
        timestamp: 1612457685519
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae385436baebe99677e',
    created: {
      timestamp: 1607674557389,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1607674557389,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko',
      mobile: '4747474747',
      mail: 'tro1407@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1607674550847
      },
      {
        status: 'archived',
        timestamp: 1607674557389
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae36e5705fad1b74471',
    created: {
      timestamp: 1619771698657,
      createdBy: 'rus26021'
    },
    modified: [
      {
        timestamp: 1619771698657,
        modifiedBy: 'rus26021'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove',
      firstName: 'Ru',
      lastName: 'Sovealkove',
      mobile: '4748048048',
      mail: 'ru.sovealkove@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_1ENYA/ENG1009_TESVS@38099',
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1619771688664
      },
      {
        status: 'sent',
        timestamp: 1619771692115
      },
      {
        status: 'archived',
        timestamp: 1619771698657
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae30f342f0e15c65684',
    created: {
      timestamp: 1581064478876,
      createdBy: 'vik2606'
    },
    modified: [
      {
        timestamp: 1581064478876,
        modifiedBy: 'vik2606'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig',
      mobile: '',
      mail: 'viktig.kaerlig@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1581064472334
      },
      {
        status: 'archived',
        timestamp: 1581064478876
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae37580bc4498310050',
    created: {
      timestamp: 1611758081165,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1611758081165,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_1ENYA/ENG1009_TESVS@38099',
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1611758071172
      },
      {
        status: 'sent',
        timestamp: 1611758074623
      },
      {
        status: 'archived',
        timestamp: 1611758081165
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae37ae8c0abe609142a',
    created: {
      timestamp: 1590751124627,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1590751124627,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '05',
          nb: 'Du har benyttet rusmidler i skoletida',
          nn: 'Du har nytta rusmiddel i skuletida',
          en: 'Du har benyttet rusmidler i skoletida'
        },
        {
          id: '04',
          nb: 'Du har fusket',
          nn: 'Du har fuska',
          en: 'Du har fusket'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1590751114634
      },
      {
        status: 'sent',
        timestamp: 1590751118085
      },
      {
        status: 'archived',
        timestamp: 1590751124627
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3a5439e2f88790e01',
    created: {
      timestamp: 1618390296428,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1618390296428,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '03',
          nb: 'Du har manglende eller for sen innlevering av arbeid',
          nn: 'Du har manglande eller for sein innlevering av arbeid',
          en: 'Du har manglende eller for sen innlevering av arbeid'
        },
        {
          id: '05',
          nb: 'Du har brutt skolens ordensreglement',
          nn: 'Du har brutt skolens ordensreglement',
          en: 'Du har brutt skolens ordensreglement'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1618390286435
      },
      {
        status: 'sent',
        timestamp: 1618390289886
      },
      {
        status: 'archived',
        timestamp: 1618390296428
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3496e370cb4651c8d',
    created: {
      timestamp: 1615901834022,
      createdBy: 'fly2507'
    },
    modified: [
      {
        timestamp: 1615901834022,
        modifiedBy: 'fly2507'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg',
      firstName: 'Flyktig',
      lastName: 'Logg',
      mobile: '',
      mail: 'flyktig.logg@vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1615901824029
      },
      {
        status: 'sent',
        timestamp: 1615901827480
      },
      {
        status: 'archived',
        timestamp: 1615901834022
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae393aa2187a643e95a',
    created: {
      timestamp: 1601627310494,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1601627310494,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du er for sen til undervisning',
          nn: 'Du er for sein til undervisning',
          en: 'Du er for sen til undervisning'
        },
        {
          id: '05',
          nb: 'Du har brutt skolens ordensreglement',
          nn: 'Du har brutt skolens ordensreglement',
          en: 'Du har brutt skolens ordensreglement'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1601627300501
      },
      {
        status: 'sent',
        timestamp: 1601627303952
      },
      {
        status: 'archived',
        timestamp: 1601627310494
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3d1cf6d110864d3bb',
    created: {
      timestamp: 1621519908560,
      createdBy: 'vik2606'
    },
    modified: [
      {
        timestamp: 1621519908560,
        modifiedBy: 'vik2606'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig',
      mobile: '',
      mail: 'viktig.kaerlig@vtfk.no'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel',
      mobile: '4794567891',
      mail: 'uin2704@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1621519898567
      },
      {
        status: 'sent',
        timestamp: 1621519902018
      },
      {
        status: 'archived',
        timestamp: 1621519908560
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3d6ce8d8717d5f3d2',
    created: {
      timestamp: 1604383535942,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1604383535942,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1604383525949
      },
      {
        status: 'sent',
        timestamp: 1604383529400
      },
      {
        status: 'archived',
        timestamp: 1604383535942
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae32ebd9964adae1019',
    created: {
      timestamp: 1593706010884,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1593706010884,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko',
      mobile: '4747474747',
      mail: 'tro1407@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1593706000891
      },
      {
        status: 'sent',
        timestamp: 1593706004342
      },
      {
        status: 'archived',
        timestamp: 1593706010884
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae35f12d33b1032f23a',
    created: {
      timestamp: 1594712029845,
      createdBy: 'bar0407'
    },
    modified: [
      {
        timestamp: 1594712029845,
        modifiedBy: 'bar0407'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake',
      firstName: 'Barmhjertig',
      lastName: 'Eplekake',
      mobile: '4745000054',
      mail: 'barmhjertig.eplekake@vtfk.no'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko',
      mobile: '4747474747',
      mail: 'tro1407@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1594712023303
      },
      {
        status: 'archived',
        timestamp: 1594712029845
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3d3856e60f62879ea',
    created: {
      timestamp: 1599583831359,
      createdBy: 'rus26021'
    },
    modified: [
      {
        timestamp: 1599583831359,
        modifiedBy: 'rus26021'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove',
      firstName: 'Ru',
      lastName: 'Sovealkove',
      mobile: '4748048048',
      mail: 'ru.sovealkove@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1599583824817
      },
      {
        status: 'archived',
        timestamp: 1599583831359
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3bf31ffd63f7abb66',
    created: {
      timestamp: 1584434880845,
      createdBy: 'opp1805'
    },
    modified: [
      {
        timestamp: 1584434880845,
        modifiedBy: 'opp1805'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    teacher: {
      username: 'opp1805',
      name: 'Oppfyllende Kråke',
      firstName: 'Oppfyllende',
      lastName: 'Kråke',
      mobile: '4791111119',
      mail: 'oppfyllende.krake@vtfk.no'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel',
      mobile: '4794567891',
      mail: 'uin2704@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '05',
          nb: 'Du har benyttet rusmidler i skoletida',
          nn: 'Du har nytta rusmiddel i skuletida',
          en: 'Du har benyttet rusmidler i skoletida'
        },
        {
          id: '04',
          nb: 'Du har fusket',
          nn: 'Du har fuska',
          en: 'Du har fusket'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1584434870852
      },
      {
        status: 'sent',
        timestamp: 1584434874303
      },
      {
        status: 'archived',
        timestamp: 1584434880845
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3afe2719d19cab564',
    created: {
      timestamp: 1607410344899,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1607410344899,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1607410338357
      },
      {
        status: 'archived',
        timestamp: 1607410344899
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae35f7be206553c94f6',
    created: {
      timestamp: 1613734232636,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1613734232636,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1613734226094
      },
      {
        status: 'archived',
        timestamp: 1613734232636
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3923b6ce6c51d4194',
    created: {
      timestamp: 1614187502555,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1614187502555,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1614187492562
      },
      {
        status: 'sent',
        timestamp: 1614187496013
      },
      {
        status: 'archived',
        timestamp: 1614187502555
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3202a145801769307',
    created: {
      timestamp: 1600428427997,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1600428427997,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1600428421455
      },
      {
        status: 'archived',
        timestamp: 1600428427997
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3c15d76b9362778e5',
    created: {
      timestamp: 1589901407932,
      createdBy: 'fal0309'
    },
    modified: [
      {
        timestamp: 1589901407932,
        modifiedBy: 'fal0309'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft',
      mobile: '',
      mail: 'falsk.handlekraft@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du er for sen til undervisning',
          nn: 'Du er for sein til undervisning',
          en: 'Du er for sen til undervisning'
        },
        {
          id: '05',
          nb: 'Du har brutt skolens ordensreglement',
          nn: 'Du har brutt skolens ordensreglement',
          en: 'Du har brutt skolens ordensreglement'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1589901397939
      },
      {
        status: 'sent',
        timestamp: 1589901401390
      },
      {
        status: 'archived',
        timestamp: 1589901407932
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3b02ccc84305a6da0',
    created: {
      timestamp: 1579690066429,
      createdBy: 'rus26021'
    },
    modified: [
      {
        timestamp: 1579690066429,
        modifiedBy: 'rus26021'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove',
      firstName: 'Ru',
      lastName: 'Sovealkove',
      mobile: '4748048048',
      mail: 'ru.sovealkove@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1579690059887
      },
      {
        status: 'archived',
        timestamp: 1579690066429
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae36d8e380981481d1f',
    created: {
      timestamp: 1601367026119,
      createdBy: 'fly2507'
    },
    modified: [
      {
        timestamp: 1601367026119,
        modifiedBy: 'fly2507'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg',
      firstName: 'Flyktig',
      lastName: 'Logg',
      mobile: '',
      mail: 'flyktig.logg@vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1601367016126
      },
      {
        status: 'sent',
        timestamp: 1601367019577
      },
      {
        status: 'archived',
        timestamp: 1601367026119
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae37610a74fc10005f5',
    created: {
      timestamp: 1594703885466,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1594703885466,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel',
      mobile: '4794567891',
      mail: 'uin2704@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1594703878924
      },
      {
        status: 'archived',
        timestamp: 1594703885466
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae348f22eeac957a912',
    created: {
      timestamp: 1623343860185,
      createdBy: 'rus26021'
    },
    modified: [
      {
        timestamp: 1623343860185,
        modifiedBy: 'rus26021'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove',
      firstName: 'Ru',
      lastName: 'Sovealkove',
      mobile: '4748048048',
      mail: 'ru.sovealkove@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_1ENYA/ENG1009_TESVS@38099',
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1623343850192
      },
      {
        status: 'sent',
        timestamp: 1623343853643
      },
      {
        status: 'archived',
        timestamp: 1623343860185
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae380c888acaf1baff8',
    created: {
      timestamp: 1601911328944,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1601911328944,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '04',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fravær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '03',
          nb: 'Du har manglende eller for sen innlevering av arbeid',
          nn: 'Du har manglande eller for sein innlevering av arbeid',
          en: 'Du har manglende eller for sen innlevering av arbeid'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1601911318951
      },
      {
        status: 'sent',
        timestamp: 1601911322402
      },
      {
        status: 'archived',
        timestamp: 1601911328944
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae34fade5bfbe362ac9',
    created: {
      timestamp: 1578589095335,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1578589095335,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1578589088793
      },
      {
        status: 'archived',
        timestamp: 1578589095335
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae313e8004838e080e7',
    created: {
      timestamp: 1612264838206,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1612264838206,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1612264828213
      },
      {
        status: 'sent',
        timestamp: 1612264831664
      },
      {
        status: 'archived',
        timestamp: 1612264838206
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae32e49425e1b608d28',
    created: {
      timestamp: 1586527988266,
      createdBy: 'vik2606'
    },
    modified: [
      {
        timestamp: 1586527988266,
        modifiedBy: 'vik2606'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig',
      mobile: '',
      mail: 'viktig.kaerlig@vtfk.no'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel',
      mobile: '4794567891',
      mail: 'uin2704@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1586527981724
      },
      {
        status: 'archived',
        timestamp: 1586527988266
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3afb26405d473be5c',
    created: {
      timestamp: 1625056409897,
      createdBy: 'skj1207'
    },
    modified: [
      {
        timestamp: 1625056409897,
        modifiedBy: 'skj1207'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt',
      mobile: '4799779977',
      mail: 'skjoenn.initiativrik.plikt@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_1MPYD/MAT1117_TESVS@38099',
          en: 'Matematikk 1P-Y',
          nb: 'Matematikk 1P-Y',
          nn: 'Matematikk 1P-Y'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1625056399904
      },
      {
        status: 'sent',
        timestamp: 1625056403355
      },
      {
        status: 'archived',
        timestamp: 1625056409897
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3c4f5a32dad4debf6',
    created: {
      timestamp: 1596124263190,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1596124263190,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du er for sen til undervisning',
          nn: 'Du er for sein til undervisning',
          en: 'Du er for sen til undervisning'
        },
        {
          id: '04',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fravær',
          en: 'Du har udokumentert fravær'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1596124253197
      },
      {
        status: 'sent',
        timestamp: 1596124256648
      },
      {
        status: 'archived',
        timestamp: 1596124263190
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae359b6cd881ab9e508',
    created: {
      timestamp: 1605281614280,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1605281614280,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1605281604287
      },
      {
        status: 'sent',
        timestamp: 1605281607738
      },
      {
        status: 'archived',
        timestamp: 1605281614280
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae378467fb48f608a58',
    created: {
      timestamp: 1596003490435,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1596003490435,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke',
      mobile: '4798765432',
      mail: 'alv1706@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1596003480442
      },
      {
        status: 'sent',
        timestamp: 1596003483893
      },
      {
        status: 'archived',
        timestamp: 1596003490435
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3bb60e56860009ca1',
    created: {
      timestamp: 1596802269704,
      createdBy: 'fly2507'
    },
    modified: [
      {
        timestamp: 1596802269704,
        modifiedBy: 'fly2507'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg',
      firstName: 'Flyktig',
      lastName: 'Logg',
      mobile: '',
      mail: 'flyktig.logg@vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '05',
          nb: 'Du har brutt skolens ordensreglement',
          nn: 'Du har brutt skolens ordensreglement',
          en: 'Du har brutt skolens ordensreglement'
        },
        {
          id: '02',
          nb: 'Du har ikke nødvendig skolemateriell klart til undervisning',
          nn: 'Du har ikkje nødvendig skulemateriell klart til undervisning',
          en: 'Du har ikke nødvendig skolemateriell klart til undervisning'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1596802259711
      },
      {
        status: 'sent',
        timestamp: 1596802263162
      },
      {
        status: 'archived',
        timestamp: 1596802269704
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae35d770b9ffcb10c8d',
    created: {
      timestamp: 1611656518777,
      createdBy: 'vik2606'
    },
    modified: [
      {
        timestamp: 1611656518777,
        modifiedBy: 'vik2606'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig',
      firstName: 'Viktig',
      lastName: 'Kjærlig',
      mobile: '',
      mail: 'viktig.kaerlig@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du forstyrrer undervisning eller skoleaktivitet',
          nn: 'Du uroar undervisning eller skuleaktivitet',
          en: 'Du forstyrrer undervisning eller skoleaktivitet'
        },
        {
          id: '06',
          nb: 'Du har brutt skolens ordensreglement',
          nn: 'Du har brote skulen sitt ordensreglement',
          en: 'Du har brutt skolens ordensreglement'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1611656508784
      },
      {
        status: 'sent',
        timestamp: 1611656512235
      },
      {
        status: 'archived',
        timestamp: 1611656518777
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3d5ca6c42f0ab1373',
    created: {
      timestamp: 1599728553979,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1599728553979,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1599728547437
      },
      {
        status: 'archived',
        timestamp: 1599728553979
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae347b7ac2d3567b174',
    created: {
      timestamp: 1599545317599,
      createdBy: 'fly2507'
    },
    modified: [
      {
        timestamp: 1599545317599,
        modifiedBy: 'fly2507'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg',
      firstName: 'Flyktig',
      lastName: 'Logg',
      mobile: '',
      mail: 'flyktig.logg@vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1599545307606
      },
      {
        status: 'sent',
        timestamp: 1599545311057
      },
      {
        status: 'archived',
        timestamp: 1599545317599
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3b7a0347f31463af4',
    created: {
      timestamp: 1593691336836,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1593691336836,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1593691326843
      },
      {
        status: 'sent',
        timestamp: 1593691330294
      },
      {
        status: 'archived',
        timestamp: 1593691336836
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae38921f7250efd8c02',
    created: {
      timestamp: 1584023199564,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1584023199564,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke',
      mobile: '4798765432',
      mail: 'alv1706@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1584023189571
      },
      {
        status: 'sent',
        timestamp: 1584023193022
      },
      {
        status: 'archived',
        timestamp: 1584023199564
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3dcaa396f649c1487',
    created: {
      timestamp: 1591600128479,
      createdBy: 'skj1207'
    },
    modified: [
      {
        timestamp: 1591600128479,
        modifiedBy: 'skj1207'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt',
      mobile: '4799779977',
      mail: 'skjoenn.initiativrik.plikt@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_1ENYA/ENG1009_TESVS@38099',
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1591600118486
      },
      {
        status: 'sent',
        timestamp: 1591600121937
      },
      {
        status: 'archived',
        timestamp: 1591600128479
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae37430818e33b8cf2f',
    created: {
      timestamp: 1586499247791,
      createdBy: 'skj1207'
    },
    modified: [
      {
        timestamp: 1586499247791,
        modifiedBy: 'skj1207'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt',
      mobile: '4799779977',
      mail: 'skjoenn.initiativrik.plikt@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_1ENYA/ENG1009_TESVS@38099',
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        },
        {
          id: '2_1HOA/HSF1008_TESVS@38099',
          en: 'Yrkesliv i helse- og oppv.fag',
          nb: 'Yrkesliv i helse- og oppv.fag',
          nn: 'Yrkesliv i helse- og oppv.fag'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1586499237798
      },
      {
        status: 'sent',
        timestamp: 1586499241249
      },
      {
        status: 'archived',
        timestamp: 1586499247791
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3d61f06c3292191bb',
    created: {
      timestamp: 1602671514199,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1602671514199,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke',
      mobile: '4798765432',
      mail: 'alv1706@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1602671504206
      },
      {
        status: 'sent',
        timestamp: 1602671507657
      },
      {
        status: 'archived',
        timestamp: 1602671514199
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae373d32bacca4a779c',
    created: {
      timestamp: 1595252588291,
      createdBy: 'ven2411'
    },
    modified: [
      {
        timestamp: 1595252588291,
        modifiedBy: 'ven2411'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    teacher: {
      username: 'ven2411',
      name: 'Vennlig Arm',
      firstName: 'Vennlig',
      lastName: 'Arm',
      mobile: '',
      mail: 'vennlig.arm@vtfk.no'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko',
      mobile: '4747474747',
      mail: 'tro1407@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1595252581749
      },
      {
        status: 'archived',
        timestamp: 1595252588291
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3b9639bfc5752716a',
    created: {
      timestamp: 1621235043212,
      createdBy: 'fal0309'
    },
    modified: [
      {
        timestamp: 1621235043212,
        modifiedBy: 'fal0309'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft',
      mobile: '',
      mail: 'falsk.handlekraft@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_1ENYA/ENG1009_TESVS@38099',
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1621235033219
      },
      {
        status: 'sent',
        timestamp: 1621235036670
      },
      {
        status: 'archived',
        timestamp: 1621235043212
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3953714233736a360',
    created: {
      timestamp: 1622785101112,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1622785101112,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1622785094570
      },
      {
        status: 'archived',
        timestamp: 1622785101112
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae34488f0c11ddb3aaf',
    created: {
      timestamp: 1619712236926,
      createdBy: 'fly2507'
    },
    modified: [
      {
        timestamp: 1619712236926,
        modifiedBy: 'fly2507'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg',
      firstName: 'Flyktig',
      lastName: 'Logg',
      mobile: '',
      mail: 'flyktig.logg@vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1619712230384
      },
      {
        status: 'archived',
        timestamp: 1619712236926
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3c9424378204a5e26',
    created: {
      timestamp: 1582887221531,
      createdBy: 'fal0309'
    },
    modified: [
      {
        timestamp: 1582887221531,
        modifiedBy: 'fal0309'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft',
      mobile: '',
      mail: 'falsk.handlekraft@vtfk.no'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel',
      mobile: '4794567891',
      mail: 'uin2704@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '04',
          nb: 'Du har fusket',
          nn: 'Du har fuska',
          en: 'Du har fusket'
        },
        {
          id: '03',
          nb: 'Du forlater undervisning uten avklaring med lærer',
          nn: 'Du forlèt undervisning utan avklaring med lærar',
          en: 'Du forlater undervisning uten avklaring med lærer'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1582887211538
      },
      {
        status: 'sent',
        timestamp: 1582887214989
      },
      {
        status: 'archived',
        timestamp: 1582887221531
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3d77de7c17e8d1629',
    created: {
      timestamp: 1588081039049,
      createdBy: 'bar0407'
    },
    modified: [
      {
        timestamp: 1588081039049,
        modifiedBy: 'bar0407'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake',
      firstName: 'Barmhjertig',
      lastName: 'Eplekake',
      mobile: '4745000054',
      mail: 'barmhjertig.eplekake@vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1588081032507
      },
      {
        status: 'archived',
        timestamp: 1588081039049
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae34f0c48dfb5fe779b',
    created: {
      timestamp: 1583741490516,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1583741490516,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '04',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fravær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '02',
          nb: 'Du har ikke nødvendig skolemateriell klart til undervisning',
          nn: 'Du har ikkje nødvendig skulemateriell klart til undervisning',
          en: 'Du har ikke nødvendig skolemateriell klart til undervisning'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1583741480523
      },
      {
        status: 'sent',
        timestamp: 1583741483974
      },
      {
        status: 'archived',
        timestamp: 1583741490516
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3bfab8e55dbcc7407',
    created: {
      timestamp: 1604494930763,
      createdBy: 'skj1207'
    },
    modified: [
      {
        timestamp: 1604494930763,
        modifiedBy: 'skj1207'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt',
      mobile: '4799779977',
      mail: 'skjoenn.initiativrik.plikt@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1604494924221
      },
      {
        status: 'archived',
        timestamp: 1604494930763
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae322d070b38933ea37',
    created: {
      timestamp: 1599717108135,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1599717108135,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1599717098142
      },
      {
        status: 'sent',
        timestamp: 1599717101593
      },
      {
        status: 'archived',
        timestamp: 1599717108135
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3650d29293b8294d6',
    created: {
      timestamp: 1608024286326,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1608024286326,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke',
      mobile: '4798765432',
      mail: 'alv1706@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1608024276333
      },
      {
        status: 'sent',
        timestamp: 1608024279784
      },
      {
        status: 'archived',
        timestamp: 1608024286326
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae317c09476be36215b',
    created: {
      timestamp: 1599652299118,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1599652299118,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1599652292576
      },
      {
        status: 'archived',
        timestamp: 1599652299118
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3d52fe4a06214f25c',
    created: {
      timestamp: 1591777108069,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1591777108069,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1591777101527
      },
      {
        status: 'archived',
        timestamp: 1591777108069
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae31f57389da14ec528',
    created: {
      timestamp: 1584430148791,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1584430148791,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1584430142249
      },
      {
        status: 'archived',
        timestamp: 1584430148791
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae35244d21ffc8b6c3e',
    created: {
      timestamp: 1597829359304,
      createdBy: 'fly2507'
    },
    modified: [
      {
        timestamp: 1597829359304,
        modifiedBy: 'fly2507'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg',
      firstName: 'Flyktig',
      lastName: 'Logg',
      mobile: '',
      mail: 'flyktig.logg@vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '04',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fravær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '02',
          nb: 'Du har ikke nødvendig skolemateriell klart til undervisning',
          nn: 'Du har ikkje nødvendig skulemateriell klart til undervisning',
          en: 'Du har ikke nødvendig skolemateriell klart til undervisning'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1597829349311
      },
      {
        status: 'sent',
        timestamp: 1597829352762
      },
      {
        status: 'archived',
        timestamp: 1597829359304
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae36aa0b610b4fee091',
    created: {
      timestamp: 1620282475294,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1620282475294,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'samtale',
    variant: 'samtale',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1620282468752
      },
      {
        status: 'archived',
        timestamp: 1620282475294
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3062280056cab08ee',
    created: {
      timestamp: 1593612960229,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1593612960229,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '03',
        nb: 'Standpunktkarakter',
        nn: 'Standpunktkarakter',
        en: 'Standpunktkarakter'
      },
      reasons: [
        {
          id: '04',
          nb: 'Du har fusket',
          nn: 'Du har fuska',
          en: 'Du har fusket'
        },
        {
          id: '03',
          nb: 'Du forlater undervisning uten avklaring med lærer',
          nn: 'Du forlèt undervisning utan avklaring med lærar',
          en: 'Du forlater undervisning uten avklaring med lærer'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1593612950236
      },
      {
        status: 'sent',
        timestamp: 1593612953687
      },
      {
        status: 'archived',
        timestamp: 1593612960229
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae31d4ec8d13c02e2ec',
    created: {
      timestamp: 1593168317108,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1593168317108,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke',
      firstName: 'Alvorlig',
      lastName: 'Lykke',
      mobile: '4798765432',
      mail: 'alv1706@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1593168307115
      },
      {
        status: 'sent',
        timestamp: 1593168310566
      },
      {
        status: 'archived',
        timestamp: 1593168317108
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3e61809b6a78c3baf',
    created: {
      timestamp: 1614096349209,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1614096349209,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '05',
          nb: 'Du har brutt skolens ordensreglement',
          nn: 'Du har brutt skolens ordensreglement',
          en: 'Du har brutt skolens ordensreglement'
        },
        {
          id: '01',
          nb: 'Du er for sen til undervisning',
          nn: 'Du er for sein til undervisning',
          en: 'Du er for sen til undervisning'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1614096339216
      },
      {
        status: 'sent',
        timestamp: 1614096342667
      },
      {
        status: 'archived',
        timestamp: 1614096349209
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae38a26f3c2d9093b8f',
    created: {
      timestamp: 1598269303581,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1598269303581,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel',
      mobile: '4794567891',
      mail: 'uin2704@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1598269297039
      },
      {
        status: 'archived',
        timestamp: 1598269303581
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae39873d9b3bca26fbf',
    created: {
      timestamp: 1619541423171,
      createdBy: 'tri0308'
    },
    modified: [
      {
        timestamp: 1619541423171,
        modifiedBy: 'tri0308'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen',
      firstName: 'Trine',
      lastName: 'Testesen',
      mobile: '4794949494',
      mail: 'trine.testesen@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '05',
          nb: 'Du har benyttet rusmidler i skoletida',
          nn: 'Du har nytta rusmiddel i skuletida',
          en: 'Du har benyttet rusmidler i skoletida'
        },
        {
          id: '03',
          nb: 'Du forlater undervisning uten avklaring med lærer',
          nn: 'Du forlèt undervisning utan avklaring med lærar',
          en: 'Du forlater undervisning uten avklaring med lærer'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1619541413178
      },
      {
        status: 'sent',
        timestamp: 1619541416629
      },
      {
        status: 'archived',
        timestamp: 1619541423171
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3e3234b5407314812',
    created: {
      timestamp: 1611588917017,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1611588917017,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1611588907024
      },
      {
        status: 'sent',
        timestamp: 1611588910475
      },
      {
        status: 'archived',
        timestamp: 1611588917017
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3ee304f6fdd540a79',
    created: {
      timestamp: 1615829235480,
      createdBy: 'pre0711'
    },
    modified: [
      {
        timestamp: 1615829235480,
        modifiedBy: 'pre0711'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel',
      firstName: 'Presis',
      lastName: 'Damesykkel',
      mobile: '',
      mail: 'presis.damesykkel@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du utviser provoserende atferd mot ansatte eller medelever',
          nn: 'Du viser provoserande åtferd mot tilsette eller medelevar',
          en: 'Du utviser provoserende atferd mot ansatte eller medelever'
        },
        {
          id: '01',
          nb: 'Du forstyrrer undervisning eller skoleaktivitet',
          nn: 'Du uroar undervisning eller skuleaktivitet',
          en: 'Du forstyrrer undervisning eller skoleaktivitet'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1615829225487
      },
      {
        status: 'sent',
        timestamp: 1615829228938
      },
      {
        status: 'archived',
        timestamp: 1615829235480
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3ae385430c9709f82',
    created: {
      timestamp: 1599745215555,
      createdBy: 'fal0309'
    },
    modified: [
      {
        timestamp: 1599745215555,
        modifiedBy: 'fal0309'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft',
      firstName: 'Falsk',
      lastName: 'Handlekraft',
      mobile: '',
      mail: 'falsk.handlekraft@vtfk.no'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne',
      firstName: 'Lilla',
      lastName: 'Spenne',
      mobile: '',
      mail: 'lil1312@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_1ENYA/ENG1009_TESVS@38099',
          en: 'Engelsk',
          nb: 'Engelsk',
          nn: 'Engelsk'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1599745205562
      },
      {
        status: 'sent',
        timestamp: 1599745209013
      },
      {
        status: 'archived',
        timestamp: 1599745215555
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3f4277fd348364956',
    created: {
      timestamp: 1608126294102,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1608126294102,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje',
      firstName: 'Oppfyllende',
      lastName: 'Palmeolje',
      mobile: '4794321000',
      mail: 'opp2004@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1608126287560
      },
      {
        status: 'archived',
        timestamp: 1608126294102
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae361a3b468a3a5fa8c',
    created: {
      timestamp: 1597384278614,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1597384278614,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1597384268621
      },
      {
        status: 'sent',
        timestamp: 1597384272072
      },
      {
        status: 'archived',
        timestamp: 1597384278614
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae30a6894a578406dd7',
    created: {
      timestamp: 1621602818347,
      createdBy: 'bar0407'
    },
    modified: [
      {
        timestamp: 1621602818347,
        modifiedBy: 'bar0407'
      }
    ],
    type: 'samtale',
    variant: 'ikke-samtale',
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake',
      firstName: 'Barmhjertig',
      lastName: 'Eplekake',
      mobile: '4745000054',
      mail: 'barmhjertig.eplekake@vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1621602808354
      },
      {
        status: 'sent',
        timestamp: 1621602811805
      },
      {
        status: 'archived',
        timestamp: 1621602818347
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3c45c7df9c53e04af',
    created: {
      timestamp: 1599653365372,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1599653365372,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko',
      firstName: 'Trofast',
      lastName: 'Bomullballsko',
      mobile: '4747474747',
      mail: 'tro1407@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1599653355379
      },
      {
        status: 'sent',
        timestamp: 1599653358830
      },
      {
        status: 'archived',
        timestamp: 1599653365372
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae39f96dbd389f105ef',
    created: {
      timestamp: 1594360581262,
      createdBy: 'kra0801'
    },
    modified: [
      {
        timestamp: 1594360581262,
        modifiedBy: 'kra0801'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel',
      firstName: 'Kranglete',
      lastName: 'Sykkel',
      mobile: '',
      mail: 'kra0801@skole.vtfk.no'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue',
      firstName: 'Etterpåklok Underfundig',
      lastName: 'Filetfrue',
      mobile: '4748765678',
      mail: 'ett09051@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        },
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        }
      ],
      classes: [
        {
          id: '2_2STB/KRO1005_TESVS@38099',
          en: 'Kroppsøving',
          nb: 'Kroppsøving',
          nn: 'Kroppsøving'
        },
        {
          id: '2_2STB/HIS1001_TESVS@38099',
          en: 'Historie',
          nb: 'Historie',
          nn: 'Historie'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1594360571269
      },
      {
        status: 'sent',
        timestamp: 1594360574720
      },
      {
        status: 'archived',
        timestamp: 1594360581262
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3e9d321c2ac1584c0',
    created: {
      timestamp: 1595942556170,
      createdBy: 'sto3006'
    },
    modified: [
      {
        timestamp: 1595942556170,
        modifiedBy: 'sto3006'
      }
    ],
    type: 'notat',
    variant: 'notat',
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff',
      firstName: 'Stolt Komplisert',
      lastName: 'Blindvegsjiraff',
      mobile: '4793949494',
      mail: 'stolt.blindvegsjiraff@vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021'
    },
    isEncrypted: true,
    status: [
      {
        status: 'queued',
        timestamp: 1595942549628
      },
      {
        status: 'archived',
        timestamp: 1595942556170
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3cb3fdf3c7bbd7feb',
    created: {
      timestamp: 1609867947172,
      createdBy: 'opp1805'
    },
    modified: [
      {
        timestamp: 1609867947172,
        modifiedBy: 'opp1805'
      }
    ],
    type: 'varsel',
    variant: 'orden',
    teacher: {
      username: 'opp1805',
      name: 'Oppfyllende Kråke',
      firstName: 'Oppfyllende',
      lastName: 'Kråke',
      mobile: '4791111119',
      mail: 'oppfyllende.krake@vtfk.no'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel',
      firstName: 'Uinspirert Rektangulær',
      lastName: 'Sykkel',
      mobile: '4794567891',
      mail: 'uin2704@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '05',
          nb: 'Du har brutt skolens ordensreglement',
          nn: 'Du har brutt skolens ordensreglement',
          en: 'Du har brutt skolens ordensreglement'
        },
        {
          id: '04',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fravær',
          en: 'Du har udokumentert fravær'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1609867937179
      },
      {
        status: 'sent',
        timestamp: 1609867940630
      },
      {
        status: 'archived',
        timestamp: 1609867947172
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3e8694252223959ac',
    created: {
      timestamp: 1611650330027,
      createdBy: 'bar0407'
    },
    modified: [
      {
        timestamp: 1611650330027,
        modifiedBy: 'bar0407'
      }
    ],
    type: 'varsel',
    variant: 'atferd',
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake',
      firstName: 'Barmhjertig',
      lastName: 'Eplekake',
      mobile: '4745000054',
      mail: 'barmhjertig.eplekake@vtfk.no'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring',
      firstName: 'Vis',
      lastName: 'Motbakkeklaring',
      mobile: '4791919191',
      mail: 'vis05042@skole.vtfk.no',
      classId: 'TESVS:2STB',
      level: 'VG2'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '01',
        nb: 'Halvårsvurdering 1. termin',
        nn: 'Halvårsvurdering 1. termin',
        en: 'Halvårsvurdering 1. termin'
      },
      reasons: [
        {
          id: '04',
          nb: 'Du har fusket',
          nn: 'Du har fuska',
          en: 'Du har fusket'
        },
        {
          id: '02',
          nb: 'Du utviser provoserende atferd mot ansatte eller medelever',
          nn: 'Du viser provoserande åtferd mot tilsette eller medelevar',
          en: 'Du utviser provoserende atferd mot ansatte eller medelever'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1611650320034
      },
      {
        status: 'sent',
        timestamp: 1611650323485
      },
      {
        status: 'archived',
        timestamp: 1611650330027
      }
    ],
    isQueued: false
  },
  {
    _id: '60186ae3256a62c8e1eedb76',
    created: {
      timestamp: 1602682297889,
      createdBy: 'skj1207'
    },
    modified: [
      {
        timestamp: 1602682297889,
        modifiedBy: 'skj1207'
      }
    ],
    type: 'varsel',
    variant: 'fag',
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt',
      firstName: 'Skjønn Initiativrik',
      lastName: 'Plikt',
      mobile: '4799779977',
      mail: 'skjoenn.initiativrik.plikt@vtfk.no'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist',
      firstName: 'Dynamisk Hevngjerrig',
      lastName: 'Statist',
      mobile: '4791234567',
      mail: 'dyn06061@skole.vtfk.no',
      classId: 'TESVS:1HOA',
      level: 'VG1'
    },
    school: {
      id: 'TESVS',
      name: 'Testen videregående skole',
      shortName: 'Testen vgs'
    },
    content: {
      year: '2020/2021',
      period: {
        id: '02',
        nb: 'Halvårsvurdering 2. termin',
        nn: 'Halvårsvurdering 2. termin',
        en: 'Halvårsvurdering 2. termin'
      },
      reasons: [
        {
          id: '02',
          nb: 'Du har udokumentert fravær',
          nn: 'Du har udokumentert fråvær',
          en: 'Du har udokumentert fravær'
        },
        {
          id: '01',
          nb: 'Du har manglende vurderingsgrunnlag',
          nn: 'Du har manglande vurderingsgrunnlag',
          en: 'Du har manglende vurderingsgrunnlag'
        }
      ],
      classes: [
        {
          id: '2_1MPYD/MAT1117_TESVS@38099',
          en: 'Matematikk 1P-Y',
          nb: 'Matematikk 1P-Y',
          nn: 'Matematikk 1P-Y'
        }
      ]
    },
    isEncrypted: false,
    status: [
      {
        status: 'queued',
        timestamp: 1602682287896
      },
      {
        status: 'sent',
        timestamp: 1602682291347
      },
      {
        status: 'archived',
        timestamp: 1602682297889
      }
    ],
    isQueued: false
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
