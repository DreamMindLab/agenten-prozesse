---
titel: Podcast-Episode
kategorie: Video & Audio
icon: mic
beschreibung: Sprechfertige Episode: Skript oder Interview-Leitfaden, Vertonung (eigene Stimme oder Stimmklon), Shownotes, Clips.
status: fertig
version: 2
reihenfolge: 51
stichworte: Podcast, Podcast-Folge, Episode, Audio, Vertonung, Stimmklon, Interview, Shownotes, Video-Podcast
---

## Ziel

Eine fertige Podcast-Episode mit allem, was zur Veröffentlichung gehört: Skript bzw. Leitfaden, Audio (und wenn möglich Video), Titel, Shownotes, Kapitel und Clips für Social Media.

Was die Daten sagen:
- **Spotify zuerst, YouTube als Video dazu.** In Deutschland hören 34 % der Bevölkerung mindestens wöchentlich Podcasts (ARD/ZDF-Medienstudie 2025). Bei der regelmäßigen Nutzung führt **Spotify** mit rund 50 %; **YouTube** ist die meistgenutzte Audioplattform, wenn man gelegentliche Nutzung mitzählt (ARD/ZDF-Medienstudie 2025; Bitkom: Reichweite Spotify 50 %, YouTube 29 %, Apple Podcasts 13 %). Deshalb: Audio über RSS für Spotify und Apple, und jede Episode, wenn möglich, auch als Video auf YouTube.
- **Länge:** Über die Hälfte der Podcasts liegt zwischen 20 und 60 Minuten, der Durchschnitt bei rund 38 Minuten (Buzzsprout). Eine „richtige“ Länge gibt es nicht. Die Episode ist so lang, wie der Inhalt trägt.
- **Wachstum braucht Zeit und Regelmäßigkeit.** Praktiker berichten, dass sich Wachstum meist erst nach 3–6 Monaten regelmäßiger (idealerweise wöchentlicher) Folgen zeigt. Gastauftritte in anderen Podcasts mit passender Zielgruppe gelten als einer der wirksamsten Hebel.
- **KI-Stimmen und Vertrauen.** Podcasts leben von der persönlichen Bindung an die Stimme. Hörer erkennen KI-Stimmen oft nicht zuverlässig, reagieren aber gemischt bis ablehnend, wenn sie es herausfinden. Deshalb: offen kennzeichnen statt verstecken.

## Benötigte Inputs

- **Thema** und **Ziel** der Episode (Vertrauen aufbauen, Angebot vorstellen, Gast-Expertise).
- **Format:** Solo (Nutzer allein) oder Interview (mit Gast).
- **Vertonung** (bei Solo):
  - **A: Nutzer spricht selbst** (Skript als Stichpunkte oder wörtlich)
  - **B: Stimmklon des Nutzers** (ElevenLabs). Nur mit **ausdrücklicher Zustimmung des Nutzers**, und nur seine eigene Stimme. Einmalige Einrichtung nötig (Schritt 2).
  - Stimmen **anderer Personen** (Gäste, Prominente) werden **nie** geklont.
- **Interview:** Name und Hintergrund des Gastes, Aufnahme (Datei) nach dem Gespräch.
- **Veröffentlichung:** Podcast-Hoster (RSS, z. B. für Spotify/Apple) und YouTube-Kanal, falls vorhanden (aus `marke/regeln.md`).
- Aus dem Repo, immer lesen: alle Dateien in `marke/`, `grundlagen/video-schnitt.md`
- Aus deinem Gedächtnis: gespeicherte Regeln, bisherige Episoden (Themen, Gäste, Zahlen).
- **Optional, nur wenn der Nutzer es anspricht** (z. B. „interview mich dazu“, „nur Gliederung, ich schreibe selbst“): erst Interview und Gliederung nach `grundlagen/langform-interview.md` (nur Solo-Episoden), dann an der dort genannten Stelle weiter. Nicht von dir aus anbieten; ohne diesen Wunsch läuft der Prozess wie unten beschrieben.

## Werkzeuge

