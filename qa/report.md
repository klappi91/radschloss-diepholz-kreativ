# QA Report — RadSchloß Diepholz (Kreativ)

Datum: 2026-04-05
Variante: Kreativ
Projekt: `/home/chris/projects/relaunch-radschloss-diepholz/radschloss-diepholz-kreativ`

---

## Zusammenfassung

- Getestete Seiten: 7/7 (Build-Routen)
- Bestanden: 5
- Mit Problemen: 2 (gravel-rennrad, leasing)
- Kritische Fehler: 1 (fehlendes Bild, alle Gravel-Produkte broken)
- Warnungen: 3

---

## Build-Status

Build: ERFOLGREICH (0 Fehler, 0 TypeScript-Fehler)

Generierte Routen:
- / (Startseite)
- /city-urban
- /trekking-suv
- /mtb-kids
- /gravel-rennrad
- /leasing
- /kontakt

---

## Ergebnisse pro Seite

### Startseite (/)

- Status: BESTANDEN
- Screenshots: desktop/home.png | mobile/home.png
- HTTP: 200 OK
- Hero-Section: vorhanden (Vollbild-Hero mit Hintergrundbild hero.jpg)
- Logo: sichtbar (RadSchloß PNG, weiss auf transparentem Header)
- CTA-Buttons: vorhanden ("Sortiment entdecken", "WhatsApp")
- Navigation: vorhanden, alle 7 Links korrekt
- Footer: vorhanden (3 Spalten: Navigation, Kontakt, Oeffnungszeiten)
- Placeholder-Text: keiner gefunden
- Kontaktdaten auf Startseite: Telefon 05441/9950044, WhatsApp 0176 226 49706, E-Mail, Adresse Amtsweide 2, 49356 Diepholz — alle korrekt
- Oeffnungszeiten: Di-Fr 14:00-18:00 — korrekt
- Marken-Logos: 6 Logos gerendert (Victoria, Conway, HoheAcht, QiO, Excelsior, Kayza) — alle vorhanden
- GSAP-Animationen: konfiguriert (Hero-Einblendung, Marquee)
- Probleme: keine

### City / Urban (/city-urban)

- Status: BESTANDEN
- Screenshots: desktop/city-urban.png | mobile/city-urban.png
- HTTP: 200 OK
- Produkte: 7 Produkte (HoheAcht AMO Eko Vilago RT, Victoria Cysalo 5/7/9, Victoria Fylgran 3/7, Qio Eins AP-8)
- Navigation: aktiv und klickbar
- Footer: vorhanden
- CTA-Sektion: vorhanden ("Interesse geweckt?")
- Produktbilder: alle vorhanden (cache_18482193 bis cache_18756940)
- Preise: alle gesetzt (2.499 EUR bis 3.999 EUR)
- Probleme: keine

### Trekking / SUV (/trekking-suv)

- Status: BESTANDEN (mit Warnung)
- Screenshots: desktop/trekking-suv.png | mobile/trekking-suv.png
- HTTP: 200 OK
- Produkte: 7 Produkte
- Navigation: korrekt
- Footer: vorhanden
- Probleme (Warnung): Conway Cairon C 1.0 B und Conway Cairon T 4.5 verwenden das gleiche Produktbild (cache_18415250.png) — unterschiedliche Modelle, optisch nicht trennbar

### MTB / Kids (/mtb-kids)

- Status: BESTANDEN (mit Warnung)
- Screenshots: desktop/mtb-kids.png | mobile/mtb-kids.png
- HTTP: 200 OK
- Produkte: 6 Produkte (4 MTB + 2 Kids)
- Navigation: korrekt
- Footer: vorhanden
- Probleme (Warnung): Conway Cairon S 2.0, HoheAcht Sento Roko, Conway Razz 2.0 Kids MTB und Conway Razz C 2.4 Kids MTB verwenden alle das gleiche Bild (cache_17474899.png) — 4 von 6 Produkten optisch identisch

