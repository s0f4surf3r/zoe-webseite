# Zoe Barossi Website

## Person (Jochen = Auftraggeber/Entwickler)
- Jochens Gefährtin, er baut ihr die Webseite
- ADHS diagnostiziert, braucht Struktur UND Freiheit
- Dopaminanfällig, Nervensystem reagiert schnell und stark
- Feines Radar f. Wahrheit, Tiefe, Authentizität

## Zoe — Wer sie ist
- **Voller Name**: Zoe Barossi
- **Alter**: 35 (Stand 2026)
- **Herkunft**: Geboren in Los Angeles, mit 4 nach São Paulo gezogen, dort aufgewachsen
- **Eltern**: Brasilianer mit italienischen Wurzeln
- **Sprachen** (4 auf der Website): Portugiesisch (Muttersprache), Englisch (perfekt), Italienisch (fließend), Deutsch (B2)
  - Finnisch: existiert, aber nicht relevant genug für öffentliche Kommunikation
- **Wohnort**: Berlin-Neukölln (Lenaustr. 20, 12047 Berlin)
- **Seit Ende 2019 in Berlin** (verifiziert via Instagram)

### Biografie-Details (verifiziert)
- Mit 21 sieben Monate Backpacking durch Europa
- 30. Geburtstag in Berlin mit "chosen family"
- Anämie-Phase: Konnte keine 2 Stockwerke Treppen steigen (Puls 180)
- Erster 10k: ARCN Berlin, Juli 2022 (Anämie-Recovery-Meilenstein)
- Erster Halbmarathon: Berlin, April 2023
- Tod der Mutter: vermutlich Ende 2023/Anfang 2024 (PRIVAT — nicht auf Website)

### Ausbildung & Beruf
- **Studium**: Psychologie (São Paulo)
- **Therapeutische Ausbildung**: Psychodrama-Therapeutin (bestätigt von Jochen)
- **Aktueller Job**: Projektmanagerin bei N26 (Vollzeit)
  - Startete im Support, arbeitete sich hoch
  - N26 ist eine deutsche Neobank

### Sport — Triathlon
- **Einstieg Fitness**: Vor ca. 3-4 Jahren mit Gym angefangen
- **Wechsel zu Triathlon**: Vor etwas mehr als 1 Jahr
- **Aktuelles Level**: Ambitionierte Amateur-Athletin, schielt zu den Pros
- **Team**: @teamsports.cc
- **Trainer**: Rafa Turtera (@rafaturtera / @teamturtera)
- **Ernährungsberaterin**: @nutri_lupurgailis
- **Therapeutin**: hat eine (Name unbekannt)
- **Training**: 2x täglich, ~15h/Woche + Vollzeitjob
- **Investition**: Gibt viel Geld aus für Coaching, Ernährung, Equipment

### Rennergebnisse
- **70.3 IM Emilia Romagna / Cervia** (21.09.2025) — 9. in AG, 5:42:36
- **WTCS Hamburg Kurzdistanz** (13.07.2025) — 7. in AG, 2:36:49
- **5150 IM Kraichgau** (25.05.2025) — 6. in AG, 2:52:57
- **Hannover Volkstriathlon** (08.09.2024) — 12. in AG, 1:24:10 (erstes Sprint-Rennen überhaupt)
- Hat bereits 3x 70.3 Ironman gemacht

### Ziel 2026
- **April 2026**: Qualifikation für Ironman WM Nizza — in Brasília
- **Ironman WM Nizza 2026**: Das große Ziel

### Equipment
- **Bikes**: Canyon (über 10.000€)
- **Indoor**: Elite Trainer + Canyon Bike zu Hause, fährt Zwift
- **Zwift-Sessions**: 5x pro Woche
- **Neoprenanzug**: 2XU (nicht Roka — korrigiert Feb 2026)
- **Bestehender Sponsor**: EZ Gains (Rabattcode ZOEB10)
- **Gear-Hausaufgabe**: `HAUSAUFGABE_ZOE_AFFILIATE.md` — Zoe füllt komplette Equipment-Liste aus
- **Affiliate-Partner-Hausaufgabe**: `HAUSAUFGABE_ZOE_AFFILIATE_PARTNER.md` — Step 1 (DE+BR), Step 2 (international)

### Persönlichkeit & Charakter
- Zeigt sich gerne, erzählt gerne — extrovertiert
- Authentisch, emotional, direkt
- Feiert sich selbst und ihre Erfolge — weint bei Zieleinläufen vor Stolz
- Sehr persönliche Posts (u.a. über den Tod ihrer Mutter — tief emotional)
- Humor: Selbstironie, laut, energisch
- Instagram-Bio: "Chasing triathlon dreams with endless energy and a big laugh"
- "in search for the best Schokokuchen" (Schokoladenkuchen-Obsession)
- Kommt gerade an ihre Grenzen (2x Training/Tag + Vollzeit + Kosten)
- **Zoe als Actionfigur**: Jochen will sie als Ikone darstellen — kraftvoll, gewaltig, und gleichzeitig zart und verletzlich

