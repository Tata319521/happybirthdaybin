const ASSETS = {
  backgrounds: {
    evening: "assets/backgrounds/bar_evening.png",
    night: "assets/backgrounds/bar_night.png",
    midnight: "assets/backgrounds/bar_night.png",
  },
  characters: {
    me_normal: "assets/characters/3.png",
    me_shy: "assets/characters/1.png",
    me_happy: "assets/characters/2.png",
    birthday_normal: "assets/characters/a11.png",
    birthday_shy: "assets/characters/a22.png",
    birthday_happy: "assets/characters/a11.png",
    bartender: "assets/characters/stand_bartender.svg",
    friend: "assets/characters/stand_friend.svg",
    system: "assets/characters/pet.png",
  },
};

const script = [
  {
    bg: "evening",
    speaker: "旁白",
    text: "傍晚七点，你推开酒吧的门。空气里有柠檬、冰块、爵士乐，还有一点点命运开始胡说八道的味道。",
    sprites: { left: "me_normal" },
  },
  {
    speaker: "我",
    text: "喂喂...!我今天只是路过。绝对不是因为听说她过生日今晚会来。绝对不是。",
    sprites: { left: "me_normal" },
  },
  {
    speaker: "小喜系统",
    text: "检测到玩家撒谎。嘴硬程度极高。",
    sprites: { left: "me_shy", right: "system" },
  },
  {
    speaker: "我",
    text: "放屁！今天我的计划很简单：优雅出现之后，像铜锣湾里面的主角一样自然地聊天，最后给她送上生日祝福。",
    sprites: { left: "me_shy", right: "system" },
  },
  {
    speaker: "旁白",
    text: "下一秒，你看见了吧台边的她。灯光正好落在她肩上。你脑内的优雅计划当场下线。",
    sprites: { left: "me_normal", right: "birthday_normal" },
  },
  {
    bg: "evening",
    speaker: "她",
    text: "嗨..你也在这里？",
    sprites: { left: "me_normal", right: "birthday_normal" },
  },
  {
    speaker: "我",
    text: "啊。对。我……我来酒吧打卫戍协议。",
    sprites: { left: "me_normal", right: "birthday_normal" },
  },
  {
    speaker: "小喜系统",
    text: "搭讪评分0分！。理由：人类目前没有这个社交开场。",
    sprites: { left: "me_shy", center: "system", right: "birthday_normal" },
  },
  {
    speaker: "酒保",
    text: "这位客人，请问要喝点什么？",
    sprites: { center: "me_normal", right: "birthday_normal" },
  },
  {
    speaker: "我",
    text: "给我一杯……看起来很会聊天的饮料。",
    sprites: { center: "me_normal", right: "birthday_normal" },
  },
  {
    speaker: "酒保",
    text: "那可能得加钱。",
    sprites: { center: "me_normal", right: "birthday_normal" },
  },
  {
    speaker: "旁白",
    text: "你决定开始第一次正式搭讪。请选择你的社交方式吧！",
    sprites: { center: "me_shy", right: "birthday_happy" },
    choices: [
      {
        text: "A. 成熟铜锣湾打法：今晚的月色真不错，一起聊聊吗",
        response: [
          {
            speaker: "我",
            text: "今晚的月色真不错，一起聊聊吗？",
            sprites: { left: "me_normal", right: "birthday_shy" },
          },
          {
            speaker: "她",
            text: "嗯...虽然现在还是傍晚。不过，可以。",
            sprites: { left: "me_normal", right: "birthday_happy" },
          },
          {
            speaker: "小喜系统",
            text: "不要学习铜锣湾打法啊！！",
            sprites: { left: "me_shy", center: "system", right: "birthday_happy" },
          },
        ],
      },
      {
        text: "B. 随意rue打法：哈哈，好巧啊你也在。",
        response: [
          {
            speaker: "我",
            text: "哈哈，好巧啊你也在。",
            sprites: { left: "me_normal", right: "birthday_happy" },
          },
          {
            speaker: "她",
            text: "可是你刚刚在门口徘徊了三分钟哎（笑）",
            sprites: { left: "me_normal", right: "birthday_happy" },
          },
          {
            speaker: "小喜系统",
            text: "这绝对是勾引你吧嘻嘻。但你产品be了。",
            sprites: { left: "me_shy", center: "system", right: "birthday_happy" },
          },
        ],
      },
      {
        text: "C. 你知道吗，我一看到你就想吃蛋糕。",
        response: [
          {
            speaker: "我",
            text: "你知道吗，我一看到你就想吃蛋糕。",
            sprites: { left: "me_normal", right: "birthday_normal" },
          },
          {
            speaker: "她",
            text: "为什么？",
            sprites: { left: "me_normal", right: "birthday_normal" },
          },
          {
            speaker: "我",
            text: "啊啊..就觉得应该庆祝一下。",
            sprites: { left: "me_normal", right: "birthday_normal" },
          },
          {
            speaker: "小喜系统",
            text: "小姐姐社交能力为零呀！",
            sprites: { left: "me_shy", center: "system", right: "birthday_shy" },
          },
        ],
      },
    ],
  },
  {
    bg: "night",
    speaker: "旁白",
    text: "窗外彻底暗了下来。酒吧灯光变得更柔和。你决定乘胜追击，或者说，继续丢人。",
    sprites: { left: "me_normal", right: "birthday_normal" },
  },
  {
    speaker: "朋友",
    text: "我路过一下。顺便提醒你，你看起来像一个熟透的西红柿。",
    sprites: { center: "me_shy", right: "birthday_normal" },
  },
  {
    speaker: "我",
    text: "你怎么在这里？！",
    sprites: { center: "me_shy", right: "birthday_normal" },
  },
  {
    speaker: "朋友",
    text: "唉谁不知道你惊天地泣鬼神但安静的像蚊子一样的暗恋呢？（小声）",
    sprites: { center: "me_shy", right: "birthday_normal" },
  },
  {
    speaker: "朋友",
    text: "我跟你说，她今天为了见你，换了三套衣服，还说自己只是随便穿穿。",
    sprites: { center: "me_shy", right: "birthday_normal" },
  },
  {
    speaker: "我",
    text: "我怕是存活不到嘎啦game第二章了。",
    sprites: { center: "me_shy", right: "birthday_happy" },
  },
  {
    speaker: "她",
    text: "三套？",
    sprites: { center: "me_shy", right: "birthday_happy" },
  },
  {
    speaker: "我",
    text: "没...!我品味..很好的！",
    sprites: { center: "me_shy", right: "birthday_happy" },
  },
  {
    speaker: "旁白",
    text: "她笑了。你又开始红温。",
    sprites: { center: "me_shy", right: "birthday_happy" },
  },
  {
    speaker: "小喜系统",
    text: "语言系统即将崩溃。选择你的调情手段吧！",
    sprites: { left: "me_shy", center: "system", right: "birthday_happy" },
    choices: [
      {
        text: "A. 你笑起来很好看。",
        response: [
          {
            speaker: "我",
            text: "你笑起来很好看。",
            sprites: { left: "me_normal", right: "birthday_shy" },
          },
          {
            speaker: "她",
            text: "……谢谢。",
            sprites: { left: "me_normal", right: "birthday_shy" },
          },
          {
            speaker: "小喜系统",
            text: "喔喔...!双方进入短暂害羞状态。",
            sprites: { left: "me_shy", center: "system", right: "birthday_shy" },
          },
        ],
      },
      {
        text: "B. 你的笑容像酒吧灯光，晃得我找不到北。",
        response: [
          {
            speaker: "我",
            text: "你的笑容像酒吧灯光，晃得我找不到北。",
            sprites: { left: "me_normal", right: "birthday_normal" },
          },
          {
            speaker: "她",
            text: "那你现在在哪？",
            sprites: { left: "me_normal", right: "birthday_normal" },
          },
          {
            speaker: "我",
            text: "在你面前。地理位置非常优越。",
            sprites: { left: "me_normal", right: "birthday_happy" },
          },
          {
            speaker: "小喜系统",
            text: "她竟然笑了！！喂喂我的工作怎么没开始就要结束了...",
            sprites: { left: "me_normal", center: "system", right: "birthday_happy" },
          },
        ],
      },
      {
        text: "C. 我没有在看你，我是在...看你背后的空气!",
        response: [
          {
            speaker: "我",
            text: "我没有在看你，我是在...看你背后的空气!",
            sprites: { left: "me_normal", right: "birthday_normal" },
          },
          {
            speaker: "她",
            text: "那空气好看吗？",
            sprites: { left: "me_normal", right: "birthday_normal" },
          },
          {
            speaker: "我",
            text: "好看...不对不对...对的对的...",
            sprites: { left: "me_normal", right: "birthday_happy" },
          },
          {
            speaker: "小喜系统",
            text: "哇这也能聊起来！",
            sprites: { left: "me_normal", center: "system", right: "birthday_happy" },
          },
        ],
      },
    ],
  },
  {
    bg: "night",
    speaker: "她",
    text: "其实……我今天也在想，你会不会来。",
    sprites: { left: "me_normal", right: "birthday_shy" },
  },
  {
    speaker: "我",
    text: "啊？",
    sprites: { left: "me_normal", right: "birthday_shy" },
  },
  {
    speaker: "她",
    text: "我看到你在门口的时候，还以为你要走。结果你一直站在那里。",
    sprites: { left: "me_normal", right: "birthday_shy" },
  },
  {
    speaker: "我",
    text: "那是因为我在组织语言。",
    sprites: { left: "me_normal", right: "birthday_shy" },
  },
  {
    speaker: "她",
    text: "组织出来了吗？",
    sprites: { left: "me_normal", right: "birthday_shy" },
  },
  {
    speaker: "我",
    text: "目前组织出了：生日快乐。还有……我很喜欢你。",
    sprites: { left: "me_normal", right: "birthday_happy" },
  },
  {
    bg: "midnight",
    speaker: "旁白",
    text: "酒吧突然安静了一秒。也可能没有安静，只是你紧张到听不见别的声音。",
    sprites: { left: "me_normal", right: "birthday_happy" },
  },
  {
    speaker: "她",
    text: "那我也组织一下语言。",
    sprites: { left: "me_normal", right: "birthday_happy" },
  },
  {
    speaker: "她",
    text: "谢谢你的生日祝福。还有……我也喜欢你。其实比你以为的更早一点。",
    sprites: { left: "me_normal", right: "birthday_happy" },
  },
  {
    speaker: "小喜系统",
    text: "我超我说你俩相互暗恋派我来干啥。",
    sprites: { left: "me_shy", center: "system", right: "birthday_happy" },
  },
  {
    speaker: "我",
    text: "所以，我刚刚那些离谱的话……",
    sprites: { left: "me_shy", right: "birthday_shy" },
  },
  {
    speaker: "她",
    text: "都听到了。并且，我决定以后慢慢嘲笑你。",
    sprites: { left: "me_shy", right: "birthday_shy" },
  },
  {
    speaker: "我",
    text: "可以。只要是以后。",
    sprites: { left: "me_happy", right: "birthday_happy" },
  },
  {
    speaker: "旁白",
    text: "你们碰了碰杯。窗外的夜色刚好，酒吧的灯刚好，连拙劣的搭讪也刚好。",
    sprites: { left: "me_happy", right: "birthday_happy" },
  },
  {
    speaker: "旁白",
    text: "恭喜这对旧人",
    sprites: { left: "me_happy", right: "birthday_happy" },
    ending: true,
  },
];

