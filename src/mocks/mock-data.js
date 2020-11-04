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

export const DOCUMENTS = [
  {
    _id: '5fa2aeb54b1f46f7ad4fb84a',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1601557954198,
      username: 'rus26021'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje'
    },
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove'
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
        status: 'I kø'
      },
      {
        timestamp: 1601557954208,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601557954218,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5cc80a6dadedfc7fe',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1601490382619,
      username: 'vik2606'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig'
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
        status: 'I kø'
      },
      {
        timestamp: 1601490382629,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601490382639,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb58040f6ca7cba5fb0',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1600258358720,
      username: 'pre0711'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1600258358730,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600258358740,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb52eec1257c9959c32',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1600809487966,
      username: 'fly2507'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist'
    },
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg'
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
        status: 'I kø'
      },
      {
        timestamp: 1600809487976,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600809487986,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb57f0f0f2051bf8bc9',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1602865392823,
      username: 'pre0711'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1602865392833,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1602865392843,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5e863b8e3e27c5239',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1600650072239,
      username: 'fly2507'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'fly2507',
      name: 'Flyktig Logg'
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
        status: 'I kø'
      },
      {
        timestamp: 1600650072249,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600650072259,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5c1c52683b6ee0789',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1602495682375,
      username: 'vik2606'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig'
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
        status: 'I kø'
      },
      {
        timestamp: 1602495682385,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1602495682395,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb519aa565a82d5126b',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1599453926144,
      username: 'sto3006'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff'
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
        status: 'I kø'
      },
      {
        timestamp: 1599453926154,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599453926164,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5c27778c41f8daea2',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1599030208075,
      username: 'kra0801'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1599030208085,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599030208095,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb566d7f2b99b066c50',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1601402806095,
      username: 'bar0407'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake'
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
        status: 'I kø'
      },
      {
        timestamp: 1601402806105,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601402806115,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5f43d2624fad36cf8',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1598732617838,
      username: 'use0306'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske'
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
        status: 'I kø'
      },
      {
        timestamp: 1598732617848,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598732617858,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5c41540f576f3ae47',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1597953142230,
      username: 'kra0801'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1597953142240,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1597953142250,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb581482f15154eec28',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1598833191091,
      username: 'use0306'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske'
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
        status: 'I kø'
      },
      {
        timestamp: 1598833191101,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598833191111,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5abf4a83758083596',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1599206972644,
      username: 'skj1207'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt'
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
        status: 'I kø'
      },
      {
        timestamp: 1599206972654,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599206972664,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5670cc04a5f875ee2',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1597777699304,
      username: 'fal0309'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft'
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
        status: 'I kø'
      },
      {
        timestamp: 1597777699314,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1597777699324,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb59694f1fea9d2abe0',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1597971632052,
      username: 'sto3006'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff'
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
        status: 'I kø'
      },
      {
        timestamp: 1597971632062,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1597971632072,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb514b2b4b11ce8ea56',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1599313534086,
      username: 'vik2606'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig'
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
        status: 'I kø'
      },
      {
        timestamp: 1599313534096,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599313534106,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb51f7547e4fea1e054',
    type: 'varsel',
    variant: 'fag',
    created: {
      timestamp: 1601746377500,
      username: 'skj1207'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt'
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
        status: 'I kø'
      },
      {
        timestamp: 1601746377510,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601746377520,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb580cf494aa67f6607',
    type: 'varsel',
    variant: 'fag',
    created: {
      timestamp: 1601917341017,
      username: 'bar0407'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake'
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
        status: 'I kø'
      },
      {
        timestamp: 1601917341027,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601917341037,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb580e6d88abdb2cac5',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1604072226472,
      username: 'use0306'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske'
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
        status: 'I kø'
      },
      {
        timestamp: 1604072226482,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1604072226492,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5b108eb85bc98af20',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1600960994640,
      username: 'skj1207'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt'
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
        status: 'I kø'
      },
      {
        timestamp: 1600960994650,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600960994660,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb504d7f478eab11077',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1602870609990,
      username: 'pre0711'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1602870610000,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1602870610010,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5bbaf170672f36c90',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1604347514248,
      username: 'fal0309'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft'
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
        status: 'I kø'
      },
      {
        timestamp: 1604347514258,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1604347514268,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5e2a045dd3dc8baa2',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1602292228780,
      username: 'bev0304'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel'
    },
    teacher: {
      username: 'bev0304',
      name: 'Bevisst Turbin'
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
        status: 'I kø'
      },
      {
        timestamp: 1602292228790,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1602292228800,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb517694cf13dc51c35',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1597928834727,
      username: 'bar0407'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake'
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
        status: 'I kø'
      },
      {
        timestamp: 1597928834737,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1597928834747,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5bc55c90142ebafce',
    type: 'varsel',
    variant: 'fag',
    created: {
      timestamp: 1602006464562,
      username: 'tri0308'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen'
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
        status: 'I kø'
      },
      {
        timestamp: 1602006464572,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1602006464582,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5ef40a0fefc0e7343',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1600277377532,
      username: 'fal0309'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft'
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
        status: 'I kø'
      },
      {
        timestamp: 1600277377542,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600277377552,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5357d44b5fc1b306d',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1604186806754,
      username: 'fal0309'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft'
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
        status: 'I kø'
      },
      {
        timestamp: 1604186806764,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1604186806774,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5256392249990e39d',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1602818303334,
      username: 'pre0711'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1602818303344,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1602818303354,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5d12c4d7432d6c135',
    type: 'varsel',
    variant: 'fag',
    created: {
      timestamp: 1602595420172,
      username: 'fal0309'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft'
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
        status: 'I kø'
      },
      {
        timestamp: 1602595420182,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1602595420192,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb53e8019713248942f',
    type: 'varsel',
    variant: 'fag',
    created: {
      timestamp: 1603237798683,
      username: 'tri0308'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen'
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
        status: 'I kø'
      },
      {
        timestamp: 1603237798693,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1603237798703,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5f57123792bf3972f',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1601474996085,
      username: 'skj1207'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt'
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
        status: 'I kø'
      },
      {
        timestamp: 1601474996095,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601474996105,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb50e8d5a615d11a0d4',
    type: 'varsel',
    variant: 'fag',
    created: {
      timestamp: 1598133490679,
      username: 'ven2411'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje'
    },
    teacher: {
      username: 'ven2411',
      name: 'Vennlig Arm'
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
        status: 'I kø'
      },
      {
        timestamp: 1598133490689,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598133490699,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb59ae2e4ea9330ec0f',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1600352983308,
      username: 'opp1805'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'opp1805',
      name: 'Oppfyllende Kråke'
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
        status: 'I kø'
      },
      {
        timestamp: 1600352983318,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600352983328,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb526b62413029e5f90',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1604478430700,
      username: 'use0306'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske'
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
        status: 'I kø'
      },
      {
        timestamp: 1604478430710,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1604478430720,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5d81a32ea10ae3fcb',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1603488966683,
      username: 'sto3006'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff'
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
        status: 'I kø'
      },
      {
        timestamp: 1603488966693,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1603488966703,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb58b3608f8202cb3ef',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1601923442560,
      username: 'fal0309'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft'
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
        status: 'I kø'
      },
      {
        timestamp: 1601923442570,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601923442580,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5d9822c3fc71856e1',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1600946652285,
      username: 'dis0904'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk'
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
        status: 'I kø'
      },
      {
        timestamp: 1600946652295,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600946652305,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5a65dd58b9858beb5',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1598907632132,
      username: 'skj1207'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt'
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
        status: 'I kø'
      },
      {
        timestamp: 1598907632142,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598907632152,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb56625ae735925775c',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1597796486937,
      username: 'dis0904'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk'
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
        status: 'I kø'
      },
      {
        timestamp: 1597796486947,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1597796486957,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb520d5e3042dc9cde7',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1599743332073,
      username: 'kra0801'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1599743332083,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599743332093,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb58c4337286a2c10ae',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1598039525189,
      username: 'fal0309'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft'
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
        status: 'I kø'
      },
      {
        timestamp: 1598039525199,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598039525209,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5e56f2a05b8f5f6e6',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1598175435076,
      username: 'tri0308'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen'
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
        status: 'I kø'
      },
      {
        timestamp: 1598175435086,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598175435096,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5989a12ec168b7dc7',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1599146020639,
      username: 'skj1207'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt'
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
        status: 'I kø'
      },
      {
        timestamp: 1599146020649,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599146020659,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb57b7569b0c91f47ea',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1603095899820,
      username: 'use0306'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske'
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
        status: 'I kø'
      },
      {
        timestamp: 1603095899830,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1603095899840,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb54d908a6d26279652',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1600364365628,
      username: 'rus26021'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove'
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
        status: 'I kø'
      },
      {
        timestamp: 1600364365638,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600364365648,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb51b995bdc2d460717',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1598390881071,
      username: 'skj1207'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt'
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
        status: 'I kø'
      },
      {
        timestamp: 1598390881081,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598390881091,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb516ca936ba748d550',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1601958525263,
      username: 'vik2606'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig'
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
        status: 'I kø'
      },
      {
        timestamp: 1601958525273,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601958525283,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5e1998cf14be191c0',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1601305127595,
      username: 'dis0904'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk'
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
        status: 'I kø'
      },
      {
        timestamp: 1601305127605,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601305127615,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5372aa80d2cfb9348',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1598453724856,
      username: 'tri0308'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen'
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
        status: 'I kø'
      },
      {
        timestamp: 1598453724866,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598453724876,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5ee0cf028551f21e1',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1602462719313,
      username: 'rus26021'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove'
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
        status: 'I kø'
      },
      {
        timestamp: 1602462719323,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1602462719333,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5959c53386d411c97',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1600230827016,
      username: 'skj1207'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt'
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
        status: 'I kø'
      },
      {
        timestamp: 1600230827026,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600230827036,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5a0243ed25a9f142a',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1598707478054,
      username: 'kra0801'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1598707478064,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598707478074,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5f21749d5766174fb',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1597821508409,
      username: 'use0306'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring'
    },
    teacher: {
      username: 'use0306',
      name: 'Usedvanlig Eske'
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
        status: 'I kø'
      },
      {
        timestamp: 1597821508419,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1597821508429,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb52d2f736b0df4f4c6',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1601151223154,
      username: 'vik2606'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig'
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
        status: 'I kø'
      },
      {
        timestamp: 1601151223164,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601151223174,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb55bb20671f45abd7e',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1600099240914,
      username: 'sto3006'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff'
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
        status: 'I kø'
      },
      {
        timestamp: 1600099240924,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600099240934,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb53e9b4efdd1a4c580',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1598428341261,
      username: 'pre0711'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'pre0711',
      name: 'Presis Damesykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1598428341271,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598428341281,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5b2b8869105830a2c',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1599484407456,
      username: 'dis0904'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk'
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
        status: 'I kø'
      },
      {
        timestamp: 1599484407466,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599484407476,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5456b1ccb67fc6d41',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1603000236779,
      username: 'bev0304'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel'
    },
    teacher: {
      username: 'bev0304',
      name: 'Bevisst Turbin'
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
        status: 'I kø'
      },
      {
        timestamp: 1603000236789,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1603000236799,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb57c46534bacb8460f',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1598424198048,
      username: 'sto3006'
    },
    student: {
      username: 'dyn06061',
      name: 'Dynamisk Hevngjerrig Statist'
    },
    teacher: {
      username: 'sto3006',
      name: 'Stolt Komplisert Blindvegsjiraff'
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
        status: 'I kø'
      },
      {
        timestamp: 1598424198058,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598424198068,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb570fa67453610bd6d',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1601282808947,
      username: 'dis0904'
    },
    student: {
      username: 'vis05042',
      name: 'Vis Motbakkeklaring'
    },
    teacher: {
      username: 'dis0904',
      name: 'Diskret Telefonkiosk'
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
        status: 'I kø'
      },
      {
        timestamp: 1601282808957,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1601282808967,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5d8ffc101ac615f4e',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1600506404763,
      username: 'tri0308'
    },
    student: {
      username: 'ett09051',
      name: 'Etterpåklok Underfundig Filetfrue'
    },
    teacher: {
      username: 'tri0308',
      name: 'Trine Testesen'
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
        status: 'I kø'
      },
      {
        timestamp: 1600506404773,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600506404783,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb53a99f6e831697038',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1599981639613,
      username: 'vik2606'
    },
    student: {
      username: 'tro1407',
      name: 'Trofast Bomullballsko'
    },
    teacher: {
      username: 'vik2606',
      name: 'Viktig Kjærlig'
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
        status: 'I kø'
      },
      {
        timestamp: 1599981639623,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599981639633,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5f5d8b7f68a0d4154',
    type: 'samtale',
    variant: 'samtale',
    created: {
      timestamp: 1598920368545,
      username: 'bar0407'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'bar0407',
      name: 'Barmhjertig Eplekake'
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
        status: 'I kø'
      },
      {
        timestamp: 1598920368555,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1598920368565,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb51077cc49bc79c1b4',
    type: 'varsel',
    variant: 'fag',
    created: {
      timestamp: 1602497629119,
      username: 'bev0304'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'bev0304',
      name: 'Bevisst Turbin'
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
        status: 'I kø'
      },
      {
        timestamp: 1602497629129,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1602497629139,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb513f51e5ab2a5b8f5',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1600756351729,
      username: 'skj1207'
    },
    student: {
      username: 'uin2704',
      name: 'Uinspirert Rektangulær Sykkel'
    },
    teacher: {
      username: 'skj1207',
      name: 'Skjønn Initiativrik Plikt'
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
        status: 'I kø'
      },
      {
        timestamp: 1600756351739,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600756351749,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb52ccfd4b1f99d2284',
    type: 'samtale',
    variant: 'ikke-samtale',
    created: {
      timestamp: 1599687535241,
      username: 'kra0801'
    },
    student: {
      username: 'lil1312',
      name: 'Lilla Spenne'
    },
    teacher: {
      username: 'kra0801',
      name: 'Kranglete Sykkel'
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
        status: 'I kø'
      },
      {
        timestamp: 1599687535251,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599687535261,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb5ea579d71d0f2303e',
    type: 'varsel',
    variant: 'atferd',
    created: {
      timestamp: 1600336414748,
      username: 'fal0309'
    },
    student: {
      username: 'alv1706',
      name: 'Alvorlig Lykke'
    },
    teacher: {
      username: 'fal0309',
      name: 'Falsk Handlekraft'
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
        status: 'I kø'
      },
      {
        timestamp: 1600336414758,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1600336414768,
        status: 'Arkivert i Public 360'
      }
    ]
  },
  {
    _id: '5fa2aeb597cd0c99af620558',
    type: 'varsel',
    variant: 'orden',
    created: {
      timestamp: 1599031288490,
      username: 'rus26021'
    },
    student: {
      username: 'opp2004',
      name: 'Oppfyllende Palmeolje'
    },
    teacher: {
      username: 'rus26021',
      name: 'Ru Sovealkove'
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
        status: 'I kø'
      },
      {
        timestamp: 1599031288500,
        status: 'Sendt med SvarUt'
      },
      {
        timestamp: 1599031288510,
        status: 'Arkivert i Public 360'
      }
    ]
  }
]

export const getRandomObjectId = function () {
  const timestamp = (new Date().getTime() / 1000 | 0).toString(16)
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16)
  }).toLowerCase()
}
