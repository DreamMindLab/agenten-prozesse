---
titel: SEO-Blogartikel
kategorie: Text & Copy
icon: file-text
beschreibung: Artikel, der die Suchintention trifft, eigene Erfahrung einbringt und für Google und KI-Antworten zitierbar ist.
status: fertig
version: 1
reihenfolge: 21
stichworte: Blog, Blogartikel, Artikel, SEO, GEO, Ranking, Suchmaschinenoptimierung, Fachartikel, Ratgeber, KI-Suche
---

## Ziel

Ein veröffentlichungsfertiger Artikel, der die **Suchintention** zu einem Thema besser erfüllt als die aktuellen Top-Ergebnisse, **Inhalte enthält, die nur dieser Anbieter liefern kann**, und so aufgebaut ist, dass Google und KI-Antworten (AI Overviews, ChatGPT, Perplexity) ihn zitieren.

Warum das so streng ist:
- **Generische Antworten verlieren Klicks.** Erscheint eine KI-Übersicht über den Suchergebnissen, bekommt Platz 1 deutlich weniger Klicks: Ahrefs misst rund −58 % (Dez. 2025), Seer Interactive sah 2025 Rückgänge von über 60 % mit teilweiser Erholung Anfang 2026. Wer **in** der KI-Übersicht zitiert wird, bekam laut Seer rund 35 % mehr organische Klicks.
- **Google bewertet das Ergebnis, nicht das Werkzeug.** KI-Unterstützung ist erlaubt. Viele Seiten vor allem fürs Ranking zu produzieren, ist Spam („scaled content abuse“, seit März 2024), egal ob von Menschen oder KI. Maßstab ist hilfreicher Inhalt mit Erfahrung, Expertise, Autorität und Vertrauen (E-E-A-T).

## Benötigte Inputs

- **Thema oder Suchbegriff** (vom Nutzer oder aus `prozesse/marktforschung.md`).
- **Ziel des Artikels:** Sichtbarkeit, Anfragen (Lead-Magnet, Erstgespräch) oder Unterstützung eines Angebots.
- **Eigenes Material des Nutzers:** Erfahrungen, Kundenfälle, Zahlen, Beispiele, Meinung, Screenshots. Mindestens 2 davon, siehe Schritt 4.
- **Website:** CMS (z. B. WordPress), vorhandene Artikel (für interne Links und um Doppelungen zu vermeiden), Autor.
- Aus dem Repo, immer lesen: alle Dateien in `marke/`
- Aus deinem Gedächtnis: gespeicherte Regeln, bereits geschriebene Artikel und ihre Suchbegriffe.

## Werkzeuge

- Websuche (Suchergebnisse und KI-Übersicht zum Suchbegriff ansehen)
- Zeichen zählen per Skript (Title, Meta-Beschreibung)
- CMS aus `marke/regeln.md` (als Entwurf), sonst Markdown/HTML-Datei
- Einrichtung: `grundlagen/einrichtung.md`

## Schritt-für-Schritt

1. **Briefing prüfen.** Inputs vollständig? Startcheck nach `grundlagen/einrichtung.md` gemacht?
2. **Doppelung ausschließen.** Gibt es auf der Website schon einen Artikel zum selben Suchbegriff bzw. derselben Frage? Dann **diesen überarbeiten** statt einen zweiten zu schreiben (zwei Artikel zur selben Frage konkurrieren miteinander).
3. **Suchintention analysieren.** Den Suchbegriff suchen und die Top-10 sowie die KI-Übersicht auswerten:
   - Was will der Suchende? (verstehen, Anleitung, vergleichen, kaufen, lokal finden)
   - Welches **Format** dominiert? (Anleitung, Liste, Vergleich, Definition, Rechner/Vorlage)
   - Welche **Fragen** werden beantwortet („Nutzer fragen auch“, Zwischenüberschriften der Top-Ergebnisse)?
   - **Was fehlt** überall? (veraltete Infos, keine Beispiele, keine Zahlen, nur Oberfläche). Das ist die Chance.
   Das Format des Artikels folgt der dominierenden Intention. Gegen die Intention zu schreiben rankt nicht.
4. **Eigenes einbringen (Pflicht).** Was kann **nur** dieser Anbieter sagen? Mindestens 2 aus: eigene Erfahrung („Als wir X gemacht haben …“), Kundenfall, eigene Zahlen, konkretes Beispiel mit Screenshots, begründete Meinung gegen den Konsens, eigene Vorlage/Checkliste. Fehlt das: beim Nutzer **gezielt nachfragen** (2–3 konkrete Fragen). Ohne eigenes Material wird der Artikel austauschbar, dann den Nutzer darauf hinweisen, statt ihn trotzdem zu schreiben.
5. **Einordnen in ein Themen-Cluster.** Zu welchem Hauptthema gehört der Artikel? Welche bestehenden Artikel verlinken hierher, wohin verlinkt er? Zusammenhängende Artikel zu einem Thema bauen mehr Autorität auf als verstreute Einzelartikel. Fehlt eine Übersichtsseite (Pillar) zum Hauptthema: dem Nutzer vorschlagen.
6. **Gliederung.**
   - **H1** mit dem Suchbegriff, konkret und mit Nutzen.
   - **Einstieg:** Die Kernantwort in den **ersten 2–3 Sätzen**, dann warum es sich lohnt weiterzulesen. Kein Vorgeplänkel.
   - **H2 als echte Fragen** der Suchenden (aus Schritt 3). Jeder Abschnitt beginnt mit einer **direkten Antwort in 1–2 Sätzen**, danach Tiefe, Beispiel, Belege. So lassen sich Abschnitte einzeln zitieren.
   - Tabellen, nummerierte Schritte und Listen, wo sie das Verstehen erleichtern.
   - Abschluss mit Zusammenfassung und **einem** CTA passend zum Ziel.
