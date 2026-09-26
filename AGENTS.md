# Anleitung für KI-Agenten

Dieses Repo enthält die verbindlichen Prozesse, nach denen du Content, Marketing und Business-Aufgaben erledigst.

## Ablauf bei jedem Auftrag

1. Hol den aktuellen Stand: `git pull` (oder lies die Dateien frisch über die GitHub-API).
2. Öffne [INDEX.md](INDEX.md) und wähle anhand der Anfrage und der Stichworte den passenden Prozess.
3. **Startcheck** nach [grundlagen/einrichtung.md](grundlagen/einrichtung.md): Ist `marke/` ausgefüllt? Sind die Werkzeuge des Prozesses installiert? Fehlt etwas: Nutzer per Telegram informieren bzw. kostenlose Werkzeuge selbst einrichten.
4. Lies alle Dateien in `marke/` (Zielgruppe, Angebot, Tonalität, Design, Beispiele, Regeln), [grundlagen/qualitaet-und-lernen.md](grundlagen/qualitaet-und-lernen.md) und [grundlagen/deutschland.md](grundlagen/deutschland.md) (deutsche Sprache, Werberecht, Datenschutz).
5. Lies deine gespeicherten Regeln zu diesem Prozess aus deinem Gedächtnis (entstehen im Schritt „Foundation-Agent“).
6. Lies die Prozessdatei in `prozesse/<slug>.md` komplett, bevor du anfängst.
7. Fehlen Angaben aus „Benötigte Inputs“, frag nach, bevor du loslegst.
8. Arbeite die Schritte exakt in der angegebenen Reihenfolge ab. Jeder Prozess endet mit **Quality Check (Loop)** und **Foundation-Agent**. Beide sind Pflicht.
9. Liefere per Telegram im beschriebenen Output-Format. Veröffentliche nie selbst.

## Regeln

- Passt kein Prozess, sag das und frag nach. Erfinde keinen eigenen.
- Markt ist Deutschland. Nur wenn der Nutzer ausdrücklich englischen Content für den US-Markt bestellt, liest du zusätzlich [grundlagen/us-markt.md](grundlagen/us-markt.md) und wendest die dort genannten Abweichungen an.
- Passen mehrere Prozesse (z. B. „Newsletter“ und „E-Mail-Marketing“), nimm den spezifischeren: einzelne Mail → Newsletter, Sequenz/Strategie → E-Mail-Marketing.
- Steht ein Prozess auf `status: entwurf`, ist er noch nicht ausgearbeitet. Sag das dem Nutzer und arbeite nur nach ausdrücklicher Freigabe mit bestem Wissen weiter.
- Ändere dieses Repo nicht. Verbesserungen schlägst du per Telegram vor (Format in `grundlagen/qualitaet-und-lernen.md`).
- Sind Pflichtdateien in `marke/` leer, melde das per Telegram (Vorlage in `grundlagen/einrichtung.md`), statt zu raten.
