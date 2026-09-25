---
titel: Reel / Kurzvideo
kategorie: Social Media
icon: sparkles
beschreibung: Instagram-Reel aus eigener Aufnahme, Avatar des Nutzers oder komplett KI-produziert, recycelbar für TikTok.
status: fertig
version: 2
reihenfolge: 12
stichworte: Reel, Instagram Reel, TikTok, Short, Kurzvideo, Kurzvideo-Skript, Faceless Reel, Talking Head, KI-Avatar, Avatar-Video
---

## Ziel

Ein fertig geschnittenes Reel (9:16, 15–30 Sekunden) als MP4. Hauptplattform ist Instagram; dieselbe Datei wird unverändert auf TikTok hochgeladen.

Worauf es ankommt: Instagram gewichtet **Watch Time** (inkl. Wiederholungen) und **Sends** am stärksten. Die erste Frage an jedes Reel: **„Ist jemand in den ersten 3 Sekunden überzeugt, dass er bis zum Ende schauen muss?“** (aus Nate Herks `short-form-edit`-Skill). Ein Hook, der nicht eingelöst wird, lässt die Zuschauer nach 5–7 Sekunden abspringen.

**Arbeitsteilung:** Der Nutzer entscheidet, **worüber** gesprochen wird (Thema, Anlass, Framing), denn dort entsteht sein Marktgefühl. Du übernimmst die **Produktion** (Skript, Schnitt, Varianten, Rendern) und lieferst Belege, die seine Entscheidung stützen. Nimm ihm die Themenwahl nicht stillschweigend ab. (Prinzip nach KI TALK, Niklas Volland und Maxi Raabe: „Automatisiere die Produktion, nicht dein Marktverständnis.“)

Drei Produktionswege:

| Weg | Wann | Was du machst |
|---|---|---|
| **A: Eigene Aufnahme** | Der Nutzer schickt ein Rohvideo (mit Pausen und Versprechern) | Pausen und Versprecher rausschneiden, Untertitel, Grafiken, fertiger Schnitt |
| **B: Avatar des Nutzers** | Avatar und Stimmklon sind eingerichtet und freigegeben (Schritt 2) | Skript → Stimmklon → Avatar-Video → Schnitt |
| **C: Faceless** | Kein Material, kein Avatar | KI-Szenen und Motion Graphics, optional KI-Stimme |

Rein KI-generierte Inhalte erreichen im Schnitt weniger als menschlich geprägte. Deshalb gilt: **A vor B vor C**, soweit verfügbar. Bei jedem Weg müssen Aussage, Beispiele und Tonalität klar vom Nutzer kommen (`marke/`).

## Benötigte Inputs

- **Thema / Kernaussage** und **Anlass** („Warum jetzt?“, z. B. eine Beobachtung, eine Kundenfrage, eine Neuigkeit), vom Nutzer. Fehlt beides: Vorschläge nach Schritt 3, der Nutzer wählt.
- **Produktionsweg:** A, B oder C (siehe oben). Nicht angegeben: Rohvideo dabei → A; Avatar eingerichtet → B; sonst C.
- **Referenz (optional):** Link zu einem Reel, dessen Aufbau als Vorlage dienen soll, auch aus einer anderen Branche.
- **Nur C, Tonspur:** KI-Stimme oder nur Text auf dem Bild. Standard: KI-Stimme, falls ein ElevenLabs-Key vorhanden ist, sonst Text.
- Aus dem Repo, immer lesen: alle Dateien in `marke/`, vor allem `zielgruppe.md` (Persona für Schritt 8) und `regeln.md` (Budget).
- Aus deinem Gedächtnis: gespeicherte Regeln zu diesem Prozess, Zahlen früherer Reels (Schritt 15), Zustimmung zu Avatar/Stimmklon.

## Werkzeuge

Einrichtung und Keys: `grundlagen/einrichtung.md`. Fehlt das HyperFrames-Kit, installiere es selbst, bevor du startest.

