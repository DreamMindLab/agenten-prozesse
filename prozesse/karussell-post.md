---
titel: Karussell-Post
kategorie: Social Media
icon: layers
beschreibung: Mehrseitiges Karussell für Instagram und LinkedIn (PDF): Hook, zweiter Hook, Mehrwert, CTA.
status: fertig
version: 1
reihenfolge: 11
stichworte: Carousel, Slides, Swipe-Post, Dokument-Post, PDF-Post, LinkedIn-Karussell
---

## Ziel

Ein Karussell mit 7–10 Slides, das die Zielgruppe bis zum Ende swipt und **speichert**.

Warum Karussell: Auf Instagram erzielen Karussells die höchste Engagement-Rate aller Formate und die meisten Saves (Socialinsider, 15 Mio. Posts, 2025/26). Auf LinkedIn sind PDF-Dokument-Posts das Format mit der höchsten Engagement-Rate, beste Länge 8–10 Seiten (van der Blom, Algorithm Insights 2025). Wichtig: Instagram zeigt ein Karussell, das jemand überscrollt hat, später **ab Slide 2** erneut. Slide 2 braucht deshalb einen eigenen Hook.

## Benötigte Inputs

- **Thema** (vom Nutzer). Gut geeignet: Schritt-für-Schritt-Anleitungen, Checklisten, Fehler-Listen, Vorher/Nachher, Mythen vs. Fakten, Frameworks. Fehlt das Thema: 3 Vorschläge aus `marke/zielgruppe.md` machen.
- **Plattform:** Instagram, LinkedIn oder beide. Standard: beide (gleiche Slides, zwei Exporte).
- Aus dem Repo, immer lesen: `marke/zielgruppe.md`, `marke/tonalitaet.md`, `marke/angebot.md`, `marke/design.md`, `marke/beispiele.md`, `marke/regeln.md`
- Aus deinem Gedächtnis: gespeicherte Regeln zu diesem Prozess.

## Werkzeuge

Einrichtung und Keys: `grundlagen/einrichtung.md`.

- **Slides:** HTML/CSS-Vorlage im Markendesign → ein PNG pro Slide über Headless-Chrome/Playwright (exakter Text, identisches Layout auf jeder Slide).
- **Bildelemente (optional):** Higgsfield API (`https://docs.higgsfield.ai`) für Illustrationen oder Szenen. **Nie Text im KI-Bild**, immer per HTML/CSS drüberlegen.
- **LinkedIn-PDF:** die Slides zu einem PDF zusammenfügen (z. B. Chrome „print to PDF“ der HTML-Slides oder `img2pdf`).

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Sind die `marke/`-Dateien noch Platzhalter, frag nach, bevor du schreibst.
2. **Versprechen festlegen.** Ein Satz: „Wer bis zum Ende swipt, hat ___.“ (z. B. „eine Checkliste, mit der er X in 10 Minuten prüft“). Das ist der Grund zum Speichern.
3. **Gliederung als Text** (noch kein Design). Gesamt 7–10 Slides; mehr nur, wenn jede Slide wirklich eine eigene Aussage hat.
   - **Slide 1 – Hook:** das Versprechen, spezifisch (Zahl, Zielgruppe, Ergebnis). Max. 12 Wörter.
   - **Slide 2 – zweiter Hook:** muss **allein** funktionieren, weil sie evtl. als Einstieg gezeigt wird. Problem zuspitzen oder zeigen, warum die übliche Lösung scheitert.
   - **Slides 3 bis n-2 – Mehrwert:** genau **eine** Aussage pro Slide. Durchnummerieren, wenn es Schritte sind.
   - **Slide n-1 – Zusammenfassung:** alles auf einen Blick. Das ist die Slide, für die gespeichert wird.
   - **Slide n – CTA:** genau ein CTA (Speichern, Weiterschicken oder Standard-CTA aus `marke/angebot.md`).
4. **Texte schreiben.** Max. ca. 25 Wörter pro Mehrwert-Slide: Überschrift plus 1–2 Sätze. Konkrete Beispiele statt Behauptungen. Jede Slide endet so, dass man die nächste sehen will (Aufzählung angekündigt, Frage offen, „Aber: …“).
5. **Design bauen.** HTML/CSS-Vorlage mit Farben und Schriften aus `marke/design.md`.
   - Format **1080×1350** (4:5), gilt für Instagram und LinkedIn.
   - Große Schrift (Fließtext nicht unter ca. 36 px bei 1080 px Breite), viel Weißraum, Randabstand min. 80 px.
   - Gleiches Raster auf allen Slides, Seitenzahl sichtbar, Handle auf jeder Slide.
   - Swipe-Hinweis (Pfeil) auf Slide 1 und 2.
   - Optional Bildelemente über Higgsfield: max. 3 Versuche pro Bild, Budget aus `marke/regeln.md`.
6. **Rendern.** Jede Slide als PNG (1080×1350). Für LinkedIn zusätzlich ein PDF mit allen Slides in Reihenfolge.
7. **Caption schreiben.**
   - **Instagram:** 1–2 Sätze, die das Versprechen wiederholen und Keywords enthalten, nach denen die Zielgruppe sucht. Dann Aufforderung zum Speichern oder Senden. 3–5 passende Hashtags.
   - **LinkedIn:** kurzer Text-Hook (2–3 Zeilen bis „…mehr“), 2–3 Sätze Kontext, eine Frage für Kommentare. PDF-Titel = Versprechen (wird angezeigt).
8. **Visuelle Kontrolle.** Alle Slides in **Handygröße** (ca. 390 px Breite) ansehen: Alles lesbar? Nichts abgeschnitten? Stil durchgehend gleich?
9. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
   - [ ] Slide 1 enthält ein spezifisches Versprechen (Zahl, Zielgruppe oder Ergebnis) mit max. 12 Wörtern.
   - [ ] Slide 2 funktioniert allein als Einstieg (Test: Slide 1 zudecken; versteht man, worum es geht, und will weiter?).
   - [ ] Jede Mehrwert-Slide enthält genau eine Aussage und max. ca. 25 Wörter.
   - [ ] Das Versprechen aus Schritt 2 ist am Ende vollständig eingelöst.
   - [ ] Es gibt eine Zusammenfassungs-Slide, die man speichern will.
   - [ ] Genau ein CTA auf der letzten Slide.
   - [ ] 7–10 Slides (Abweichung begründet).
   - [ ] Auf Handygröße ist jede Slide ohne Zoomen lesbar; kein Text abgeschnitten; kein fehlerhafter Text in Bildern.
   - [ ] Farben, Schriften und Handle entsprechen `marke/design.md`.
   - [ ] Instagram-Caption mit Keyword und 3–5 Hashtags; LinkedIn-PDF vorhanden, Seiten in richtiger Reihenfolge.
   - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
10. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`.

## Output-Format

Per Telegram an den Nutzer:

```
🗂 Karussell: <Versprechen aus Schritt 2>
Slides: <Anzahl>

Instagram: <PNG-Dateien 01–n im Anhang, in Reihenfolge>
Caption:
<Text>

LinkedIn: <PDF im Anhang>
Post-Text:
<Text>

KI-Kennzeichnung nötig: <ja/nein, warum>
Alternative Slide-1-Hooks: <2 Varianten>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
Kosten KI-Generierung: <$>
```
