---
titel: Social-Media-Post
kategorie: Social Media
icon: megaphone
beschreibung: Einzelpost für Instagram oder LinkedIn: Hook, ein Gedanke, CTA.
status: fertig
version: 1
reihenfolge: 10
stichworte: Instagram-Post, LinkedIn-Post, Posting, Caption, Textpost, Bildpost
---

## Ziel

Ein veröffentlichungsfertiger Einzelpost (Text + ggf. Bild), der **einen** Gedanken so vermittelt, dass die Zielgruppe ihn speichert, weiterschickt oder kommentiert.

Worauf die Plattformen achten: Instagram bewertet vor allem **Sends pro Reichweite** (Weiterschicken per DM, wichtig für neue Leute), **Likes pro Reichweite** (für Follower) und Verweildauer. LinkedIn bewertet vor allem **Verweildauer** und **Kommentare**. Also: Content, den man jemandem schicken würde, und ein Einstieg, der zum Weiterlesen zwingt.

## Benötigte Inputs

- **Thema oder Anlass** (vom Nutzer). Fehlt es: 3 Themenvorschläge aus `marke/zielgruppe.md` (Probleme) und `marke/angebot.md` machen und wählen lassen.
- **Plattform:** Instagram, LinkedIn oder beide. Standard: beide.
- **Ziel des Posts:** Reichweite (teilen), Vertrauen (speichern) oder Anfragen (CTA). Standard: Vertrauen.
- Aus dem Repo, immer lesen: `marke/zielgruppe.md`, `marke/tonalitaet.md`, `marke/angebot.md`, `marke/design.md`, `marke/beispiele.md`
- Aus deinem Gedächtnis: gespeicherte Regeln zu diesem Prozess (Foundation-Agent).

## Werkzeuge

- Bild, falls nötig: grafisch-typografisch als HTML/CSS → PNG (exakte Texte, Markenfarben) **oder** Bild über Higgsfield API (siehe `https://docs.higgsfield.ai`). **Nie Text in KI-Bilder generieren lassen**, der wird fehlerhaft. Text immer per HTML/CSS darüberlegen.

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Sind die `marke/`-Dateien noch Platzhalter, frag nach Zielgruppe und Tonalität, bevor du schreibst.
2. **Kernaussage in einem Satz.** Schreib auf: „Nach diesem Post weiß/kann die Zielgruppe ___.“ Passt das nicht in einen Satz, ist es mehr als ein Post (→ Karussell).
3. **Beweis finden.** Womit wird die Aussage glaubwürdig? Eigenes Beispiel, Kundenfall, Zahl aus `marke/angebot.md`, konkreter Ablauf. Nichts erfinden: Gibt es keinen Beleg, arbeite mit einem konkreten Beispielszenario und kennzeichne es als solches.
4. **5 Hooks schreiben, einen wählen.** Der Hook ist alles vor „…mehr“ (Instagram: ca. die ersten 125 Zeichen; LinkedIn: die ersten 2–3 Zeilen). Zeile 1 stoppt den Scroll: konkretes Problem, überraschende Aussage oder Ergebnis, in Worten der Zielgruppe (Formulierungen aus `marke/zielgruppe.md`). Zeile 2 baut Spannung auf. Die letzte Zeile vor „mehr“ verspricht einen Payoff, der das Aufklappen lohnt. Wähle den Hook, der am **spezifischsten** ist (Zahl, Rolle, Situation). Allgemeine Hooks („Die meisten machen diesen Fehler“) verlieren.
5. **Hauptteil schreiben.** Ein Gedanke, gestützt durch den Beweis aus Schritt 3. Kurze Absätze (1–3 Zeilen), Leerzeilen dazwischen. Konkrete Schritte oder Beispiele statt Behauptungen. Am Ende Rückbezug auf den Hook.
6. **CTA setzen.** Genau einer, passend zum Ziel. Reichweite: „Schick das jemandem, der …“. Vertrauen: „Speicher dir das für …“. Anfragen: Standard-CTA aus `marke/angebot.md`. Kommentare (v. a. LinkedIn): eine echte, leicht beantwortbare Frage.
7. **Plattform anpassen.**
   - **Instagram:** Keywords, nach denen die Zielgruppe sucht, natürlich in die ersten Sätze der Caption (die Instagram-Suche liest Captions). 3–5 thematisch passende Hashtags ans Ende, nicht mehr. Bild ist Pflicht (Schritt 8).
   - **LinkedIn:** Der Text steht für sich, Bild optional. Keine Hashtag-Blöcke (max. 3). Externe Links nicht in den Post-Text, sondern in den ersten Kommentar (verbreitete Praxis, offiziell nicht bestätigt).
8. **Bild erstellen (Instagram Pflicht, LinkedIn optional).** Format 1080×1350 (4:5).
   - **Typografisch:** Hook-Aussage groß auf Markenhintergrund (HTML/CSS → PNG), Handle aus `marke/design.md`.
   - **Bildhaft:** Szene über Higgsfield generieren, die die Situation der Zielgruppe zeigt. Max. 3 Versuche, Budget aus `marke/regeln.md`. Text per HTML/CSS drüberlegen.
9. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
   - [ ] Die Kernaussage aus Schritt 2 ist nach dem Lesen eindeutig erkennbar.
   - [ ] Zeile 1 enthält etwas Spezifisches (Zahl, Rolle, Situation, Ergebnis), keine Allgemeinplätze.
   - [ ] Der Hook verspricht etwas, das der Hauptteil **vollständig** einlöst.
   - [ ] Mindestens ein konkreter Beleg oder ein konkretes Beispiel.
   - [ ] Sende-Test: Es gibt eine konkrete Person aus der Zielgruppe, der man das schicken würde, und einen Grund dafür.
   - [ ] Genau ein CTA, passend zum Ziel.
   - [ ] Kein Absatz länger als 3 Zeilen; der Post funktioniert auf dem Handy.
   - [ ] Instagram: Keyword in den ersten zwei Sätzen, 3–5 Hashtags, Bild 1080×1350 ohne fehlerhaften Text.
   - [ ] Laut gelesen klingt es wie die Texte in `marke/beispiele.md`, nicht wie eine KI.
   - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
10. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Auswerten, Regeln speichern, ggf. Prozess-Vorschlag per Telegram.

## Output-Format

Per Telegram an den Nutzer. Bei „beide Plattformen“ zwei getrennte Blöcke, nicht derselbe Text zweimal.

```
📱 Post: <Kernaussage in einem Satz>
Plattform: <Instagram / LinkedIn>
Ziel: <Reichweite / Vertrauen / Anfragen>

--- TEXT ---
<fertiger Post-Text inkl. Hashtags>

--- ERSTER KOMMENTAR (nur LinkedIn, falls Link) ---
<Text>

Bild: <Datei im Anhang>
KI-Kennzeichnung nötig: <ja/nein, warum>
Alternative Hooks: <die 2 nächstbesten aus Schritt 4>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