- **HyperFrames** (HTML/CSS/GSAP → Video, `https://hyperframes.heygen.com`), am besten über das **hyperframes-student-kit** (`https://github.com/nateherkai/hyperframes-student-kit`): Komposition aus Clips, Text-Overlays, Motion Graphics und Untertiteln. Befehle: `npx hyperframes lint`, `preview`, `render`. Skills `short-form-edit`, `cut-silences`, `cut-mistakes`.
- **Weg A:** `video-use` (`https://github.com/browser-use/video-use`) oder die Kit-Skills `cut-silences` / `cut-mistakes` zum Schneiden von Rohmaterial.
- **Weg B:** **HeyGen API** (Avatar-Video des Nutzers, kostenpflichtig, nur nach Freigabe) und **ElevenLabs** (Stimmklon des Nutzers).
- **Weg C:** **Higgsfield API** (`https://docs.higgsfield.ai`): Bild- und Videogenerierung. Ablauf: Modell-Endpunkt mit Prompt aufrufen → `request_id` → Status abfragen, bis fertig → Datei-URL laden. Abrechnung pro Generierung (Videos pro Sekunde). Erfahrungswert aus unabhängigen Tests: nur etwa **jede 4. Videogenerierung ist brauchbar**. Versuche und Budget entsprechend planen.
- **ElevenLabs:** KI-Stimme bzw. Stimmklon und wortgenaue Zeitstempel für Untertitel.
- **ffmpeg / ffprobe:** Dauer messen, Formate umwandeln.

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? `marke/` noch Platzhalter → nachfragen. Produktionsweg festlegen. Budget aus `marke/regeln.md` notieren.
2. **Nur Weg B, einmalig: Avatar und Stimmklon einrichten.**
   - Nutzer um **ausdrückliche Zustimmung** bitten, dass sein Gesicht und seine Stimme per KI nachgebildet werden, und die Zustimmung in deinem Gedächtnis vermerken. Nur der Nutzer selbst, **nie andere Personen** (Kunden, Gäste, Prominente).
   - HeyGen ist kostenpflichtig: Freigabe nach `marke/regeln.md` einholen, dann dem Einrichtungsablauf von HeyGen folgen (Ausgangsvideo des Nutzers, Einwilligungsnachweis). Dem Nutzer eine Aufnahme-Anleitung schicken: ruhiger Raum, gleichmäßiges Licht, Kamera auf Augenhöhe, natürlich sprechen, Kleidung wie in seinen Videos.
   - Stimmklon wie in `prozesse/podcast-episode.md`, Schritt 2.
   - Ein 10-Sekunden-Testvideo erzeugen und dem Nutzer zur Abnahme schicken, bevor der Avatar produktiv genutzt wird.
3. **Thema prüfen: Marktinteresse statt eigener Begeisterung.**
   - **Thema kommt vom Nutzer:** übernehmen. Findest du Hinweise, dass es die Zielgruppe gerade kaum interessiert (z. B. nur Fachleute sprechen darüber), sag das in einem Satz und frag, ob er dabei bleibt. Nicht blockieren.
   - **Kein Thema:** 3 Vorschläge, jeweils mit **Beleg**, warum die Zielgruppe sich **jetzt** dafür interessiert: wiederkehrende Fragen in Kommentaren oder Kundengesprächen (Gedächtnis, Company OS), vergleichbare Reels der letzten 14 Tage mit auffällig hoher Reichweite im Verhältnis zur Followerzahl, aktuelle Neuigkeiten aus der Branche. Ohne Beleg kein Vorschlag. Der Nutzer wählt.
