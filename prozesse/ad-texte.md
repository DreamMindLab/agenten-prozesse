---
titel: Ad-Texte (Meta/Google)
kategorie: Werbung
icon: target
beschreibung: Anzeigentexte für Meta (Facebook/Instagram) und Google-Suchanzeigen: verschiedene Ansätze, richtlinienkonform, mit Zeichenlimits.
status: fertig
version: 1
reihenfolge: 40
stichworte: Anzeige, Meta Ads, Facebook Ads, Instagram Ads, Google Ads, Suchanzeige, Werbetext, Anzeigentext, Ad Copy, RSA
---

## Ziel

Fertige Anzeigentexte, die sich hochladen lassen: für **Meta** mehrere klar verschiedene Ansätze, für **Google** eine vollständige responsive Suchanzeige. Alle Texte halten die Zeichenlimits und die Werberichtlinien ein und passen zur Landingpage.

Wie die Plattformen heute auswählen:
- **Meta** („Andromeda“, seit 2025): Die Auslieferung wählt pro Person aus vielen Anzeigen die passende. Sie braucht dafür **unterschiedliche Ansätze** (andere Motive, andere Zielgruppen-Situationen, andere Formate), keine zehn Umformulierungen desselben Satzes. Praktiker-Empfehlung: ca. 10–15 inhaltlich verschiedene Anzeigen pro Kampagne, dabei Qualität vor Menge (Jon Loomer u. a.).
- **Google** (responsive Suchanzeigen): bis zu 15 Überschriften und 4 Beschreibungen, die Google kombiniert. Ähnliche Überschriften senken die Anzeigenqualität, zu viel Fixieren („Pinnen“) auch.

## Benötigte Inputs

- **Plattform:** Meta, Google oder beide.
- **Kampagnenziel und Angebot:** was beworben wird, welche Handlung (Lead, Kauf, Termin). Angebot aus `marke/angebot.md`.
- **Landingpage** (URL oder Text): Die Anzeige muss zu ihr passen (Message Match).
- **Meta:** Creatives (Bilder/Videos) vorhanden oder nicht? Falls nicht, entstehen sie über `prozesse/social-media-post.md`, `prozesse/karussell-post.md`, `prozesse/reel-kurzvideo.md` oder `prozesse/verkaufsvideo.md`, und dieser Prozess liefert die Texte dazu.
- **Google:** Keywords bzw. Suchbegriffe (vom Nutzer oder aus eigener Recherche, siehe Schritt 7).
- Aus dem Repo, immer lesen: alle Dateien in `marke/`
- Aus deinem Gedächtnis: gespeicherte Regeln und frühere Anzeigenergebnisse.

## Werkzeuge

- Copy: `prozesse/copywriting.md` (Schritte 3–9)
- Zeichen zählen **per Skript**, nicht schätzen (z. B. `python3 -c "print(len('…'))"`). Sprachmodelle verzählen sich bei Zeichen regelmäßig.
- Einrichtung: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Diagnose** mit `prozesse/copywriting.md`, Schritte 3–5: Kundensprache, dominantes Verlangen, Bewusstseinsstufe, Marktreife, Einwände. Kalte Zielgruppen (Meta) sind meist unbewusst bis problembewusst; Google-Suchende sind meist lösungsbewusst, weil sie aktiv suchen.
3. **Richtlinien-Check vorab (Meta).** Die häufigste Ablehnungsursache ist die Richtlinie zu **persönlichen Merkmalen**: Eine Anzeige darf nicht behaupten oder andeuten, dass du etwas Persönliches über den Betrachter weißt (Gesundheit, Finanzen, Alter, Religion, Herkunft, sexuelle Orientierung usw.).
   - Nicht erlaubt: „Hast du Schulden?“, „Du bist über 50 und …“, „Deine Angststörung …“
   - Erlaubt: „So bekommen Selbstständige ihre Finanzen in den Griff“, „Für alle ab 50, die …“ (beschreibt das Angebot, nicht die Person)
   - Test für jeden Satz: Beschreibt er das Angebot, oder behauptet er etwas über die Person, die ihn liest?
   - Außerdem: keine unbelegten Heilsversprechen oder Einkommensversprechen, keine Vorher-Nachher-Bilder bei Gesundheit/Körper. Anzeigen zu **Jobs, Wohnen oder Krediten** laufen in einer „Sonderkategorie“ mit eingeschränktem Targeting. Anzeigen zu **Politik, Wahlen oder gesellschaftlichen Themen** schalten Meta und Google in der EU seit Oktober 2025 gar nicht mehr. Beides dem Nutzer vorher sagen.
   - Deutsches Werberecht: keine Spitzenstellung („Nr. 1“, „der Beste“) und keine Einkommensversprechen ohne Nachweis (`grundlagen/deutschland.md`, Abschnitt 3).
