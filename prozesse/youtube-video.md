---
titel: YouTube-Video
kategorie: Video & Audio
icon: play
beschreibung: Vollständige Produktion eines YouTube-Videos: Titel und Thumbnail zuerst, Skript, Schnitt, Beschreibung, Kapitel, Shorts.
status: fertig
version: 4
reihenfolge: 50
stichworte: YouTube, YouTube-Video, Thumbnail, Video-Skript, Long-Form, YouTube-Titel, Kapitel, Tutorial-Video
---

## Ziel

Ein fertiges YouTube-Video mit allem, was zum Upload gehört: Titel- und Thumbnail-Varianten zum Testen, Skript, geschnittenes Video, Beschreibung, Kapitel, Untertitel und 3–5 Shorts daraus.

Worauf es ankommt:
- **Verpackung zuerst.** Im internen Produktionsleitfaden von MrBeast (2024 öffentlich geworden) beginnt jedes Video mit **Titel und Thumbnail**, weil sie die Erwartung setzen. Alles danach muss diese Erwartung erfüllen, sonst klicken Zuschauer weg und die durchschnittliche Wiedergabedauer sinkt. Die drei Kennzahlen dort: Klickrate (CTR), durchschnittliche Wiedergabedauer (AVD) und angesehener Anteil (AVP).
- **Die erste Minute entscheidet.** Sie muss das Versprechen aus Titel und Thumbnail sofort bestätigen.
- **YouTube testet selbst.** Mit „Test & Compare“ lassen sich bis zu **3 Titel, Thumbnails oder Kombinationen** testen; YouTube wählt nach **Wiedergabezeit**, nicht nach Klicks (seit Dez. 2025 auch für Titel).
- **Tags spielen laut YouTube nur eine minimale Rolle** (nützlich bei häufigen Falschschreibungen). Titel, Thumbnail und Beschreibung zählen.

## Benötigte Inputs

- **Thema** (oder Suchbegriff) und **Ziel** des Videos (Reichweite, Vertrauen, Anfragen; siehe `prozesse/video-marketing.md`).
- **Produktionsweg:** Nutzer nimmt selbst auf (Pfad A) oder Video ohne Gesicht mit KI-Stimme, Bildschirmaufnahmen und Grafiken (Pfad B). Bei Pfad A gibt es zwei Fälle: **Skript zuerst** oder **fertige Aufnahme** (siehe Schritt 1).
- **Eigenes Material:** Beispiele, Kundenfälle, Bildschirmaufnahmen, Meinung. Ohne eigenes Material wird das Video austauschbar.
- **Kanal:** Zugang zum YouTube-Studio (für Entwurf-Upload) oder Lieferung als Dateien.
- **Regie-Notizen (optional):** was an welcher Stelle erscheinen soll (`grundlagen/video-schnitt.md`, Abschnitt 2).
- Aus dem Repo, immer lesen: alle Dateien in `marke/`, `grundlagen/themen-und-verstaendlichkeit.md`, `grundlagen/video-schnitt.md`
- Aus deinem Gedächtnis: gespeicherte Regeln, bisherige Videos mit CTR, AVD, AVP.
- **Optional, nur wenn der Nutzer es anspricht** (z. B. „interview mich dazu“, „nur Gliederung, ich schreibe selbst“): erst Interview und Gliederung nach `grundlagen/langform-interview.md`, dann an der dort genannten Stelle weiter. Nicht von dir aus anbieten; ohne diesen Wunsch läuft der Prozess wie unten beschrieben.

## Werkzeuge

