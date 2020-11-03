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
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:2STB',
    classShortId: '2STB',
    programomraade: {
      kode: 'STSSA2----',
      type: 'studieforberedende',
      tittel: {
        default: 'Språk, samfunnsfag og økonomi Vg2',
        nob: 'Språk, samfunnsfag og økonomi Vg2',
        nno: 'Språk, samfunnsfag og økonomi Vg2'
      },
      kortform: {
        default: 'Språk, samfunnsfag og økonomi',
        nob: 'Språk, samfunnsfag og økonomi',
        nno: 'Språk, samfunnsfag og økonomi'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        default: 'Studiespesialisering',
        nob: 'Studiespesialisering'
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
          default: 'Kroppsøving Vg2',
          nob: 'Kroppsøving Vg2',
          nno: 'Kroppsøving Vg2'
        },
        kortform: {
          default: 'Kroppsøving',
          nob: 'Kroppsøving',
          nno: 'Kroppsøving'
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
          default: 'Historie Vg2 studieforberedende utdanningsprogram',
          nob: 'Historie Vg2 studieforberedende utdanningsprogram',
          nno: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          default: 'Historie',
          nob: 'Historie',
          nno: 'Historie'
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
          default: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole',
          nob: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole'
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
          default: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nob: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nno: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          default: 'Norsk hovedmål, skriftlig',
          nob: 'Norsk hovedmål, skriftlig',
          nno: 'Norsk hovudmål, skriftleg'
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
          default: 'Matematikk 2P',
          nob: 'Matematikk 2P',
          nno: 'Matematikk 2P'
        },
        kortform: {
          default: 'Matematikk 2P',
          nob: 'Matematikk 2P',
          nno: 'Matematikk 2P'
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
          default: 'Rettslære 1',
          nob: 'Rettslære 1',
          nno: 'Rettslære 1'
        },
        kortform: {
          default: 'Rettslære 1',
          nob: 'Rettslære 1',
          nno: 'Rettslære 1'
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
          default: 'Psykologi 1',
          nob: 'Psykologi 1',
          nno: 'Psykologi 1'
        },
        kortform: {
          default: 'Psykologi 1',
          nob: 'Psykologi 1',
          nno: 'Psykologi 1'
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
          default: 'Spansk II',
          nob: 'Spansk II',
          nno: 'Spansk II'
        },
        kortform: {
          default: 'Spansk II',
          nob: 'Spansk II',
          nno: 'Spansk II'
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
          default: 'Markedsføring og ledelse 1',
          nob: 'Markedsføring og ledelse 1',
          nno: 'Marknadsføring og leiing 1'
        },
        kortform: {
          default: 'Markedsføring og ledelse 1',
          nob: 'Markedsføring og ledelse 1',
          nno: 'Marknadsføring og leiing 1'
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
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:2STB',
    classShortId: '2STB',
    programomraade: {
      kode: 'STSSA2----',
      type: 'studieforberedende',
      tittel: {
        default: 'Språk, samfunnsfag og økonomi Vg2',
        nob: 'Språk, samfunnsfag og økonomi Vg2',
        nno: 'Språk, samfunnsfag og økonomi Vg2'
      },
      kortform: {
        default: 'Språk, samfunnsfag og økonomi',
        nob: 'Språk, samfunnsfag og økonomi',
        nno: 'Språk, samfunnsfag og økonomi'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        default: 'Studiespesialisering',
        nob: 'Studiespesialisering'
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
          default: 'Kroppsøving Vg2',
          nob: 'Kroppsøving Vg2',
          nno: 'Kroppsøving Vg2'
        },
        kortform: {
          default: 'Kroppsøving',
          nob: 'Kroppsøving',
          nno: 'Kroppsøving'
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
          default: 'Historie Vg2 studieforberedende utdanningsprogram',
          nob: 'Historie Vg2 studieforberedende utdanningsprogram',
          nno: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          default: 'Historie',
          nob: 'Historie',
          nno: 'Historie'
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
          default: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole',
          nob: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole'
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
          default: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nob: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nno: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          default: 'Norsk hovedmål, skriftlig',
          nob: 'Norsk hovedmål, skriftlig',
          nno: 'Norsk hovudmål, skriftleg'
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
          default: 'Matematikk 2P',
          nob: 'Matematikk 2P',
          nno: 'Matematikk 2P'
        },
        kortform: {
          default: 'Matematikk 2P',
          nob: 'Matematikk 2P',
          nno: 'Matematikk 2P'
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
          default: 'Rettslære 1',
          nob: 'Rettslære 1',
          nno: 'Rettslære 1'
        },
        kortform: {
          default: 'Rettslære 1',
          nob: 'Rettslære 1',
          nno: 'Rettslære 1'
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
          default: 'Psykologi 1',
          nob: 'Psykologi 1',
          nno: 'Psykologi 1'
        },
        kortform: {
          default: 'Psykologi 1',
          nob: 'Psykologi 1',
          nno: 'Psykologi 1'
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
          default: 'Tysk II',
          nob: 'Tysk II',
          nno: 'Tysk II'
        },
        kortform: {
          default: 'Tysk II',
          nob: 'Tysk II',
          nno: 'Tysk II'
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
          default: 'Sosiologi og sosialantropologi',
          nob: 'Sosiologi og sosialantropologi',
          nno: 'Sosiologi og sosialantropologi'
        },
        kortform: {
          default: 'Sosiologi og sosialantropologi',
          nob: 'Sosiologi og sosialantropologi',
          nno: 'Sosiologi og sosialantropologi'
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
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:2STB',
    classShortId: '2STB',
    programomraade: {
      kode: 'STSSA2----',
      type: 'studieforberedende',
      tittel: {
        default: 'Språk, samfunnsfag og økonomi Vg2',
        nob: 'Språk, samfunnsfag og økonomi Vg2',
        nno: 'Språk, samfunnsfag og økonomi Vg2'
      },
      kortform: {
        default: 'Språk, samfunnsfag og økonomi',
        nob: 'Språk, samfunnsfag og økonomi',
        nno: 'Språk, samfunnsfag og økonomi'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        default: 'Studiespesialisering',
        nob: 'Studiespesialisering'
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
          default: 'Kroppsøving Vg2',
          nob: 'Kroppsøving Vg2',
          nno: 'Kroppsøving Vg2'
        },
        kortform: {
          default: 'Kroppsøving',
          nob: 'Kroppsøving',
          nno: 'Kroppsøving'
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
          default: 'Historie Vg2 studieforberedende utdanningsprogram',
          nob: 'Historie Vg2 studieforberedende utdanningsprogram',
          nno: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          default: 'Historie',
          nob: 'Historie',
          nno: 'Historie'
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
          default: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole',
          nob: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole'
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
          default: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nob: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nno: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          default: 'Norsk hovedmål, skriftlig',
          nob: 'Norsk hovedmål, skriftlig',
          nno: 'Norsk hovudmål, skriftleg'
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
          default: 'Rettslære 1',
          nob: 'Rettslære 1',
          nno: 'Rettslære 1'
        },
        kortform: {
          default: 'Rettslære 1',
          nob: 'Rettslære 1',
          nno: 'Rettslære 1'
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
          default: 'Sosiologi og sosialantropologi',
          nob: 'Sosiologi og sosialantropologi',
          nno: 'Sosiologi og sosialantropologi'
        },
        kortform: {
          default: 'Sosiologi og sosialantropologi',
          nob: 'Sosiologi og sosialantropologi',
          nno: 'Sosiologi og sosialantropologi'
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
          default: 'Psykologi 1',
          nob: 'Psykologi 1',
          nno: 'Psykologi 1'
        },
        kortform: {
          default: 'Psykologi 1',
          nob: 'Psykologi 1',
          nno: 'Psykologi 1'
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
          default: 'Matematikk 2P',
          nob: 'Matematikk 2P',
          nno: 'Matematikk 2P'
        },
        kortform: {
          default: 'Matematikk 2P',
          nob: 'Matematikk 2P',
          nno: 'Matematikk 2P'
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
          default: 'Spansk I',
          nob: 'Spansk I',
          nno: 'Spansk I'
        },
        kortform: {
          default: 'Spansk I',
          nob: 'Spansk I',
          nno: 'Spansk I'
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
    programomraade: {
      kode: 'STSSA2----',
      type: 'studieforberedende',
      tittel: {
        default: 'Språk, samfunnsfag og økonomi Vg2',
        nob: 'Språk, samfunnsfag og økonomi Vg2',
        nno: 'Språk, samfunnsfag og økonomi Vg2'
      },
      kortform: {
        default: 'Språk, samfunnsfag og økonomi',
        nob: 'Språk, samfunnsfag og økonomi',
        nno: 'Språk, samfunnsfag og økonomi'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        default: 'Studiespesialisering',
        nob: 'Studiespesialisering'
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
          default: 'Kroppsøving Vg2',
          nob: 'Kroppsøving Vg2',
          nno: 'Kroppsøving Vg2'
        },
        kortform: {
          default: 'Kroppsøving',
          nob: 'Kroppsøving',
          nno: 'Kroppsøving'
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
          default: 'Historie Vg2 studieforberedende utdanningsprogram',
          nob: 'Historie Vg2 studieforberedende utdanningsprogram',
          nno: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          default: 'Historie',
          nob: 'Historie',
          nno: 'Historie'
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
          default: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole',
          nob: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole'
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
          default: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nob: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nno: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          default: 'Norsk hovedmål, skriftlig',
          nob: 'Norsk hovedmål, skriftlig',
          nno: 'Norsk hovudmål, skriftleg'
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
          default: 'Matematikk S1',
          nob: 'Matematikk S1',
          nno: 'Matematikk S1'
        },
        kortform: {
          default: 'Matematikk S1',
          nob: 'Matematikk S1',
          nno: 'Matematikk S1'
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
          default: 'Sosiologi og sosialantropologi',
          nob: 'Sosiologi og sosialantropologi',
          nno: 'Sosiologi og sosialantropologi'
        },
        kortform: {
          default: 'Sosiologi og sosialantropologi',
          nob: 'Sosiologi og sosialantropologi',
          nno: 'Sosiologi og sosialantropologi'
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
          default: 'Psykologi 1',
          nob: 'Psykologi 1',
          nno: 'Psykologi 1'
        },
        kortform: {
          default: 'Psykologi 1',
          nob: 'Psykologi 1',
          nno: 'Psykologi 1'
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
          default: 'Tysk I',
          nob: 'Tysk I',
          nno: 'Tysk I'
        },
        kortform: {
          default: 'Tysk I',
          nob: 'Tysk I',
          nno: 'Tysk I'
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
          default: 'Informasjonsteknologi 1',
          nob: 'Informasjonsteknologi 1',
          nno: 'Informasjonsteknologi 1'
        },
        kortform: {
          default: 'Informasjonsteknologi 1',
          nob: 'Informasjonsteknologi 1',
          nno: 'Informasjonsteknologi 1'
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
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:2STB',
    classShortId: '2STB',
    programomraade: {
      kode: 'STREA2----',
      type: 'Ukjent',
      kortform: {
        default: 'Realfag',
        nob: 'Realfag'
      }
    },
    utdanningsprogram: {
      kode: 'ST',
      type: 'Ukjent',
      kortform: {
        default: 'Studiespesialisering',
        nob: 'Studiespesialisering'
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
          default: 'Kroppsøving Vg2',
          nob: 'Kroppsøving Vg2',
          nno: 'Kroppsøving Vg2'
        },
        kortform: {
          default: 'Kroppsøving',
          nob: 'Kroppsøving',
          nno: 'Kroppsøving'
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
          default: 'Historie Vg2 studieforberedende utdanningsprogram',
          nob: 'Historie Vg2 studieforberedende utdanningsprogram',
          nno: 'Historie Vg2 studieførebuande utdanningsprogram'
        },
        kortform: {
          default: 'Historie',
          nob: 'Historie',
          nno: 'Historie'
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
          default: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole',
          nob: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole'
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
          default: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nob: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
          nno: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
        },
        kortform: {
          default: 'Norsk hovedmål, skriftlig',
          nob: 'Norsk hovedmål, skriftlig',
          nno: 'Norsk hovudmål, skriftleg'
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
          default: 'Matematikk R1',
          nob: 'Matematikk R1',
          nno: 'Matematikk R1'
        },
        kortform: {
          default: 'Matematikk R1',
          nob: 'Matematikk R1',
          nno: 'Matematikk R1'
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
          default: 'Internasjonal engelsk, skriftlig',
          nob: 'Internasjonal engelsk, skriftlig',
          nno: 'Internasjonal engelsk, skriftleg'
        },
        kortform: {
          default: 'Internasj. engelsk, skriftlig',
          nob: 'Internasj. engelsk, skriftlig',
          nno: 'Internasj. engelsk, skriftleg'
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
          default: 'Fysikk 1',
          nob: 'Fysikk 1',
          nno: 'Fysikk 1'
        },
        kortform: {
          default: 'Fysikk 1',
          nob: 'Fysikk 1',
          nno: 'Fysikk 1'
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
          default: 'Internasjonal engelsk, muntlig',
          nob: 'Internasjonal engelsk, muntlig',
          nno: 'Internasjonal engelsk, munnleg'
        },
        kortform: {
          default: 'Internasjonal engelsk, muntlig',
          nob: 'Internasjonal engelsk, muntlig',
          nno: 'Internasjonal engelsk, munnleg'
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
          default: 'Informasjonsteknologi 1',
          nob: 'Informasjonsteknologi 1',
          nno: 'Informasjonsteknologi 1'
        },
        kortform: {
          default: 'Informasjonsteknologi 1',
          nob: 'Informasjonsteknologi 1',
          nno: 'Informasjonsteknologi 1'
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
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:1HOA',
    classShortId: '1HOA',
    programomraade: {
      kode: 'HSHSF1----',
      type: 'yrkesfaglig',
      tittel: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
      },
      kortform: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
      }
    },
    utdanningsprogram: {
      kode: 'HS',
      type: 'yrkesfaglig',
      tittel: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
      },
      kortform: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
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
          default: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nob: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nno: 'Engelsk, Vg1 yrkesfaglege utdanningprogram'
        },
        kortform: {
          default: 'Engelsk',
          nob: 'Engelsk',
          nno: 'Engelsk'
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
          default: 'Undervisningsgruppa 1HOA/KLFAG i Læreplan generell del ved Testen videregående skole',
          nob: 'Undervisningsgruppa 1HOA/KLFAG i Læreplan generell del ved Testen videregående skole'
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
          default: 'Yrkesliv i helse- og oppvekstfag',
          nob: 'Yrkesliv i helse- og oppvekstfag',
          nno: 'Yrkesliv i helse- og oppvekstfag'
        },
        kortform: {
          default: 'Yrkesliv i helse- og oppv.fag',
          nob: 'Yrkesliv i helse- og oppv.fag',
          nno: 'Yrkesliv i helse- og oppv.fag'
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
          default: 'Helsefremmende arbeid',
          nob: 'Helsefremmende arbeid',
          nno: 'Helsefremjande arbeid'
        },
        kortform: {
          default: 'Helsefremmende arbeid',
          nob: 'Helsefremmende arbeid',
          nno: 'Helsefremjande arbeid'
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
          default: 'Kroppsøving Vg1',
          nob: 'Kroppsøving Vg1',
          nno: 'Kroppsøving Vg1'
        },
        kortform: {
          default: 'Kroppsøving',
          nob: 'Kroppsøving',
          nno: 'Kroppsøving'
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
          default: 'Yrkesfaglig fordypning Vg1',
          nob: 'Yrkesfaglig fordypning Vg1',
          nno: 'Yrkesfagleg fordjuping Vg1'
        },
        kortform: {
          default: 'Yrkesfaglig fordypning Vg1',
          nob: 'Yrkesfaglig fordypning Vg1',
          nno: 'Yrkesfagleg fordjuping Vg1'
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
          default: 'Kommunikasjon og samhandling',
          nob: 'Kommunikasjon og samhandling',
          nno: 'Kommunikasjon og samhandling'
        },
        kortform: {
          default: 'Kommunikasjon og samhandling',
          nob: 'Kommunikasjon og samhandling',
          nno: 'Kommunikasjon og samhandling'
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
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:1HOA',
    classShortId: '1HOA',
    programomraade: {
      kode: 'HSHSF1----',
      type: 'yrkesfaglig',
      tittel: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
      },
      kortform: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
      }
    },
    utdanningsprogram: {
      kode: 'HS',
      type: 'yrkesfaglig',
      tittel: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
      },
      kortform: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
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
          default: 'Matematikk 1P-Y  HS',
          nob: 'Matematikk 1P-Y  HS',
          nno: 'Matematikk 1P-Y  HS'
        },
        kortform: {
          default: 'Matematikk 1P-Y',
          nob: 'Matematikk 1P-Y',
          nno: 'Matematikk 1P-Y'
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
          default: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nob: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nno: 'Engelsk, Vg1 yrkesfaglege utdanningprogram'
        },
        kortform: {
          default: 'Engelsk',
          nob: 'Engelsk',
          nno: 'Engelsk'
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
          default: 'Undervisningsgruppa 1HOA/KLFAG i Læreplan generell del ved Testen videregående skole',
          nob: 'Undervisningsgruppa 1HOA/KLFAG i Læreplan generell del ved Testen videregående skole'
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
          default: 'Yrkesliv i helse- og oppvekstfag',
          nob: 'Yrkesliv i helse- og oppvekstfag',
          nno: 'Yrkesliv i helse- og oppvekstfag'
        },
        kortform: {
          default: 'Yrkesliv i helse- og oppv.fag',
          nob: 'Yrkesliv i helse- og oppv.fag',
          nno: 'Yrkesliv i helse- og oppv.fag'
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
          default: 'Helsefremmende arbeid',
          nob: 'Helsefremmende arbeid',
          nno: 'Helsefremjande arbeid'
        },
        kortform: {
          default: 'Helsefremmende arbeid',
          nob: 'Helsefremmende arbeid',
          nno: 'Helsefremjande arbeid'
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
          default: 'Kroppsøving Vg1',
          nob: 'Kroppsøving Vg1',
          nno: 'Kroppsøving Vg1'
        },
        kortform: {
          default: 'Kroppsøving',
          nob: 'Kroppsøving',
          nno: 'Kroppsøving'
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
          default: 'Yrkesfaglig fordypning Vg1',
          nob: 'Yrkesfaglig fordypning Vg1',
          nno: 'Yrkesfagleg fordjuping Vg1'
        },
        kortform: {
          default: 'Yrkesfaglig fordypning Vg1',
          nob: 'Yrkesfaglig fordypning Vg1',
          nno: 'Yrkesfagleg fordjuping Vg1'
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
          default: 'Naturfag Vg1 HS',
          nob: 'Naturfag Vg1 HS',
          nno: 'Naturfag Vg1 HS'
        },
        kortform: {
          default: 'Naturfag',
          nob: 'Naturfag',
          nno: 'Naturfag'
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
          default: 'Kommunikasjon og samhandling',
          nob: 'Kommunikasjon og samhandling',
          nno: 'Kommunikasjon og samhandling'
        },
        kortform: {
          default: 'Kommunikasjon og samhandling',
          nob: 'Kommunikasjon og samhandling',
          nno: 'Kommunikasjon og samhandling'
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
    schoolId: 'TESVS',
    schoolName: 'Testen videregående skole',
    schoolShortName: 'Testen vgs',
    classId: 'TESVS:1HOA',
    classShortId: '1HOA',
    programomraade: {
      kode: 'HSHSF1----',
      type: 'yrkesfaglig',
      tittel: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
      },
      kortform: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
      }
    },
    utdanningsprogram: {
      kode: 'HS',
      type: 'yrkesfaglig',
      tittel: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
      },
      kortform: {
        default: 'Helse- og oppvekstfag',
        nob: 'Helse- og oppvekstfag',
        nno: 'Helse- og oppvekstfag'
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
          default: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nob: 'Engelsk Vg1 yrkesfaglige utdanningsprogram',
          nno: 'Engelsk, Vg1 yrkesfaglege utdanningprogram'
        },
        kortform: {
          default: 'Engelsk',
          nob: 'Engelsk',
          nno: 'Engelsk'
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
          default: 'Matematikk 1P-Y  HS',
          nob: 'Matematikk 1P-Y  HS',
          nno: 'Matematikk 1P-Y  HS'
        },
        kortform: {
          default: 'Matematikk 1P-Y',
          nob: 'Matematikk 1P-Y',
          nno: 'Matematikk 1P-Y'
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
          default: 'Undervisningsgruppa 1HOA/KLFAG i Læreplan generell del ved Testen videregående skole',
          nob: 'Undervisningsgruppa 1HOA/KLFAG i Læreplan generell del ved Testen videregående skole'
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
          default: 'Yrkesliv i helse- og oppvekstfag',
          nob: 'Yrkesliv i helse- og oppvekstfag',
          nno: 'Yrkesliv i helse- og oppvekstfag'
        },
        kortform: {
          default: 'Yrkesliv i helse- og oppv.fag',
          nob: 'Yrkesliv i helse- og oppv.fag',
          nno: 'Yrkesliv i helse- og oppv.fag'
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
          default: 'Helsefremmende arbeid',
          nob: 'Helsefremmende arbeid',
          nno: 'Helsefremjande arbeid'
        },
        kortform: {
          default: 'Helsefremmende arbeid',
          nob: 'Helsefremmende arbeid',
          nno: 'Helsefremjande arbeid'
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
          default: 'Kroppsøving Vg1',
          nob: 'Kroppsøving Vg1',
          nno: 'Kroppsøving Vg1'
        },
        kortform: {
          default: 'Kroppsøving',
          nob: 'Kroppsøving',
          nno: 'Kroppsøving'
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
          default: 'Yrkesfaglig fordypning Vg1',
          nob: 'Yrkesfaglig fordypning Vg1',
          nno: 'Yrkesfagleg fordjuping Vg1'
        },
        kortform: {
          default: 'Yrkesfaglig fordypning Vg1',
          nob: 'Yrkesfaglig fordypning Vg1',
          nno: 'Yrkesfagleg fordjuping Vg1'
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
          default: 'Naturfag Vg1 HS',
          nob: 'Naturfag Vg1 HS',
          nno: 'Naturfag Vg1 HS'
        },
        kortform: {
          default: 'Naturfag',
          nob: 'Naturfag',
          nno: 'Naturfag'
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
          default: 'Kommunikasjon og samhandling',
          nob: 'Kommunikasjon og samhandling',
          nno: 'Kommunikasjon og samhandling'
        },
        kortform: {
          default: 'Kommunikasjon og samhandling',
          nob: 'Kommunikasjon og samhandling',
          nno: 'Kommunikasjon og samhandling'
        }
      }
    }
    ]
  }
]

