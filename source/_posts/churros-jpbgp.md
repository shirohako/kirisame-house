---
title: CHurros | JP | BGP Premium | 测试报告
cover: https://i.psray.net/i/2024/01/04/6595da0273bb3.jpg
tags: [Japan]
---
## 🖥️ 本次测试对象

CHurros，国人商家，成立于 2023 年，有香港、日本、台湾、新加坡等多地BGP产品

官网：[https://churros.cloud](https://churros.cloud/aff.php?aff=71)

Coupon (10% OFF)：{% label EO5MUUL497 blue %}

### 💻 JPBGP Premium
{% note purple 'fas fa-fan' simple %}
Test IP: 45.137.181.*
Looking Glass: None
ASN: AS38136 Akari Networks
{% endnote %}

内置主流媒体解锁，支持 UDP，Premium 产品大陆优化。可以自定义配置

- vCPU: Customizable
- RAM: Customizable
- Storage: Customizable
- Traffic: Customizable
- Network: IIJ, BBTEC, GSL, JPIX, JPNAP, BBIX, EIE，优化大陆方向连接
- Bandwidth: 500 Mbit/s guaranteed speed. Peak Bandwidth 10Gbps
- Other: Protection against DDoS-attacks
- Price: ￥CNY 14.00+

{% btn 'https://churros.cloud/aff.php?aff=71',购买,far fa-hand-point-right,purple block larger %}

## 🏪 商家信息

### 🔍 Whois

商家域名的 Whois 信息

>Name: churros.cloud
>Internationalized Domain Name: churros.cloud
>Registry Domain ID: DO_47c506c48eb710a28b199feee9274a37-ARUBA
>
>Dates
>Registry Expiration: 2025-10-23 22:02:20 UTC
>Updated: 2023-12-29 19:19:34 UTC
>Created: 2023-10-23 22:02:20 UTC

### 💬 Group & Channel

商家的 Telegram 群组和频道

Telegram Channel: https://t.me/churros789
Telegram Group: https://t.me/churroscloud

## 📊 性能测试

### 🕒 Bench.sh

```
$ wget -qO- bench.sh | bash
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 7B13 64-Core Processor
 CPU Cores          : 4 @ 2245.780 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 19.6 GB (2.1 GB Used)
 Total Mem          : 3.8 GB (113.6 MB Used)
 System uptime      : 0 days, 1 hour 6 min
 Load average       : 0.00, 0.02, 0.00
 OS                 : Ubuntu 20.04 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.4.0-29-generic
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS38136 Akari Networks
 Location           : Tokyo / JP
 Region             : Tokyo
----------------------------------------------------------------------
```

### 🕒 CPU性能

```
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		2504 Scores
 4 线程测试(多核)得分: 		9896 Scores
```


### 🕒 内存测试

```
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		28764.02 MB/s
 单线程写测试:		14318.30 MB/s
```

### 🕒 硬盘dd读写测试

```
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		32.7 MB/s (7977 IOPS, 3.21s)		29.0 MB/s (7081 IOPS, 3.62s)
 1GB-1M Block		994 MB/s (948 IOPS, 1.05s)		1.2 GB/s (1127 IOPS, 0.89s)
 ```

### 🕒 硬盘fio读写测试



```
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 159.03 MB/s  (39.7k) | 1.00 GB/s    (15.6k)
Write      | 159.45 MB/s  (39.8k) | 1.00 GB/s    (15.7k)
Total      | 318.49 MB/s  (79.6k) | 2.01 GB/s    (31.4k) 
```

```               
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.12 GB/s     (2.2k) | 1.14 GB/s     (1.1k)
Write      | 1.18 GB/s     (2.3k) | 1.21 GB/s     (1.1k)
Total      | 2.31 GB/s     (4.5k) | 2.35 GB/s     (2.3k)
```


## 🎬流媒体测试

### 简易测试

```
---------------- Youtube ----------------
[IPv4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: PITTIX
视频缓存节点地域: 美国  匹兹堡(PIT1)
Youtube识别地域: 日本(JP)

---------------- Netflix ----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：日本
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入

--------------- DisneyPlus ---------------
[提醒] 无法获取DisneyPlus权验接口信息，当前测试可能会不准确
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：日本区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：日本区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断

--------------- TikTok解锁 ---------------
Tiktok Region:		【AU】
```

### RegionRestrictionCheck

```
 ** 测试时间: Wed 03 Jan 2024 10:03:15 PM CET

 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: Akari Networks (45.137.*.*) 

============[ Multination ]============
 Dazn:					Yes (Region: JP)
 HotStar:				Failed (Network Connection)
 Disney+:				Yes (Region: JP)
 Netflix:				Yes (Region: JP)
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Yes (Region: JP)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			AU
 Viu.com:				No
 YouTube CDN:				PITTIX in Pittsburgh, PA 
 Netflix Preferred CDN:			Associated with [] in [Tokyo ]
 Spotify Registration:			No
 Steam Currency:			JPY
 ChatGPT:				Only Available with Web Browser
 Bing Region:				
=======================================
===============[ Japan ]===============
 DMM:					Yes
 DMM TV:				No
 Abema.TV:				No
 Niconico:				No
 music.jp:				No
 Telasa:				No
 U-NEXT:				Yes
 Hulu Japan:				No
 TVer:					Yes
 GYAO!:					Yes
 WOWOW:					Failed
 VideoMarket:				Failed (Unexpected Result: 404)
 FOD(Fuji TV):				No
 Radiko:				No
 Karaoke@DAM:				No
 J:com On Demand:			Yes
 ---Game---
 Kancolle Japan:			No
 Pretty Derby Japan:			Failed (Network Connection)
 Konosuba Fantastic Days:		Yes
 Princess Connect Re:Dive Japan:	Yes
 World Flipper Japan:			Failed (Network Connection)
 Project Sekai: Colorful Stage:		No
=======================================
```

## 📶 大陆方向上传速度测试

测试时间: Thursday, January 4, 2024 03:01:20 JST

### 广州移动 (183.232.159.*)

```
$ ping 45.137.181.* -c 5
PING 45.137.181.* (45.137.181.*) 56(84) bytes of data.
64 bytes from 45.137.181.*: icmp_seq=1 ttl=48 time=101 ms
64 bytes from 45.137.181.*: icmp_seq=2 ttl=48 time=101 ms
64 bytes from 45.137.181.*: icmp_seq=3 ttl=48 time=101 ms
64 bytes from 45.137.181.*: icmp_seq=4 ttl=48 time=101 ms
64 bytes from 45.137.181.*: icmp_seq=5 ttl=48 time=101 ms

--- 45.137.181.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4007ms
rtt min/avg/max/mdev = 100.681/100.740/100.778/0.042 ms

$ tcping 45.137.181.* 22
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=104.299113ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=99.836232ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=98.263581ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=102.208006ms

Ping statistics tcp://45.137.181.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 98.263581ms, Maximum = 104.299113ms, Average = 101.151733ms
```

```
$ iperf3 -c 45.137.181.* -R
Connecting to host 45.137.181.*, port 5201
Reverse mode, remote host 45.137.181.* is sending
[  5] local 183.232.159.* port 24596 connected to 45.137.181.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  8.51 MBytes  71.4 Mbits/sec                  
[  5]   1.00-2.00   sec  22.2 MBytes   186 Mbits/sec                  
[  5]   2.00-3.00   sec  16.7 MBytes   140 Mbits/sec                  
[  5]   3.00-4.00   sec  16.3 MBytes   137 Mbits/sec                  
[  5]   4.00-5.00   sec  15.2 MBytes   128 Mbits/sec                  
[  5]   5.00-6.00   sec  20.6 MBytes   173 Mbits/sec                  
[  5]   6.00-7.00   sec  15.2 MBytes   127 Mbits/sec                  
[  5]   7.00-8.00   sec  18.0 MBytes   151 Mbits/sec                  
[  5]   8.00-9.00   sec  18.4 MBytes   154 Mbits/sec                  
[  5]   9.00-10.00  sec  16.5 MBytes   138 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.10  sec   170 MBytes   141 Mbits/sec  494             sender
[  5]   0.00-10.00  sec   168 MBytes   141 Mbits/sec                  receiver

iperf Done.
```

### 广州移动 (120.233.42.*)

```
$ ping 45.137.181.* -c 5
PING 45.137.181.* (45.137.181.*) 56(84) bytes of data.
64 bytes from 45.137.181.*: icmp_seq=1 ttl=47 time=110 ms
64 bytes from 45.137.181.*: icmp_seq=2 ttl=47 time=110 ms
64 bytes from 45.137.181.*: icmp_seq=3 ttl=47 time=109 ms
64 bytes from 45.137.181.*: icmp_seq=4 ttl=47 time=109 ms
64 bytes from 45.137.181.*: icmp_seq=5 ttl=47 time=110 ms

--- 45.137.181.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 109.327/109.546/109.841/0.173 ms

$ tcping 45.137.181.* 22 
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=108.163435ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=105.081824ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=106.472091ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=107.507062ms

Ping statistics tcp://45.137.181.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 105.081824ms, Maximum = 108.163435ms, Average = 106.806103ms
```

```
$ iperf3 -c 45.137.181.* -R
Connecting to host 45.137.181.*, port 5201
Reverse mode, remote host 45.137.181.* is sending
[  5] local 120.233.42.* port 55864 connected to 45.137.181.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  4.96 MBytes  41.6 Mbits/sec                  
[  5]   1.00-2.00   sec  23.8 MBytes   200 Mbits/sec                  
[  5]   2.00-3.00   sec  23.5 MBytes   197 Mbits/sec                  
[  5]   3.00-4.00   sec  25.2 MBytes   211 Mbits/sec                  
[  5]   4.00-5.00   sec  25.1 MBytes   211 Mbits/sec                  
[  5]   5.00-6.00   sec  24.2 MBytes   203 Mbits/sec                  
[  5]   6.00-7.00   sec  25.3 MBytes   212 Mbits/sec                  
[  5]   7.00-8.00   sec  20.7 MBytes   174 Mbits/sec                  
[  5]   8.00-9.00   sec  21.0 MBytes   177 Mbits/sec                  
[  5]   9.00-10.00  sec  24.6 MBytes   206 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.11  sec   222 MBytes   184 Mbits/sec  358             sender
[  5]   0.00-10.00  sec   218 MBytes   183 Mbits/sec                  receiver

iperf Done.
```

### 江苏移动 (223.113.130.*)
```
$ ping 45.137.181.* -c 5
PING 45.137.181.* (45.137.181.*) 56(84) bytes of data.
64 bytes from 45.137.181.*: icmp_seq=1 ttl=50 time=74.7 ms
64 bytes from 45.137.181.*: icmp_seq=2 ttl=50 time=74.6 ms
64 bytes from 45.137.181.*: icmp_seq=3 ttl=50 time=74.7 ms
64 bytes from 45.137.181.*: icmp_seq=4 ttl=50 time=74.7 ms
64 bytes from 45.137.181.*: icmp_seq=5 ttl=50 time=74.7 ms

--- 45.137.181.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4005ms
rtt min/avg/max/mdev = 74.578/74.650/74.675/0.036 ms

$ tcping 45.137.181.* 22 
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=79.781869ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=76.622041ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=75.384319ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=77.184485ms

Ping statistics tcp://45.137.181.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 75.384319ms, Maximum = 79.781869ms, Average = 77.243178ms
```

```
$ iperf3 -c 45.137.181.* -R
Connecting to host 45.137.181.*, port 5201
Reverse mode, remote host 45.137.181.* is sending
[  5] local 223.113.130.* port 62184 connected to 45.137.181.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  10.3 MBytes  86.4 Mbits/sec                  
[  5]   1.00-2.00   sec  15.0 MBytes   126 Mbits/sec                  
[  5]   2.00-3.00   sec  15.0 MBytes   126 Mbits/sec                  
[  5]   3.00-4.00   sec  13.8 MBytes   115 Mbits/sec                  
[  5]   4.00-5.00   sec  15.0 MBytes   126 Mbits/sec                  
[  5]   5.00-6.00   sec  16.2 MBytes   136 Mbits/sec                  
[  5]   6.00-7.00   sec  13.8 MBytes   115 Mbits/sec                  
[  5]   7.00-8.00   sec  16.2 MBytes   136 Mbits/sec                  
[  5]   8.00-9.00   sec  18.8 MBytes   157 Mbits/sec                  
[  5]   9.00-10.00  sec  18.3 MBytes   153 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.08  sec   154 MBytes   128 Mbits/sec    0             sender
[  5]   0.00-10.00  sec   152 MBytes   128 Mbits/sec                  receiver

iperf Done.
```

### 江苏联通 (112.82.243.*)

```
$ ping 45.137.181.* -c 5
PING 45.137.181.* (45.137.181.*) 56(84) bytes of data.
64 bytes from 45.137.181.*: icmp_seq=1 ttl=48 time=36.9 ms
64 bytes from 45.137.181.*: icmp_seq=2 ttl=48 time=36.8 ms
64 bytes from 45.137.181.*: icmp_seq=3 ttl=48 time=36.8 ms
64 bytes from 45.137.181.*: icmp_seq=4 ttl=48 time=36.9 ms
64 bytes from 45.137.181.*: icmp_seq=5 ttl=48 time=37.0 ms

--- 45.137.181.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 36.814/36.887/37.013/0.075 ms

$ tcping 45.137.181.* 22 
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=36.932155ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=37.914638ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=36.301836ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=39.645178ms

Ping statistics tcp://45.137.181.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 36.301836ms, Maximum = 39.645178ms, Average = 37.698451ms
```


```
$ iperf3 -c 45.137.181.* -R
Connecting to host 45.137.181.*, port 5201
Reverse mode, remote host 45.137.181.* is sending
[  5] local 112.82.243.* port 55240 connected to 45.137.181.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  26.8 MBytes   225 Mbits/sec                  
[  5]   1.00-2.00   sec  35.1 MBytes   294 Mbits/sec                  
[  5]   2.00-3.00   sec  35.4 MBytes   297 Mbits/sec                  
[  5]   3.00-4.00   sec  33.5 MBytes   281 Mbits/sec                  
[  5]   4.00-5.00   sec  33.5 MBytes   281 Mbits/sec                  
[  5]   5.00-6.00   sec  34.4 MBytes   288 Mbits/sec                  
[  5]   6.00-7.00   sec  32.3 MBytes   271 Mbits/sec                  
[  5]   7.00-8.00   sec  34.4 MBytes   288 Mbits/sec                  
[  5]   8.00-9.00   sec  31.6 MBytes   265 Mbits/sec                  
[  5]   9.00-10.00  sec  30.2 MBytes   253 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.04  sec   330 MBytes   276 Mbits/sec    0             sender
[  5]   0.00-10.00  sec   327 MBytes   274 Mbits/sec                  receiver

iperf Done.
```

### 安徽联通 (43.224.81.*)

```
$ ping 45.137.181.* -c 5
PING 45.137.181.* (45.137.181.*) 56(84) bytes of data.
64 bytes from 45.137.181.*: icmp_seq=1 ttl=49 time=160 ms
64 bytes from 45.137.181.*: icmp_seq=2 ttl=49 time=160 ms
64 bytes from 45.137.181.*: icmp_seq=3 ttl=49 time=161 ms
64 bytes from 45.137.181.*: icmp_seq=4 ttl=49 time=160 ms
64 bytes from 45.137.181.*: icmp_seq=5 ttl=49 time=161 ms

--- 45.137.181.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 160.391/160.640/161.460/0.413 ms

$ tcping 45.137.181.* 22  
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=167.875221ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=168.030013ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=160.701956ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=160.963828ms

Ping statistics tcp://45.137.181.*:22
	4 probes sent.
	4 successful, 0 failed.
Approximate trip times:
	Minimum = 160.701956ms, Maximum = 168.030013ms, Average = 164.392754ms
```

```
$ iperf3 -c 45.137.181.* -R
Connecting to host 45.137.181.*, port 5201
Reverse mode, remote host 45.137.181.* is sending
[  5] local 43.224.81.* port 40146 connected to 45.137.181.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec   636 KBytes  5.21 Mbits/sec                  
[  5]   1.00-2.00   sec  11.7 MBytes  98.5 Mbits/sec                  
[  5]   2.00-3.00   sec  16.7 MBytes   140 Mbits/sec                  
[  5]   3.00-4.00   sec  16.7 MBytes   140 Mbits/sec                  
[  5]   4.00-5.00   sec  16.4 MBytes   138 Mbits/sec                  
[  5]   5.00-6.00   sec  16.8 MBytes   141 Mbits/sec                  
[  5]   6.00-7.00   sec  16.7 MBytes   140 Mbits/sec                  
[  5]   7.00-8.00   sec  16.0 MBytes   134 Mbits/sec                  
[  5]   8.00-9.00   sec  12.6 MBytes   106 Mbits/sec                  
[  5]   9.00-10.00  sec  16.1 MBytes   135 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.16  sec   144 MBytes   119 Mbits/sec   54             sender
[  5]   0.00-10.00  sec   141 MBytes   118 Mbits/sec                  receiver

iperf Done.
```

### 武汉联通 (211.91.140.*)

```
$ ping 45.137.181.* -c 5
PING 45.137.181.* (45.137.181.*) 56(84) bytes of data.
64 bytes from 45.137.181.*: icmp_seq=1 ttl=51 time=174 ms
64 bytes from 45.137.181.*: icmp_seq=2 ttl=51 time=165 ms
64 bytes from 45.137.181.*: icmp_seq=3 ttl=51 time=166 ms
64 bytes from 45.137.181.*: icmp_seq=4 ttl=51 time=165 ms
64 bytes from 45.137.181.*: icmp_seq=5 ttl=51 time=165 ms

--- 45.137.181.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 165.762/167.595/174.373/3.411 ms

$ tcping 45.137.181.* 22 
Ping tcp://45.137.181.*:22 - failed: dial tcp 45.137.181.*:22: i/o timeout
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=173.526214ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=172.980944ms
Ping tcp://45.137.181.*:22(45.137.181.*:22) - Connected - time=169.917745ms

Ping statistics tcp://45.137.181.*:22
	4 probes sent.
	3 successful, 1 failed.
Approximate trip times:
	Minimum = 169.917745ms, Maximum = 173.526214ms, Average = 172.141634ms
```

```
$ iperf3 -c 45.137.181.* -R
Connecting to host 45.137.181.*, port 5201
Reverse mode, remote host 45.137.181.* is sending
[  4] local 211.91.140.* port 63258 connected to 45.137.181.* port 5201
[ ID] Interval           Transfer     Bandwidth
[  4]   0.00-1.00   sec   754 KBytes  6.18 Mbits/sec                  
[  4]   1.00-2.00   sec  12.0 MBytes   100 Mbits/sec                  
[  4]   2.00-3.00   sec  11.2 MBytes  94.4 Mbits/sec                  
[  4]   3.00-4.00   sec  10.1 MBytes  84.8 Mbits/sec                  
[  4]   4.00-5.00   sec  15.7 MBytes   132 Mbits/sec                  
[  4]   5.00-6.00   sec  16.7 MBytes   140 Mbits/sec                  
[  4]   6.00-7.00   sec  17.5 MBytes   147 Mbits/sec                  
[  4]   7.00-8.00   sec  17.1 MBytes   144 Mbits/sec                  
[  4]   8.00-9.00   sec  17.3 MBytes   145 Mbits/sec                  
[  4]   9.00-10.00  sec  17.1 MBytes   144 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bandwidth       Retr
[  4]   0.00-10.00  sec   139 MBytes   117 Mbits/sec  1275             sender
[  4]   0.00-10.00  sec   139 MBytes   116 Mbits/sec                  receiver

iperf Done.
```

> Cover Illustration: https://twitter.com/asakuramaru/status/1700297176826728727
> Artist: 亜桜まる