4. **Muster finden (X → X 1.1).** Du brauchst keine völlig neue Idee. Nimm die Referenz des Nutzers oder such 2–3 Reels, die zum Thema oder Format gerade gut laufen, gern aus anderen Branchen. Halte pro Reel fest: Hook-Typ, Aufbau, Tempo, Darstellungsform, **warum** es funktioniert. Übernimm das **Prinzip** und passe es an Zielgruppe und Angebot an. **Nie** Wortlaut, Bilder, Ton oder Schnitt übernehmen (`marke/regeln.md`). Hast du keinen Zugriff auf die Plattformen und keine Referenz: Schritt auslassen und im Output vermerken.
5. **Hauptfrage, Framing und Payoff festlegen.** Schreib auf:
   - die **eine** Frage, die sich der Zuschauer ab Sekunde 1 stellt (z. B. „Wie schreibt man Angebote, die ohne Rabatt verkaufen?“),
   - das **Framing**: Was ändert sich dadurch **für den Zuschauer**? Nicht „Tool X ist erschienen“, sondern was er jetzt anders machen kann oder was ihm entgeht,
   - den **Payoff** (die konkrete Antwort, die vor dem Ende kommt) und den Nutzen („Nach dem Reel kann der Zuschauer ___.“).
6. **3 Openings schreiben**, jeweils die ersten 3 Sekunden (Satz + Bild):
   - **Problem zuerst:** „Dein Angebot wird ignoriert, weil …“
   - **Ergebnis zuerst:** das Endergebnis kurz zeigen, dann „So geht's:“
   - **Wiedererkennen:** eine Situation, in der sich die Zielgruppe sofort erkennt.
   Regeln: Thema in 1–2 Sekunden klar, einfache Sprache, „du“, keine Begrüßung, kein Intro. Wähle die Variante, die die Hauptfrage am klarsten und spezifischsten stellt, und notiere, warum.
7. **Skript mit Timecodes** schreiben (15–30 s, ca. 2,5 gesprochene Wörter pro Sekunde). Alle 2–3 Sekunden passiert etwas Neues (Szenenwechsel, Text, Bewegung, Schnitt). Der Payoff kommt **vor** dem CTA; die Antwort darf nicht nur „in den Kommentaren“ stehen.

```
[0–3 s]  Hook: <Text> | Bild: <Szene / Einstellung> | Overlay: <max. 6 Wörter>
[3–8 s]  <…>
[x–y s]  Payoff: <Antwort auf die Hauptfrage>
[y–z s]  CTA: <genau einer, z. B. „Schick das jemandem, der …“>
```

8. **Verständlichkeits-Check, bevor Geld oder Zeit in die Produktion fließt.** Fachwissen ist hier das Risiko: Was dem Nutzer selbstverständlich ist, versteht die Zielgruppe oft nicht.
   - **Persona-Test:** Versetz dich vollständig in die Zielperson aus `marke/zielgruppe.md` (Rolle, Wissen, Probleme, Einwände) und lies das Skript aus ihrer Sicht. Beantworte schriftlich: Welche Aussage verstehe ich nicht sofort? Welcher Begriff ist zu technisch? Wo verliere ich das Interesse? Welche Frage bleibt offen?
   - **12-Jährigen-Test:** Jeder Fachbegriff wird ersetzt oder in einem halben Satz erklärt. Ein Gedanke pro Satz.
   - Skript überarbeiten, bis beide Tests ohne Befund durchlaufen. Der Persona-Test ist keine echte Kundenbefragung; echte Kommentare und Zahlen (Schritt 15) wiegen schwerer.
   - **Weg A:** Jetzt Skript bzw. Stichpunkte und das gewählte Opening an den Nutzer schicken (Format unten), mit Aufnahmetipps: Handy hochkant, Kamera auf Augenhöhe, Licht von vorn, Mikrofon nah, erster Satz ist der Hook (kein „Hallo“), Versprecher einfach wiederholen, nicht neu starten. Weiter, sobald das Rohvideo da ist.
