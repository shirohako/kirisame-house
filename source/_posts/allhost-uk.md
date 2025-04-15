---
title: AllHost | UK | Ryzen 7900 VPS | 测试报告
cover: https://i.psray.net/i/2025/04/15/67fe52a6c847f.jpg
date: 2025-04-15
tags: [UK, Coventry, London]
description: AllHost 最近发来 Offer，多款 AMD Ryzen 7900 NVMe VPS 参与促销，年付提供 55% 折扣
---

AllHost 最近发来 Offer，多款 AMD Ryzen 7900 NVMe VPS 参与促销，年付提供 55% 折扣。

## 🖥️ 简介

AllHost 自 2021 年起为合法注册公司，从未参与任何季节性低价主机促销活动（Never summer-hosted）

- 提供快照 (snapshot)
- 按需启用 Corero DDoS 防护服务
- 使用 VirtFusion 控制面板管理
- 所有服务器均为自有设备，托管于自建专属机柜（除伦敦外）
- 主机服务器具备冗余网络与电力接入
- 采用 Supermicro 企业级服务器，配置企业级硬件及支持 RAID 的 NVMe 存储
- 提供 99.99% 服务可用性保证 (99.99% Uptime Guarantee)

### 💻 订购

以下是商家提供的限量 Offers:

1GB AMD Ryzen 7900 VPS

- CPU: 1 vCPU
- RAM: 1GB DDR5 ECC RAM
- Storage: 16GB NVMe Storage
- Traffic: 5TB
- Bandwidth: 2 Gbit uplink
- IPv4: 1 IPv4 + /64 IPv6
- Location: Coventry, UK Datacentre.
- Price: £15 per year

{% btn 'https://portal.allhost.io/order/config/index/ryzenvps/?group_id=24&pricing_id=384&coupon=1GBRyzen15',购买,far fa-hand-point-right,purple block larger %}

2GB AMD Ryzen 7900 VPS

- CPU: 1 vCPU
- RAM: 2GB DDR5 ECC RAM
- Storage: 32GB NVMe Storage
- Traffic: 5TB
- Bandwidth: 2 Gbit uplink
- IPv4: 1 IPv4 + /64 IPv6
- Location: Coventry, UK Datacentre.
- Price: £25 per year

{% btn 'https://portal.allhost.io/order/config/index/ryzenvps/?group_id=24&pricing_id=389&coupon=2GBRyzen25',购买,far fa-hand-point-right,purple block larger %}

4GB AMD Ryzen 7900 VPS

- CPU: 2 vCPU
- RAM: 4GB DDR5 ECC RAM
- Storage: 64GB NVMe Storage
- Traffic: 10TB
- Bandwidth: 2 Gbit uplink
- IPv4: 1 IPv4 + /64 IPv6
- Location: Coventry, UK Datacentre.
- Price: £40 per year

{% btn 'https://portal.allhost.io/order/config/index/ryzenvps/?group_id=24&pricing_id=394&coupon=4GBRyzen40',购买,far fa-hand-point-right,purple block larger %}

(London) 2GB AMD Ryzen 7900 VPS

- CPU: 1 vCPU
- RAM: 2GB DDR5 ECC RAM
- Storage: 32GB NVMe Storage
- Traffic: 5TB
- Bandwidth: 2 Gbit uplink
- IPv4: 1 IPv4 + /64 IPv6
- Location: London, UK Datacentre.
- Price: £30 per year

{% btn 'https://portal.allhost.io/order/config/index/virtualservers/?group_id=29&pricing_id=456&coupon=1YRLONDONRYZEN2',购买,far fa-hand-point-right,purple block larger %}

## 🏪 商家信息

### Looking Glass && Test IP

{% note purple 'fas fa-fan' simple %}
Location: Coventry, UK
Test IPv4: 185.139.7.79
Test IPv6: 2a12:ab46:5344:2b::a
Looking Glass: http://cov-lg.as207108.net/
{% endnote %}

{% note purple 'fas fa-fan' simple %}
Location: London, UK
Test IPv4: 77.75.124.35
Test IPv6: 2a12:ab46:5342:1a::a
Looking Glass: http://lon-lg.as207108.net/
{% endnote %}

### 网络信息

主力服务部署于英国考文垂 UKServers 数据中心，上游为 AS42831
具备超过 2Tbps 的外部带宽容量，并直接对等连接英国主要 ISP 以及 Cloudflare、Amazon、Google、Meta、OVH 等多个大型网络平台。

