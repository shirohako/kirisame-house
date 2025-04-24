---
title: 🇸🇬 ISIF Cloud | Singapore | 测试报告
cover: https://i.psray.net/i/2025/04/25/680a769ac72c4.jpg
date: 2025-04-25
tags: [SG , ISIF]
description: ISIF Cloud 提供了本次测试的机器
---

## 🖥️ 简介

ISIF Cloud 在 TG 频道发布了促销，上线了新的面向大陆优化的 🇸🇬 新加坡 服务器。
另外有售香港(大陆优化)和日本地区的VPS产品。

### 💻 订购

商品需要注册后才能看得到，以下是商家提供的限量促销 Offers

SG.SGP-B.1C0G-CO

- CPU: 1 vCPU EPYC
- RAM: 768MB RAM
- Storage: 20GB SSD
- Traffic: 1000GB
- Bandwidth: 1000Mbps
- IPv4: 1 IPv4 + 256 IPv6/64
- Location:  🇸🇬 Singapore
- Price: €4.8 month / €36 per year

{% btn 'https://cloud.isif.net/login?affiliation_code=kirisame',购买,far fa-hand-point-right,purple block larger %}

SG.SGP-B.1C1G-CO

- CPU: 1 vCPU EPYC
- RAM: 1GB RAM
- Storage: 40GB SSD
- Traffic: 20000 GB
- Bandwidth: 2500Mbps
- IPv4: 1 IPv4 + 256 IPv6/64
- Location:  🇸🇬 Singapore
- Price: €10 month / €60 per year


{% btn 'https://cloud.isif.net/login?affiliation_code=kirisame',购买,far fa-hand-point-right,purple block larger %}

SG.SGP-B.2C2G-CO

- CPU: 2 vCPU EPYC
- RAM: 2GB RAM
- Storage: 60GB SSD
- Traffic: 5TB
- Bandwidth: 5000Mbps
- IPv4: 1 IPv4 + 256 IPv6/64
- Location:  🇸🇬 Singapore
- Price: €20 month / €120 per year

{% btn 'https://cloud.isif.net/login?affiliation_code=kirisame',购买,far fa-hand-point-right,purple block larger %}


SG.SGP-B.4C4G-CO

- CPU: 4 vCPU EPYC
- RAM: 4G RAM
- Storage: 80GB SSD
- Traffic: 10TB
- Bandwidth: 10000Mbps
- IPv4: 1 IPv4 + 256 IPv6/64
- Location:  🇸🇬 Singapore
- Price: €40 month / €240 per year


{% btn 'https://cloud.isif.net/login?affiliation_code=kirisame',购买,far fa-hand-point-right,purple block larger %}


## 🏪 商家信息

### Looking Glass && Test IP

{% note purple 'fas fa-fan' simple %}
Test IPv4: 46.3.193.24
{% endnote %}


### 支付方式

- AliPay (Stripe)
- AliPay (HK)
- PayPal
- Cryptomus

### 基本条款

https://docs.isif.net/service-agreement.html

### Whois

商家域名的 Whois 信息

> Domain Name: ISIF.NET
> Registry Domain ID: 2204144599_DOMAIN_NET-VRSN
>
> Registered On: 2017-12-24T19:33:11Z
> Expires On: 2025-11-27T12:51:41Z
> Updated On: 2024-12-18T15:46:57Z

### TG 交流群和频道

商家的 Telegram 群组和频道

Telegram Channel: https://t.me/isifchannel

## 📊 测试报告

测试机型为最低配置的 `SG.SGP-B.1C0G-CO`

### Bench.sh

```benchsh
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2024-11-11
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 7B13 64-Core Processor
 CPU Cores          : 1 @ 2250.000 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 19.6 GB (1.8 GB Used)
 Total Mem          : 711.1 MB (208.3 MB Used)
 System uptime      : 10 days, 18 hour 27 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.13.11-x64v3-xanmod1
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS49304 SAKURA LINK LIMITED
 Location           : Singapore / SG
 Region             : Singapore
----------------------------------------------------------------------
 I/O Speed(1st run) : 494 MB/s
 I/O Speed(2nd run) : 467 MB/s
 I/O Speed(3rd run) : 472 MB/s
 I/O Speed(average) : 477.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    1046.10 Mbps      993.56 Mbps         1.24 ms     
 Paris, FR        718.95 Mbps       543.00 Mbps         154.64 ms   
 Amsterdam, NL    500.41 Mbps       1001.63 Mbps        163.02 ms   
 Hong Kong, CN    999.13 Mbps       696.78 Mbps         46.25 ms    
 Singapore, SG    1047.00 Mbps      1009.66 Mbps        1.39 ms     
 Tokyo, JP        711.01 Mbps       727.90 Mbps         123.86 ms   
----------------------------------------------------------------------
 Finished in        : 2 min 40 sec
 Timestamp          : 2025-04-24 14:25:34 UTC
----------------------------------------------------------------------
```

