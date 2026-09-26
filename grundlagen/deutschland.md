---
titel: Deutschland-Standards
beschreibung: Deutsche Sprache, deutsches Werberecht und Datenschutz: Längen und Sprechtempo, Quellen für Kundensprache, belegbare Werbeaussagen, Werbekennzeichnung, US-Werkzeuge.
---

Viele Methoden und Kennzahlen in den Prozessen stammen aus den USA. Die Denkmodelle (Bewusstseinsstufen, Jobs-to-be-Done, Checklisten) und die Plattform-Mechanik (Algorithmen, Zeichenlimits, Bildformate) gelten auch hier. Angepasst werden müssen **Sprache, Recht und Datenschutz**. Markt und Rechtsraum ist **Deutschland**. Wo ein Prozess auf diese Datei verweist, gilt der Abschnitt an genau dieser Stelle.

Das ist eine Einordnung zur Orientierung, keine Rechtsberatung. Bei Zweifeln: Fall markieren und dem Nutzer empfehlen, einen Anwalt oder die IHK zu fragen.

## 1. Längen auf Deutsch

Deutsche Wörter sind im Schnitt länger als englische (rund 6,4 gegenüber 5,2 Buchstaben pro Wort in Vergleichskorpora; Duden-Korpus: rund 6 Buchstaben). Übersetzte Texte werden meist 30–40 % länger, kurze Texte wie Buttons oder Überschriften oft noch mehr (Lokalisierungs-Richtwerte). Wortlimits aus englischen Quellen führen auf Deutsch deshalb zu zu viel Text.

- **Textflächen (Bild, Slide, Thumbnail, Overlay):** Wo ein Prozess ein Wortlimit **und** ein Zeichenlimit nennt, gilt das **Zeichenlimit** (per Skript zählen). Es entspricht der Fläche, für die das englische Wortlimit gedacht war (ca. 6 Zeichen pro englischem Wort inkl. Leerzeichen). Lange Komposita auflösen oder ersetzen („Kleinunternehmerregelung“ → „Regel für Kleinunternehmer“).
- **Plattform-Zeichenlimits** (Google 30/90, Meta 125/27/40, YouTube-Titel 60, Meta-Beschreibung 160) gelten unverändert. Auf Deutsch passen weniger Wörter hinein: Verben statt Nominalstil, keine Füllwörter.
- **Untertitel und Text-Overlays in Videos:** max. **42 Zeichen pro Zeile**, Lesetempo max. **ca. 15 Zeichen pro Sekunde** (Netflix-Richtlinie für deutsche Untertitel: 42 Zeichen, 17 Zeichen/Sek. für Erwachsene; 15 als Puffer für Social-Media-Tempo).
- **Sprechtempo:** Deutsche Profisprecher liegen bei rund **125–150 Wörtern pro Minute**, im Alltag eher darunter (Sprecher-Rechner und Sprechwissenschaft). Startwerte: **Kurzvideo 2 Wörter pro Sekunde**, **Langvideo/VSL/Podcast 120–140 Wörter pro Minute**. Nach der ersten Vertonung mit einer Stimme das echte Tempo messen (Wörter ÷ Sekunden laut `ffprobe`) und im Gedächtnis speichern. Ab dann gilt der gemessene Wert.
- **Satzlänge:** Richtwert der dpa: **9 Wörter** optimal verständlich, **20** Obergrenze des Erwünschten, 30 Obergrenze des Erlaubten. Die Prozesse (max. 15, nie über 20) liegen darin.
- **Lesbarkeit messen:** Englische Schulstufen-Formeln (Flesch-Kincaid) passen nicht auf Deutsch. Für deutsche Texte gibt es den Flesch-Index nach Amstad und die Wiener Sachtextformel. Nutze sie höchstens als Warnsignal (sehr lange Sätze, viele lange Wörter), nicht als Ziel: Sie messen nur die Form, und für deutsche Werbetexte ist kein Zusammenhang mit der Conversion belegt. Maßgeblich bleibt der Persona-Test (`grundlagen/themen-und-verstaendlichkeit.md`, Baustein 4).

## 2. Kundensprache aus deutschsprachigen Quellen

Die Methode „exakte Worte der Zielgruppe“ funktioniert nur mit Originalzitaten. Ein übersetztes englisches Zitat ist keine Kundensprache.

- **Zuerst deutschsprachige Quellen:** Google-Bewertungen, Amazon.de-Rezensionen (Bücher, Kurse, Tools zum Thema), Trustpilot und ProvenExpert (Dienstleister), gutefrage.net (bis zu 30 Mio. Nutzer pro Monat), deutschsprachige Subreddits (Reddit wächst in Deutschland stark, v. a. bei 18- bis 34-Jährigen), Facebook-Gruppen, Kommentare unter deutschen YouTube-Videos und Instagram-Posts, Fachforen und Branchen-Communities.
- **Englische Quellen nur ergänzend**, um Themen und Einwände zu finden, nie als wörtliches Zitat im Text.
- Zu jedem Zitat Quelle und Datum notieren. Zitate aus nicht öffentlichen Gruppen nur für die Analyse, nie veröffentlichen.