### Online-Präsenz
- **Instagram**: @zoebarossi — 1.940 Follower, 147 Beiträge
  - 130 Captions gescrapet und analysiert (in `/Users/joho21/zoebarossi/`)
  - Hauptthemen: Triathlon/Fitness, Selbstliebe, Natur/Reisen, Dankbarkeit, Essen
  - Ton: Englisch-dominant, emotional, direkt, viele Caps + Emojis
  - Signature-Ausdrücke: "VAMOOOOO!", "PUREZA!", "fck excited"
- **Linktree**: linktr.ee/zoebarossi
- **Strava**: strava.com/athletes/35981492
- **Sponsoring**: EZ Gains (Rabattcode ZOEB10 für 10% off)

### Instagram-Scraping & Content-Gewinnung (Methode)
So wurde Zoes Story, Ton und Bildmaterial aus Instagram gewonnen:
1. **Captions scrapen**: `instaloader --no-videos --no-pictures zoebarossi` → 130 `.txt`-Dateien in `/Users/joho21/zoebarossi/`
2. **Captions analysieren**: Alle 130 Captions gelesen, Schlüsselzitate extrahiert, Biografie-Timeline rekonstruiert (Anämie → 10k → HM → Triathlon → 70.3 IM), Ton + Sprachstil identifiziert
3. **Fotos downloaden**: `instaloader --no-videos --no-captions --no-metadata-json zoebarossi` → 465 JPGs mit Zeitstempel-Dateinamen (z.B. `2024-09-11_09-53-22_UTC.jpg`)
4. **Fotos zuordnen**: Zeitstempel-Dateinamen den bekannten Renndaten zugeordnet (Jul 2022 = ARCN 10k, Apr 2023 = Berlin HM, Sep 2024 = Hannover, etc.)
5. **Beste Fotos auswählen**: 5 Renn-/Zielfotos für die Story-Seite ausgewählt
6. **Bilder optimieren**: `sips --resampleWidth 1600 --setProperty formatOptions 85` für Web-taugliche Größe
7. **Story schreiben**: Aus den Captions eine emotionale Ich-Perspektive-Story gebaut, Instagram-Zitate als `story-inline-quote` eingebettet, in alle 3 Sprachen (DE/EN/PT) übersetzt
- **Wichtig**: Profil ist öffentlich, instaloader braucht keinen Login
- **Dateinamen-Muster**: `YYYY-MM-DD_HH-MM-SS_UTC.jpg` + `.txt` (Caption) — zusammengehörig
- **Alles in `/zoebarossi/`** (gitignored, nicht im Repo)

### Markenaufbau — Vision
- Zoe will sich vermarkten, braucht Sponsoren um den Sport zu finanzieren
- **Webseite** = erster Schritt im Markenaufbau (LIVE auf zoebarossi.netlify.app seit Feb 2026)
- **Streaming (Twitch + YouTube)**: Nächster geplanter Schritt
  - Zwift-Sessions streamen (5x/Woche auf dem Indoor-Bike)
  - **Streaming-Sprache: Englisch** (nicht multilingual)
  - Parallel auf Twitch + YouTube via OBS Multi-RTMP oder Restream.io
  - Zoe erzählt gerne, zeigt sich gerne — perfekt für Streaming
  - Potenzial: Fans gewinnen, die ihr als Person folgen
- **Langfristiges Ziel**: Personal Brand als Triathletin aufbauen, Sponsoren gewinnen, Richtung Pro

### Streaming-Setup (geplant, Stand Feb 2026)
- **Einkaufsliste**: `EINKAUFSLISTE_STREAMING.md` (~1.650€ Phase 1, ~500€ Phase 2)
- **Rechner**: Mac Mini M4 (16GB/512GB) — alles läuft nativ auf macOS
- **Monitor**: LG 27" 1440p IPS an VESA-Schwenkarm an der Wand vor ihr
- **Kameras**: 2x Elgato Facecam MK.2 (Cam 1 frontal auf Monitor, Cam 2 seitlich rechts)
  - Kein AI-Tracking nötig — sie bewegt sich nicht auf dem Indoor-Trainer
  - Volles Elgato-Ökosystem (Cam + Light + Stream Deck = eine App)