7. **Schreiben.**
   - Regeln aus `prozesse/copywriting.md` (Schritte 8–9): kurze Sätze, einfache Wörter, konkret.
   - **Zitierbar machen:** Konkrete Zahlen **mit Quelle**, Zitate von glaubwürdigen Quellen **mit Namen**, Quellenangaben verlinken. In einer Princeton-Studie zu generativen Suchmaschinen (GEO, 2024) steigerten genau diese drei Techniken die Sichtbarkeit in KI-Antworten am stärksten, um bis zu rund 40 % (Laborvergleich mit 10.000 Suchanfragen; Höchstwert, kein Durchschnitt).
   - Keine Füllsätze, keine Wiederholung derselben Aussage, keine Keyword-Häufung. Den Suchbegriff natürlich in H1, Einstieg und ein bis zwei H2 verwenden.
   - Eigene Erfahrung in der Ich-/Wir-Form sichtbar machen (Schritt 4).
8. **On-Page-Elemente.**
   - **Title** (Titel im Suchergebnis): max. ca. 60 Zeichen, Suchbegriff vorne, Nutzen erkennbar.
   - **Meta-Beschreibung:** ca. 140–160 Zeichen, beantwortet „Warum klicken?“. Kein Rankingfaktor, aber entscheidend für die Klickrate.
   - **URL:** kurz, Suchbegriff, ohne Datum.
   - **Interne Links:** 3–5 zu passenden Artikeln/Angeboten mit beschreibendem Linktext; auf bestehenden Artikeln passende Links **hierher** vorschlagen.
   - **Externe Links** zu den Quellen.
   - **Autor:** echte Person mit kurzer Angabe zur Expertise; Veröffentlichungs- und Aktualisierungsdatum.
   - **Bilder:** bevorzugt eigene Screenshots/Grafiken; Dateiname und Alt-Text beschreibend; komprimiert. Realistische KI-Bilder kennzeichnen.
   - Strukturierte Daten „Article“, falls das CMS/Plugin das unterstützt.
   - Zeichenlängen **per Skript** zählen.
9. **Als Entwurf anlegen.** Im CMS als Entwurf oder als Datei liefern. **Nicht veröffentlichen.**
10. **Nachverfolgung vorschlagen.** 4–8 Wochen nach Veröffentlichung in der Google Search Console prüfen: Impressionen, Position, Klickrate, zu welchen Suchanfragen der Artikel erscheint. Bei vielen Impressionen und wenig Klicks: Title und Meta-Beschreibung verbessern. Bei Suchanfragen, die der Artikel noch nicht beantwortet: Abschnitt ergänzen.
11. **Quality Check (Loop).** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Kriterien:
    - [ ] Format und Inhalt passen zur Suchintention aus Schritt 3 (Intention benennen, Beleg aus den Top-Ergebnissen).
    - [ ] Der Artikel enthält mindestens eine Lücke, die die Top-Ergebnisse nicht füllen.
    - [ ] Mindestens 2 Elemente aus Schritt 4, die nur dieser Anbieter liefern kann (Stellen markieren).
    - [ ] Die Kernantwort steht in den ersten 2–3 Sätzen; jeder H2-Abschnitt beginnt mit einer direkten Antwort.
    - [ ] Jede Zahl und jedes Zitat hat eine verlinkte Quelle; nichts erfunden.
    - [ ] Keine Füllsätze, keine Wiederholungen, keine Keyword-Häufung.
    - [ ] Title ≤ ca. 60 Zeichen, Meta-Beschreibung ca. 140–160 Zeichen (per Skript gezählt).
    - [ ] 3–5 interne Links, Quellen extern verlinkt, Autor mit Expertise genannt.
    - [ ] Kein zweiter Artikel zur selben Frage auf der Website (Schritt 2).
    - [ ] Genau ein CTA passend zum Ziel.
    - [ ] Die Copy-Kriterien aus `prozesse/copywriting.md` (Schritt 10) sind erfüllt, soweit sie auf Artikel passen.
    - [ ] Harte Kriterien aus `grundlagen/qualitaet-und-lernen.md` erfüllt.
12. **Foundation-Agent.** Vorgehen: `grundlagen/qualitaet-und-lernen.md`. Zusätzlich: Suchbegriff, URL und Cluster im Gedächtnis speichern (für interne Links und gegen Doppelungen). Liefert der Nutzer Search-Console-Daten, auswerten und als Regel speichern. **Wichtig:** Keine Serien von fast gleichen Artikeln vorschlagen (z. B. dieselbe Seite für 50 Städte). Das ist genau das Muster, das Google als Spam wertet.

## Output-Format

Artikel als Markdown/HTML-Datei (oder Entwurf im CMS), dazu per Telegram:

```
📝 SEO-Artikel: <H1>
Suchbegriff: <…> | Intention: <…> | Cluster: <Hauptthema>

Title (<Z> Zeichen): <…>
Meta-Beschreibung (<Z> Zeichen): <…>
URL: /<slug>

Eigenes Material genutzt: <Stichpunkte>
Lücke gegenüber Top-Ergebnissen: <1 Satz>
Interne Links: <gesetzt / vorgeschlagen für bestehende Artikel>

Entwurf: <Link im CMS / Datei im Anhang>
Nachverfolgung: Search Console am <Datum>
Quality Check: <bestanden in Runde X / offen: Kriterium + Grund>
```
