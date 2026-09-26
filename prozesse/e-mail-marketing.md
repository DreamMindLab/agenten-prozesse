---
titel: E-Mail-Marketing
kategorie: Marketing
icon: send
beschreibung: E-Mail-Sequenzen, die verkaufen: Willkommensstrecke, Verkaufskampagne, rechtssicher und zustellbar.
status: fertig
version: 1
reihenfolge: 32
stichworte: E-Mail-Sequenz, Autoresponder, Willkommensstrecke, Welcome-Sequenz, Funnel-Mails, Lead-Nurturing, Verkaufsmails, Launch-Mails, E-Mail-Liste
---

## Ziel

Eine fertige E-Mail-**Sequenz** (mehrere zusammenhängende Mails), die neue Kontakte zu Vertrauen und Kauf führt, und die **ankommt**: im Posteingang, rechtssicher, messbar.

Für eine **einzelne** Mail an die Liste gilt der Prozess `prozesse/newsletter.md`.

Warum Sequenzen: Automatisierte Strecken bringen einen überproportionalen Teil des Umsatzes. Laut Klaviyo-Benchmark (2026) kommen rund 41 % des E-Mail-Umsatzes aus Automationen, obwohl sie nur rund 5 % der Mails ausmachen. Die erste Willkommensmail ist die meistgelesene Mail überhaupt, weil das Interesse direkt nach der Eintragung am höchsten ist.

## Benötigte Inputs

- **Sequenz-Typ:** Willkommensstrecke (nach Eintragung), Verkaufskampagne (für ein Angebot mit Zeitraum) oder Webinar-Nachfass. Standard: Willkommensstrecke.
- **Einstieg:** Wodurch kommen die Kontakte auf die Liste (Lead-Magnet, Webinar, Kauf)?
- **Angebot**, zu dem die Sequenz führt (`marke/angebot.md`).
- **E-Mail-Tool, Absender-Domain und Absendername** aus `marke/regeln.md`.
- Aus dem Repo, immer lesen: alle Dateien in `marke/`
- Aus deinem Gedächtnis: gespeicherte Regeln zu diesem Prozess.

## Werkzeuge

- Copy: Prozess `prozesse/copywriting.md` (Schritte 3–9)
- E-Mail-Tool aus `marke/regeln.md` (per API oder Oberfläche), sonst Texte zum Einfügen
- `dig`/`nslookup` für die DNS-Prüfung
- Einrichtung: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Voraussetzungen prüfen** (einmal pro Liste; Ergebnis im Gedächtnis speichern, danach nur bei Änderungen erneut). Fehlt etwas, dem Nutzer melden. **Ohne diese Punkte wird keine Sequenz aktiviert:**
   - **Zustellbarkeit:** SPF, DKIM und DMARC der Absender-Domain sind eingerichtet. Prüfen mit `dig TXT <domain>`, `dig TXT _dmarc.<domain>` und dem DKIM-Selektor des Tools. Gmail und Yahoo lehnen Massenmails ohne diese Einträge ab (seit Nov. 2025 dauerhaft bei Gmail).
   - **Abmeldung:** Abmeldelink in jeder Mail und One-Click-Abmeldung (List-Unsubscribe-Header). Das übernehmen die gängigen Tools, trotzdem prüfen.
   - **Einwilligung:** Anmeldung mit **Double-Opt-In** (in Deutschland der praktisch einzige belastbare Nachweis der Einwilligung).
   - **Impressum** im Footer jeder Mail.
   - **AVV** mit dem E-Mail-Tool abgeschlossen (die Liste enthält personenbezogene Daten; `grundlagen/deutschland.md`, Abschnitt 5).
   - **Absender:** echter Personenname + Marke (z. B. „Jan von DreamMindLab“), Antworten an eine gelesene Adresse.
3. **Ziel der Sequenz in einem Satz.** „Nach der Sequenz hat der Kontakt <Ergebnis/Handlung>.“ (z. B. „einen Erstgespräch-Termin gebucht“).
4. **Kundensprache und Einwände** aus `prozesse/copywriting.md`, Schritte 3–5. Die Bewusstseinsstufe **steigt** im Verlauf der Sequenz: Die erste Mail spricht Problem- oder Lösungsbewusste an, die letzten Mails Angebotsbewusste.
5. **Sequenz planen.** Pro Mail: Ziel, Kernaussage, CTA, Versandzeitpunkt.
   - **Willkommensstrecke** (Standard 5 Mails in 7–10 Tagen):
     1. Sofort: Lead-Magnet liefern, sagen, was kommt und wie oft, **eine Frage stellen, auf die man antworten soll** (Antworten verbessern die Zustellbarkeit und sind die ehrlichste Kennzahl).
     2. Tag 1–2: Die Geschichte bzw. das „Warum“ hinter dem Angebot. Eine Einsicht, die der Leser noch nicht hatte.
     3. Tag 3–4: Ein schneller, konkreter Erfolg (Quick Win), den der Leser sofort umsetzen kann.
     4. Tag 5–6: Beweis (echter Fall aus `marke/angebot.md`) und der größte Einwand.
     5. Tag 7–10: Das Angebot, klar und direkt, mit einem CTA.
   - **Verkaufskampagne** (Standard 4–6 Mails in 5–7 Tagen): Ankündigung → Mechanismus/Warum jetzt → Beweis → Einwände/FAQ → Letzte Chance (nur mit **echter** Frist) → Ende.
   - **Webinar-Nachfass:**
     - *Nicht teilgenommen:* Mail 1 direkt nach Ende mit Aufzeichnung, Mail 2 am nächsten Tag mit dem wichtigsten Inhalt in 3 Sätzen + Aufzeichnung. Danach wie „Zuschauer“.
     - *Zugeschaut, nicht gekauft* (ca. 5–7 Mails in 5–7 Tagen): Wie war's? + eine Frage → die häufigsten Fragen als FAQ (Einwände) → Ergebnis eines echten Kunden, der dem Leser ähnelt → ehrliche Einordnung, für wen es passt und für wen nicht → Frist-Erinnerung (nur echte Frist) → letzte Chance → Gesprächsangebot als Alternative.
   - **Optional: offene Schleifen** (Soap-Opera-Sequenz nach André Chaperon): Eine Mail endet mit einer Frage oder einem angekündigten Teil, den die nächste Mail auflöst. Gut für Willkommensstrecken mit Geschichte.