- HyperFrames-Kit: `edit-video` (lange Videos), `hyperframes-video-beats` und `video-storytelling` (Grafik-Beats), `short-form-edit` (Shorts), Untertitel; Zuordnung in `grundlagen/video-schnitt.md`, Abschnitt 3
- Lokale Transkription mit Whisper (Pfad A, `grundlagen/video-schnitt.md`, Abschnitt 1); `video-use` nur als Ausweichlösung
- ElevenLabs (Stimme, Pfad B), Higgsfield (B-Roll, sparsam)
- Playwright + Chromium (Thumbnails als HTML/CSS → PNG)
- Einrichtung und Keys: `grundlagen/einrichtung.md`. Fehlende kostenlose Werkzeuge selbst installieren.

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
   - **Pfad A mit fertiger Aufnahme** (der Nutzer schickt ein Video, das ohne dein Skript entstanden ist): Die Aufnahme gibt Thema und Inhalt vor. Zuerst lokal transkribieren (`grundlagen/video-schnitt.md`, Abschnitt 1), dann:
     - **Schritt 2** nur als Abgleich: Wie heißen erfolgreiche Videos zum selben Thema, wie lang sind sie? Der Winkel ergibt sich aus dem, was der Nutzer sagt.
     - **Schritt 3:** Titel und Thumbnails versprechen nur, was die Aufnahme tatsächlich einlöst (Timecode der Einlösung).
     - **Schritt 4** statt Skript: **Kapitelgliederung und Schnittliste** aus dem Transkript. Prüfen, ob die ersten 30–60 Sekunden das Versprechen bestätigen. Wenn nicht: die stärkste Stelle als kurzen Ausblick nach vorn ziehen oder dem Nutzer einen Einstieg zum Nachaufnehmen vorschlagen (1–3 Sätze). Passagen ohne neuen Gedanken zum Kürzen markieren; der Sinn jeder Aussage bleibt gleich. Verständlichkeits-Check auf die Schnittliste anwenden: unerklärte Fachbegriffe per Einblendung erklären.
     - Danach weiter mit Schritt 5 (Pfad A, ab dem Schnitt; das Transkript liegt schon vor).
2. **Thema prüfen.** Auf YouTube nach dem Thema suchen:
   - Gibt es **Ausreißer**, also Videos mit deutlich mehr Aufrufen, als der Kanal Abonnenten hat? Das zeigt echtes Interesse am Thema, nicht nur an einem großen Kanal.
   - Was versprechen die erfolgreichen Titel? Was fehlt in den Videos (Kommentare lesen: offene Fragen, Kritik)?
   - Wie lang sind die erfolgreichen Videos zum Thema?
   Ergebnis: ein Winkel, der sich von den vorhandenen Videos unterscheidet, und das Framing nach Baustein 3 aus `grundlagen/themen-und-verstaendlichkeit.md` (was ändert sich für den Zuschauer?). Kam das Thema nicht vom Nutzer: ihm Thema, Beleg (Ausreißer) und Winkel zur Bestätigung schicken (Baustein 1), bevor du weitermachst.
3. **Verpackung zuerst: 3 Titel + 3 Thumbnail-Konzepte.**
   - **Titel:** konkretes Versprechen oder spannende Frage, das Hauptwort der Suche vorne, möglichst unter ca. 60 Zeichen (längere werden oft abgeschnitten; per Skript zählen). Der Titel muss vom Video **vollständig eingelöst** werden.
   - **Thumbnail:** 1280×720. Ein klarer Blickfang, starker Kontrast, **max. 3–4 Wörter bzw. ca. 25 Zeichen**, die den Titel **ergänzen** statt wiederholen. Muss in Handy-Größe (ca. 160 px breit) verständlich sein. Bei Pfad A: echtes Foto des Nutzers mit passender Mimik. **Kein KI-Gesicht, das als der Nutzer oder als echte Person auftritt.**
   - Die drei Varianten unterscheiden sich im **Ansatz** (z. B. Ergebnis / Fehler / Neugier), nicht nur in Farben.
