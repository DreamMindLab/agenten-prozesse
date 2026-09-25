---
titel: Landingpage erstellen
kategorie: Text & Copy
icon: layout
beschreibung: Landingpage mit einem Ziel: Copy, Aufbau, Umsetzung als fertige Seite.
status: fertig
version: 1
reihenfolge: 23
stichworte: Landingpage, Sales Page, Verkaufsseite, Opt-in-Seite, Funnel-Seite, Anmeldeseite, Webinar-Seite, Lead-Magnet-Seite
---

## Ziel

Eine fertige, mobil funktionierende Landingpage mit **genau einem Ziel** (eintragen, Termin buchen oder kaufen), die das Versprechen der Quelle (Ad, Post, E-Mail) direkt aufgreift.

Die zwei Grundregeln (Oli Gardner, Unbounce, „Conversion-Centered Design“):
- **Ein Ziel, eine Handlung.** Keine Navigation, keine Links, die woanders hinführen (Ausnahme: Pflichtlinks wie Impressum). Der CTA darf mehrfach vorkommen, führt aber immer zur selben Handlung.
- **Message Match.** Die Headline greift das Versprechen auf, auf das der Besucher geklickt hat, möglichst mit denselben Worten.

## Benötigte Inputs

- **Ziel der Seite:** Eintragung (Lead-Magnet, Webinar), Terminbuchung oder Kauf.
- **Traffic-Quelle:** Woher kommen die Besucher (Meta-Ad, Instagram-Post, E-Mail, Google)? Wenn möglich den genauen Anzeigen-/Posttext.
- **Angebot** aus `marke/angebot.md`.
- **Technik:** Landingpage-Tool, Domain, Impressum-/Datenschutz-Links aus `marke/regeln.md` („Werkzeuge & Zugänge“). Fehlt das: als eigenständige HTML-Datei bauen.
- Aus dem Repo, immer lesen: alle Dateien in `marke/`
- Aus deinem Gedächtnis: gespeicherte Regeln zu diesem Prozess.

## Werkzeuge

- Copy: Prozess `prozesse/copywriting.md` (Schritte 2–9)
- Umsetzung: das Tool aus `marke/regeln.md` **oder** eine HTML/CSS-Datei (ohne Framework, schnell ladend)
- Prüfung: Playwright + Chromium (Screenshots auf Handy- und Desktopbreite)
- Einrichtung: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Ziel und Entscheidungsgröße festlegen.** Die eine Handlung benennen. Dann die Länge ableiten:
   - **Kostenlos** (Eintragen, Webinar): kurz. Hero, 3–5 Nutzenpunkte, Beweis, Formular. Kurze Seiten gewinnen hier in fast allen Tests (CXL).
   - **Termin/Gespräch:** mittel. Plus: für wen es ist und für wen nicht, Ablauf des Gesprächs, FAQ.
   - **Kauf:** so lang, wie nötig ist, um die wichtigen Einwände zu beantworten. Lange Seiten verlieren nicht wegen der Länge, sondern wenn der Text oberflächlich ist.
3. **Message Match klären.** Den Text der Quelle (Ad/Post/Mail) neben die geplante Headline legen. Versprechen, Begriffe und Bildwelt müssen wiedererkennbar sein.
4. **Copy erstellen** mit `prozesse/copywriting.md`, Schritte 2–9 (Kundensprache, Bewusstseinsstufe, Botschaft, Headlines, Drei-Fragen-Test). Besucher aus Ads sind meist problem- oder lösungsbewusst, Besucher aus E-Mails oft schon angebotsbewusst.
5. **Seitenaufbau festlegen** (Reihenfolge anpassen, wenn die Bewusstseinsstufe es verlangt):
   1. **Hero** (ohne Scrollen sichtbar, auch auf dem Handy): Headline (Message Match, max. ca. 12 Wörter, Nutzen vorne; bewährtes Muster: „<Ergebnis> für <Zielgruppe> – ohne <größter Einwand>“), Unterzeile (für wen + Ergebnis), CTA-Button, passendes Bild oder Vorschau des Lead-Magnets.
   2. **Problem** in Kundensprache.
   3. **Lösung / Mechanismus:** warum dieser Weg funktioniert.
   4. **Nutzen:** konkret, bildhaft, überprüfbar (keine Merkmalliste).
   5. **Beweis:** nur echte Ergebnisse, Stimmen, Zahlen aus `marke/angebot.md`. Gibt es keine: den Abschnitt weglassen. **Keine Platzhalter-Testimonials mit ausgedachtem Text**, auch nicht „zum Ersetzen“: Sie landen erfahrungsgemäß live. Stattdessen im Output als offener Punkt melden.
   6. **Angebot:** was genau man bekommt (bei Kauf: Preis, Umfang, Garantie falls vorhanden). Prüffrage nach Hormozis Wertgleichung: Macht der Abschnitt das Ergebnis greifbar, die Erfolgswahrscheinlichkeit glaubhaft (Beweis) und zeigt er, wie schnell und mit wie wenig Aufwand es geht?
   7. **So läuft es ab:** 3 einfache Schritte vom Klick bis zum Ergebnis (z. B. „Termin wählen – Gespräch führen – Plan erhalten“). Nimmt die Unsicherheit, was nach dem Klick passiert.
   8. **Einwände / FAQ:** die 3–5 wichtigsten Einwände aus der Kundensprache.
   9. **Abschluss-CTA:** Versprechen wiederholen + Button.
   10. **Footer:** nur Impressum und Datenschutz.
