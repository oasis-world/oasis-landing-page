/** Oasis landing i18n — zh/en pairs. Default follows system language. */
(function (global) {
  "use strict";

  const dict = {
    zh: {
      brand: "绿洲村",
      menu: "菜单",
      "nav.gameplay": "玩法",
      "nav.worlds": "世界",
      "nav.elements": "元素",
      "nav.editor": "编辑器",
      "nav.gallery": "画廊",
      "nav.community": "社区",
      "hero.title": "绿洲村 Oasis Village",
      "hero.tagline": "在琐碎里修行，在日常中抵达平静",
      "hero.intro":
        "你来到绿洲村，不为成为英雄，只想学会好好生活。村里的琐事、邻居的请求、水井边的闲谈——正是这些平凡的麻烦，把你慢慢磨成一个平静的人。",
      "hero.ctaPrimary": "探索场景",
      "hero.ctaSecondary": "打开编辑器",
      "playGame": "开始游戏",
      "playGameAria": "开始游戏 Play Game",
      "carousel.eyebrow": "世界画廊",
      "carousel.title": "走进绿洲的四季角落",
      "carousel.lead": "从田园村庄到灯会夜市，每一处场景都能漫步、交谈、接取琐事。",
      "gameplay.eyebrow": "玩法",
      "gameplay.title": "一个普通人的日常修行",
      "gameplay.lead": "没有战斗数值表。你只是走进村庄，把一件件小事做好。",
      "gameplay.walk.title": "点击漫步",
      "gameplay.walk.body":
        "点一下地面，角色会沿路径慢慢走过去。地图支持碰撞与视野移动。",
      "gameplay.talk.title": "靠近交谈",
      "gameplay.talk.body": "走到村民身边打开羊皮纸对话框：聊天，或查看他们正愁的琐事。",
      "gameplay.quest.title": "邻里琐事",
      "gameplay.quest.body": "补货、找猫、采药、扫院子……任务以谈话、跑腿、寻找与走访展开。",
      "gameplay.animals.title": "会走的小动物",
      "gameplay.animals.body": "猫、狗、鸭子与小鸟在村中游荡，有时它们本身就是故事的线索。",
      "gameplay.portal.title": "传送门",
      "gameplay.portal.body": "村口通向河埠、后山、雪原、海湾与夜市——世界通过拱门自然相连。",
      "elements.eyebrow": "场景元素",
      "elements.title": "漂亮的像素物件，组成你的村庄",
      "elements.lead": "从春日杂货铺到灯塔与夜市点心铺——编辑器目录里已有成百上千可放置元素。",
      "elements.shop.title": "春日杂货铺",
      "elements.shop.body": "樱花季的温暖店面，适合做村庄中心与任务发布点。",
      "elements.wang.title": "王婶杂货铺",
      "elements.wang.body": "经典田园风店铺，补货任务的起点。",
      "elements.tea.title": "春日茶馆",
      "elements.tea.body": "邻里闲谈与茶水温度都在这里。",
      "elements.sakura.title": "樱花树",
      "elements.sakura.body": "春日地图的视觉锚点，风一吹就是气氛。",
      "elements.clinic.title": "医馆",
      "elements.clinic.body": "苏医师采药归来的地方。",
      "elements.lighthouse.title": "海滨灯塔",
      "elements.lighthouse.body": "渔湾夜色的地标，适合做远方目标。",
      "elements.pastry.title": "夜市点心铺",
      "elements.pastry.body": "灯笼下的热气，夜市任务的气味。",
      "elements.temple.title": "夜庙",
      "elements.temple.body": "深蓝阴影与灯火，节日叙事的舞台。",
      "elements.waterTower.title": "沙漠风塔",
      "elements.waterTower.body": "沙漠绿洲的高耸水塔，商队仰望的地标。",
      "editor.eyebrow": "地图编辑器",
      "editor.title": "不只是玩，也可以创作世界",
      "editor.lead":
        "编辑器内置多套美术风格、元素目录、碰撞区域与传送门。生成场景协议后，可直接在游戏里试玩。",
      "editor.s1.title": "选择风格地面",
      "editor.s1.body": "田园、春樱、秋收、冬雪、海滨、沙漠、夜市……一键切换地面与调色板。",
      "editor.s2.title": "放置元素与 NPC",
      "editor.s2.body": "从建筑、树木、道具到村民与小动物，拖进画布即可布置。",
      "editor.s3.title": "绘制碰撞与传送",
      "editor.s3.body": "标记不可行走区域，架起通往其他场景的传送门。",
      "editor.s4.title": "生成并试玩",
      "editor.s4.body": "保存 oasis/1 场景协议，立刻进入游戏验证你的地图。",
      "editor.cta": "看看别人的场景",
      "editor.boardLabel": "Scene Preview · oasis-village",
      "editor.badgeStyle": "Style · classic",
      "editor.badgePlaced": "Village layout",
      "editor.badgeReady": "可试玩",
      "gallery.eyebrow": "Gallery",
      "gallery.title": "玩家场景画廊",
      "gallery.lead":
        "这里展示社区创作的优秀场景。以下先以官方范例世界起头——欢迎投稿你的地图。",
      "gallery.note":
        "提交你的 oasis/1 场景 JSON 或截图后，将收录进官方 Gallery。链接占位：X / Discord / GitHub。",
      "gallery.cta": "联系社区投稿",
      "community.eyebrow": "社区",
      "community.title": "加入绿洲村",
      "community.lead":
        "关注开发进度、分享场景、讨论任务设计。社交入口已预留，稍后填入正式链接即可。",
      "community.x": "最新公告与截图",
      "community.discord": "场景分享与讨论",
      "community.github": "开源协议与问题反馈",
      "footer.brand": "绿洲村 Oasis Village",
      "footer.tag": "在琐碎里修行，在日常中抵达平静。",
      "footer.rights": "保留所有权利。",
      "carousel.author": "官方示例",
      "gallery.featured": "精选世界",
    },
    en: {
      brand: "Oasis",
      menu: "Menu",
      "nav.gameplay": "Gameplay",
      "nav.worlds": "Worlds",
      "nav.elements": "Elements",
      "nav.editor": "Editor",
      "nav.gallery": "Gallery",
      "nav.community": "Community",
      "hero.title": "Oasis Village",
      "hero.tagline": "Find peace through ordinary days",
      "hero.intro":
        "You came to Oasis Village not to become a hero, but to learn how to live well. Chores, neighbors' requests, small talk by the well — these ordinary troubles slowly shape you into someone calm.",
      "hero.ctaPrimary": "Explore scenes",
      "hero.ctaSecondary": "Open the editor",
      "playGame": "Play Game",
      "playGameAria": "Play Game",
      "carousel.eyebrow": "World album",
      "carousel.title": "Walk every corner of Oasis",
      "carousel.lead":
        "From pastoral lanes to the lantern night market — each scene is made for walking, talking, and small errands.",
      "gameplay.eyebrow": "Gameplay",
      "gameplay.title": "An ordinary person's daily practice",
      "gameplay.lead": "No combat stat sheet. You simply enter the village and take care of little things.",
      "gameplay.walk.title": "Click to walk",
      "gameplay.walk.body":
        "Tap the ground and your character strolls along a path. Maps support collision and panning views.",
      "gameplay.talk.title": "Talk up close",
      "gameplay.talk.body":
        "Approach villagers to open a parchment dialog — chat, or see the chores on their mind.",
      "gameplay.quest.title": "Neighbor errands",
      "gameplay.quest.body":
        "Restock shops, find cats, gather herbs, sweep yards — quests run on talk, errands, finds, and visits.",
      "gameplay.animals.title": "Wandering animals",
      "gameplay.animals.body":
        "Cats, dogs, ducks, and birds roam the village; sometimes they are the story itself.",
      "gameplay.portal.title": "Portals",
      "gameplay.portal.body":
        "The village opens onto river docks, back hills, snow camps, seaside coves, and night markets.",
      "elements.eyebrow": "Scene elements",
      "elements.title": "Pretty pixel props that build your village",
      "elements.lead":
        "From the spring grocery to lighthouses and night pastry stalls — hundreds of placeable pieces live in the editor catalog.",
      "elements.shop.title": "Spring Grocery",
      "elements.shop.body": "A warm sakura-season storefront — perfect as a village hub and quest board.",
      "elements.wang.title": "Auntie Wang's Store",
      "elements.wang.body": "The classic pastoral shop where restock errands begin.",
      "elements.tea.title": "Spring Teahouse",
      "elements.tea.body": "Where neighbors talk and the tea stays warm.",
      "elements.sakura.title": "Sakura Tree",
      "elements.sakura.body": "A visual anchor for spring maps — atmosphere on a breeze.",
      "elements.clinic.title": "Clinic",
      "elements.clinic.body": "Where Dr. Su returns after gathering herbs.",
      "elements.lighthouse.title": "Seaside Lighthouse",
      "elements.lighthouse.body": "A cove landmark that makes a great distant goal.",
      "elements.pastry.title": "Night Pastry Stall",
      "elements.pastry.body": "Steam under lanterns — the scent of night-market quests.",
      "elements.temple.title": "Night Temple",
      "elements.temple.body": "Deep blues and warm lights for festival stories.",
      "elements.waterTower.title": "Desert Water Tower",
      "elements.waterTower.body": "A tall desert landmark caravans look up to in the oasis.",
      "editor.eyebrow": "Map Editor",
      "editor.title": "Not just play — build the world",
      "editor.lead":
        "The editor ships style packs, a prop catalog, collision regions, and portals. Generate a scene protocol and play it right away.",
      "editor.s1.title": "Pick a style ground",
      "editor.s1.body":
        "Village, spring, harvest, winter, coastal, desert, night — switch ground and palette in one click.",
      "editor.s2.title": "Place props & NPCs",
      "editor.s2.body": "Buildings, trees, props, villagers, and animals — drop them onto the canvas.",
      "editor.s3.title": "Draw collision & portals",
      "editor.s3.body": "Mark blocked areas and link scenes with portals.",
      "editor.s4.title": "Generate & play",
      "editor.s4.body": "Save an oasis/1 scene protocol and jump in to test your map.",
      "editor.cta": "See others' scenes",
      "editor.boardLabel": "Scene Preview · oasis-village",
      "editor.badgeStyle": "Style · classic",
      "editor.badgePlaced": "Village layout",
      "editor.badgeReady": "Ready to play",
      "gallery.eyebrow": "Gallery",
      "gallery.title": "Player scene gallery",
      "gallery.lead":
        "A showcase for community-built worlds. These official example scenes seed the gallery — submit yours next.",
      "gallery.note":
        "Share your oasis/1 scene JSON or screenshots to be featured. Social links are reserved for X / Discord / GitHub.",
      "gallery.cta": "Contact community",
      "community.eyebrow": "Community",
      "community.title": "Join Oasis Village",
      "community.lead":
        "Follow development, share maps, discuss quest design. Social entry points are reserved — swap in official URLs later.",
      "community.x": "News & screenshots",
      "community.discord": "Scene sharing & discussion",
      "community.github": "Protocol & issue tracker",
      "footer.brand": "Oasis Village",
      "footer.tag": "Find peace through ordinary days.",
      "footer.rights": "All rights reserved.",
      "carousel.author": "Official example",
      "gallery.featured": "Featured world",
    },
  };

  const scenes = [
    {
      id: "oasis-village",
      image: "assets/scenes/editor/oasis-vill-sc.png",
      worldImage: "assets/scenes/editor/oasis-vill-sc.png",
      name: { zh: "绿洲村", en: "Oasis Village" },
      tagline: {
        zh: "在琐碎里修行，在日常中抵达平静",
        en: "Find peace through ordinary days",
      },
      author: { zh: "官方 · 田园村庄", en: "Official · Village" },
      tags: ["classic", "hub"],
    },
    {
      id: "spring-garden",
      image: "assets/scenes/gallery/spring-garden.jpg",
      worldImage: "assets/scenes/worlds/spring-garden.jpg",
      name: { zh: "春日花园", en: "Spring Garden" },
      tagline: {
        zh: "春天从花园门开始",
        en: "Spring starts at the garden gate",
      },
      author: { zh: "官方 · 春日樱花", en: "Official · Spring" },
      tags: ["spring", "sakura"],
    },
    {
      id: "harvest-field",
      image: "assets/scenes/gallery/harvest-field.jpg",
      worldImage: "assets/scenes/worlds/harvest-field.jpg",
      name: { zh: "秋收田野", en: "Harvest Field" },
      tagline: {
        zh: "把日子装满一点",
        en: "Fill the days a little more",
      },
      author: { zh: "官方 · 秋日丰收", en: "Official · Autumn" },
      tags: ["autumn", "farm"],
    },
    {
      id: "snow-village",
      image: "assets/scenes/gallery/snow-village.jpg",
      worldImage: "assets/scenes/worlds/snow-village.jpg",
      name: { zh: "雪原小村", en: "Snow Village" },
      tagline: {
        zh: "火要一直烧着",
        en: "Keep the fire going",
      },
      author: { zh: "官方 · 冬日白雪", en: "Official · Winter" },
      tags: ["winter", "camp"],
    },
    {
      id: "seaside-cove",
      image: "assets/scenes/gallery/seaside-cove.jpg",
      worldImage: "assets/scenes/worlds/seaside-cove.jpg",
      name: { zh: "绿洲海湾", en: "Oasis Seaside" },
      tagline: {
        zh: "海不急，人也不用急",
        en: "The sea is not in a hurry",
      },
      author: { zh: "官方 · 海滨渔村", en: "Official · Coastal" },
      tags: ["coastal", "lighthouse"],
    },
    {
      id: "desert-oasis",
      image: "assets/scenes/gallery/desert-oasis.jpg",
      worldImage: "assets/scenes/worlds/desert-oasis.jpg",
      name: { zh: "沙漠绿洲", en: "Desert Oasis" },
      tagline: {
        zh: "水比金子贵",
        en: "Water is worth more than gold",
      },
      author: { zh: "官方 · 沙漠绿洲", en: "Official · Desert" },
      tags: ["desert", "caravan"],
    },
    {
      id: "night-market",
      image: "assets/scenes/gallery/night-market.jpg",
      worldImage: "assets/scenes/worlds/night-market.jpg",
      name: { zh: "灯会夜市", en: "Night Festival" },
      tagline: {
        zh: "灯笼把夜色照暖",
        en: "Lanterns warm the night",
      },
      author: { zh: "官方 · 夜市灯会", en: "Official · Night" },
      tags: ["night", "festival"],
    },
    {
      id: "river-dock",
      image: "assets/scenes/gallery/river-dock.jpg",
      worldImage: "assets/scenes/worlds/river-dock.jpg",
      name: { zh: "绿洲河埠", en: "Oasis River Dock" },
      tagline: {
        zh: "河不急，人也不用急",
        en: "The river is not in a hurry",
      },
      author: { zh: "官方 · 河边小景", en: "Official · River" },
      tags: ["classic", "dock"],
    },
    {
      id: "back-hill",
      image: "assets/scenes/gallery/back-hill.jpg",
      worldImage: "assets/scenes/worlds/back-hill.jpg",
      name: { zh: "后山药坡", en: "Back Hill Herbs" },
      tagline: {
        zh: "山路不远，心别太急",
        en: "The path is not long; no need to rush",
      },
      author: { zh: "官方 · 后山", en: "Official · Back Hill" },
      tags: ["classic", "herbs"],
    },
  ];

  function detectSystemLang() {
    try {
      const candidates = [];
      if (Array.isArray(navigator.languages)) candidates.push(...navigator.languages);
      if (navigator.language) candidates.push(navigator.language);
      for (const raw of candidates) {
        const tag = String(raw || "").trim().toLowerCase();
        if (!tag) continue;
        if (tag.startsWith("zh")) return "zh";
        if (tag.startsWith("en")) return "en";
      }
    } catch (_) {
      /* ignore */
    }
    return "en";
  }

  function storedLang() {
    try {
      const v = localStorage.getItem("oasis-landing-lang");
      return v === "zh" || v === "en" ? v : null;
    } catch (_) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem("oasis-landing-lang", lang);
    } catch (_) {
      /* ignore */
    }
  }

  function t(lang, key) {
    const pack = dict[lang] || dict.en;
    return pack[key] != null ? pack[key] : (dict.en[key] != null ? dict.en[key] : key);
  }

  function localeText(lang, pair) {
    if (!pair) return "";
    return pair[lang] != null ? pair[lang] : pair.en || "";
  }

  global.OasisI18n = {
    dict,
    scenes,
    detectSystemLang,
    storedLang,
    storeLang,
    t,
    localeText,
  };
})(window);