4. **Meta: 5 Ansätze festlegen.** Jeder Ansatz ist eine eigene Idee, nicht eine Umformulierung. Standard: 5 der folgenden 6, Beweis nur mit echtem Beleg (anpassen, wo Belege fehlen):
   - **Problem:** das Problem in Kundensprache (ohne persönliche Zuschreibung, siehe Schritt 3)
   - **Ergebnis:** der Zustand danach, konkret und überprüfbar
   - **Mechanismus:** warum dieser Weg anders funktioniert
   - **Einwand:** der größte Zweifel, direkt aufgegriffen
   - **Identifikation:** eine bestimmte Situation oder Rolle („Für Coaches, die …“)
   - **Beweis:** nur mit echtem Ergebnis oder echter Stimme aus `marke/angebot.md`, sonst weglassen
5. **Meta: Texte pro Ansatz schreiben.**
   - **Primärtext:** Die ersten **125 Zeichen** müssen allein funktionieren (danach wird mit „Mehr“ abgeschnitten, die meisten klicken nicht). Hook + Nutzen + Handlung vorne. Längere Version darf folgen. Für **Reels/Stories**: eine Kurzversion mit ca. 40–70 Zeichen.
   - **Überschrift:** ideal max. **27 Zeichen** (auf kleinen Handys sichtbar), höchstens 40.
   - **Beschreibung** (optional): max. ca. 25–30 Zeichen.
   - **CTA-Button:** passend zur Handlung (z. B. „Mehr dazu“, „Registrieren“, „Jetzt buchen“).
   - Pro Ansatz 2 Primärtext-Varianten (eine kurz, eine länger) und 3 Überschriften.
   - Bei Video-Creatives zusätzlich: der gesprochene/gezeigte Hook der ersten 3 Sekunden muss zum Text passen.
6. **Meta: Messplan mitliefern.** Welche Werte der Nutzer nach dem Start beobachten sollte (Orientierungswerte aus Praktiker-Auswertungen, keine Garantie):
   - **Hook-Rate** (3-Sekunden-Views ÷ Impressionen, nur Video): unter 25 % = Einstieg neu bauen, 30–40 % = gut
   - **Hold-Rate** (ThruPlays ÷ 3-Sekunden-Views): unter ca. 18 % = der Mittelteil verliert die Leute
   - Link-CTR, Kosten pro Ergebnis
