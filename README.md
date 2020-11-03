[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# VTFK MinElev React

React app for MinElev

## For utvikling

- klon repo
- installer avhengigheter `npm i`
- lag en lokal .env fil slik som [env.example](env.example)
- start utviklingsserver `npm run dev`

## API

Det er laget 3 metoder som gjør kall mot APIer som sender med innlogget brukers token.

```JavaScript
import useSession from './lib/auth-provider'
const { apiGet, apiPost, apiPut } = useSession()

const get = await apiGet('url')
const post = await apiPost('url', payload)
const put = await apiPut('url', payload)
```

## Demo modus

- `npm run demo`
- setter demobruker og tokens i session


## Mock

- Bruker biblioteket [msw](https://mswjs.io/)
- oppsett ligger i [src/mock](src/mock)
- legg ruter som skal mockes i [handlers.js](src/mock/handlers.js)
- les mer i [api.md](/src/mocks/api.md) 
