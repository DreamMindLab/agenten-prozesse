# HANDOFF — agenten-prozesse

## Notizen (manuell)

### 2026-09-26 (2) — Videoschnitt nach Nate Herks Video „Opus 5.5 Just Changed Video Editing Forever“ (Branch claude/nifty-cray-ipu2s4)

**Stand:** Jan hat das Transkript des Videos geschickt (US-Kontext). Abgleich mit Reel, YouTube, Verkaufsvideo und Podcast: Nates fünf Schritte (transkribieren, schneiden, Beats planen, Skills pflegen, selbst prüfen) waren größtenteils schon drin, weil die Prozesse sein `hyperframes-student-kit` nutzen. Fünf Lücken geschlossen. **Noch nicht nach `main` gemergt** (Jans Freigabe offen), Vorschau nicht neu veröffentlicht, nicht mit Hermes erprobt.

**Neu:** `grundlagen/video-schnitt.md` mit Abschnitt 1 Transkription lokal auf Deutsch, 2 Beat-Plan mit Regie-Notizen, 3 Kit-Skill-Zuordnung, 4 Videostil aus Vorbild, 5 Material und Ton, 6 Selbstprüfung (max. 3 Runden, Ton des Entwurfs neu transkribieren und vergleichen).

**Geändert:**
- `grundlagen/deutschland.md`: neuer Abschnitt 7 (fremde Marken, Logos, Fotos, Screenshots, Musik; § 23 MarkenG, §§ 51, 72 UrhG, § 22 KUG); Abschnitt 5: Stimmen Dritter lokal transkribieren.
- `grundlagen/einrichtung.md`: Kit vor jedem Videoauftrag `git pull`, neue Skills, Whisper-Hinweise, `video-use` nur Ausweichlösung (schickt Audio an ElevenLabs).
- `marke/design.md`: neuer Abschnitt „Videostil“ (leere Felder).
- Reel v4, YouTube v3, Verkaufsvideo v2, Podcast v2: Verweise, Input „Regie-Notizen“, Beat-Plan, Prüfpunkte, Output-Zeilen. Keine Schritte eingefügt, Nummern unverändert.

**Wichtigster Befund:** Laut Kit-Doku **übersetzen** Whisper-Modelle mit `.en` deutsche Sprache ins Englische; `small.en` ist der Standard in den Kit-Beispielen, `edit-video` nutzt standardmäßig ElevenLabs. Beides ist jetzt übersteuert (`--model medium --language de`).

**Verworfen:** „One-Shot“ als Anspruch (Nate räumt selbst Nacharbeit ein; das Video ist auch Werbung für seine Community); US-Tempo und Show-Effekte als Regel; Event-Recap und Showreel als eigene Prozesse; fremde Logos und Produktbilder als Blickfang (in DE riskant); Kie.ai als Werkzeug (Higgsfield bleibt).

**Landminen:**
- Kit-Skills ändern sich laufend (Stand Kit-Commit vom 25. 9. 2026). Abschnitt 3 nennt deshalb einen Ausweg („nächstliegenden Skill nehmen und vermerken“).
- `DESIGN.ais-example.md` und `assets/AIS …` im Kit sind Nates Marke; Abschnitt 3 verbietet sie.
- Whisper-Qualität auf Deutsch (Füllwörter werden oft weggelassen) nicht getestet; ElevenLabs Scribe bleibt als Ausweichlösung nur für Aufnahmen, auf denen nur Jan spricht.
- Abschnitt 7 in `deutschland.md` ist Einordnung, keine Rechtsberatung; Logo-Nutzung ist der unsicherste Punkt.
- In dieser Session hat der Berechtigungsfilter Änderungen an `prozesse/` und `marke/` zunächst blockiert (vermutlich wegen der Regel „Ändere dieses Repo nicht“ in `AGENTS.md`, die für Hermes gilt). Nach Jans ausdrücklicher Wiederholung ging es.

