---
titel: Quality Check & Foundation-Agent
beschreibung: Die zwei Pflichtschritte am Ende jedes Prozesses.
---

Jeder Prozess endet mit denselben zwei Schritten. Die prozessspezifischen Kriterien stehen im jeweiligen Prozess, das Vorgehen hier.

## Vorletzter Schritt: Quality Check (Loop)

Ziel: Nichts verlässt dich, das die Kriterien nicht nachweislich erfüllt.

1. **Kriterien einzeln prüfen.** Beantworte jedes Kriterium mit **Ja** oder **Nein** und schreib den **Beleg** dazu: die konkrete Stelle im Content, die das Kriterium erfüllt (Zitat, Slide-Nummer, Timecode). Ohne Beleg gilt das Kriterium als Nein.
2. **Streng sein.** Du prüfst deine eigene Arbeit, dabei neigt man zum Durchwinken. Frag bei jedem Kriterium: „Würde ein kritischer Profi aus der Zielgruppe das auch so sehen?“
3. **Bei einem Nein: überarbeiten.** Nur die betroffenen Stellen ändern, dann **alle** Kriterien erneut prüfen (Korrekturen können anderes kaputt machen).
4. **Maximal 3 Runden.** Ist nach Runde 3 noch ein Kriterium auf Nein, liefere trotzdem aus, aber markiere es klar: welches Kriterium, warum es nicht erfüllt ist, was du bräuchtest (z. B. echtes Kundenbeispiel, andere Info).
5. **Protokoll behalten.** Notiere pro Runde, welche Kriterien auf Nein standen und was du geändert hast. Das brauchst du im nächsten Schritt.

Harte Kriterien (gelten immer, zusätzlich zu denen im Prozess):

- [ ] Passt zu `marke/zielgruppe.md` und `marke/tonalitaet.md`, keine Floskeln aus der Verbotsliste
- [ ] Keine erfundenen Zahlen, Zitate, Kundenstimmen oder Ergebnisse
- [ ] Kein Verstoß gegen `marke/regeln.md`
- [ ] Deutschland-Standards aus `grundlagen/deutschland.md` eingehalten: Längen auf Deutsch (Abschnitt 1), Werbeaussagen belegbar (3), Werbung mit Gegenleistung gekennzeichnet (4), keine Daten Dritter in Werkzeugen ohne AVV (5)
- [ ] Realistische KI-Bilder/-Videos oder KI-Stimmen sind zur Kennzeichnung markiert (EU AI Act Art. 50, gilt seit 2. 8. 2026). Im Zweifel kennzeichnen.

## Letzter Schritt: Foundation-Agent (Lernen)

Ziel: Der nächste Output wird besser als dieser.

1. **Auswerten.** Schau ins Quality-Check-Protokoll: Welche Kriterien sind in Runde 1 durchgefallen? Was hat die Korrektur gelöst?
2. **In dein Gedächtnis schreiben.** Halte das Muster als kurze Regel fest, z. B. „Karussell: Mein erster Entwurf hat zu viel Text pro Slide. Direkt max. 25 Wörter schreiben.“ Beim nächsten Mal liest du diese Regeln **vor** dem Entwurf.
3. **Nutzer-Feedback einbeziehen.** Hat der Nutzer nach der Auslieferung etwas geändert oder kritisiert, ist das wichtiger als dein eigener Check. Ebenfalls als Regel speichern.
4. **Prozess-Verbesserung vorschlagen**, wenn eins davon zutrifft:
   - dieselbe Korrektur war zum **zweiten Mal** nötig,
   - ein Schritt im Prozess war unklar, fehlte oder hat nicht funktioniert,
   - der Nutzer hat etwas korrigiert, das der Quality Check nicht erkannt hat (fehlendes Kriterium).

   Dann schick dem Nutzer per Telegram eine Nachricht in diesem Format:

```
🔧 Prozess-Vorschlag
Prozess: <Titel> (v<Version>)
Schritt: <Nummer / Name>
Problem: <was schiefging, 1–2 Sätze>
Beleg: <wie oft, bei welchem Content>
Vorschlag: <konkrete neue Formulierung oder neues Kriterium>
```

5. **Nicht selbst ändern.** Du änderst dieses Repo nie selbst. Der Nutzer entscheidet über jeden Vorschlag.
6. Ohne Auffälligkeiten: nichts senden. Kein „alles lief gut“-Bericht.
