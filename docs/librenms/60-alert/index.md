# 警報

裝置離線或是溫度過高， LibrenNMS 可以發出警報提醒，除了顯示警報在 LireNms 界面外，還可以使用多種通詢方式 ex mail、sms、telegram 通知網管
以下將介紹使用 telergam 來傳送警報訊息

## telegram 安裝及中文化
可先參考以下網頁，安裝 telegram [telegram 安裝及中文化](https://www.pkstep.com/archives/13832)

# 申請 telegram bot

在 telergram 搜尋 @botfather 這個帳號，然後點入跟這個機器人聊天
![](2023-12-22-13-59-45.png)

在聊天室打上依序打上地下的內容，就可以取得機器人的 token，請記住這個資訊
![](2023-12-22-14-13-03.png)

接著在瀏覽器打上，將<你的token>替換成前面取到的 token

[https://api.telegram.org/bot<你的token>/getUpdates](https://api.telegram.org/bot<你的token>/getUpdates)

我們需要的就是回傳資料裡面的聊天室id(chat id)

![](2023-12-22-16-16-05.png)

## 建立 librenms 警報傳送器
1. 
![](2023-12-22-16-17-52.png)
2. 
![](2023-12-22-16-18-40.png)
3. 傳送器類型選擇：telegram。 填入前面取得的 chat id 跟 token，格式可以選擇 HTML 也可以順便設定為預設的傳送器
![](2023-12-22-16-21-06.png)

## 建立警報規則
1. 執行主選單【選單/警報規則】
![](2023-12-22-16-35-20.png)

2. 中間有個按鈕，點下去就會建立很多預設的規則，有興趣可以直接建立，然後觀看學習。 Librenms 也收集很多規則可以套用，所以手動建立規則也很方便
![](2023-12-22-16-34-55.png)

3. 以下使用 Create rule from collection 手動建立，按下 Create rule from collection 按鈕，裡面有收集很多規則，我們選擇 Devices up/down ，當裝置離線時，就會產生警報
![](2023-12-22-16-42-38.png)
設定警報條件
![](2023-12-22-17-03-46.png)

##





```
@if ($alert-> state == 0) [[恢復]] @endif
@if ($alert-> state == 1) [[警報]] @endif
規則: {{ $alert->name }}
嚴重: {{ $alert->severity }}
時間: {{ $alert->timestamp }}
主機: {{ $alert->hostname }}
名稱: {{ $alert->sysDescr }}
IP: {{ $alert->ip }}
系統: {{ $alert->hardware }}
說明: {{ $alert->os }}
@if ($alert->faults)
@foreach ($alert->faults as $key => $value)
磁碟: {{ $value['storage_descr'] }}
容量: {{ $value['storage_size'] }}
使用率: {{ $value['storage_perc'] }}%
使用: {{ $value['storage_used'] }}
剩餘: {{ $value['storage_free'] }}
@endforeach
@endif


@if ($alert-> state == 0) [[恢復]] @endif
@if ($alert-> state == 1) [[警報]] @endif
規則: {{ $alert->name }}
嚴重: {{ $alert->severity }}
時間: {{ $alert->timestamp }}
主機: {{ $alert->hostname }}
OS: {{ $alert->os }}
IP: {{ $alert->ip }}
硬體: {{ $alert->hardware }}
說明: {{ $alert->sysDescr }}
@if ($alert->faults)
@foreach ($alert->faults as $key => $value)
服務: {{ $value['service_desc'] }}
類別: {{ $value['service_type'] }}
訊息: {{ $value['service_message'] }}
參數: {{ $value['service_param'] }}
@endforeach
Endif
```