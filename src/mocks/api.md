# API

Fanger opp kall som går mot https://api.minelev.no

## YFF

### GET /yff/:student/:type/:id

Returnerer 5 typer dersom id er utelatt og 1 dersom id sendes med

Dersom kun student sendes inn returnreres 

```JavaScript
{
  maal: [5],
  utplasseringer: [1],
  tilbakemeldinger: [1]
}
```

### POST /yff/:student/:type

Returnerer array av 1 type

### PUT /yff/:student/:type/:id

Returnerer array av 1 type

### DELETE /yff/:student/:type/:id

Returnerer

```JavaScript
{
  success: true
}
```

For å se formatet på data kikk på [yff](yff.js)
