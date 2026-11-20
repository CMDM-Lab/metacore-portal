// Renders Mermaid diagrams in the browser.
//
// In Markdown, put a placeholder where the diagram goes:
//     <div class="diagram" data-diagram="service-flow"></div>
// The diagram source is src/data/<name>.mmd. Mermaid is bundled from npm
// (no CDN) and only downloaded on pages that have a placeholder.
import serviceFlow from '../data/service-flow.mmd?raw';

const SOURCES = { 'service-flow': serviceFlow };

const LEGENDS = {
  'service-flow': [
    ['user', '使用者'],
    ['admin', '管理者（Admin）'],
    ['ei', '實驗操作人員（EI）'],
    ['di', '資料處理人員（DI）'],
    ['sys', 'MetaCore 系統'],
    ['close', '結案'],
  ],
};

async function renderAll() {
  const slots = document.querySelectorAll('[data-diagram]');
  if (slots.length === 0) return;
  const { default: mermaid } = await import('mermaid');
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: 'base',
    themeVariables: {
      fontFamily: 'system-ui, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
      fontSize: '15px',
      lineColor: '#5b6470',
    },
    flowchart: { htmlLabels: true, curve: 'basis', useMaxWidth: true },
  });
  let n = 0;
  for (const slot of slots) {
    const name = slot.dataset.diagram;
    const src = SOURCES[name];
    if (!src) {
      slot.textContent = `找不到圖表：${name}`;
      continue;
    }
    // Narrow screens: stack left-to-right diagrams vertically so the text
    // is not scaled down to an unreadable size.
    const narrow = slot.clientWidth < 640;
    const code = narrow
      ? '%%{init: {"flowchart": {"rankSpacing": 22, "nodeSpacing": 20, "padding": 6}}}%%\n' +
        src.replace(/^flowchart LR\b/m, 'flowchart TB')
      : src;
    slot.classList.toggle('narrow', narrow);
    try {
      const { svg } = await mermaid.render(`diagram-${name}-${n++}`, code);
      slot.innerHTML = svg;
      const legend = LEGENDS[name];
      if (legend) {
        const ul = document.createElement('ul');
        ul.className = 'diagram-legend';
        for (const [cls, label] of legend) {
          const li = document.createElement('li');
          li.innerHTML = `<span class="swatch ${cls}"></span>`;
          li.append(label);
          ul.append(li);
        }
        slot.append(ul);
      }
      slot.dataset.rendered = 'true';
    } catch (err) {
      slot.textContent = '流程圖無法顯示，請重新整理頁面。';
      console.error(err);
    }
  }
}

renderAll();