### 硬件方面

使用综合测试脚本：oneclickvirt/ecs

```ecshardware
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:    785.59
8 线程测试(多核)得分:   5541.81
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 7950.27 MB/s  (8.34K IOPS, 5s)
单线程顺序读速度: 16249.30 MB/s (17.04K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       155.58 MB/s(38.9k)      155.99 MB/s(39.0k)      311.56 MB/s(77.9k)      
/root         64k      873.70 MB/s(13.7k)      878.30 MB/s(13.7k)      1.75 GB/s(27.4k)        
/root         512k     1.25 GB/s(2443)         1.32 GB/s(2573)         2.57 GB/s(5016)         
/root         1m       1.38 GB/s(1345)         1.47 GB/s(1435)         2.85 GB/s(2780)         
```

### IP 质量检测

使用综合测试脚本：oneclickvirt/securityCheck

```securitycheck
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 64 [8] 
VPN得分(越低越好): 0 [8] 
代理得分(越低越好): 8 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 6 [1] 0 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0002 (Very Low) [A] 
公司滥用得分(越低越好): 0.0005 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2] 可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: business [8] consumer [9] unknown [C] isp [0 7 A] FixedLineISP [3]
公司类型: isp [0 7 A] 
是否云提供商: No [7 D]
是否数据中心: No [0 1 5 6 8 A C] 
是否移动设备: Yes [5 A E] No [C]
是否代理: No [0 1 4 5 6 7 8 9 A C D E] 
是否VPN: No [0 1 6 7 A C D E] 
是否Tor: No [0 1 3 6 7 8 A C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 313(Total_Check) 0(Clean) 7(Blacklisted) 11(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 6 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0002 (Very Low) [A] 
公司滥用得分(越低越好): 0.0005 (Very Low) [A] 
安全信息:
使用类型: FixedLineISP [3] isp [A]
公司类型: isp [A] 
是否云提供商: No [D] 
是否数据中心: No [1 A] 
是否移动设备: Yes [A] 
是否代理: No [1 A D]
是否VPN: No [1 A D] 
是否TorExit: No [1 D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 313(Total_Check) 0(Clean) 0(Blacklisted) 313(Other) 
```

### 邮件端口检测

使用综合测试脚本：oneclickvirt/portchecker

```portchecker
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✔     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✔     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✘     ✔     ✘     ✔     ✘    
```

### 三网回程

使用综合测试脚本：oneclickvirt/backtrace

```backtrace
上海联通v4 210.22.97.1              联通4837   [普通线路] 
广州电信v4 58.60.188.222            电信163    [普通线路] 
广州联通v4 210.21.196.6             联通4837   [普通线路] 
成都电信v4 61.139.2.69              电信163    [普通线路] 
成都联通v4 119.6.6.6                联通4837   [普通线路] 
```

### 大陆三网PING测试

```ping
电信上海           7 | 电信扬州          10 | 电信江苏          17 | 
电信武汉          19 | 电信天津          19 | 电信浙江          20 | 
电信湖北          20 | 电信长沙          23 | 电信山东          24 | 
电信福建          25 | 电信河南          25 | 电信南京          25 | 
电信河北          26 | 电信广东          26 | 电信苏州          26 | 
电信Suzhou5G      27 | 电信湖南          27 | 电信Zhenjiang5G   27 | 
电信陕西          28 | 电信山西          30 | 电信重庆          30 | 
电信内蒙古        31 | 电信北京          34 | 电信贵州          36 | 
电信四川          37 | 电信青海          39 | 电信广西壮族      39 | 
电信海南          40 | 电信辽宁          41 | 电信甘肃          41 | 
电信宁夏          42 | 电信黑龙江        42 | 电信云南          43 | 
电信江西          46 | 电信吉林          58 | 电信安徽          60 | 
电信新疆          69 | 电信西藏          71 | 
移动上海           3 | 移动浙江           9 | 移动杭州5G         9 | 
移动杭州           9 | 移动江苏          12 | 移动江西          14 | 
移动山东          16 | 移动福州          17 | 移动Fujian        18 | 
移动安徽          18 | 移动天津          19 | 移动福建          20 | 
移动湖北          23 | 移动湖南          23 | 移动陕西          27 | 
移动北京          28 | 移动河北          29 | 移动重庆          31 | 
移动山西          33 | 移动内蒙古        34 | 移动宁夏          35 | 
移动成都          37 | 移动四川          37 | 移动贵州          38 | 
移动甘肃          38 | 移动辽宁          38 | 移动黑龙江        39 | 
移动青海          40 | 移动吉林          41 | 移动海南          42 | 
移动广西壮族      42 | 移动云南          53 | 移动新疆          65 | 
移动西藏          76 | 
联通浙江          11 | 联通江西          13 | 联通上海5G        13 | 
联通上海          15 | 联通江苏          25 | 联通湖北          25 | 
联通河南          26 | 联通湖南          26 | 联通安徽          27 | 
联通福建          30 | 联通山东          34 | 联通广东          34 | 
联通天津          34 | 联通陕西          34 | 联通太原市        34 | 
联通福州          35 | 联通河北          37 | 联通海南          38 | 
联通贵州          40 | 联通重庆          40 | 联通四川          40 | 
联通内蒙古        40 | 联通甘肃          41 | 联通宁夏          46 | 
联通黑龙江        47 | 联通云南          48 | 联通辽宁          48 | 
联通北京          49 | 联通山西          49 | 联通吉林          52 | 
联通广西壮族      52 | 联通青海          56 | 联通西藏          61 | 
```

