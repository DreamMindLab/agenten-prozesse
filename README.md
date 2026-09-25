# Agenten-Prozesse

Eine Seite mit Buttons für jedes Content-/Marketing-Format. Jeder Button führt zum genauen Schritt-für-Schritt-Prozess, dem ein KI-Agent beim Erstellen folgt.

## Für KI-Agenten

- Einstieg: `llms.txt` (Anleitung + Liste aller Prozesse)
- Index: `prozesse.json`
- Jeder Prozess als reines Markdown: `prozesse/<slug>.md`

## Neuen Prozess anlegen / bearbeiten

1. Datei in `prozesse/` anlegen, z. B. `prozesse/linkedin-artikel.md`, mit diesem Kopf:

   ```
   ---
   titel: LinkedIn-Artikel
   kategorie: Social Media
   icon: file-text
   beschreibung: Ein Satz, was rauskommt.
   status: entwurf        # oder: fertig
   reihenfolge: 13
   ---
   ```

2. Darunter die Abschnitte: Ziel, Benötigte Inputs, Schritt-für-Schritt, Qualitätscheck, Output-Format.
3. Pushen auf `main` – die Seite baut sich automatisch (GitHub Pages).

Icons: `megaphone`, `layers`, `sparkles`, `calendar`, `mail`, `file-text`, `target`, `image`, `video`, `users`, `play`, `mic`.

## Lokal ansehen

```
node build.js
python3 -m http.server -d _site
```

## Einmalig einrichten

GitHub → Settings → Pages → Source: **GitHub Actions**.