伦敦节点服务为租用，位于伦敦 Telehouse 数据中心。

可提供 BGP 会话，或支持自带 IP/ASN 公告，设置费用为一次性 £25.00。

### 支付方式

- Credit/Debit Card
- PayPal,
- Bank Transfer
- AliPay
- GooglePay
- ApplePay

### 基本条款

**退款政策**
72 小时内可申请退款，前提是您对服务不满意。我们不保证 IP 地址可从特定国家访问，或可用于访问特定服务。如 IP 地址被封锁，恕不退款。更换 IP 地址可能需支付额外费用。退款不包含交易手续费。

**25 端口**
封锁。严禁发送大量邮件或垃圾邮件。

**公平使用政策**
CPU 为共享资源。故意浪费资源，或长时间持续占用 100% CPU，将导致资源被限速。

### Whois

商家域名的 Whois 信息

> Domain Name: allhost.io
> Registry Domain ID: 846e4a5e0d764718a8d9aed96ff596a3-DONUTS
>
> Registered On: 2022-11-27T12:51:41Z
> Expires On: 2025-11-27T12:51:41Z
> Updated On: 2024-12-01T10:00:57Z

### TG 交流群和频道

商家的 Telegram 群组和频道

Telegram Group: N/A
Telegram Channel: N/A

## 📊 测试报告

£15 的 1GB Coventry 方案的流媒体解锁报告。 使用 Region Restriction Check 测试。

### Bench.sh

```benchsh
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2024-11-11
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7900 12-Core Processor
 CPU Cores          : 1 @ 3693.046 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 15.4 GB (2.4 GB Used)
 Total Mem          : 913.4 MB (394.3 MB Used)
 System uptime      : 1 days, 4 hour 8 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Ubuntu 24.04.2 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.8.0-57-generic
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS207108 AH CLOUD LTD
 Location           : Birmingham / GB
 Region             : England
----------------------------------------------------------------------
 I/O Speed(1st run) : 733 MB/s
 I/O Speed(2nd run) : 708 MB/s
 I/O Speed(3rd run) : 709 MB/s
 I/O Speed(average) : 716.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency
 Speedtest.net    1997.98 Mbps      124.29 Mbps         4.49 ms
 Paris, FR        2009.49 Mbps      1858.43 Mbps        11.10 ms
 Amsterdam, NL    1995.45 Mbps      1824.73 Mbps        10.22 ms
 Shanghai, CN     57.77 Mbps        1479.17 Mbps        374.01 ms
 Hong Kong, CN    440.60 Mbps       1294.00 Mbps        182.11 ms
 Singapore, SG    346.01 Mbps       1292.87 Mbps        245.17 ms
 Tokyo, JP        343.65 Mbps       1318.82 Mbps        234.46 ms
----------------------------------------------------------------------
 Finished in        : 3 min 27 sec
 Timestamp          : 2025-04-15 18:55:42 CST
----------------------------------------------------------------------
```

### 硬件方面

使用综合测试脚本：oneclickvirt/ecs

```ecshardware
----------------------CPU测试--sysbench-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		5955 Scores

---------------------内存测试--lemonbench-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		70524.15 MB/s
 单线程写测试:		38557.11 MB/s

------------------磁盘dd读写测试--lemonbench--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		72.6 MB/s (17.74 IOPS, 1.44s))		100 MB/s (24473 IOPS, 1.05s)
 1GB-1M Block		689 MB/s (657 IOPS, 1.52s)		2.5 GB/s (2349 IOPS, 0.43s)

---------------------fio读写测试--yabs----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ----
Read       | 184.21 MB/s  (46.0k) | 2.14 GB/s    (33.5k)
Write      | 184.70 MB/s  (46.1k) | 2.15 GB/s    (33.7k)
Total      | 368.92 MB/s  (92.2k) | 4.30 GB/s    (67.2k)
           |                      |
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ----
Read       | 2.03 GB/s     (3.9k) | 2.00 GB/s     (1.9k)
Write      | 2.14 GB/s     (4.1k) | 2.14 GB/s     (2.0k)
Total      | 4.18 GB/s     (8.1k) | 4.15 GB/s     (4.0k)
```

### IP 质量检测

使用综合测试脚本：oneclickvirt/securityCheck

