---
titel: Newsletter
kategorie: Text & Copy
icon: mail
beschreibung: Einzelne E-Mail an die Liste: eine Idee, 3 Betreffzeilen, Preheader, ein klarer CTA.
status: fertig
version: 1
reihenfolge: 20
stichworte: Newsletter, einzelne E-Mail, Mailing, Rundmail, wöchentliche Mail, E-Mail an die Liste
---

## Ziel

Eine versandfertige Mail an die bestehende Liste, die **eine** nützliche Idee vermittelt und zu **einer** Handlung führt (klicken, antworten oder kaufen).

Für mehrere zusammenhängende, automatisierte Mails (Willkommensstrecke, Verkaufskampagne) gilt `prozesse/e-mail-marketing.md`.

Worauf es ankommt:
- **Regelmäßigkeit schlägt Menge.** Laut MailerLite (Analyse von über 12 Mrd. Mails) liefert ein Rhythmus zwischen einmal im Monat und zweimal pro Woche die besten Klickraten bei den wenigsten Abmeldungen. Unregelmäßige Versender haben eine mehr als doppelt so hohe Abmelderate wie Konten, die mindestens wöchentlich senden.
- **Eine Idee, ein Klickgrund.** Mails mit einem klaren Grund zum Klicken und ohne konkurrierende Links bekommen mehr Klicks.

## Benötigte Inputs

- **Thema oder Anlass** (vom Nutzer). Fehlt es: 3 Vorschläge machen, bevorzugt aus Inhalten, die schon funktioniert haben (gut gelaufene Posts, häufige Fragen von Kunden, neue Erkenntnis).
- **Ziel der Mail:** Wert/Beziehung (Klick auf Inhalt oder Antwort) oder Verkauf (Klick zum Angebot). Standard: Wert.
- **Rhythmus** des Newsletters (z. B. wöchentlich dienstags). Unbekannt → nachfragen und in deinem Gedächtnis speichern.
- **E-Mail-Tool, Absender** aus `marke/regeln.md`.
- Aus dem Repo, immer lesen: alle Dateien in `marke/`
- Aus deinem Gedächtnis: gespeicherte Regeln zu diesem Prozess und die Themen der letzten Newsletter (keine Wiederholung).
- **Optional, nur wenn der Nutzer es anspricht** (z. B. „interview mich dazu“, „nur Gliederung, ich schreibe selbst“): erst Interview und Gliederung nach `grundlagen/langform-interview.md`, dann an der dort genannten Stelle weiter. Nicht von dir aus anbieten; ohne diesen Wunsch läuft der Prozess wie unten beschrieben.

## Werkzeuge

- Copy: `prozesse/copywriting.md` (Schritte 8–9)
- E-Mail-Tool aus `marke/regeln.md`, sonst Text zum Einfügen
- Einrichtung: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Voraussetzungen einmalig prüfen.** SPF/DKIM/DMARC, Double-Opt-In, Abmeldelink und Impressum wie in `prozesse/e-mail-marketing.md`, Schritt 2. Ist das Ergebnis schon in deinem Gedächtnis und hat sich nichts geändert: überspringen.
3. **Eine Idee in einem Satz.** „Nach dieser Mail weiß/kann der Leser ___.“ Mehr als eine Idee → auf mehrere Mails verteilen.
4. **Recyceln statt neu erfinden.** Prüfe, ob es zum Thema schon einen gut gelaufenen Post, ein Karussell oder eine Kundenfrage gibt. Dann die Kernaussage übernehmen und für die Mail vertiefen (mehr Kontext, ein Beispiel, persönlicher Ton). Nicht wortgleich kopieren.
5. **Mail schreiben.**
   - **Einstieg:** direkt ins Thema, mit einer Beobachtung, einer kurzen Geschichte oder einer Frage aus dem Alltag der Zielgruppe. Keine Begrüßungsfloskeln („Ich hoffe, es geht dir gut“).
   - **Hauptteil:** die eine Idee mit einem konkreten Beispiel. Kurze Absätze (max. 3–4 Sätze), handytauglich.
   - **Übergang zum CTA:** warum der Klick oder die Antwort jetzt der logische nächste Schritt ist. Sieht der Contentplan einen **Newsletter-Hinweis** vor: 2–5 Zeilen an der Stelle, wo die Idee der Mail auf das Angebot trifft, als nächster Schritt für alle, die das beschriebene Ergebnis wollen. Er ist dann der eine CTA, kein zweiter Link.
   - **CTA:** genau einer, als Linktext („→ Vorlage herunterladen“), nie als nackte URL. Bei Wert-Mails ist „Antworte mir mit …“ ein guter CTA, weil Antworten die Zustellbarkeit verbessern.
   - **Look:** wie eine persönliche Mail. Wenig Bilder, keine GIFs.
   - **Fremde Empfehlungen mit Gegenleistung** (Newsletter-Tausch, Provision, Affiliate-Link): als „Anzeige“ bzw. „Werbelink“ kennzeichnen (`grundlagen/deutschland.md`, Abschnitt 4).
   - Vorname in der ersten Zeile, falls vorhanden (Platzhalter des Tools).
   - Tonalität aus `marke/tonalitaet.md`, Copy-Regeln aus `prozesse/copywriting.md` (Schritte 8–9).
