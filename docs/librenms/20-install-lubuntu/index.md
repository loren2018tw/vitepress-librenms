# Lubuntu 22.04 安裝 

## 製作 lubuntu 安裝開機 usb
1. 下載 lubuntu 22.04 iso 檔，使用軟體製作 usb 開機檔

lubuntu 22.04 (https://lubuntu.me/downloads/)

rusuf (https://rufus.ie/zh_TW/)

## 安裝 lubuntu
1.使用 usb 開機，執行第一個選項，就會先以 live cd 的模式進入 lubuntu 作業系統的界面，點選桌面的 install Lubuntu 圖示，就會開始安裝 lubuntu 
![](2023-12-14-12-27-03.png)

![install_lubuntu](2023-12-12-08-49-03.png)

2.依照安裝指示一直按下一步即可，以下僅顯示需要做選擇或輸入的部份提示
![](2023-12-12-08-49-52.png)

![](2023-12-12-08-50-07.png)

安裝完成後，移除 usb 後重新開機

## 安裝 Guest Additions
為了讓 host主控端要跟虛擬機（guest端）做進階的功能聯繫，所以虛擬機需要安裝 virtualbox 的 guest addition 程式
   
![](2023-12-14-14-10-57.png)

![](2023-12-15-13-47-41.png)

因為必須使用 root 權限執行，我們可以開啟終端機視窗，從檔案總管開啟終端機視窗，會直接跳到目前所在目錄
![](2023-12-15-13-55-00.png)

執行以下命列， sudo 允許一般用戶以 root 或其他特定帳號執行程式
`sudo ./VBoxLinuxAdditions.run `

![](2023-12-15-13-58-51.png)
安裝完成後請重新開機，重開機後 guest 就支援畫面更大的解析度，以及 host 跟 guest 雙向剪貼簿功能，可以在一邊複製後，貼到另一邊

## 安裝中文輸入法，在終端機（命令列）視窗內，
![](2023-12-12-08-50-31.png)

執行以下指令安裝中文輸入法， apt 是 ubuntu 、 debian 系統的套件安裝程式。

`sudo apt install fcitx5-chewing`


備註： 不使用命令列安裝軟體，從功能表執行「」
![](2023-12-12-08-51-47.png)

![](2023-12-12-08-51-58.png)


## 常用軟體推薦，請試著自己安裝看看

gimp、inkscape、krita... 我就喜歡這種 linux 跟 windows 都有的應用程式，用久就會發現「作業系統」不是重點，應用程式才是。
