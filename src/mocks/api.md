# API

Fanger opp kall som går mot API-endepunkt konfigurert i env ``APP_API_URL``.

## Students

### ```GET /students```

Returns an array of current users students.

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getStudents.md)

### ```GET /students/:id```

Returns an object of given student with available documents

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getStudent.md)

### ```GET /students/:id/classes```

Returns a list of given students classes

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getStudentClasses.md)

### ```GET /students/:id/teachers```

Returns a list of given students teachers

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getStudentTeachers.md)

----

## Classes

### ```GET /classes```

Returns a list of the current users classes

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getClasses.md)

### ```GET /classes/:id```

Returns the whole group object with related students and teachers

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getClass.md)

### ```GET /classes/:id/students```

Returns the students that is members of the specified group

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getClassStudents.md)

### ```GET /classes/:id/teachers```

Returns the teachers of the specified group

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getClassTeachers.md)

----

## Documents

**Types and variants**:
|Type|Variant|
|----|-------|
|varsel|fag|
|varsel|orden|
|varsel|atferd|
|samtale|samtale|
|samtale|ikke-samtale|
|yff|yff-bekreftelse|
|yff|yff-bekreftelse-bedrift|
|yff|yff-lokalplan-maal|
|yff|yff-tilbakemelding|
|notat|notat|

### ```GET /documents```

Returns all documents belonging to the students you are contact teacher for, or those you have sent.

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getDocuments.md)

### ```GET /documents/:student```

Returns all documents sent to a student

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getStudentDocuments.md)

### ```POST /documents/:student```

Adds a new document that should be sent and/or stored to the queue. Returns the created document with its _id and such

Example request body:
```json
{
  "type": "varsel",
  "variant": "atferd",
  "content": {
    "period": "Standpunktkarakter",
    "reasons": [
      "Du har benyttet rusmidler i skoletida",
      "Du utviser provoserende atferd mot ansatte eller medelever"
    ]
  }
}
```

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getStudentDocuments.md#id)

### ```GET /documents/:student/:type```

Gets all students documents by specific type

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getStudentDocuments.md#type)

### ```GET /documents/:student/:type/id```

Gets a single document by its type and id

[Example response](https://github.com/vtfk/minelev-api/blob/main/docs/getStudentDocuments.md#id)

```json
{
  "_id": "5fa2aeb580e6d88abdb2cac5",
  "type": "varsel",
  "variant": "atferd",
  "created": {
    "timestamp": 1604072226472,
    "username": "use0306"
  },
  "student": {
    "username": "uin2704",
    "name": "Uinspirert Rektangulær Sykkel"
  },
  "teacher": {
    "username": "use0306",
    "name": "Usedvanlig Eske"
  },
  "school": {
    "id": "TESVS",
    "name": "Testen videregående skole"
  },
  "content": {
    "period": "Standpunktkarakter",
    "reasons": [
      "Du utviser provoserende atferd mot ansatte eller medelever",
      "Du har benyttet rusmidler i skoletida"
    ]
  },
  "encrypted": false,
  "isQueued": false,
  "status": [
    {
      "timestamp": 1604072226472,
      "status": "I kø"
    },
    {
      "timestamp": 1604072226482,
      "status": "Sendt med SvarUt"
    },
    {
      "timestamp": 1604072226492,
      "status": "Arkivert i Public 360"
    }
  ]
}
```

----

## YFF

### ```GET /yff/:student/:type/:id```

Returns ``5 types`` if ID isn't sent, ``1 type`` if ID is present and if there is only a student ID specified, this is returned:

```javascript
{
  maal: [5],
  utplasseringer: [1],
  tilbakemeldinger: [1]
}
```

To see the data format, please head over [here](yff.js)