6. **Mails schreiben.** Für jede Mail:
   - **3 Betreffzeilen** (spezifisch, neugierig machend, kein Clickbait, keine Großbuchstaben-Rufe) und ein **Preheader**, der den Betreff ergänzt statt ihn zu wiederholen.
   - **Ein Ziel, ein CTA** pro Mail. Der Link darf mehrfach vorkommen, immer als Linktext („→ Checkliste öffnen“), nie als nackte URL.
   - Vorname in der ersten Zeile, falls vorhanden (Platzhalter des Tools, z. B. `{{ contact.FIRSTNAME }}`).
   - **Kein vorgetäuschter Anlass:** keine erfundenen technischen Probleme („Warst du das?“), keine künstlichen Countdowns, die nach Ablauf wieder starten, keine Zahlen zu angeblichen Teilnehmern oder Rückmeldungen, die es nicht gibt. Das ist irreführende Werbung (§ 5 UWG), treibt Spam-Beschwerden und kostet Vertrauen.
   - **Schlichter Look:** wie eine persönliche Mail (wenig Bilder, keine GIFs, kein Newsletter-Layout). In Tests von HubSpot und Litmus bekamen schlichte Text-Mails mehr Klicks als bildlastige HTML-Mails. Die Daten stammen v. a. aus B2B-Listen; bei stark visuellen Produkten testen.
   - Kurze Absätze, handytauglich, Tonalität aus `marke/tonalitaet.md`.
   - Copy-Regeln aus `prozesse/copywriting.md` (Schritte 8–9).
7. **Im Tool anlegen.** Sequenz im E-Mail-Tool als **Entwurf/inaktiv** anlegen: Auslöser (z. B. Eintragung über Formular X), Wartezeiten, Absender, Betreff/Preheader. Testmail an den Nutzer schicken. **Nicht aktivieren.** Ohne API-Zugang: alle Mails als Text in der Reihenfolge liefern.
8. **Messplan festlegen.** Die Öffnungsrate ist **nicht aussagekräftig** (Apple Mail öffnet Mails automatisch vor, Öffnungen sind dadurch stark überhöht). Gemessen werden:
   - Klickrate pro Mail
   - Antworten
   - Conversions (Termin, Kauf) aus der Sequenz
   - Abmelderate pro Mail
   - Spam-Beschwerden: unter 0,1 % halten, nie über 0,3 % (Gmail-Grenzwert)
9. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
   - [ ] Alle Voraussetzungen aus Schritt 2 sind erfüllt oder als offener Punkt gemeldet.
   - [ ] Jede Mail hat genau ein Ziel und genau einen CTA.
   - [ ] Die Sequenz führt nachvollziehbar zum Ziel aus Schritt 3 (Bewusstseinsstufe steigt, Angebot kommt nicht vor Mail 3, außer bei Verkaufskampagnen).
   - [ ] Mail 1 der Willkommensstrecke liefert den Lead-Magnet sofort und enthält eine Frage zum Antworten.
   - [ ] Jede Mail hat 3 Betreffzeilen und einen Preheader, der den Betreff nicht wiederholt.
   - [ ] Jede Mail enthält mindestens einen konkreten, nützlichen Inhalt (nicht nur „Kauf jetzt“).
   - [ ] Fristen und Knappheit nur, wenn sie echt sind; kein vorgetäuschter Anlass, keine erfundenen Zahlen oder Rückmeldungen.
   - [ ] Links als Linktext, keine nackten URLs.
   - [ ] Schlichter Look, handytauglich, keine GIFs.
   - [ ] Die Copy-Kriterien aus `prozesse/copywriting.md` (Schritt 10) sind erfüllt.
   - [ ] Sequenz ist als Entwurf angelegt, **nicht aktiviert**; Testmail verschickt.
   - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
10. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Hast du Zugriff auf die Kennzahlen, nach ca. 2 Wochen Laufzeit die Werte aus Schritt 8 pro Mail auswerten. Die Mail mit der schwächsten Klickrate oder der höchsten Abmelderate benennen und einen konkreten Verbesserungsvorschlag per Telegram schicken.

## Output-Format

Per Telegram an den Nutzer:

```
📧 Sequenz: <Typ> – <Ziel aus Schritt 3>
Mails: <Anzahl> über <Tage>

Voraussetzungen:
SPF/DKIM/DMARC: <ok / fehlt: …>
Double-Opt-In: <ok / fehlt / unbekannt>
Abmeldung + Impressum: <ok / fehlt>
AVV mit E-Mail-Tool: <ok / fehlt / unbekannt>

Mail 1 (<Zeitpunkt>): <Ziel>
Betreff: <A> / <B> / <C>
Preheader: <Text>
<Text>
…

Im Tool: <Entwurf angelegt, Link / nicht möglich, Texte oben>
Testmail: <an wen verschickt>
Messplan: Klicks, Antworten, Conversions, Abmeldungen, Spam-Beschwerden
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
