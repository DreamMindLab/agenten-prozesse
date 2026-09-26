---
titel: Verkaufsvideo
kategorie: Werbung
icon: video
beschreibung: Skript und Produktion für Pitch-Video (VSL), kurzes Verkaufsvideo für Ads oder Testimonial-Schnitt.
status: fertig
version: 1
reihenfolge: 42
stichworte: VSL, Video Sales Letter, Pitch-Video, Verkaufsvideo, Testimonial-Video, Kundenstimme, Sales Video, Video-Anzeige
---

## Ziel

Ein Verkaufsvideo, das einen bestimmten Zuschauer zu einer bestimmten Handlung (Kauf, Termin) führt. Drei Typen:

| Typ | Wofür | Länge (Richtwert) | Produktion |
|---|---|---|---|
| **Pitch / VSL** | Auf der Verkaufsseite, ersetzt oder ergänzt den Text | 5–15 Min. bei günstigen Angeboten und Leads, 20–45 Min. bei hochpreisigen | KI-Stimme + animierte Texte/Grafiken (HyperFrames) oder Aufnahme des Nutzers |
| **Kurzes Verkaufsvideo** | Als Anzeige oder Post | 30–90 Sek. | Wie ein Reel (`prozesse/reel-kurzvideo.md`), aber mit Angebot und CTA |
| **Testimonial** | Beweis auf Seite oder in Anzeigen | 30 Sek.–3 Min. | **Nur echtes Material von echten Kunden** |

Zur Länge: Laut einer Vidyard-Auswertung von 850 B2B-Verkaufsvideos (2025) hatten 8–15 Minuten das beste Verhältnis von Zuschauerbindung zu Abschluss. Unter 5 Minuten reichte oft nicht, um zu überzeugen, über 25 Minuten verloren zu viele Zuschauer vor dem Angebot. Wistia (13 Mio. Videos) sieht den stärksten Abbruch bei 10–20 Minuten Länge. Die Länge folgt also dem Preis und der Komplexität des Angebots, nicht einer Regel.

## Benötigte Inputs

- **Typ** (Pitch/VSL, kurz, Testimonial) und **wo** das Video läuft.
- **Angebot** mit Preis, Inhalt, Garantie (falls vorhanden), echter Frist (falls vorhanden) aus `marke/angebot.md`.
- **Die Geschichte des Nutzers:** Warum er das anbietet, sein Wendepunkt, seine Erkenntnis. Ohne echte Geschichte keine Story-Phase erfinden, sondern nachfragen.
- **Beweise:** echte Ergebnisse, Kundenstimmen, Zahlen.
- **Testimonial:** die Rohaufnahmen des Kunden **und** seine Einwilligung zur Nutzung in Werbung.
- **Stimme:** neutrale KI-Stimme, Stimmklon des **Nutzers selbst** (nur mit seiner ausdrücklichen Zustimmung) oder eigene Aufnahme.
- Aus dem Repo, immer lesen: alle Dateien in `marke/`
- Aus deinem Gedächtnis: gespeicherte Regeln zu diesem Prozess.

## Werkzeuge