- **Mikro**: Rode Wireless GO Gen 3 Single (32-bit Float, GainAssist, eingebautes Mic reicht)
  - Sender clipt am Sport-BH/Trikot oder liegt auf Hocker neben ihr
  - Vielseitig: auch für Outdoor-Content, Interviews, Vlogs nutzbar
- **Licht**: Elgato Key Light Air auf Lichtstativ rechts (offener Raum), steuerbar via Stream Deck
- **Steuerung**: Elgato Stream Deck Mini auf IKEA-Hocker neben Bike
- **Software**: OBS Studio, Elgato Control Center, Zwift
- **Internet**: LAN-Kabel (kein WLAN!)
- **Kein Green Screen** — weiße Wand hinter ihr, Webcam-Kasten über Zwift-Bild (Standard bei Zwift-Streamern)
- **Phase 2 Outdoor**: Insta360 X4 Bike Bundle (~500€) für Tempelhofer Feld / Rennen

### Zoes Raum (Bike-Setup)
- Bike steht in einer Ecke: 20cm zur Wand links, 30cm zur Wand hinten
- Sie schaut Richtung Wohnzimmertür
- Rechts von ihr: großer offener Raum (Sofa, Platz für Lichtstativ)
- IKEA-Hocker vor ihr (aktuell Laptop für Zwift → wird Monitor an Wandhalterung)
- Zweites Bike an der Wand im Flur hinter der Tür

### Bilder
- Alle Originalbilder verfügbar (iCloud von Zoe)
- 465 Instagram-Fotos runtergeladen in `/zoebarossi/` (gitignored)
- 5 Fotos in Story-Seite eingebaut (`src/images/story/`): Berlin HM, ARCN 10k, Hannover Tri, WTCS Hamburg Jump, 70.3 Cervia
- Cinematic Fullwidth-Darstellung mit Gradient-Overlays und `object-position` pro Bild
- **hero-zoe.png**: KI-generiertes Superhelden-Bild (Zoe fliegt über Berlin/Fernsehturm), Portrait-Format
- **TODO**: Originalfotos von Zoe holen (AirDrop, nicht WhatsApp!) — Instagram-Fotos sind max 1080px

### Private Infos (NUR intern, NICHT auf Website)
- Schwierige Kindheit, dominanter Vater
- Hat Therapie-Karriere aufgegeben (zu nah dran, nach eigener schwerer Kindheit)
- Tod der Mutter (vermutlich Ende 2023/Anfang 2024)
- Jochen: "das erzählen wir nicht öffentlich"

## Arbeitsweise (ADHS-gerecht)
- Flow-basiert, kleine Schritte, NIE mehrere Dinge gleichzeitig
- Mikroschritte bei Coding: "klick hier, dann da"
- Bei Überforderung: noch kleinere Schritte
- Komplette Code-Files, keine Snippets
- Direkt, kein Chi-Chi, kein Gelaber, keine Wiederholungen

## Deployment (WICHTIG!)
- NIE eigenständig committen oder pushen – NUR wenn Jochen es explizit sagt
- Änderungen immer sammeln, so spät wie möglich committen+pushen
- Jeder Push löst statichost.eu-Build aus und kostet Build-Minuten

## Ton & Design-Philosophie
- Echt, warm, direkt, kein Bullshit
- Apple HIG, Minimalismus, Reduktion, Authentizität
- Kein neoliberaler Style, kein Marketing-Sprech
- Technik dient dem Menschen, nicht umgekehrt
- **Ich-Perspektive**: Über-Seite in erster Person geschrieben (Athleten-Branding-Standard)

## Tech-Stack
- **SSG**: Eleventy v2.0.1, Nunjucks-Templates, Markdown-It (breaks: true)
- **Hosting**: statichost.eu — `zoe-barossi.statichost.page` (auto-Build bei Git-Push)
- **CMS**: perfectCMS — Admin unter `/admin/`, Scaleway Function `zoe-cms-api`
- **GitHub**: `s0f4surf3r/zoe-webseite`
- **Repo**: `/Users/joho21/Projekte/zoe_webseite`
- **Dev-Server**: Port 8080, `0.0.0.0`

### Scaleway Function (perfectCMS)
- **URL**: `https://perfectcmstm6mdmqs-zoe-cms-api.functions.fnc.fr-par.scw.cloud`
- **Namespace**: `ae836b47-ca48-4d99-adb9-2a7381226cd8`
- **NIEMALS** `scw function function deploy` benutzen — löscht alle Env-Vars!
- Env-Vars ändern: `scw function function update <id> region=fr-par "environment-variables.KEY=value"`