## 3. Werbeaussagen: belegbar statt groß

Viele Frameworks in den Prozessen stammen aus dem US-Direktmarketing (Schwartz, Hormozi, Brunson). Ob deutsche Kunden Werbung skeptischer sehen, ist nicht eindeutig belegt: Kantar sieht eine besonders kritische Haltung, eine ältere Nielsen-Studie das Gegenteil. Eindeutig ist dagegen das Recht. **In Deutschland muss der Werbende seine Aussagen beweisen können** (§ 5 UWG, irreführende Werbung). Daraus folgt:

- **Versprechen nur so groß, wie du sie belegen kannst.** Belege: `marke/angebot.md`, echte Kundenergebnisse, Zahlen des Nutzers.
- **Spitzenstellung** („Nr. 1“, „der Beste“, „einziger Anbieter“, „Marktführer“) nur mit aktuellem, überprüfbarem Nachweis. Sonst weglassen.
- **Einkommens- und Erfolgsversprechen** („5.000 € im Monat“, „in 30 Tagen zu …“) nur mit Beleg, als Einzelfall gekennzeichnet und ohne Garantie-Eindruck. Die Verbraucherzentralen gehen gezielt gegen Coaching-Angebote mit solchen Versprechen vor.
- **Kundenbewertungen und Testimonials:** nur echte (gefälschte oder gekaufte Bewertungen sind nach UWG verboten). Werden Bewertungen auf einer Seite gezeigt, muss dort **gut sichtbar** stehen, **ob und wie** geprüft wird, dass sie von echten Kunden stammen (§ 5b Abs. 3 UWG). Findet keine Prüfung statt, steht genau das dort.
- **Preise:** kein „statt X €“, der nie verlangt wurde; Fristen und Knappheit nur, wenn echt.
- **Garantien** („Geld zurück“, „Zufriedenheitsgarantie“): Wer damit wirbt, nennt die Bedingungen klar (Dauer, wie man sie geltend macht, Garantiegeber mit Anschrift) und weist darauf hin, dass die gesetzlichen Rechte unberührt bleiben. Für Waren schreibt das § 479 BGB ausdrücklich vor, auch für Zufriedenheitsgarantien; ein Verstoß kann über § 3a UWG abgemahnt werden. Bei digitalen Produkten und Dienstleistungen dieselben Angaben machen (Einordnung, keine Rechtsberatung). Eine Garantie kommt zum 14-tägigen Widerrufsrecht von Verbrauchern hinzu, sie ersetzt es nicht.
- **Kurse, Mentoring, Coaching-Programme (Fernunterrichtsschutzgesetz):** Ein bezahltes Lernprogramm, das überwiegend aus Aufzeichnungen besteht (asynchron) und bei dem Teilnehmer Fragen stellen dürfen, kann Fernunterricht sein. Dann braucht es eine Zulassung der ZFU, **auch wenn die Kunden Unternehmer sind**; ohne Zulassung ist der Vertrag nichtig und Kunden können ihr Geld zurückfordern (BGH, 12. 6. 2025, III ZR 109/24). Überwiegend live (synchron) ohne Aufzeichnungen als Kern fällt nicht darunter (BGH, 5. 2. 2026, III ZR 137/25). Bei solchen Angeboten weist Hermes darauf hin und empfiehlt eine anwaltliche Prüfung, bevor verkauft wird.
- **Ton:** Wie stark zugespitzt wird, legt `marke/tonalitaet.md` fest (Feld „Zuspitzung“). Ist dort nichts eingetragen: **sachlich-pointiert**, keine Hype-Wörter, Nutzen mit Zahl statt Superlativ.

## 4. Werbung kennzeichnen

Werbung muss als Werbung erkennbar sein, wenn der kommerzielle Zweck nicht schon aus den Umständen folgt (§ 5a Abs. 4 UWG; Leitfaden der Medienanstalten zur Werbekennzeichnung).

- **Eigenwerbung** (der Nutzer bewirbt sein eigenes Angebot auf seinem erkennbar geschäftlichen Account): keine Kennzeichnung nötig.
- **Fremdwerbung mit Gegenleistung:** kennzeichnen. Gegenleistung ist nicht nur Geld, sondern z. B. ein Produktgeschenk, eine Provision, eine Einladung oder eine **gegenseitige Empfehlung** (Newsletter-Tausch, Collab gegen Collab). Gibt es eine Absprache mit Gegenleistung, ist es Werbung.
- **Wie:** „Werbung“ oder „Anzeige“ **am Anfang** der Caption bzw. des Beitrags, bei Videos und Stories zusätzlich gut sichtbar im Bild. **Nicht ausreichend:** „#ad“, „sponsored“, „Kooperation“, „in Zusammenarbeit mit“ oder andere englische Begriffe. Plattform-Labels wie „Bezahlte Partnerschaft“ nur **zusätzlich**.
- **Affiliate-Links** (Provision): als „Werbelink“ oder „Anzeige“ direkt am Link kennzeichnen. Ein Sternchen mit Erklärung ist gerichtlich nicht abschließend geklärt.
- Keine Kennzeichnung auf Beiträgen, die keine Werbung sind. Das verwässert die Kennzeichnung.