### Gravel / Rennrad (/gravel-rennrad)

- Status: FEHLER (kritisch)
- Screenshots: desktop/gravel-rennrad.png | mobile/gravel-rennrad.png
- HTTP: 200 OK (Seite laedt)
- Produkte: 8 Produkte im Code definiert
- KRITISCHER FEHLER: Alle 8 Gravel/E-Gravel-Produkte referenzieren das Bild `/images/products/cache_18415236.png` — diese Datei existiert NICHT im public/-Verzeichnis
- Folge: Alle Produktbilder auf dieser Seite sind broken (HTTP 400 bei Image-Anfrage)
- Mobile-Screenshot zeigt: schwarze/leere Produktkarten ohne sichtbare Bilder
- Sonstige Inhalte: Headline, Specs, Preise, Footer — korrekt

### Leasing (/leasing)

- Status: BESTANDEN (mit Warnung)
- Screenshots: desktop/leasing.png | mobile/leasing.png
- HTTP: 200 OK
- Leasing-Partner: 10 Partner-Logos korrekt gerendert (JobRad, BusinessBike, Eurorad, Company-Bike, Rad im Dienst, Lease a Bike, eleasa, Bikeleasing, Mein-Dienstrad, FinanceaBike)
- Alle Leasing-Bilder: vorhanden
- CTA-Sektion: vorhanden (WhatsApp + Kontakt-Link)
- Telefonnummer: sichtbar (05441/9950044)
- Probleme (Warnung): Seite zeigt Leasing-Inhalt korrekt, aber initialer `next start` hatte ERR_ABORTED-Fehler beim ersten Laden — trat beim zweiten Start nicht mehr auf. Moegliches Timing-Problem.

### Kontakt / Impressum (/kontakt)

- Status: BESTANDEN
- Screenshots: desktop/kontakt.png | mobile/kontakt.png
- HTTP: 200 OK
- Formular: vorhanden (Name, E-Mail, Telefon optional, Nachricht, Datenschutz-Checkbox, Submit-Button)
- Telefonnummer: sichtbar (05441/9950044 + 0176 226 49706 WhatsApp)
- Adresse: sichtbar (Amtsweide 2, 49356 Diepholz)
- Oeffnungszeiten: Di-Fr 14:00-18:00 Uhr
- Impressum: vorhanden (Name, Adresse, Telefon, E-Mail, USt-ID DE318353919)
- Datenschutzerklaerung: vorhanden
- Probleme: keine

---

## Fehlende Seiten (Sitemap vs. Build)

Die Sitemap (`scraped-data/sitemap.json`) listet 8 Seiten, davon sind 2 in der Kreativ-Variante nicht implementiert:

| Sitemap-URL | Status |
|---|---|
| `/kontakt-impressum` | FEHLT — in der App ist `/kontakt` implementiert |
| `/sitemap` | FEHLT — keine Sitemap-Seite vorhanden |

Hinweis: `/kontakt` deckt den Inhalt von `/kontakt-impressum` vollstaendig ab (Formular + Impressum + Datenschutz). Kein inhaltlicher Verlust, aber die URL weicht vom Original ab.

---

## Link-Check

Alle internen Navigation-Links wurden geprueft:

| Link | Ziel | Status |
|---|---|---|
| Home | / | 200 OK |
| City / Urban | /city-urban | 200 OK |
| Trekking / SUV | /trekking-suv | 200 OK |
| MTB / Kids | /mtb-kids | 200 OK |
| Gravel / Rennrad | /gravel-rennrad | 200 OK |
| Leasing | /leasing | 200 OK |
| Kontakt | /kontakt | 200 OK |
| /kontakt-impressum | — | 404 (nicht implementiert) |
| /sitemap | — | 404 (nicht implementiert) |
| Footer: Impressum | /kontakt#impressum | Anchor-Link, funktioniert |
| Footer: Datenschutz | /kontakt#datenschutz | Anchor-Link, funktioniert |

