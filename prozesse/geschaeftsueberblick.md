---
titel: Wöchentlicher Geschäftsüberblick
kategorie: Business
icon: chart
beschreibung: Jede Woche dieselben 5–15 Kennzahlen aus Company OS, Buchhaltung und Marketing – Auffälligkeiten zuerst, dazu Sofort-Warnungen bei Beschwerden, Kündigungen und Zahlungsproblemen.
status: fertig
version: 1
reihenfolge: 72
stichworte: Wochenbericht, Geschäftsüberblick, Kennzahlen, KPI, Scorecard, Zahlen, Controlling, Beschwerden, Kündigungen, Zahlungen, Ausgaben, Dashboard, Status
---

## Ziel

Der Nutzer weiß **jede Woche in 5 Minuten**, wie sein Geschäft steht, was auffällig ist und was er diese Woche entscheiden muss. Dringendes (Beschwerde, Kündigung, Zahlungsausfall) erfährt er **sofort**, nicht erst im Wochenbericht.

Grundlagen aus der Praxis:
- **Scorecard** (Gino Wickman, *Traction*/EOS): eine Wochenübersicht mit **5–15 Zahlen**, vor allem **vorauslaufende** Kennzahlen (z. B. geführte Erstgespräche), nicht nur nachlaufende (Umsatz). So sieht man Probleme, bevor sie im Umsatz ankommen.
- **Weekly Business Review** (Amazon): **jede Woche dasselbe Format**, damit Abweichungen sofort auffallen; der Schwerpunkt liegt auf **Auffälligkeiten** und auf Kennzahlen, die man **selbst beeinflussen** kann.

**Wo die Daten leben:** Die Wahrheit liegt in den Werkzeugen, vor allem im **Company OS** (Kundencockpit, Pipeline, Angebote, Aufgaben, Formulare, Kampagnen, Controlling). Hermes liest dort, rechnet zusammen und berichtet. Er hält keine eigene Schattenbuchführung; in seinem Gedächtnis speichert er nur die Wochenwerte für den Vergleich.

## Benötigte Inputs

- **Zugang zum Company OS**: Wie liest Hermes die Daten (Programmierschnittstelle, Export, Browser-Zugang)? Einmalig klären und in `marke/regeln.md` unter „Werkzeuge & Zugänge“ vermerken lassen.
- **Weitere Quellen:** Buchhaltung (Journal aus `prozesse/buchhaltung.md` bzw. Lexware Office), Instagram-/LinkedIn-Statistiken, E-Mail-Tool, ggf. Werbekonten.
- **Scorecard** (Schritt 1): welche Zahlen, mit welchem Ziel.
- **Berichtstag:** Standard Montag, 8 Uhr, für die Vorwoche.
- Aus dem Repo: `marke/regeln.md` (Freigaben)
- Aus deinem Gedächtnis: die Scorecard, die Werte der letzten Wochen, offene Punkte aus dem letzten Bericht.

## Werkzeuge

- Company OS (lesen; Aufgaben anlegen nur, wenn der Nutzer das in `marke/regeln.md` freigegeben hat)
- Buchhaltungs-Journal bzw. Lexware Office
- Statistiken von Instagram, LinkedIn, E-Mail-Tool
- Zeitplan (wöchentlicher Auslöser bei dir einrichten)
- Einrichtung: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

1. **Einrichtung (einmalig): Scorecard festlegen.** Mit dem Nutzer 5–15 Kennzahlen vereinbaren, jede mit **Quelle**, **Wochenziel** und **Ampel** (grün/gelb/rot ab welchem Wert). Vorschlag zum Start, anpassen:
   - **Vertrieb** (vorauslaufend): neue Anfragen/Leads · geführte Erstgespräche · verschickte Angebote · Abschlüsse · Wert der offenen Pipeline
   - **Kunden:** aktive Kunden · **neue Beschwerden** · **Kündigungen** · Zahlungsausfälle
   - **Finanzen:** Einnahmen und Ausgaben der Woche · offene und überfällige Rechnungen · Umsatz des Jahres gegenüber der Kleinunternehmergrenze
   - **Marketing:** veröffentlichte Beiträge gegenüber Plan · Reichweite bzw. neue Follower · neue Newsletter-Abonnenten · Akquise-Aktionen (aus `prozesse/marketing-kostenlos.md`)
   - **Betrieb:** überfällige Aufgaben im Company OS
   Den wöchentlichen Auslöser bei dir einrichten.