7. **Google: Suchbegriffe klären.** Keywords vom Nutzer übernehmen oder recherchieren: Wie suchen Leute nach der Lösung (Kundensprache aus Schritt 2, Autovervollständigung der Suche, verwandte Suchen)? 1 Anzeigengruppe = 1 eng zusammenhängendes Keyword-Thema.
8. **Google: responsive Suchanzeige schreiben.**
   - **15 Überschriften, je max. 30 Zeichen**, bewusst gemischt: 3–4 mit dem Keyword, 2–3 Nutzen, 2 Mechanismus/Besonderheit, 1–2 Beweis (nur echt), 1–2 Angebot/Preis/Konditionen, 1–2 Handlungsaufforderung, 1 Einwand. **Keine zwei Überschriften mit fast gleicher Aussage.**
   - **4 Beschreibungen, je max. 90 Zeichen**, jede mit eigenem Schwerpunkt (Nutzen, Ablauf, Beweis, Handlung).
   - **Pinnen nur sparsam:** höchstens eine Keyword-Überschrift auf Position 1 fixieren, dann 2–3 Alternativen an dieselbe Position, damit Google weiter testen kann.
   - Jede Überschrift muss in **jeder** Kombination mit den anderen Sinn ergeben (Google mischt sie).
   - Google-Regeln: keine Ausrufezeichen in Überschriften, keine Großbuchstaben-Wörter zur Betonung, keine fremden Markennamen ohne Erlaubnis.
9. **Zeichen prüfen.** Jeden Text per Skript zählen, Überschreitungen kürzen. Ergebnis als Tabelle mit Zeichenzahl.
10. **Message Match prüfen.** Anzeige und Landingpage nebeneinander: Findet sich das Versprechen der Anzeige in der Headline der Landingpage wieder? Wenn nicht: Anzeige anpassen oder dem Nutzer eine Headline-Änderung der Landingpage vorschlagen.
11. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
    - [ ] Meta: mindestens 4 inhaltlich verschiedene Ansätze (nicht nur umformuliert; Test: Würde jeder Ansatz eine andere Person ansprechen?).
    - [ ] Meta: kein Satz schreibt dem Betrachter ein persönliches Merkmal zu (Test aus Schritt 3 für jeden Satz).
    - [ ] Meta: Die ersten 125 Zeichen jedes Primärtexts funktionieren allein; Überschriften max. 40 Zeichen (Ziel 27).
    - [ ] Google: 15 Überschriften ≤ 30 Zeichen, 4 Beschreibungen ≤ 90 Zeichen, **per Skript gezählt**.
    - [ ] Google: keine zwei Überschriften mit gleicher Aussage; mindestens 3 enthalten das Keyword.
    - [ ] Google: höchstens eine Position gepinnt, mit Alternativen.
    - [ ] Kein unbelegtes Versprechen (Ergebnis, Einkommen, Gesundheit); Beweis-Ansätze nur mit echten Belegen.
    - [ ] Message Match zur Landingpage gegeben.
    - [ ] Die Copy-Kriterien aus `prozesse/copywriting.md` (Schritt 10) sind erfüllt.
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
12. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Liefert der Nutzer Ergebnisse (nach ca. 7 Tagen oder genug Impressionen), pro Ansatz auswerten, welcher gewonnen hat, und als Regel speichern (z. B. „Bei Zielgruppe X gewinnt der Einwand-Ansatz“). Wurde eine Anzeige abgelehnt: Grund speichern und das Kriterium im Richtlinien-Check als Prozess-Vorschlag melden.

## Output-Format

Per Telegram an den Nutzer:

```
🎯 Ad-Texte: <Angebot> → <Landingpage>
Diagnose: Bewusstsein <Stufe> | Marktreife <Stufe>

META (<Anzahl> Ansätze)
Ansatz 1 – <Name>
Primärtext kurz (<Zeichen>): <…>
Primärtext lang: <…>
Überschriften: <…> (<Z>) / <…> (<Z>) / <…> (<Z>)
CTA-Button: <…>
…
Hinweise: <Sonderkategorie ja/nein, KI-Kennzeichnung der Creatives>

GOOGLE (Anzeigengruppe: <Keyword-Thema>)
Überschriften: <Tabelle: Nr | Text | Zeichen | Pin>
Beschreibungen: <Tabelle: Nr | Text | Zeichen>

Messplan: Hook-Rate, Hold-Rate, CTR, Kosten pro Ergebnis
Message Match: <ok / Vorschlag für Landingpage-Headline>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```

Zusätzlich als CSV-Datei für den Upload.
