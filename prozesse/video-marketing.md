---
titel: Video-Marketing
kategorie: Marketing
icon: trending
beschreibung: 90-Tage-Videostrategie: Ziele pro Stufe, Plattformen, Formate, ein Video → viele Clips, Messung.
status: fertig
version: 2
reihenfolge: 31
stichworte: Videostrategie, Video-Content, Videoplan, Video-Marketing-Strategie, YouTube-Strategie, Video-Funnel, Repurposing
---

## Ziel

Eine **Videostrategie für 90 Tage**: welche Videos auf welchen Plattformen welches Ziel erfüllen, wie sie mit der verfügbaren Kapazität produziert werden (ein Hauptvideo → viele Clips), und woran man misst, ob es funktioniert. Die einzelnen Videos entstehen danach mit den Produktionsprozessen (Reel, YouTube, Verkaufsvideo).

Was die Daten sagen:
- Video ist Standard: 91 % der Unternehmen nutzen es, **YouTube** ist die meistgenutzte und als wirksamste bewertete Plattform, **Kurzvideo** gilt als Format mit dem besten ROI (Wyzowl, *State of Video Marketing 2026*, Umfrage unter Marketern, also Selbsteinschätzung).
- Der Anteil mit gutem ROI fiel von 93 % auf 82 %. Wyzowls Erklärung: Mehr Teams produzieren Video, also auch mehr schwaches Video. **Qualität und Plan schlagen Menge.**
- Kurze Videos (unter 1 Minute) werden im Schnitt zur Hälfte angesehen; bei längeren Videos bleiben weniger, aber interessiertere Zuschauer (Wistia, 13 Mio. Videos).
- Kurz- und Langvideo ergänzen sich: Kurzvideos bringen Entdeckung, lange Videos bauen Vertrauen und Abonnenten auf (Praktiker-Konsens; konkrete Wachstumsfaktoren, die dazu kursieren, sind nicht unabhängig belegt).

## Benötigte Inputs

- **Geschäftsziel für 90 Tage** (z. B. „20 Erstgespräche pro Monat“, „Launch von Kurs X“).
- **Kapazität:** Stunden pro Woche, Budget für KI-Werkzeuge. **Kann/will der Nutzer vor die Kamera?** (entscheidet, welche Formate möglich sind)
- **Vorhandenes:** bisherige Videos und ihre Zahlen, Webinare, Vorträge, Aufnahmen.
- Aus dem Repo, immer lesen: alle Dateien in `marke/`
- Aus deinem Gedächtnis: gespeicherte Regeln, Ergebnisse bisheriger Videos, Contentpläne.

## Werkzeuge

- Produktionsprozesse: `prozesse/reel-kurzvideo.md`, `prozesse/youtube-video.md`, `prozesse/verkaufsvideo.md`
- Clips aus langen Videos: HyperFrames-Kit (`short-form-edit`), Regeln für Transkription und Schnitt in `grundlagen/video-schnitt.md`
- Einrichtung: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Ausgangslage.** Welche Videos gibt es, was lief (Watch Time, Sends, Abonnenten, Anfragen)? Was ist mit der Kapazität realistisch? Ohne Zahlen: nachfragen, sonst Annahmen markieren.
3. **Ziele und Messgrößen pro Stufe.** Jedes Video hat genau eine Aufgabe:

   | Stufe | Aufgabe | Typische Formate | Messgröße |
   |---|---|---|---|
   | Entdeckung | Neue Leute erreichen | Reels, Shorts, TikTok | Watch Time, Sends, Reichweite bei Nicht-Followern |
   | Vertrauen | Expertise und Persönlichkeit zeigen | YouTube-Videos, Webinare, Tutorials | Wiedergabedauer, Abonnenten, Kommentare |
   | Entscheidung | Zum Kauf/Gespräch führen | Verkaufsvideo, Testimonial, Demo | Klicks, Gespräche, Käufe |

   Jede Stufe bekommt eine Zielzahl für 90 Tage, abgeleitet aus dem Geschäftsziel.
4. **Plattformen wählen.** Höchstens **2 Hauptplattformen**, die anderen nur als Zweitverwertung. Standard für dieses Setup: Instagram (Reels) für Entdeckung, YouTube für Vertrauen (Videos werden dort über die Suche jahrelang gefunden), LinkedIn bei B2B, TikTok nur als Zweitverwertung der Reels.
5. **Formate nach Kapazität.**
   - **Nutzer vor der Kamera:** Die stärksten Vertrauensformate (YouTube, Webinar, Testimonial-Interviews) sind möglich.
   - **Nutzer nicht vor der Kamera:** Faceless-Reels (`prozesse/reel-kurzvideo.md`, Weg C), animierte Erklärvideos, Bildschirmaufnahmen mit Stimme. Ehrlich einordnen: Vertrauen baut sich ohne Gesicht und echte Stimme langsamer auf.
   - **Avatar des Nutzers** (`prozesse/reel-kurzvideo.md`, Weg B): nur für Reels, nur mit seiner ausdrücklichen Zustimmung und immer gekennzeichnet. Für YouTube-Videos kein Avatar (`prozesse/youtube-video.md`). **Nie eine KI-Person, die als Kunde oder als jemand anderes auftritt.**
