---
titel: Ad-Creative (Bild)
kategorie: Werbung
icon: image
beschreibung: Werbebilder für Meta-Anzeigen: ein eigenes Bildkonzept pro Ansatz, in allen Formaten, sicher lesbar.
status: fertig
version: 1
reihenfolge: 41
stichworte: Werbebild, Creative, Anzeigenbild, Banner, Static Ad, Bildanzeige, Ad-Grafik, Meta Creative
---

## Ziel

Fertige Werbebilder für Meta (Facebook/Instagram): pro Anzeigen-Ansatz **ein eigenes Bildkonzept**, jeweils in den nötigen Formaten, auf dem Handy lesbar und ohne verdeckte Inhalte.

Was die Daten sagen:
- **Vielfalt statt Varianten.** Metas Auslieferung (Andromeda) braucht verschiedene Ansätze. Ein Ansatz, der nur mit anderer Farbe wiederholt wird, zählt nicht als neuer Ansatz (siehe `prozesse/ad-texte.md`).
- **Bilder vs. Video.** Laut Motion (Creative-Analysen 2025) dominiert kurzes Video in der Neukundengewinnung; Bildanzeigen sind vor allem im Retargeting kosteneffizient, wo schon Interesse besteht.
- **Nativer Look schlägt Hochglanz.** Bei DTC-Marken auf Meta erzielten Creatives im Stil von Nutzer-Content („UGC-Look“) höhere Klick- und Conversion-Raten als polierte Markenbilder (Motion, 2025). Übertragbarkeit auf Dienstleistungen/B2B ist nicht belegt, deshalb beide Stile testen.
- **Wenig Text im Bild.** Die alte 20-%-Regel gibt es nicht mehr, aber viel Text senkt weiterhin die Leistung. Richtwert: **5–7 Wörter** im Bild, der Rest steht im Anzeigentext.

## Benötigte Inputs

- **Anzeigen-Ansätze und Texte** aus `prozesse/ad-texte.md` (oder zumindest: Angebot, Zielgruppe, Ansätze). Fehlen sie: erst `prozesse/ad-texte.md` Schritte 2–4 durchführen.
- **Einsatz:** Neukunden (kalt) oder Retargeting (warm).
- **Platzierungen:** Feed, Stories/Reels oder alle. Standard: alle (4:5 und 9:16).
- **Material:** Logo, Produktfotos, Screenshots, echte Kundenstimmen, Fotos vom Nutzer (falls vorhanden).
- Aus dem Repo, immer lesen: alle Dateien in `marke/`, vor allem `design.md` und `regeln.md` (Budget).
- Aus deinem Gedächtnis: gespeicherte Regeln und frühere Creative-Ergebnisse.

## Werkzeuge

- HTML/CSS-Vorlagen → PNG über Playwright + Chromium (exakte Texte, Markenlayout)
- Higgsfield API für Szenen und Bildwelten (`https://docs.higgsfield.ai`). **Nie Text im KI-Bild**, Text immer per HTML/CSS
- Einrichtung und Keys: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Inspiration aus der Praxis holen (optional, empfohlen).** In der Meta-Werbebibliothek (`https://www.facebook.com/ads/library`) Anzeigen von 3–5 Wettbewerbern bzw. Anbietern aus der Nische ansehen. Anzeigen, die **seit 45+ Tagen** laufen, sind sehr wahrscheinlich profitabel (niemand bezahlt lange für Verlierer; das ist ein Anhaltspunkt, kein Beweis). Notieren: welche **Bildtypen** (Schritt 3) dort laufen. **Übernommen wird nur das Prinzip, nie Bild, Text oder Design.**
3. **Pro Ansatz ein Bildkonzept wählen.** Jeder Ansatz aus den Ad-Texten bekommt einen passenden Bildtyp. Mindestens 3 verschiedene Bildtypen im Set:
   - **Aussage-Grafik:** eine starke Aussage groß auf Markenhintergrund (passt zu Problem, Ergebnis, Einwand)
   - **Nativer Look:** wirkt wie ein normaler Post oder eine Notiz, schlichte Gestaltung, persönlicher Ton (passt zu Identifikation, Problem)
   - **Ergebnis/Produkt:** Vorschau dessen, was man bekommt (Mockup von Checkliste, Kurs, Dashboard, Ergebnis)
   - **Vergleich:** alter Weg vs. neuer Weg, zwei Spalten (passt zu Mechanismus)
   - **Situation:** Szene aus dem Alltag der Zielgruppe (Higgsfield), mit kurzer Textzeile
   - **Kundenzitat:** nur **echte** Zitate mit Einwilligung, Name und Rolle
   Nicht erlaubt: Vorher/Nachher bei Körper, Gesundheit oder Finanzen; Text im Bild, der dem Betrachter persönliche Merkmale zuschreibt (dieselbe Regel wie in `prozesse/ad-texte.md`, Schritt 3, gilt auch für Text im Bild); nachgemachte Posts oder Nachrichten echter Personen oder Marken.
