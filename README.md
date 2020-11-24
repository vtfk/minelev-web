[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# VTFK MinElev React

React app for MinElev

## Utvikling

- Klon ned repoet
- Installer avhengigheter:  `npm i`
- Lag en lokal .env fil slik som [env.example](env.example)
- Start utviklingsserver: `npm run dev`

## API

Det er laget 3 metoder som gjør kall mot APIer som sender med innlogget brukers token.

```JavaScript
import useSession from '@vtfk/react-msal'
const { apiGet, apiPost, apiPut } = useSession()

const get = await apiGet('url')
const post = await apiPost('url', payload)
const put = await apiPut('url', payload)
```

## Demomodus

- `npm run demo`
- Setter demobruker og tokens i session
- Returner mock data fra API

## Mock

- Bruker biblioteket [msw](https://mswjs.io/)
- Oppsett ligger i [src/mock](src/mock)
- Legg ruter som skal mockes i [handlers.js](src/mock/handlers.js)
- Les mer i [api.md](/src/mocks/api.md)
