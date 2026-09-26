---
titel: Videoschnitt
beschreibung: Gemeinsame Regeln für Reel, YouTube, Verkaufsvideo und Podcast-Video: lokale Transkription auf Deutsch, Beat-Plan, Kit-Skills, Videostil, fremdes Material und Ton, Selbstprüfung.
---

Die Video-Prozesse verweisen auf diese Abschnitte. Wo ein Prozess einen Abschnitt nennt, führst du ihn an genau dieser Stelle aus.

Grundlage ist das HyperFrames-Kit von Nate Herk (Einrichtung: `grundlagen/einrichtung.md`). Seine fünf Arbeitsschritte (transkribieren, schneiden, Beats planen, Skills pflegen, selbst prüfen) stecken in den Prozessen; hier stehen die Abweichungen für Deutschland und die Punkte, die das Kit nicht von selbst richtig macht.

## Abschnitt 1: Transkription lokal und auf Deutsch

Jede Aufnahme (Rohvideo, Interview, Testimonial, fertiger Render zur Kontrolle) wird zuerst wortgenau transkribiert. Schnitt, Untertitel und Beats hängen an diesen Zeitstempeln.

- **Standard: lokal mit Whisper über das Kit.** Kostenlos, kein Key, und das Audio verlässt den Rechner nicht:

```
npx hyperframes transcribe <datei> --model medium --language de
```

- **Nie ein Modell mit `.en` am Ende** (`small.en`, `medium.en`): Diese Modelle **übersetzen** deutsche Sprache ins Englische, statt sie zu transkribieren. Genau diese Modelle stehen aber in den Beispielen des Kits (Standard dort: `small.en`). Auch ein Transkript, das `hyperframes init --video` automatisch anlegt, erst prüfen: Ist es Englisch, obwohl Deutsch gesprochen wurde, neu transkribieren.
- **Modellwahl:** `medium` als Standard. `large-v3` (ca. 3 GB, deutlich langsamer), wenn das Transkript Fachbegriffe, Namen oder Zahlen falsch schreibt oder der Ton schlecht ist. Welches Modell bei den Aufnahmen des Nutzers reicht, speicherst du im Gedächtnis.
- **Prüfen, bevor du schneidest:** erste und letzte 3 Sätze gegen das Audio bzw. das Skript abgleichen. Unsinnswörter oder lange Lücken → größeres Modell. Whisper lässt Füllwörter („äh“, „ähm“) oft weg; beim Schnitt stichprobenartig anhören, ob sie hörbar stehen bleiben.
- Das Ergebnis ist eine JSON-Datei mit Wörtern und Zeitstempeln (`{ words: [{ text, start, end }] }`), die `cut-silences` und `cut-mistakes` direkt verarbeiten.
- **ElevenLabs Scribe** (Standard im Kit-Skill `edit-video` und in `video-use`) nur als Ausweichlösung, wenn Whisper trotz `large-v3` unbrauchbar ist, und nur für Aufnahmen, auf denen ausschließlich der Nutzer spricht. **Stimmen Dritter** (Kunden, Gäste, Testimonials) nur lokal oder mit abgeschlossenem AVV (`grundlagen/deutschland.md`, Abschnitt 5).

## Abschnitt 2: Beat-Plan vor dem Schnitt

Ein **Beat** ist ein sichtbares Ereignis zu einem bestimmten Wort: eingeblendete Karte, Grafik, Logo, Zoom, Vollbild-Tafel, Soundeffekt.

- **Regie-Notizen des Nutzers haben Vorrang.** Er kann Beats an Sätze hängen, z. B. „Bei ‚drei Fehler‘ die drei Punkte groß unten einblenden“ oder „Wo ich nach links zeige, kommt der Screenshot links rein“. Jede Notiz wird zu einem Beat am passenden Wort im Transkript. Ist eine Notiz nicht umsetzbar (Wort fehlt im Transkript, Material fehlt), im Output sagen, warum.
- **Ohne Notizen legst du den Plan selbst an.** Jeder Beat braucht einen Grund: etwas, das der Zuschauer behalten soll, ein Ablauf oder Vergleich, der ein Bild braucht, eine Zahl, ein Themenwechsel oder eine Stelle, an der das Bild zu lange gleich bleibt. Keine Grafik nur, weil gerade Platz ist.
- **Format der Liste**, zuerst schreiben, dann bauen:

