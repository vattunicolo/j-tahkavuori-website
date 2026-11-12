# J. Tähkävuori Oy – Aitio 417

Next.js App Router, React, TypeScript ja Tailwind CSS 4. Suomeksi toteutettu responsiivinen esittelysivusto. Ei analytiikkaa, ulkoisia fontteja tai lomakkeella kerättäviä henkilötietoja. Varaustiedustelu avaa käyttäjän sähköpostiohjelman eikä tee varausta.

## Paikallinen käyttö

Node.js 22+ ja pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm build
pnpm start
```

Windowsin Turbopack-aliprosessiongelman vuoksi skriptit käyttävät Webpackia.

## Julkaisutila

**Tilaaja hyväksyi julkisen demojulkaisun 12.11.2026. Vercel-julkaisu on vielä kesken.**

Vercelin Next.js-asetukset ovat valmiina. Hakukoneindeksointi on estetty metatiedoissa, mutta se ei ole pääsynhallinta. Julkinen demo voidaan kytkeä GitHub-repositorioon.

Julkinen GitHub-repositorio: https://github.com/vattunicolo/j-tahkavuori-website .

Tarkemmat vaiheet: [Julkaisun valmistelu](docs/DEPLOYMENT.md). Sisällön lähteet ja tarkistusasiat: [Sisältötiedot](docs/CONTENT.md).

