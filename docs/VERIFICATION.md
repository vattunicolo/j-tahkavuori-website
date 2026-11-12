# Tarkistukset 12.11.2026

- Next.js-tuotantokooste `next build --webpack`: hyväksytty.
- TypeScript: hyväksytty (erillinen tsc ja tuotantokoosteen tarkistus).
- Paikallinen HTTP-tarkistus `node scripts/verify.mjs`: hyväksytty. Sivun 200-vastaus, suomen kieli, noindex, yhteyslinkit, myyntihinta, 22 ottelua, 15 varaustiedustelulinkkiä, kuvat ja 404.
- Aidot kuvat ladattu alkuperäiseltä sivustolta ja kaksi pääkuvaa tarkistettu.
- Selaimen visuaalinen tarkistus ja interaktiivisten suodattimien klikkaustesti jäivät tekemättä: lupaportti esti paikallisen esikatselun avaamisen. Responsiivisuus on toteutettu CSS:ssä, mutta sitä ei ole vahvistettu kuvakaappauksilla.
- GitHub-repositorio jäi luomatta: lupaportti esti GitHub-selaimen avaamisen. Ei etärepositoriota tai pushia.
- Verceliä ei yhdistetty eikä julkaisua tehty tilaajan ohjeen mukaisesti.

## Ennen esittelylinkin lähettämistä

Tarkista selaimessa leveydet 390, 768 ja 1440 px. Testaa jokainen kuukausi, vain vapaat -valinta ja niiden yhdistelmät. Varmista että varaustiedustelu avaa sähköpostiohjelman oikealla ottelulla ja että puhelinlinkki on oikein. Tarkista galleriakuvat, näppäimistökohdistus ja mobiilissa ettei tule vaakavieritystä.
