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

Oder antworte „Positionierung“ (wofür du stehst) bzw. „Angebot“ (was du verkaufst), dann erarbeiten wir das im Gespräch.
Oder antworte „mach trotzdem“, dann arbeite ich mit Annahmen und markiere sie.
```

Antwortet der Nutzer „Positionierung“: `prozesse/positionierung.md` ausführen, bei „Angebot“: `prozesse/angebot-entwickeln.md` (beide sind von diesem Startcheck ausgenommen), danach den ursprünglichen Auftrag.

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
- **Datenschutz:** Bevor personenbezogene Daten Dritter (Kunden, Leads, Interviewpartner) in ein Werkzeug gehen, AVV und US-Übermittlung nach `grundlagen/deutschland.md`, Abschnitt 5, prüfen. Fehlt der AVV: Nutzer informieren und nur mit anonymisierten Daten oder ohne das Werkzeug arbeiten.
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

Das Kit enthält Skills (`.agents/skills/`, gleich in `.claude/skills/`), u. a. `short-form-edit`, `edit-video`, `cut-silences`, `cut-mistakes`, `hyperframes-video-beats`, `video-storytelling` und `style-library`. Welcher wofür: `grundlagen/video-schnitt.md`, Abschnitt 3. Lies die `SKILL.md`, bevor du damit arbeitest. Eigene Projekte liegen in `video-projects/<name>/`.

- **Aktualisieren:** Das Kit wird laufend erweitert. Vor jedem Videoauftrag `git pull` im Kit-Ordner, danach `npm ci`, falls sich `package-lock.json` geändert hat.
- **Transkription:** Das Kit transkribiert lokal mit Whisper (`npx hyperframes transcribe`, kein Key). Für Deutsch immer `--language de` und ein Modell **ohne** `.en`; Details und Gründe: `grundlagen/video-schnitt.md`, Abschnitt 1. Das Modell wird beim ersten Aufruf heruntergeladen (`medium` ca. 1,5 GB, `large-v3` ca. 3 GB).
- **Nicht verwenden:** `DESIGN.ais-example.md` und `assets/AIS …` (Nates eigene Marke).

### video-use (für: Reel Weg A, Verkaufsvideo mit Aufnahme) – optional

Schneidet vorhandene Aufnahmen (Füllwörter, Pausen, Untertitel). Erste Wahl sind die Kit-Skills `cut-silences` und `cut-mistakes` mit lokaler Transkription; `video-use` nur, wenn sie nicht zum Ziel führen. Benötigt ffmpeg und einen ElevenLabs-Key, weil es zur Transkription das Audio an ElevenLabs schickt: deshalb nur für Aufnahmen, auf denen ausschließlich der Nutzer spricht, bei Stimmen Dritter nur mit AVV (`grundlagen/deutschland.md`, Abschnitt 5).

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

Key erforderlich → Nutzer fragen. Account und Key: `https://cloud.higgsfield.ai`. Doku: `https://docs.higgsfield.ai`. Abrechnung über Guthaben, stoppt bei 0. Kein öffentlicher AVV: nur Prompts ohne personenbezogene Daten Dritter (`grundlagen/deutschland.md`, Abschnitt 5).

### ElevenLabs (für: Reel, Verkaufsvideo, YouTube, Podcast) – kostenpflichtig

Key erforderlich → Nutzer fragen. Key unter `https://elevenlabs.io/app/settings/api-keys`. Ohne Key: Reel ohne Stimme (nur Text). Öffentlicher AVV unter `https://elevenlabs.io/dpa`. Transkribiert wird standardmäßig lokal mit Whisper (`grundlagen/video-schnitt.md`, Abschnitt 1); Aufnahmen mit Stimmen oder Daten Dritter gehen nur an ElevenLabs, wenn der AVV abgeschlossen und in `marke/regeln.md` eingetragen ist. Der Zero-Retention-Modus ersetzt den AVV nicht.

### HeyGen API (für: Reel Weg B, Avatar des Nutzers) – kostenpflichtig

Nur nach Freigabe des Nutzers (neues kostenpflichtiges Tool, `marke/regeln.md`). Key erforderlich → Nutzer fragen. Doku: `https://docs.heygen.com`. Der Avatar zeigt ausschließlich den Nutzer selbst, nach seiner ausdrücklichen Zustimmung (Ablauf: `prozesse/reel-kurzvideo.md`, Schritt 2). Ohne HeyGen: Reel über Weg A oder C.

### E-Mail- und Landingpage-Tool (für: E-Mail-Marketing, Landingpage)

Welche Tools genutzt werden, steht in `marke/regeln.md` unter „Werkzeuge & Zugänge“. Ist dort nichts eingetragen: fragen. Bis dahin lieferst du Texte und HTML-Dateien zum Einfügen.

### E-Rechnung ohne Buchhaltungstool (für: Buchhaltung)

```
pip install drafthorse
```

Erzeugt ZUGFeRD-XML (Profil EN 16931) und bettet es in ein PDF ein. Jede erzeugte Rechnung zusätzlich mit einem Validator prüfen, z. B. Mustang (`https://www.mustangproject.org`, Java) oder dem KoSIT-Validator. Sobald Lexware Office genutzt wird, erstellt das Tool die E-Rechnungen; die API gibt es dort erst ab Tarif XL.

### DNS-Prüfung (für: E-Mail-Marketing)

`dig` bzw. `nslookup` (meist vorinstalliert), um SPF, DKIM und DMARC der Absender-Domain zu prüfen.
