# GitHub ja Vercel

## Valmisteltu

- Next.js-sovellus ja lukittu pnpm-riippuvuusluettelo.
- Vercelin framework-asetus ja automaattisten Git-julkaisujen esto.
- Demo merkitty hakukoneilta piilotettavaksi.
- Ei salasanoja, API-avaimia tai ympäristömuuttujia tarvita.

## GitHub-yhteyden sallimisen jälkeen

Luo yksityinen `j-tahkavuori-website`-repositorio ja vie paikallinen projekti siihen. Älä lisää lähdekoodiin alkuperäistä HTML-tallennetta, node_modules-, .next-, .vercel- tai .env-tiedostoja. Selaimen GitHub-lupaportti esti repositorion luonnin tässä työvaiheessa.

## Vasta tilaajan nimenomaisen julkaisuhyväksynnän jälkeen

1. Kirjaudu haluttuun Vercel-tiliin ja valitse oikea tiimi. Varmista että kyseessä on erillinen demoprojekti, ei nykyisen yrityssivun korvaus.
2. Suositeltu ensimmäinen julkaisu on CLI:n `vercel`-komennolla tehtävä Preview, ei `--prod`. Asenna CLI virallisesta npm-paketista tai käytä Vercelin käyttöliittymää hyväksynnän jälkeen. Älä suorita deploy-komentoa ennen hyväksyntää.
3. Tarkista projektin nimi `j-tahkavuori-demo`, Next.js-kehys, asennus `pnpm install --frozen-lockfile`, build `pnpm build`, output Next.js-oletus.
4. Selvitä Preview-linkin suojaus: omistajalle lähetettävän linkin pitää aueta sovitulla pääsyllä. Älä poista suojausta ilman tilaajan päätöstä.
5. Tarkista toimiva HTTPS-linkki, puhelin- ja sähköpostilinkit sekä ottelusuodattimet myös mobiilissa.
6. Lähetä linkki omistajalle vasta erillisestä lähetyspyynnöstä. Tämä projekti ei lähetä viestejä automaattisesti.

Nykyisen verkkotunnuksen DNS-asetuksia ei muuteta demoa varten. Automaattiset julkaisut pidetään pois käytöstä kunnes niistä sovitaan.