6. **„1 → viele“-System festlegen.** Pro Monat ein bis zwei **Hauptvideos** (z. B. YouTube-Video, Webinar, Vortrag, Interview), daraus:
   - 5–10 Kurzclips (Reels/Shorts) mit je eigenem Hook, geschnitten mit `short-form-edit` (`prozesse/reel-kurzvideo.md`, Weg A mit fertiger Aufnahme)
   - 1–2 Karussells oder Posts mit den Kernaussagen
   - 1 Newsletter
   - Ausschnitte für Anzeigen (falls Werbung läuft)
   Die besten Clips aus dem Monat bekommen in `prozesse/30-tage-contentplan.md` feste Plätze.
7. **Produktions-Rhythmus.** Wann wird aufgenommen (Batch-Tage), wann schneidet Hermes, wann gibt der Nutzer frei? Minimal-Ausrüstung, falls der Nutzer aufnimmt: Handy, Ansteckmikrofon, Licht von vorne.
8. **Verteilung.**
   - Immer die **Original-Datei** hochladen, nie Videos mit Wasserzeichen anderer Plattformen.
   - Untertitel in jedem Video.
   - Verkaufsvideos und Testimonials auf Landingpages einbinden und in E-Mail-Sequenzen verlinken.
   - YouTube-Videos in passende Blogartikel einbetten (`prozesse/seo-blogartikel.md`).
9. **Messen und Experimente.** Monatlich auswerten, pro Stufe mit den Messgrößen aus Schritt 3. **Ein Experiment pro Monat** (z. B. Hook-Typ, Länge, Thema, Gesicht vs. faceless) mit klarer Vergleichsgröße, damit man lernt, statt nur zu produzieren.
10. **90-Tage-Plan.**
    - **Monat 1:** Aufbau und Test. Formate starten, Rhythmus einschleifen, erste Daten.
    - **Monat 2:** Was in Monat 1 funktioniert hat, verstärken; schwache Formate ersetzen.
    - **Monat 3:** Das Gewinnerformat skalieren (mehr Clips, ggf. Anzeigen mit den besten Clips).
11. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
    - [ ] Jede Stufe hat eine Aufgabe, Formate, eine Messgröße und eine Zielzahl, abgeleitet aus dem Geschäftsziel.
    - [ ] Höchstens 2 Hauptplattformen, begründet; Zweitverwertung festgelegt.
    - [ ] Der Plan passt zur angegebenen Kapazität (Stunden pro Woche vorgerechnet) und zum Budget.
    - [ ] Formate passen dazu, ob der Nutzer vor die Kamera geht; Einschränkungen ehrlich benannt.
    - [ ] Das „1 → viele“-System ist konkret (welches Hauptvideo, welche Ableitungen, wer macht was).
    - [ ] Jedes Videoformat verweist auf seinen Produktionsprozess.
    - [ ] Ein Experiment pro Monat mit Vergleichsgröße.
    - [ ] Keine KI-Person, die als Kunde oder als jemand anderes auftritt; Avatar des Nutzers nur für Reels, mit Zustimmung; KI-Anteile zur Kennzeichnung vermerkt.
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
12. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Ergebnis jedes Monats-Experiments als Regel speichern (z. B. „Bei dieser Zielgruppe schlagen Clips mit Ergebnis-Hook die mit Problem-Hook“).

## Output-Format

Strategie als Markdown-Datei, dazu per Telegram:

```
🎬 Video-Marketing: 90 Tage
Geschäftsziel: <…> | Kapazität: <h/Woche> | Vor der Kamera: <ja/nein>

Entdeckung: <Plattform, Format, Frequenz> → Ziel: <Zahl>
Vertrauen: <…> → Ziel: <Zahl>
Entscheidung: <…> → Ziel: <Zahl>

1 → viele: <Hauptvideo pro Monat> → <Ableitungen>
Rhythmus: <Aufnahme, Schnitt, Freigabe>
Experimente: M1 <…>, M2 <…>, M3 <…>

Strategie: <Datei im Anhang>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```

Danach fragen: „Soll ich das erste Hauptvideo planen bzw. die Clips für den Contentplan einplanen?“
