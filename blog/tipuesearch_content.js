var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/41123237-Hank/cd2024 網站: https://41123237-hank.github.io/cd2024/ 簡報: https://41123237-hank.github.io/cd2024/reveal/ 網誌: https://41123237-hank.github.io/cd2024/blog/","tags":"misc","url":"./pages/about/"},{"title":"41123237 W12","text":"2024 協同產品設計實習課程第十二週內容 實習任務一: 請參考上列教學影片與參考程式, 將鋼球平衡台零組件的繪製與組立任務分配給組員, 由組員分別繳交至少一份零件繪製的 NXOpen Python 程式, 以及至少一份零件組立的 NXOpen Python 程式, 完成後, 請在個人的課程網誌紀錄 w12 實習任務一的執行心得。 心得: 這週使用NX繪製鋼球平衡台零組件,使用方式基礎和其他繪圖程式大致相同,目前還在摸索功能中,此次也使用NX內錄製工具將繪製過程記錄下來。 檔案: NX零件圖檔 NX繪製過程 參考檔案: 參考零件檔 實習任務二: 將分組倉儲設為評分網站子模組 1 實習任務三: 跨網路操控足球機器人進行競技","tags":"41123237 W12","url":"./41123237 W12.html"},{"title":"41123237 W10","text":"2024 協同產品設計實習課程第十週內容 W10 實習的任務二: 請下載 cd2024_ball_balancing_platform_control_ref.7z 閱讀後請將摘要內容放入個人與分組網誌中 摘要 在動態系統領域操作時，控制理論及其應用至關重要。對於固有不穩定或半穩定的系統，補償干擾和外部作用是必要的。通過建造一個實驗裝置作為理論的演示器，進一步比較源自牛頓力學的實際物理和電腦模擬結果。為了進行比較，需要設計一個滿足系統要求的滿意控制器。關於裝置和控制，引入一種比例-積分-微分控制器，用於平衡平台上的球體。進一步允許分析以確定穩定自然不穩定或半穩定系統的限制。還要檢查這些與理論期望之間的差異。 論文中應用的控制是線性的類型，僅能在線性控制的範圍內正常運作。使用標準組件和微控制器，構建了一個裝置來保持平台上的球體。這是通過使用Arduino庫和開源代碼進行編程來實現的。因此，為了研究目的，查看該裝置是否能在控制的線性領域內正常運作。 有了上述說明，本論文將首先通過計算機輔助程序來論述球在平台情境的理論模型。然後將理論結果與從物理建構獲得的結果進行比較。進一步檢查在考慮控制理論和系統實現時為何會出現差異。 關鍵詞— 機電系統、控制理論、平衡、PID、球體、平台、Arduino、伺服 原文 Abstract Control theory and its applications are crucial when operating within the area of dynamic systems. Compensating for disturbances and external actions imposed on a given system being inherently unstable or semi-stable. Through the physical construction of a apparatus as a demonstrator of the theory further comparing the factual physical and computer simulated results derived from Newtonian mechanics. To enable comparison, designing a satisfactory controller capable of fulfilling the requirements set for the system is necessary. With regards to apparatus and control, the introduction of a proportional-integralderivative controller for a system balancing a ball on a platform. Further allowing for analysis to determine the limitations when stabilizing a naturally unstable or semi-stable system. Also, examine how these differ from the theoretical expectations. The control applied throughout the thesis is of the type linear, exclusively being able to operate properly within the linear spectrum of control. Using standard components and a microcontroller, a apparatus is constructed to maintain a ball on a platform. This is executed through programming with Arduino libraries and open source code. Hence, for research purposes, to see if the apparatus can operate satisfactory within the linear domain of control. With the aforementioned stated, this thesis will first cover the theoretical model of the ball on platform scenario through computer aided programs. Then compare the theoretical results with the results acquired from a physical construction. Further examine why differences occur considering control theory and system implementation. Keywords— mechatronics, control theory, balancing, PID, ball, platform, Arduino, servo iii 各篇論文要點摘要： 論文一：Construction and theoretical study of a ball balancing platform 探討自動控制理論在穩定動態系統時的局限性，以球體平衡平台為例。 建立球體平衡平台的理論模型，並與實際搭建的平台進行比較。 分析理論與實際結果之間的差異，探討控制理論與系統實施的挑戰。 結論： 線性控制可以實現球體平衡平台的良好性能，但存在靜態誤差。 理論與實際結果的差異主要來自於物理模型的誤差和電子元件的非理想特性。 穩定動態系統的性能受限於狀態調整的靈活性、控制器設計和輸入數據的準確性。 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation 提出基於 PID 控制器的解決方案，以提高球體在平台上的位置調節精度。 使用 FPGA 實現平行計算，以提高系統速度和性能。 開發球體平衡平台的轉移函數，並合成 PID 控制器。 結論： 透過 FPGA 平行計算實現的 PID 控制器能有效提高球體位置調節精度。 該方案可應用於控制具有多個參數的高速物件。 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach 設計和比較三種控制結構，用於自動穩定球體在平台上的位置和軌跡追踪：PD 控制器、狀態空間反饋和帶狀態空間回饋的狀態空間觀測器。 使用牛頓法推導球體平衡平台的數學模型，並設計直流電機位置迴路控制。 結論： 三種控制結構均能實現穩定控制，但狀態空間觀測器具有最佳性能。 該研究建立了一個教育平台，用於向非技術人員解釋基本控制系統原理。 論文四：Design and Implementation a Ball Balancing System for Control Theory Course 開發一個球體平衡系統，使用微控制器和控制演算法來調節球體在梁上的平衡。 利用超聲波傳感器獲取球體位置，並使用 PID 控制演算法調整梁的角度。 開發介面程式，將即時位置曲線繪製在 MATLAB 中。 結論： 球體平衡系統是一個低成本的教育工具，可用於教授控制理論的應用。 該系統允許學生將理論知識應用於實踐中，並了解封閉迴路回饋系統和 PID 演算法的原理。 論文五：Ball on the plate balancing control system 設計一個二自由度球體平衡實驗平台，用於測試和驗證平衡控制演算法。 使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 結論： 該系統使用步進電機替代伺服電機，並無需外部電腦進行圖像處理，具有成本效益和易於控制的優勢。 未來計劃改進球體位置回饋信號的濾波，以提高控制系統的速度和品質。 論文六：2D Ball Balancer Control using QUARC 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 結論： PD 和 PID 控制器均能實現球體位置控制，但 PID 控制器在跟踪斜坡和正弦參考信號時具有更好的性能。 該實驗涵蓋了建模、控制器設計、模擬和實施等多個控制系統的關鍵步驟，為學生提供了寶貴的學習經驗。","tags":"41123237 W10","url":"./41123237 W10.html"},{"title":"41123237 W9","text":"2024 協同產品設計實習課程期中考週內容 期中影片 期中統整影片 影片: 使用github codespaces 更新網誌內容 學習latex程式編寫翻譯文章 使用AI協助課程影片編寫字幕","tags":"41123237 W9","url":"./41123237 W9.html"},{"title":"41123237 W4","text":"2024 協同產品設計實習課程第四週教學內容 Odoo 參考文章中英並列 利用Latex語法編寫翻譯的odoo文章 odoo文章翻譯 * 負責的頁數為1-30頁 * latex文件檔 * Odoo 參考文章","tags":"41123237 W4","url":"./41123237 W4.html"},{"title":"41123237 W5","text":"2024 協同產品設計實習課程第五週內容 w5 2b 分組任務 請各組自行搜尋前面已經發布的教學影片, 分別在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 負責第7、8、9部影片 第7部 (cd2024 2b 7 w2 利用 codespaces 維護分組網站) 第8部 (cd2024 2b w3 latex 轉期中報告) 第9部 (cd2024 2b w3 如何利用 Gidpod 維護分組網站) 字幕逐字稿 第7 第8 第9","tags":"41123237 W5","url":"./41123237 W5.html"},{"title":"41123237 W3","text":"2024 協同產品設計實習課程第三週教學內容 LaTeX 轉 pdf 機制 學習使用Latex語法編寫中英並列的(Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析)文章,且使用chatgpt協助語法編寫以及翻譯內容。 利用可攜程式編譯 LaTeX 下載(需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 下載 latex_images_github.7z (需要密碼) 協同產品設計實習分組期中報告 LaTeX 範本: 下載 cd2024_midterm miktex-portable.7z _report_latex_ex.7z","tags":"41123237 W3","url":"./41123237 W3.html"},{"title":"41123237 W2","text":"2024 協同產品設計實習課程第二週教學內容 利用 Github Classroom 指定分組倉儲 在第二週時,首先組長建立分組倉儲,組員們也加入github classroom的分組 利用 Codespaces 維護倉儲與網站 學習如何使用Codespaces來維護倉儲與網站 設定網誌 透過教學影片了解網誌如何撰寫,持續熟悉中","tags":"41123237 W2","url":"./41123237 W2.html"},{"title":"41123237 W1","text":"2024 協同產品設計實習課程第一週教學內容 建立個人倉儲 在第一週使用github創建個人倉儲,首先登入 github.com, 連結到 https://github.com/mdecycu/cmsimde_site, 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲 需下載的可攜套件檔案 下載可攜程式環境: portable_2024.7z 下載 miktex-portable.7z 設定 Github 帳號的雙重認證","tags":"41123237 W1","url":"./41123237 W1.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};