```securitycheck
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo       [0] | scamalytics    [1] | virustotal     [2]
abuseipdb    [3] | ip2location    [4] | ip-api         [5]
ipwhois      [6] | ipregistry     [7] | ipdata         [8]
db-ip        [9] | ipapiis        [A] | ipapicom       [B]
bigdatacloud [C] | cheervision    [D] | ipqualityscore [E]

IPV4:

安全得分:
声誉(越高越好): 0 [2]
信任得分(越高越好): 12 [8]
VPN得分(越低越好): 100 [8]
代理得分(越低越好): 100 [8]
社区投票-无害: 0 [2]
社区投票-恶意: 0 [2]
威胁得分(越低越好): 64 [8]
欺诈得分(越低越好): 65 [E] 0 [1]
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0 (Very Low) [A]
公司滥用得分(越低越好): 0 (Very Low) [A]
威胁级别: low [9]
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]


安全信息:
使用类型: business [8] hosting [0 7 9 A] DataCenter/WebHosting/Transit [3] hosting - high probability [C]
公司类型: hosting [0 7 A]
是否云提供商: Yes [7 D]
是否数据中心: Yes [0 1 A] No [5 6 8 C]
是否移动设备: No [5 A C] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A C D] Yes [E]
是否VPN: No [0 1 6 7 A C D] Yes [E]
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
DNS-黑名单: 313(Total_Check) 0(Clean) 5(Blacklisted) 15(Other)
```

### 邮件端口检测

使用综合测试脚本：oneclickvirt/portchecker

```portchecker
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔
QQ        ✘     ✔     ✔     ✘     ✔     ✘
163       ✘     ✔     ✔     ✘     ✔     ✘
Sohu      ✘     ✔     ✔     ✘     ✔     ✘
Yandex    ✘     ✔     ✔     ✘     ✔     ✘
Gmail     ✘     ✔     ✘     ✘     ✘     ✘
Outlook   ✘     ✘     ✔     ✘     ✔     ✘
Office365 ✘     ✘     ✔     ✘     ✔     ✘
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘
MailRU    ✘     ✔     ✘     ✘     ✔     ✘
AOL       ✘     ✔     ✘     ✘     ✘     ✘
GMX       ✘     ✘     ✔     ✘     ✔     ✘
Sina      ✘     ✔     ✔     ✘     ✔     ✘
Apple     ✘     ✘     ✘     ✘     ✘     ✘
FastMail  ✘     ✔     ✘     ✘     ✘     ✘
ProtonMail✘     ✘     ✘     ✘     ✘     ✘
MXRoute   ✘     ✘     ✔     ✘     ✔     ✘
Namecrane ✘     ✔     ✔     ✘     ✔     ✘
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘
Inbox_eu  ✘     ✔     ✔     ✘     ✘     ✘
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘
```

### 三网回程

使用综合测试脚本：oneclickvirt/backtrace

```backtrace
北京联通v4 202.106.195.68           联通4837   [普通线路]
北京移动v4 221.179.155.161          移动CMI    [普通线路] 移动CMIN2  [精品线路]
上海电信v4 202.96.209.133           电信163    [普通线路]
上海联通v4 210.22.97.1              联通4837   [普通线路]
上海移动v4 211.136.112.200          移动CMI    [普通线路] 移动CMIN2  [精品线路]
广州电信v4 58.60.188.222            电信163    [普通线路]
广州联通v4 210.21.196.6             联通4837   [普通线路]
广州移动v4 120.196.165.24           移动CMI    [普通线路]
成都电信v4 61.139.2.69              电信163    [普通线路]
成都联通v4 119.6.6.6                联通4837   [普通线路]
成都移动v4 211.137.96.205           移动CMI    [普通线路]
```

### 回程路由

使用综合测试脚本：oneclickvirt/ecs

