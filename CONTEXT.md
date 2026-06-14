# Glosář

Pojmy používané v projektu portfolia.

---

## Sekce

Jedna ze čtyř obsahových jednotek portfolia: **Domů**, **O mně**, **Projekty**, **Kontakt**.
Každá sekce má unikátní ID (`#home`, `#about`, `#projects`, `#contact`),
na které odkazuje navigace.

## Navigace

Horizontální lišta fixovaná v horní části obrazovky.

- **Desktop (≥ 600 px):** textové odkazy vpravo.
- **Mobil:** hamburger tlačítko vlevo — otevírá **Drawer**.

## Drawer

Mobilní panel s navigačními odkazy, vysouvající se zleva po kliknutí na hamburger.
Zavírá se kliknutím na overlay nebo na libovolný odkaz.

## Sidebar

Vertikální lišta s ikonami sociálních sítí fixovaná na levém okraji obrazovky.
Zobrazuje se na všech rozlišeních.
Data jsou definována v `js/data.js` jako pole `SOCIAL_LINKS`.

## Projekty

Mřížka náhledů projektů v sekci Projekty. Každý projekt má název, odkaz a screenshot.
Data jsou definována v `js/data.js` jako pole `PROJECTS`.