- ElevenLabs (Stimmklon, Vertonung)
- Transkription lokal mit Whisper über das HyperFrames-Kit (`grundlagen/video-schnitt.md`, Abschnitt 1), bei Gästen immer lokal
- HyperFrames-Kit (Schnitt mit `cut-silences`/`cut-mistakes`, Video-Version mit Grafiken/Untertiteln, Clips mit `short-form-edit`); `video-use` nur als Ausweichlösung
- ffmpeg (Audio-Pegel, Formate)
- Einrichtung und Keys: `grundlagen/einrichtung.md`. Fehlende kostenlose Werkzeuge selbst installieren.

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Nur bei Stimmklon, einmalig: Einrichtung.** Nutzer um ausdrückliche Zustimmung bitten und die Zustimmung in deinem Gedächtnis vermerken. Für einen hochwertigen Klon braucht ElevenLabs („Professional Voice Clone“) laut Doku eine längere, saubere Sprachaufnahme (mind. ca. 1 Stunde empfohlen, bis zu 3 Stunden). Dem Nutzer eine Aufnahme-Anleitung schicken (ruhiger Raum, gleiches Mikrofon, natürlich sprechen, verschiedene Satzarten). Der Klon wird nur für die Inhalte des Nutzers verwendet.
3. **Thema schärfen.** „Nach dieser Episode weiß/kann der Hörer ___.“ Dazu: Welche Frage der Zielgruppe beantwortet die Folge (gespeicherte Kundensprache, häufige Kundenfragen)? Kein Thema aus den letzten Episoden wiederholen.
4. **Titel.** Konkret und mit Nutzen, in Worten der Zielgruppe, der Name des Gastes nur vorne, wenn er bekannt ist. Max. ca. 60 Zeichen (per Skript zählen). 3 Varianten.
5. **Skript bzw. Leitfaden.**
   - **Solo:**
     1. **Einstieg (erste 30–60 Sek.):** worum es geht, was der Hörer am Ende hat, warum es ihn betrifft. Kein langes Intro, kein Vorgeplänkel.
     2. **Hauptteil:** 3–5 Abschnitte, jeder mit einer Kernaussage und einem **konkreten Beispiel** (eigener Fall, Kundenfall, Zahl). Übergänge, die neugierig auf den nächsten Abschnitt machen.
     3. **Zusammenfassung** der wichtigsten Punkte.
     4. **Ein CTA** (Angebot, Lead-Magnet, Newsletter, Bewertung).
     Bei Vertonung A: Einstieg und Übergänge wörtlich, Rest als Stichpunkte. Bei B: vollständig ausformuliert, **für das Ohr geschrieben** (kurze Sätze, keine Klammern, Zahlen ausgeschrieben, wie man spricht).
   - **Interview:** Recherche zum Gast (bisherige Auftritte, damit nicht dieselben Fragen kommen). Leitfaden: Einstieg mit der spannendsten Geschichte des Gastes statt Lebenslauf, dann 8–12 offene Fragen mit Nachfragen nach **konkreten Beispielen** („Wie genau …?“, „Was ist dann passiert?“), zum Schluss: Was sollen die Hörer als Erstes tun? Wo findet man den Gast?
6. **Vertonung bzw. Aufnahme.**
   - **Einwilligung:** Den Gast vor der Aufnahme um Einwilligung in Aufnahme, Transkription und Veröffentlichung bitten und das dokumentieren (§ 201 StGB, DSGVO; `grundlagen/deutschland.md`, Abschnitt 5). Gesponserte Teile als „Werbung“ ansagen und in den Shownotes kennzeichnen (Abschnitt 4).
   - **A / Interview:** Aufnahmetipps an den Nutzer (ruhiger Raum, Mikrofon nah, möglichst Video mitaufnehmen, bei Remote-Interviews jede Seite einzeln aufnehmen lassen). Danach lokal transkribieren (`grundlagen/video-schnitt.md`, Abschnitt 1; Stimme des Gastes nie ohne AVV an einen Cloud-Dienst) und schneiden (`cut-silences`, `cut-mistakes`): Versprecher, lange Pausen, Störungen raus; **Aussagen des Gastes nicht sinnentstellend kürzen**.
   - **B (Stimmklon):** Skript mit dem Klon des Nutzers vertonen, abschnittsweise. Jeden Abschnitt anhören bzw. transkribieren und mit dem Skript abgleichen (falsche Betonung, verschluckte Wörter → neu erzeugen).
   - **Ton:** gleichmäßige Lautstärke (Richtwert ca. −16 LUFS für Podcasts), keine Übersteuerung, kurze Intro-/Outro-Musik nur lizenzfrei.
