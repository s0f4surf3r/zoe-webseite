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
- **Sprachen** (5): Portugiesisch (Muttersprache), Englisch (perfekt), Italienisch (fließend), Deutsch (B2), Finnisch
- **Wohnort**: Berlin-Neukölln (Lenaustr. 20, 12047 Berlin)
- **Seit ca. 2020 in Berlin** (vor ~6 Jahren aus Brasilien weggezogen — musste weg, wollte dort nicht bleiben)

### Ausbildung & Beruf
- **Studium**: Psychologie (São Paulo)
- **Therapeutische Ausbildung**: Psychodrama-Therapeutin
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
- **Indoor**: Canyon Kicker Bike zu Hause, fährt Zwift
- **Zwift-Sessions**: 5x pro Woche

### Persönlichkeit & Charakter
- Zeigt sich gerne, erzählt gerne — extrovertiert
- Authentisch, emotional, direkt
- Feiert sich selbst und ihre Erfolge — weint bei Zieleinläufen vor Stolz
- Sehr persönliche Posts (u.a. über den Tod ihrer Mutter — tief emotional)
- Humor: Selbstironie, laut, energisch
- Instagram-Bio: "Chasing triathlon dreams with endless energy and a big laugh"
- "in search for the best Schokokuchen" (Schokoladenkuchen-Obsession)
- Kommt gerade an ihre Grenzen (2x Training/Tag + Vollzeit + Kosten)

### Online-Präsenz
- **Instagram**: @zoebarossi — 1.940 Follower, 147 Beiträge
- **Linktree**: linktr.ee/zoebarossi
- **Strava**: strava.com/athletes/35981492
- **Sponsoring**: EZ Gains (Rabattcode ZOEB10 für 10% off)

### Markenaufbau — Vision
- Zoe will sich vermarkten, braucht Sponsoren um den Sport zu finanzieren
- **Webseite** = erster Schritt im Markenaufbau
- **Streaming (Twitch)**: Nächster geplanter Schritt
  - Zwift-Sessions streamen (5x/Woche auf dem Indoor-Bike)
  - Zoe erzählt gerne, zeigt sich gerne — perfekt für Streaming
  - Potenzial: Fans gewinnen, die ihr als Person folgen
  - 5 Sprachen = internationales Publikum möglich
- **Langfristiges Ziel**: Personal Brand als Triathletin aufbauen, Sponsoren gewinnen, Richtung Pro

### Bilder
- Alle Originalbilder verfügbar (iCloud von Zoe)
- Bei Bedarf kann Jochen alles beschaffen

## Arbeitsweise (ADHS-gerecht)
- Flow-basiert, kleine Schritte, NIE mehrere Dinge gleichzeitig
- Mikroschritte bei Coding: "klick hier, dann da"
- Bei Überforderung: noch kleinere Schritte
- Komplette Code-Files, keine Snippets
- Direkt, kein Chi-Chi, kein Gelaber, keine Wiederholungen

## Deployment (WICHTIG!)
- NIE eigenständig committen oder pushen – NUR wenn Jochen es explizit sagt
- Änderungen immer sammeln, so spät wie möglich committen+pushen
- Jeder Push löst Netlify-Build aus und kostet Tokens

## Ton & Design-Philosophie
- Echt, warm, direkt, kein Bullshit
- Apple HIG, Minimalismus, Reduktion, Authentizität
- Kein neoliberaler Style, kein Marketing-Sprech
- Technik dient dem Menschen, nicht umgekehrt

## Tech-Stack
- **SSG**: Eleventy v2.0.1, Nunjucks-Templates, Markdown-It (breaks: true)
- **Hosting**: Netlify (auto-Build bei Git-Push)
- **GitHub**: `s0f4surf3r/zoe-webseite`
- **Repo**: `/Users/joho21/Projekte/zoe_webseite`
- **Dev-Server**: Port 8082, `0.0.0.0` (WiFi: 192.168.1.25:8082)
- **Styling**: Plain CSS, Dark Theme, CSS Custom Properties
- **JS**: Vanilla JS (minimal)

## Sprachen
- DE (root), EN (/en/), PT (/pt/) via i18n.json

## Layouts
- `home.njk` – Startseite, zentral f. alle Sprachen
- `base.njk` – HTML-Gerüst
- `page.njk` – Inhaltsseiten

## Hero
- Hero4.jpg (Desktop), hero_mobil2.jpg (Mobile) – umgeschaltet per CSS-Klassen

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

## Offene Punkte
- SEO erst machen wenn Content steht und Site live ist
- Virtual Office für Impressum prüfen (Privatadresse)
- Streaming/Twitch-Integration auf der Webseite (wenn es losgeht)
- Sponsoring-Seite ausbauen (professioneller, für potenzielle Sponsoren)
- Blog/News-Sektion (Rennberichte, Training, persönliche Updates)
- Gear-Seite mit echten Produkten füllen (Canyon Bikes, etc.)
