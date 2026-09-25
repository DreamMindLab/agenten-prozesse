# Agenten-Prozesse

Eine Seite mit Buttons für jedes Content-/Marketing-Format. Jeder Button führt zum genauen Schritt-für-Schritt-Prozess, dem ein KI-Agent beim Erstellen folgt.

## Für KI-Agenten

Solange das Repo privat ist, liest der Agent direkt aus dem Repo (kein Website-Zugriff nötig):

- Anleitung: [AGENTS.md](AGENTS.md)
- Marke (von dir auszufüllen): `marke/` – Zielgruppe, Angebot, Tonalität, Design, Beispiele, Regeln & Budget
- Pflicht-Abschluss jedes Prozesses: [grundlagen/qualitaet-und-lernen.md](grundlagen/qualitaet-und-lernen.md)
- Übersicht aller Prozesse: [INDEX.md](INDEX.md) (wird von `node build.js` erzeugt)
- Jeder Prozess: `prozesse/<slug>.md`

Auf der gebauten Website gibt es zusätzlich `llms.txt` und `prozesse.json`.

## Neuen Prozess anlegen / bearbeiten

1. Datei in `prozesse/` anlegen, z. B. `prozesse/linkedin-artikel.md`, mit diesem Kopf:

   ```
   ---
   titel: LinkedIn-Artikel
   kategorie: Social Media
   icon: file-text
   beschreibung: Ein Satz, was rauskommt.
   status: entwurf        # oder: fertig
   version: 1
   reihenfolge: 13
   stichworte: LinkedIn-Artikel, Fachartikel   # hilft dem Agenten bei der Zuordnung
   ---
   ```

2. Darunter die Abschnitte: Ziel, Benötigte Inputs, Werkzeuge, Schritt-für-Schritt (die letzten beiden Schritte sind immer **Quality Check (Loop)** und **Foundation-Agent**), Output-Format. Vorlage: `prozesse/social-media-post.md`.
3. `node build.js` ausführen (aktualisiert `INDEX.md`), committen, pushen.

Icons: `megaphone`, `layers`, `sparkles`, `calendar`, `mail`, `file-text`, `target`, `image`, `video`, `users`, `play`, `mic`, `pen`, `layout`, `gift`, `trending`, `send`, `search`, `calculator`, `workflow`, `chart`.

## Lokal ansehen

```
node build.js
python3 -m http.server -d _site
```

## Vorschau als eine Datei

`node build.js` erzeugt zusätzlich `_site/vorschau.html`: alle Prozesse in einer Datei, Navigation per Klick. Genutzt für die private Vorschau auf claude.ai.

## Website veröffentlichen (später, nach GitHub-Upgrade)

1. GitHub → Settings → Pages → Source: **GitHub Actions**.
2. In `.github/workflows/pages.yml` den Auslöser `push: { branches: [main] }` wieder aktivieren.