const elements = {
  startScreen: document.querySelector("#start-screen"),
  gameScreen: document.querySelector("#game-screen"),
  endingScreen: document.querySelector("#ending-screen"),
  startBtn: document.querySelector("#start-btn"),
  againBtn: document.querySelector("#again-btn"),
  bg: document.querySelector("#bg"),
  nameplate: document.querySelector("#nameplate"),
  text: document.querySelector("#dialogue-text"),
  choiceBox: document.querySelector("#choice-box"),
  continueTip: document.querySelector("#continue-tip"),
  saveBtn: document.querySelector("#save-btn"),
  loadBtn: document.querySelector("#load-btn"),
  resetBtn: document.querySelector("#reset-btn"),
  chars: {
    left: document.querySelector("#char-left"),
    center: document.querySelector("#char-center"),
    right: document.querySelector("#char-right"),
  },
};

let currentIndex = 0;
let injectedSteps = [];
let typingTimer = null;
let isTyping = false;
let fullText = "";

function showScreen(screen) {
  [elements.startScreen, elements.gameScreen, elements.endingScreen].forEach((item) => {
    item.classList.remove("active");
  });
  screen.classList.add("active");
}

function getCurrentStep() {
  return injectedSteps.length > 0 ? injectedSteps.shift() : script[currentIndex];
}