export const TEACHERS = [
  {
    id: 'pre0711',
    fullName: 'Presis Damesykkel',
    username: 'pre0711',
    mail: 'presis.damesykkel@vtfk.no',
    contactTeacher: true,
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
    fullName: 'Falsk Handlekraft',
    username: 'fal0309',
    mail: 'falsk.handlekraft@vtfk.no',
    contactTeacher: false,
    relatedGroupIds: [
      '2_1ENYA/ENG1009_TESVS@38099'
    ]
  },
  {
    id: 'vik2606',
    fullName: 'Viktig Kjærlig',
    username: 'vik2606',
    mail: 'viktig.kaerlig@vtfk.no',
    contactTeacher: false,
    relatedGroupIds: [
      '2_1HOA/YFF4106_TESVS@38099',
      '2_1HOA/HSF1006_TESVS@38099'
    ]
  },
  {
    id: 'rus26021',
    fullName: 'Ru Sovealkove',
    username: 'rus26021',
    mail: 'ru.sovealkove@vtfk.no',
    mobile: 4748048048,
    contactTeacher: false,
    relatedGroupIds: [
      '2_1HOA/HSF1007_TESVS@38099'
    ]
  },
  {
    id: 'opp1805',
    fullName: 'Oppfyllende Kråke',
    username: 'opp1805',
    mail: 'oppfyllende.krake@vtfk.no',
    mobile: 4791111119,
    contactTeacher: false,
    relatedGroupIds: [
      '2_1HOA/HSF1008_TESVS@38099'
    ]
  },
  {
    id: 'skj1207',
    fullName: 'Skjønn Initiativrik Plikt',
    username: 'skj1207',
    mail: 'skjoenn.initiativrik.plikt@vtfk.no',
    mobile: 4799779977,
    contactTeacher: false,
    relatedGroupIds: [
      '2_1HOA/KRO1017_TESVS@38099',
      '2_2STB/KRO1005_TESVS@38099'
    ]
  },
  {
    id: 'tri0308',
    fullName: 'Trine Testesen',
    username: 'tri0308',
    mail: 'trine.testesen@vtfk.no',
    mobile: 4794949494,
    contactTeacher: false,
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
    fullName: 'Bevisst Turbin',
    username: 'bev0304',
    mail: 'bevisst.turbin@vtfk.no',
    mobile: 4795959595,
    contactTeacher: false,
    relatedGroupIds: [
      '2_1MPYA/MAT1117_TESVS@38099'
    ]
  },
  {
    id: 'use0306',
    fullName: 'Usedvanlig Eske',
    username: 'use0306',
    mail: 'usedvanlig.eske@vtfk.no',
    contactTeacher: false,
    relatedGroupIds: [
      '2_2FY1A/REA3004_TESVS@38099'
    ]
  },
  {
    id: 'fly2507',
    fullName: 'Flyktig Logg',
    username: 'fly2507',
    mail: 'flyktig.logg@vtfk.no',
    contactTeacher: false,
    relatedGroupIds: [
      '2_2TY2B/FSP5122_TESVS@38099'
    ]
  },
  {
    id: 'bar0407',
    fullName: 'Barmhjertig Eplekake',
    username: 'bar0407',
    mail: 'barmhjertig.eplekake@vtfk.no',
    mobile: 4745000054,
    contactTeacher: false,
    relatedGroupIds: [
      '2_2IT1/REA3014_TESVS@38099'
    ]
  },
  {
    id: 'dis0904',
    fullName: 'Diskret Telefonkiosk',
    username: 'dis0904',
    mail: 'diskret.telefonkiosk@vtfk.no',
    contactTeacher: false,
    relatedGroupIds: [
      '2_2KJ1B/REA3011_TESVS@38099'
    ]
  },
  {
    id: 'ven2411',
    fullName: 'Vennlig Arm',
    username: 'ven2411',
    mail: 'vennlig.arm@vtfk.no',
    contactTeacher: false,
    relatedGroupIds: [
      '2_2MR1B/REA3022_TESVS@38099'
    ]
  },
  {
    id: 'sto3006',
    fullName: 'Stolt Komplisert Blindvegsjiraff',
    username: 'sto3006',
    mail: 'stolt.blindvegsjiraff@vtfk.no',
    mobile: 4793949494,
    contactTeacher: false,
    relatedGroupIds: [
      '2_2STB/HIS1001_TESVS@38099'
    ]
  },
  {
    id: 'kra0801',
    fullName: 'Kranglete Sykkel',
    username: 'kra0801',
    mail: 'kra0801@skole.vtfk.no',
    contactTeacher: false,
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
        default: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
        nob: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
        nno: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
      },
      kortform: {
        default: 'Norsk hovedmål, skriftlig',
        nob: 'Norsk hovedmål, skriftlig',
        nno: 'Norsk hovudmål, skriftleg'
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
        default: 'Undervisningsgruppa 1GK i Grunnkompetanse ved Testen videregående skole',
        nob: 'Undervisningsgruppa 1GK i Grunnkompetanse ved Testen videregående skole'
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
        default: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole',
        nob: 'Undervisningsgruppa 2STB/KLFAG i Læreplan generell del ved Testen videregående skole'
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
        default: 'Yrkesfaglig fordypning Vg1',
        nob: 'Yrkesfaglig fordypning Vg1',
        nno: 'Yrkesfagleg fordjuping Vg1'
      },
      kortform: {
        default: 'Yrkesfaglig fordypning Vg1',
        nob: 'Yrkesfaglig fordypning Vg1',
        nno: 'Yrkesfagleg fordjuping Vg1'
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
        default: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
        nob: 'Norsk hovedmål, Vg2 studieforberedende utdanningsprogram, skriftlig',
        nno: 'Norsk hovudmål, Vg2 studieførebuande utdanningsprogram, skriftleg'
      },
      kortform: {
        default: 'Norsk hovedmål, skriftlig',
        nob: 'Norsk hovedmål, skriftlig',
        nno: 'Norsk hovudmål, skriftleg'
      }
    }
  }
]