**Nachtrag, gleiche Session:**
- **Fertige Aufnahme** (Jan schickt ein Video ohne vorheriges Skript): Reel Schritt 1 und YouTube Schritt 1 leiten Hauptfrage, Openings, Schnittliste bzw. Kapitel aus dem Transkript ab, statt ein neues Skript zu schreiben. Kein hinzuerfundener gesprochener Satz; fehlt ein tragfähiger Einstieg, schlägt Hermes einen Satz zum Nachaufnehmen vor. Reel: bei Aufnahmen über ca. 90 s bis zu 3 Reels vorschlagen.
- **KI-Muster-Prüfung** in `grundlagen/qualitaet-und-lernen.md` (12 Muster, aus dem `humanizer`-Skill bzw. Wikipedia „Signs of AI writing“ auf Deutsch übertragen), als hartes Kriterium für jeden Text. Gedankenstrich und deutsche Anführungszeichen ausdrücklich ausgenommen.
- Harte Kriterien nennen jetzt auch `deutschland.md`, Abschnitt 7.

**Nächster Schritt:** unverändert: Hermes „Positionierung“ geben. Für Video: beim ersten Reel Weg A prüfen, ob Whisper `medium` für Jans Aufnahmen reicht, und ein Vorbild-Video für den Videostil schicken.

### 2026-09-26 — Deutschland-Anpassung, US-Modus, Dan-Koe-Methoden, zwei neue Prozesse (main · 10ddc59)

**Stand:** 22 Prozesse fertig. `main` und `claude/stoic-albattani-syybqn` sind gleich (Fast-Forward). Drei Arbeitspakete an einem Tag:
1. **Deutschland** als Markt und Rechtsraum (Jan: „erstmal nur Deutschland“), recherchiert nach dem Meta-Learning-Skill (Modus A, rund 45 Suchen mit Gegenrecherche).
2. **US-Modus** als Vorrat für englischen Content (nur Abweichungen).
3. **Sechs Eden-Skills von Dan Koe** geprüft und eingearbeitet. Ergebnis: nicht US-spezifisch, sondern an Eden gebunden. Die Methoden sind übertragbar, deshalb keine US-Prozesse, sondern 2 neue Prozesse plus Integrationen. **Jan will Eden nicht nutzen**: Eden ist nirgends Werkzeug, nur Quelle. Alles auf Deutsch in eigenen Worten, Quelle jeweils genannt.

**Nicht mit Hermes erprobt.** Vorschau neu veröffentlicht: https://claude.ai/artifact/S4Keh5XEyt5ufGWLXi6pEu (Version 3, Stand 3469145).

**Neue Dateien:**
- `grundlagen/deutschland.md`: 1 Längen und Sprechtempo, 2 deutschsprachige Kundensprache, 3 belegbare Werbeaussagen (inkl. Garantien und Fernunterrichtsschutzgesetz), 4 Werbekennzeichnung, 5 Datenschutz bei US-Werkzeugen, 6 Zahlen und Quellen. `AGENTS.md` Schritt 4 liest sie immer.
- `grundlagen/us-markt.md`: nur bei ausdrücklichem US-Auftrag (Regel in `AGENTS.md`). Abschnitte 0–7, Tabelle pro Prozess; Abschnitt 7 = X, Threads, Substack Notes und englische Stilregeln.
- `grundlagen/langform-interview.md`: Interview mit Stopps, Stresstest, 6 Struktur-Routen, Verpackung, Gliederung. **Nur wenn Jan es anspricht** (sein ausdrücklicher Wunsch); sonst laufen YouTube, Newsletter, Blog, Podcast automatisch wie bisher. Die vier Prozesse haben dazu je eine Zeile unter „Benötigte Inputs“.
- `prozesse/positionierung.md` (v1, Reihenfolge 57): Interview mit 6 Fragen, Recherche (Ausreißer, Swipe-File ohne Aggregatoren), Strategie-Dokument (Themenbaum, zwei Pole, erste 5 Hooks, Geldseite ohne Einkommensversprechen), Entwürfe für `marke/zielgruppe.md`, `tonalitaet.md`, `angebot.md`.
- `prozesse/angebot-entwickeln.md` (v1, Reihenfolge 58): Beratung mit einer Frage pro Nachricht, erstes Produkt (4 Möglichkeiten, Entscheidungsregeln), Diagnose, Wertgleichung (Hormozi), Bestandteile, Mechanismus, Garantie, Preis mit Rechnung, Blueprint mit (Vorschlag)/(belegen: …), Entwurf für `marke/angebot.md`. Recherche per Websuche und Meta-Werbebibliothek.
- Beide neuen Prozesse sind vom Startcheck „Marke unvollständig“ ausgenommen; die Startcheck-Nachricht bietet „Positionierung“ und „Angebot“ als Antwort an.