function showStep(step) {
  if (!step) {
    showEnding();
    return;
  }

  if (step.ending) {
    showEnding();
    return;
  }

  if (step.bg && ASSETS.backgrounds[step.bg]) {
    elements.bg.src = ASSETS.backgrounds[step.bg];
  }

  updateSprites(step.sprites || {});
  elements.nameplate.textContent = step.speaker || "旁白";
  elements.choiceBox.innerHTML = "";
  elements.choiceBox.classList.add("hidden");
  elements.continueTip.classList.toggle("hidden", Boolean(step.choices));

  typeText(step.text || "", () => {
    if (step.choices) showChoices(step.choices);
  });
}

function updateSprites(sprites) {
  Object.keys(elements.chars).forEach((position) => {
    const img = elements.chars[position];
    const charKey = sprites[position];

    if (!charKey) {
      img.classList.add("hidden");
      img.removeAttribute("src");
      return;
    }

    img.src = ASSETS.characters[charKey];
    img.classList.remove("hidden");
  });

  // 当前说话者简易高亮。这里用角色名粗略判断，不想要可以删除这一段。
  Object.values(elements.chars).forEach((img) => img.classList.remove("dim"));
}

function typeText(text, done) {
  clearInterval(typingTimer);
  isTyping = true;
  fullText = text;
  elements.text.textContent = "";

  let i = 0;
  typingTimer = setInterval(() => {
    elements.text.textContent += text[i] || "";
    i += 1;

    if (i >= text.length) {
      clearInterval(typingTimer);
      isTyping = false;
      if (done) done();
    }
  }, 28);
}