export const ACTIVITIES = [
  {
    id: 1,
    studentId: 1,
    firstName: 'Brage',
    lastName: 'Dahle',
    type: 'Varselbrev atferd',
    date: '12. juni 2020', // TODO: date
    status: 'Sendt',
    sentBy: 'Charlotte Testine'
  },
  {
    id: 2,
    studentId: 2,
    firstName: 'Erik',
    lastName: 'Wang',
    type: 'Varselbrev fag',
    date: '12. juni 2020', // TODO: date
    status: 'I kø',
    sentBy: 'Robert Gaarden'
  },
  {
    id: 3,
    studentId: 3,
    firstName: 'Per Andre',
    lastName: 'Olsen',
    type: 'Varselbrev atferd',
    date: '12. juni 2020', // TODO: date
    status: 'Arkivert',
    sentBy: 'Charlotte Testine'
  },
  {
    id: 4,
    studentId: 4,
    firstName: 'Dag Otto',
    lastName: 'Johannesen',
    type: 'Varselbrev fag',
    date: '12. juni 2020', // TODO: date
    status: 'I kø',
    sentBy: 'Robert Gaarden'
  },
  {
    id: 5,
    studentId: 5,
    firstName: 'Per Andre',
    lastName: 'Haler-Olsen',
    type: 'Varselbrev atferd',
    date: '12. juni 2020', // TODO: date
    status: 'Arkivert',
    sentBy: 'Charlotte Testine'
  }
]
