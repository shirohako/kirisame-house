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
 Total Disk         : 19.6 GB (2.0 GB Used)
 Total Mem          : 711.1 MB (195.9 MB Used)
 System uptime      : 11 days, 1 hour 18 min
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
 I/O Speed(1st run) : 501 MB/s
 I/O Speed(2nd run) : 471 MB/s
 I/O Speed(3rd run) : 439 MB/s
 I/O Speed(average) : 470.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    1046.59 Mbps      999.09 Mbps         1.27 ms     
 Paris, FR        735.41 Mbps       536.38 Mbps         154.50 ms   
 Amsterdam, NL    506.98 Mbps       985.53 Mbps         163.31 ms   
 Shanghai, CN     963.49 Mbps       669.17 Mbps         62.94 ms    
 Hong Kong, CN    985.60 Mbps       995.95 Mbps         32.45 ms    
 Singapore, SG    1047.14 Mbps      999.06 Mbps         1.55 ms     
 Tokyo, JP        868.00 Mbps       722.85 Mbps         81.81 ms    
----------------------------------------------------------------------
```

### 硬件方面

使用综合测试脚本：oneclickvirt/ecs

```ecshardware
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   3444.87
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 24377.48 MB/s(25.56K IOPS, 5s)
单线程顺序读速度: 40860.10 MB/s(42.84K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       12.02 MB/s(3004)        12.02 MB/s(3005)        24.04 MB/s(6009)        
/root         64k      192.71 MB/s(3011)       193.72 MB/s(3026)       386.43 MB/s(6037)       
/root         512k     499.60 MB/s(975)        526.15 MB/s(1027)       1.03 GB/s(2002)         
/root         1m       492.02 MB/s(480)        524.78 MB/s(512)        1.02 GB/s(992)              
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
信任得分(越高越好): 93 [8]
VPN得分(越低越好): 13 [8] 
代理得分(越低越好): 8 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 1 [8] 
欺诈得分(越低越好): 0 [1 E] 
ASN滥用得分(越低越好): 0 (Very Low) [A] 
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: corporate [9] unknown [C] business [A] hosting [0 7]
公司类型: business [A] hosting [0 7]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 A] No [5 6 8 C]
是否移动设备: No [5 A C] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A C D E] 
是否VPN: No [0 1 6 7 A C D E]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 313(Total_Check) 0(Clean) 0(Blacklisted) 0(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1]
ASN滥用得分(越低越好): 0 (Very Low) [A] 
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
安全信息:
使用类型: business [A] 
公司类型: business [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A D] 
是否VPN: No [1 A D]
是否Tor: No [1 A D] 
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
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
```

### 三网回程

使用综合测试脚本：oneclickvirt/backtrace

```backtrace
北京电信v4 219.141.140.10           联通4837   [普通线路] 
北京联通v4 202.106.195.68           联通4837   [普通线路] 
北京移动v4 221.179.155.161          移动CMI    [普通线路] 
上海电信v4 202.96.209.133           联通4837   [普通线路] 
上海联通v4 210.22.97.1              联通4837   [普通线路] 
上海移动v4 211.136.112.200          移动CMI    [普通线路] 
广州电信v4 58.60.188.222            联通4837   [普通线路] 
广州联通v4 210.21.196.6             联通4837   [普通线路] 
广州移动v4 120.196.165.24           移动CMI    [普通线路] 
成都电信v4 61.139.2.69              联通4837   [普通线路] 电信163    [普通线路] 
成都联通v4 119.6.6.6                联通4837   [普通线路] 
成都移动v4 211.137.96.205           移动CMI    [普通线路] 
北京电信v6 2400:89c0:1053:3::69     电信163    [普通线路] 
北京联通v6 2400:89c0:1013:3::54     联通4837   [普通线路] 
北京移动v6 2409:8c00:8421:1303::55  移动CMI    [普通线路] 移动CMIN2  [精品线路] 
上海电信v6 240e:e1:aa00:4000::24    电信163    [普通线路] 
上海联通v6 2408:80f1:21:5003::a     联通4837   [普通线路] 
上海移动v6 2409:8c1e:75b0:3003::26  移动CMI    [普通线路] 移动CMIN2  [精品线路] 
广州电信v6 240e:97c:2f:3000::44     电信163    [普通线路] 
广州联通v6 2408:8756:f50:1001::c    联通4837   [普通线路] 
广州移动v6 2409:8c54:871:1001::12   移动CMIN2  [精品线路] 移动CMI    [普通线路] 
```

### 大陆三网PING测试

```ping
电信海南          50 | 电信湖南          54 | 电信湖北          57 | 
电信武汉          57 | 电信扬州          64 | 电信上海          66 | 
电信杭州          66 | 电信江西          67 | 电信贵州          68 | 
电信长沙          68 | 电信浙江          70 | 电信江苏          70 | 
电信福建          71 | 电信广东          71 | 电信宁波          73 | 
电信天津          74 | 电信广西壮族      75 | 电信云南          75 | 
电信安徽          75 | 电信重庆          77 | 电信甘肃          77 | 
电信苏州          77 | 电信Suzhou5G      78 | 电信四川          78 | 
电信北京          78 | 电信河南          79 | 电信青海          79 | 
电信山西          80 | 电信Zhenjiang5G   80 | 电信陕西          81 | 
电信南京          81 | 电信内蒙古        84 | 电信河北          84 | 
电信山东          86 | 电信宁夏          88 | 电信辽宁          93 | 
电信黑龙江       100 | 电信西藏         101 | 电信吉林         103 | 
电信新疆         112 | 
移动海南          54 | 移动江西          57 | 移动福建          59 | 
移动广西壮族      61 | 移动湖南          63 | 移动浙江          63 | 
移动杭州5G        64 | 移动杭州          64 | 移动上海          64 | 
移动贵州          64 | 移动Fujian        65 | 移动安徽          65 | 
移动福州          65 | 移动云南          65 | 移动成都          70 | 
移动江苏          71 | 移动北京          72 | 移动四川          72 | 
移动重庆          74 | 移动湖北          76 | 移动天津          76 | 
移动陕西          76 | 移动内蒙古        79 | 移动辽宁          85 | 
移动甘肃          86 | 移动河北          90 | 移动山西          92 | 
移动吉林          92 | 移动青海          93 | 移动黑龙江        98 | 
移动宁夏          99 | 移动西藏         108 | 移动新疆         119 | 
联通广西壮族      50 | 联通广东          53 | 联通福州          54 | 
联通湖南          55 | 联通海南          56 | 联通贵州          56 | 
联通福建          59 | 联通湖北          61 | 联通云南          62 | 
联通江西          63 | 联通浙江          65 | 联通江苏          67 | 
联通上海          68 | 联通四川          69 | 联通上海5G        69 | 
联通重庆          70 | 联通河南          70 | 联通陕西          71 | 
联通安徽          71 | 联通甘肃          72 | 联通太原市        76 | 
联通山西          76 | 联通山东          76 | 联通天津          77 | 
联通宁夏          77 | 联通青海          77 | 联通河北          78 | 
联通内蒙古        79 | 联通黑龙江        85 | 联通辽宁          85 | 
联通吉林          86 | 联通西藏          92 | 联通新疆          98 | 
联通北京         103 | 
```

### 回程路由

使用综合测试脚本：oneclickvirt/ecs

```ecsroute
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.25 ms      AS209372                      俄罗斯, 库尔斯克州, 法捷日, WSTelecom
0.31 ms      *                             
1.13 ms      *                             
31.12 ms     *                             台湾
31.12 ms     *                             台湾
31.19 ms     *                             
32.36 ms     AS4134     [CHINANET-FJ]      中国, 香港, www.chinatelecom.com.cn 
*
32.35 ms     AS10099    [CUG-BACKBONE]     中国, 香港, chinaunicomglobal.com  联通
35.88 ms     AS10099                       中国, 香港, chinaunicomglobal.com 
41.28 ms     AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
*
*
*
74.58 ms     AS4837     [CU169-BACKBONE]   中国, 北京, chinaunicom.cn  联通
75.48 ms     AS4134     [CHINANET-BB]      中国, 北京, www.chinatelecom.com.cn  电信
*
75.59 ms     AS4134     [CHINANET-GD]      中国, 广东, 广州, www.chinatelecom.com.cn 
*
70.58 ms     AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.20 ms      AS209372                      俄罗斯, 库尔斯克州, 法捷日, WSTelecom
0.39 ms      *                             
0.90 ms      *                             
31.24 ms     *                             台湾
31.27 ms     *                             台湾
31.20 ms     *          [CUG-ASIA]         中国, 香港
*
32.55 ms     AS10099    [CUG-BACKBONE]     中国, 广东, 广州, chinaunicomglobal.com  联通
35.99 ms     AS10099                       中国, 香港, chinaunicomglobal.com 
35.96 ms     AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn 
37.43 ms     AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
41.11 ms     AS17816    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
44.65 ms     AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
42.40 ms     AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.24 ms      AS209372                      俄罗斯, 库尔斯克州, 法捷日, WSTelecom
0.36 ms      *                             
1.11 ms      *                             
30.93 ms     *                             台湾
31.24 ms     *                             台湾
31.68 ms     AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com 
*
140.51 ms    AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com  移动
40.17 ms     AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
40.82 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
38.55 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
90.52 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
38.57 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
43.46 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
40.70 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
```

### 流媒体解锁

使用综合测试脚本：oneclickvirt/UnlockTests

```unlocktests
Apple                     YES (Region: RUS)
BingSearch                YES (Region: RU)
Claude                    YES
Dazn                      Banned
Disney+                   NO (forbidden-location)
Gemini                    NO
GoogleSearch              YES
Google Play Store         YES (Region: SG)
IQiYi                     YES (Region: RU)
Instagram Licensed Audio  YES
KOCOWA                    NO
MetaAI                    NO (AbraGeoBlocked)
Netflix                   Banned
Netflix CDN               NO (IP Banned By Netflix)
OneTrust                  YES (Region: SG)
ChatGPT                   YES (Region: SG)
Paramount+                YES
Amazon Prime Video        YES (Region: RU)
Reddit                    NO
SonyLiv                   Banned
Sora                      YES (Region: SG)
Spotify Registration      YES (Region: SG)
Steam Store               YES (Community Available) (Region: SG)
TVBAnywhere+              YES (Region: SG)
TikTok                    YES (Region: RU)
Viu.com                   YES
Wikipedia Editability     YES
YouTube Region            YES (Region: SG)
YouTube CDN               SIN
```

### 流媒体解锁

使用综合测试脚本：lmc999/RegionRestrictionCheck

```regionrestrictioncheck
 ** 测试时间: Thu Apr 24 21:40:01 UTC 2025
 ** 版本: 1.0.0


 ** 正在测试 IPv4 解锁情况
--------------------------------
 ** 您的网络为: ISIF (46.3.*.*)


============[ Multination ]============
 Dazn:					Failed (Error: )
 Disney+:				No (IP Banned By Disney+ 1)
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