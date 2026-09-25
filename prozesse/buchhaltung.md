---
titel: Buchhaltung
kategorie: Business
icon: calculator
beschreibung: Für Kleinunternehmer: Belege sammeln und zuordnen, E-Rechnungen vorbereiten, Monatsübersicht mit Umsatzgrenzen – Hermes bereitet nur vor.
status: fertig
version: 1
reihenfolge: 70
stichworte: Rechnung, Rechnung schreiben, E-Rechnung, Belege, Beleg, Quittung, Ausgaben, Einnahmen, Steuer, EÜR, Kleinunternehmer, Buchhaltung, Monatsabschluss, offene Rechnungen
---

## Ziel

Die Buchhaltung eines **Kleinunternehmers (§ 19 UStG)** so vorbereiten, dass der Nutzer jederzeit weiß, wo er steht, und am Jahresende die Einnahmen-Überschuss-Rechnung (EÜR) ohne Suche erstellen kann. Vier Aufgaben:

- **A – Belege erfassen:** jeden Beleg sammeln, prüfen, benennen, einer Kategorie zuordnen und mit der Zahlung abgleichen
- **B – Rechnungen vorbereiten:** korrekte (E-)Rechnungen als Entwurf
- **C – Monatsübersicht:** Einnahmen, Ausgaben, offene Posten, fehlende Belege, **Umsatzgrenzen**
- **D – Jahresabschluss vorbereiten:** Summen für die Anlage EÜR

**Hermes bereitet nur vor.** Er zahlt nichts, versendet keine Rechnungen, reicht nichts beim Finanzamt ein, löscht keine Belege und gibt keine Steuerberatung. Wo eine steuerliche Einschätzung nötig ist, markiert er den Fall und empfiehlt, einen Steuerberater oder das Finanzamt zu fragen.

## Rechtsrahmen (Stand 2026, Deutschland)

- **Umsatzgrenzen:** Kleinunternehmer bleibt, wer im **Vorjahr max. 25.000 €** und im **laufenden Jahr max. 100.000 €** Umsatz hat. Die 100.000 € sind seit 2025 eine **harte Grenze**: Wird sie überschritten, endet die Regelung **sofort**, und schon der Umsatz, mit dem die Grenze überschritten wird, ist umsatzsteuerpflichtig. Wer im laufenden Jahr über 25.000 € kommt, ist im Folgejahr kein Kleinunternehmer mehr.
- **Rechnungen von Kleinunternehmern** (§ 34a UStDV, seit 2025) brauchen mindestens: vollständiger Name und Anschrift von Leistendem und Empfänger, **Steuernummer** (oder USt-IdNr. bzw. Kleinunternehmer-ID), Ausstellungsdatum, Menge und Art der Leistung, Entgelt in einer Summe und einen **Hinweis auf die Steuerbefreiung** (z. B. „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.“). Rechnungsnummer und Leistungsdatum sind hier nicht Pflicht, werden aber für Ordnung und Nachvollziehbarkeit trotzdem geführt.
- **E-Rechnung:** Kleinunternehmer müssen E-Rechnungen **empfangen** können (seit 2025; ein E-Mail-Postfach reicht), sind aber vom **Ausstellen befreit**. Wer freiwillig E-Rechnungen ausstellt, nutzt **ZUGFeRD ab Version 2.0.1 (nicht die Profile MINIMUM und BASIC-WL)** oder **XRechnung**. ZUGFeRD ist ein PDF mit eingebetteten XML-Daten, also für Menschen und Software lesbar, deshalb hier der Standard.
- **Aufbewahrung:** Buchungsbelege und Rechnungen **8 Jahre** (seit 2025). E-Rechnungen im **Originalformat** (inkl. XML) aufbewahren; ein Ausdruck ersetzt sie nicht.
- **Steuererklärungen:** Kleinunternehmer geben seit dem Steuerjahr 2024 keine Umsatzsteuer-Jahreserklärung mehr ab; die Angaben laufen über die **Anlage EÜR**.
- **Falle Auslandsleistungen:** Bei Leistungen von Unternehmen aus dem Ausland (z. B. Werbeanzeigen bei Meta aus Irland, Software-Abos aus den USA) kann die Umsatzsteuer **auf den Kleinunternehmer übergehen** (Reverse Charge, § 13b UStG). Solche Belege immer markieren und klären lassen.

