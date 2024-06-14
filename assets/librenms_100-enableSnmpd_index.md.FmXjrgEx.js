import{_ as e,o as a,c as s,R as t}from"./chunks/framework.Rav5NEMf.js";const n="/vitepress-librenms/assets/2024-04-30-15-52-00.mKs8p8Xc.png",p="/vitepress-librenms/assets/2024-04-30-16-09-49.Jh30eGLE.png",i="/vitepress-librenms/assets/2024-05-01-09-13-13.x_GMlZVj.png",u=JSON.parse('{"title":"防火牆、交換器（網路裝置）啟用 snmp 服務","description":"","frontmatter":{},"headers":[],"relativePath":"librenms/100-enableSnmpd/index.md","filePath":"librenms/100-enableSnmpd/index.md"}'),r={name:"librenms/100-enableSnmpd/index.md"},o=t('<h1 id="防火牆、交換器-網路裝置-啟用-snmp-服務" tabindex="-1">防火牆、交換器（網路裝置）啟用 snmp 服務 <a class="header-anchor" href="#防火牆、交換器-網路裝置-啟用-snmp-服務" aria-label="Permalink to &quot;防火牆、交換器（網路裝置）啟用 snmp 服務&quot;">​</a></h1><p>網路裝置本身需有支援 snmp 服務，這樣遠端的 snmp 管理系統才能連到裝置取得資料。因為每個網路裝置的web管理界面都不一樣，以下僅示範幾種裝置如何啟用 snmpd 服務。</p><p>snmp 服務有兩種限制遠端管理系統存取 snmp 資料的機制，一種是設定「社群名稱」，其實就類似密碼。遠端 snmp管理系統必須知道交換器設定的社群名稱，才能正確存取到資料。 另外一個機制是限制遠端機器的 ip 位址，這兩種機制必須同時符合交換器的設定，遠端 snmp 管理系統才能正確存取到資料。</p><p>社群名稱如果不想特別設定可以使用 public，有些機構喜歡用 OOOOread、OOOOsnmp ..來設定社群名稱。</p><p>限制的遠端 ip，一般會使用「ip/子網路遮罩長度」 的格式設定，例如 192.168.77.1/24 就表示只允許 140.128.179.20 這台機器存取。 設定成 0.0.0.0 通常表示所有遠端都可以跟我要資料。</p><h2 id="網路型印表機" tabindex="-1">網路型印表機 <a class="header-anchor" href="#網路型印表機" aria-label="Permalink to &quot;網路型印表機&quot;">​</a></h2><p>依我經驗，網路型印表機、影印機幾乎都預設開啟 snmpd （社群名稱： public）， 且不限制任何存取 ip。</p><h2 id="fortigate-100f" tabindex="-1">FortiGate 100f <a class="header-anchor" href="#fortigate-100f" aria-label="Permalink to &quot;FortiGate 100f&quot;">​</a></h2><p><img src="'+n+'" alt=""></p><p>ip 存取限制可以有多組設定，當然以下是錯誤示範，已經設定 0.0.0.0 表示同意所有機器存取，這樣後面的設定就都是多餘的。 <img src="'+p+'" alt=""></p><h2 id="zyxel-2220" tabindex="-1">Zyxel 2220 <a class="header-anchor" href="#zyxel-2220" aria-label="Permalink to &quot;Zyxel 2220&quot;">​</a></h2><p><img src="'+i+'" alt=""></p>',12),l=[o];function m(c,d,_,h,b,f){return a(),s("div",null,l)}const g=e(r,[["render",m]]);export{u as __pageData,g as default};