**Geänderte Inhalte:**
- **Längen:** Zeichen- statt Wortlimits auf Textflächen (Werbebild ca. 40, Karussell Slide 1 ca. 70 / Mehrwert ca. 150, Thumbnail ca. 25, Overlay ca. 35, LP-Headline ca. 70, Betreff ca. 40). Sprechtempo: Kurzvideo 2 Wörter/Sek., Langvideo 120–140 WpM als Startwert, danach gemessen. Untertitel 42 Zeichen/Zeile, ca. 15 Zeichen/Sek.
- **Recht:** Kundensprache nur aus deutschsprachigen Originalen; Werbeaussagen nur bis zur Belegbarkeit; § 5b Abs. 3 UWG in Landingpage; Kennzeichnung „Werbung“/„Anzeige“ bei Gegenleistung; AVV vor Daten Dritter; § 201 StGB bei Aufnahmen; Garantie-Pflichtangaben; FernUSG (BGH 12. 6. 2025, III ZR 109/24; 5. 2. 2026, III ZR 137/25).
- **Zahlen:** ARD/ZDF und Bitkom statt Edison; Empfehlungsstudie korrigiert; Unbounce als US-Daten markiert; keine politischen Anzeigen von Meta/Google in der EU.
- **`grundlagen/themen-und-verstaendlichkeit.md`:** Baustein 2 mit Satzgerüst und „nie 8+ Wörter am Stück“; Baustein 5 mit Gewinner-Maß (2× / 3× eigener Durchschnitt); neu Baustein 6 (Winkel, Einstiegs- und Schlussfamilien, 11 Formen, Abwechslung) und 7 (Gewinner weiterentwickeln, Themenliste). Winkelwahl hält den Ablauf nicht an.
- **`30-tage-contentplan` v2:** Schritt 6 Werbe-Ebene (Kongruenz-Satz, Kommentar- und Newsletter-Hinweise, 5 Winkel pro Woche, Werbe-Protokoll mit Streich-/Verdoppel-Regel) und **Wochenmodus** (Vorwoche bewerten, ≥ 10 Ideen mit Herkunft, Jan wählt). Nur eigenständige Werbe-Posts zählen zum 10–20-%-Verkaufsanteil.
- **Post, Karussell, Reel v3:** Winkel vor Hook; Post mit Werbe-Formaten (Standard, Geschichte, Einwand, Beweis) und Kommentar-Hinweis. **Copywriting v3:** 6 Einstiegsarten, Beweis-Rangfolge, zwei zusätzliche Headline-Tests.
- **`marke/`:** Feld „Zuspitzung“ (`tonalitaet.md`), Zeile „AVV abgeschlossen mit“ (`regeln.md`), Abschnitt „Angebots-Details“ (`angebot.md`).
- Neues hartes Kriterium in `grundlagen/qualitaet-und-lernen.md`: Deutschland-Standards eingehalten.

**Verworfen:**
- „Deutsche sind werbeskeptischer“ als Regel (Kantar ja, Nielsen nein); stattdessen Beweislast nach § 5 UWG.
- „Reddit ist in Deutschland klein“ (meine erste Einschätzung): falsch.
- Lesbarkeitsindex als Ziel (nur Warnsignal). Österreich/Schweiz (auf Jans Wunsch).
- Eigene US-Prozesse aus den Dan-Koe-Skills: wären Kopien der deutschen und würden auseinanderlaufen.
- Long-Form Outliner und Marketing Strategist als eigene Prozesse: Jan hat zu Recht angemerkt, dass das Content bzw. dessen Vorstufe ist.
- Eden: Jan will es nicht; ob es deutsche Posts abdeckt, war ohnehin ungeklärt.
- „No em dashes“ für Deutsch: Der Gedankenstrich ist im Deutschen normale Typografie.

**Offene Fragen an Jan:**
- `marke/zielgruppe.md`, `angebot.md`, `tonalitaet.md` sind weiterhin leer. Schnellster Weg: Hermes „Positionierung“, danach „Angebot“ geben; beide liefern fertige Entwürfe.
- Feld „Zuspitzung“ ausfüllen; AVVs abschließen (E-Mail-Tool, ElevenLabs) und in `marke/regeln.md` eintragen.
- US-Modus: vor erstem bezahlten US-Einsatz anwaltlich prüfen lassen; `marke/us/` anlegen.
- Aus früheren Sessions weiter offen: Company-OS-Aufgaben ja/nein, Budget-Standards, Reverse Charge, Lexware-Tarif (siehe Notiz vom 25. 9.).