6. **CTA und Formular.** Button-Text = Ergebnis („Checkliste holen“, „Termin sichern“), nicht „Absenden“. Formular nur mit den Feldern, die wirklich gebraucht werden (bei Eintragung: Vorname + E-Mail oder nur E-Mail).
7. **Umsetzen.**
   - Mobil zuerst: Die meisten Besucher aus Social Media kommen vom Handy. Große Schrift (min. 16 px Fließtext), Buttons min. 48 px hoch, auf dem Handy eine fixierte CTA-Leiste am unteren Rand, keine Elemente breiter als der Bildschirm.
   - Schnell: Bilder komprimiert (WebP), keine unnötigen Skripte.
   - Markendesign aus `marke/design.md`.
   - **Keine Navigation**, keine ablenkenden Links.
   - Im Tool aus `marke/regeln.md` als **Entwurf** anlegen oder als HTML-Datei liefern. Nicht live schalten.
8. **Pflichtangaben (Deutschland) einbauen.** Hermes schreibt **keine Rechtstexte**, sondern prüft, ob sie da sind:
   - Link zu **Impressum** und **Datenschutzerklärung** auf der Seite, von überall erreichbar (auch nicht vom Cookie-Banner verdeckt).
   - **Cookie-Banner** nur nötig, wenn nicht notwendige Cookies/Tracking (z. B. Meta-Pixel, Analytics) gesetzt werden. Dann: Einwilligung **vor** dem Setzen (§ 25 TDDDG).
   - **Newsletter-Eintragung:** Einwilligungstext am Formular (was, wie oft, Abmeldung jederzeit), Versand erst nach **Double-Opt-In**.
   - **Kauf:** Bestellbutton mit eindeutiger Beschriftung (z. B. „zahlungspflichtig bestellen“), AGB und Widerrufsbelehrung verlinkt.
   Fehlt ein Rechtstext oder Link: im Output klar als offener Punkt melden.
9. **Prüfen.** Screenshots bei 390 px (Handy) und 1440 px (Desktop). Alle Links und den Button testen, Testeintrag im Formular (falls möglich im Entwurfsmodus). Ladezeit grob prüfen.
10. **Testvorschlag.** Eine alternative Headline für einen A/B-Test formulieren (die Headline hat den größten Hebel).
11. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Geprüft wird die **gerenderte Seite**, nicht nur der Text:
    - [ ] Genau ein Ziel; alle CTAs führen zur selben Handlung; keine Navigation, keine ablenkenden Links.
    - [ ] Headline greift das Versprechen der Quelle erkennbar auf (Quelle und Headline nebeneinander zitieren).
    - [ ] Auf dem Handy (390 px) sind Headline, Nutzen und CTA ohne Scrollen sichtbar (Screenshot).
    - [ ] Button-Text beschreibt das Ergebnis, nicht die Aktion.
    - [ ] Formular fragt nur ab, was gebraucht wird.
    - [ ] Die Copy-Kriterien aus `prozesse/copywriting.md` (Schritt 10) sind erfüllt.
    - [ ] Beweise nur aus echten Quellen; kein erfundenes Testimonial, keine erfundene Zahl.
    - [ ] Kein horizontales Scrollen, Schrift min. 16 px, Buttons min. 48 px, Bilder komprimiert.
    - [ ] Abschnitt „So läuft es ab“ vorhanden (3 Schritte).
    - [ ] Impressum und Datenschutz verlinkt; Cookie-Banner vorhanden, falls Tracking; Einwilligungstext bzw. Bestellbutton korrekt (siehe Schritt 8).
    - [ ] Seite ist als Entwurf angelegt bzw. als Datei geliefert, **nicht live**.
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
12. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Liefert der Nutzer später Zahlen (Besucher, Eintragungen), die Conversion-Rate auswerten und als Lernregel speichern (Orientierung: Median über alle Branchen laut Unbounce ca. 6,6 %).

## Output-Format

Per Telegram an den Nutzer:

```
🧭 Landingpage: <Headline>
Ziel: <Handlung> | Quelle: <Ad/Post/E-Mail>
Bewusstseinsstufe: <Stufe>

Entwurf: <Link zum Entwurf im Tool ODER HTML-Datei im Anhang>
Screenshots: <Handy + Desktop im Anhang>

A/B-Test-Vorschlag: <alternative Headline>
Offene Punkte (vor Live-Schaltung): <z. B. Impressum-Link fehlt, Testimonial fehlt>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
