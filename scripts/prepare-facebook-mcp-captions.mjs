import {readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

const source = join(process.cwd(), 'public', 'subtitles', 'facebook-mcp.full.json');
const target = join(process.cwd(), 'public', 'subtitles', 'facebook-mcp.es.json');
const captions = JSON.parse(readFileSync(source, 'utf8'));

const replacements = new Map([
  ['mcp', 'MCP'],
  ['ads', 'Ads'],
  ['facebook', 'Facebook'],
  ['meta', 'Meta'],
  ['chat', 'Chat'],
  ['gpt', 'GPT'],
  ['brain', 'Brain'],
  ['codecs', 'Codex'],
  ['creenciales', 'credenciales'],
  ['gente', 'agente'],
  ['isquitable', 'is_queryable'],
  ['sitney', 'Sydney'],
  ['expliegue', 'despliegue'],
  ['porfolio', 'portfolio'],
  ['comodín', 'Comodín'],
  ['din', 'Comodín'],
]);

const normalized = captions.map((caption) => {
  const leadingSpace = caption.text.startsWith(' ') ? ' ' : '';
  const word = caption.text.trim();
  const punctuation = word.match(/[.,;:!?]$/)?.[0] ?? '';
  const bareWord = punctuation ? word.slice(0, -1) : word;
  const timedCorrection = caption.startMs >= 644000 && caption.startMs <= 648000 && bareWord.toLocaleLowerCase('es') === 'cuenta'
    ? 'campaña'
    : caption.startMs >= 324000 && caption.startMs <= 328000 && bareWord.toLocaleLowerCase('es') === 'utilización'
      ? 'autorización'
      : null;
  const replacement = timedCorrection ?? replacements.get(bareWord.toLocaleLowerCase('es'));
  return replacement
    ? {...caption, text: `${leadingSpace}${replacement}${punctuation}`}
    : caption;
});

writeFileSync(target, JSON.stringify(normalized, null, 2));
console.log(`Prepared ${normalized.length} timed caption tokens: ${target}`);