## 5. Datenschutz bei Werkzeugen

Mehrere Werkzeuge sitzen in den USA (ElevenLabs, HeyGen, Higgsfield, viele E-Mail-Tools). Solange nur Texte, Prompts und die Stimme bzw. das Gesicht des Nutzers selbst mit seiner Zustimmung verarbeitet werden, ist das unkritisch. Heikel wird es bei **personenbezogenen Daten Dritter** (Kunden, Leads, Interviewpartner, Gäste).

- **Vor dem ersten Einsatz eines Werkzeugs mit Daten Dritter** prüfen und das Ergebnis im Gedächtnis speichern:
  1. **Auftragsverarbeitungsvertrag (AVV/DPA, Art. 28 DSGVO)** mit dem Anbieter abgeschlossen? Der Nutzer schließt ihn ab, du prüfst nur, ob er vorliegt (`marke/regeln.md`).
  2. **Übermittlung in die USA abgesichert?** Anbieter unter dem EU-US Data Privacy Framework zertifiziert **und** Standardvertragsklauseln (SCC) als Rückfallebene. Das Data Privacy Framework gilt, liegt aber zur Überprüfung beim EuGH (Rechtsmittel C-703/25 P). Deshalb nicht allein darauf bauen.
  3. **Modelltraining mit den Daten** vertraglich ausgeschlossen bzw. abgeschaltet?
- **Stand der Werkzeuge (bei Einrichtung erneut prüfen):**
  - **ElevenLabs:** öffentlicher AVV, DPF-zertifiziert, Zero-Retention-Modus verfügbar, EU-Datenhaltung nur im Enterprise-Tarif.
  - **HeyGen:** DPF-zertifiziert, AVV laut Anbieter für Enterprise-Kunden auf Anfrage. Deshalb nur für den Avatar des Nutzers selbst, nie mit Material Dritter.
  - **Higgsfield:** tritt laut Datenschutzerklärung als eigener Verantwortlicher auf, kein öffentlicher AVV gefunden. **Keine personenbezogenen Daten Dritter**, nur Prompts ohne echte Personen (entspricht ohnehin den Prozessen).
  - **E-Mail-Tool:** AVV ist Pflicht, weil die Liste personenbezogene Daten enthält. Anbieter mit Sitz in der EU (z. B. Brevo) vereinfachen die Prüfung.
- **Datensparsam arbeiten:** Namen, E-Mail-Adressen und Firmennamen vor der Verarbeitung in KI-Werkzeugen entfernen oder ersetzen, wenn sie für die Aufgabe nicht nötig sind (z. B. Interview-Transkripte für die Auswertung).
- **Gespräche aufzeichnen nur mit Einwilligung aller Beteiligten.** Wer nicht öffentlich gesprochene Worte ohne Einwilligung aufnimmt, macht sich strafbar (§ 201 StGB), und die DSGVO verlangt ebenfalls eine Einwilligung. Vor jeder Aufnahme (Kundeninterview, Podcast-Gast, Bildschirmaufnahme mit Kunden) die Einwilligung einholen und dokumentieren, auch für die Transkription mit einem KI-Werkzeug.
- Weiterführend: Orientierungshilfe „KI und Datenschutz“ der Datenschutzkonferenz (Mai 2024).

## 6. Zahlen und Quellen

- **US-Daten als solche kennzeichnen**, wenn sie in einem Output als Beleg dienen („US-Daten, für Deutschland nicht separat belegt“).
- **Deutsche Quellen bevorzugen**, wo es sie gibt: ARD/ZDF-Medienstudie (Mediennutzung, Podcasts), Bitkom, Statista, Destatis, IHK-Merkblätter (Recht).
- **Werbeplattformen in der EU:** Meta und Google schalten seit Oktober 2025 in der EU keine Anzeigen zu Politik, Wahlen und gesellschaftlichen Themen mehr (EU-Verordnung TTPA).

## Anderer Markt

Soll englischer Content für den US-Markt entstehen, gilt zusätzlich `grundlagen/us-markt.md`. Dort steht nur, was sich gegenüber dieser Datei ändert. Einiges bleibt auch dann (DSGVO, EU AI Act, Impressum, deutsche Buchhaltung), weil der Nutzer ein deutsches Unternehmen ist.