---

## Farb-Check

Vergleich mit `scraped-data/brand/colors.json`:

Original-Primaerfarbe: `#363935` (Olive-Grau/Dunkelgruen)
Original-Sekundaer: `#767778` (Mittelgrau)

Kreativ-Variante verwendet bewusst ein neues Farbsystem:
- Hintergrund: `#0f1210` (Sehr dunkel, fast Schwarz)
- Akzentfarbe: `#c8ff00` (Lime-Gruen) — **neue Primaerfarbe**
- Card-Hintergrund: `#1a1f1c`
- Text: `#f5f5f0`

Bewertung: Die Kreativ-Variante interpretiert das Olive-Gruen des Originals mit einem modernen, kontrastreichen Lime-Gruen (`#c8ff00`) — bewusste kreative Entscheidung. Der Olive-Grau-Ton des Originals ist im `--olive: #363935` CSS-Token erhalten. Lime-Akzent ist auf allen Seiten konsistent sichtbar (Buttons, Badge-Labels, aktive Nav-Links, Headline-Highlights, Footer-Akzente).

---

## Gefundene Probleme

### Kritisch

1. **Fehlende Produktbilder: Alle Gravel/Rennrad-Produkte** (`/gravel-rennrad`)
   - Datei: `/public/images/products/cache_18415236.png` — nicht vorhanden
   - Betroffen: 8 von 8 Produkten (Conway Nyvo 4/10/12c/16, HoheAcht Lumo Ripio, Conway Nyvon 8.0/9.0/12.0)
   - Auswirkung: Alle Produktkarten auf der Gravel-Seite zeigen broken images
   - Loesung: Das fehlende Bild aus den Scraped-Data kopieren oder ein Platzhalter-Bild hinterlegen. Alternativ: individuelle Bilder fuer jedes Gravel-Modell zuordnen.

### Warnungen

2. **Mehrfache Produktbild-Duplikate** (Trekking und MTB)
   - Trekking: Conway Cairon C 1.0 B und T 4.5 teilen `cache_18415250.png`
   - MTB/Kids: 4 Produkte teilen `cache_17474899.png` (Conway Cairon S 2.0, HoheAcht Sento Roko, beide Razz Kids)
   - Auswirkung: Verschiedene Modelle sehen in der Produktliste identisch aus
   - Loesung: Individuelle Produktbilder je Modell aus den Scraped-Data oder direkt von Herstellern

3. **URL-Abweichung: Kontaktseite**
   - Original-URL: `/kontakt-impressum` (in sitemap.json)
   - Kreativ-URL: `/kontakt`
   - Kein Redirect konfiguriert — bei 1:1 URL-Mapping wuerden Bookmarks/Links ins Leere laufen
   - Loesung: Redirect in `next.config.ts` von `/kontakt-impressum` auf `/kontakt` eintragen

4. **Fehlende /sitemap-Seite**
   - Sitemap nennt eine `/sitemap`-Seite, die nicht implementiert ist (404)
   - Fuer SEO und Nutzerfreundlichkeit optional, aber vollstaendig

---

## Screenshots

Alle Screenshots in:
- Desktop (1440x900): `./qa/desktop/`
- Mobile (390x844): `./qa/mobile/`

| Seite | Desktop | Mobile |
|---|---|---|
| Startseite | desktop/home.png | mobile/home.png |
| City / Urban | desktop/city-urban.png | mobile/city-urban.png |
| Trekking / SUV | desktop/trekking-suv.png | mobile/trekking-suv.png |
| MTB / Kids | desktop/mtb-kids.png | mobile/mtb-kids.png |
| Gravel / Rennrad | desktop/gravel-rennrad.png | mobile/gravel-rennrad.png |
| Leasing | desktop/leasing.png | mobile/leasing.png |
| Kontakt | desktop/kontakt.png | mobile/kontakt.png |
