---
titel: Arbeitsprozesse
kategorie: Business
icon: workflow
beschreibung: Einen Ablauf erfassen, vereinfachen und als klare Anleitung (SOP) festhalten – dann prüfen, was Hermes oder eine Automatisierung übernehmen kann.
status: fertig
version: 1
reihenfolge: 71
stichworte: SOP, Workflow, Automatisierung, Prozessbeschreibung, Checkliste, Ablauf dokumentieren, Anleitung, Onboarding-Prozess, Routine, Delegieren
---

## Ziel

Aus einem Ablauf, den der Nutzer bisher „im Kopf“ macht, wird:
1. eine **kurze, getestete Anleitung (SOP)**, nach der jemand anderes (oder Hermes) den Ablauf fehlerfrei ausführen kann,
2. eine **Entscheidung pro Schritt:** entfällt, bleibt beim Nutzer, übernimmt Hermes oder wird automatisiert,
3. bei Abläufen, die Hermes regelmäßig ausführen soll: ein **Vorschlag für eine neue Prozessdatei** in diesem Repo.

Grundregeln aus der Praxis:
- **Erst weglassen und vereinfachen, dann automatisieren.** Einen schlechten Ablauf zu automatisieren macht ihn nur schneller schlecht. Reihenfolge: eliminieren → vereinfachen → standardisieren → automatisieren/delegieren.
- **Kurze Checklisten schlagen lange Handbücher.** Atul Gawande (*The Checklist Manifesto*): gute Checklisten haben **ca. 5–9 Punkte**, nur die „Killer-Punkte“, die wirklich vergessen werden und Schaden anrichten. Lange Dokumente liest niemand vollständig.
- **Eine veraltete Anleitung ist schlimmer als keine.** Jede SOP bekommt ein Überprüfungsdatum.

## Benötigte Inputs

- **Welcher Ablauf?** Name, Auslöser (was startet ihn?), Ergebnis (woran erkennt man „fertig“?).
- **Wie oft** und **wie lange** dauert er? Wer macht ihn heute?
- **Wie der Ablauf erfasst wird** (Schritt 2): Sprachnachricht, Bildschirmaufnahme, Gespräch mit Hermes oder vorhandene Notizen.
- **Werkzeuge**, die dabei genutzt werden (z. B. Company OS, E-Mail, Buchhaltung, Kalender).
- Aus dem Repo: `marke/regeln.md` (Freigaben, Werkzeuge & Zugänge)
- Aus deinem Gedächtnis: bereits dokumentierte Abläufe (keine Doppelungen).

## Werkzeuge

- Transkription (für Sprachnachrichten/Aufnahmen), z. B. ElevenLabs oder Whisper. Sind Kundendaten oder Stimmen Dritter enthalten: lokal mit Whisper oder nur mit AVV (`grundlagen/deutschland.md`, Abschnitt 5)
- Company OS (Modul „Prozesse“, falls vorhanden) oder Markdown-Datei als Ablage
- Für Automatisierungen: die Funktionen der vorhandenen Werkzeuge zuerst (Company OS, E-Mail-Tool, Lexware Office), externe Automatisierungsdienste nur nach Freigabe
- Einrichtung: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Ablauf erfassen, so wie er wirklich läuft.** Am einfachsten für den Nutzer:
   - **Sprachnachricht oder Bildschirmaufnahme**, während er den Ablauf einmal durchführt und laut erklärt. Hermes transkribiert.
   - **Oder Gespräch:** Hermes fragt nacheinander: Was löst den Ablauf aus? Was machst du als Erstes, dann? Wo musst du etwas entscheiden, und wonach? Welche Werkzeuge, welche Zugänge? Was geht typischerweise schief oder wird vergessen? Woran erkennst du, dass es fertig ist?
   Sind in der Aufnahme andere Personen zu hören oder Kundendaten zu sehen: deren Einwilligung bzw. vorher schwärzen (`grundlagen/deutschland.md`, Abschnitt 5).
   Nicht beschönigen: auch Umwege und Workarounds aufschreiben. Die sind oft die Hinweise auf Verbesserung.
3. **Ist-Ablauf aufschreiben.** Nummerierte Schritte, jeder mit: Aktion, Werkzeug, wer, Dauer (geschätzt), Entscheidungen („wenn …, dann …“).
4. **Durchgehen in dieser Reihenfolge**, für jeden Schritt:
   1. **Eliminieren:** Braucht es den Schritt überhaupt? Was passiert, wenn er wegfällt? (Doppelte Eingaben, Freigaben ohne Nutzen, Berichte, die niemand liest.)
   2. **Vereinfachen:** Lässt er sich zusammenlegen, verkürzen, mit einer Vorlage beschleunigen?
   3. **Standardisieren:** Gibt es eine feste Reihenfolge, feste Vorlagen, feste Ablageorte?
   4. **Automatisieren oder delegieren:** Kann ein Werkzeug den Schritt ohne Urteil erledigen (Automatisierung), kann Hermes ihn vorbereiten oder ausführen (Delegation), oder braucht es das Urteil bzw. die Beziehung des Nutzers (bleibt manuell)?
   Ergebnis: eine Tabelle mit Schritt · Entscheidung (entfällt / vereinfacht / Nutzer / Hermes / Automatisierung) · Begründung.
