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
