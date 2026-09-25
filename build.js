#!/usr/bin/env node
// Baut die statische Seite aus prozesse/*.md nach _site/.
// Keine Abhängigkeiten: `node build.js`
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'prozesse');
const OUT = path.join(ROOT, '_site');
const BASE_URL = (process.env.BASE_URL || '').replace(/\/$/, '');
const KATEGORIEN = ['Social Media', 'Text & Copy', 'Marketing', 'Werbung', 'Video & Audio', 'Strategie & Recherche', 'Business'];

const ICONS = {
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  sparkles: '<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  video: '<path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  play: '<rect x="2" y="4" width="20" height="16" rx="4"/><path d="m10 9 5 3-5 3z"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v9H5v-9"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  trending: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  send: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  workflow: '<rect x="3" y="3" width="8" height="8" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect x="13" y="13" width="8" height="8" rx="2"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.sparkles}</svg>`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error('Frontmatter fehlt');
  const meta = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: m[2] };
}

// Minimaler Markdown-Renderer: Überschriften, Absätze, Listen (eine Verschachtelungsebene),
// Checkboxen, Zitate, Code, Tabellen, Links.
function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}
function listItem(text) {
  const box = text.match(/^\[( |x)\]\s+(.*)$/i);
  return box
    ? `<li class="check"><input type="checkbox" disabled${box[1] !== ' ' ? ' checked' : ''}> ${inline(box[2])}`
    : `<li>${inline(text)}`;
}
function markdown(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const out = [];
  let list = null, sub = null, para = [], quote = [], code = null, table = [];
  const flushPara = () => { if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`); para = []; };
  const closeSub = () => { if (sub) out.push(`</li></${sub}>`); sub = null; };
  const flushList = () => { if (list) { closeSub(); out.push(`</li></${list}>`); } list = null; };
  const flushQuote = () => { if (quote.length) out.push(`<blockquote>${markdown(quote.join('\n'))}</blockquote>`); quote = []; };
  const flushTable = () => {
    if (!table.length) return;
    const rows = table.filter((r) => !/^\|?\s*:?-{3,}/.test(r)).map((r) => r.replace(/^\||\|$/g, '').split('|').map((c) => inline(c.trim())));
    const [head, ...body] = rows;
    out.push(`<div class="table"><table><thead><tr>${head.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
    table = [];
  };
  const flush = () => { flushPara(); flushList(); flushQuote(); flushTable(); };
  for (const line of lines) {
    if (code !== null) {
      if (/^\s*```/.test(line)) { out.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`); code = null; }
      else code.push(line);
      continue;
    }
    let m;
    if (/^\s*```/.test(line)) { flush(); code = []; }
    else if (/^\|/.test(line)) { flushPara(); flushList(); flushQuote(); table.push(line.trim()); }
    else if ((m = line.match(/^(#{1,4})\s+(.*)$/))) { flush(); const n = m[1].length; out.push(`<h${n}>${inline(m[2])}</h${n}>`); }
    else if ((m = line.match(/^>\s?(.*)$/))) { flushPara(); flushList(); flushTable(); quote.push(m[1]); }
    else if (list && (m = line.match(/^\s{2,}(?:\d+\.|[-*])\s+(.*)$/))) {
      // eingerückter Unterpunkt
      const tag = /^\s*\d+\./.test(line) ? 'ol' : 'ul';
      if (sub !== tag) { closeSub(); out.push(`<${tag}>`); sub = tag; } else out.push('</li>');
      out.push(listItem(m[1]));
    }
    else if ((m = line.match(/^(\d+)\.\s+(.*)$/)) || (m = line.match(/^[-*]\s+(.*)$/))) {
      flushPara(); flushQuote(); flushTable();
      const tag = /^\d+\./.test(line) ? 'ol' : 'ul';
      if (list !== tag) {
        flushList();
        // Nummerierung fortsetzen, auch wenn z. B. ein Codeblock die Liste unterbrochen hat
        out.push(tag === 'ol' && m[1] !== '1' ? `<ol start="${m[1]}">` : `<${tag}>`);
        list = tag;
      } else { closeSub(); out.push('</li>'); }
      out.push(listItem(m[m.length - 1]));
    }
    else if (list && /^\s{2,}\S/.test(line)) { closeSub(); out.push(`<p>${inline(line.trim())}</p>`); }
    else if (!line.trim()) { flushPara(); flushQuote(); flushTable(); if (!list) flushList(); }
    else { flushList(); flushQuote(); flushTable(); para.push(line.trim()); }
  }
  flush();
  return out.join('\n');
}

const CSS = fs.readFileSync(path.join(ROOT, 'assets', 'style.css'), 'utf8');

function page({ title, description, body, depth }) {
  const up = depth ? '../'.repeat(depth) : './';
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="alternate" type="application/json" href="${up}prozesse.json" title="Prozess-Index (JSON)">
<link rel="alternate" type="text/plain" href="${up}llms.txt" title="Anleitung für KI-Agenten">
<style>${CSS}</style>
</head>
<body>
${body}
</body>
</html>
`;
}

// --- Einlesen ---
const prozesse = fs.readdirSync(SRC).filter((f) => f.endsWith('.md')).map((f) => {
  const raw = fs.readFileSync(path.join(SRC, f), 'utf8');
  const { meta, body } = parseFrontmatter(raw);
  const slug = f.replace(/\.md$/, '');
  for (const k of ['titel', 'kategorie', 'beschreibung']) if (!meta[k]) throw new Error(`${f}: "${k}" fehlt`);
  return { slug, ...meta, reihenfolge: Number(meta.reihenfolge || 999), raw, body };
}).sort((a, b) => a.reihenfolge - b.reihenfolge || a.titel.localeCompare(b.titel));

// Grundlagen und Marke: gelten für alle Prozesse
const ZUSATZ = [
  { ordner: 'grundlagen', titel: 'Grundlagen', hinweis: 'Gilt für jeden Prozess.' },
  { ordner: 'marke', titel: 'Marke', hinweis: 'Vor jedem Auftrag lesen. Vom Nutzer gepflegt.' },
].map((g) => ({
  ...g,
  seiten: fs.readdirSync(path.join(ROOT, g.ordner)).filter((f) => f.endsWith('.md')).sort().map((f) => {
    const raw = fs.readFileSync(path.join(ROOT, g.ordner, f), 'utf8');
    const { meta, body } = parseFrontmatter(raw);
    return { slug: f.replace(/\.md$/, ''), pfad: `${g.ordner}/${f}`, ...meta, raw, body };
  }),
}));

// --- Ausgabe ---
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'prozesse'), { recursive: true });

const url = (p) => `${BASE_URL}/${p}`;
const statusBadge = (s) => s === 'fertig' ? '' : `<span class="badge">${esc(s || 'entwurf')}</span>`;

// Startseite
const kategorien = [...KATEGORIEN, ...new Set(prozesse.map((p) => p.kategorie).filter((k) => !KATEGORIEN.includes(k)))];
const sections = kategorien.map((k) => {
  const items = prozesse.filter((p) => p.kategorie === k);
  if (!items.length) return '';
  return `<section>
<h2>${esc(k)}</h2>
<div class="grid">
${items.map((p) => `<a class="card" href="prozesse/${p.slug}/" data-slug="${p.slug}">
  <span class="icon">${icon(p.icon)}</span>
  <span class="card-title">${esc(p.titel)} ${statusBadge(p.status)}</span>
  <span class="card-desc">${esc(p.beschreibung)}</span>
</a>`).join('\n')}
</div>
</section>`;
}).join('\n');

fs.writeFileSync(path.join(OUT, 'index.html'), page({
  title: 'Agenten-Prozesse',
  description: 'Schritt-für-Schritt-Prozesse, nach denen KI-Agenten Content und Marketing erstellen.',
  body: `<main>
<header>
  <p class="eyebrow">DreamMindLab</p>
  <h1>Agenten-Prozesse</h1>
  <p class="lead">Wähle ein Format. Jeder Button öffnet den genauen Schritt-für-Schritt-Prozess, dem ein KI-Agent beim Erstellen folgt.</p>
</header>
<aside class="agent-note">
  <strong>Für KI-Agenten:</strong> Lies zuerst <a href="llms.txt">llms.txt</a>. Maschinenlesbarer Index: <a href="prozesse.json">prozesse.json</a>. Jeder Prozess liegt auch als reines Markdown vor (<code>/prozesse/&lt;slug&gt;.md</code>).
</aside>
${ZUSATZ.map((g) => `<section>
<h2>${esc(g.titel)} <span class="hint">${esc(g.hinweis)}</span></h2>
<div class="chips">
${g.seiten.map((z) => `<a class="chip" href="${g.ordner}/${z.slug}/">${esc(z.titel)}</a>`).join('\n')}
</div>
</section>`).join('\n')}
${sections}
</main>`,
}));

// Seiten für Grundlagen und Marke
for (const g of ZUSATZ) {
  for (const z of g.seiten) {
    const dir = path.join(OUT, g.ordner, z.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(OUT, g.ordner, `${z.slug}.md`), z.raw);
    fs.writeFileSync(path.join(dir, 'index.html'), page({
      title: `${z.titel} – ${g.titel}`,
      description: z.beschreibung || g.hinweis,
      depth: 2,
      body: `<main class="prozess">
<nav><a href="../../">← Übersicht</a></nav>
<header>
  <p class="eyebrow">${esc(g.titel)}</p>
  <h1>${esc(z.titel)}</h1>
  ${z.beschreibung ? `<p class="lead">${esc(z.beschreibung)}</p>` : ''}
</header>
<article>
${markdown(z.body)}
</article>
</main>`,
    }));
  }
}

// Prozess-Seiten
for (const p of prozesse) {
  const dir = path.join(OUT, 'prozesse', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'prozesse', `${p.slug}.md`), p.raw);
  fs.writeFileSync(path.join(dir, 'index.html'), page({
    title: `${p.titel} – Agenten-Prozess`,
    description: p.beschreibung,
    depth: 2,
    body: `<main class="prozess">
<nav><a href="../../">← Alle Prozesse</a></nav>
<header>
  <p class="eyebrow">${esc(p.kategorie)}${p.version ? ` · v${esc(p.version)}` : ''} ${statusBadge(p.status)}</p>
  <h1><span class="icon">${icon(p.icon)}</span>${esc(p.titel)}</h1>
  <p class="lead">${esc(p.beschreibung)}</p>
</header>
<aside class="agent-note">
  <strong>Für KI-Agenten:</strong> Lies vorher <a href="../../marke/zielgruppe/">marke/</a> und <a href="../../grundlagen/qualitaet-und-lernen/">grundlagen/</a>. Befolge die Schritte exakt und in dieser Reihenfolge. Rohfassung: <a href="../${p.slug}.md">${p.slug}.md</a>
</aside>
<article>
${markdown(p.body)}
</article>
</main>`,
  }));
}

// Maschinenlesbarer Index
fs.writeFileSync(path.join(OUT, 'prozesse.json'), JSON.stringify({
  titel: 'Agenten-Prozesse',
  beschreibung: 'Schritt-für-Schritt-Prozesse für KI-Agenten zur Erstellung von Content und Marketing.',
  grundlagen: ZUSATZ.flatMap((g) => g.seiten.map((z) => ({ titel: z.titel, markdown: url(z.pfad) }))),
  prozesse: prozesse.map((p) => ({
    slug: p.slug, titel: p.titel, kategorie: p.kategorie, beschreibung: p.beschreibung,
    status: p.status || 'entwurf',
    version: p.version ? Number(p.version) : null,
    stichworte: (p.stichworte || '').split(',').map((w) => w.trim()).filter(Boolean),
    html: url(`prozesse/${p.slug}/`), markdown: url(`prozesse/${p.slug}.md`),
  })),
}, null, 2));

// Anleitung für Agenten
fs.writeFileSync(path.join(OUT, 'llms.txt'), `# Agenten-Prozesse

> Verbindliche Schritt-für-Schritt-Prozesse für KI-Agenten, die Content und Marketing erstellen.

## So nutzt du diese Seite

1. Bestimme anhand der Anfrage und der Stichworte das passende Format aus der Liste unten.
2. Lade den Prozess als Markdown (Link unten) und befolge die Schritte exakt in der angegebenen Reihenfolge.
3. Fehlen Inputs aus "Benötigte Inputs", frage beim Nutzer nach, bevor du startest.
4. Arbeite vor der Auslieferung den Qualitätscheck ab und liefere im beschriebenen Output-Format.
5. Passt kein Format, sag das und frag nach, statt einen Prozess zu erfinden.
6. Prozesse mit Status "entwurf" sind noch nicht ausgearbeitet: weise den Nutzer darauf hin.

Maschinenlesbarer Index: ${url('prozesse.json')}

## Vor jedem Auftrag lesen

${ZUSATZ.flatMap((g) => g.seiten.map((z) => `- [${g.titel}: ${z.titel}](${url(z.pfad)})`)).join('\n')}

${kategorien.map((k) => {
  const items = prozesse.filter((p) => p.kategorie === k);
  return items.length ? `## ${k}\n\n${items.map((p) => `- [${p.titel}](${url(`prozesse/${p.slug}.md`)}): ${p.beschreibung}${p.stichworte ? ` Stichworte: ${p.stichworte}.` : ''}${p.status && p.status !== 'fertig' ? ` (Status: ${p.status})` : ''}`).join('\n')}\n` : '';
}).filter(Boolean).join('\n')}`);

// Index im Repo selbst: Agenten, die das (private) Repo lesen, brauchen keine Website.
fs.writeFileSync(path.join(ROOT, 'INDEX.md'), `# Prozess-Index

> Automatisch erzeugt von \`node build.js\`, nicht von Hand bearbeiten. Anleitung: [AGENTS.md](AGENTS.md)

## Vor jedem Auftrag lesen

${ZUSATZ.map((g) => `**${g.titel}** (${g.hinweis}): ${g.seiten.map((z) => `[${z.titel}](${z.pfad})`).join(' · ')}`).join('\n\n')}

${kategorien.map((k) => {
  const items = prozesse.filter((p) => p.kategorie === k);
  return items.length ? `## ${k}\n\n| Prozess | Wofür | Stichworte | Status |\n|---|---|---|---|\n${items.map((p) => `| [${p.titel}](prozesse/${p.slug}.md) | ${p.beschreibung} | ${p.stichworte || ''} | ${p.status || 'entwurf'}${p.version ? ` v${p.version}` : ''} |`).join('\n')}\n` : '';
}).filter(Boolean).join('\n')}`);

fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
console.log(`${prozesse.length} Prozesse → ${path.relative(ROOT, OUT)}/`);
