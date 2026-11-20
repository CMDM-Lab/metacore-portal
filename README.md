# MetaCore Portal

臺灣大學代謝體核心實驗室（NTU Metabolomics Core Laboratory, MetaCore）的介紹網站。

- 網址：<https://www.cmdm.tw/metacore-portal/>
- 舊網址 `https://web.cmdm.tw/metacore_portal/` 由 cmdm6 的 Apache 301 轉址到這裡。
- 服務申請系統（另一套系統，不在這個 repo）：<https://web.cmdm.tw/metacore/>

本站在 2026-11 從舊的 Joomla 3 站（cmdm6，`/home/metacore/www/metacore-lab-portal`）搬過來。
舊站因 PHP 5.5 弱點已停止服務。

## 架構

```
src/data/*.yaml ─┐
src/pages/*.md  ─┼─> astro build ─> dist/ ─> GitHub Pages
public/files/*  ─┘     (Actions: build -> npm test -> deploy)
                                               │
web.cmdm.tw/metacore_portal/* ── 301 (cmdm6) ──┘
```

## 怎麼改內容

改完 push 到 `main`，GitHub Actions 會自動 build、跑測試、部署。
測試沒過就不會部署，錯誤訊息會寫出是哪個檔案、哪一行。

| 頁面 | 要改的檔案 |
|---|---|
| 簡介（首頁） | `src/pages/index.md` |
| 實驗室成員 | `src/data/members.yaml`（照片放 `src/assets/images/`） |
| 收費辦法 | `src/data/pricing.yaml` |
| 申請服務 | `src/pages/apply.md` |
| 下載文件檔案 | `src/data/downloads.yaml`（檔案放 `public/files/`） |
| 常見問題 | `src/pages/faq.md`（目錄依標題自動產生） |
| 頁首選單、頁尾 | `src/layouts/Base.astro` |
| 服務流程圖（常見問題 1.1、申請服務頁共用） | `src/data/service-flow.mmd`（Mermaid 語法） |

注意事項：

- **YAML 裡的電話要加雙引號。** 「空白＋`#`」之後會被當成註解吃掉，分機就不見了。
  測試會擋這個錯誤。
- 價格寫成數字（`3060`），不要寫成 `"3,060"`。千分位會自動加。
  不是數字的價格（`客製化價格`、`價格另訂`）直接寫文字。
- Markdown 裡連到站內頁面或檔案要用相對路徑，例如 `../files/xxx.pdf`、`../faq/`。
  不要寫 `/files/xxx.pdf`，因為網站在 `/metacore-portal/` 底下。
- FAQ 的錨點由標題文字產生（例如 `#13-如何申請代謝體核心實驗室的各項服務`）。
  改標題文字後，指向它的連結也要改。測試會抓出斷掉的錨點。
- 服務流程圖是 [Mermaid](https://mermaid.js.org/syntax/flowchart.html) 文字檔，在瀏覽器端繪製。
  寬螢幕左右排 3 個階段，手機自動改成上下排。可以貼到 <https://mermaid.live/> 預覽。
  顏色代表角色，圖例在 `src/scripts/diagrams.js`。
- 新增下載檔案時不用填 `legacy_id`。`legacy_id` 只給舊站的下載連結轉址用。

## 舊網址轉址（cmdm6）

`deploy/cmdm6-metacore-portal-redirect.conf` 是 cmdm6 上
`/etc/apache2/conf-available/metacore-portal-redirect.conf` 的正本，
由 `/etc/apache2/sites-available/000-default-le-ssl.conf` 以 `Include` 載入
（取代原本的 `Alias /metacore_portal` 區塊；備份在同目錄 `.bak-20261120`）。
:80 的 vhost 會先把所有請求轉到 https，所以只改 https 的 vhost。

- 舊下載連結 `index.php/downloads?task=download&id=N` 依 `downloads.yaml` 的 `legacy_id` 轉到新檔案。
- 改了 `legacy_id` 或檔名，要同步改這個檔並重新放到 cmdm6（需要 sudo，之後 `apache2ctl configtest && apache2ctl graceful`）。
- 從外部用 curl 測會拿到 Cloudflare challenge（403、`cf-mitigated: challenge`），不是轉址壞了。
  要驗證轉址，在 cmdm6 上測 origin：
  `curl -sk -o /dev/null -w '%{http_code} %{redirect_url}\n' -H 'Host: web.cmdm.tw' https://127.0.0.1/metacore_portal/index.php/faq`

## 本機預覽

```bash
npm ci
npm run build && npm test     # links.test.mjs 檢查 dist/，所以要先 build
npm run dev                   # http://localhost:4321/metacore-portal/
```

## 測試

| 檔案 | 檢查內容 |
|---|---|
| `tests/data.test.mjs` | YAML 格式、價格型別、下載檔案與照片存在、電話的 `#` 陷阱 |
| `tests/links.test.mjs` | build 後每個站內連結、圖片、`#錨點` 都指得到東西 |