Das ist eine Zusammenfassung zur Orientierung, keine Steuerberatung.

## Benötigte Inputs

- **Firmendaten** (Name, Anschrift, Steuernummer, Bankverbindung, Rechnungsnummernkreis, Zahlungsziel): aus deinem **geschützten Speicher**, nicht aus dem Repo. Steuernummer und IBAN gehören nicht in `marke/`, weil das Repo später öffentlich werden könnte. Fehlen sie: einmal beim Nutzer erfragen und geschützt speichern.
- **Belegquellen:** Wo kommen Belege an? (E-Mail-Postfach, Fotos per Telegram, Downloads aus Kundenkonten). Nach Einrichtung zusätzlich: Kontoauszüge (CSV-Export der Bank) für den Abgleich.
- **Für Rechnungen:** Kunde (Name, Anschrift), Leistung, Menge, Preis, Leistungszeitraum.
- **Werkzeug:** vorerst keins; geplant: Lexware Office (ehemals lexoffice). Siehe Schritt 0.
- Aus dem Repo: `marke/regeln.md` (Freigaben)
- Aus deinem Gedächtnis: Belegjournal, Kategorien-Regeln („Abo X = Software“), Rechnungsnummern, offene Posten, Umsatzsumme des Jahres.

## Werkzeuge

- **Ohne Buchhaltungstool (jetzt):** Ordnerstruktur + Belegjournal (CSV) in deinem Arbeitsbereich, mit Sicherung. Für E-Rechnungen: `python-drafthorse` (Open Source, erzeugt ZUGFeRD-XML und bettet es in ein PDF ein) und eine Prüfung mit einem Validator (z. B. Mustang/ZUV oder KoSIT-Validator). Anzeige zum Gegencheck: `https://e-rechnung.elster.de`.
- **Mit Lexware Office (später):** Belege hochladen, Rechnungen als ZUGFeRD/XRechnung erstellen, Bankabgleich. **Die Programmierschnittstelle (Public API) gibt es erst ab Tarif XL**; bei kleineren Tarifen bereitet Hermes Dateien und Daten vor, der Nutzer lädt hoch.
- Einrichtung: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

0. **Einrichtung (einmalig).**
   - Firmendaten erfragen und geschützt speichern.
   - Ablage anlegen: `buchhaltung/<Jahr>/eingang/`, `…/ausgang/`, `…/unklar/` und `buchhaltung/<Jahr>/journal.csv` (Spalten: Nr · Belegdatum · Zahlungsdatum · Partner · Beschreibung · Betrag brutto · Einnahme/Ausgabe · Kategorie · Zahlart · Datei · Status · Notiz).
   - Tägliche Sicherung der Ablage an einen zweiten Ort.
   - **Ehrlich einordnen:** Eine Ordnerablage ist **nicht revisionssicher** im Sinne der GoBD (Dateien lassen sich ändern). Dem Nutzer empfehlen, zeitnah ein GoBD-konformes Tool (z. B. Lexware Office) zu nutzen; bis dahin nie Originale ändern, nur Kopien bearbeiten.
1. **Briefing prüfen.** Welche Aufgabe (A, B, C, D)? Startcheck nach `grundlagen/einrichtung.md` gemacht?

### A – Belege erfassen

