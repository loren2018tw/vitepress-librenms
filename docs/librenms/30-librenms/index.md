# LibreNMS - SNMP 網路管理系統

## 什麼是 LibreNMS?
LibreNMS 是一套支援 SNMP 協定的「網路管理系統」（NMS）。 官方網站： https://www.librenms.org/

## 什麼是 SNMP : 簡易網路管理通訊協定 (SNMP) 
這篇寫得很完整 [SNMP 教程](https://www.manageengine.com/tw/network-monitoring/what-is-snmp.html)

***GET/GET NEXT/GET BULK/SET*** NMS 使用 port 161 傳送請求給網路裝置，裝置使用 port 161 回傳資料給 NMS
![](snmp-get-response.gif)

***TRAP*** 網路裝置也可以主動傳送資料給 NMS
![](snmp-trap.gif)


## 安裝 librenms
1. 前往 LibreNMS 官方網站，[安裝說明頁](https://www.librenms.org/#downloads)有各種系統的安裝方式

2. 我們將直接採用官方製作好的虛擬機匯入檔，簡化安裝的步驟
![](2023-12-15-18-40-06.png)
下載 virtualbox 的虛擬機匯入檔
![](2023-12-15-18-40-55.png)

3. 匯入下載的印象檔，用來建立新的虛擬機
![](2023-12-15-18-43-15.png)
![](2023-12-15-18-44-26.png)
![](2023-12-15-18-45-14.png)

按下完成後，稍待虛擬機建立好，先進入虛擬機的設定，將錄製選項取消勾選。這個選項會將整個虛擬機的畫面錄製成影片。
![](2023-12-15-18-57-31.png)

匯入檔網路部份雖然是使用 NAT，但是他已經有設定連結埠轉送，所以也**沒必要**改成「橋接模式」。
![](2023-12-15-19-03-08.png)
這個設定就是說，你在 host 端的瀏覽器，連接 http://localhost:8080 就等於是連到 guest 端機器的 80port。

接著我們啟動這個虛擬機後一個完整的 ubuntu + LibreNMS 系統就完成了。
在我們電腦了瀏覽器，開啟 http://localhost:8080 就可以看到 LibreNMS 的網頁 GUI 界面了。
虛擬機預設的 LibreNMS 的帳密是
username: librenms
password: D32fwefwef
![](2023-12-15-19-16-54.png)

虛擬機 ubuntu 作業系統( ssh )的帳密是
username: librenms
password: CDne3fwdfds