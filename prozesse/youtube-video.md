---
titel: YouTube-Video
kategorie: Video & Audio
icon: play
beschreibung: Vollständige Produktion eines YouTube-Videos: Titel und Thumbnail zuerst, Skript, Schnitt, Beschreibung, Kapitel, Shorts.
status: fertig
version: 1
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
- **Produktionsweg:** Nutzer nimmt selbst auf (Pfad A) oder Video ohne Gesicht mit KI-Stimme, Bildschirmaufnahmen und Grafiken (Pfad B).
- **Eigenes Material:** Beispiele, Kundenfälle, Bildschirmaufnahmen, Meinung. Ohne eigenes Material wird das Video austauschbar.
- **Kanal:** Zugang zum YouTube-Studio (für Entwurf-Upload) oder Lieferung als Dateien.
- Aus dem Repo, immer lesen: alle Dateien in `marke/`
- Aus deinem Gedächtnis: gespeicherte Regeln, bisherige Videos mit CTR, AVD, AVP.

## Werkzeuge

- HyperFrames-Kit: `edit-video` (lange Videos), `short-form-edit` (Shorts), Motion Graphics, Untertitel
- `video-use` (Schnitt von Aufnahmen), ElevenLabs (Stimme, Pfad B), Higgsfield (B-Roll, sparsam)
- Playwright + Chromium (Thumbnails als HTML/CSS → PNG)
- Einrichtung und Keys: `grundlagen/einrichtung.md`. Fehlende kostenlose Werkzeuge selbst installieren.

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Thema prüfen.** Auf YouTube nach dem Thema suchen:
   - Gibt es **Ausreißer**, also Videos mit deutlich mehr Aufrufen, als der Kanal Abonnenten hat? Das zeigt echtes Interesse am Thema, nicht nur an einem großen Kanal.
   - Was versprechen die erfolgreichen Titel? Was fehlt in den Videos (Kommentare lesen: offene Fragen, Kritik)?
   - Wie lang sind die erfolgreichen Videos zum Thema?
   Ergebnis: ein Winkel, der sich von den vorhandenen Videos unterscheidet.
3. **Verpackung zuerst: 3 Titel + 3 Thumbnail-Konzepte.**
   - **Titel:** konkretes Versprechen oder spannende Frage, das Hauptwort der Suche vorne, möglichst unter ca. 60 Zeichen (längere werden oft abgeschnitten; per Skript zählen). Der Titel muss vom Video **vollständig eingelöst** werden.
   - **Thumbnail:** 1280×720. Ein klarer Blickfang, starker Kontrast, **max. 3–4 Wörter**, die den Titel **ergänzen** statt wiederholen. Muss in Handy-Größe (ca. 160 px breit) verständlich sein. Bei Pfad A: echtes Foto des Nutzers mit passender Mimik. **Kein KI-Gesicht, das als der Nutzer oder als echte Person auftritt.**
   - Die drei Varianten unterscheiden sich im **Ansatz** (z. B. Ergebnis / Fehler / Neugier), nicht nur in Farben.
4. **Skript bzw. Ablauf.**
   - **Einstieg (erste 30–60 Sek.):** Das Versprechen aus Titel und Thumbnail sofort bestätigen, zeigen, was der Zuschauer am Ende hat, ggf. einen Ausblick auf das stärkste Ergebnis. **Kein langes Intro, kein Logo-Vorspann, keine Begrüßungsrunde.**
   - **Hauptteil:** in Kapitel gegliedert. Jedes Kapitel liefert ein eigenes Zwischenergebnis und öffnet die Frage fürs nächste. Keine Passage ohne neuen Gedanken. Eigenes Material (Schritt 1) sichtbar einbauen.
   - **Ende:** Das Versprechen wird eingelöst, dann ein kurzer Hinweis auf **ein** weiterführendes Video oder das Angebot. Danach zügig enden, nicht ausklingen lassen.
   - Pfad A: Stichpunkt-Skript (freies Sprechen wirkt natürlicher), Einstieg und Übergänge wörtlich. Pfad B: vollständiges Sprechskript (ca. 130–150 Wörter pro Minute).
   - Länge: so lang, wie der Inhalt trägt. Orientierung an den erfolgreichen Videos zum Thema (Schritt 2).
5. **Produktion.**
   - **Pfad A (Nutzer nimmt auf):** Skript und Aufnahmetipps schicken (ruhiger Raum, Licht von vorne, Ansteckmikrofon, Kamera auf Augenhöhe, 16:9). Danach schneiden mit `edit-video` bzw. `video-use`: Pausen und Versprecher raus, Bildschirmaufnahmen und Grafiken einbauen.
   - **Pfad B (ohne Gesicht):** Stimme mit ElevenLabs, Wort-Zeitstempel. Bildschirmaufnahmen, animierte Grafiken und Texte in HyperFrames; B-Roll über Higgsfield nur wo nötig (Budget aus `marke/regeln.md`).
   - Alle 16:9, 1920×1080 oder höher. Untertitel aus dem Skript/Transkript.
   - Entwurf rendern, Einzelbilder am Anfang, an jedem Kapitelwechsel und am Ende prüfen, dann final rendern.
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
    - [ ] Thumbnails auf 160 px Breite verständlich, max. 3–4 Wörter, ergänzen den Titel.
    - [ ] Jedes Kapitel bringt einen neuen Gedanken; keine Längen ohne Inhalt.
    - [ ] Eigenes Material ist eingebaut (Stellen nennen).
    - [ ] Kapitel ab 0:00, mindestens 3, je ≥ 10 Sek.; Beschreibung mit Kernaussage in den ersten 2 Sätzen.
    - [ ] Untertitel korrekt und synchron; Ton sauber.
    - [ ] 3–5 Shorts mit eigenem Hook, verknüpft mit dem Video.
    - [ ] Keine KI-Person, die als echter Mensch auftritt; Kennzeichnung korrekt gesetzt bzw. vermerkt.
    - [ ] Als privat/Entwurf hochgeladen oder als Dateien geliefert, **nicht veröffentlicht**.
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
11. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Nach ca. 7 Tagen (bzw. Ende des Tests) CTR, AVD, AVP und den Gewinner aus „Test & Compare“ auswerten, falls Zugriff besteht. Die **Stelle im Zuschauerbindungs-Diagramm** mit dem größten Abfall benennen und als Regel speichern (z. B. „Einstieg zu lang“, „Kapitel 3 zu theoretisch“).

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
Test & Compare: <vorbereitet / manuell einrichten>
Kennzeichnung synthetischer Inhalte: <ja/nein, warum>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