4. **Bildtext schreiben.** Max. 5–7 Wörter pro Bild. Der Bildtext ist der visuelle Hook und **ergänzt** die Überschrift der Anzeige, er wiederholt sie nicht wortgleich.
5. **Formate und sichere Zonen.**
   - **Feed 4:5:** 1080×1350 (oder 1440×1800).
   - **Stories/Reels 9:16:** 1080×1920. Oben ca. **14 %** (Profil, „Gesponsert“), unten ca. **35 %** (Button, Text) und seitlich je ca. **6 %** freihalten. Wichtiges (Text, Logo, Kernmotiv) liegt in der Mitte.
   - Beide Formate **einzeln gestalten**, nicht nur zuschneiden.
6. **Bilder erstellen.**
   - Layout als HTML/CSS mit Farben und Schriften aus `marke/design.md`. Großer Kontrast zwischen Text und Hintergrund.
   - Szenen über Higgsfield: max. 3 Versuche pro Bild, Budget aus `marke/regeln.md`, Kosten mitschreiben. Keine echten Personen, keine erkennbaren Marken. Fotorealistische Menschen oder Szenen werden als KI-Inhalt gekennzeichnet (Meta „KI-Info“, EU AI Act Art. 50).
   - Eigenes Material des Nutzers (Fotos, Screenshots) hat Vorrang vor KI-Bildern: Es ist echt und unterscheidet sich von der Konkurrenz.
   - Rendern als PNG.
7. **Kontrolle auf dem Handy.** Jedes Bild auf ca. 390 px Breite verkleinert ansehen: Ist der Text ohne Zoomen lesbar? Versteht man in 1 Sekunde, worum es geht? Für 9:16 eine Maske mit den sicheren Zonen darüberlegen und prüfen, dass nichts Wichtiges darunter liegt.
8. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
   - [ ] Jeder Ansatz hat ein eigenes Bildkonzept; im Set sind mindestens 3 verschiedene Bildtypen.
   - [ ] Max. ca. 7 Wörter Text pro Bild; auf 390 px Breite ohne Zoomen lesbar.
   - [ ] In 1 Sekunde verständlich (ein Motiv, eine Aussage).
   - [ ] 9:16: nichts Wichtiges in den gesperrten Zonen (oben 14 %, unten 35 %, seitlich 6 %).
   - [ ] Beide Formate vorhanden und jeweils eigens gestaltet.
   - [ ] Bildtext passt zum Anzeigentext und zur Landingpage (Message Match), ohne die Überschrift zu wiederholen.
   - [ ] Keine Zuschreibung persönlicher Merkmale im Bildtext; kein Vorher/Nachher bei Körper, Gesundheit, Finanzen; kein nachgemachter Post echter Personen.
   - [ ] Kein fehlerhafter Text, keine KI-Artefakte; Kundenzitate nur echt.
   - [ ] Markendesign aus `marke/design.md` eingehalten.
   - [ ] KI-Kennzeichnung vermerkt, Kosten im Budget.
   - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
9. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Liefert der Nutzer Ergebnisse, auswerten, welcher **Bildtyp** gewonnen hat (nicht nur welches Bild), und als Regel speichern.

## Output-Format

Per Telegram an den Nutzer:

```
🖼 Ad-Creatives: <Angebot> | Einsatz: <kalt / Retargeting>

Ansatz 1 – <Name> | Bildtyp: <…> | Bildtext: „<…>“
  Dateien: <name_4x5.png>, <name_9x16.png>
Ansatz 2 – …

Inspiration (Werbebibliothek): <beobachtete Bildtypen, falls recherchiert>
KI-Kennzeichnung nötig: <welche Bilder>
Kosten KI: <$>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
