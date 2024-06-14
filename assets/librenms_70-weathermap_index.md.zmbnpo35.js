import{_ as s,o as e,c as a,R as t}from"./chunks/framework.Rav5NEMf.js";const i="/vitepress-librenms/assets/2024-01-19-08-58-34.xDlIFfyh.png",r="/vitepress-librenms/assets/2024-01-19-11-38-28.M20f1QqU.png",p="/vitepress-librenms/assets/2024-01-19-11-39-38.e5mK_JCe.png",n="/vitepress-librenms/assets/2024-01-19-11-48-41.SVauYH8z.png",l="/vitepress-librenms/assets/2024-01-19-12-14-06.Y8W9z4Bt.png",o="/vitepress-librenms/assets/2024-01-19-12-25-20.c-BgB02O.png",h="/vitepress-librenms/assets/2024-01-19-12-36-15.2UDt8O2X.png",m="/vitepress-librenms/assets/2024-01-19-12-40-35.IjHE176Y.png",c="/vitepress-librenms/assets/2024-01-19-12-54-37.7bB8Xywm.png",d="/vitepress-librenms/assets/2024-01-19-13-32-02.N_TwoaBI.png",_="/vitepress-librenms/assets/2024-01-19-14-10-06.WALMgq3o.png",g="/vitepress-librenms/assets/2024-01-19-16-41-20.Cxw98EwY.png",A=JSON.parse('{"title":"Weathermap 網管也要看天氣？？","description":"","frontmatter":{},"headers":[],"relativePath":"librenms/70-weathermap/index.md","filePath":"librenms/70-weathermap/index.md"}'),b={name:"librenms/70-weathermap/index.md"},k=t('<h1 id="weathermap-網管也要看天氣" tabindex="-1">Weathermap 網管也要看天氣？？ <a class="header-anchor" href="#weathermap-網管也要看天氣" aria-label="Permalink to &quot;Weathermap 網管也要看天氣？？&quot;">​</a></h1><p><img src="'+i+`" alt=""></p><p>Weathermap 是用來視覺化網路傳輸跟實體線路頻寬的比例，用來觀察整體實體線路架構頻寬是否足夠。</p><p>官方安裝文件 <a href="https://docs.librenms.org/Extensions/Weathermap/" target="_blank" rel="noreferrer">https://docs.librenms.org/Extensions/Weathermap/</a></p><p>使用虛擬機安裝的 linrenms 已經內建 Weathermap 就可以直接使用不需要安裝步驟了。</p><p>不過說明文件內缺少了要安裝 php-pear Weathermap 才能正常使用，所以還是要手動安裝 php-pear，之後重新啟動 php-fpm (8.1是版本號碼，要依照系統安裝的版本做修改)</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-pear</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.1-fpm.service</span></span></code></pre></div><h2 id="開啟編輯器" tabindex="-1">開啟編輯器 <a class="header-anchor" href="#開啟編輯器" aria-label="Permalink to &quot;開啟編輯器&quot;">​</a></h2><ol><li></li></ol><p><img src="`+r+'" alt=""> 2. <img src="'+p+'" alt=""> 3. <img src="'+n+'" alt=""></p><h2 id="編輯輸出的網頁及圖形檔" tabindex="-1">編輯輸出的網頁及圖形檔 <a class="header-anchor" href="#編輯輸出的網頁及圖形檔" aria-label="Permalink to &quot;編輯輸出的網頁及圖形檔&quot;">​</a></h2><p>weathermap 會定時讀取 rrd 資料，然後將流量繪製至一個圖形檔，所以我們先設定要輸出的檔案名稱 <img src="'+l+'" alt=""></p><h2 id="加入節點" tabindex="-1">加入節點 <a class="header-anchor" href="#加入節點" aria-label="Permalink to &quot;加入節點&quot;">​</a></h2><ol><li><p>加入要顯示的交換器（防火牆）節點 <img src="'+o+'" alt=""> 1.先點選 Add Node 功能按鈕，然後在要放置節點的位置，點滑鼠左鍵，就會在圖面放上一個節點</p></li><li><p>點選節點，可以編輯節點的資料，我們假設左邊為 A 節點，右側為 B 節點，分別設定 A 、B 節點是哪台交換器，並選擇要顯示的圖示 <img src="'+h+'" alt=""></p></li><li><p>要移動節點位置、刪除節點、修改顯示名稱，則一樣點選節點，然後在編輯對話框執行對應的動作 <img src="'+m+'" alt=""></p></li></ol><h2 id="增加連線" tabindex="-1">增加連線 <a class="header-anchor" href="#增加連線" aria-label="Permalink to &quot;增加連線&quot;">​</a></h2><p>假設 A 交換器的 port 5 連接到 B 的 port 7， 我們在設定節點的資料時，只需要選擇 A port 5 或是 B port 7 其中一個 port 就可以設定好連線，所以要先決定等一下打算用 A port 5 或是 B port 7 來當資料。決定好之後，才能接下來的動作</p><p>我們假設要選 A port 5 ，當連線資料來源。接著點選 Add Link，然後依序點擊圖面上的 A節點圖示、B節點圖示，節點點選的順序很重要，不然連線顯示的資料方向會錯誤。 <img src="'+c+'" alt=""></p><p>接著點選連線（上圖步驟4），編輯連線的資料來源 <img src="'+d+'" alt=""> 第一欄要設定線路頻寬，這樣依流量佔頻寬比例會依比例不同顯示出不同顏色。然後選擇是哪個交換器的那一個port即可。</p><ol start="5"><li>weathermap 流量圖並是即時更新，預設是每五分鐘會重新繪製一次，要觀看繪製的圖形，請執行【概觀/外掛/Weathermap/流量標題】 <img src="'+_+'" alt=""></li></ol><h2 id="ipv6-連線-bug" tabindex="-1">ipv6 連線 BUG <a class="header-anchor" href="#ipv6-連線-bug" aria-label="Permalink to &quot;ipv6 連線 BUG&quot;">​</a></h2><p>如果 ipv6 的連結不會正常顯示，點選 ipv6 節點的 port之後，將 ipv6 位址的 : 改成下底線 _。 <img src="'+g+'" alt=""></p><h2 id="把流量圖加入資訊看板" tabindex="-1">把流量圖加入資訊看板 <a class="header-anchor" href="#把流量圖加入資訊看板" aria-label="Permalink to &quot;把流量圖加入資訊看板&quot;">​</a></h2><p>Wethermap 會產生一個 html 跟一個圖片檔。資訊看板中，有一個外部影像的小部件，只要複製圖片網址，就可以將 weathermap 圖片顯示在看板中。不過如果一開始就打算放在看板內， Weathermap 的圖片大小建議設定小一點，以免看板顯示的圖片不清楚。</p>',23),u=[k];function v(B,F,f,x,q,C){return e(),a("div",null,u)}const W=s(b,[["render",v]]);export{A as __pageData,W as default};