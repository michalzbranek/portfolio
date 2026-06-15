# PLAN.md — portfolio

## Kontext

Migrace React 19 + MUI → vanilla HTML/CSS/JS (větev `vanilla-migration`, PR #17).
Základní struktura je hotová (`index.html`, `css/styles.css`, `js/data.js`, `js/main.js`).

**Problém:** vizuálně nesedí 1:1 s původní React verzí. Níže jsou konkrétní opravy
doměřené porovnáním obou živých verzí přes Chrome (getBoundingClientRect + computed
styly, viewport 1144×756).

---

## Stav migrace

### ✅ Hotovo
- `index.html` — HTML kostra: nav, hamburger, drawer, sidebar, sekce #home/#about/#projects/#contact
- `css/styles.css` — mobile-first, dark background, Russo One
- `js/data.js` — veškerý obsah (texty, projekty, sociální sítě)
- `js/main.js` — render z data.js + drawer toggle + smooth-scroll
- `.nojekyll`, `CONTEXT.md`, `README.md`
- Smazány: `src/`, `package.json`, `vite.config*`, `tsconfig*`, `eslint.config*`, `deploy.yml`

### ❌ Zbývá — vizuální opravy (tato větev)

Viz tabulka níže.

### ⬜ Tech-dluh (po merge)
- Smazat `dist/` a `scripts/` (zbytky po Vite buildu, do vanilla repa nepatří).
- Přepnout GH Pages → Source `main` / root (místo gh-pages větve).
- Volitelně přejmenovat `public/` → `images/` (konzistence s photoalbum).

---

## Vizuální opravy — `css/styles.css`

React layout: MUI Grid (`size=2` = 16.67 % sidebar, `size=10` = 83.33 % obsah),
AppBar výška 144 px (padding 40px + Toolbar 64px + 40px).

### 1. Drawer — přetékání textu na desktopu

**Problém:** Drawer je v DOM vždy přítomen (`position:fixed`, `translateX(-240px)`),
ale na desktopu čouhá text z části klíčových slov ("TY", "XT") na levém okraji.

```css
/* Přidat do @media (min-width: 600px) */
.drawer,
.drawer-overlay {
  display: none;
}
```

### 2. Offset obsahu zleva

**React:** sloupec `size=2` = **16.67 %** viewportu.  
**Vanilla teď:** `padding-left: 80px` (fixní pixely).

```css
/* .content — nahradit padding-left: var(--sidebar-w) */
.content {
  margin-left: 16.6667%;
}
/* --sidebar-w (fixní šířka sidebaru) nechat pro sidebar samotný */
```

### 3. Výška navu

**React:** 144 px (py `xs:2/sm:5` = 40px nahoře + Toolbar 64px + 40px dole).  
**Vanilla teď:** 72 px.

```css
.top-nav {
  min-height: 144px;
  padding: 40px 24px;
}
```

### 4. Font navu — pevné kroky (ne clamp)

**React:** `fontSize: { sm: 18, md: 22, lg: 25 }` — MUI breakpointy.  
**Vanilla teď:** `clamp(16px, 1.4vw, 25px)` → na 1144px jen 16px.

```css
/* @media (min-width: 600px) */
.desktop-nav a { font-size: 18px; }
/* @media (min-width: 900px) */
.desktop-nav a { font-size: 22px; }
/* @media (min-width: 1200px) */
.desktop-nav a { font-size: 25px; }
```

### 5. Home — svislé odsazení a mezera jméno↔role

**React:** `<p>` má `padding-top: 10%` (95px) a `margin-bottom: 0.35em`; `line-height: 1.5`.  
**Vanilla teď:** sekce má `padding-top: 10%` (ok), ale `h1` nemá line-height ani margin.

```css
.section-home h1 {
  line-height: 1.5;
  margin-bottom: 0.35em;
  padding-top: 10%;
}
.section-home p {
  line-height: 1.5;
  margin-bottom: 0.35em;
}
/* Zrušit justify-content: flex-start ze section-home (nebo nechat — padding-top to řeší) */
```

### 6. Sidebar — velikost ikony

**React:** icon button box **44×44 px**.  
**Vanilla teď:** 80×80 px (= `--sidebar-w`).

```css
.sidebar a {
  width: 44px;
  height: 44px;
}
```

### 7. Sidebar — mezera mezi ikonami

**React:** `my: 1` = 8px nahoře + 8px dole = **16px** gap.  
**Vanilla teď:** `gap: 0.25rem` = 4px.

```css
.sidebar {
  gap: 16px;
}
```

### 8. Sidebar — odsazení zleva a zdola

**React:** ikona ~55px od levého okraje (`pl: 2%` na boxu + padding tlačítka).  
**React:** poslední ikona 56px od spodu (`pb: 6` = 48px + padding).  
**Vanilla teď:** `left: 0; padding-bottom: 24px`.

```css
.sidebar {
  left: 2%;
  padding-bottom: 48px;
}
```

---

## Shrnutí oprav v jednom bloku (patch do `css/styles.css`)

```css
/* --- Opravy vizuální shody s React verzí --- */

.top-nav {
  min-height: 144px;
  padding: 40px 24px;
}

.content {
  margin-left: 16.6667%;
  /* odstranit padding-left: var(--sidebar-w) */
}

.sidebar {
  left: 2%;
  gap: 16px;
  padding-bottom: 48px;
}

.sidebar a {
  width: 44px;
  height: 44px;
}

.section-home h1 {
  padding-top: 10%;
  line-height: 1.5;
  margin-bottom: 0.35em;
}

.section-home p {
  line-height: 1.5;
  margin-bottom: 0.35em;
}

@media (min-width: 600px) {
  .drawer,
  .drawer-overlay {
    display: none;
  }
  .desktop-nav a {
    font-size: 18px;
  }
}

@media (min-width: 900px) {
  .desktop-nav a { font-size: 22px; }
}

@media (min-width: 1200px) {
  .desktop-nav a { font-size: 25px; }
}
```

---

## Verifikace po opravách

1. Otevřít vanilla verzi (raw.githack nebo lokální server) a React verzi vedle sebe.
2. Porovnat na šířce 1280px:
   - Nav výška ~144px ✓
   - Obsah začíná ~16.67% zleva ✓
   - Jméno "Michal Zbranek" vodorovně i svisle na stejné pozici ✓
   - Sidebar ikony 44px, gap 16px, odsazení od okraje ✓
   - Na desktopu žádný text nečouhá z levého okraje ✓
3. Mobilní šířka (< 600px): hamburger viditelný, sidebar správně.
