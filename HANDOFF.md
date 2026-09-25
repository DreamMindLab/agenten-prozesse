# HANDOFF — agenten-prozesse

## Notizen (manuell)

### 2026-09-25 — Alle 20 Prozesse v1 fertig, Vorschau veröffentlicht (main · 7a85037)

**Stand:** Abgeschlossen. Alle 20 Prozesse in `prozesse/` stehen auf `status: fertig`, `version: 1` (0 Entwürfe). `main` und `claude/inspiring-ptolemy-ddtfvw` zeigen beide auf `7a85037`; `main` ist der Default-Branch auf GitHub (per `git ls-remote --symref` geprüft). Private Vorschau aller Prozesse als Einzelseite: https://claude.ai/artifact/S4Keh5XEyt5ufGWLXi6pEu (Version 1). Die Prozesse sind inhaltlich recherchiert (Meta-Learning-Skill, Quellen in den Prozessen selbst), aber **noch mit keinem echten Hermes-Auftrag erprobt**.

**Verworfen:**
- Jekyll/GitHub-Pages-Build: im Container kein Jekyll → eigener Build ohne Abhängigkeiten (`node build.js`, Mini-Markdown-Renderer in `build.js`). Nicht zurückbauen.
- Automatisches Pages-Deployment: bei privatem Repo nur mit bezahltem GitHub-Plan → `.github/workflows/pages.yml` läuft nur manuell (`workflow_dispatch`). Hermes braucht die Website nicht, er liest `AGENTS.md` → `INDEX.md` → `prozesse/*.md` direkt aus dem Repo.
- Aus Jans hochgeladenen Skills bewusst **nicht** übernommen: vorgetäuschte Anlässe in E-Mail-Serien („Warst du das?“, falsche Countdowns, erfundene Teilnehmerzahlen; `marketing-funnel-writer`), Platzhalter-Testimonials (`landingpage-creator`), unbegründete Referenz-/Streichpreise im VSL-Value-Stack. Gründe: § 5 UWG, Spam-Beschwerden (Gmail ab 0,3 %), Widerspruch zur eigenen „nur echte Scarcity“-Regel der Skills. Nicht wieder einbauen.
- Behauptete Kennzahlen ohne unabhängigen Beleg (z. B. „Shorts + Longform = 3× Wachstum“, Hormozi „Rule of 100“ als Pflicht) wurden weggelassen bzw. als Praktiker-Richtwert markiert.

**Nächster Schritt:** Jan füllt `marke/zielgruppe.md`, `marke/angebot.md`, `marke/tonalitaet.md` aus und löscht darin jeweils die Zeile `> **Vom Nutzer auszufüllen.**`. Danach Hermes einen ersten echten Auftrag geben (Vorschlag: „Karussell zu <Thema>“) und den Telegram-Output gegen die Kriterien in `prozesse/karussell-post.md`, Schritt 10 (Quality Check) prüfen. Erst mit diesen Ergebnissen die Prozesse auf v2 schärfen.

**Offene Fragen an Jan:**
- Company OS: Hat es eine API? Wie greift Hermes zu, darf er Aufgaben anlegen? → Zeilen in `marke/regeln.md` unter „Werkzeuge & Zugänge“. Ohne Zugang läuft `prozesse/geschaeftsueberblick.md` nicht.
- E-Mail-Tool, Absender-Domain, Landingpage-Tool, Impressum-/Datenschutz-Links: noch leer in `marke/regeln.md`.
- Budget-Standards (2 $ pro Bild/Karussell, 10 $ pro Reel in `marke/regeln.md`) hat Claude gesetzt, nicht recherchiert → Jan soll bestätigen oder ändern.
- Reverse Charge (§ 13b UStG) bei Meta-Ads/US-Tools als Kleinunternehmer: mit Finanzamt/Steuerberater klären, sobald Anzeigen laufen.
- Lexware Office: Public API erst ab Tarif XL, Tarifwahl offen.