7. **Video-Version** (wenn möglich). Bei Aufnahme mit Kamera: Video schneiden. Ohne Kamera: HyperFrames-Video mit Titel, Kapitelanzeigen, Kernaussagen als Text und Untertiteln (16:9). Ein Standbild für die ganze Folge funktioniert auf YouTube schlecht. Grafiken, Stil und Prüfung nach `grundlagen/video-schnitt.md`, Abschnitte 2–6.
8. **Shownotes und Kapitel.**
   - **Shownotes:** 2–3 Sätze, worum es geht und was man mitnimmt (die ersten Zeilen werden in den Apps angezeigt). Danach Stichpunkte der Themen, erwähnte Links und Quellen, Links zum Gast, CTA.
   - **Kapitel** mit Zeitmarken (für Podcast-Apps und YouTube; YouTube: erste Marke 0:00, mind. 3 Kapitel, je ≥ 10 Sek.).
   - **Transkript** (aus der Transkription), bereinigt: gut für Barrierefreiheit und als Grundlage für einen Blogartikel (`prozesse/seo-blogartikel.md`).
9. **Clips ableiten.** 3–5 kurze Clips (9:16, 30–60 Sek.) mit den stärksten Aussagen, jeweils mit eigenem Hook und Untertiteln (`short-form-edit`), für Reels/Shorts/LinkedIn.
10. **Kennzeichnung.** Bei Vertonung B wird eine **realistische KI-Stimme einer echten Person** verwendet. Das wird gekennzeichnet: kurzer Hinweis am Anfang der Episode oder in den ersten Zeilen der Shownotes („Diese Folge wurde mit einer KI-Version meiner Stimme vertont“), auf YouTube zusätzlich der Schalter „Veränderte oder synthetische Inhalte“ (EU AI Act Art. 50, YouTube-Richtlinie).
11. **Upload vorbereiten.** Beim Podcast-Hoster und auf YouTube als **Entwurf/privat** anlegen (Audio, Titel A, Shownotes, Kapitel, Cover). **Nicht veröffentlichen.** Ohne Zugang: alles als Dateien liefern.
12. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Geprüft wird die **fertige Audio-/Videodatei**:
    - [ ] Die ersten 30–60 Sek. sagen klar, worum es geht und was der Hörer mitnimmt; kein langes Intro.
    - [ ] Jeder Abschnitt hat eine Kernaussage und ein konkretes Beispiel.
    - [ ] Der Satz aus Schritt 3 ist nach dem Hören erfüllt; ein CTA.
    - [ ] Stimmklon nur mit dokumentierter Zustimmung und nur die Stimme des Nutzers; keine anderen Stimmen geklont.
    - [ ] Vertonung B: Audio mit Skript abgeglichen, keine falschen Wörter oder Betonungsfehler; Kennzeichnung vorhanden.
    - [ ] Interview: Aussagen des Gastes im Sinn unverändert; Aufnahme lokal auf Deutsch transkribiert (kein `.en`-Modell) bzw. AVV liegt vor.
    - [ ] Ton gleichmäßig (ca. −16 LUFS), keine Übersteuerung, Musik lizenzfrei.
    - [ ] Titel ≤ ca. 60 Zeichen (per Skript gezählt); Shownotes mit Kernaussage in den ersten Zeilen; Kapitel korrekt.
    - [ ] Video-Version vorhanden (oder begründet, warum nicht); 3–5 Clips mit eigenem Hook.
    - [ ] Als Entwurf/privat angelegt oder als Dateien geliefert, **nicht veröffentlicht**.
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
13. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Thema und Gast im Gedächtnis speichern. Liefert der Nutzer Zahlen (Downloads nach 7/30 Tagen, Durchhörrate, YouTube-Bindung), auswerten, welche Themen und Formate (Solo/Interview) am besten laufen, und als Regel speichern.

## Output-Format

Per Telegram an den Nutzer:

```
🎙 Podcast: <Titel A>
Format: <Solo / Interview mit …> | Vertonung: <eigene Stimme / Stimmklon> | Länge: <Min>

Titel: A <…> / B <…> / C <…>
Audio: <MP3 im Anhang> | Video: <MP4 / Link privat>
Clips: <Anzahl, Dateien>

Shownotes:
<Text inkl. Kapitel>

Transkript: <Datei im Anhang>
Kennzeichnung KI-Stimme: <ja/nein>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
