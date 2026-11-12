# GitHub Pages -julkaisu

Tilaaja hyväksyi julkisen demon 12.11.2026 ja valitsi GitHub Pagesin Vercelin sijaan.

Repositorio: https://github.com/vattunicolo/j-tahkavuori-website

Odotettu osoite julkaisun valmistuttua: https://vattunicolo.github.io/j-tahkavuori-website/

`.github/workflows/pages.yml` rakentaa Next.js-sivuston staattiseksi `out`-hakemistoon ja julkaisee sen Pagesiin. Työnkulku käynnistyy main-haaran muutoksesta tai käsin Actions-välilehdeltä. Se ei vaadi erillisiä salaisuuksia, Vercel-tiliä tai API-avaimia.

Pages on otettava kerran käyttöön repositorion Settings > Pages > Build and deployment > Source > GitHub Actions -valinnalla. Liitännäisen työkaluvalikoima ei tarjoa Pages-asetusten muutosta. Julkaisutyönkulun GITHUB_TOKEN ei voi ottaa Pagesia ensimmäistä kertaa käyttöön; tämä on erillinen repositorion omistajan asetus. Kun asetus on tehty, suorita tarvittaessa epäonnistunut työnkulku uudelleen Actions-välilehdeltä.

Kuvat ja JavaScript/CSS käyttävät `NEXT_PUBLIC_BASE_PATH=/j-tahkavuori-website`-etuliitettä. Sivusto säilyy Next.js- ja Tailwind-toteutuksena, mutta julkaisu ei tarvitse Node-palvelinta.

Paikallinen Pages-kooste PowerShellissä:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/j-tahkavuori-website'
pnpm build
node scripts/check-export.mjs
pnpm start
```

Demo on noindex-merkitty. Se ei estä suoraa katselua. Nykyiseen yrityssivustoon tai verkkotunnukseen ei tehdä muutoksia. Linkkiä ei lähetetä omistajalle automaattisesti.
