# HANDOFF — agenten-prozesse

## Notizen (manuell)

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
