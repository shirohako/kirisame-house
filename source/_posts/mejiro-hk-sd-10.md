---
title: MEJIRO NETWORK | HK | SD10 | 测试报告
cover: https://i.psray.net/i/2024/01/06/6599435b43998.jpg
date: 2024-01-06
tags: [HongKong]
description: MEJIRO NETWORK，国人商家，成立于 2023 年，目前在出售香港独立服务器。本次测试的是 HK Dedicated Server SD10 产品，包含了硬件和网络线路的测试报告。
---
## 🖥️ 本次测试对象

MEJIRO NETWORK，国人商家，成立于 2023 年，目前在出售香港独立服务器

官网：[https://billing.mejiro.io](https://billing.mejiro.io/aff.php?aff=6)

Coupon (40% OFF)：{% label NY2024  blue %}
截至2024年1月12日

### 💻 HK Dedicated Server SD10
{% note purple 'fas fa-fan' simple %}
Test IP: 45.146.242.1
Looking Glass: None
ASN: AS209642 MEJIRONETWORK
{% endnote %}

HK Dedicated Server 香港独立服务器

- CPU: Single Intel Xeon Processors (Sandy Bridge/Ivy Bridge)
- RAM: 32GB DDR3 RECC RAM
- Storage: 480GB SATA SSD
- Traffic: Unlimited
- Network: AS209642 MEJIRONETWORK
- Bandwidth: Shared 200Mbps BW
- IPv4: 1IPv4 address
- Price: $50.00 USD (优惠后 $30 USD)

{% btn 'https://billing.mejiro.io/aff.php?aff=6',购买,far fa-hand-point-right,purple block larger %}

## 🏪 商家信息

### 🔍 Whois

商家域名的 Whois 信息

>Domain Name: mejiro.io
>Registry Domain ID: 0a713b3b6f6a4013a814b244a00c8d63-DONUTS
>Registrar WHOIS Server: http://whois.cloudflare.com
>
>Updated Date: 2023-09-21T17:15:34Z
>Creation Date: 2021-07-21T14:52:39Z
>Registry Expiry Date: 2025-07-21T14:52:39Z

### 💬 Group & Channel

商家的 Telegram 群组和频道

Telegram Group: None
Telegram Channel: None

## 📊 性能测试

### 🕒 硬件基本信息

```
$ wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-2650L v2 @ 1.70GHz
 CPU Cores          : 20 @ 1253.235 MHz
 CPU Cache Size:	: L1: 640.00 KB / L2: 2.50 MB / L3: 25.00 MB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 439.0 GB (3.0 GB Used)
 Total Mem          : 31.3 GB (410.2 MB Used)
 System uptime      : 1 days, 22 hour 14 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Ubuntu 20.04.6 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.4.0-144-generic
 TCP CC             : bbr
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS209642 Mejiro Network Limited
 Location           : Aberdeen / HK
 Region             : Southern
----------------------------------------------------------------------
```

### 🕒 CPU性能

```
-> CPU Performance Test (Full mode, 3-Pass @ 30sec)

 1 Thread(s) Test:		581.12 Scores (1.00x)
 10 Thread(s) Test:		5291.40 Scores (9.11x)
 20 Thread(s) Test:		8838.38 Scores (15.21x)
```

### 🕒 硬盘 FIO 读写测试

```
-> Disk Performance Test (Using FIO, Direct mode, 32 IO-Depth)

 Write Test (4K-Block):		196.85 MB/s (50393 IOPS)
 Read  Test (4K-Block):		375.94 MB/s (96240 IOPS)
 Write Test (128K-Block):	490.20 MB/s (3921 IOPS)
 Read  Test (128K-Block):	526.32 MB/s (4210 IOPS)
```

### 🕒 IPv4 信息

```
 IPv4-IP Address:		[HK] 45.146.242.*
 IPv4-AS Information:		AS209642 - Mejiro Network Limited
 IPv4-GeoIP Location:		Hong Kong Central and Western District Central
```

## 🎬流媒体测试

### RegionRestrictionCheck

```
 ** 测试时间: Sat 06 Jan 2024 11:50:30 AM UTC

 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: Mejiro Network (45.146.*.*) 


============[ Multination ]============
 Dazn:					Yes (Region: HK)
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			No  (Region: CN) 
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
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

测试时间: Saturday, January 6, 2024 (GMT+9) 21:10

电信 (CT) 和联通 (CU) 连接表现不太好，跳过测试

### 广州移动 (183.232.159.*)

```
$ ping 45.146.242.* -c 5
PING 45.146.242.* (45.146.242.*) 56(84) bytes of data.
64 bytes from 45.146.242.*: icmp_seq=1 ttl=48 time=13.8 ms
64 bytes from 45.146.242.*: icmp_seq=2 ttl=48 time=27.9 ms
64 bytes from 45.146.242.*: icmp_seq=3 ttl=48 time=17.3 ms
64 bytes from 45.146.242.*: icmp_seq=4 ttl=48 time=34.9 ms
64 bytes from 45.146.242.*: icmp_seq=5 ttl=48 time=28.6 ms

--- 45.146.242.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4007ms
rtt min/avg/max/mdev = 13.841/24.486/34.850/7.757 ms

$ tcping 45.146.242.* 7459
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=17.55977ms
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=34.106464ms
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=13.484363ms
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=15.795893ms

Ping statistics tcp://45.146.242.*:7459
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 13.484363ms, Maximum = 34.106464ms, Average = 20.236622ms
```

```
$ iperf3 -c 45.146.242.* -R
Connecting to host 45.146.242.*, port 5201
Reverse mode, remote host 45.146.242.* is sending
[  5] local 183.232.159.* port 52274 connected to 45.146.242.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  16.7 MBytes   140 Mbits/sec                  
[  5]   1.00-2.00   sec  16.9 MBytes   142 Mbits/sec                  
[  5]   2.00-3.00   sec  16.9 MBytes   142 Mbits/sec                  
[  5]   3.00-4.00   sec  16.9 MBytes   142 Mbits/sec                  
[  5]   4.00-5.00   sec  16.9 MBytes   142 Mbits/sec                  
[  5]   5.00-6.00   sec  16.9 MBytes   142 Mbits/sec                  
[  5]   6.00-7.00   sec  17.2 MBytes   144 Mbits/sec                  
[  5]   7.00-8.00   sec  16.7 MBytes   140 Mbits/sec                  
[  5]   8.00-9.00   sec  16.9 MBytes   142 Mbits/sec                  
[  5]   9.00-10.00  sec  16.9 MBytes   142 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.04  sec   173 MBytes   144 Mbits/sec  14063             sender
[  5]   0.00-10.00  sec   169 MBytes   142 Mbits/sec                  receiver

iperf Done.
```

### 广州移动 (120.233.42.*)

```
$ ping 45.146.242.* -c 5
PING 45.146.242.* (45.146.242.*) 56(84) bytes of data.
64 bytes from 45.146.242.*: icmp_seq=1 ttl=46 time=26.6 ms
64 bytes from 45.146.242.*: icmp_seq=2 ttl=46 time=34.1 ms
64 bytes from 45.146.242.*: icmp_seq=3 ttl=46 time=26.7 ms
64 bytes from 45.146.242.*: icmp_seq=4 ttl=46 time=25.9 ms
64 bytes from 45.146.242.*: icmp_seq=5 ttl=46 time=24.3 ms

--- 45.146.242.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4005ms
rtt min/avg/max/mdev = 24.299/27.507/34.082/3.397 ms

$ tcping 45.146.242.* 7459
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=25.652589ms
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=26.654746ms
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=25.365743ms
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=27.841374ms

Ping statistics tcp://45.146.242.*:7459
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 25.365743ms, Maximum = 27.841374ms, Average = 26.378613ms
```

```
$ iperf3 -c 45.146.242.* -R
Connecting to host 45.146.242.*, port 5201
Reverse mode, remote host 45.146.242.* is sending
[  5] local 120.233.42.* port 35738 connected to 45.146.242.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  15.2 MBytes   127 Mbits/sec                  
[  5]   1.00-2.00   sec  16.6 MBytes   139 Mbits/sec                  
[  5]   2.00-3.00   sec  15.7 MBytes   132 Mbits/sec                  
[  5]   3.00-4.00   sec  16.0 MBytes   134 Mbits/sec                  
[  5]   4.00-5.00   sec  16.7 MBytes   140 Mbits/sec                  
[  5]   5.00-6.00   sec  16.6 MBytes   140 Mbits/sec                  
[  5]   6.00-7.00   sec  16.7 MBytes   140 Mbits/sec                  
[  5]   7.00-8.00   sec  16.6 MBytes   140 Mbits/sec                  
[  5]   8.00-9.00   sec  16.1 MBytes   135 Mbits/sec                  
[  5]   9.00-10.00  sec  17.2 MBytes   144 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.03  sec   166 MBytes   139 Mbits/sec  10893             sender
[  5]   0.00-10.00  sec   163 MBytes   137 Mbits/sec                  receiver

iperf Done.
```

### 江苏移动 (223.113.130.*)
```
$ ping 45.146.242.* -c 5
PING 45.146.242.* (45.146.242.*) 56(84) bytes of data.
64 bytes from 45.146.242.*: icmp_seq=1 ttl=45 time=41.2 ms
64 bytes from 45.146.242.*: icmp_seq=2 ttl=45 time=42.7 ms
64 bytes from 45.146.242.*: icmp_seq=3 ttl=45 time=41.2 ms
64 bytes from 45.146.242.*: icmp_seq=4 ttl=45 time=41.1 ms
64 bytes from 45.146.242.*: icmp_seq=5 ttl=45 time=41.1 ms

--- 45.146.242.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4004ms
rtt min/avg/max/mdev = 41.081/41.456/42.740/0.642 ms

$ tcping 45.146.242.* 7459
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=41.303347ms
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=42.118773ms
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=66.524664ms
Ping tcp://45.146.242.*:7459(45.146.242.*:7459) - Connected - time=45.633985ms

Ping statistics tcp://45.146.242.*:7459
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 41.303347ms, Maximum = 66.524664ms, Average = 48.895192ms
```

```
$ iperf3 -c 45.146.242.* -R
Connecting to host 45.146.242.*, port 5201
Reverse mode, remote host 45.146.242.* is sending
[  5] local 223.113.130.* port 41542 connected to 45.146.242.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  4.04 MBytes  33.9 Mbits/sec                  
[  5]   1.00-2.00   sec  11.5 MBytes  96.7 Mbits/sec                  
[  5]   2.00-3.00   sec  15.7 MBytes   132 Mbits/sec                  
[  5]   3.00-4.00   sec  14.3 MBytes   120 Mbits/sec                  
[  5]   4.00-5.00   sec  15.9 MBytes   133 Mbits/sec                  
[  5]   5.00-6.00   sec  16.2 MBytes   136 Mbits/sec                  
[  5]   6.00-7.00   sec  16.5 MBytes   139 Mbits/sec                  
[  5]   7.00-8.00   sec  15.6 MBytes   130 Mbits/sec                  
[  5]   8.00-9.00   sec  15.5 MBytes   130 Mbits/sec                  
[  5]   9.00-10.00  sec  16.6 MBytes   139 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.04  sec   144 MBytes   120 Mbits/sec  11386             sender
[  5]   0.00-10.00  sec   142 MBytes   119 Mbits/sec                  receiver

iperf Done.
```


> Cover Illustration: https://twitter.com/asakuramaru/status/1741481798205628718
> Artist: 亜桜まる