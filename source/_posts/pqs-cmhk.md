---
title: 彼得巧 (PQS) | HK | CMHK-500M-VDS | ¥1111 CNY | 500Mbps独享 | 4核心 | 4GB内存 | 测试报告
cover: https://i.psray.net/i/2024/01/08/659bd6280db27.jpg
date: 2024-01-08
tags: [HongKong]
description: 彼得巧 (PITTQIAO) (PQS)，台湾商家，成立于 2019 年前。老牌商家，工单处理速度快，口碑不错。本次测试的是 CMHK VPS 产品，包含了硬件性能，网络等测试。
---
## 🖥️ 本次测试对象

彼得巧 (PITTQIAO) (PQS)，台湾商家，成立于 2019 年前
产品线目覆盖台湾，香港，大陆，日本等多地区的 独立服务器和VPS
老牌商家，工单处理速度快，口碑不错

官网：[https://www.pqs.pw/](https://www.pqs.pw/aff.php?aff=260)

Coupon：{% label PQS2024 blue %}

### 💻 CMHK

本次测试的对象 CMHK VPS，售卖时的商品页面产品参数和售价如下

{% note purple 'fas fa-fan' simple %}
Test IP: 223.122.105.*
Looking Glass: None
ASN: AS137872 (223.122.104.0/21) China Mobile Hong Kong Company Limited
{% endnote %}

CMHK-500M-VDS-M

- vCPU: 4 vCPU(s) Intel(R) Xeon(R) CPU E5-2690 v2 @ 3.00GHz
- RAM: 4GB
- Storage: 40GB SSD RAID 60
- Traffic: Unlimited
- Network: CMHK (AS137872)
- Bandwidth: 500Mbps Unmetered
- IPv4: 1 Dynamic IPv4 Address
- Price: ¥1111 CNY

{% btn 'https://www.pqs.pw/aff.php?aff=260',购买,far fa-hand-point-right,purple block larger %}

## 🏪 商家信息

### 🔍 Whois

商家域名的 Whois 信息

>Domain Name: PQS.PW
>Registry Domain ID: D86251492-CNIC
>Registrar WHOIS Server: whois.namecheap.com
>
>Updated Date: 2023-08-31T16:51:26.0Z
>Creation Date: 2018-12-08T05:43:49.0Z
>Registry Expiry Date: 2027-12-08T23:59:59.0Z

### 💬 Group & Channel

商家的 Telegram 群组和频道

Telegram Group: https://t.me/mjjtw
Telegram Channel: https://t.me/pqsnews

## 📊 性能测试

### 🕒 硬件基本信息

```
$ wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2690 v2 @ 3.00GHz
 CPU Cores          : 4 @ 2999.978 MHz
 CPU Cache          : 16384 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 39.9 GB (1.7 GB Used)
 Total Mem          : 3.8 GB (66.1 MB Used)
 Total Swap         : 2.0 GB (0 Used)
 System uptime      : 0 days, 0 hour 35 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.10.0-8-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS137872 China Mobile Hong Kong Company Limited
 Location           : Hong Kong / HK
 Region             : Central and Western
----------------------------------------------------------------------
```

### 🕒 CPU性能

```
-> CPU Performance Test (Full mode, 3-Pass @ 30sec)

 1 Thread(s) Test:		918.39 Scores (1.00x)
 4 Thread(s) Test:		3654.97 Scores (3.98x)
```

### 🕒 硬盘 FIO 读写测试

```
 -> Disk Performance Test (Using FIO, Direct mode, 32 IO-Depth)

 Write Test (4K-Block):		112.61 MB/s (28828 IOPS)
 Read  Test (4K-Block): 	277.78 MB/s (71111 IOPS)
 Write Test (128K-Block):	2500.00 MB/s (20000 IOPS)
 Read  Test (128K-Block):       3448.28 MB/s (27586 IOPS)
```

### 🕒 IPv4 信息

```
 IPv4-IP Address:		[HK] 223.122.105.*
 IPv4-AS Information:		AS137872 - China Mobile Hong Kong Company Limited
 IPv4-GeoIP Location:		Hong Kong Central and Western District Central
```

## 🎬流媒体测试

### RegionRestrictionCheck

```
$ bash <(curl -L -s check.unlock.media)

 ** 测试时间: Mon 08 Jan 2024 05:34:37 AM EST

 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: China Mobile Hong Kong limited (223.122.*.*) 


============[ Multination ]============
 Dazn:					Yes (Region: HK)
 HotStar:				No
 Disney+:				Yes (Region: HK)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				CMHK in Hong Kong 
 Netflix Preferred CDN:			Associated with [China Mobile Hong Kong limited] in [Hong Kong ]
 Spotify Registration:			No
 Steam Currency:			HKD
 ChatGPT:				Only Available with Mobile APP
 Bing Region:				HK
=======================================
=============[ Hong Kong ]=============
 Now E:					Failed (Unexpected Result: )
 Viu.TV:				Yes
 MyTVSuper:				No
 HBO GO Asia:				Yes (Region: HK)
 BiliBili Hongkong/Macau/Taiwan:	Yes
=======================================
```

## 📶 大陆方向上传速度测试

测试时间: Monday, January 8, 2024 (GMT+9) 19:50

移动 (CM) 表现优异。电信 (CT) 和 联通 (CU) 连接表现不佳，跳过本次测试


### 广州移动 (183.232.159.*)

```
$ ping 223.122.105.* -c 5
PING 223.122.105.* (223.122.105.*) 56(84) bytes of data.
64 bytes from 223.122.105.*: icmp_seq=1 ttl=50 time=16.2 ms
64 bytes from 223.122.105.*: icmp_seq=2 ttl=50 time=15.9 ms
64 bytes from 223.122.105.*: icmp_seq=3 ttl=50 time=14.6 ms
64 bytes from 223.122.105.*: icmp_seq=4 ttl=50 time=16.0 ms
64 bytes from 223.122.105.*: icmp_seq=5 ttl=50 time=15.9 ms

--- 223.122.105.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 14.587/15.704/16.188/0.571 ms

$ tcping 223.122.105.* 22
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=16.933625ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=18.739363ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=18.379827ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=20.355249ms

Ping statistics tcp://223.122.105.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 16.933625ms, Maximum = 20.355249ms, Average = 18.602016ms

```

```
$ iperf3 -c 223.122.105.* -R
Connecting to host 223.122.105.*, port 5201
Reverse mode, remote host 223.122.105.* is sending
[  5] local 183.232.159.* port 34758 connected to 223.122.105.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  80.1 MBytes   672 Mbits/sec                  
[  5]   1.00-2.00   sec  87.0 MBytes   730 Mbits/sec                  
[  5]   2.00-3.00   sec  64.5 MBytes   541 Mbits/sec                  
[  5]   3.00-4.00   sec  61.8 MBytes   518 Mbits/sec                  
[  5]   4.00-5.00   sec  59.0 MBytes   495 Mbits/sec                  
[  5]   5.00-6.00   sec  60.7 MBytes   509 Mbits/sec                  
[  5]   6.00-7.00   sec  62.6 MBytes   525 Mbits/sec                  
[  5]   7.00-8.00   sec  60.1 MBytes   504 Mbits/sec                  
[  5]   8.00-9.00   sec  60.4 MBytes   507 Mbits/sec                  
[  5]   9.00-10.00  sec  61.1 MBytes   512 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.04  sec   660 MBytes   552 Mbits/sec  37524             sender
[  5]   0.00-10.00  sec   657 MBytes   551 Mbits/sec                  receiver

iperf Done.
```

### 广州移动 (120.241.46.*)

```
$ ping 223.122.105.* -c 5
PING 223.122.105.* (223.122.105.*) 56(84) bytes of data.
64 bytes from 223.122.105.*: icmp_seq=1 ttl=50 time=17.6 ms
64 bytes from 223.122.105.*: icmp_seq=2 ttl=50 time=17.7 ms
64 bytes from 223.122.105.*: icmp_seq=3 ttl=50 time=17.7 ms
64 bytes from 223.122.105.*: icmp_seq=4 ttl=50 time=17.7 ms
64 bytes from 223.122.105.*: icmp_seq=5 ttl=50 time=17.5 ms

--- 223.122.105.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4008ms
rtt min/avg/max/mdev = 17.463/17.633/17.727/0.099 ms

$ tcping 223.122.105.* 22
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=19.614945ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=16.246148ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=17.237103ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=19.127864ms

Ping statistics tcp://223.122.105.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 16.246148ms, Maximum = 19.614945ms, Average = 18.056515ms

```

```
$ iperf3 -c 223.122.105.* -R
Connecting to host 223.122.105.*, port 5201
Reverse mode, remote host 223.122.105.* is sending
[  5] local 120.241.46.* port 54280 connected to 223.122.105.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  40.0 MBytes   336 Mbits/sec                  
[  5]   1.00-2.00   sec  53.4 MBytes   448 Mbits/sec                  
[  5]   2.00-3.00   sec  55.4 MBytes   465 Mbits/sec                  
[  5]   3.00-4.00   sec  75.1 MBytes   630 Mbits/sec                  
[  5]   4.00-5.00   sec  74.1 MBytes   621 Mbits/sec                  
[  5]   5.00-6.00   sec  86.9 MBytes   729 Mbits/sec                  
[  5]   6.00-7.00   sec  61.1 MBytes   513 Mbits/sec                  
[  5]   7.00-8.00   sec  60.0 MBytes   503 Mbits/sec                  
[  5]   8.00-9.00   sec  61.9 MBytes   519 Mbits/sec                  
[  5]   9.00-10.00  sec  60.1 MBytes   505 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.02  sec   632 MBytes   529 Mbits/sec  23427             sender
[  5]   0.00-10.00  sec   628 MBytes   527 Mbits/sec                  receiver

iperf Done.
```

### 江苏移动 (223.113.130.*)
```
$ ping 223.122.105.* -c 5
PING 223.122.105.* (223.122.105.*) 56(84) bytes of data.
64 bytes from 223.122.105.*: icmp_seq=1 ttl=47 time=43.7 ms
64 bytes from 223.122.105.*: icmp_seq=2 ttl=47 time=43.6 ms
64 bytes from 223.122.105.*: icmp_seq=3 ttl=47 time=46.5 ms
64 bytes from 223.122.105.*: icmp_seq=4 ttl=47 time=50.2 ms
64 bytes from 223.122.105.*: icmp_seq=5 ttl=47 time=44.4 ms

--- 223.122.105.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4005ms
rtt min/avg/max/mdev = 43.609/45.688/50.243/2.501 ms

$ tcping 223.122.105.* 22
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=49.355013ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=45.219232ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=44.314553ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=45.880969ms

Ping statistics tcp://223.122.105.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 44.314553ms, Maximum = 49.355013ms, Average = 46.192441ms

```

```
$ iperf3 -c 223.122.105.* -R
Connecting to host 223.122.105.*, port 5201
Reverse mode, remote host 223.122.105.* is sending
[  5] local 223.113.130.* port 5304 connected to 223.122.105.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  29.7 MBytes   249 Mbits/sec                  
[  5]   1.00-2.00   sec  56.2 MBytes   471 Mbits/sec                  
[  5]   2.00-3.00   sec  58.1 MBytes   488 Mbits/sec                  
[  5]   3.00-4.00   sec  53.4 MBytes   448 Mbits/sec                  
[  5]   4.00-5.00   sec  55.5 MBytes   466 Mbits/sec                  
[  5]   5.00-6.00   sec  50.3 MBytes   422 Mbits/sec                  
[  5]   6.00-7.00   sec  41.3 MBytes   346 Mbits/sec                  
[  5]   7.00-8.00   sec  58.6 MBytes   492 Mbits/sec                  
[  5]   8.00-9.00   sec  55.4 MBytes   464 Mbits/sec                  
[  5]   9.00-10.00  sec  54.1 MBytes   454 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.05  sec   516 MBytes   431 Mbits/sec  1124             sender
[  5]   0.00-10.00  sec   513 MBytes   430 Mbits/sec                  receiver

iperf Done.
```

### 深圳移动 (120.232.242.*)
```
$ ping 223.122.105.* -c 5
PING 223.122.105.* (223.122.105.*) 56(84) bytes of data.
64 bytes from 223.122.105.*: icmp_seq=1 ttl=48 time=20.5 ms
64 bytes from 223.122.105.*: icmp_seq=2 ttl=48 time=18.3 ms
64 bytes from 223.122.105.*: icmp_seq=3 ttl=48 time=20.6 ms
64 bytes from 223.122.105.*: icmp_seq=4 ttl=48 time=18.0 ms
64 bytes from 223.122.105.*: icmp_seq=5 ttl=48 time=18.0 ms

--- 223.122.105.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4004ms
rtt min/avg/max/mdev = 18.009/19.101/20.609/1.227 ms

$ tcping 223.122.105.* 22
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=16.654329ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=19.149244ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=22.944916ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=16.369219ms

Ping statistics tcp://223.122.105.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 16.369219ms, Maximum = 22.944916ms, Average = 18.779427ms

```

```
$ iperf3 -c 223.122.105.* -R
Connecting to host 223.122.105.*, port 5201
Reverse mode, remote host 223.122.105.* is sending
[  4] local 120.232.242.* port 2190 connected to 223.122.105.* port 5201
[ ID] Interval           Transfer     Bandwidth
[  4]   0.00-1.00   sec  47.6 MBytes   399 Mbits/sec                  
[  4]   1.00-2.00   sec  52.2 MBytes   438 Mbits/sec                  
[  4]   2.00-3.00   sec  49.3 MBytes   413 Mbits/sec                  
[  4]   3.00-4.00   sec  48.8 MBytes   409 Mbits/sec                  
[  4]   4.00-5.00   sec  50.9 MBytes   427 Mbits/sec                  
[  4]   5.00-6.00   sec  51.0 MBytes   428 Mbits/sec                  
[  4]   6.00-7.00   sec  55.7 MBytes   467 Mbits/sec                  
[  4]   7.00-8.00   sec  46.6 MBytes   391 Mbits/sec                  
[  4]   8.00-9.00   sec  46.5 MBytes   390 Mbits/sec                  
[  4]   9.00-10.00  sec  54.3 MBytes   455 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bandwidth       Retr
[  4]   0.00-10.00  sec   506 MBytes   424 Mbits/sec  13034             sender
[  4]   0.00-10.00  sec   503 MBytes   422 Mbits/sec                  receiver

iperf Done.
```

### 河南移动 (111.6.86.*)
```
$ ping 223.122.105.* -c 5
PING 223.122.105.* (223.122.105.*) 56(84) bytes of data.
64 bytes from 223.122.105.*: icmp_seq=1 ttl=49 time=62.7 ms
64 bytes from 223.122.105.*: icmp_seq=2 ttl=49 time=62.2 ms
64 bytes from 223.122.105.*: icmp_seq=3 ttl=49 time=62.2 ms
64 bytes from 223.122.105.*: icmp_seq=4 ttl=49 time=62.5 ms
64 bytes from 223.122.105.*: icmp_seq=5 ttl=49 time=62.5 ms

--- 223.122.105.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 62.153/62.406/62.737/0.204 ms


$ tcping 223.122.105.* 22
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=60.812243ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=59.800182ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=55.491234ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=60.657656ms

Ping statistics tcp://223.122.105.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 55.491234ms, Maximum = 60.812243ms, Average = 59.190328ms


```

```
$ iperf3 -c 223.122.105.* -R
Connecting to host 223.122.105.*, port 5201
Reverse mode, remote host 223.122.105.* is sending
[  5] local 111.6.86.* port 58568 connected to 223.122.105.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  28.5 MBytes   239 Mbits/sec                  
[  5]   1.00-2.00   sec  48.1 MBytes   404 Mbits/sec                  
[  5]   2.00-3.00   sec  28.6 MBytes   240 Mbits/sec                  
[  5]   3.00-4.00   sec  43.3 MBytes   363 Mbits/sec                  
[  5]   4.00-5.00   sec  48.0 MBytes   402 Mbits/sec                  
[  5]   5.00-6.00   sec  47.8 MBytes   401 Mbits/sec                  
[  5]   6.00-7.00   sec  48.0 MBytes   403 Mbits/sec                  
[  5]   7.00-8.00   sec  47.8 MBytes   401 Mbits/sec                  
[  5]   8.00-9.00   sec  47.8 MBytes   401 Mbits/sec                  
[  5]   9.00-10.00  sec  47.8 MBytes   401 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.06  sec   439 MBytes   366 Mbits/sec  1051             sender
[  5]   0.00-10.00  sec   436 MBytes   366 Mbits/sec                  receiver

iperf Done.
```


### 中山移动 (218.204.179.*)
```
$ ping 223.122.105.* -c 5
PING 223.122.105.* (223.122.105.*) 56(84) bytes of data.
64 bytes from 223.122.105.*: icmp_seq=1 ttl=50 time=20.2 ms
64 bytes from 223.122.105.*: icmp_seq=2 ttl=50 time=20.3 ms
64 bytes from 223.122.105.*: icmp_seq=3 ttl=50 time=20.2 ms
64 bytes from 223.122.105.*: icmp_seq=4 ttl=50 time=20.3 ms
64 bytes from 223.122.105.*: icmp_seq=5 ttl=50 time=20.3 ms

--- 223.122.105.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 20.211/20.279/20.344/0.057 ms


$ tcping 223.122.105.* 22
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=15.279011ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=19.399741ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=17.535588ms
Ping tcp://223.122.105.*:22(223.122.105.*:22) - Connected - time=17.567606ms

Ping statistics tcp://223.122.105.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 15.279011ms, Maximum = 19.399741ms, Average = 17.445486ms

```

```
$ iperf3 -c 223.122.105.* -R
Connecting to host 223.122.105.*, port 5201
Reverse mode, remote host 223.122.105.* is sending
[  5] local 218.204.179.* port 57042 connected to 223.122.105.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  54.9 MBytes   461 Mbits/sec                  
[  5]   1.00-2.00   sec  59.1 MBytes   496 Mbits/sec                  
[  5]   2.00-3.00   sec  58.4 MBytes   490 Mbits/sec                  
[  5]   3.00-4.00   sec  59.2 MBytes   497 Mbits/sec                  
[  5]   4.00-5.00   sec  59.6 MBytes   500 Mbits/sec                  
[  5]   5.00-6.00   sec  59.5 MBytes   499 Mbits/sec                  
[  5]   6.00-7.00   sec  59.2 MBytes   497 Mbits/sec                  
[  5]   7.00-8.00   sec  59.1 MBytes   496 Mbits/sec                  
[  5]   8.00-9.00   sec  59.0 MBytes   495 Mbits/sec                  
[  5]   9.00-10.00  sec  59.1 MBytes   496 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.04  sec   590 MBytes   493 Mbits/sec    1             sender
[  5]   0.00-10.00  sec   587 MBytes   492 Mbits/sec                  receiver

iperf Done.
```

## 📶 港内速度测试

### CMHK Broadband

```
$ speedtest

   Speedtest by Ookla

      Server: CMHK Broadband - Hong Kong (id: 37639)
         ISP: China Mobile Hong Kong limited
Idle Latency:     4.38 ms   (jitter: 0.17ms, low: 4.11ms, high: 4.56ms)
    Download:   490.19 Mbps (data used: 233.3 MB)                                                   
                  2.97 ms   (jitter: 0.32ms, low: 2.58ms, high: 4.18ms)
      Upload:   509.66 Mbps (data used: 785.2 MB)                                                   
                  2.86 ms   (jitter: 2.21ms, low: 2.41ms, high: 210.44ms)
 Packet Loss:     0.0%
 Result URL: https://www.speedtest.net/result/c/f3e14ecb-afc9-4f0a-ab1a-8d6799e7be07
```

### fdcservers.net

```
$ speedtest -s 28912

   Speedtest by Ookla

      Server: fdcservers.net - Hong Kong (id: 28912)
         ISP: China Mobile Hong Kong limited
Idle Latency:     4.28 ms   (jitter: 0.53ms, low: 2.51ms, high: 4.60ms)
    Download:   488.35 Mbps (data used: 334.7 MB)                                                   
                  3.20 ms   (jitter: 0.46ms, low: 2.72ms, high: 5.07ms)
      Upload:   509.42 Mbps (data used: 782.1 MB)                                                   
                  2.66 ms   (jitter: 0.37ms, low: 2.25ms, high: 8.19ms)
 Packet Loss: Not available.
 Result URL: https://www.speedtest.net/result/c/f10b540b-0f8f-49e3-9ca4-efd4d6f76f09
```

### Hutchison HK

```
$ speedtest -s 37267

   Speedtest by Ookla

      Server: Hutchison HK - Hong Kong (id: 37267)
         ISP: China Mobile Hong Kong limited
Idle Latency:     5.38 ms   (jitter: 0.94ms, low: 3.67ms, high: 5.52ms)
    Download:   489.79 Mbps (data used: 226.6 MB)                                                   
                  4.45 ms   (jitter: 0.35ms, low: 3.71ms, high: 5.92ms)
      Upload:   214.68 Mbps (data used: 99.5 MB)                                                   
                  4.06 ms   (jitter: 0.97ms, low: 3.33ms, high: 5.49ms)
 Packet Loss:     0.0%
 Result URL: https://www.speedtest.net/result/c/99aa1ae8-f975-47b6-ba0a-02d58db6f3e6
```

### HGC環電

```
$ speedtest -s 37390

   Speedtest by Ookla

      Server: HGC環電 - Hong Kong (id: 37390)
         ISP: China Mobile Hong Kong limited
Idle Latency:     4.67 ms   (jitter: 0.47ms, low: 4.08ms, high: 5.42ms)
    Download:   476.67 Mbps (data used: 383.7 MB)                                                   
                  4.84 ms   (jitter: 1.11ms, low: 4.00ms, high: 41.55ms)
      Upload:   509.59 Mbps (data used: 773.3 MB)                                                   
                  4.10 ms   (jitter: 0.28ms, low: 3.72ms, high: 5.76ms)
 Packet Loss:     0.0%
 Result URL: https://www.speedtest.net/result/c/ffe74d20-457b-4a0e-badb-4c304b1000c8
```



> Cover Illustration: https://twitter.com/asakuramaru/status/1734406034826100803
> Artist: 亜桜まる