### 回程路由

使用综合测试脚本：oneclickvirt/ecs

```ecsroute
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets


0.56 ms      AS24400    [APNIC-AP]         中国, 上海市, sh.10086.cn  移动
5.47 ms      *                             
*
*
*
*
*
*
*
82.99 ms     AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
*
30.14 ms     AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信


广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets

0.65 ms      AS24400    [APNIC-AP]         中国, 上海市, sh.10086.cn  移动
*
*
*
53.12 ms     AS24400    [CMNET]            中国, 上海, sh.10086.cn  移动
*
*
32.36 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
*
38.94 ms     AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
246.40 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
41.20 ms     AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通


广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets

0.48 ms      AS24400    [APNIC-AP]         中国, 上海市, sh.10086.cn  移动
*
*
*
*
*
*
27.47 ms     AS9808     [CMNET]            中国, 北京, chinamobileltd.com  移动
*
28.10 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
```

### 流媒体解锁

使用综合测试脚本：oneclickvirt/UnlockTests

```unlocktests
Apple                     YES (Region: CHN) [Native]
BingSearch                YES (Only cn.bing.com) (Region: CN)
Claude                    YES [Native]
Dazn                      NO (UNKNOWN_REASON)
Disney+                   NO (Can not get assertion)
Gemini                    NO (Network Err)
GoogleSearch              NO (Network Err)
Google Play Store         NO (Network Err)
IQiYi                     YES (Region: CN) [Via DNS]
Instagram Licensed Audio  NO (Network Err)
KOCOWA                    NO
MetaAI                    NO (Network Err)
Netflix                   Banned
Netflix CDN               NO (IP Banned By Netflix)
OneTrust                  YES (Region: CN) [Via DNS]
ChatGPT                   NO
Paramount+                YES [Native]
Amazon Prime Video        NO (Region: CN)
Reddit                    NO (Network Err)
SonyLiv                   Banned
Sora                      Banned (VPN Blocked)
Spotify Registration      NO
Steam Store               YES (Community Unavailable) (Region: CN)
TVBAnywhere+              NO
TikTok                    NO (Network Err)
Viu.com                   YES [Native]
Wikipedia Editability     NO (Network Err)
YouTube Region            NO (Network Err)
YouTube CDN               NO (Network Err)
```

### 流媒体解锁

使用综合测试脚本：lmc999/RegionRestrictionCheck

```regionrestrictioncheck
$ bash <(curl -L -s check.unlock.media)


 ** 测试时间: Thu Apr 24 14:27:35 UTC 2025
 ** 版本: 1.0.0


 ** 正在测试 IPv4 解锁情况
--------------------------------
 ** 您的网络为: ISIF (46.3.*.*)


============[ Multination ]============
 Dazn:					Failed (Error: )
 Disney+:				No
 Netflix:				Failed (Network Connection)
 YouTube Premium:			Yes (Region: SG)
 Amazon Prime Video:			No (Service Not Available)
 TVBAnywhere+:				Yes
 Spotify Registration:			No
 OneTrust Region:			SG [Unknown]
 iQyi Oversea Region:			INTL
 Bing Region:				RU (Risky)
 Apple Region:				RU
 YouTube CDN:				Singapore
 Netflix Preferred CDN:			Failed (IP Banned By Netflix)
 ChatGPT:				Yes
 Google Gemini:				No
 Claude:				No
 Wikipedia Editability:			Yes
 Google Play Store:			Singapore 
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			SGD
 ---Forum---
 Reddit:				No
 ---Game---
 SD Gundam G Generation Eternal:	No
=======================================
==========[ SouthEastAsia ]============
 Viu.com:				Yes (Region: SG)
 HotStar:				Failed (Error: REGION ERROR RU_)
 HBO Max:				No
 SonyLiv:				No
 B-Global SouthEastAsia:		No
 ---SG---
 MeWatch:				No
 ---TH---
 AIS Play:				No
 trueID:				No
 B-Global Thailand Only:		No
 ---ID---
 B-Global Indonesia Only:		No
 ---VN---
 B-Global Việt Nam Only:		No
=======================================
```

> **Cover Illustration**: https://www.pixiv.net/artworks/115211488
> **Artist**: 亜桜まる