---
titel: Einrichtung & Startcheck
beschreibung: Was vor jedem Auftrag geprüft und einmalig installiert wird.
---

## Startcheck vor jedem Auftrag

### 1. Marke vollständig?

Eine Datei in `marke/` gilt als **leer**, solange die Zeile `> **Vom Nutzer auszufüllen.**` darin steht. Der Nutzer löscht diese Zeile, sobald er die Datei ausgefüllt hat.

- **Pflicht:** `zielgruppe.md`, `angebot.md`, `tonalitaet.md`
- **Optional:** `design.md`, `beispiele.md`, `regeln.md` (hier gelten Standardwerte)

Ist eine **Pflichtdatei** leer, schick diese Nachricht per Telegram, **bevor** du mit dem Auftrag anfängst:

```
⚠️ Marke unvollständig
Es fehlen: <Dateien>
Ohne diese Angaben wird der Content generisch.

Schick mir kurz:
1. Für wen ist das? (Rolle, Branche, größtes Problem)
2. Was verkaufst du, und wohin soll der Content führen?
3. Wie sollen wir klingen? (du/Sie, 3 Eigenschaften)

Oder antworte „mach trotzdem“, dann arbeite ich mit Annahmen und markiere sie.
```

Nach der Antwort:
- Nutze die Angaben für den aktuellen Auftrag.
- Formuliere daraus einen **fertigen Dateiinhalt** für die betroffenen `marke/`-Dateien und schick ihn mit dem Hinweis: „Zum Einfügen in `marke/<datei>.md` (danach die Zeile ‚Vom Nutzer auszufüllen‘ löschen).“ Du änderst das Repo nicht selbst.
- Frag dieselben Dinge nicht bei jedem Auftrag neu. Speichere die Antworten in deinem Gedächtnis, bis die Dateien ausgefüllt sind.

Ist nur eine **optionale** Datei leer: nicht nachfragen, im Output einmal kurz erwähnen („Tipp: `marke/beispiele.md` ist leer, 3 eigene Posts dort würden den Stil deutlich verbessern.“).

### 2. Werkzeuge vorhanden?

Jeder Prozess nennt unter **Werkzeuge**, was er braucht. Prüfe vor dem Start, ob es installiert und erreichbar ist. Fehlt etwas, richte es nach den Regeln unten ein.

## Regeln für die Einrichtung

- **Kostenlose Open-Source-Werkzeuge** (Node-Pakete, Git-Repos, ffmpeg, Playwright): **selbst installieren**, ohne zu fragen. Dem Nutzer danach eine Zeile schicken: „🔧 Eingerichtet: <Werkzeug> (für <Prozess>).“
- **Alles, was Geld kostet oder einen Account braucht** (API-Keys, Abos): **nicht selbst anlegen.** Per Telegram fragen und erklären, wofür der Key ist und wo man ihn bekommt.
- **Keys** nie ins Repo, nie in Dateien im Arbeitsordner eines Projekts, nie im Klartext in Nachrichten zurückschicken. Ablage in deinem Secret-/Umgebungsvariablen-Speicher.
- Schlägt eine Installation fehl: einmal mit der Fehlermeldung recherchieren und erneut versuchen. Klappt es dann nicht, dem Nutzer die Fehlermeldung schicken und den Prozess ohne dieses Werkzeug fortsetzen, falls möglich (z. B. Motion Graphics statt KI-Video).

## Werkzeuge im Einzelnen

### HyperFrames-Kit (für: Reel, Verkaufsvideo, YouTube, Podcast)

Voraussetzungen: Node.js 22+, Git, ffmpeg inkl. ffprobe, Chrome oder Chromium.

```
git clone https://github.com/nateherkai/hyperframes-student-kit.git ~/tools/hyperframes-student-kit
cd ~/tools/hyperframes-student-kit
npm ci
npm run setup
npm test
```

Erfolgreich, wenn `npm test` durchläuft. Dann zum Test das Demo rendern: `npm run demo`, `cd video-projects/demo`, `npx hyperframes render --quality draft --output renders/demo.mp4`.

Das Kit enthält Skills für Codex (`.agents/skills/`), u. a. `short-form-edit` und `hyperframes`. Lies deren `SKILL.md`, bevor du damit ein Reel baust. Eigene Projekte liegen in `video-projects/<name>/`.

### video-use (für: Verkaufsvideo mit Aufnahme, Testimonial) – optional

Schneidet vorhandene Aufnahmen (Füllwörter, Pausen, Untertitel). Nur installieren, wenn der Nutzer Rohmaterial liefert. Benötigt ffmpeg und einen ElevenLabs-Key (für die Transkription).

```
git clone https://github.com/browser-use/video-use ~/tools/video-use
cd ~/tools/video-use
uv sync   # oder: pip install -e .
```

Danach `install.md` und `SKILL.md` im Repo lesen und den Skill bei dir registrieren.

### Playwright + Chromium (für: Post, Karussell, Landingpage)

HTML → PNG/PDF rendern und Seiten auf Handybreite prüfen.

```
npm install -g playwright
npx playwright install chromium
```

### ffmpeg (für: Reel, Verkaufsvideo)

Über den Paketmanager des Systems (`apt install ffmpeg`, `brew install ffmpeg`). Prüfen mit `ffmpeg -version` und `ffprobe -version`.

### Higgsfield API (für: Post, Karussell, Reel) – kostenpflichtig

Key erforderlich → Nutzer fragen. Account und Key: `https://cloud.higgsfield.ai`. Doku: `https://docs.higgsfield.ai`. Abrechnung über Guthaben, stoppt bei 0.

### ElevenLabs (für: Reel, Verkaufsvideo, YouTube, Podcast) – kostenpflichtig

Key erforderlich → Nutzer fragen. Key unter `https://elevenlabs.io/app/settings/api-keys`. Ohne Key: Reel ohne Stimme (nur Text).

### E-Mail- und Landingpage-Tool (für: E-Mail-Marketing, Landingpage)

Welche Tools genutzt werden, steht in `marke/regeln.md` unter „Werkzeuge & Zugänge“. Ist dort nichts eingetragen: fragen. Bis dahin lieferst du Texte und HTML-Dateien zum Einfügen.

### DNS-Prüfung (für: E-Mail-Marketing)

`dig` bzw. `nslookup` (meist vorinstalliert), um SPF, DKIM und DMARC der Absender-Domain zu prüfen.