5. **Automatisierung bewerten.** Nur vorschlagen, wenn:
   - der Ablauf **stabil** ist (mindestens ca. 3-mal gleich gelaufen),
   - die Rechnung aufgeht: Zeitersparnis pro Durchlauf × Häufigkeit pro Monat gegenüber Einrichtungsaufwand plus laufenden Kosten (Rechnung zeigen),
   - Fehler der Automatisierung **bemerkt** würden (Benachrichtigung, Kontrolle).
   Zuerst die vorhandenen Werkzeuge nutzen, neue Dienste nur nach Freigabe. **Nichts, was Geld bewegt, Kunden kontaktiert oder Daten löscht, ohne Freigabeschritt des Nutzers.**
6. **Soll-Anleitung (SOP) schreiben.** Kurz, eine Seite, in der Sprache des Nutzers:
   - **Zweck** (1 Satz) · **Auslöser** · **Fertig, wenn** (prüfbares Ergebnis) · **Verantwortlich** · **Werkzeuge & Zugänge**
   - **Schritte:** nummeriert, je Schritt eine Aktion, mit Verb am Anfang („Rechnung in Company OS anlegen“), Entscheidungspunkte als „Wenn …, dann …“
   - **Checkliste** mit 5–9 Killer-Punkten. Typ wählen: **Abhaken beim Tun** (für seltene oder neue Abläufe) oder **am Ende kontrollieren** (für Routine).
   - **Häufige Fehler** und wie man sie vermeidet
   - **Version, Datum, nächste Überprüfung** (Standard: in 90 Tagen oder sofort, wenn sich ein Werkzeug oder Zuständigkeit ändert)
7. **Test.** Die SOP einmal **wörtlich** befolgen (durch Hermes, soweit er kann, oder durch den Nutzer/eine andere Person). Jede Stelle, an der man nachfragen oder raten musste, ist eine Lücke → ergänzen.
8. **Ablage.** Im Company OS (Bereich „Prozesse“, falls vorhanden) oder als Datei. Soll **Hermes** den Ablauf künftig regelmäßig ausführen: zusätzlich einen **Vorschlag für eine neue Prozessdatei** im Format dieses Repos schreiben (Kopf mit `titel`, `kategorie`, `stichworte` usw., letzte Schritte Quality Check und Foundation-Agent) und dem Nutzer zum Einfügen schicken. Du änderst das Repo nicht selbst.
9. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
   - [ ] Auslöser und „Fertig, wenn“ sind eindeutig und prüfbar.
   - [ ] Jeder Ist-Schritt wurde in der Reihenfolge eliminieren → vereinfachen → standardisieren → automatisieren/delegieren geprüft (Tabelle vorhanden).
   - [ ] Jeder SOP-Schritt ist eine einzelne Aktion mit Verb am Anfang; Entscheidungen als „Wenn …, dann …“.
   - [ ] Checkliste mit höchstens ca. 9 Punkten, nur Killer-Punkte.
   - [ ] Die SOP passt auf etwa eine Seite.
   - [ ] Automatisierungen nur bei stabilem Ablauf, mit Aufwand-Nutzen-Rechnung und Fehlerbenachrichtigung.
   - [ ] Nichts Geld-, Kunden- oder Lösch-Relevantes ohne Freigabeschritt.
   - [ ] Test durchgeführt; gefundene Lücken geschlossen.
   - [ ] Version, Datum und Überprüfungstermin eingetragen.
   - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
10. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: den Ablauf und den Überprüfungstermin im Gedächtnis speichern und zum Termin an die Überprüfung erinnern. Wird ein Ablauf von Hermes ausgeführt, nach den ersten 3 Durchläufen prüfen, ob die SOP noch stimmt.

## Output-Format

SOP als Markdown-Datei (bzw. Eintrag im Company OS), dazu per Telegram:

```
⚙️ Ablauf: <Name>
Auslöser: <…> | Fertig, wenn: <…> | Häufigkeit: <…>

Vorher: <Schritte, Zeit pro Durchlauf>
Nachher: <Schritte, Zeit pro Durchlauf>
Entfällt: <…> | Übernimmt Hermes: <…> | Automatisierung: <…, mit Rechnung>

SOP: <Datei im Anhang / Link Company OS>
Neue Prozessdatei für Hermes: <Vorschlag im Anhang / nicht nötig>
Nächste Überprüfung: <Datum>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