```
[00:12,4] Wort: „drei Fehler“ | Beat: Karte unten, 3 Punkte | Grund: Gliederung merken | Quelle: Notiz / eigener Vorschlag
```

- Wie frei du darüber hinaus gestalten darfst (eigene Zooms, Übergänge, Zusatz-Beats), steht im Videostil (Abschnitt 4). Ohne Angabe: kleine Ergänzungen ja, keine zusätzlichen Aussagen, Zahlen oder Behauptungen, die der Nutzer nicht gesagt hat.
- Der Plan geht mit ins Output, damit der Nutzer beim nächsten Video gezielt korrigieren kann.

## Abschnitt 3: Welcher Kit-Skill wofür

Das Kit wird laufend erweitert. Vor jedem Videoauftrag im Kit-Ordner `git pull` ausführen und die `SKILL.md` des gewählten Skills lesen. Fehlt ein hier genannter Skill, den nächstliegenden nehmen und das im Output vermerken.

| Aufgabe | Skill |
|---|---|
| Reel, Short, kurze Anzeige aus eigener Aufnahme | `short-form-edit` |
| Langes Video aus eigener Aufnahme, kompletter Schnitt | `edit-video` (Transkription nach Abschnitt 1 statt ElevenLabs) |
| Pausen bzw. Versprecher entfernen | `cut-silences`, dann `cut-mistakes` |
| Grafik-Beats in langen Videos (Karten, Vollbild-Tafeln, Tempo-Abdeckung) | `hyperframes-video-beats` |
| Ein durchgehender Bildraum statt einzelner Grafiken (langes Video) | `video-storytelling` |
| Fertige Karten und Stilvorlagen | `style-library` |
| Video aus einer Website (Angebot, Produkt-Tour) | `website-to-hyperframes`, nur mit eigener Website des Nutzers |
| Kurzer Marken-Clip ohne Sprecher (10–30 s, auf Musik geschnitten) | `motion-showreel` |

**Falle im Kit:** `DESIGN.ais-example.md` und die Dateien `assets/AIS …` gehören zu Nates eigener Marke (AI Automation Society). Nie verwenden. Die Kit-Skills lesen vor jedem Projekt eine `DESIGN.md`: Diese Datei legst du pro Projekt aus `marke/design.md` (Farben, Schriften, Videostil) an.

## Abschnitt 4: Videostil aus einem Vorbild

Damit der Nutzer seine Wünsche nicht bei jedem Video wiederholt, steht sein Videostil in `marke/design.md`, Abschnitt **„Videostil“**. Er gilt für alle Videos. Fehlt der Abschnitt noch, schickst du ihn beim ersten Mal komplett zum Einfügen, mit diesen Zeilen: Tempo, Bewegung und Übergänge, Grafik-Karten (Stil aus `style-library` oder eigener), Untertitel (Schrift, Größe, Hervorhebung), Soundeffekte (keine / wenige / viele), Musik, Gestaltungsfreiheit (nur Beat-Plan / kleine Ergänzungen / frei), Vorbild-Videos, Nicht verwenden.