**Landminen:**
- Nach jeder Änderung an `prozesse/`, `marke/` oder `grundlagen/` **`node build.js` ausführen und `INDEX.md` mitcommitten**. Der Workflow `.github/workflows/check.yml` schlägt sonst fehl (prüft, ob `INDEX.md` aktuell ist).
- Der Markdown-Renderer in `build.js` kann Listen nur eine Ebene tief verschachteln (tiefere Ebenen werden flach dargestellt) und Tabellen nur als eigene Zeilen, die mit `|` beginnen. Das betrifft nur die HTML-Ansicht; Hermes liest das Markdown.
- Die Vorschau aktualisiert sich nicht von selbst. Neu veröffentlichen: `node build.js`, dann `_site/vorschau.html` per Artifact-Tool an die URL oben publishen (mit `url`, sonst entsteht ein zweites Artifact).
- Lokal im Browser geöffnet zeigt `_site/vorschau.html` kaputte Umlaute, weil die Datei bewusst ohne `<head>`/Charset gebaut ist (das Artifact-Skelett setzt UTF-8). Kein Bug in der Datei.
- Push auf `DreamMindLab/agenten-prozesse` scheiterte anfangs mit 403, bis Jan die Claude GitHub App freigegeben hat. Bei erneutem 403: Zugriff unter claude.ai/connect-github prüfen.

- **Fertig:** 20 Prozesse v1 inkl. der Pflichtschritte „Quality Check (Loop)“ und „Foundation-Agent“ (`grundlagen/qualitaet-und-lernen.md`); Startcheck mit Telegram-Meldung bei leerer `marke/` und Selbstinstallation kostenloser Tools (`grundlagen/einrichtung.md`); `AGENTS.md`, generiertes `INDEX.md`; Vorschau-Artifact. Build und Rendering in dieser Session lokal ausgeführt (Playwright, Handy- und Desktopbreite, kein horizontales Scrollen, alle internen Vorschau-Anker aufgelöst). Letzter Commit `7a85037`, auf `main` gepusht.
- **Bewusst offen:** `marke/`-Inhalte (nur Jan kann sie liefern); Company-OS-Anbindung (Zugangsweg unbekannt); GitHub Pages (erst nach Plan-Upgrade: in `pages.yml` den Auslöser `push: { branches: [main] }` wieder aktivieren, Settings → Pages → Source „GitHub Actions“); Vorschau als Mehrseiten-Artifact nicht versucht, weil unklar war, ob der Artifact-Host Verzeichnis-Indizes (`prozesse/<slug>/`) auflöst → Einzeldatei mit `#anker`-Navigation gewählt.
- **Nicht testbar:** Ob Hermes (auf Codex) die Prozesse wie vorgesehen befolgt, inkl. Telegram-Format, Gedächtnis-Regeln und Selbstinstallation (HyperFrames-Kit, drafthorse): kein Hermes-Zugang in dieser Session. Der GitHub-Workflow `check.yml` ist nicht auf GitHub beobachtet worden. Die veröffentlichte Vorschau wurde nach dem Publish nicht erneut angesehen (Umlaute dort nicht geprüft). Rechtliche Einordnungen (UWG, § 19/§ 34a UStG, AI Act Art. 50) sind recherchiert, aber nicht juristisch geprüft.

Verhaltensänderung für künftige Sessions: keine neue Regel nötig. Vorschlag nur für Jan: Seine Skills `marketing-funnel-writer` (E-Mail-Serien Typ A/B) und `landingpage-creator` (Platzhalter-Testimonials) an den oben verworfenen Stellen überarbeiten.

Geändert: `AGENTS.md`, `INDEX.md`, `README.md`, `build.js`, `assets/style.css`, `.github/workflows/check.yml`, `.github/workflows/pages.yml`, `.gitignore`, `grundlagen/*.md`, `marke/*.md`, `prozesse/*.md` (20 Dateien) · Arbeitsbaum: sauber bis auf diese `HANDOFF.md`
