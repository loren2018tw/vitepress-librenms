import{_ as s,o as a,c as n,R as e}from"./chunks/framework.Rav5NEMf.js";const t="/vitepress-librenms/assets/2023-12-22-13-59-45.qVo-v-6i.png",p="/vitepress-librenms/assets/2023-12-22-14-13-03.EF6Ta_c5.png",l="/vitepress-librenms/assets/2023-12-22-16-16-05.6WgpUN1Q.png",r="/vitepress-librenms/assets/2023-12-22-16-17-52.aIoyBtTV.png",i="/vitepress-librenms/assets/2023-12-22-16-18-40.flPfbBUH.png",c="/vitepress-librenms/assets/2023-12-22-16-21-06.TT7Tm2o5.png",o="/vitepress-librenms/assets/2023-12-22-16-35-20._KDaOvyb.png",m="/vitepress-librenms/assets/2023-12-22-16-34-55.XpZ4rPsG.png",g="/vitepress-librenms/assets/2023-12-22-16-42-38.v0fIDpag.png",d="/vitepress-librenms/assets/2023-12-22-17-03-46.q5sbeo4D.png",T=JSON.parse('{"title":"警報","description":"","frontmatter":{},"headers":[],"relativePath":"librenms/60-alert/index.md","filePath":"librenms/60-alert/index.md"}'),h={name:"librenms/60-alert/index.md"},_=e('<h1 id="警報" tabindex="-1">警報 <a class="header-anchor" href="#警報" aria-label="Permalink to &quot;警報&quot;">​</a></h1><p>裝置離線或是溫度過高， LibrenNMS 可以發出警報提醒，除了顯示警報在 LireNms 界面外，還可以使用多種通詢方式 ex mail、sms、telegram 通知網管 以下將介紹使用 telergam 來傳送警報訊息</p><h2 id="telegram-安裝及中文化" tabindex="-1">telegram 安裝及中文化 <a class="header-anchor" href="#telegram-安裝及中文化" aria-label="Permalink to &quot;telegram 安裝及中文化&quot;">​</a></h2><p>可先參考以下網頁，安裝 telegram <a href="https://www.pkstep.com/archives/13832" target="_blank" rel="noreferrer">telegram 安裝及中文化</a></p><h1 id="申請-telegram-bot" tabindex="-1">申請 telegram bot <a class="header-anchor" href="#申請-telegram-bot" aria-label="Permalink to &quot;申請 telegram bot&quot;">​</a></h1><p>在 telergram 搜尋 @botfather 這個帳號，然後點入跟這個機器人聊天 <img src="'+t+'" alt=""></p><p>在聊天室打上依序打上地下的內容，就可以取得機器人的 token，請記住這個資訊 <img src="'+p+'" alt=""></p><p>接著在瀏覽器打上，將&lt;你的token&gt;替換成前面取到的 token</p><p><a href="https://api.telegram.org/bot%3C%E4%BD%A0%E7%9A%84token%3E/getUpdates" target="_blank" rel="noreferrer">https://api.telegram.org/bot&lt;你的token&gt;/getUpdates</a></p><p>我們需要的就是回傳資料裡面的聊天室id(chat id)</p><p><img src="'+l+'" alt=""></p><h2 id="建立-librenms-警報傳送器" tabindex="-1">建立 librenms 警報傳送器 <a class="header-anchor" href="#建立-librenms-警報傳送器" aria-label="Permalink to &quot;建立 librenms 警報傳送器&quot;">​</a></h2><ol><li></li></ol><p><img src="'+r+'" alt=""> 2. <img src="'+i+'" alt=""> 3. 傳送器類型選擇：telegram。 填入前面取得的 chat id 跟 token，格式可以選擇 HTML 也可以順便設定為預設的傳送器 <img src="'+c+'" alt=""></p><h2 id="建立警報規則" tabindex="-1">建立警報規則 <a class="header-anchor" href="#建立警報規則" aria-label="Permalink to &quot;建立警報規則&quot;">​</a></h2><ol><li><p>執行主選單【選單/警報規則】 <img src="'+o+'" alt=""></p></li><li><p>中間有個按鈕，點下去就會建立很多預設的規則，有興趣可以直接建立，然後觀看學習。 Librenms 也收集很多規則可以套用，所以手動建立規則也很方便 <img src="'+m+'" alt=""></p></li><li><p>以下使用 Create rule from collection 手動建立，按下 Create rule from collection 按鈕，裡面有收集很多規則，我們選擇 Devices up/down ，當裝置離線時，就會產生警報 <img src="'+g+'" alt=""> 設定警報條件 <img src="'+d+`" alt=""></p></li></ol><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@if ($alert-&gt; state == 0) [[恢復]] @endif</span></span>
<span class="line"><span>@if ($alert-&gt; state == 1) [[警報]] @endif</span></span>
<span class="line"><span>規則: {{ $alert-&gt;name }}</span></span>
<span class="line"><span>嚴重: {{ $alert-&gt;severity }}</span></span>
<span class="line"><span>時間: {{ $alert-&gt;timestamp }}</span></span>
<span class="line"><span>主機: {{ $alert-&gt;hostname }}</span></span>
<span class="line"><span>名稱: {{ $alert-&gt;sysDescr }}</span></span>
<span class="line"><span>IP: {{ $alert-&gt;ip }}</span></span>
<span class="line"><span>系統: {{ $alert-&gt;hardware }}</span></span>
<span class="line"><span>說明: {{ $alert-&gt;os }}</span></span>
<span class="line"><span>@if ($alert-&gt;faults)</span></span>
<span class="line"><span>@foreach ($alert-&gt;faults as $key =&gt; $value)</span></span>
<span class="line"><span>磁碟: {{ $value[&#39;storage_descr&#39;] }}</span></span>
<span class="line"><span>容量: {{ $value[&#39;storage_size&#39;] }}</span></span>
<span class="line"><span>使用率: {{ $value[&#39;storage_perc&#39;] }}%</span></span>
<span class="line"><span>使用: {{ $value[&#39;storage_used&#39;] }}</span></span>
<span class="line"><span>剩餘: {{ $value[&#39;storage_free&#39;] }}</span></span>
<span class="line"><span>@endforeach</span></span>
<span class="line"><span>@endif</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>@if ($alert-&gt; state == 0) [[恢復]] @endif</span></span>
<span class="line"><span>@if ($alert-&gt; state == 1) [[警報]] @endif</span></span>
<span class="line"><span>規則: {{ $alert-&gt;name }}</span></span>
<span class="line"><span>嚴重: {{ $alert-&gt;severity }}</span></span>
<span class="line"><span>時間: {{ $alert-&gt;timestamp }}</span></span>
<span class="line"><span>主機: {{ $alert-&gt;hostname }}</span></span>
<span class="line"><span>OS: {{ $alert-&gt;os }}</span></span>
<span class="line"><span>IP: {{ $alert-&gt;ip }}</span></span>
<span class="line"><span>硬體: {{ $alert-&gt;hardware }}</span></span>
<span class="line"><span>說明: {{ $alert-&gt;sysDescr }}</span></span>
<span class="line"><span>@if ($alert-&gt;faults)</span></span>
<span class="line"><span>@foreach ($alert-&gt;faults as $key =&gt; $value)</span></span>
<span class="line"><span>服務: {{ $value[&#39;service_desc&#39;] }}</span></span>
<span class="line"><span>類別: {{ $value[&#39;service_type&#39;] }}</span></span>
<span class="line"><span>訊息: {{ $value[&#39;service_message&#39;] }}</span></span>
<span class="line"><span>參數: {{ $value[&#39;service_param&#39;] }}</span></span>
<span class="line"><span>@endforeach</span></span>
<span class="line"><span>Endif</span></span></code></pre></div>`,18),b=[_];function f(u,$,v,k,q,x){return a(),n("div",null,b)}const y=s(h,[["render",f]]);export{T as __pageData,y as default};
