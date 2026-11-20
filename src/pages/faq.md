---
layout: ../layouts/Base.astro
title: 常見問題
toc: true
---

以下整理出Metacore使用者常遇到的問題，供您做參考。在[服務詢問](#1-服務詢問)中，您會知道我們所提供的服務。在[實驗分析流程詢問](#3-實驗分析流程詢問)中，您將瞭解您的資料是如何產生、處理。在最後的[報告解讀詢問](#4-報告解讀詢問)中，您會知道報告如何產生，以及如何使用報告做進一步統計分析或是期望的資料呈現。

若您的問題並不在以下內容中，請和**Metacore Lab** (ntumetacore@gmail.com) 聯絡做進一步詢問。

## 1. 服務詢問

### 1.1. 代謝體分析的服務流程為何?

我們代謝體核心的服務流程如下圖所示。

<div class="diagram" data-diagram="service-flow"></div>

下載：[樣品收送記錄表](../files/sample-submission-record.docx)、[樣品分組表（Mapping Table）](../files/mapping-table.csv)、[Mapping Table 範例](../files/mapping-table-example.xlsx)

### 1.2. 代謝體核心實驗室提供那些服務項目?

目前核心實驗室提供的服務項目與價格，請見[收費辦法](../pricing/)。如有特別需求，需要客製化服務則請與實驗室PI聯絡。

Fatty acid Analysis目前設計為血液的萃取方法，若其他的樣品基質，都會需要再做萃取開發條件上的確認，需要一段時間才能建立。

### 1.3. 如何申請代謝體核心實驗室的各項服務?

代謝體核心實驗室服務申請網站： <https://web.cmdm.tw/metacore/>

申請流程與系統操作請參閱 [how-to-apply-metacore.docx](../files/how-to-apply-metacore.docx)

代謝體分析，可分為Targeted metabolomics analysis與Untargeted metabolomics analysis。

Targeted metabolomics analysis可針對一定數量已知代謝物，藉由比較標準品進行定性分析。Untargeted metabolomics analysis則是試著偵測單一樣品中所有包含已知或未知之代謝物。本核心實驗室提供這兩類分析服務。

### 1.4. 如何選擇分析平台?

一般來說，若是貴單位已經有明確的分子target則建議使用 targeted analysis項目，如果沒有特定的目標則建議先使用LC-MS metabolic profiling做初步分析; 若想看的代謝物屬極性較高分子，可選擇LC-MS polar metabolic profiling ; 若是想看脂質的變化則建議選擇LC-MS lipidomic profiling 或是Fatty Acid Analysis。

### 1.5. 是否可以協助尋找某一種代謝物？

可以，但會分成以下兩種狀況：

1\. 您有興趣的代謝物有在我們建立的標準品資料庫中：

我們可以幫您偵測，且如果在搜尋範圍(分子量&滯留時間)內有偵測到多個峰值，這將是目前分析方法的限制。

2\. 您有興趣的代謝物不在標準品資料庫中：

我們依然可以幫您偵測，但因為沒有標準品做確認，故不確定性較高。

### 1.6. 是否有提供untargeted metabolomic profiling的服務？

Untargeted metabolomics profiling analysis試著偵測單一樣品中所有包含已知或未知之代謝物。本核心實驗室亦提供此項服務。

### 1.7. 是否可以協助實驗設計以及分組？

可以，請向**MetaCore Lab** (ntumetacore@gmail.com)聯絡，並與曾宇鳳教授與郭錦樺教授約時間討論。

## 2. 樣品前處理相關問題

### 2.1. 一般分析需要多少生物檢體量?

目前核心實驗室有接受的樣品種類有血清、尿液、CSF、肺泡沖洗液、組織、細胞、細胞培養液等等。一般的代謝體服務通常需要100 μl 的樣品量 (針對血清、尿液、CSF、肺泡沖洗液等biofluids)，組織需要10-20 mg，細胞則需要 1x10<sup>6</sup>以上的細胞數目。

| 服務名稱 | 藥粉 | 組織 | 血漿<br>臨床 \| 動物 | 血清<br>臨床 \| 動物 | 尿液<br>臨床 \| 動物 | CSF | 細胞 | 細胞培養液 | Note |
|---|---|---|---|---|---|---|---|---|---|
| LC-MS metabolic profiling<br>小分子代謝體分析 | NA | 50-100 mg | 100 μl | 100 μl | 100 μl | 100 μl | 10^6 | 100 μl |  |
| LC-MS polar metabolic profiling<br>極性代謝體分析 | NA | 50-100 mg | 100 μl | 100 μl | 100 μl | 100 μl | 10^6 | 100 μl |  |
| LC-MS lipidomic profiling<br>脂質代謝體分析 | NA | 50-100 mg | 100 μl | 100 μl | 100 μl | 100 μl | 10^6 | 100 μl | 視欲測試lipid而定 |
| Fatty Acid Analysis<br>C14\~C26脂肪酸相對定量 | NA | 50-100 mg | 100 μl | 100 μl | testing | testing | testing | testing |  |

### 2.2. 血液尿液等臨床檢體的檢體收集注意事項?

臨床檢體注意事項請參考[代謝體核心實驗室樣品採集流程](../files/sample-collection-protocol.pdf) 。

### 2.3. 是否建議自行樣品萃取?

一般來說，大部分的樣品種類我們都可以代為萃取，細胞樣品因為不易保存，所以建議使用者自行萃取。

細胞萃取的建議作法請參考 [cell-extraction-protocol.pdf](../files/cell-extraction-protocol.pdf)

### 2.4. 檢品要如何運送?

檢品皆須在低溫下運送，在運送過程中，請用保麗龍盒裝著並置入適量保冷冰袋或是乾冰。送件地址為: 台北市中正區徐州路2號 509室 代謝體核心實驗室。

由於代謝體核心實驗室冰箱時常滿載，建議等候機器排程狀況由我們主動通知送樣時間，如果想知道可能的送樣時間，可以與代謝體核心實驗室詢問 (02-23123456 \#288781)

## 3. 實驗分析流程詢問

### 3.1. 每個樣本會測量幾次？

目前每個樣本以單次進樣（single injection）分析。資料品質以各樣品總訊號強度、樣本間相關性與 PCA 分群檢查，結果列在報告第 2 章「數據品質」。

### 3.2. 訊號偵測與代謝物鑑定方式為何？

我們以 [MZmine 4](https://mzmine.org/) 進行 LC-MS 訊號偵測（feature detection），取得每個訊號的 m/z、滯留時間（retention time, RT）與波峰高。

之後與本核心實驗室建立的標準品資料庫比對 m/z（誤差 10 ppm 以內）與滯留時間，比對成功的訊號才標註為該代謝物。脂質體分析使用脂質標準品資料庫。

比對後的資料依樣品型態正規化：

- 組織樣品：依樣品秤重正規化。
- 其他樣品（血漿、血清、尿液、細胞等）：依各樣品總訊號強度正規化。

未偵測到的數值以該代謝物最小值的一半補值，再取 log₂ 轉換後進行統計分析。

### 3.3. 統計分析方法為何？

報告包含以下分析：

- **多變量分析**：PCA 檢視整體分群與離群樣品；PLS-DA 以 5-fold 交叉驗證計算 Q²，並以 200 次 permutation test 檢驗模型；以 VIP 值排序各代謝物對分組的貢獻度。
- **單變量分析**：兩組比較使用 Welch's t-test，配對設計使用 paired t-test。多重比較以 Benjamini–Hochberg 法計算 FDR。倍數變化（fold change, FC）以 log₂ 轉換後的資料計算。
- **代謝途徑分析**：以顯著代謝物進行 KEGG 代謝途徑富集分析（over-representation analysis）。

顯著代謝物以分層標準篩選。依序套用以下標準，直到篩出 3 個以上的代謝物：

| 層級 | 標準 | 說明 |
|---|---|---|
| Tier 1 | FDR < 0.05 | 最嚴格，已校正多重比較 |
| Tier 2 | raw p < 0.05 | 未校正，需謹慎解讀 |
| Tier 3 | VIP > 1.0 且 Q² > 0.3 | 模型導向，屬探索性 |
| Tier 4 | FC > 1.5 且 raw p < 0.1 | 效果量優先，屬探索性 |

樣本數少時（例如每組 3 個），通常無法達到 Tier 1，報告會註明實際採用的層級。

至於適當的統計方式建議，可以在您取得分析報告後與**Metacore Lab** (ntumetacore@gmail.com)聯絡並與曾宇鳳教授約時間討論並詢問是否有合適或是建議的統計分析方式。

## 4. 報告解讀詢問

### 4.1. 為何報告中會有同名的代謝物？

初步定性分析中，若該代謝物的搜尋範圍內，偵測到多個波峰，多個波峰皆有可能是該代謝物，此為本分析方法限制。

從PeakTable內每一個row代表一個波峰訊號，而不是一個row為一個代謝物，所以在檔案內標註是PeakName，而不是MetaboliteName。我們使用標準品資料庫的m/z與retention time (RT)對波峰比對，若比對到多個代謝物，則會以 \| 做區隔，例如: Betaine \| L-Valine

如果代謝物們m/z非常接近且RT也接近，代謝物們訊號是有可能交疊出現而被偵測到，所以如果想檢視的代謝物屬於極性小分子，我們會建議改用適合極性小分子的HILIC分析平台 （LC-MS polar metabolic profiling），可將極性小分子更有效分離避免代謝物交疊出現情形。

如果代謝物名字後面有 (1) (2) 則代表該代謝物的m/z與RT容忍範圍內有偵測到多個波峰，數字代表出現的順序，如L-Alanine (1)，L-Alanine (2)為偵測到兩個波峰都可能是L-Alanine，如果經統計檢定判斷是顯著差異的波峰，可以進行MS/MS實驗再確認。

PeakName後面\[M+H\]+或\[M+Na\]+代表小分子經過離子化之後帶有氫離子或鈉離子而被偵測到。

### 4.2. 報告中數值代表的意思為何？

一般使用者常會誤認為報告中數值即為偵測到之代謝物濃度，但此數值真正意思為**訊號強度**：可以視為和濃度有正比關係。原始 peak table 中的數值 0 代表該樣品沒有偵測到這個訊號；統計分析前會以該代謝物最小值的一半補值（見 3.2）。

### 4.3. 報告的結果是定量還是定性？

我們提供的服務有分相對定量和絕對定量

1\. 相對定量(僅提供訊號強度值)：

LC-MS metabolic profiling (T3 column)

LC-MS lipidomic profiling

LC-MS polar metabolic profiling (HILIC column)

Fatty Acid Relative Quantitation Analysis - 23種脂肪酸相對定量分析

2\. 絕對定量(提供絕對濃度值)：

Fatty Acid Absolute Quantitation Analysis - 23種脂肪酸絕對定量分析

如果在相對定量研究中發現具有統計差異的代謝物或是想對有興趣的代謝物做定量的分析，請向**Metacore Lab** (ntumetacore@gmail.com)聯絡。我們將為您做進一步的說明。

### 4.4. 分析報告包含許多檔案，我該用哪一個？

報告以壓縮檔交付。解壓縮後請先看 README.txt，再用瀏覽器開啟 report.html。

| 檔案 | 內容 |
|---|---|
| `analysis_N/report.html` | 主要報告：數據品質、PCA／PLS-DA、火山圖、顯著代謝物、熱圖、代謝途徑分析。第 6 章 Methods 為英文，可供撰寫論文參考 |
| `analysis_N/figures/` | 報告中各圖的 300 DPI 圖檔（PNG、PDF） |
| `analysis_N/significant_metabolites.csv` | 顯著代謝物清單 |
| `analysis_N/tier_result.txt` | 採用的顯著性層級與代謝物數量 |
| `analysis_N/pathway/pathway_results.csv` | 代謝途徑分析結果 |
| `results_targeted_metaboanalyst_analysis_N.csv` | 正規化後的代謝物矩陣，可匯入 MetaboAnalyst 做進一步分析 |
| `*_peak_table.csv` | 比對到標準品的代謝物原始波峰高（未正規化） |
| `*_MappingTable.csv` | 樣本與分組對應表 |

每個比較組合（Analysis）有一個 analysis_N 資料夾。

想先看報告的樣子，可以下載[示範報告](../files/metacore-demo-report.zip)。示範報告的內容全部為模擬資料（小鼠肝臟，Control vs. 高脂飲食，每組 3 個樣本），不可引用。

## 5. 未分類之詢問

### 5.1. Pilot study 會建議使用多少樣本？

一般建議是約30個樣本，如仍有疑問請向**Metacore Lab** (ntumetacore@gmail.com)聯絡並與曾宇鳳教授與郭錦樺教授約時間討論樣本數是否足夠進行pilot study。

### 5.2. 請問要如何引用你們的實驗數據處理方法？

現行分析流程的方法說明在報告第 6 章（Methods），可直接參考。建議引用以下文獻：

Hung, Y.-A., Kuo, T.-C., Tseng, Y. J., et al. (2025). Identifying novel metabolites in children with attention-deficit hyperactivity disorder through metabolome profiling. *Translational Psychiatry*, *15*, 180. ([連結](https://doi.org/10.1038/s41398-025-03393-5))

Chen, C.-H. S., Kuo, T.-C., Kuo, H.-C., Tseng, Y. J., Kuo, C.-H., Yuan, T.-H., & Chan, C.-C. (2021). Lipidomics of children and adolescents exposed to multiple industrial pollutants. *Environmental Research*, *201*, 111448. ([連結](https://doi.org/10.1016/j.envres.2021.111448))

訊號偵測使用 MZmine，多變量分析使用 mixOmics：

Schmid, R., Heuckeroth, S., Korf, A., Smirnov, A., et al. (2023). Integrative analysis of multimodal mass spectrometry data in MZmine 3. *Nature Biotechnology*, *41*, 447–449. ([連結](https://doi.org/10.1038/s41587-023-01690-2))

Rohart, F., Gautier, B., Singh, A., & Lê Cao, K.-A. (2017). mixOmics: An R package for 'omics feature selection and multiple data integration. *PLOS Computational Biology*, *13*(11), e1005752. ([連結](https://doi.org/10.1371/journal.pcbi.1005752))

**早期案件**：以下為早期分析流程使用的方法。早期案件的數據透過TIPick這套演算法分析，而資料若有涉及多個batch，則會使用到BatchNormalizer這套演算法來解決分批樣本處理過程中產生的訊號大小差異。另外若有申請metabolic pathway analysis，則需要引用3omics。

以下為處理過程中提及之數據處理方法之論文連結與APA format citation。

True ion pick (TIPick): a denoising and peak picking algorithm to extract ion signals from liquid chromatography/mass spectrometry data ([連結](http://www.ncbi.nlm.nih.gov/pubmed/23378096))

Ho, T. J., Kuo, C. H., Wang, S. Y., Chen, G. Y., & Tseng, Y. J. (2013). True ion pick (TIPick): a denoising and peak picking algorithm to extract ion signals from liquid chromatography/mass spectrometry data. *Journal of Mass Spectrometry*, *48*(2), 234-242.

Batch Normalizer: A Fast Total Abundance Regression Calibration Method to Simultaneously Adjust Batch and Injection Order Effects in Liquid Chromatography/Time-of-Flight Mass Spectrometry-Based Metabolomics Data and Comparison with Current Calibration Methods ([連結](http://pubs.acs.org/doi/abs/10.1021/ac302877x))

Wang, S. Y., Kuo, C. H., & Tseng, Y. J. (2012). Batch Normalizer: a fast total abundance regression calibration method to simultaneously adjust batch and injection order effects in liquid chromatography/time-of-flight mass spectrometry-based metabolomics data and comparison with current calibration methods. *Analytical chemistry*, *85*(2), 1037-1046.

3Omics: a web-based systems biology tool for analysis, integration and visualization of human transcriptomic, proteomic and metabolomic data ([連結](http://www.biomedcentral.com/1752-0509/7/64))

Kuo, T. C., Tian, T. F., & Tseng, Y. J. (2013). 3Omics: a web-based systems biology tool for analysis, integration and visualization of human transcriptomic, proteomic and metabolomic data. *BMC systems biology*, *7*(1), 64.

### 5.3. 教授聯絡資訊

| 姓名職稱 | 電話 | e-mail |
|---|---|---|
| 曾宇鳳教授 | (02) 3366-4888 #529 | yjtseng@csie.ntu.edu.tw |
| 郭錦樺教授 | (外線) (02) 3366-8766 <br>(臺大內線)先撥606，再撥68766 | kuoch@ntu.edu.tw |

### 5.4 請問是否有使用你們分析服務發表之論文清單？

- [The metabolome profiling and pathway analysis in metabolic healthy and abnormal obesity.](http://www.ncbi.nlm.nih.gov/pubmed/25907313)
- [Fasting but not changes of plasma metabolome during oral glucose tolerance tests improves the diagnosis of severe coronary arterial stenosis.](http://www.ncbi.nlm.nih.gov/pubmed/25557422)
- [Metabolomics of ginger essential oil against alcoholic fatty liver in mice.](http://www.ncbi.nlm.nih.gov/pubmed/24171385)