- Copy: `prozesse/copywriting.md` (Schritte 3–9)
- HyperFrames-Kit (animierte Texte, Grafiken, Untertitel, Rendern). Skill `edit-video` für längere Videos, `short-form-edit` für kurze.
- ElevenLabs (Stimme), Higgsfield (B-Roll-Szenen, sparsam)
- Für Testimonials aus Rohmaterial: HyperFrames-Kit (`cut-silences`, `cut-mistakes`) oder `video-use` (`https://github.com/browser-use/video-use`)
- Einrichtung und Keys: `grundlagen/einrichtung.md`. Fehlende kostenlose Werkzeuge selbst installieren.

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Harte Grenze: keine künstlichen Kundenstimmen.** Ein Testimonial muss von einer **echten Person** stammen, die das Angebot **wirklich genutzt** hat, mit ihren **eigenen Worten**. Verboten: KI-Avatare oder KI-Stimmen als „Kunde“, umgeschriebene oder zusammengesetzte Aussagen, Schauspieler ohne klare Kennzeichnung. In der EU irreführend (§ 5 UWG), in den USA seit Okt. 2024 ausdrücklich verboten (FTC-Regel zu Bewertungen und Testimonials). Eine KI-Kennzeichnung macht ein erfundenes Testimonial **nicht** zulässig. Fehlt echtes Material → Typ „Testimonial“ ablehnen und dem Nutzer erklären, wie er Kundenstimmen einsammelt (3 Fragen: Wie war es vorher? Was hat sich verändert? Wem würdest du es empfehlen?).
3. **Diagnose** mit `prozesse/copywriting.md`, Schritte 3–5 (Kundensprache, dominantes Verlangen, Bewusstseinsstufe, Marktreife, Einwände). Zuschauer einer Verkaufsseite sind meist lösungs- oder angebotsbewusst; Zuschauer einer Anzeige meist problembewusst.
4. **Skript nach Typ.**

   **Pitch / VSL** (Aufbau „Hook – Story – Angebot“, nach Russell Brunsons Star-Story-Solution). Pro Phase: Ziel, Dauer, Text.
   1. **Hook (erste 30–60 Sek.):** Das dominante Verlangen ansprechen, bisherige Fehlversuche benennen, ein großes, aber belegbares Versprechen geben. Sagen, für wen das Video ist.
   2. **Story (ca. 25–35 % der Länge):** Wer spricht, der Tiefpunkt, der Wendepunkt (die Erkenntnis), der falsche Glaube, den der Zuschauer noch hat, und warum es nicht seine Schuld war. **Nur echte Geschichte des Nutzers.**
   3. **Lösung (ca. 20–30 %):** Der Mechanismus (wie es funktioniert), erste Ergebnisse, echte Beweise, die Einwände.
   4. **Angebot (ca. 15–20 %):** Was man bekommt (Bestandteile mit Nutzen), Preis, Garantie, echte Frist.
   5. **Abschluss:** Blick auf das Ergebnis, CTA, CTA-Wiederholung.
   Zum Ton: Diese Dramaturgie stammt aus dem US-Direktmarketing. Wie stark Tiefpunkt, Versprechen und Dringlichkeit zugespitzt werden, legt `marke/tonalitaet.md` fest (Feld „Zuspitzung“), ohne Angabe sachlich-pointiert. **Einkommens- und Erfolgsversprechen** nur mit Beleg und als Einzelfall gekennzeichnet (`grundlagen/deutschland.md`, Abschnitt 3).
   Zu Wertangaben und Preisen: Einzelwerte im „Value Stack“ nur nennen, wenn sie sich begründen lassen (z. B. tatsächlicher Einzelpreis). Keinen „statt X €“-Preis, der nie verlangt wurde. Das ist irreführende Preiswerbung. Frist und Knappheit nur, wenn echt.

   **Kurzes Verkaufsvideo (30–90 Sek.):** Hook (0–3 Sek., wie im Reel-Prozess) → Problem oder Ergebnis → Mechanismus in einem Satz → ein Beweis (nur echt) → Angebot + CTA. Mit Kurz-Varianten für 3 verschiedene Hooks (für Meta-Anzeigen, siehe `prozesse/ad-texte.md`, Schritt 4).

   **Testimonial:** Aus dem Rohmaterial die stärksten Aussagen zu Vorher / Veränderung / Ergebnis / Empfehlung auswählen. Schneiden, **ohne den Sinn zu verändern** (keine Sätze aus verschiedenen Stellen zu neuen Aussagen zusammensetzen). Name, Rolle und ggf. Ergebnis als Einblendung.