```ecsroute
广州电信 58.60.188.222
0.91 ms 	AS207108 英国 英格兰 伦敦 allhost.io
0.47 ms 	AS42831 英国 英格兰 豪恩斯洛 ukservers.com
3.19 ms 	AS3356 [UK-LVLT] 英国 英格兰 伦敦 lumen.com
11.09 ms 	AS3356 荷兰 lumen.com
* ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
236.72 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
237.18 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
240.94 ms 	AS134774 [CHINANET-GD] 中国 广东 深圳 chinatelecom.cn 电信
240.66 ms 	AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信


广州联通 210.21.196.6
2.93 ms 	AS207108 英国 英格兰 伦敦 allhost.io
0.35 ms 	AS42831 英国 英格兰 豪恩斯洛 ukservers.com
3.26 ms 	AS3356 [UK-LVLT] 英国 英格兰 伦敦 lumen.com
139.36 ms 	AS3356 美国 加利福尼亚 洛杉矶 lumen.com
335.09 ms 	AS3356 美国 加利福尼亚 洛杉矶 lumen.com
* ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
* ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
336.73 ms 	AS17816 [UNICOM-GD] 中国 广东省 广州市 chinaunicom.cn 联通
331.86 ms 	AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
335.38 ms 	AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通


广州移动 120.196.165.24
0.59 ms 	AS207108 英国 英格兰 伦敦 allhost.io
6.88 ms 	AS42831 英国 英格兰 豪恩斯洛 ukservers.com
3.22 ms 	AS3356 [UK-LVLT] 英国 英格兰 伦敦 lumen.com
6.84 ms 	AS3356 英国 英格兰 伦敦 lumen.com
20.03 ms 	AS3356 英国 英格兰 伦敦 lumen.com
6.55 ms 	AS58453 [CMI-INT] 英国 英格兰 伦敦 cmi.chinamobile.com
276.00 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com
248.17 ms 	AS9808 [CMNET] 中国 广东 广州 X-I chinamobileltd.com 移动
252.76 ms 	AS9808 [CMNET] 中国 广东 广州 I-C chinamobileltd.com 移动
246.50 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
242.51 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
248.58 ms 	AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
```

### TikTok

使用综合测试脚本：oneclickvirt/ecs

```tiktok
 Tiktok Region:		Failed
```

### 流媒体解锁

使用综合测试脚本：lmc999/RegionRestrictionCheck

```regionrestrictioncheck
$ bash <(curl -L -s check.unlock.media)

 ** 测试时间: Tue Apr 15 16:58:59 CST 2025
 ** 版本: 1.0.0


 ** 正在测试 IPv4 解锁情况
--------------------------------
 ** 您的网络为: Ah Cloud (185.139.*.*)


============[ Multination ]============
 Dazn:					Yes (Region: GB)
 Disney+:				Yes (Region: GB)
 Netflix:				Yes (Region: GB)
 YouTube Premium:			Yes (Region: GB)
 Amazon Prime Video:			Yes (Region: GB)
 TVBAnywhere+:				Yes
 Spotify Registration:			No
 OneTrust Region:			GB [England]
 iQyi Oversea Region:			GB
 Bing Region:				GB (Risky)
 Apple Region:				GB
 YouTube CDN:				London
 Netflix Preferred CDN:			London
 ChatGPT:				Yes
 Google Gemini:				No
 Claude:				No
 Wikipedia Editability:			Yes
 Google Play Store:			United Kingdom
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			GBP
 ---Forum---
 Reddit:				Yes
=======================================

===============[ Europe ]==============
 Paramount+:				Failed (Error: 406)
 Discovery+:				Yes (Region: GB)
 SonyLiv:				No (EPDblocked API)
 HBO Max:				No
 SkyShowTime:				No
 BritBox:				Yes
 Rakuten TV:				No
 Megogo TV:				Yes
 Setanta Sports:			No
 MathsSpot Roblox:			Failed (Error: FailureUnauthorized)
 ---GB---
 HotStar:				Failed (Error: REGION ERROR GB_)
 Sky Go:				Yes
 ITV Hub:				Yes
 Channel 4:				Yes
 Channel 5:				Yes
 BBC iPLAYER:				Yes
 Acorn TV:				Yes
 Shudder:				Yes
 ---FR---
 Canal+:				Failed (Error: 404)
 Molotov:				No
 ---DE---
 Joyn:					No
 SKY DE:				No
 ZDF: 					No
 ---NL---
 NLZIET:				Failed (Error: PAGE ERROR)
 videoland:				No
 NPO Start Plus:			Failed (Error: 401)
 ---ES---
 Movistar+:				No
 ---IT---
 Rai Play:				No
 ---CH---
 SKY CH:				No
 ---RU---
 Amediateka:				No
=======================================
```

> **Cover Illustration**: https://www.pixiv.net/artworks/115024597
> **Artist**: 亜桜まる