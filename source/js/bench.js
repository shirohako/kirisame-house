// Bench.sh
Prism.languages.benchsh = {
    // 🟢 数字 + Mbps
    'mbps': {
        pattern: /\b\d+(?:\.\d+)?\s*Mbps\b/,
        alias: 'bench-mbps'
    },
    // 🔵 数字 + ms
    'ms': {
        pattern: /\b\d+(?:\.\d+)?\s*ms\b/,
        alias: 'bench-ms'
    },
    'value': {
        pattern: /(?<=:\s).+/,
        alias: 'bench-value'
    }
};

// 硬件方面
Prism.languages.ecshardware = {
    'bandwidth': {
        pattern: /\b\d+(?:\.\d+)?\s*(?:MB|GB)\/s\b/,
        alias: 'bench-bandwidth'
    },
    // 🟦 分数值（如 5955 Scores）
    'score': {
        pattern: /\b\d+(?:\.\d+)?\s*Scores\b/,
        alias: 'bench-score'
    },
};

// IP质量检测
Prism.languages.securitycheck = {
    'value': {
        pattern: /(?<=:)(.*)(?=\n|$)/,
        alias: 'bench-value'
    }
};

Prism.languages.portchecker = {
    'ok': {
        pattern: /✔/,
        alias: 'bench-mbps'
    },
    'no': {
        pattern: /✘/,
        alias: 'region-no'
    },
};

Prism.languages.tiktok = {
    // 🔴 Failed
    'failed': {
        pattern: /(?<=:\s*)(?=.*\bFailed\b)[^\n]*/,
        greedy: true,
        alias: 'region-no'
    },
    // 🟢 Yes
    'yes': {
        pattern: /(?<=:\s*)(?!.*\b(?:Failed|No|Risky)\b)[^\n]+/,
        greedy: true,
        alias: 'region-yes'
    }
};

Prism.languages.unlocktests = {
    // 🔴 Failed
    'failed': {
        pattern: /(  )(Banned|NO).*/,
        greedy: true,
        alias: 'region-no'
    },
    // 🟢 Yes
    'yes': {
        pattern: /(  )(?!.*(Banned|NO)).*/,
        greedy: true,
        alias: 'region-yes'
    }
};

Prism.languages.regionrestrictioncheck = {
    // 🔵 "**" 开头 → 蓝色
    'section-header': {
        pattern: /^\s*\*\*.*$/m,
        greedy: true,
        alias: 'section-header'
    },
    // 🟡 "---SomeText---"（不能全是 -）
    'section-line-title': {
        pattern: /^\s*---[^-\s][^-\n]*---\s*$/m,
        greedy: true,
        alias: 'section-title'
    },
    // 🔴 Failed
    'failed': {
        pattern: /(?<=:\s*)(?=.*\bFailed\b)[^\n]*/,
        greedy: true,
        alias: 'region-no'
    },
    // 🔴 No
    'no': {
        pattern: /(?<=:\s*)(?=.*\bNo\b)[^\n]*/,
        greedy: true,
        alias: 'region-no'
    },
    // 🟠 Risky
    'risky': {
        pattern: /(?<=:\s*)(?=.*\bRisky\b)[^\n]*/,
        greedy: true,
        alias: 'region-risky'
    },
    // 🟢 Yes
    'yes': {
        pattern: /(?<=:\s*)(?!.*\b(?:Failed|No|Risky)\b)[^\n]+/,
        greedy: true,
        alias: 'region-yes'
    }
};