5. **Skript prüfen, bevor produziert wird.** Laut lesen (Startwert 120–140 gesprochene Wörter pro Minute bzw. gemessenes Tempo, `grundlagen/deutschland.md`, Abschnitt 1): Stimmt die Länge? Gibt es Stellen ohne neuen Gedanken (kürzen)? Kommt das Angebot vor dem Punkt, an dem die meisten abspringen (bei langen Videos: Angebot spätestens angedeutet, bevor die Hälfte erreicht ist)?
6. **Produktion.**
   - **Pitch/VSL ohne Aufnahme:** Stimme erzeugen (ElevenLabs), Wort-Zeitstempel holen. In HyperFrames: Kernsätze als animierte Texte, Zahlen und Abläufe als Grafiken, Untertitel. B-Roll über Higgsfield nur, wo ein Bild die Aussage wirklich trägt (Budget aus `marke/regeln.md`). Format nach Einsatzort: 16:9 für Verkaufsseite, 9:16 oder 4:5 für Anzeigen.
   - **Mit Aufnahme des Nutzers:** Ihm das Skript und Aufnahmetipps schicken (ruhiger Ort, Licht von vorne, Handy quer für 16:9). Danach schneiden mit `edit-video` bzw. `video-use`: Pausen und Versprecher raus, Grafiken und Untertitel rein.
   - **Kurzes Verkaufsvideo:** nach `prozesse/reel-kurzvideo.md`, Schritte 5–10.
   - **Testimonial:** Rohmaterial schneiden (`cut-silences`, `cut-mistakes`), Untertitel, Namenseinblendung.
7. **Entwurf prüfen.** Einzelbilder am Anfang, an jedem Phasenwechsel und am CTA ansehen; Ton durchhören lassen, falls möglich. Untertitel synchron und vollständig? Keine Artefakte in KI-Material?
8. **Final rendern** (MP4, H.264). Bei VSL zusätzlich ein Vorschaubild (Thumbnail) mit dem Versprechen als Text.
9. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Geprüft wird das **fertige Video**:
   - [ ] Die ersten 30 Sek. (VSL) bzw. 3 Sek. (kurz) machen klar, für wen das Video ist und warum man weiterschauen sollte.
   - [ ] Die Geschichte ist die echte Geschichte des Nutzers; nichts erfunden oder ausgeschmückt.
   - [ ] Mechanismus, Beweise und Einwände kommen vor, Beweise nur echt.
   - [ ] Angebot vollständig: Bestandteile, Preis, Garantie (falls vorhanden), CTA mindestens zweimal.
   - [ ] Keine Einkommens- oder Erfolgsversprechen und keine Spitzenstellung ohne Beleg; Zuspitzung passt zu `marke/tonalitaet.md`.
   - [ ] Keine unbegründeten Wertangaben, kein „statt X €“-Preis ohne echte Grundlage, keine vorgetäuschte Frist oder Knappheit.
   - [ ] Testimonial: echte Person, echte Nutzung, eigene Worte, Sinn beim Schnitt unverändert, Einwilligung liegt vor.
   - [ ] Keine KI-Person, die als Kunde oder als echter Mensch auftritt; KI-Stimme/KI-Szenen zur Kennzeichnung markiert.
   - [ ] Länge passt zu Typ und Preis (Begründung); keine Passage ohne neuen Gedanken.
   - [ ] Untertitel synchron und vollständig; Format passt zum Einsatzort.
   - [ ] Die Copy-Kriterien aus `prozesse/copywriting.md` (Schritt 10) sind erfüllt.
   - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
10. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Liefert der Nutzer Zuschauerdaten (Absprungkurve), die Stelle mit dem größten Abbruch benennen und als Prozess-Vorschlag oder Skript-Änderung melden.

## Output-Format

Per Telegram an den Nutzer:

```
🎥 Verkaufsvideo: <Typ> – <Angebot>
Länge: <Min:Sek> | Format: <16:9 / 9:16 / 4:5> | Kosten KI: <$>

Video: <MP4 im Anhang oder Link>
Thumbnail: <PNG im Anhang>

Skript: <Skript mit Phasen und Zeitmarken>
Diagnose: Verlangen <…> | Bewusstsein <Stufe> | Marktreife <Stufe>

KI-Kennzeichnung nötig: <ja/nein, warum>
Offene Punkte: <z. B. echte Kundenstimme fehlt, Garantie unklar>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