- **Leer und der Nutzer schickt ein Vorbild-Video** (auch aus einer anderen Branche): Vorbild ansehen (Einzelbilder alle 1–2 Sekunden, Transkript) und aufschreiben, **warum** es wirkt: Tempo (Wechsel pro Sekunde), Bewegung (Zooms, Kamerafahrten), Übergänge, Grafik-Karten, Schrift und Untertitel, Soundeffekte, Musik, wie viel Bild der Sprecher bekommt. Daraus einen fertigen Text für den Abschnitt „Videostil“ formulieren, in den Farben und Schriften des Nutzers (nicht des Vorbilds), und ihn schicken: „Zum Einfügen in `marke/design.md`, Abschnitt Videostil.“ Du änderst das Repo nicht selbst. Übernommen wird nur das Prinzip, nie Material, Logos oder Musik des Vorbilds.
- **Leer und kein Vorbild:** schlicht arbeiten (Markenfarben, ruhige Übergänge, gut lesbare Untertitel) und im Output einmal den Tipp geben, ein Vorbild zu schicken.
- **Nachschärfen:** Kritisiert der Nutzer etwas am Stil („zu hektisch“, „Untertitel zu klein“), speicherst du das als Regel. Taucht dieselbe Kritik ein zweites Mal auf, schlägst du eine Änderung am Abschnitt „Videostil“ vor (Format „Prozess-Vorschlag“ in `grundlagen/qualitaet-und-lernen.md`). So wird der Stil mit jedem Video genauer.

## Abschnitt 5: Material und Ton

Rechtliche Grundlage: `grundlagen/deutschland.md`, Abschnitt 7. Für den Schnitt heißt das:

- **Vorrang:** eigenes Material des Nutzers (Aufnahmen, eigene Screenshots, eigene Website, Bildschirmaufnahmen seiner Werkzeuge) vor Motion Graphics vor KI-generiertem Material.
- **Fremde Marken und Logos:** nur, wenn das Video sachlich über das Produkt spricht (z. B. „So nutze ich X“), klein und neben der Aussage, nie als Blickfang für das eigene Angebot und nie so, dass eine Partnerschaft oder Empfehlung entsteht. Im Zweifel den Namen als Text statt des Logos.
- **Fremde Screenshots, Produktfotos, Katalogbilder, Videos anderer:** nicht übernehmen. Ausnahme: echtes Zitat, über das im Video inhaltlich gesprochen wird, nur der nötige Ausschnitt, mit Quelle. Fremde Produkte oder echte Personen auch nicht als Vorlage für KI-Bilder oder KI-Videos nutzen.
- **Bildschirmaufnahmen:** keine personenbezogenen Daten Dritter im Bild (Kundennamen, E-Mails, Chats). Demo-Daten nutzen oder unkenntlich machen.
- **Soundeffekte:** sparsam und an Beats gebunden (Karte erscheint, Wechsel, Zahl), nicht als Dauergeräusch; die Stimme bleibt immer klar verständlich. Wie viel, steht im Videostil. Ohne Angabe: wenige, leise.
- **Musik und Soundeffekte nur mit Lizenz für kommerzielle Nutzung.** Quelle und Lizenz je Datei im Projektordner notieren (`assets/audio/QUELLEN.md`). Das Kit bringt keine Musik oder Effekte mit. Kostenpflichtige Generierung (z. B. ElevenLabs Sound Effects, KI-Musik) nur nach Freigabe laut `marke/regeln.md` und nur, wenn die Nutzungsbedingungen des Anbieters die kommerzielle Nutzung im gewählten Tarif erlauben. Unklar → nicht verwenden.
- Bei Reels gilt weiter: Trend-Audio fügt der Nutzer in der Instagram-App hinzu.

## Abschnitt 6: Selbst prüfen, bevor der Nutzer es sieht

Der Nutzer soll nie die erste Fassung bekommen, sondern die, die du schon geprüft und verbessert hast.

1. Entwurf rendern (`--quality draft`).
2. **Ansehen:** Einzelbilder an jedem Beat aus Abschnitt 2, an jedem Schnitt, bei 0 s und am Ende. Sitzt der Beat am richtigen Wort? Verdeckt etwas das Gesicht oder die Untertitel? Ist Text auf einer unruhigen Fläche ohne Hintergrund-Karte schwer lesbar?
3. **Anhören über Transkript:** den Ton des Entwurfs erneut transkribieren (Abschnitt 1) und mit dem Transkript vor dem Schnitt vergleichen. Fehlt ein Satzteil, steht ein Wort doppelt, hat der Schnitt den Sinn verändert?
4. Beheben, neu rendern, erneut prüfen. Höchstens 3 Runden; was danach offen ist, steht im Output.
5. Erst dann final rendern und den Quality Check des Prozesses durchführen.