6. **3 Betreffzeilen und Preheader.**
   - Betreff: kurz (Richtwert 4–7 Wörter bzw. max. ca. 40 Zeichen, damit er auf dem Handy nicht abgeschnitten wird), spezifisch, macht neugierig auf die eine Idee. Kein Clickbait, das die Mail nicht einlöst. Keine Großbuchstaben-Rufe, keine Ausrufezeichen-Ketten.
   - Die drei Varianten müssen sich im Ansatz unterscheiden (z. B. Nutzen / Frage / überraschende Aussage), nicht nur im Wortlaut.
   - Preheader: ergänzt den Betreff (zweiter Grund zum Öffnen), wiederholt ihn nicht.
7. **Im Tool anlegen.** Als **Entwurf** mit Betreff A anlegen. Unterstützt das Tool A/B-Tests, Betreff A gegen B testen und nach **Klicks** auswerten, nicht nach Öffnungen (Apple Mail verfälscht Öffnungen). Testmail an den Nutzer schicken. **Nicht versenden**, Versandzeitpunkt laut Rhythmus vorschlagen.
8. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
   - [ ] Die Mail vermittelt genau eine Idee (Satz aus Schritt 3 ist nach dem Lesen eindeutig).
   - [ ] Mindestens ein konkretes Beispiel oder eine konkrete Anleitung, nicht nur Meinung.
   - [ ] Genau ein CTA, als Linktext; keine konkurrierenden Links (Ausnahme: Pflichtlinks im Footer).
   - [ ] Einstieg ohne Floskel; der erste Satz hat mit dem Thema zu tun.
   - [ ] Drei Betreffzeilen mit unterschiedlichem Ansatz; der Betreff wird von der Mail eingelöst.
   - [ ] Preheader ergänzt den Betreff statt ihn zu wiederholen.
   - [ ] Absätze max. 3–4 Sätze, schlichter Look, keine GIFs.
   - [ ] Thema wiederholt keinen der letzten Newsletter (Gedächtnis).
   - [ ] Kein vorgetäuschter Anlass, keine erfundene Frist oder Zahl.
   - [ ] Fremdwerbung mit Gegenleistung als „Anzeige“/„Werbelink“ gekennzeichnet.
   - [ ] Als Entwurf angelegt, Testmail verschickt, **nicht versendet**.
   - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
9. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Thema und Betreff im Gedächtnis speichern. Hast du Zugriff auf die Kennzahlen, beim nächsten Newsletter die Klickrate, Antworten und Abmeldungen des vorherigen auswerten. Welche Art Thema und Betreff bringt die meisten Klicks? Als Regel speichern.

## Output-Format

Per Telegram an den Nutzer:

```
📰 Newsletter: <Idee aus Schritt 3>
Ziel: <Wert / Verkauf> | Vorgeschlagener Versand: <Tag, Uhrzeit>

Betreff A: <…>
Betreff B: <…>
Betreff C: <…>
Preheader: <…>

--- TEXT ---
<fertige Mail>

Im Tool: <Entwurf angelegt, Link / Text oben zum Einfügen>
A/B-Test: <Betreff A vs. B, Auswertung nach Klicks / nicht möglich>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