9. **Produktion nach Weg.**
   - **A: Eigene Aufnahme.**
     - Rohvideo transkribieren, Pausen und Versprecher entfernen (`cut-silences`, `cut-mistakes` oder `video-use`). Bei mehreren Anläufen den besten Take je Satz nehmen.
     - Transkript des Schnitts gegen das Skript abgleichen: Hook in den ersten 3 Sekunden? Payoff vollständig? **Keine Aussage durch Kürzen sinnentstellen**, keine Wörter hinzuerfinden.
     - Wo der Nutzer etwas erklärt, das man zeigen kann: Motion Graphics oder Text-Overlays statt Standbild.
   - **B: Avatar des Nutzers.**
     - Skript mit dem Stimmklon vertonen, Wort-Zeitstempel erzeugen. Anhören bzw. transkribieren und mit dem Skript abgleichen (falsche Betonung, verschluckte Wörter → neu erzeugen).
     - Avatar-Video über HeyGen erzeugen, 9:16. Prüfen: Lippen synchron, keine Artefakte an Mund, Augen, Händen. Max. 3 Versuche, Kosten mitschreiben.
     - Ein reiner Sprechkopf ermüdet: mindestens jede 3. Sekunde ein Wechsel (Zoom, Schnitt auf Grafik, Text-Overlay).
   - **C: Faceless.**
     - **Szenenliste:** pro Szene Beschreibung, Dauer, Kamerabewegung, Stil aus `marke/design.md`. **Keine Texte, Logos oder echten Personen** im generierten Material; Text kommt per HyperFrames darüber. Gleicher Stil-Baustein im Prompt für alle Szenen (Licht, Farbwelt, Look). Wo eine Grafik die Aussage besser zeigt (Zahlen, Schritte, Vergleich): Motion Graphics statt KI-Video.
     - **Kosten schätzen:** Szenen × Sekunden × Preis × ca. 3 Versuche. Über Budget: Szenen reduzieren oder durch Motion Graphics ersetzen. Reicht das nicht, per Telegram fragen.
     - **Szenen generieren (Higgsfield),** 9:16. Jede Szene prüfen: passt zur Aussage, keine Artefakte (Hände, Gesichter, verzerrte Objekte), kein Text im Bild. Max. 3 Versuche pro Szene, danach durch Motion Graphics ersetzen. Kosten mitschreiben.
     - **Tonspur:** KI-Stimme (ElevenLabs, darf keine echte Person imitieren) mit Wort-Zeitstempeln, oder ohne Stimme: Text-Overlays tragen die ganze Aussage und stehen lange genug (max. ca. 3 Wörter pro Sekunde).
   - **Musik (alle Wege):** Trend-Audio fügt der Nutzer beim Hochladen in der Instagram-App hinzu (Musik aus der Instagram-Bibliothek lässt sich nicht vorab einbauen). Falls im Video selbst Musik nötig ist: nur lizenzfreie.
10. **Schnitt in HyperFrames**, Komposition 1080×1920.
    - Clips nach Skript anordnen, Gesamtdauer = Tonspur (mit `ffprobe` messen).
    - Untertitel wortgenau zur Stimme, im mittleren Bildbereich. Oben ca. 250 px und unten ca. 350 px freihalten, dort liegen die Instagram-Bedienelemente. Bei A und B das Gesicht nicht verdecken.
    - Text-Overlays und Motion Graphics im Markendesign.
    - Das erste Bild (Frame 0) muss sofort verständlich sein, kein schwarzer Einstieg.
    - `npx hyperframes lint`, dann Entwurf rendern (`--quality draft`).
11. **Entwurf prüfen.** Einzelbilder bei 0 s, 1 s, 3 s und an jedem Schnitt ansehen: kein schwarzes Bild, keine Sprünge, Untertitel synchron und nicht verdeckt. Dann final rendern (MP4, H.264, 1080×1920).
12. **Cover und Caption.**
    - **Cover:** Frame oder eigenes Bild mit der Hauptfrage als Text. Text mittig halten, weil das Profilraster das Cover beschneidet.
    - **Caption:** 1–2 Sätze mit Keywords, nach denen die Zielgruppe sucht, dann CTA und 3–5 Hashtags.
    - **Tipp an den Nutzer:** neue Hook-Varianten zuerst als **Trial Reel** (nur für Nicht-Follower) testen.