**Landminen:**
- Querverweise mit Nummern: „`grundlagen/deutschland.md`, Abschnitt N“ (viele Prozesse), Baustein 6 und 7 (Post, Karussell, Reel, Contentplan, Positionierung), Contentplan-Schritte (Werbe-Ebene 6, Rhythmus 10, QC 12, Foundation 13; der Wochenmodus verweist darauf), Einstiegsschritte in `langform-interview.md` (YouTube 4, Newsletter 5, Blog 6, Podcast 5). Beim Umnummerieren mit `grep` prüfen.
- Rechtsstand mit Verfallsdatum: Data Privacy Framework (EuGH C-703/25 P anhängig), FTC Earnings Claim Rule (nur vorgeschlagen), FernUSG-Rechtsprechung (zwei BGH-Urteile in acht Monaten), Werkzeug-Status ElevenLabs/HeyGen/Higgsfield (Stand Sept. 2026). § 479 BGB auf digitale Produkte ist als Einordnung formuliert, nicht als gesicherte Rechtslage.
- Leitfaden der Medienanstalten war im Container nicht abrufbar; Inhalt über Sekundärquellen belegt.

- **Fertig:** alles oben; `INDEX.md` konsistent; nach `main` gemergt (Fast-Forward) und gepusht; Vorschau Version 3 veröffentlicht.
- **Bewusst offen:** `marke/`-Inhalte (nur Jan); Eden.
- **Nicht testbar:** Ob Hermes die Prozesse befolgt (kein Hermes-Zugang). Ob Hermes die Meta-Werbebibliothek und Plattformen für die Recherche erreicht (Positionierung und Angebot haben einen Ausweg: vermerken statt erfinden).

**Nächster Schritt:** Hermes einen ersten echten Auftrag geben: „Positionierung“ und den Telegram-Output gegen `prozesse/positionierung.md`, Schritt 8 prüfen. Danach „Angebot“, dann die Entwürfe in `marke/` einfügen.

Geändert (gesamt): `AGENTS.md`, `grundlagen/` (deutschland.md, us-markt.md, langform-interview.md neu; einrichtung.md, qualitaet-und-lernen.md, themen-und-verstaendlichkeit.md), `marke/` (angebot.md, regeln.md, tonalitaet.md), `prozesse/` (positionierung.md, angebot-entwickeln.md neu; 17 weitere geändert), `INDEX.md`, `HANDOFF.md`

### 2026-09-25 (2) — Content-Prozesse v2 nach KI-TALK-Podcast (main · 398a859)

**Stand:** 20 Prozesse fertig. Sechs davon stehen auf **v2**: `reel-kurzvideo`, `social-media-post`, `karussell-post`, `youtube-video`, `seo-blogartikel`, `copywriting`. Die übrigen 14 sind v1. Neue Grundlagen-Datei `grundlagen/themen-und-verstaendlichkeit.md` mit 5 Bausteinen: Thema mit Beleg, Muster (X → X 1.1), Framing aus Zielgruppensicht, Verständlichkeits-Check (Persona- und 12-Jährigen-Test, Kurz- vs. Langformat), Zahlen als Marktdaten. Die Prozesse verweisen darauf statt den Text zu wiederholen. `main` und `claude/gifted-johnson-ag9n65` sind gleich. Vorschau neu veröffentlicht: https://claude.ai/artifact/S4Keh5XEyt5ufGWLXi6pEu (Version 2). **Weiterhin mit keinem echten Hermes-Auftrag erprobt.**

Quelle der Änderungen: Jans Zusammenfassung der Podcast-Folge „4 Denkfehler liegen zwischen dir und 120.000 Followern“ (KI TALK, Niklas Volland und Maxi Raabe). Leitprinzip: Jan entscheidet über Thema und Framing, Hermes produziert.

