/**
 * HurufKeren.id — Main Application Script
 * 50+ Unicode Transforms, Nickname Styler, Zalgo Glitch, Symbol Library & Ad Placements
 */

(function () {
  'use strict';

  // --- 1. UNICODE CHARACTER MAPS ---
  const CHAR_MAPS = {
    normal: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',

    gothic: {
      lower: '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷',
      upper: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ'
    },
    gothicBold: {
      lower: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟',
      upper: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅'
    },
    script: {
      lower: '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏',
      upper: '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵'
    },
    scriptBold: {
      lower: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃',
      upper: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'
    },
    doubleStruck: {
      lower: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫',
      upper: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ',
      digits: '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'
    },
    smallCaps: {
      lower: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ',
      upper: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ'
    },
    serifBold: {
      lower: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳',
      upper: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙',
      digits: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
    },
    serifItalic: {
      lower: '𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧',
      upper: '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍'
    },
    sansBold: {
      lower: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇',
      upper: '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭',
      digits: '𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'
    },
    sansItalic: {
      lower: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻',
      upper: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡'
    },
    monospace: {
      lower: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣',
      upper: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈金',
      digits: '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'
    },
    fullwidth: {
      lower: 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ',
      upper: 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',
      digits: '０１２３４５６７８９'
    },
    circledWhite: {
      lower: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
      upper: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',
      digits: '⓪①②③④⑤⑥⑦⑧⑨'
    },
    circledBlack: {
      lower: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩',
      upper: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩',
      digits: '⓿❶❷❸❹❺❻❼❽❾'
    },
    squaredWhite: {
      lower: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉',
      upper: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'
    },
    squaredBlack: {
      lower: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉',
      upper: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉'
    },
    inverted: {
      lower: 'ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz',
      upper: 'ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz',
      digits: '0ƖᄅƐㄣϛ9ㄥ86'
    }
  };

  // --- 2. ZALGO GLITCH COMBINING MARKS ---
  const ZALGO_UP = [
    '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
    '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343',
    '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350'
  ];
  const ZALGO_MID = [
    '\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327',
    '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e'
  ];
  const ZALGO_DOWN = [
    '\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f',
    '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c',
    '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339'
  ];

  function generateZalgo(text, intensity = 4) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += text[i];
      if (/\s/.test(text[i])) continue;
      const numUp = Math.floor(Math.random() * intensity);
      const numMid = Math.floor(Math.random() * (intensity / 2));
      const numDown = Math.floor(Math.random() * intensity);
      for (let j = 0; j < numUp; j++) result += ZALGO_UP[Math.floor(Math.random() * ZALGO_UP.length)];
      for (let j = 0; j < numMid; j++) result += ZALGO_MID[Math.floor(Math.random() * ZALGO_MID.length)];
      for (let j = 0; j < numDown; j++) result += ZALGO_DOWN[Math.floor(Math.random() * ZALGO_DOWN.length)];
    }
    return result;
  }

  // --- 3. CHARACTER REPLACEMENT HELPER ---
  function mapChars(text, mapping) {
    if (!mapping) return text;
    const lowAlpha = 'abcdefghijklmnopqrstuvwxyz';
    const upAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';

    // Handle split for surrogate pairs
    const lowMap = mapping.lower ? Array.from(mapping.lower) : null;
    const upMap = mapping.upper ? Array.from(mapping.upper) : null;
    const digMap = mapping.digits ? Array.from(mapping.digits) : null;

    let res = '';
    for (const char of text) {
      const lowIdx = lowAlpha.indexOf(char);
      const upIdx = upAlpha.indexOf(char);
      const digIdx = digits.indexOf(char);

      if (lowIdx !== -1 && lowMap && lowMap[lowIdx]) {
        res += lowMap[lowIdx];
      } else if (upIdx !== -1 && upMap && upMap[upIdx]) {
        res += upMap[upIdx];
      } else if (digIdx !== -1 && digMap && digMap[digIdx]) {
        res += digMap[digIdx];
      } else {
        res += char;
      }
    }
    return res;
  }

  // --- 4. STYLE DEFINITIONS (50+ STYLES) ---
  const STYLES = [
    // 1. Fraktur / Gothic
    { id: 'fraktur-bold', name: 'Gothic Bold / Fraktur', category: 'gothic', fn: t => mapChars(t, CHAR_MAPS.gothicBold) },
    { id: 'fraktur', name: 'Gothic Classic', category: 'gothic', fn: t => mapChars(t, CHAR_MAPS.gothic) },

    // 2. Script / Cursive
    { id: 'script-bold', name: 'Tulisan Sambung Bold', category: 'aesthetic', fn: t => mapChars(t, CHAR_MAPS.scriptBold) },
    { id: 'script', name: 'Tulisan Sambung Estetik', category: 'aesthetic', fn: t => mapChars(t, CHAR_MAPS.script) },

    // 3. Double-Struck / Blackboard
    { id: 'double-struck', name: 'Double-Struck / Hollow', category: 'populer', fn: t => mapChars(t, CHAR_MAPS.doubleStruck) },

    // 4. Small Caps
    { id: 'small-caps', name: 'Small Caps / Huruf Mini', category: 'populer', fn: t => mapChars(t, CHAR_MAPS.smallCaps) },

    // 5. Sans-Serif Bold & Italic
    { id: 'sans-bold', name: 'Sans-Serif Tebal', category: 'populer', fn: t => mapChars(t, CHAR_MAPS.sansBold) },
    { id: 'sans-italic', name: 'Sans-Serif Miring', category: 'aesthetic', fn: t => mapChars(t, CHAR_MAPS.sansItalic) },

    // 6. Serif Bold & Italic
    { id: 'serif-bold', name: 'Serif Elegan Bold', category: 'aesthetic', fn: t => mapChars(t, CHAR_MAPS.serifBold) },
    { id: 'serif-italic', name: 'Serif Miring Formal', category: 'aesthetic', fn: t => mapChars(t, CHAR_MAPS.serifItalic) },

    // 7. Monospace / Koding
    { id: 'monospace', name: 'Monospace Mesin Tik', category: 'populer', fn: t => mapChars(t, CHAR_MAPS.monospace) },

    // 8. Vaporwave / Fullwidth
    { id: 'fullwidth', name: 'Vaporwave / Estetik Lebar', category: 'aesthetic', fn: t => mapChars(t, CHAR_MAPS.fullwidth) },

    // 9. Circled & Squared
    { id: 'circled-white', name: 'Lingkaran Putih', category: 'populer', fn: t => mapChars(t, CHAR_MAPS.circledWhite) },
    { id: 'circled-black', name: 'Lingkaran Hitam Neon', category: 'populer', fn: t => mapChars(t, CHAR_MAPS.circledBlack) },
    { id: 'squared-white', name: 'Kotak Rapi', category: 'populer', fn: t => mapChars(t, CHAR_MAPS.squaredWhite) },
    { id: 'squared-black', name: 'Kotak Hitam Bold', category: 'populer', fn: t => mapChars(t, CHAR_MAPS.squaredBlack) },

    // 10. Inverted / Terbalik 180°
    { id: 'inverted', name: 'Tulisan Terbalik 180°', category: 'lucu', fn: t => Array.from(mapChars(t, CHAR_MAPS.inverted)).reverse().join('') },

    // 11. Combining Effects
    { id: 'strikethrough', name: 'Coret Tengah (Strikethrough)', category: 'aesthetic', fn: t => t.split('').map(c => c + '\u0336').join('') },
    { id: 'underline', name: 'Garis Bawah (Underline)', category: 'aesthetic', fn: t => t.split('').map(c => c + '\u0332').join('') },
    { id: 'double-underline', name: 'Garis Bawah Ganda', category: 'aesthetic', fn: t => t.split('').map(c => c + '\u0333').join('') },
    { id: 'slash', name: 'Garis Miring Potong', category: 'aesthetic', fn: t => t.split('').map(c => c + '\u0338').join('') },
    { id: 'wave', name: 'Garis Bawah Ombak', category: 'aesthetic', fn: t => t.split('').map(c => c + '\u0330').join('') },
    { id: 'dots-above', name: 'Titik Estetik Atas', category: 'aesthetic', fn: t => t.split('').map(c => c + '\u0307').join('') },
    { id: 'aesthetic-spaced', name: 'S p a c e d   E s t e t i k', category: 'aesthetic', fn: t => t.split('').join(' ') },

    // 12. Glitch / Zalgo (Dynamic)
    {
      id: 'zalgo',
      name: 'Zalgo Glitch / Hacker',
      category: 'glitch',
      fn: (t, ctx) => generateZalgo(t, ctx?.zalgoIntensity || 4)
    },

    // 13. Game Nicknames: Free Fire, MLBB, PUBG
    {
      id: 'game-wing-1',
      name: 'Sayap Malaikat FF',
      category: 'game',
      fn: t => `꧁༺${mapChars(t, CHAR_MAPS.sansBold)}༻꧂`
    },
    {
      id: 'game-king-sultan',
      name: 'Sultan Mahkota 亗',
      category: 'game',
      fn: t => `亗 『${mapChars(t, CHAR_MAPS.gothicBold)}』 亗`
    },
    {
      id: 'game-mr-tag',
      name: 'MR Pro Player Tag',
      category: 'game',
      fn: t => `ᴹᴿ°᭄${mapChars(t, CHAR_MAPS.sansBold)}࿐`
    },
    {
      id: 'game-bunga-sakura',
      name: 'Bunga Sakura Jepang',
      category: 'lucu',
      fn: t => `✿ ${mapChars(t, CHAR_MAPS.scriptBold)} ✿`
    },
    {
      id: 'game-pedang-ksatria',
      name: 'Ksatria Duel Pedang ⚔️',
      category: 'game',
      fn: t => `⚔️ 『${mapChars(t, CHAR_MAPS.sansBold)}』 ⚔️`
    },
    {
      id: 'game-petir-pro',
      name: 'Petir Kilat Legend',
      category: 'game',
      fn: t => `⚡${mapChars(t, CHAR_MAPS.sansBold)}⚡`
    },
    {
      id: 'game-tengkorak-reaper',
      name: 'Grim Reaper ☠️',
      category: 'game',
      fn: t => `☠️ [ ${mapChars(t, CHAR_MAPS.gothicBold)} ] ☠️`
    },
    {
      id: 'game-bintang-bucin',
      name: 'Bintang Bucin Estetik',
      category: 'lucu',
      fn: t => `★彡 ${mapChars(t, CHAR_MAPS.scriptBold)} 彡★`
    },
    {
      id: 'game-loveyou',
      name: 'Heart Bucin Sayang ♡',
      category: 'lucu',
      fn: t => `♡ ${mapChars(t, CHAR_MAPS.scriptBold)} ♡`
    },
    {
      id: 'game-payung-ff',
      name: 'Payung Keren FF ☂️',
      category: 'game',
      fn: t => `☂️ ${mapChars(t, CHAR_MAPS.sansBold)} ☂️`
    },
    {
      id: 'game-kanji-japan',
      name: 'Samurai Kanji ズ气',
      category: 'game',
      fn: t => `ズ ${mapChars(t, CHAR_MAPS.sansBold)} 气`
    },
    {
      id: 'game-yinyang',
      name: 'Yin Yang Balance ☯️',
      category: 'game',
      fn: t => `☯️ ${mapChars(t, CHAR_MAPS.sansBold)} ☯️`
    },
    {
      id: 'game-bracket-ninja',
      name: 'Ninja Brackets ◤ ◢',
      category: 'game',
      fn: t => `◤ ${mapChars(t, CHAR_MAPS.sansBold)} ◢`
    },
    {
      id: 'game-badboy',
      name: 'Bad Boy Squad Tag',
      category: 'game',
      fn: t => `ᴮᴬᴰʙᴏʏ • ${mapChars(t, CHAR_MAPS.sansBold)}`
    },
    {
      id: 'game-badgirl',
      name: 'Bad Girl Squad Tag',
      category: 'game',
      fn: t => `ᴮᴬᴰɢɪʀʟ • ${mapChars(t, CHAR_MAPS.scriptBold)}`
    },
    {
      id: 'game-hacker-style',
      name: 'Cyber Hacker Matrix',
      category: 'glitch',
      fn: t => `[ ⚠️ ${mapChars(t, CHAR_MAPS.monospace)} ⚠️ ]`
    },
    {
      id: 'game-sparkles',
      name: 'Sparkles Galaksi ✧',
      category: 'aesthetic',
      fn: t => `✧･ﾟ: *✧ ${mapChars(t, CHAR_MAPS.scriptBold)} ✧*:･ﾟ✧`
    },
    {
      id: 'game-volume-bars',
      name: 'Equalizer Musik ıllıllı',
      category: 'aesthetic',
      fn: t => `ıllıllı ${mapChars(t, CHAR_MAPS.sansBold)} ıllıllı`
    },
    {
      id: 'game-devil-horn',
      name: 'Devil Horns ╰‿╯',
      category: 'game',
      fn: t => `╰‿╯ ${mapChars(t, CHAR_MAPS.sansBold)}`
    },
    {
      id: 'game-pubg-clan',
      name: 'PUBG Clan 乡',
      category: 'game',
      fn: t => `乡 ${mapChars(t, CHAR_MAPS.sansBold)} 乡`
    },
    {
      id: 'game-crown-vip',
      name: 'VIP Crown Mahkota 👑',
      category: 'populer',
      fn: t => `👑 𝕍𝕀ℙ • ${mapChars(t, CHAR_MAPS.sansBold)}`
    },
    {
      id: 'game-diamond-rich',
      name: 'Diamond Royale 💎',
      category: 'populer',
      fn: t => `💎 ${mapChars(t, CHAR_MAPS.doubleStruck)} 💎`
    }
  ];

  // --- 5. SYMBOL & KAOMOJI LIBRARIES ---
  const SYMBOL_LIBRARY = {
    game: ['亗', '꧁', '༺', '༻', '꧂', '᭄', '࿐', 'ᴹᴿ', 'ᴮᴼˢˢ', 'ᴮᴬᴰ', '乂', '彡', '★', '⚡', '⚔️', '☠️', '☂️', '☬', 'ズ', '气', '乡', '◤', '◢', '╰‿╯', '☯️', '🎯', '🔥', '👑', '💎', '🛡️'],
    aesthetic: ['✧', '✦', '⋆', '˚', '｡', '･', 'ﾟ', '☽', '☾', '☁️', '🕊️', '🌿', '☕', '🫧', '🪐', '🎐', '🎐', '🕯️', '🧸', '📻', '🎞️', '🕰️', '📜', '🩰', '🕯️', '🪞'],
    love: ['♡', '♥', '❤', '💕', '💖', '💗', '💘', '💝', '💞', '🏩', '💌', '✿', '❀', '🌷', '🌸', '🌹', '🌺', '🌻', '💐', '🦋'],
    arrows: ['➔', '➜', '➤', '➥', '➦', '➺', '➳', '➸', '🏹', '⮞', '⮜', '▲', '▼', '◄', '►', '↳', '↴', '↵', '⇄', '⇌'],
    stars: ['★', '☆', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '⁂', '⁎', '⁑', 'ᕯ', '۞', '✡', '🔯', '✨'],
    kaomoji: [
      '(づ｡◕‿‿◕｡)づ', '(⌐■_■)', 'ᕙ(⇀‸↼‶)ᕗ', '(◕‿◕✿)',
      '(｡♥‿♥｡)', '(✿◠‿◠)', '(☞ﾟヮﾟ)☞', '¯\\_(ツ)_/¯',
      '(╯°□°）╯︵ ┻━┻', '┬─┬ノ( º _ ºノ)', '(ง •̀_•́)ง', '(つ▀¯▀)つ',
      '(っ˘ڡ˘ς)', '(╥﹏╥)', '(｡•́︿•̀｡)', 'ʕ•ᴥ•ʔ',
      '(=^･ω･^=)', '(•‿•)', '(｡◕‿◕｡)', '(ʘ‿ʘ)'
    ]
  };

  // --- 6. STATE & DOM ELEMENTS ---
  const state = {
    inputText: 'HurufKeren',
    activeCategory: 'all',
    searchQuery: '',
    zalgoIntensity: 4,
    activeSymbolTab: 'game'
  };

  const DOM = {
    masterInput: document.getElementById('master-input'),
    charCount: document.getElementById('char-count'),
    wordCount: document.getElementById('word-count'),
    btnClear: document.getElementById('btn-clear'),
    btnPaste: document.getElementById('btn-paste'),
    filterTabs: document.querySelectorAll('.tab-pill'),
    searchFilter: document.getElementById('search-filter'),
    fontGrid: document.getElementById('font-grid'),
    zalgoWrapper: document.getElementById('zalgo-wrapper'),
    zalgoSlider: document.getElementById('zalgo-slider'),
    zalgoVal: document.getElementById('zalgo-val'),
    presetChips: document.querySelectorAll('.preset-chip'),
    toastContainer: document.getElementById('toast-container'),
    themeToggle: document.getElementById('theme-toggle'),

    // Nickname Builder
    builderPrefix: document.getElementById('builder-prefix'),
    builderInput: document.getElementById('builder-input'),
    builderSuffix: document.getElementById('builder-suffix'),
    builderPreview: document.getElementById('builder-preview'),
    builderCopyBtn: document.getElementById('builder-copy-btn'),

    // Symbols & Kaomojis
    symbolTabs: document.querySelectorAll('.symbol-tab-btn'),
    symbolsGrid: document.getElementById('symbols-grid'),

    // Bio Mockup Modal
    modalBackdrop: document.getElementById('bio-modal'),
    modalCloseBtn: document.getElementById('btn-close-modal'),
    igBioText: document.getElementById('ig-bio-text'),
    btnOpenModal: document.getElementById('btn-open-preview')
  };

  // --- 7. CORE RENDERING ENGINE ---
  function renderFontCards() {
    const rawText = state.inputText.trim() || 'HurufKeren';
    const query = state.searchQuery.toLowerCase();
    DOM.fontGrid.innerHTML = '';

    const filteredStyles = STYLES.filter(s => {
      const matchCat = (state.activeCategory === 'all') || (s.category === state.activeCategory);
      const matchQuery = !query || s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (filteredStyles.length === 0) {
      DOM.fontGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-dim);">
          <p style="font-size: 1.1rem; font-weight: 700;">Tidak ada gaya font yang cocok dengan pencarian.</p>
          <p style="font-size: 0.85rem; margin-top: 4px;">Coba gunakan kata kunci lain atau pilih tab "Semua".</p>
        </div>
      `;
      return;
    }

    filteredStyles.forEach((style, index) => {
      const converted = style.fn(rawText, { zalgoIntensity: state.zalgoIntensity });

      const card = document.createElement('div');
      card.className = 'font-card';
      card.innerHTML = `
        <div class="font-card-top">
          <span class="font-badge">${escapeHtml(style.name)}</span>
          <div class="font-card-actions">
            <button type="button" class="btn-icon-mini btn-preview-single" title="Lihat di Mockup Bio" data-text="${escapeAttr(converted)}">
              📱
            </button>
          </div>
        </div>
        <div class="font-card-body">
          <div class="converted-text" id="text-${style.id}">${escapeHtml(converted)}</div>
        </div>
        <div class="font-card-bottom">
          <span class="font-meta-tag">${style.category.toUpperCase()}</span>
          <button type="button" class="btn-copy" data-target="text-${style.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Salin</span>
          </button>
        </div>
      `;

      DOM.fontGrid.appendChild(card);

      // In-feed Native Ad banner between cards after index 5
      if (index === 5) {
        const adCard = document.createElement('div');
        adCard.className = 'ad-slot-wrapper';
        adCard.style.gridColumn = '1 / -1';
        adCard.innerHTML = `
          <div class="ad-slot-container">
            <span class="ad-slot-tag">Sponsor / Iklan AdSense</span>
            <span class="ad-slot-text">Ruang Iklan Responsif (In-Feed Ad Unit)</span>
            <span class="ad-slot-subtext">Slot iklan otomatis Google AdSense akan muncul di area ini untuk menghasilkan pendapatan.</span>
          </div>
        `;
        DOM.fontGrid.appendChild(adCard);
      }
    });

    // Attach Copy listeners
    DOM.fontGrid.querySelectorAll('.btn-copy').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const textElem = document.getElementById(targetId);
        if (textElem) {
          copyToClipboard(textElem.innerText, btn);
        }
      });
    });

    // Attach Preview listeners
    DOM.fontGrid.querySelectorAll('.btn-preview-single').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-text');
        openBioModal(text);
      });
    });
  }

  // --- 8. SYMBOLS & KAOMOJIS RENDERER ---
  function renderSymbols() {
    const list = SYMBOL_LIBRARY[state.activeSymbolTab] || SYMBOL_LIBRARY.game;
    DOM.symbolsGrid.innerHTML = '';

    list.forEach(item => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'symbol-chip';
      chip.textContent = item;
      chip.title = `Klik untuk salin "${item}"`;
      chip.addEventListener('click', () => {
        // Insert into master input or copy
        copyToClipboard(item);
        // Also append to input
        DOM.masterInput.value += ` ${item}`;
        state.inputText = DOM.masterInput.value;
        updateCounts();
        renderFontCards();
        updateBuilderPreview();
      });
      DOM.symbolsGrid.appendChild(chip);
    });
  }

  // --- 9. NICKNAME BUILDER LOGIC ---
  function updateBuilderPreview() {
    const p = DOM.builderPrefix.value || '';
    const mid = DOM.builderInput.value.trim() || 'PRO_PLAYER';
    const s = DOM.builderSuffix.value || '';
    const finalNick = `${p} ${mid} ${s}`.trim();
    DOM.builderPreview.textContent = finalNick;
  }

  // --- 10. CLIPBOARD & TOAST SYSTEM ---
  function copyToClipboard(text, triggerBtn = null) {
    if (!text) return;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        handleCopySuccess(text, triggerBtn);
      }).catch(() => fallbackCopy(text, triggerBtn));
    } else {
      fallbackCopy(text, triggerBtn);
    }
  }

  function fallbackCopy(text, triggerBtn) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      handleCopySuccess(text, triggerBtn);
    } catch (err) {
      showToast('Gagal menyalin teks ke clipboard.', '❌');
    }
    document.body.removeChild(textarea);
  }

  function handleCopySuccess(text, triggerBtn) {
    if (triggerBtn) {
      const origHtml = triggerBtn.innerHTML;
      triggerBtn.classList.add('copied');
      triggerBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Tersalin!</span>
      `;
      setTimeout(() => {
        triggerBtn.classList.remove('copied');
        triggerBtn.innerHTML = origHtml;
      }, 1800);
    }

    const preview = text.length > 20 ? text.substring(0, 20) + '...' : text;
    showToast(`Berhasil disalin: "${preview}"`, '✨');
  }

  function showToast(message, icon = '✨') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span>${escapeHtml(message)}</span>
    `;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }

  // --- 11. BIO MOCKUP MODAL ---
  function openBioModal(text) {
    const previewText = text || state.inputText || 'HurufKeren';
    DOM.igBioText.textContent = `${previewText}\n✨ Bio Instagram Keren & Unik\n📩 DM for Business / Collab\n🔗 hurufkeren.id`;
    DOM.modalBackdrop.classList.add('active');
  }

  function closeBioModal() {
    DOM.modalBackdrop.classList.remove('active');
  }

  // --- 12. TEXT METRICS & UTILS ---
  function updateCounts() {
    const text = DOM.masterInput.value;
    DOM.charCount.textContent = text.length;
    DOM.wordCount.textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function escapeAttr(str) {
    return str.replace(/"/g, '&quot;');
  }

  // --- 13. EVENT LISTENERS SETUP ---
  function initEvents() {
    // Master Input Event
    DOM.masterInput.addEventListener('input', e => {
      state.inputText = e.target.value;
      updateCounts();
      renderFontCards();
      DOM.builderInput.value = state.inputText;
      updateBuilderPreview();
    });

    // Clear Button
    DOM.btnClear.addEventListener('click', () => {
      DOM.masterInput.value = '';
      state.inputText = '';
      updateCounts();
      renderFontCards();
      DOM.masterInput.focus();
    });

    // Paste Button
    DOM.btnPaste.addEventListener('click', async () => {
      try {
        if (navigator.clipboard) {
          const clipText = await navigator.clipboard.readText();
          DOM.masterInput.value = clipText;
          state.inputText = clipText;
          updateCounts();
          renderFontCards();
          showToast('Teks berhasil ditempel dari clipboard!', '📋');
        }
      } catch (err) {
        DOM.masterInput.focus();
        showToast('Gunakan Ctrl+V untuk menempel teks.', 'ℹ️');
      }
    });

    // Preset Chips
    DOM.presetChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const val = chip.getAttribute('data-val');
        DOM.masterInput.value = val;
        state.inputText = val;
        updateCounts();
        renderFontCards();
        DOM.builderInput.value = val;
        updateBuilderPreview();
        showToast(`Contoh dimuat: "${val}"`, '💡');
      });
    });

    // Enable horizontal mouse wheel scroll & drag-to-scroll on tabs container
    const categoryTabsContainer = document.getElementById('category-tabs');
    if (categoryTabsContainer) {
      categoryTabsContainer.addEventListener('wheel', e => {
        if (categoryTabsContainer.scrollWidth > categoryTabsContainer.clientWidth && e.deltaY !== 0) {
          e.preventDefault();
          categoryTabsContainer.scrollLeft += e.deltaY * 0.8;
        }
      }, { passive: false });

      let isDown = false;
      let startX;
      let scrollLeft;

      categoryTabsContainer.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX - categoryTabsContainer.offsetLeft;
        scrollLeft = categoryTabsContainer.scrollLeft;
      });
      categoryTabsContainer.addEventListener('mouseleave', () => { isDown = false; });
      categoryTabsContainer.addEventListener('mouseup', () => { isDown = false; });
      categoryTabsContainer.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categoryTabsContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        categoryTabsContainer.scrollLeft = scrollLeft - walk;
      });
    }

    // Category Tabs
    DOM.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        DOM.filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeCategory = tab.getAttribute('data-category');

        // Toggle Zalgo slider box visibility
        if (state.activeCategory === 'glitch') {
          DOM.zalgoWrapper.style.display = 'flex';
        } else {
          DOM.zalgoWrapper.style.display = 'none';
        }

        renderFontCards();
      });
    });

    // Search input
    DOM.searchFilter.addEventListener('input', e => {
      state.searchQuery = e.target.value;
      renderFontCards();
    });

    // Zalgo slider
    DOM.zalgoSlider.addEventListener('input', e => {
      state.zalgoIntensity = parseInt(e.target.value, 10);
      DOM.zalgoVal.textContent = state.zalgoIntensity;
      renderFontCards();
    });

    // Symbol Tab Buttons
    DOM.symbolTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        DOM.symbolTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeSymbolTab = tab.getAttribute('data-tab');
        renderSymbols();
      });
    });

    // Nickname Builder Events
    DOM.builderPrefix.addEventListener('change', updateBuilderPreview);
    DOM.builderInput.addEventListener('input', updateBuilderPreview);
    DOM.builderSuffix.addEventListener('change', updateBuilderPreview);
    DOM.builderCopyBtn.addEventListener('click', () => {
      copyToClipboard(DOM.builderPreview.textContent, DOM.builderCopyBtn);
    });

    // Modal Close
    DOM.modalCloseBtn.addEventListener('click', closeBioModal);
    DOM.modalBackdrop.addEventListener('click', e => {
      if (e.target === DOM.modalBackdrop) closeBioModal();
    });

    if (DOM.btnOpenModal) {
      DOM.btnOpenModal.addEventListener('click', () => openBioModal(state.inputText));
    }

    // Theme Toggle
    DOM.themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      DOM.themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
      localStorage.setItem('hurufkeren-theme', next);
    });

    // Load stored theme
    const savedTheme = localStorage.getItem('hurufkeren-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      DOM.themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
  }

  // --- 14. INITIALIZE APP ---
  function init() {
    updateCounts();
    renderFontCards();
    renderSymbols();
    updateBuilderPreview();
    initEvents();
  }

  // Kick off when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
