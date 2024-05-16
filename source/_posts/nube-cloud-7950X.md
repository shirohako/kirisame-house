---
title: Nube Cloud | HK | 7950X 独立服务器 | $278.00 USD | 128GB DDR5 | 4TB SSD  | 测试报告
cover: https://i.psray.net/i/2024/04/21/66249cf468b5a.jpg
date: 2024-04-21
tags: [HongKong, Dedicated Server, 7950X]
description: Nube Cloud，香港商家，原先也叫 KuaiCheDao，成立于 2017 年前。本次测试的是 HK AMD Ryzen 9 7950X Dedicated Server 独立服务器产品，包含了硬件性能，网络等测试。
---
## 🏪 商家信息

![](https://i.psray.net/i/2024/04/21/6624a5cdbd3e3.png)

**Nube Cloud**，香港商家，原先也叫 KuaiCheDao，成立于 2017 年前

目前在出售 香港、日本、美国、新加坡 等多地的 Dedicated Server 和 VPS 产品

官网：[https://nube.sh/](https://nube.sh/)


### 🖥️ 本次测试对象

![](https://i.psray.net/i/2024/04/21/6624a2e2a90e7.png)

**HK AMD Ryzen 9 7950X Dedicated Server**

- **CPU**: AMD Ryzen 9 7950X | 16-core processor and 32 threads | 4.5 GHz Base Clock
- **RAM**: 128GB DDR5 4800MT/s ECC RAM
- **Storage**: 2x SOLIDGM D7-P5520 1.92TB SSD PCIe 4.0x4 NVMe U.2
- **Traffic**: 16TB (超出按3.88 USD/TB补差价)
- **Network**: AS209642 MEJIRONETWORK
- **Bandwidth**: Default 1G Limited (付押金后可提升到2x10G)
- **IPv4**: IP4/29 + IP6/64
- **Location**: Ha Kwai Chung, Kwai Tsing, Hong Kong (葵涌/葵青區)
- **Price**: ~$278.00 USD / mo


购买请联系老板的 Telegram： https://t.me/BeefyAsian


### 🛜 网络信息

商家拥有自己的 ASN，并提供了 Looking Glass Server (ALS)

商家称接入了：PCCWG + Lumen + Cogent + NTT + GSL + Google 私有互联 + EIE 香港 + HKIX

通过港新、港日海缆骨干通达的新加坡、日本IXP

{% note purple 'fas fa-fan' simple %}
**Test IP**: 103.138.75.41
**Country of Origin**: 🇭🇰 Hong Kong
**ASN**: **AS138997** Eons Data Communications Limited
**Looking Glass**: http://hk-bgp.hkg.lg.kuaichedao.xyz/
**Hurricane Electric BGP Toolkit**: https://bgp.he.net/AS138997
{% endnote %}

### 🔍 Whois

商家域名的 Whois 信息

>Domain Name: nube.sh
>Registry Domain ID: 48aaf06d9b4a44eda03a0f8b4d628c92-DONUTS
>Registrar WHOIS Server: whois.dynadot.com
>
>Updated Date: 2023-08-25T03:45:46Z
>Creation Date: 2021-09-03T16:50:55Z
>Registry Expiry Date: 2024-09-03T16:50:55Z

### 💬 Group & Channel

商家的 Telegram 群组和频道

Telegram Group: https://t.me/KuaiCheDao_Co
Telegram Channel: https://t.me/KuaiCheDao_Info

## 📊 性能测试

### 🕒 硬件基本信息

```
$ wget -qO- bench.sh | bash
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores          : 32 @ 4500.000 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 1.8 TB (24.2 GB Used)
 Total Mem          : 124.9 GB (663.0 MB Used)
 Total Swap         : 8.0 GB (0 Used)
 System uptime      : 0 days, 4 hour 44 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Ubuntu 22.04.4 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-105-generic
 TCP CC             : bbr
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS138997 Eons Data Communications Limited
 Location           : Kwai Chung / HK
 Region             : Kwai Tsing
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.5 GB/s
 I/O Speed(2nd run) : 1.5 GB/s
 I/O Speed(3rd run) : 1.5 GB/s
 I/O Speed(average) : 1536.0 MB/s
----------------------------------------------------------------------
```

### 🕒 CPU 性能测试 (LemonBench)

```
-> CPU Performance Test (Fast mode, 1-Pass @ 5sec)

1 Thread(s) Test:		6766.59 Scores (1.00x)
16 Thread(s) Test:		102301.67 Scores (15.12x)
32 Thread(s) Test:		107683.02 Scores (15.91x)
```

### 🕒 硬盘 FIO 读写测试 (yabs.sh)

```
fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md0):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 803.67 MB/s (200.9k) | 1.09 GB/s    (17.0k)
Write      | 805.80 MB/s (201.4k) | 1.09 GB/s    (17.1k)
Total      | 1.60 GB/s   (402.3k) | 2.18 GB/s    (34.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.26 GB/s     (2.4k) | 1.43 GB/s     (1.3k)
Write      | 1.33 GB/s     (2.6k) | 1.52 GB/s     (1.4k)
Total      | 2.59 GB/s     (5.0k) | 2.96 GB/s     (2.8k)
```

### 🕒 硬盘 FIO 读写测试 (LemonBench)

```
-> Disk Performance Test (Using FIO, Direct mode, 32 IO-Depth)

Write Test (4K-Block):      657.89 MB/s (168421 IOPS)
Read  Test (4K-Block):      847.46 MB/s (216949 IOPS)
Write Test (128K-Block):    1886.79 MB/s (15094 IOPS)
Read  Test (128K-Block):    4347.83 MB/s (34782 IOPS)
```

### 🕒 加密速度测试 Encryption Performance

```
$ openssl speed -evp aes-256-gcm
Doing AES-256-GCM for 3s on 16 size blocks: 185311830 AES-256-GCM's in 3.00s
Doing AES-256-GCM for 3s on 64 size blocks: 115748502 AES-256-GCM's in 3.00s
Doing AES-256-GCM for 3s on 256 size blocks: 55330917 AES-256-GCM's in 3.00s
Doing AES-256-GCM for 3s on 1024 size blocks: 17824221 AES-256-GCM's in 3.00s
Doing AES-256-GCM for 3s on 8192 size blocks: 2476653 AES-256-GCM's in 3.00s
Doing AES-256-GCM for 3s on 16384 size blocks: 1249151 AES-256-GCM's in 3.00s
version: 3.0.2
built on: Fri Feb 16 08:51:30 2024 UTC
options: bn(64,64)
compiler: gcc -fPIC -pthread -m64 -Wa,--noexecstack -Wall -Wa,--noexecstack -g -O2 -ffile-prefix-map=/build/openssl-olCZw9/openssl-3.0.2=. -flto=auto -ffat-lto-objects -flto=auto -ffat-lto-objects -fstack-protector-strong -Wformat -Werror=format-security -DOPENSSL_TLS_SECURITY_LEVEL=2 -DOPENSSL_USE_NODELETE -DL_ENDIAN -DOPENSSL_PIC -DOPENSSL_BUILDING_OPENSSL -DNDEBUG -Wdate-time -D_FORTIFY_SOURCE=2
CPUINFO: OPENSSL_ia32cap=0x7ef8320b078bffff:0x405fdef1bf97a9
The 'numbers' are in 1000s of bytes per second processed.
type             16 bytes     64 bytes    256 bytes   1024 bytes   8192 bytes  16384 bytes
AES-256-GCM     988329.76k  2469301.38k  4721571.58k  6084000.77k  6762913.79k  6822029.99k
```

```
$ openssl speed -evp chacha20-poly1305
Doing ChaCha20-Poly1305 for 3s on 16 size blocks: 79540461 ChaCha20-Poly1305's in 3.00s
Doing ChaCha20-Poly1305 for 3s on 64 size blocks: 37409297 ChaCha20-Poly1305's in 3.00s
Doing ChaCha20-Poly1305 for 3s on 256 size blocks: 30753235 ChaCha20-Poly1305's in 3.00s
Doing ChaCha20-Poly1305 for 3s on 1024 size blocks: 15220342 ChaCha20-Poly1305's in 3.00s
Doing ChaCha20-Poly1305 for 3s on 8192 size blocks: 2044785 ChaCha20-Poly1305's in 3.00s
Doing ChaCha20-Poly1305 for 3s on 16384 size blocks: 1024514 ChaCha20-Poly1305's in 3.00s
version: 3.0.2
built on: Fri Feb 16 08:51:30 2024 UTC
options: bn(64,64)
compiler: gcc -fPIC -pthread -m64 -Wa,--noexecstack -Wall -Wa,--noexecstack -g -O2 -ffile-prefix-map=/build/openssl-olCZw9/openssl-3.0.2=. -flto=auto -ffat-lto-objects -flto=auto -ffat-lto-objects -fstack-protector-strong -Wformat -Werror=format-security -DOPENSSL_TLS_SECURITY_LEVEL=2 -DOPENSSL_USE_NODELETE -DL_ENDIAN -DOPENSSL_PIC -DOPENSSL_BUILDING_OPENSSL -DNDEBUG -Wdate-time -D_FORTIFY_SOURCE=2
CPUINFO: OPENSSL_ia32cap=0x7ef8320b078bffff:0x405fdef1bf97a9
The 'numbers' are in 1000s of bytes per second processed.
type             16 bytes     64 bytes    256 bytes   1024 bytes   8192 bytes  16384 bytes
ChaCha20-Poly1305   424215.79k   798065.00k  2624276.05k  5195210.07k  5583626.24k  5595212.46k
```

### 🕒 Geekbench 6 Benchmark Test (yabs.sh)

```
Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2981                          
Multi Core      | 17712                         
Full Test       | https://browser.geekbench.com/v6/cpu/5802003
```

### 🕒 BYTE UNIX Benchmarks (V5.1.3)

🚀 单核测试

```
------------------------------------------------------------------------
Benchmark Run: Sun Apr 21 2024 14:43:19 - 15:11:38
32 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       80426236.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13451.7 MWIPS (10.0 s, 7 samples)
Execl Throughput                              10608.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2013599.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          500998.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       7011095.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3660087.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 537230.3 lps   (10.0 s, 7 samples)
Process Creation                              14587.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  23315.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  17844.8 lpm   (60.0 s, 2 samples)
System Call Overhead                        3118421.0 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   80426236.5   6891.7
Double-Precision Whetstone                       55.0      13451.7   2445.8
Execl Throughput                                 43.0      10608.6   2467.1
File Copy 1024 bufsize 2000 maxblocks          3960.0    2013599.8   5084.8
File Copy 256 bufsize 500 maxblocks            1655.0     500998.2   3027.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    7011095.0  12088.1
Pipe Throughput                               12440.0    3660087.9   2942.2
Pipe-based Context Switching                   4000.0     537230.3   1343.1
Process Creation                                126.0      14587.2   1157.7
Shell Scripts (1 concurrent)                     42.4      23315.4   5498.9
Shell Scripts (8 concurrent)                      6.0      17844.8  29741.3
System Call Overhead                          15000.0    3118421.0   2078.9
                                                                   ========
System Benchmarks Index Score                                        3890.8
```

🚀 多核心测试

```
------------------------------------------------------------------------
Benchmark Run: Sun Apr 21 2024 15:11:38 - 15:39:37
32 CPUs in system; running 32 parallel copies of tests

Dhrystone 2 using register variables     1567025927.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   330339.9 MWIPS (10.2 s, 7 samples)
Execl Throughput                              74819.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      27570464.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks        10209486.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      14822849.7 KBps  (30.0 s, 2 samples)
Pipe Throughput                            74009975.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                8805324.8 lps   (10.0 s, 7 samples)
Process Creation                             186526.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 262348.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  29021.2 lpm   (60.0 s, 2 samples)
System Call Overhead                       71669061.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0 1567025927.4 134278.1
Double-Precision Whetstone                       55.0     330339.9  60061.8
Execl Throughput                                 43.0      74819.3  17399.8
File Copy 1024 bufsize 2000 maxblocks          3960.0   27570464.8  69622.4
File Copy 256 bufsize 500 maxblocks            1655.0   10209486.2  61688.7
File Copy 4096 bufsize 8000 maxblocks          5800.0   14822849.7  25556.6
Pipe Throughput                               12440.0   74009975.6  59493.5
Pipe-based Context Switching                   4000.0    8805324.8  22013.3
Process Creation                                126.0     186526.3  14803.7
Shell Scripts (1 concurrent)                     42.4     262348.8  61874.7
Shell Scripts (8 concurrent)                      6.0      29021.2  48368.6
System Call Overhead                          15000.0   71669061.3  47779.4
                                                                   ========
System Benchmarks Index Score                                       43238.5
```

### 🕒 MySQL Benchmark (sysbench)

🚀 查询测试

```
sysbench /usr/share/sysbench/oltp_read_write.lua  \
--mysql-host=localhost  \
--mysql-port=3306   \
--mysql-user=root  \
--mysql-password=''  \
--mysql-db=sbtest  \
--db-driver=mysql   \
--tables=10  \
--table-size=50000    \
--report-interval=10  \
--threads=32  \
--time=60  \
run

sysbench 1.0.20 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 32
Report intermediate results every 10 second(s)
Initializing random number generator from current time


Initializing worker threads...

Threads started!

[ 10s ] thds: 32 tps: 19018.64 qps: 380414.59 (r/w/o: 266295.85/76078.26/38040.48) lat (ms,95%): 2.48 err/s: 0.00 reconn/s: 0.00
[ 20s ] thds: 32 tps: 18969.45 qps: 379400.35 (r/w/o: 265579.24/75882.21/37938.91) lat (ms,95%): 2.39 err/s: 0.00 reconn/s: 0.00
[ 30s ] thds: 32 tps: 19007.73 qps: 380143.87 (r/w/o: 266099.50/76028.91/38015.46) lat (ms,95%): 2.43 err/s: 0.00 reconn/s: 0.00
[ 40s ] thds: 32 tps: 19136.96 qps: 382741.66 (r/w/o: 267921.58/76546.15/38273.93) lat (ms,95%): 2.48 err/s: 0.00 reconn/s: 0.00
[ 50s ] thds: 32 tps: 18906.76 qps: 378129.03 (r/w/o: 264689.76/75625.75/37813.52) lat (ms,95%): 2.39 err/s: 0.00 reconn/s: 0.00
[ 60s ] thds: 32 tps: 18819.05 qps: 376382.66 (r/w/o: 263467.74/75276.81/37638.11) lat (ms,95%): 2.43 err/s: 0.00 reconn/s: 0.00
SQL statistics:
    queries performed:
        read:                            15940750
        write:                           4554500
        other:                           2277250
        total:                           22772500
    transactions:                        1138625 (18975.73 per sec.)
    queries:                             22772500 (379514.65 per sec.)
    ignored errors:                      0      (0.00 per sec.)
    reconnects:                          0      (0.00 per sec.)

General statistics:
    total time:                          60.0040s
    total number of events:              1138625

Latency (ms):
         min:                                    0.75
         avg:                                    1.69
         max:                                  132.02
         95th percentile:                        2.43
         sum:                              1919030.09

Threads fairness:
    events (avg/stddev):           35582.0312/271.77
    execution time (avg/stddev):   59.9697/0.00
```

### 🕒 内存速度测试 (sysbench)

```
# root @ eons-supero-ryzen-1 in ~ [16:21:27] 
$ sysbench memory --memory-block-size=1M --memory-total-size=100G --threads=32 run    
sysbench 1.0.20 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 32
Initializing random number generator from current time


Running memory speed test with the following options:
  block size: 1024KiB
  total size: 102400MiB
  operation: write
  scope: global

Initializing worker threads...

Threads started!

Total operations: 102400 (103028.80 per second)

102400.00 MiB transferred (103028.80 MiB/sec)


General statistics:
    total time:                          0.9935s
    total number of events:              102400

Latency (ms):
         min:                                    0.02
         avg:                                    0.31
         max:                                   19.74
         95th percentile:                        0.32
         sum:                                31387.05

Threads fairness:
    events (avg/stddev):           3200.0000/0.00
    execution time (avg/stddev):   0.9808/0.01
```

### 🕒 内存信息 

💡  4 x SK Hynix 32 GB DDR5 4800 MT/s

```
$ dmidecode -t memory
# dmidecode 3.3
Getting SMBIOS data from sysfs.
SMBIOS 3.5.0 present.

Handle 0x0028, DMI type 16, 23 bytes
Physical Memory Array
	Location: System Board Or Motherboard
	Use: System Memory
	Error Correction Type: Other
	Maximum Capacity: 128 GB
	Error Information Handle: 0x0027
	Number Of Devices: 4

Handle 0x002A, DMI type 17, 92 bytes
Memory Device
	Array Handle: 0x0028
	Error Information Handle: No Error
	Total Width: 72 bits
	Data Width: 64 bits
	Size: 32 GB
	Form Factor: DIMM
	Set: None
	Locator: DIMMA1
	Bank Locator: P0_Node0_Channel0_Dimm0
	Type: DDR5
	Type Detail: Synchronous Unbuffered (Unregistered)
	Speed: 4800 MT/s
	Manufacturer: SK Hynix
	Serial Number: 80AD01234076A6ED15
	Asset Tag: DIMMA1_AssetTag (date:23/40)
	Part Number: HMCG88MEBEA081N     
	Rank: 2
	Configured Memory Speed: 3600 MT/s
	Minimum Voltage: 1.1 V
	Maximum Voltage: 1.1 V
	Configured Voltage: 1.1 V
	Memory Technology: DRAM
	Memory Operating Mode Capability: Volatile memory
	Firmware Version: Unknown
	Module Manufacturer ID: Bank 1, Hex 0xAD
	Module Product ID: Unknown
	Memory Subsystem Controller Manufacturer ID: Unknown
	Memory Subsystem Controller Product ID: Unknown
	Non-Volatile Size: None
	Volatile Size: 32 GB
	Cache Size: None
	Logical Size: None

Handle 0x002C, DMI type 17, 92 bytes
Memory Device
	Array Handle: 0x0028
	Error Information Handle: No Error
	Total Width: 72 bits
	Data Width: 64 bits
	Size: 32 GB
	Form Factor: DIMM
	Set: None
	Locator: DIMMA2
	Bank Locator: P0_Node0_Channel0_Dimm1
	Type: DDR5
	Type Detail: Synchronous Unbuffered (Unregistered)
	Speed: 4800 MT/s
	Manufacturer: SK Hynix
	Serial Number: 80AD01234076A6EC5C
	Asset Tag: DIMMA2_AssetTag (date:23/40)
	Part Number: HMCG88MEBEA081N     
	Rank: 2
	Configured Memory Speed: 3600 MT/s
	Minimum Voltage: 1.1 V
	Maximum Voltage: 1.1 V
	Configured Voltage: 1.1 V
	Memory Technology: DRAM
	Memory Operating Mode Capability: Volatile memory
	Firmware Version: Unknown
	Module Manufacturer ID: Bank 1, Hex 0xAD
	Module Product ID: Unknown
	Memory Subsystem Controller Manufacturer ID: Unknown
	Memory Subsystem Controller Product ID: Unknown
	Non-Volatile Size: None
	Volatile Size: 32 GB
	Cache Size: None
	Logical Size: None

Handle 0x002E, DMI type 17, 92 bytes
Memory Device
	Array Handle: 0x0028
	Error Information Handle: No Error
	Total Width: 72 bits
	Data Width: 64 bits
	Size: 32 GB
	Form Factor: DIMM
	Set: None
	Locator: DIMMB1
	Bank Locator: P0_Node0_Channel1_Dimm0
	Type: DDR5
	Type Detail: Synchronous Unbuffered (Unregistered)
	Speed: 4800 MT/s
	Manufacturer: SK Hynix
	Serial Number: 80AD01234076A6EBCB
	Asset Tag: DIMMB1_AssetTag (date:23/40)
	Part Number: HMCG88MEBEA081N     
	Rank: 2
	Configured Memory Speed: 3600 MT/s
	Minimum Voltage: 1.1 V
	Maximum Voltage: 1.1 V
	Configured Voltage: 1.1 V
	Memory Technology: DRAM
	Memory Operating Mode Capability: Volatile memory
	Firmware Version: Unknown
	Module Manufacturer ID: Bank 1, Hex 0xAD
	Module Product ID: Unknown
	Memory Subsystem Controller Manufacturer ID: Unknown
	Memory Subsystem Controller Product ID: Unknown
	Non-Volatile Size: None
	Volatile Size: 32 GB
	Cache Size: None
	Logical Size: None

Handle 0x0030, DMI type 17, 92 bytes
Memory Device
	Array Handle: 0x0028
	Error Information Handle: No Error
	Total Width: 72 bits
	Data Width: 64 bits
	Size: 32 GB
	Form Factor: DIMM
	Set: None
	Locator: DIMMB2
	Bank Locator: P0_Node0_Channel1_Dimm1
	Type: DDR5
	Type Detail: Synchronous Unbuffered (Unregistered)
	Speed: 4800 MT/s
	Manufacturer: SK Hynix
	Serial Number: 80AD01234076A6ECA9
	Asset Tag: DIMMB2_AssetTag (date:23/40)
	Part Number: HMCG88MEBEA081N     
	Rank: 2
	Configured Memory Speed: 3600 MT/s
	Minimum Voltage: 1.1 V
	Maximum Voltage: 1.1 V
	Configured Voltage: 1.1 V
	Memory Technology: DRAM
	Memory Operating Mode Capability: Volatile memory
	Firmware Version: Unknown
	Module Manufacturer ID: Bank 1, Hex 0xAD
	Module Product ID: Unknown
	Memory Subsystem Controller Manufacturer ID: Unknown
	Memory Subsystem Controller Product ID: Unknown
	Non-Volatile Size: None
	Volatile Size: 32 GB
	Cache Size: None
	Logical Size: None
```

### 🕒 硬盘 S.M.A.R.T 信息

💡 交付的测试机器，默认是 Raid1

```
$ lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
loop0         7:0    0  63.4M  1 loop  /snap/core20/1974
loop1         7:1    0 111.9M  1 loop  /snap/lxd/24322
loop2         7:2    0    87M  1 loop  /snap/lxd/27948
loop3         7:3    0  53.3M  1 loop  /snap/snapd/19457
nvme0n1     259:0    0   1.7T  0 disk  
├─nvme0n1p1 259:1    0     1G  0 part  
└─nvme0n1p2 259:2    0   1.7T  0 part  
  └─md0       9:0    0   1.7T  0 raid1 /
nvme1n1     259:3    0   1.7T  0 disk  
├─nvme1n1p1 259:4    0     1G  0 part  /boot/efi
└─nvme1n1p2 259:5    0   1.7T  0 part  
  └─md0       9:0    0   1.7T  0 raid1 /
```

#### 💾 /dev/nvme0n1

```
$ smartctl --all /dev/nvme0n1
smartctl 7.2 2020-12-30 r5155 [x86_64-linux-5.15.0-105-generic] (local build)
Copyright (C) 2002-20, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Number:                       INTEL SSDPF2KX019T1M
Serial Number:                      BTAX338504971P9BGN
Firmware Version:                   9CV10410
PCI Vendor/Subsystem ID:            0x8086
IEEE OUI Identifier:                0x5cd2e4
Total NVM Capacity:                 1,920,383,410,176 [1.92 TB]
Unallocated NVM Capacity:           0
Controller ID:                      0
NVMe Version:                       1.4
Number of Namespaces:               128
Namespace 1 Size/Capacity:          1,920,383,410,176 [1.92 TB]
Namespace 1 Formatted LBA Size:     512
Namespace 1 IEEE EUI-64:            5cd2e4 4089d10600
Local Time is:                      Sun Apr 21 21:50:18 2024 HKT
Firmware Updates (0x18):            4 Slots, no Reset required
Optional Admin Commands (0x005e):   Format Frmw_DL NS_Mngmt Self_Test MI_Snd/Rec
Optional NVM Commands (0x005e):     Wr_Unc DS_Mngmt Wr_Zero Sav/Sel_Feat Timestmp
Log Page Attributes (0x3e):         Cmd_Eff_Lg Ext_Get_Lg Telmtry_Lg Pers_Ev_Lg *Other*
Maximum Data Transfer Size:         32 Pages
Warning  Comp. Temp. Threshold:     70 Celsius
Critical Comp. Temp. Threshold:     80 Celsius
Namespace 1 Features (0x10):        NP_Fields

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +    25.00W   25.00W       -    0  0  0  0    60000   60000
 1 +    12.00W   12.00W       -    0  0  0  0    60000   60000
 2 +    10.00W   10.00W       -    0  0  0  0    60000   60000

Supported LBA Sizes (NSID 0x1)
Id Fmt  Data  Metadt  Rel_Perf
 0 +     512       0         2
 1 -     512       8         2
 2 -    4096       0         2
 3 -    4096       8         2
 4 -    4096      64         2

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02)
Critical Warning:                   0x00
Temperature:                        33 Celsius
Available Spare:                    100%
Available Spare Threshold:          10%
Percentage Used:                    0%
Data Units Read:                    64,070 [32.8 GB]
Data Units Written:                 4,134,659 [2.11 TB]
Host Read Commands:                 1,790,061
Host Write Commands:                40,089,243
Controller Busy Time:               0
Power Cycles:                       15
Power On Hours:                     28
Unsafe Shutdowns:                   12
Media and Data Integrity Errors:    0
Error Information Log Entries:      0
Warning  Comp. Temperature Time:    0
Critical Comp. Temperature Time:    0

Error Information (NVMe Log 0x01, 16 of 256 entries)
No Errors Logged
```

#### 💾 /dev/nvme1n1

```
$ smartctl --all /dev/nvme1n1
smartctl 7.2 2020-12-30 r5155 [x86_64-linux-5.15.0-105-generic] (local build)
Copyright (C) 2002-20, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Number:                       INTEL SSDPF2KX019T1M
Serial Number:                      BTAX338503X01P9BGN
Firmware Version:                   9CV10410
PCI Vendor/Subsystem ID:            0x8086
IEEE OUI Identifier:                0x5cd2e4
Total NVM Capacity:                 1,920,383,410,176 [1.92 TB]
Unallocated NVM Capacity:           0
Controller ID:                      0
NVMe Version:                       1.4
Number of Namespaces:               128
Namespace 1 Size/Capacity:          1,920,383,410,176 [1.92 TB]
Namespace 1 Formatted LBA Size:     512
Namespace 1 IEEE EUI-64:            5cd2e4 c387d10600
Local Time is:                      Sun Apr 21 21:51:55 2024 HKT
Firmware Updates (0x18):            4 Slots, no Reset required
Optional Admin Commands (0x005e):   Format Frmw_DL NS_Mngmt Self_Test MI_Snd/Rec
Optional NVM Commands (0x005e):     Wr_Unc DS_Mngmt Wr_Zero Sav/Sel_Feat Timestmp
Log Page Attributes (0x3e):         Cmd_Eff_Lg Ext_Get_Lg Telmtry_Lg Pers_Ev_Lg *Other*
Maximum Data Transfer Size:         32 Pages
Warning  Comp. Temp. Threshold:     70 Celsius
Critical Comp. Temp. Threshold:     80 Celsius
Namespace 1 Features (0x10):        NP_Fields

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +    25.00W   25.00W       -    0  0  0  0    60000   60000
 1 +    12.00W   12.00W       -    0  0  0  0    60000   60000
 2 +    10.00W   10.00W       -    0  0  0  0    60000   60000

Supported LBA Sizes (NSID 0x1)
Id Fmt  Data  Metadt  Rel_Perf
 0 +     512       0         2
 1 -     512       8         2
 2 -    4096       0         2
 3 -    4096       8         2
 4 -    4096      64         2

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02)
Critical Warning:                   0x00
Temperature:                        35 Celsius
Available Spare:                    100%
Available Spare Threshold:          10%
Percentage Used:                    0%
Data Units Read:                    3,818,800 [1.95 TB]
Data Units Written:                 386,271 [197 GB]
Host Read Commands:                 24,705,448
Host Write Commands:                17,296,064
Controller Busy Time:               0
Power Cycles:                       15
Power On Hours:                     28
Unsafe Shutdowns:                   12
Media and Data Integrity Errors:    0
Error Information Log Entries:      0
Warning  Comp. Temperature Time:    0
Critical Comp. Temperature Time:    0

Error Information (NVMe Log 0x01, 16 of 256 entries)
No Errors Logged
```

## 🎬流媒体测试

### RegionRestrictionCheck (IPv4)

```
 ** 测试时间: Sun Apr 21 02:15:46 PM HKT 2024

 ** 正在测试IPv4解锁情况 
--------------------------------
 ** 您的网络为: Eons Data Communications (103.152.*.*) 


============[ Multination ]============
 Dazn:					Yes (Region: HK)
 HotStar:				No
 Disney+:				Yes (Region: TW)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			Yes (Region: HK)
 Steam Currency:			HKD
 ChatGPT:				Only Available with Mobile APP
 Bing Region:				HK
 Instagram Licensed Audio:		No
=======================================
=============[ Hong Kong ]=============
 Now E:					No
 Viu.TV:				Yes
 MyTVSuper:				Yes
 HBO GO Asia:				Yes (Region: HK)
 BiliBili Hongkong/Macau/Taiwan:	Yes
=======================================
```

### RegionRestrictionCheck (IPv6)


```
 ** 正在测试IPv6解锁情况 
--------------------------------
 ** 您的网络为: Eons Data Communications (2404:c140:1f00:*:*) 


============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: HK)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			Yes (Region: HK)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				HK
 Instagram Licensed Audio:		No
=======================================
=============[ Hong Kong ]=============
 Now E:					Failed
 Viu.TV:				Failed (Network Connection)
 MyTVSuper:				No
 HBO GO Asia:				Failed (Network Connection)
 BiliBili Hongkong/Macau/Taiwan:	Failed (Network Connection)
=======================================
```

## 📶 网络表现

测试时间: Sunday, April 21, 2024 (GMT+9) 17:25

### 港内速度测试

💡 CMHK Broadband

```
$ speedtest -s 37639

   Speedtest by Ookla

      Server: CMHK Broadband - Hong Kong (id: 37639)
         ISP: Eons Data Communications
Idle Latency:     2.31 ms   (jitter: 0.02ms, low: 2.28ms, high: 2.33ms)
    Download:  9396.37 Mbps (data used: 4.4 GB)                                                   
                  6.22 ms   (jitter: 0.25ms, low: 5.09ms, high: 8.74ms)
      Upload:  6610.68 Mbps (data used: 5.2 GB)                                                   
                  6.78 ms   (jitter: 3.91ms, low: 2.24ms, high: 12.59ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/6b9b8dbc-f139-4bca-b6d3-9fca39d47a9b
```

💡 HGC環電

```
$ speedtest -s 37390

   Speedtest by Ookla

      Server: HGC環電 - Hong Kong (id: 37390)
         ISP: Eons Data Communications
Idle Latency:     3.38 ms   (jitter: 0.11ms, low: 3.24ms, high: 3.57ms)
    Download:  5920.42 Mbps (data used: 8.4 GB)                                                   
                 12.63 ms   (jitter: 13.88ms, low: 3.08ms, high: 252.04ms)
      Upload:  6884.92 Mbps (data used: 3.5 GB)                                                   
                 11.55 ms   (jitter: 2.07ms, low: 6.01ms, high: 14.73ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/917b8c9b-901a-439e-a12b-d0ed7d2958d2
```

💡 STC

```
$ speedtest -s 1536 

   Speedtest by Ookla

      Server: STC - Hong Kong (id: 1536)
         ISP: Eons Data Communications
Idle Latency:     3.01 ms   (jitter: 0.05ms, low: 2.99ms, high: 3.10ms)
    Download:  1246.04 Mbps (data used: 2.2 GB)                                                   
                  5.85 ms   (jitter: 0.05ms, low: 5.75ms, high: 6.07ms)
      Upload:  6729.88 Mbps (data used: 3.5 GB)                                                   
                  8.40 ms   (jitter: 2.03ms, low: 3.18ms, high: 12.48ms)
 Packet Loss: Not available.
  Result URL: https://www.speedtest.net/result/c/96af6437-b6ee-439c-9819-ef1ede8309b2
```

💡 Netvigator

```
$ speedtest -s 63143

   Speedtest by Ookla

      Server: Netvigator - Hong Kong (id: 63143)
         ISP: Eons Data Communications
Idle Latency:     3.98 ms   (jitter: 0.04ms, low: 3.94ms, high: 4.01ms)
    Download:  2676.23 Mbps (data used: 1.6 GB)                                                   
                  3.68 ms   (jitter: 0.10ms, low: 3.54ms, high: 4.47ms)
      Upload:  6374.58 Mbps (data used: 2.9 GB)                                                   
                  9.21 ms   (jitter: 2.45ms, low: 3.51ms, high: 13.61ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/45936de2-267c-4a30-9d15-f6f63c4877a4
```


### 宁波移动 (120.199.\*.\*)

🚥 ICMP Ping 测试 (大陆网络 -> 测试机)

```
$ ping 103.152.220.* -c 5
PING 103.152.220.* (103.152.220.*) 56(84) bytes of data.
64 bytes from 103.152.220.*: icmp_seq=1 ttl=40 time=73.2 ms
64 bytes from 103.152.220.*: icmp_seq=2 ttl=40 time=72.7 ms
64 bytes from 103.152.220.*: icmp_seq=3 ttl=40 time=73.0 ms
64 bytes from 103.152.220.*: icmp_seq=4 ttl=40 time=74.9 ms
64 bytes from 103.152.220.*: icmp_seq=5 ttl=40 time=72.7 ms

--- 103.152.220.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4005ms
rtt min/avg/max/mdev = 72.691/73.309/74.899/0.816 ms
```

🚀 Iperf3 多线程测试 || ⬆️ 香港 -> ⬇️ 宁波移动

```
$ iperf3 -c 103.152.220.* -P 8 -R
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.08  sec   210 MBytes   175 Mbits/sec  5237             sender
[  5]   0.00-10.00  sec   207 MBytes   174 Mbits/sec                  receiver
[  7]   0.00-10.08  sec   248 MBytes   207 Mbits/sec  5392             sender
[  7]   0.00-10.00  sec   245 MBytes   206 Mbits/sec                  receiver
[  9]   0.00-10.08  sec   269 MBytes   224 Mbits/sec  5418             sender
[  9]   0.00-10.00  sec   265 MBytes   223 Mbits/sec                  receiver
[ 11]   0.00-10.08  sec   336 MBytes   279 Mbits/sec  12016             sender
[ 11]   0.00-10.00  sec   331 MBytes   277 Mbits/sec                  receiver
[SUM]   0.00-10.08  sec  1.04 GBytes   885 Mbits/sec  28063             sender
[SUM]   0.00-10.00  sec  1.02 GBytes   879 Mbits/sec                  receiver
```

### 广州移动 (120.241.47.*)

🚥 ICMP Ping 测试 (大陆网络 -> 测试机)

```
$ ping 103.152.220.* -c 5
PING 103.152.220.* (103.152.220.*) 56(84) bytes of data.
64 bytes from 103.152.220.*: icmp_seq=1 ttl=44 time=25.2 ms
64 bytes from 103.152.220.*: icmp_seq=2 ttl=44 time=22.9 ms
64 bytes from 103.152.220.*: icmp_seq=3 ttl=44 time=22.8 ms
64 bytes from 103.152.220.*: icmp_seq=4 ttl=44 time=23.1 ms
64 bytes from 103.152.220.*: icmp_seq=5 ttl=44 time=22.9 ms

--- 103.152.220.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4005ms
rtt min/avg/max/mdev = 22.810/23.359/25.153/0.900 ms
```

🚀 Iperf3 测试 || ⬆️ 香港 -> ⬇️ 广州移动

```
$ iperf3 -c 103.152.220.* -R
Connecting to host 103.152.220.*, port 5201
Reverse mode, remote host 103.152.220.* is sending
[  5] local 120.241.47.* port 47132 connected to 103.152.220.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec  87.4 MBytes   733 Mbits/sec                  
[  5]   1.00-2.00   sec   107 MBytes   895 Mbits/sec                  
[  5]   2.00-3.00   sec   108 MBytes   903 Mbits/sec                  
[  5]   3.00-4.00   sec   104 MBytes   876 Mbits/sec                  
[  5]   4.00-5.00   sec   105 MBytes   884 Mbits/sec                  
[  5]   5.00-6.00   sec   107 MBytes   895 Mbits/sec                  
[  5]   6.00-7.00   sec   107 MBytes   899 Mbits/sec                  
[  5]   7.00-8.00   sec   107 MBytes   893 Mbits/sec                  
[  5]   8.00-9.00   sec   101 MBytes   850 Mbits/sec                  
[  5]   9.00-10.00  sec   104 MBytes   869 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.04  sec  1.05 GBytes   902 Mbits/sec    0             sender
[  5]   0.00-10.00  sec  1.01 GBytes   870 Mbits/sec                  receiver

iperf Done.
```

### 安徽联通 (58.242.129.*)

🚥 ICMP Ping 测试 (大陆网络 -> 测试机)

```
$ ping 103.152.220.* -c 5
PING 103.152.220.* (103.152.220.*) 56(84) bytes of data.
64 bytes from 103.152.220.*: icmp_seq=1 ttl=33 time=222 ms
64 bytes from 103.152.220.*: icmp_seq=2 ttl=33 time=209 ms
64 bytes from 103.152.220.*: icmp_seq=3 ttl=33 time=211 ms
64 bytes from 103.152.220.*: icmp_seq=4 ttl=33 time=204 ms
64 bytes from 103.152.220.*: icmp_seq=5 ttl=33 time=210 ms

--- 103.152.220.* ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4001ms
rtt min/avg/max/mdev = 204.242/211.196/222.378/6.007 ms
```

🚀 Iperf3 测试 || ⬆️ 香港 -> ⬇️ 安徽联通

```
$ iperf3 -c 103.152.220.* -R
Connecting to host 103.152.220.*, port 5201
Reverse mode, remote host 103.152.220.* is sending
[  5] local 58.242.129.* port 19268 connected to 103.152.220.* port 5201
[ ID] Interval           Transfer     Bitrate
[  5]   0.00-1.00   sec   240 KBytes  1.97 Mbits/sec                  
[  5]   1.00-2.00   sec  5.74 MBytes  48.2 Mbits/sec                  
[  5]   2.00-3.00   sec  46.7 MBytes   392 Mbits/sec                  
[  5]   3.00-4.00   sec   103 MBytes   867 Mbits/sec                  
[  5]   4.00-5.00   sec  67.2 MBytes   564 Mbits/sec                  
[  5]   5.00-6.00   sec  81.4 MBytes   683 Mbits/sec                  
[  5]   6.00-7.00   sec  57.4 MBytes   482 Mbits/sec                  
[  5]   7.00-8.00   sec  93.4 MBytes   784 Mbits/sec                  
[  5]   8.00-9.00   sec  76.0 MBytes   638 Mbits/sec                  
[  5]   9.00-10.00  sec  76.7 MBytes   643 Mbits/sec                  
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.22  sec   651 MBytes   534 Mbits/sec  33539             sender
[  5]   0.00-10.00  sec   608 MBytes   510 Mbits/sec                  receiver

iperf Done.
```


> **Cover Illustration**: https://twitter.com/asakuramaru/status/1762680655539036667
> **Artist**: 亜桜まる

> **Mysql测试方案 参考到的文章**
> https://piaohua.github.io/post/mysql/20200808-mysql-sysbench/
> https://www.cnblogs.com/ivictor/p/16955580.html