**Was sich geändert hat:**
- **Reel v2:** drei Produktionswege. A = eigene Aufnahme mit Auto-Schnitt (`cut-silences`/`cut-mistakes`/`video-use`), B = Avatar + Stimmklon von Jan (HeyGen + ElevenLabs, nur mit Zustimmung, immer KI-Label), C = faceless wie bisher. Vorrang A vor B vor C. Dazu Themen-Check, Muster, Framing, Verständlichkeits-Check vor der Produktion, Zahlen nach 7 Tagen. Jan hat Weg B ausdrücklich bestätigt.
- **Post und Karussell v2:** alle 5 Bausteine; neuer Schritt Verständlichkeits-Check (Post: Schritt 7, Karussell: Schritt 5, vor dem Design). Schrittnummern dahinter um eins verschoben; Karussell-Quality-Check ist jetzt **Schritt 10**.
- **YouTube v2:** Framing, Themenbestätigung durch Jan, Verständlichkeits-Check (Langformat) im Skript-Schritt. Marktcheck und Zahlenauswertung gab es schon.
- **Blog v2:** nur Verständlichkeits-Check (Langformat). Suchintention und Top-10-Analyse decken Trend und Muster bereits ab.
- **Copywriting v2:** Persona-Test in Schritt 9. Wirkt automatisch in Landingpage, Ad-Texte, Newsletter, Verkaufsvideo, E-Mail-Marketing und Marketing-kostenlos, die Schritt 9 nutzen.
- `grundlagen/einrichtung.md`: HeyGen-Abschnitt; `video-use` auch für Reel Weg A.
- `marke/regeln.md`: No-Go „keine echten Personen nachbilden“ mit Ausnahme für Jan selbst (Avatar, Stimmklon) nach ausdrücklicher Zustimmung. Sonst hätte Weg B der Regel widersprochen.

**Verworfen:**
- Kennzahlen aus dem Podcast (120.000 Follower in 4 Wochen, 97 % Zeitersparnis) nicht übernommen: Eigenaussagen, nicht unabhängig belegt.
- Trendrecherche voll automatisieren: Der Podcast rät selbst davon ab. Hermes liefert nur Belege, Jan entscheidet.
- Descript statt `video-use`/`cut-silences`: kostenpflichtig, die kostenlosen Werkzeuge stehen schon im Repo.
- Avatar für YouTube-Langvideos: Lange Videos sollen Vertrauen aufbauen, und der Prozess verbietet ein KI-Gesicht, das als Jan auftritt. Einschätzung von Claude, nicht belegt; Jan kann das anders entscheiden.
- Verständlichkeits-Check als eigener Schritt in Landingpage/Ads/Newsletter/Verkaufsvideo: doppelt zu den Copywriting-Regeln. Stattdessen einmal in `copywriting.md`.
- Aus der ersten Session weiterhin gültig: kein Jekyll (eigener Build `node build.js`), kein automatisches Pages-Deployment (privates Repo), keine vorgetäuschten Anlässe, Platzhalter-Testimonials oder unbegründete Streichpreise (§ 5 UWG), keine unbelegten Kennzahlen als Fakt.

**Nächster Schritt:** Jan füllt `marke/zielgruppe.md`, `marke/angebot.md`, `marke/tonalitaet.md` aus (Zeile `> **Vom Nutzer auszufüllen.**` löschen) und die leeren Zeilen in `marke/regeln.md`. Danach Hermes einen ersten echten Auftrag geben, z. B. „Karussell zu <Thema>“, und den Telegram-Output gegen `prozesse/karussell-post.md`, Schritt 10 prüfen. Für Reels zuerst Weg A oder C testen; Weg B erst nach HeyGen-Freigabe und abgenommenem Testvideo.

**Offene Fragen an Jan:**
- Company OS: Hermes hat API-Zugang (von Jan bestätigt), steht aber noch nicht in `marke/regeln.md`. Offen: **Darf Hermes dort Aufgaben anlegen (ja/nein)?**
- E-Mail-Tool, Absender-Domain, Landingpage-Tool, Impressum-/Datenschutz-Links: trägt Jan in `marke/regeln.md` ein.
- Budget-Standards (2 $ Bild/Karussell, 10 $ Reel) von Claude gesetzt; Jan bestätigt oder ändert. HeyGen-Kosten pro Avatar-Video nicht recherchiert, 10 $ reichen für Weg B evtl. nicht.
- Reverse Charge (§ 13b UStG) bei Meta-Ads/US-Tools: mit Steuerberater klären, sobald Anzeigen laufen.
- Lexware Office: Public API erst ab Tarif XL, Tarifwahl offen.