13. **TikTok-Recycling.** Dieselbe MP4-Datei ohne Wasserzeichen für TikTok bereitstellen, Caption kürzen. Instagram bestraft fremde Wasserzeichen, deshalb **immer die Original-MP4** hochladen, nie ein heruntergeladenes Video.
14. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Geprüft wird das **fertige MP4**, nicht nur das Skript:
    - [ ] Thema vom Nutzer gewählt oder bestätigt; bei eigenen Vorschlägen liegt je ein Beleg für aktuelles Interesse vor.
    - [ ] Framing aus Zuschauersicht: Bis Sekunde 5 ist klar, was sich **für ihn** ändert (Beleg: Satz mit Timecode).
    - [ ] Verständlichkeits-Check (Schritt 8) ohne offenen Befund; kein unerklärter Fachbegriff im Skript.
    - [ ] Referenz-Reels nur als Muster genutzt: kein übernommener Wortlaut, kein fremdes Bild- oder Tonmaterial.
    - [ ] 3-Sekunden-Test: Bis Sekunde 3 ist klar, worum es geht und warum man bis zum Ende schauen sollte (Beleg: Text und Bild bei 0–3 s).
    - [ ] Keine Begrüßung, kein Intro, kein Logo am Anfang; Frame 0 ist sofort verständlich.
    - [ ] Die Hauptfrage wird vor dem CTA vollständig beantwortet (Timecode des Payoffs).
    - [ ] Mindestens alle 3 Sekunden ändert sich etwas im Bild (Liste der Wechsel mit Timecodes).
    - [ ] Untertitel synchron (Stichproben an 3 Stellen), vollständig und nicht von Instagram-Bedienelementen verdeckt.
    - [ ] **A:** keine Aussage durch den Schnitt sinnentstellt, keine hörbaren Schnittkanten. **B:** Lippen synchron, Zustimmung liegt vor. **C:** kein Text, kein Logo, keine echte Person im KI-Material. Alle Wege: keine sichtbaren KI-Artefakte.
    - [ ] Einheitlicher Look über alle Szenen.
    - [ ] 1080×1920, 15–30 s (Abweichung begründet), Ton ohne Knacken oder Übersteuerung.
    - [ ] Kosten im Budget aus `marke/regeln.md`.
    - [ ] KI-Kennzeichnung vermerkt: Avatar, Stimmklon, KI-Stimme oder realistische KI-Szenen → kennzeichnen (Instagram: „KI-Info“-Label beim Hochladen). Bei B immer.
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
15. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich:
    - Merken, welche Higgsfield-Modelle und Prompt-Bausteine (C) bzw. welche Avatar-Einstellungen (B) brauchbare Ergebnisse geliefert haben (Trefferquote).
    - **Social Media als Marktdaten:** Bitte den Nutzer im Output um die Zahlen nach 7 Tagen. Speichere sie zusammen mit Thema, Framing, Hook-Typ und Produktionsweg. Ab 5 Reels: Muster auswerten (welche Themen, Hooks und Wege laufen besser) und bei Themenvorschlägen (Schritt 3) als Beleg nutzen.

## Output-Format

Per Telegram an den Nutzer:

```
🎬 Reel: <Hauptfrage>
Weg: <A eigene Aufnahme / B Avatar / C faceless> | Länge: <s> | Kosten KI: <$>

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

Warum dieses Thema jetzt: <Anlass bzw. Beleg>
Muster-Vorlage: <Referenz + übernommenes Prinzip / „keine“>
Skript: <Skript mit Timecodes>
Alternative Openings: <die 2 anderen aus Schritt 6>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>

Bitte schick mir nach 7 Tagen: Aufrufe, durchschnittliche Wiedergabedauer, Sends, Saves, neue Follower.
```

Bei Weg A vorher, nach Schritt 8:

```
🎥 Aufnahme für Reel: <Hauptfrage>
Opening (erster Satz, kein „Hallo“): <Text>
Skript / Stichpunkte: <…>
Aufnahmetipps: <…>
Schick mir das Rohvideo, den Rest mache ich.
```
