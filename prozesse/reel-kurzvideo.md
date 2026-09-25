---
titel: Reel / Kurzvideo
kategorie: Social Media
icon: sparkles
beschreibung: Komplett KI-produziertes Instagram-Reel ohne eigenes Footage, recycelbar für TikTok.
status: fertig
version: 1
reihenfolge: 12
stichworte: Reel, Instagram Reel, TikTok, Short, Kurzvideo, Kurzvideo-Skript, Faceless Reel
---

## Ziel

Ein fertig geschnittenes Reel (9:16, 15–30 Sekunden) als MP4, **komplett ohne eigenes Footage**: KI-generierte Szenen, Motion Graphics, Untertitel, optional KI-Stimme. Hauptplattform ist Instagram; dieselbe Datei wird unverändert auf TikTok hochgeladen.

Worauf es ankommt: Instagram gewichtet **Watch Time** (inkl. Wiederholungen) und **Sends** am stärksten. Die erste Frage an jedes Reel: **„Ist jemand in den ersten 3 Sekunden überzeugt, dass er bis zum Ende schauen muss?“** (aus Nate Herks `short-form-edit`-Skill). Ein Hook, der nicht eingelöst wird, lässt die Zuschauer nach 5–7 Sekunden abspringen.

Wichtig: Rein KI-generierte Inhalte erreichen im Schnitt weniger als menschlich geprägte. Deshalb müssen **Aussage, Beispiele und Tonalität** klar vom Nutzer kommen (`marke/`). Die KI liefert nur die Bilder.

## Benötigte Inputs

- **Thema / Kernaussage** (vom Nutzer). Fehlt es: 3 Vorschläge aus `marke/zielgruppe.md` machen.
- **Tonspur:** KI-Stimme (Voiceover) **oder** nur Text auf dem Bild. Standard: KI-Stimme, falls ein ElevenLabs-Key vorhanden ist, sonst Text.
- Aus dem Repo, immer lesen: alle Dateien in `marke/`, vor allem `regeln.md` (Budget).
- Aus deinem Gedächtnis: gespeicherte Regeln zu diesem Prozess.

## Werkzeuge

- **Higgsfield API** (`https://docs.higgsfield.ai`): Bild- und Videogenerierung. Ablauf: Modell-Endpunkt mit Prompt aufrufen → `request_id` → Status abfragen, bis fertig → Datei-URL laden. Abrechnung pro Generierung (Videos pro Sekunde). Erfahrungswert aus unabhängigen Tests: nur etwa **jede 4. Videogenerierung ist brauchbar**. Versuche und Budget entsprechend planen.
- **HyperFrames** (HTML/CSS/GSAP → Video, `https://hyperframes.heygen.com`), am besten über das **hyperframes-student-kit** (`https://github.com/nateherkai/hyperframes-student-kit`): Komposition aus Clips, Text-Overlays und Untertiteln. Befehle: `npx hyperframes lint`, `preview`, `render`.
- **ElevenLabs** (optional): KI-Stimme und wortgenaue Zeitstempel für Untertitel.
- **ffmpeg / ffprobe:** Dauer messen, Formate umwandeln.

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? `marke/` noch Platzhalter → nachfragen. Budget aus `marke/regeln.md` notieren.
2. **Hauptfrage und Payoff festlegen.** Schreib auf: die **eine** Frage, die sich der Zuschauer ab Sekunde 1 stellt (z. B. „Wie schreibt man Angebote, die ohne Rabatt verkaufen?“), den **Payoff** (die konkrete Antwort, die vor dem Ende kommt) und den Nutzen („Nach dem Reel kann der Zuschauer ___.“).
3. **3 Openings schreiben**, jeweils die ersten 3 Sekunden (Satz + Bild):
   - **Problem zuerst:** „Dein Angebot wird ignoriert, weil …“
   - **Ergebnis zuerst:** das Endergebnis kurz zeigen, dann „So geht's:“
   - **Wiedererkennen:** eine Situation, in der sich die Zielgruppe sofort erkennt.
   Regeln: Thema in 1–2 Sekunden klar, einfache Sprache, „du“, keine Begrüßung, kein Intro. Wähle die Variante, die die Hauptfrage am klarsten und spezifischsten stellt, und notiere, warum.
4. **Skript mit Timecodes** schreiben (15–30 s, ca. 2,5 gesprochene Wörter pro Sekunde). Alle 2–3 Sekunden passiert etwas Neues (Szenenwechsel, Text, Bewegung). Der Payoff kommt **vor** dem CTA; die Antwort darf nicht nur „in den Kommentaren“ stehen.

```
[0–3 s]  Hook: <Text> | Bild: <Szene> | Overlay: <max. 6 Wörter>
[3–8 s]  <…>
[x–y s]  Payoff: <Antwort auf die Hauptfrage>
[y–z s]  CTA: <genau einer, z. B. „Schick das jemandem, der …“>
```

5. **Szenenliste für die Generierung.** Pro Szene: Beschreibung, Dauer, Kamerabewegung, Stil aus `marke/design.md`.
   - **Keine Texte, Logos oder echten Personen** im generierten Material. Text kommt per HyperFrames darüber; echte Personen sind laut `marke/regeln.md` ein No-Go.
   - Gleicher Stil-Baustein im Prompt für alle Szenen (Licht, Farbwelt, Look), damit das Reel einheitlich wirkt.
   - Wo eine Grafik die Aussage besser zeigt als eine Szene (Zahlen, Schritte, Vergleich): Motion Graphics statt KI-Video. Günstiger und präziser.