2. **Sofort-Warnungen (laufend, nicht erst am Berichtstag).** Sobald eines davon auftritt, **sofort** per Telegram melden:
   - neue **Beschwerde** oder negative Bewertung
   - **Kündigung** oder angekündigte Kündigung
   - Kundenrechnung **mehr als 14 Tage überfällig**, Rücklastschrift oder Zahlungsausfall
   - unbekannte oder ungewöhnlich hohe **Abbuchung**
   - Warnschwelle der **Umsatzgrenze** erreicht (siehe `prozesse/buchhaltung.md`)
   Jeweils mit: was, wer, Betrag bzw. Inhalt, Quelle (Link) und einem **Vorschlag für die nächste Handlung** (z. B. Antwortentwurf auf die Beschwerde). Hermes antwortet Kunden nicht selbst.
3. **Daten sammeln (am Berichtstag).** Alle Kennzahlen aus den Quellen für die abgelaufene Woche (Montag bis Sonntag) holen. **Ist eine Quelle nicht erreichbar oder unvollständig: das so benennen, nicht schätzen.**
4. **Vergleichen.** Jede Zahl gegen Wochenziel, Vorwoche und Durchschnitt der letzten 4 Wochen. Ampel setzen.
5. **Auffälligkeiten erklären.** Für jede rote Zahl und jede große Veränderung: Was steckt dahinter? In den Daten nachsehen (z. B. „Weniger Erstgespräche, weil 2 Termine abgesagt wurden“), nicht spekulieren. Wo die Ursache unklar ist: als offene Frage formulieren.
6. **Kunden-Status.** Beschwerden und Kündigungen **einzeln** auflisten, nicht nur zählen: Kunde, Anliegen, Status (offen/beantwortet/gelöst), wie lange offen. Offene Beschwerden ohne Antwort über 2 Werktage rot markieren.
7. **Was diese Woche zählt.** Höchstens **3 Prioritäten** für die Woche vorschlagen, abgeleitet aus den roten Zahlen und offenen Punkten, plus **Entscheidungen, die der Nutzer treffen muss**.
8. **Bericht schreiben.** **Jede Woche dasselbe Format** (Output-Format unten), Auffälligkeiten zuerst, dann die Scorecard, dann Details. Lesbar in 5 Minuten.
9. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
   - [ ] Alle Kennzahlen der Scorecard sind enthalten, jede mit Wert, Ziel, Vorwoche, Ampel; fehlende Daten sind als fehlend markiert, nicht geschätzt.
   - [ ] Summen und Veränderungen **per Skript nachgerechnet**.
   - [ ] Jede rote Zahl hat eine belegte Erklärung oder eine offene Frage.
   - [ ] Beschwerden und Kündigungen einzeln mit Status aufgeführt.
   - [ ] Höchstens 3 Prioritäten, jede aus den Daten begründet.
   - [ ] Format identisch mit den Vorwochen; in 5 Minuten lesbar.
   - [ ] Sofort-Warnungen der Woche wurden tatsächlich sofort geschickt (nicht erst im Bericht).
   - [ ] Nichts im Namen des Nutzers an Kunden geschickt; Aufgaben im Company OS nur angelegt, wenn freigegeben.
   - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
10. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Wochenwerte speichern. Alle 4 Wochen prüfen, ob die Scorecard noch passt: Welche Zahl hat nie zu einer Entscheidung geführt (streichen?), welche Frage des Nutzers konnte der Bericht nicht beantworten (Kennzahl ergänzen?). Als Vorschlag per Telegram.

## Output-Format

Wochenbericht per Telegram, jede Woche gleich:

```
📊 Woche <KW>, <Datum–Datum>

⚠️ Auffällig
- <Kennzahl>: <Wert> (Ziel <…>, Vorwoche <…>) – <Erklärung / offene Frage>

🎯 Diese Woche
1. <Priorität> – <warum>
2. …
Entscheidungen für dich: <…>

📋 Scorecard
Vertrieb:  Anfragen <…> 🟢 | Erstgespräche <…> 🟡 | Angebote <…> | Abschlüsse <…> | Pipeline <… €>
Kunden:    aktiv <…> | Beschwerden <…> | Kündigungen <…>
Finanzen:  Einnahmen <… €> | Ausgaben <… €> | offen <… €> (überfällig <… €>) | Umsatz Jahr <… €> (<x> % von 25.000 €)
Marketing: Beiträge <…>/<Plan> | Follower +<…> | Newsletter +<…>
Betrieb:   überfällige Aufgaben <…>

👥 Beschwerden & Kündigungen
- <Kunde> – <Anliegen> – <Status>, offen seit <…>

Datenlücken: <Quelle nicht erreichbar / keine>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
