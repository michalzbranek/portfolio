# Portfolio — Michal Zbranek

Osobní portfolio. Statická stránka bez build kroků nebo závislostí.

## Jak upravit obsah

Otevři `js/data.js` — všechna data (jméno, projekty, kontakt, sociální sítě) jsou zde.

## Jak přidat projekt

1. Přidej screenshot do složky `public/`.
2. Přidej záznam do pole `PROJECTS` v `js/data.js`:

```js
{
  title: 'Název projektu',
  href:  'https://...',
  img:   'public/screenshot.png',
  alt:   'Popis obrázku pro přístupnost'
}
```

## Jak spustit lokálně

Stránka potřebuje HTTP server (přímé otevření `index.html` nemusí fungovat správně).

```bash
python3 -m http.server
# otevři http://localhost:8000
```

Alternativy: VS Code Live Server, `npx serve`.

## Nasazení na GitHub Pages

1. Push na větev `main`.
2. V repozitáři: **Settings → Pages → Source: Deploy from branch → main / / (root)**.
3. Uložit — stránka bude dostupná na `https://michalzbranek.github.io/portfolio/`.

> Pokud Pages stále zobrazuje starou verzi, ujisti se, že zdrojem je větev `main` (ne `gh-pages`).

## Struktura

```
portfolio/
├── index.html       # HTML stránka
├── css/
│   └── styles.css   # styly (mobile-first)
├── js/
│   ├── data.js      # OBSAH — edituj zde
│   └── main.js      # render logika
├── public/          # obrázky projektů (blog.png, fcmalenovice.png)
├── CONTEXT.md       # glosář pojmů
└── README.md        # tento soubor
```
