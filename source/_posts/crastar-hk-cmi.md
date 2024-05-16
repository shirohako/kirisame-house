---
title: Crastar | HK | CMI VPS | $49 USD | AMD Milan 4核心 | 8G内存 | 10TB单向流量 | 测试报告
cover: https://i.psray.net/i/2024/04/21/6624f341ec916.jpg
date: 2024-04-20
tags: [HongKong]
description: Crastar，国人商家，成立于 2020 年，目前在出售香港、大陆的 VPS 产品。另外还有 IPLC 专线，深港、沪日、广港等。本次测试的是 HKBGP-CMI Metered 产品。
---
## 🏪 商家信息

**Crastar** 

大陆商家，成立于 2020 年。目前在出售香港、大陆的 VPS 产品
另外还有 IPLC 专线，深港、沪日、广港等

官网：[https://crastar.io/](https://crastar.io/aff.php?aff=23)


### 🖥️ 本次测试对象

**HKBGP-CMI Metered**

- **CPU**: AMD EPYC-Milan Processor | 8 Cores @ 2445.406 MHz
- **RAM**: 8GB RAM
- **Storage**: 20GB (+20GB / $1) (Max 160GB) 
- **Traffic**: 10TB Outbound (+10TB / $49)
- **Network**: AS18464 ALVIDI TECHNOLOGY Inc
- **Bandwidth**: Unmimited
- **IPv4**: IPv4 * 1 (+1/$1)
- **Location**: Sheung Yuen Leng, Wong Tai Sin (KWT)
- **Price**: $49 USD ~


{% btn 'https://crastar.io/aff.php?aff=23',购买,far fa-hand-point-right,purple block larger %}


### 🛜 网络信息

位于香港T3级数据中心 高冗余高可用基础设施

CMI双程回国优化，直连广移，低延迟高速度
PCCW、Cogent、Telia、NTT等多上游网络
经由 HKIX、EQUINIX EIE 直连香港互联网核心

商家没有提供 Looking Glass, 如果需要测试，可以加TG群问老板要 iperf3

{% note purple 'fas fa-fan' simple %}
**Test IP**: 178.173.236.*
**Country of Origin**: 🇭🇰 Hong Kong
**ASN**: **AS138997** AS18464 ALVIDI TECHNOLOGY Inc
**Hurricane Electric BGP Toolkit**: https://bgp.he.net/AS18464
{% endnote %}

### 🔍 Whois

商家域名的 Whois 信息

>Domain Name: crastar.io
>Registry Domain ID: 77feff853d78448783c6a834d2ef39f7-DONUTS
>Registrar WHOIS Server: whois.godaddy.com
>
>Updated Date: 2024-01-22T09:33:54Z
>Creation Date: 2023-02-20T05:07:35Z
>Registrar Registration Expiration Date: 2025-02-20T05:07:35Z

### 💬 Group & Channel

商家的 Telegram 群组和频道

Telegram Group: https://t.me/crastarchannel
Telegram Channel: https://t.me/crastar

## 📊 性能测试

### 🕒 硬件基本信息

```
$ wget -qO- bench.sh | bash
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC-Milan Processor
 CPU Cores          : 8 @ 2445.406 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 40.0 GB (1.9 GB Used)
 Total Mem          : 7.7 GB (290.7 MB Used)
 System uptime      : 0 days, 2 hour 25 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.10.0-20-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS18464 ALVIDI TECHNOLOGY Inc
 Location           : Hong Kong / HK
 Region             : Hong Kong
----------------------------------------------------------------------
 I/O Speed(1st run) : 955 MB/s
 I/O Speed(2nd run) : 1.5 GB/s
 I/O Speed(3rd run) : 1.7 GB/s
 I/O Speed(average) : 1410.6 MB/s
----------------------------------------------------------------------
```

### 🕒 CPU 性能 (LemonBench)

```
-> CPU Performance Test (Fast mode, 1-Pass @ 5sec)

1 Thread(s) Test:		3628.21 Scores (1.00x)
8 Thread(s) Test:		28621.30 Scores (7.89x)
```

### 🕒 硬盘 FIO 读写测试 (yabs.sh)

```
fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 183.62 MB/s  (45.9k) | 1.17 GB/s    (18.3k)
Write      | 184.10 MB/s  (46.0k) | 1.18 GB/s    (18.4k)
Total      | 367.72 MB/s  (91.9k) | 2.35 GB/s    (36.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.27 GB/s     (2.4k) | 1.68 GB/s     (1.6k)
Write      | 1.34 GB/s     (2.6k) | 1.79 GB/s     (1.7k)
Total      | 2.62 GB/s     (5.1k) | 3.48 GB/s     (3.4k)
```

### 🕒 硬盘 FIO 读写测试 (LemonBench)

```
-> Disk Performance Test (Using FIO, Direct mode, 32 IO-Depth)

Write Test (4K-Block):      28.03 MB/s (7174 IOPS)
Read  Test (4K-Block): 	    285.71 MB/s (73142 IOPS)
Write Test (128K-Block):    199.60 MB/s (1596 IOPS)
Read  Test (128K-Block):    704.22 MB/s (5633 IOPS)
```

### 🕒 加密速度测试 Encryption Performance

```
$ openssl speed -evp aes-256-gcm
Doing aes-256-gcm for 3s on 16 size blocks: 94349762 aes-256-gcm's in 3.00s
Doing aes-256-gcm for 3s on 64 size blocks: 62260475 aes-256-gcm's in 2.99s
Doing aes-256-gcm for 3s on 256 size blocks: 29971804 aes-256-gcm's in 2.99s
Doing aes-256-gcm for 3s on 1024 size blocks: 9401520 aes-256-gcm's in 3.00s
Doing aes-256-gcm for 3s on 8192 size blocks: 1338127 aes-256-gcm's in 3.00s
Doing aes-256-gcm for 3s on 16384 size blocks: 669826 aes-256-gcm's in 3.00s
OpenSSL 1.1.1w  11 Sep 2023
built on: Wed Sep 13 19:21:33 2023 UTC
options:bn(64,64) rc4(8x,int) des(int) aes(partial) blowfish(ptr) 
compiler: gcc -fPIC -pthread -m64 -Wa,--noexecstack -Wall -Wa,--noexecstack -g -O2 -ffile-prefix-map=/build/reproducible-path/openssl-1.1.1w=. -fstack-protector-strong -Wformat -Werror=format-security -DOPENSSL_USE_NODELETE -DL_ENDIAN -DOPENSSL_PIC -DOPENSSL_CPUID_OBJ -DOPENSSL_IA32_SSE2 -DOPENSSL_BN_ASM_MONT -DOPENSSL_BN_ASM_MONT5 -DOPENSSL_BN_ASM_GF2m -DSHA1_ASM -DSHA256_ASM -DSHA512_ASM -DKECCAK1600_ASM -DRC4_ASM -DMD5_ASM -DAESNI_ASM -DVPAES_ASM -DGHASH_ASM -DECP_NISTZ256_ASM -DX25519_ASM -DPOLY1305_ASM -DNDEBUG -Wdate-time -D_FORTIFY_SOURCE=2
The 'numbers' are in 1000s of bytes per second processed.
type             16 bytes     64 bytes    256 bytes   1024 bytes   8192 bytes  16384 bytes
aes-256-gcm     503198.73k  1332665.69k  2566147.77k  3209052.16k  3653978.79k  3658143.06k
```

```
$ openssl speed -evp chacha20-poly1305
Doing chacha20-poly1305 for 3s on 16 size blocks: 53575989 chacha20-poly1305's in 3.00s
Doing chacha20-poly1305 for 3s on 64 size blocks: 22577469 chacha20-poly1305's in 3.00s
Doing chacha20-poly1305 for 3s on 256 size blocks: 13893243 chacha20-poly1305's in 3.00s
Doing chacha20-poly1305 for 3s on 1024 size blocks: 6174714 chacha20-poly1305's in 3.00s
Doing chacha20-poly1305 for 3s on 8192 size blocks: 798507 chacha20-poly1305's in 3.00s
Doing chacha20-poly1305 for 3s on 16384 size blocks: 399764 chacha20-poly1305's in 3.00s
OpenSSL 1.1.1w  11 Sep 2023
built on: Wed Sep 13 19:21:33 2023 UTC
options:bn(64,64) rc4(8x,int) des(int) aes(partial) blowfish(ptr) 
compiler: gcc -fPIC -pthread -m64 -Wa,--noexecstack -Wall -Wa,--noexecstack -g -O2 -ffile-prefix-map=/build/reproducible-path/openssl-1.1.1w=. -fstack-protector-strong -Wformat -Werror=format-security -DOPENSSL_USE_NODELETE -DL_ENDIAN -DOPENSSL_PIC -DOPENSSL_CPUID_OBJ -DOPENSSL_IA32_SSE2 -DOPENSSL_BN_ASM_MONT -DOPENSSL_BN_ASM_MONT5 -DOPENSSL_BN_ASM_GF2m -DSHA1_ASM -DSHA256_ASM -DSHA512_ASM -DKECCAK1600_ASM -DRC4_ASM -DMD5_ASM -DAESNI_ASM -DVPAES_ASM -DGHASH_ASM -DECP_NISTZ256_ASM -DX25519_ASM -DPOLY1305_ASM -DNDEBUG -Wdate-time -D_FORTIFY_SOURCE=2
The 'numbers' are in 1000s of bytes per second processed.
type             16 bytes     64 bytes    256 bytes   1024 bytes   8192 bytes  16384 bytes
chacha20-poly1305   285738.61k   481652.67k  1185556.74k  2107635.71k  2180456.45k  2183244.46k
```

### 🕒 Geekbench 6 Benchmark Test (yabs.sh)

```
Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1480                          
Multi Core      | 7553                          
Full Test       | https://browser.geekbench.com/v6/cpu/5804777
```

## 🎬流媒体测试

### RegionRestrictionCheck (IPv4)

```
 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: NEROCLOUD Limited (178.173.*.*) 


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
 Instagram Licensed Audio:		No
=======================================
=============[ Hong Kong ]=============
 Now E:					No
 Viu.TV:				Yes
 MyTVSuper:				No
 HBO GO Asia:				Yes (Region: HK)
 BiliBili Hongkong/Macau/Taiwan:	Yes
=======================================
```


## 📶 大陆方向上传速度测试

测试时间: Sunday, April 21, 2024 (GMT+9) 17:25

### 港内速度测试

💡 i3D.net - Hong Kong

```
$ speedtest -s 22126

   Speedtest by Ookla

      Server: i3D.net - Hong Kong (id: 22126)
         ISP: NEROCLOUD Limited
Idle Latency:     2.06 ms   (jitter: 1.48ms, low: 1.93ms, high: 5.01ms)
    Download:  1733.49 Mbps (data used: 1.2 GB)                                                   
                  2.13 ms   (jitter: 0.29ms, low: 1.88ms, high: 13.77ms)
      Upload:  1702.59 Mbps (data used: 2.1 GB)                                                   
                  2.02 ms   (jitter: 2.21ms, low: 1.91ms, high: 206.75ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/96d3bb3e-24ca-431b-86c5-079e7061b50a
```

💡 HKBN

```
$ speedtest -s 59303

   Speedtest by Ookla

      Server: HKBN - Hong Kong (id: 59303)
         ISP: NEROCLOUD Limited
Idle Latency:     2.43 ms   (jitter: 0.08ms, low: 2.39ms, high: 2.52ms)
    Download:   445.95 Mbps (data used: 803.9 MB)                                                   
                  2.46 ms   (jitter: 5.73ms, low: 2.36ms, high: 211.23ms)
      Upload:  1613.39 Mbps (data used: 1.7 GB)                                                   
                  2.50 ms   (jitter: 2.53ms, low: 2.33ms, high: 210.68ms)
 Packet Loss:    13.0%
  Result URL: https://www.speedtest.net/result/c/46648c79-72c2-4299-93a1-6fcd14e01629
```

💡 Misaka Network, Inc. - Hong Kong

```
$ speedtest -s 44745

   Speedtest by Ookla

      Server: Misaka Network, Inc. - Hong Kong (id: 44745)
         ISP: NEROCLOUD Limited
Idle Latency:     0.90 ms   (jitter: 0.09ms, low: 0.87ms, high: 1.07ms)
    Download:  1547.04 Mbps (data used: 1.2 GB)                                                   
                  1.08 ms   (jitter: 2.19ms, low: 0.86ms, high: 109.87ms)
      Upload:   492.00 Mbps (data used: 735.5 MB)                                                   
                349.97 ms   (jitter: 61.98ms, low: 1.05ms, high: 1684.29ms)
 Packet Loss: Not available.
  Result URL: https://www.speedtest.net/result/c/dd98abbc-5de0-4f8a-99c5-b566a91a025a
```


### 宁波移动 (120.199.\*.\*)

🚥 ICMP Ping 测试 (大陆网络 -> 测试机)

```
$ ping 178.173.236.* -c 5 
PING 178.173.236.* (178.173.236.*) 56(84) bytes of data.
64 bytes from 178.173.236.*: icmp_seq=1 ttl=44 time=37.3 ms
64 bytes from 178.173.236.*: icmp_seq=2 ttl=44 time=37.2 ms
64 bytes from 178.173.236.*: icmp_seq=3 ttl=44 time=37.2 ms
64 bytes from 178.173.236.*: icmp_seq=4 ttl=44 time=37.3 ms
64 bytes from 178.173.236.*: icmp_seq=5 ttl=44 time=37.3 ms

--- 178.173.236.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4005ms
rtt min/avg/max/mdev = 37.168/37.244/37.284/0.042 ms
```

🚀 Iperf3 多线程测试 || ⬆️ 香港 -> ⬇️ 宁波移动

```
$ iperf3 -c 103.152.220.* -P 8 -R
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.05  sec  96.5 MBytes  80.6 Mbits/sec  14795             sender
[  8]   0.00-10.05  sec   120 MBytes   100 Mbits/sec  15832             sender
[ 10]   0.00-10.05  sec   138 MBytes   115 Mbits/sec  11022             sender
[ 12]   0.00-10.05  sec   109 MBytes  91.2 Mbits/sec  12106             sender
[ 14]   0.00-10.05  sec   133 MBytes   111 Mbits/sec  17523             sender
[ 16]   0.00-10.05  sec   131 MBytes   109 Mbits/sec  11276             sender
[ 18]   0.00-10.05  sec   202 MBytes   168 Mbits/sec  24758             sender
[ 20]   0.00-10.05  sec   121 MBytes   101 Mbits/sec  16572             sender
[SUM]   0.00-10.05  sec  1.02 GBytes   876 Mbits/sec  123884             sender
```

### 广州移动 (120.241.47.*)

🚥 ICMP Ping 测试 (大陆网络 -> 测试机)

```
$ ping 178.173.236.* -c 5 
PING 178.173.236.* (178.173.236.*) 56(84) bytes of data.
64 bytes from 178.173.236.*: icmp_seq=1 ttl=48 time=19.0 ms
64 bytes from 178.173.236.*: icmp_seq=2 ttl=48 time=18.9 ms
64 bytes from 178.173.236.*: icmp_seq=3 ttl=48 time=19.1 ms
64 bytes from 178.173.236.*: icmp_seq=4 ttl=48 time=18.9 ms
64 bytes from 178.173.236.*: icmp_seq=5 ttl=48 time=18.9 ms

--- 178.173.236.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4005ms
rtt min/avg/max/mdev = 18.890/18.961/19.118/0.083 ms
```

🚀 Iperf3 测试 || ⬆️ 香港 -> ⬇️ 广州移动

```
$ iperf3 -c 178.173.236.* -R
Connecting to host 178.173.236.*, port 5201
Reverse mode, remote host 178.173.236.* is sending
[  5] local 120.241.47.* port 39972 connected to 178.173.236.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  66.5 MBytes   558 Mbits/sec                  
[  5]   1.00-2.00   sec  89.1 MBytes   747 Mbits/sec                  
[  5]   2.00-3.00   sec  84.5 MBytes   709 Mbits/sec                  
[  5]   3.00-4.00   sec  76.7 MBytes   643 Mbits/sec                  
[  5]   4.00-5.00   sec  85.7 MBytes   719 Mbits/sec                  
[  5]   5.00-6.00   sec  80.6 MBytes   676 Mbits/sec                  
[  5]   6.00-7.00   sec  83.3 MBytes   699 Mbits/sec                  
[  5]   7.00-8.00   sec  85.1 MBytes   713 Mbits/sec                  
[  5]   8.00-9.00   sec  89.1 MBytes   747 Mbits/sec                  
[  5]   9.00-10.00  sec  84.9 MBytes   712 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.03  sec   828 MBytes   692 Mbits/sec  15700             sender
[  5]   0.00-10.00  sec   825 MBytes   692 Mbits/sec                  receiver

iperf Done.
```

### 安徽联通 (58.242.129.*)

🚥 ICMP Ping 测试 (大陆网络 -> 测试机)

```
$ ping 178.173.236.* -c 5 
PING 178.173.236.* (178.173.236.*) 56(84) bytes of data.
64 bytes from 178.173.236.*: icmp_seq=1 ttl=47 time=84.9 ms
64 bytes from 178.173.236.*: icmp_seq=2 ttl=47 time=80.6 ms
64 bytes from 178.173.236.*: icmp_seq=3 ttl=47 time=88.0 ms
64 bytes from 178.173.236.*: icmp_seq=4 ttl=47 time=88.7 ms
64 bytes from 178.173.236.*: icmp_seq=5 ttl=47 time=85.2 ms

--- 178.173.236.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 80.562/85.488/88.745/2.886 ms
```

🚀 Iperf3 测试 || ⬆️ 香港 -> ⬇️ 安徽联通

```
iperf3 -c 178.173.236.* -P 8 -R
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.09  sec  98.0 MBytes  81.4 Mbits/sec  6433             sender
[  8]   0.00-10.09  sec   119 MBytes  98.6 Mbits/sec  8133             sender
[ 10]   0.00-10.09  sec   104 MBytes  86.6 Mbits/sec  6749             sender
[ 12]   0.00-10.09  sec   126 MBytes   105 Mbits/sec  9837             sender
[ 14]   0.00-10.09  sec   119 MBytes  99.2 Mbits/sec  8869             sender
[ 16]   0.00-10.09  sec   104 MBytes  86.8 Mbits/sec  8359             sender
[ 18]   0.00-10.09  sec   119 MBytes  99.2 Mbits/sec  8388             sender
[ 20]   0.00-10.09  sec  79.4 MBytes  66.0 Mbits/sec  4539             sender
[SUM]   0.00-10.09  sec   869 MBytes   723 Mbits/sec  61307             sender
```


> **Cover Illustration**: https://twitter.com/asakuramaru/status/1697445773871575548
> **Artist**: 亜桜まる