function skipTyping() {
  clearInterval(typingTimer);
  elements.text.textContent = fullText;
  isTyping = false;
}

function showChoices(choices) {
  elements.choiceBox.classList.remove("hidden");
  elements.continueTip.classList.add("hidden");

  choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      injectedSteps = [...choice.response];
      currentIndex += 1;
      elements.choiceBox.innerHTML = "";
      elements.choiceBox.classList.add("hidden");
      nextStep();
    });
    elements.choiceBox.appendChild(btn);
  });
}

function nextStep() {
  if (isTyping) {
    skipTyping();
    return;
  }

  const step = getCurrentStep();
  if (injectedSteps.length === 0 && step === script[currentIndex]) {
    showStep(step);
    currentIndex += 1;
  } else {
    showStep(step);
  }
}

function startGame() {
  currentIndex = 0;
  injectedSteps = [];
  showScreen(elements.gameScreen);
  nextStep();
}

function showEnding() {
  showScreen(elements.endingScreen);
}

function saveGame() {
  const data = {
    currentIndex,
  };
  localStorage.setItem("birthday_otome_save", JSON.stringify(data));
  toast("已保存当前进度。");
}

function loadGame() {
  const raw = localStorage.getItem("birthday_otome_save");
  if (!raw) {
    toast("还没有存档。");
    return;
  }

  const data = JSON.parse(raw);
  currentIndex = Number(data.currentIndex) || 0;
  injectedSteps = [];
  showScreen(elements.gameScreen);
  nextStep();
}

function resetGame() {
  localStorage.removeItem("birthday_otome_save");
  startGame();
}

function toast(message) {
  const oldToast = document.querySelector(".toast");
  if (oldToast) oldToast.remove();

  const div = document.createElement("div");
  div.className = "toast";
  div.textContent = message;
  Object.assign(div.style, {
    position: "fixed",
    left: "50%",
    top: "24px",
    transform: "translateX(-50%)",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(255, 244, 223, 0.92)",
    color: "#352234",
    fontWeight: "700",
    zIndex: "999",
    boxShadow: "0 10px 26px rgba(0,0,0,0.22)",
  });
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 1600);
}

elements.startBtn.addEventListener("click", startGame);
elements.againBtn.addEventListener("click", startGame);
elements.gameScreen.addEventListener("click", () => {
  if (!elements.choiceBox.classList.contains("hidden")) return;
  nextStep();
});

elements.saveBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  saveGame();
});
elements.loadBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  loadGame();
});
elements.resetBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  resetGame();
});

document.addEventListener("keydown", (event) => {
  if (elements.gameScreen.classList.contains("active")) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      if (!elements.choiceBox.classList.contains("hidden")) return;
      nextStep();
    }
  }
});