4. **Skript bzw. Ablauf.**
   - **Einstieg (erste 30–60 Sek.):** Das Versprechen aus Titel und Thumbnail sofort bestätigen, zeigen, was der Zuschauer am Ende hat, ggf. einen Ausblick auf das stärkste Ergebnis. **Kein langes Intro, kein Logo-Vorspann, keine Begrüßungsrunde.**
   - **Hauptteil:** in Kapitel gegliedert. Jedes Kapitel liefert ein eigenes Zwischenergebnis und öffnet die Frage fürs nächste. Keine Passage ohne neuen Gedanken. Eigenes Material (Schritt 1) sichtbar einbauen.
   - **Ende:** Das Versprechen wird eingelöst, dann ein kurzer Hinweis auf **ein** weiterführendes Video oder das Angebot. Danach zügig enden, nicht ausklingen lassen.
   - Pfad A: Stichpunkt-Skript (freies Sprechen wirkt natürlicher), Einstieg und Übergänge wörtlich. Pfad B: vollständiges Sprechskript (Startwert 120–140 Wörter pro Minute bzw. gemessenes Tempo, `grundlagen/deutschland.md`, Abschnitt 1).
   - Länge: so lang, wie der Inhalt trägt. Orientierung an den erfolgreichen Videos zum Thema (Schritt 2).
   - **Verständlichkeits-Check** nach Baustein 4 (Langformat), bevor das Skript an den Nutzer geht bzw. vertont wird: Persona-Test, Fachbegriffe beim ersten Auftreten erklärt, jeder abstrakte Punkt mit Beispiel.
5. **Produktion.**
   - **Pfad A (Nutzer nimmt auf):** Skript und Aufnahmetipps schicken (ruhiger Raum, Licht von vorne, Ansteckmikrofon, Kamera auf Augenhöhe, 16:9). Danach lokal transkribieren (`grundlagen/video-schnitt.md`, Abschnitt 1) und schneiden mit `edit-video`: Pausen und Versprecher raus, Bildschirmaufnahmen und Grafiken einbauen.
   - **Pfad B (ohne Gesicht):** Stimme mit ElevenLabs, Wort-Zeitstempel. Bildschirmaufnahmen, animierte Grafiken und Texte in HyperFrames; B-Roll über Higgsfield nur wo nötig (Budget aus `marke/regeln.md`).
   - **Beat-Plan** vor dem Einbau der Grafiken (`grundlagen/video-schnitt.md`, Abschnitt 2; Regie-Notizen des Nutzers haben Vorrang), Stil nach Abschnitt 4, Material und Ton nach Abschnitt 5.
   - Alle 16:9, 1920×1080 oder höher. Untertitel aus dem Skript/Transkript.
   - Entwurf rendern und selbst prüfen nach `grundlagen/video-schnitt.md`, Abschnitt 6 (Einzelbilder am Anfang, an jedem Kapitelwechsel, an Beats und am Ende; max. 3 Runden), dann final rendern.
6. **Thumbnails bauen.** Die 3 Konzepte als HTML/CSS → PNG (1280×720), Foto/Screenshot einsetzen. Auf ca. 160 px verkleinert prüfen: lesbar, eindeutig?
7. **Beschreibung, Kapitel, Untertitel.**
   - **Beschreibung:** Die ersten 1–2 Sätze sind im Suchergebnis sichtbar: worum es geht und was man mitnimmt, mit dem Hauptbegriff. Danach kurze Zusammenfassung, Links (Angebot, Lead-Magnet, erwähnte Quellen), ggf. Hinweis auf bezahlte Partnerschaften.
   - **Kapitel:** Zeitmarken in der Beschreibung, **erste Marke 0:00**, mindestens **3 Kapitel**, jedes mindestens **10 Sekunden** lang (sonst zeigt YouTube keine Kapitel). Kapitelnamen als klare Aussagen.
   - **Untertitel:** als SRT-Datei aus dem Skript/Transkript, korrekt geschrieben (besser als die automatischen).
   - **Tags:** nur wenige, v. a. häufige Falschschreibungen des Hauptbegriffs.
   - Endbildschirm (ein Video + Abo), passende Playlist.
8. **Shorts ableiten.** 3–5 Shorts (9:16, unter 60 Sek.) mit den stärksten Momenten, jeweils mit eigenem Hook in den ersten Sekunden (`short-form-edit`, Regeln wie in `prozesse/reel-kurzvideo.md`). Das lange Video als verknüpftes Video angeben.
9. **Upload vorbereiten.** Mit Studio-Zugang: als **privates** Video bzw. Entwurf hochladen, Titel A, Thumbnail A, Beschreibung, Kapitel, Untertitel, Endbildschirm eintragen. „Test & Compare“ mit den 3 Varianten vorbereiten. **Nicht veröffentlichen.** Ohne Zugang: alles als Dateien liefern.
   - **Kennzeichnung:** Den Schalter „Veränderte oder synthetische Inhalte“ aktivieren, wenn realistische KI-Szenen oder eine **geklonte Stimme einer echten Person** (auch des Nutzers) vorkommen. Eine allgemeine KI-Sprecherstimme als Produktionshilfe fällt laut YouTube nicht darunter.
10. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Geprüft wird das **fertige Video** mit Verpackung:
    - [ ] Der Einstieg (erste 30–60 Sek.) bestätigt das Versprechen aus Titel und Thumbnail; kein Intro, kein Logo-Vorspann.
    - [ ] Jede Titelvariante wird vom Video vollständig eingelöst (Timecode der Einlösung).
    - [ ] 3 Titel und 3 Thumbnails mit unterschiedlichem Ansatz; Titel ≤ ca. 60 Zeichen (per Skript gezählt).
    - [ ] Thumbnails auf 160 px Breite verständlich, max. ca. 25 Zeichen, ergänzen den Titel.
    - [ ] Jedes Kapitel bringt einen neuen Gedanken; keine Längen ohne Inhalt.
    - [ ] Verständlichkeits-Check (Schritt 4) ohne offenen Befund; kein unerklärter Fachbegriff.
    - [ ] Thema vom Nutzer gewählt oder bestätigt; Framing aus Zuschauersicht im Einstieg erkennbar (Timecode).
    - [ ] Eigenes Material ist eingebaut (Stellen nennen).
    - [ ] Kapitel ab 0:00, mindestens 3, je ≥ 10 Sek.; Beschreibung mit Kernaussage in den ersten 2 Sätzen.
    - [ ] Untertitel korrekt und synchron; Ton sauber.
    - [ ] Regie-Notizen umgesetzt oder im Output begründet; Pfad A: Transkript auf Deutsch (lokal, kein `.en`-Modell).
    - [ ] Keine fremden Logos, Fotos oder Clips als Blickfang; fremde Screenshots nur als Zitat mit Quelle; Musik und Soundeffekte mit dokumentierter Lizenz (`grundlagen/deutschland.md`, Abschnitt 7).
    - [ ] 3–5 Shorts mit eigenem Hook, verknüpft mit dem Video.
    - [ ] Keine KI-Person, die als echter Mensch auftritt; Kennzeichnung korrekt gesetzt bzw. vermerkt.
    - [ ] Als privat/Entwurf hochgeladen oder als Dateien geliefert, **nicht veröffentlicht**.
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
11. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Nach ca. 7 Tagen (bzw. Ende des Tests) CTR, AVD, AVP und den Gewinner aus „Test & Compare“ auswerten, falls Zugriff besteht. Die **Stelle im Zuschauerbindungs-Diagramm** mit dem größten Abfall benennen und als Regel speichern (z. B. „Einstieg zu lang“, „Kapitel 3 zu theoretisch“). Liegt die CTR unter ca. 5 % und unter dem eigenen Schnitt: Titel und Thumbnail überarbeiten, nicht das Video (`grundlagen/themen-und-verstaendlichkeit.md`, Baustein 5). Shorts wie Reels auswerten (Weiterwisch-Rate, Wiedergabe).

## Output-Format

Per Telegram an den Nutzer:

```
▶️ YouTube: <Titel A>
Länge: <Min:Sek> | Pfad: <A Aufnahme / B ohne Gesicht> | Kosten KI: <$>

Titel: A <…> (<Z>) / B <…> (<Z>) / C <…> (<Z>)
Thumbnails: <3 PNGs im Anhang>
Video: <Datei oder Link zum privaten Upload>
Shorts: <Anzahl, Dateien>

Beschreibung:
<Text inkl. Kapitel>

Untertitel: <SRT im Anhang>
Beat-Plan: <Datei im Anhang; nicht umgesetzte Regie-Notizen mit Grund>
Musik/Soundeffekte: <keine / Quelle + Lizenz>
Test & Compare: <vorbereitet / manuell einrichten>
Kennzeichnung synthetischer Inhalte: <ja/nein, warum>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