### statichost.eu Webhook
- Falls Build nicht automatisch startet: `gh api repos/s0f4surf3r/zoe-webseite/hooks` prüfen
- Webhook neu anlegen falls leer:
  ```bash
  gh api repos/s0f4surf3r/zoe-webseite/hooks --method POST \
    --field name=web --field active=true \
    --field 'events[]=push' \
    --field 'config[url]=https://builder.statichost.eu/zoe-barossi' \
    --field 'config[content_type]=json'
  ```
- **Styling**: Plain CSS, Dark Theme, CSS Custom Properties
- **JS**: Vanilla JS (minimal)

### Gemini API (Bildgenerierung)
- **API Key**: In `.env` als `GEMINI_API_KEY` (gitignored!)
- **Key nie in Code/Frontend/CLAUDE.md speichern** — nur in `.env`
- **Modell für Bildgenerierung**: `gemini-2.5-flash-image` (generateContent mit `responseModalities: ["IMAGE", "TEXT"]`)
- **Weitere verfügbare Modelle**: `gemini-3-pro-image-preview`, `imagen-4.0-generate-001`
- **Nutzung**: Hero-Bilder, Grafiken, visuelle Elemente für die Website
- **Aufruf**: `source .env && curl` mit dem Key als Query-Parameter

## Sprachen
- DE (root), EN (/en/), PT (/pt/) via i18n.json
- **Sprachswitch**: Nutzt `slug`, `slugDe`, `slugEn`, `slugPt` im Frontmatter
  - `slugDe` muss in allen EN- und PT-Dateien gesetzt sein!

## Layouts
- `home.njk` – Startseite, zentral f. alle Sprachen
- `base.njk` – HTML-Gerüst
- `page.njk` – Inhaltsseiten (wraps in `<article class="content">`)
- **Story-Seite** (`ueber.njk`): Nutzt `base.njk` direkt mit `bodyClass: page-story` für Fullwidth-Sections

## Seiten-Struktur (Stand Feb 2026)
- **Start** (home.njk)
- **Der Weg** (Timeline mit echten Renndaten + Instagram-Zitaten)
- **Partner** (Media-Kit-Style: Stats, Angebot, bestehende Partner)
- **Ausrüstung** (Gear-Grid, Platzhalter)
- **Über Zoe** (Visual Story Page: Split-Hero, Ich-Perspektive, Instagram-Zitate)
- **Live** (Twitch Coming Soon, Streaming auf Englisch)
- **Kontakt** (E-Mail, Instagram, Strava)
- Impressum, Datenschutz

## Hero (Startseite)
- Hero4.jpg (Desktop), hero_mobil2.jpg (Mobile) – umgeschaltet per CSS-Klassen

## Hero (Über-Seite)
- Split-Layout: Text links, hero-zoe.png rechts (als `<img>`, nicht background)
- Mobile: Bild oben, Text darunter
- Gradient-Overlays für nahtlosen Übergang

## Favicons
- ZB-Logo, generiert über favicon.io

## OG-Tags
- Eingebaut für WhatsApp/Social Sharing

## Kontakt
- zoebarossizoe@gmail.com
- Lenaustr. 20, 12047 Berlin

## Impressum/Datenschutz
- DDG/MStV/DSGVO konform
- Jochen als Gestalter verlinkt

## Story-Seite (Über Zoe)
- `src/ueber.njk` (DE), `src/en/about.njk` (EN), `src/pt/sobre.njk` (PT)
- Nutzt `base.njk` direkt mit `bodyClass: page-story`
- 5 Cinematic Fullwidth-Bilder zwischen den Text-Sections
- Bilder in `src/images/story/` mit `object-position` Overrides:
  - `race-berlin-hm.jpg` → center 20%
  - `race-berlin-10k.jpg` → default (center 30%)
  - `race-hannover-finish.jpg` → center 18%
  - `race-hamburg-jump.jpg` → center 35%
  - `race-cervia-finish.jpg` → center 22%

## Offene Punkte
- Originalfotos von Zoe holen (AirDrop) — ersetzen die 1080px Instagram-Fotos
- SEO erst machen wenn Content steht und Site live ist
- Virtual Office für Impressum prüfen (Privatadresse)
- Streaming/Twitch-Integration auf der Webseite (wenn Setup steht)
- Blog/News-Sektion (Rennberichte, Training, persönliche Updates)
- Gear-Seite mit echten Produkten + Affiliate-Links füllen (wartet auf `HAUSAUFGABE_ZOE_AFFILIATE.md`)
- Affiliate-Partner anmelden (wartet auf Gear-Liste, dann `HAUSAUFGABE_ZOE_AFFILIATE_PARTNER.md`)
- Streaming-Setup kaufen + einrichten (siehe `EINKAUFSLISTE_STREAMING.md`)