6. **Kosten schätzen.** Szenen × Sekunden × Preis × ca. 3 Versuche. Über Budget: Szenen reduzieren oder durch Motion Graphics ersetzen. Reicht das nicht, per Telegram fragen.
7. **Szenen generieren (Higgsfield),** Format 9:16. Jede Szene prüfen: passt zur Aussage, keine Artefakte (Hände, Gesichter, verzerrte Objekte), kein Text im Bild. Max. 3 Versuche pro Szene, danach durch Motion Graphics ersetzen. Kosten mitschreiben.
8. **Tonspur erstellen.**
   - **KI-Stimme:** Skript vertonen (ElevenLabs), Wort-Zeitstempel erzeugen. Die Stimme darf keine echte Person imitieren.
   - **Ohne Stimme:** Text-Overlays tragen die ganze Aussage und stehen lange genug (max. ca. 3 Wörter pro Sekunde).
   - **Musik:** Trend-Audio fügt der Nutzer beim Hochladen in der Instagram-App hinzu (Musik aus der Instagram-Bibliothek lässt sich nicht vorab einbauen). Falls im Video selbst Musik nötig ist: nur lizenzfreie.
9. **Schnitt in HyperFrames**, Komposition 1080×1920.
   - Clips nach Skript anordnen, Gesamtdauer = Tonspur (mit `ffprobe` messen).
   - Untertitel wortgenau zur Stimme, im mittleren Bildbereich. Oben ca. 250 px und unten ca. 350 px freihalten, dort liegen die Instagram-Bedienelemente.
   - Text-Overlays und Motion Graphics im Markendesign.
   - Das erste Bild (Frame 0) muss sofort verständlich sein, kein schwarzer Einstieg.
   - `npx hyperframes lint`, dann Entwurf rendern (`--quality draft`).
10. **Entwurf prüfen.** Einzelbilder bei 0 s, 1 s, 3 s und an jedem Schnitt ansehen: kein schwarzes Bild, keine Sprünge, Untertitel synchron und nicht verdeckt. Dann final rendern (MP4, H.264, 1080×1920).
11. **Cover und Caption.**
    - **Cover:** Frame oder eigenes Bild mit der Hauptfrage als Text. Text mittig halten, weil das Profilraster das Cover beschneidet.
    - **Caption:** 1–2 Sätze mit Keywords, nach denen die Zielgruppe sucht, dann CTA und 3–5 Hashtags.
    - **Tipp an den Nutzer:** neue Hook-Varianten zuerst als **Trial Reel** (nur für Nicht-Follower) testen.
12. **TikTok-Recycling.** Dieselbe MP4-Datei ohne Wasserzeichen für TikTok bereitstellen, Caption kürzen. Instagram bestraft fremde Wasserzeichen, deshalb **immer die Original-MP4** hochladen, nie ein heruntergeladenes Video.
13. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Geprüft wird das **fertige MP4**, nicht nur das Skript:
    - [ ] 3-Sekunden-Test: Bis Sekunde 3 ist klar, worum es geht und warum man bis zum Ende schauen sollte (Beleg: Text und Bild bei 0–3 s).
    - [ ] Keine Begrüßung, kein Intro, kein Logo am Anfang; Frame 0 ist sofort verständlich.
    - [ ] Die Hauptfrage wird vor dem CTA vollständig beantwortet (Timecode des Payoffs).
    - [ ] Mindestens alle 3 Sekunden ändert sich etwas im Bild (Liste der Wechsel mit Timecodes).
    - [ ] Untertitel synchron (Stichproben an 3 Stellen), vollständig und nicht von Instagram-Bedienelementen verdeckt.
    - [ ] Kein Text, kein Logo, keine echte Person im KI-Material; keine sichtbaren KI-Artefakte.
    - [ ] Einheitlicher Look über alle Szenen.
    - [ ] 1080×1920, 15–30 s (Abweichung begründet), Ton ohne Knacken oder Übersteuerung.
    - [ ] Kosten im Budget aus `marke/regeln.md`.
    - [ ] KI-Kennzeichnung vermerkt: realistische KI-Szenen oder KI-Stimme → kennzeichnen (Instagram: „KI-Info“-Label beim Hochladen).
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
14. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich merken: welche Higgsfield-Modelle und Prompt-Bausteine brauchbare Szenen geliefert haben (Trefferquote).

## Output-Format

Per Telegram an den Nutzer:

```
🎬 Reel: <Hauptfrage>
Länge: <s> | Kosten KI: <$>

Video: <MP4 im Anhang>
Cover: <PNG im Anhang>

Instagram-Caption:
<Text>

TikTok-Caption:
<Text>

Beim Hochladen:
- KI-Info-Label: <ja/nein>
- Trend-Audio hinzufügen: <ja/nein, Vorschlag zur Stimmung>
- Als Trial Reel testen: <ja/nein>

Skript: <Skript mit Timecodes>
Alternative Openings: <die 2 anderen aus Schritt 3>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
