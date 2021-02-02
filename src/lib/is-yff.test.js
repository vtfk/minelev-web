import { isYff } from './is-yff'

describe('tester funksjonen isYff', () => {
  test('funksjonen kaster TypeError om den ikke får innsendt studentobjekt', () => {
    expect(() => isYff()).toThrow(TypeError)
  })

  test('Funksjonen returnerer false ved tomt objekt', () => {
    const student = {}
    const result = isYff(student)
    expect(result).toBeFalsy()
  })

  test('Funksjonen retunerer true om programområdet stemmer', () => {
    const student = {
      programomraade: {
        type: 'yrkesfaglig'
      }
    }
    const result = isYff(student)
    expect(result).toBeTruthy()
  })

  test('Funksjonen retunerer true om utdanningsprogram stemmer', () => {
    const student = {
      utdanningsprogram: {
        type: 'yrkesfaglig'
      }
    }
    const result = isYff(student)
    expect(result).toBeTruthy()
  })

  test('Funksjonen retunerer true om programområdet og utdanningsprogram stemmer', () => {
    const student = {
      programomraade: {
        type: 'yrkesfaglig'
      },
      utdanningsprogram: {
        type: 'yrkesfaglig'
      }
    }
    const result = isYff(student)
    expect(result).toBeTruthy()
  })

  test('Funksjonen retunerer true om programområdet og utdanningsprogram er ukjent', () => {
    const student = {
      programomraade: {
        type: 'Ukjent'
      },
      utdanningsprogram: {
        type: 'Ukjent'
      }
    }
    const result = isYff(student)
    expect(result).toBeTruthy()
  })

  test('Funksjonen retunerer false om en er ukjent og en er studieforberedende', () => {
    const student = {
      programomraade: {
        type: 'studieforberedende'
      },
      utdanningsprogram: {
        type: 'Ukjent'
      }
    }
    const result = isYff(student)
    expect(result).toBeFalsy()
  })
})