2. **Einsammeln.** Neue Belege aus den Quellen holen. Originale **unverändert** ablegen (E-Rechnungen mit XML, Fotos in voller Auflösung).
3. **Prüfen.** Ist es ein Beleg (Rechnung, Quittung, Kontoauszug-Position mit Nachweis)? Lesbar? Datum, Betrag, Partner erkennbar? Betrieblich? **Bei Zweifel, ob privat oder betrieblich: nicht raten, nach `unklar/` und nachfragen.**
4. **Benennen.** Kopie als `JJJJ-MM-TT_Partner_Betrag.pdf` im Monatsordner; das Original bleibt erhalten.
5. **Kategorie zuordnen** (angelehnt an die Anlage EÜR): Umsatzerlöse · Fremdleistungen · Wareneinkauf · Software & Abos · Werbung & Marketing · Telefon & Internet · Bürobedarf · Arbeitsmittel · Fortbildung · Reisekosten · Bewirtung · Gebühren (Bank, Plattformen) · Sonstiges. Wiederkehrende Partner bekommen eine gespeicherte Regel (Gedächtnis).
6. **Markieren, was Klärung braucht:**
   - Leistungen von **ausländischen** Anbietern (Reverse Charge möglich)
   - Anschaffungen über **800 €** (bei Kleinunternehmern inkl. Umsatzsteuer): evtl. über mehrere Jahre abzuschreiben
   - **Bewirtung** (nur anteilig absetzbar, Bewirtungsbeleg mit Anlass und Teilnehmern nötig)
   - Gemischt privat/betrieblich genutzte Dinge (Handy, Auto, Arbeitszimmer)
7. **Mit der Zahlung abgleichen.** Liegt ein Kontoauszug vor: jede Position einem Beleg zuordnen. **Zahlungen ohne Beleg** und **Belege ohne Zahlung** in die Monatsübersicht (Schritt 14).
8. **Journal aktualisieren.** Eine Zeile pro Beleg, Status: erfasst / unklar / abgeglichen.

### B – Rechnung vorbereiten

9. **Daten prüfen.** Kunde (vollständiger Name, Anschrift), Leistung (Art, Umfang/Menge), Preis, Leistungszeitraum. Fehlt etwas: nachfragen.
10. **Rechnung erstellen.**
    - Alle Pflichtangaben nach § 34a UStDV (siehe Rechtsrahmen), dazu: fortlaufende **Rechnungsnummer** (nächste freie aus dem Nummernkreis, nie doppelt, nie Lücken durch Löschen), Leistungsdatum/-zeitraum, Zahlungsziel, Bankverbindung.
    - **Kein Umsatzsteuerausweis.** Hinweis: „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.“
    - **Format:** Geschäftskunden → **ZUGFeRD (Profil EN 16931)**, erstellt mit Lexware Office oder `python-drafthorse`. Privatkunden → normales PDF genügt (ZUGFeRD schadet aber nicht, weil es wie ein normales PDF aussieht).
11. **E-Rechnung prüfen.** Mit dem Validator auf Gültigkeit prüfen (XML korrekt, Profil nicht MINIMUM/BASIC-WL, PDF/A-3). Zusätzlich Sichtprüfung: Stimmen PDF-Ansicht und XML-Daten überein (Betrag, Kunde, Nummer)?
12. **Als Entwurf liefern.** Rechnung an den Nutzer zur Freigabe. **Nicht an den Kunden senden.** Nach Freigabe: im Journal als Einnahme (offen) mit Fälligkeitsdatum eintragen und die Umsatzsumme des Jahres aktualisieren.

### C – Monatsübersicht (am Monatsanfang für den Vormonat)

13. **Zahlen zusammenstellen:** Einnahmen, Ausgaben nach Kategorie, Überschuss; Vergleich zum Vormonat.
14. **Offene Punkte:** offene und **überfällige** Kundenrechnungen (mit Tagen Verzug), Zahlungen ohne Beleg, Belege ohne Zahlung, Belege in `unklar/`, markierte Klärungsfälle (Schritt 6).
15. **Umsatzgrenzen überwachen.** Summe der Umsätze im laufenden Jahr gegen die Grenzen:
    - **Ab 20.000 €:** Hinweis, dass bei über 25.000 € in diesem Jahr die Regelung im **nächsten** Jahr endet.
    - **Ab 80.000 €:** Warnung, dass bei über 100.000 € die Regelung **sofort** endet.
    - Bei jeder neuen Rechnung, die eine Grenze überschreiten würde: **vor** der Freigabe warnen.