**Landminen:**
- Nach jeder Änderung an `prozesse/`, `marke/` oder `grundlagen/` **`node build.js` ausführen und `INDEX.md` mitcommitten**, sonst schlägt `.github/workflows/check.yml` fehl.
- Neue Dateien in `grundlagen/` erscheinen automatisch in `INDEX.md` und in der Vorschau. Verweise auf Bausteine („Baustein 1–5“) beziehen sich auf `grundlagen/themen-und-verstaendlichkeit.md`; beim Umnummerieren der Bausteine alle Prozesse mitändern (`grep -rn Baustein prozesse`).
- Beim Einfügen eines Schritts in einen Prozess die Querverweise („Schritt N“) im selben Prozess, in anderen Prozessen und in dieser Datei mit `grep` prüfen.
- Markdown-Renderer in `build.js`: Listen nur eine Ebene tief (der neue Reel-Schritt 9 hat drei Ebenen, wird in der HTML-Vorschau flach dargestellt; Hermes liest das Markdown). Tabellen nur als eigene Zeilen, die mit `|` beginnen. Unterlisten unter zweistelligen Schrittnummern mit 4 Leerzeichen einrücken.
- Vorschau aktualisiert sich nicht selbst: `node build.js`, dann `_site/vorschau.html` per Artifact-Tool mit `url` an die URL oben publishen. Aus einer neuen Session verlangt das Tool, vorher die **komplette** Live-Version zu lesen (ca. 3.500 Zeilen, in Abschnitten); ein Diff gegen den alten Build allein reicht nicht.
- Lokal im Browser zeigt `_site/vorschau.html` kaputte Umlaute (bewusst ohne `<head>`/Charset gebaut). Kein Bug.
- Push auf `DreamMindLab/agenten-prozesse` braucht die Claude GitHub App; in dieser Session über `add_repo` mit `access: push` angehängt, Klon unter `/home/user/agenten-prozesse`.

- **Fertig:** Punkte oben unter „Was sich geändert hat“; `INDEX.md` neu gebaut; nach `main` gemergt (Fast-Forward) und gepusht; Vorschau Version 2 veröffentlicht.
- **Bewusst offen:** `marke/`-Inhalte (nur Jan); HeyGen-Freigabe und -Kosten; GitHub Pages (erst nach Plan-Upgrade); Verständlichkeits-Check in Podcast-Episode und 30-Tage-Contentplan nicht ergänzt (nicht angefragt).
- **Nicht testbar:** Ob Hermes die Prozesse befolgt (kein Hermes-Zugang). Ob Hermes auf Instagram/TikTok recherchieren kann (Baustein 2 hat dafür einen Ausweg: Schritt auslassen und vermerken). `check.yml` auf GitHub nicht angesehen. Veröffentlichte Vorschau nach dem Publish nicht erneut geöffnet. HeyGen-Einrichtungsablauf (Einwilligungsnachweis) nur allgemein beschrieben, nicht gegen die aktuelle HeyGen-Doku geprüft.

Verhaltensänderung für künftige Sessions: keine neue Regel nötig.

Geändert: `grundlagen/themen-und-verstaendlichkeit.md` (neu), `grundlagen/einrichtung.md`, `marke/regeln.md`, `prozesse/reel-kurzvideo.md`, `prozesse/social-media-post.md`, `prozesse/karussell-post.md`, `prozesse/youtube-video.md`, `prozesse/seo-blogartikel.md`, `prozesse/copywriting.md`, `INDEX.md`, `HANDOFF.md`

### 2026-09-25 (1) — Alle 20 Prozesse v1 fertig, Vorschau veröffentlicht (main · 7a85037)

Erstversion aller 20 Prozesse, `AGENTS.md`, generiertes `INDEX.md`, eigener Build ohne Abhängigkeiten (`node build.js`), Vorschau-Artifact Version 1. Inhaltlich recherchiert (Meta-Learning-Skill, Quellen in den Prozessen). Verworfene Punkte und Landminen aus dieser Session sind oben übernommen. Vorschlag für Jan von damals weiterhin offen: Skills `marketing-funnel-writer` (E-Mail-Serien Typ A/B) und `landingpage-creator` (Platzhalter-Testimonials) an den verworfenen Stellen überarbeiten.