16. **Fristen erinnern:** Termin für Steuererklärung inkl. Anlage EÜR (Abgabefrist beim Finanzamt/ELSTER prüfen), Fälligkeiten von Vorauszahlungen, falls vom Finanzamt festgesetzt.

### D – Jahresabschluss vorbereiten

17. **Vollständigkeit prüfen:** alle Monate abgeglichen, keine offenen `unklar/`-Belege, alle Klärungsfälle beantwortet.
18. **Summen für die Anlage EÜR** nach Kategorien zusammenstellen, mit Liste der zugehörigen Belege. Hinweis auf markierte Sonderfälle (Abschreibungen, Reverse Charge, Bewirtung, gemischte Nutzung).
19. **Übergabe an den Nutzer** zur Erstellung der Steuererklärung (ELSTER oder Steuerberater). Hermes reicht nichts ein.

### Abschluss (für A–D)

20. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
    - [ ] Kein Original verändert oder gelöscht; E-Rechnungen mit XML abgelegt.
    - [ ] Jeder Beleg im Journal hat Datum, Partner, Betrag, Kategorie, Datei und Status.
    - [ ] Keine Zuordnung privat/betrieblich geraten; Unklares in `unklar/` und nachgefragt.
    - [ ] Klärungsfälle (Ausland, > 800 €, Bewirtung, gemischte Nutzung) markiert.
    - [ ] Rechnungen: alle Pflichtangaben nach § 34a UStDV, Hinweis auf § 19 UStG, kein Umsatzsteuerausweis, Nummer fortlaufend und einmalig.
    - [ ] E-Rechnungen: Validator bestanden, PDF-Ansicht und XML stimmen überein.
    - [ ] Umsatzsumme aktuell; Grenzwarnungen ausgelöst, wo nötig.
    - [ ] Summen im Journal und in der Übersicht stimmen rechnerisch (per Skript nachgerechnet, nicht im Kopf).
    - [ ] Nichts bezahlt, versendet oder eingereicht; keine Steuerberatung formuliert, sondern Klärungsbedarf benannt.
    - [ ] Steuernummer, IBAN und Firmendaten nur im geschützten Speicher, nicht im Repo oder in öffentlichen Dateien.
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
21. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: neue Kategorien-Regeln für wiederkehrende Partner speichern; wiederkehrende Klärungsfälle (z. B. immer derselbe Auslandsanbieter) als Regel festhalten, sobald der Nutzer geklärt hat, wie damit umzugehen ist.

## Output-Format

Per Telegram an den Nutzer, je nach Aufgabe:

```
🧾 Belege: <Anzahl> neu erfasst
Unklar (bitte klären): <Beleg – Frage>
Klärungsbedarf Steuer: <Beleg – Grund, z. B. Auslandsleistung>
```

```
📄 Rechnung <Nr.> an <Kunde>: <Betrag> €, fällig <Datum>
Format: <ZUGFeRD EN 16931 / PDF> | Validator: <bestanden>
Datei: <im Anhang> → Bitte freigeben, dann versendest du sie.
Umsatz <Jahr> nach dieser Rechnung: <Summe> € (<x> % der 100.000-€-Grenze)
```

```
📊 Monatsübersicht <Monat>
Einnahmen: <€> | Ausgaben: <€> | Überschuss: <€>
Umsatz <Jahr> bisher: <€> → Grenzen: 25.000 € (<x> %), 100.000 € (<y> %)
Offene Rechnungen: <Anzahl, Summe>, davon überfällig: <…>
Fehlende Belege: <…> | Unklar: <…> | Klärungsfälle: <…>
Fristen: <…>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
