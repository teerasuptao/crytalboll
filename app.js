const zodiacSigns = [
  { id: "aries", name: "เมษ", symbol: "♈", dates: "21 มี.ค. - 19 เม.ย.", element: "ไฟ", quality: "เริ่มต้นเร็ว กล้าตัดสินใจ", ruler: "Mars" },
  { id: "taurus", name: "พฤษภ", symbol: "♉", dates: "20 เม.ย. - 20 พ.ค.", element: "ดิน", quality: "มั่นคง อดทน รักความชัดเจน", ruler: "Venus" },
  { id: "gemini", name: "เมถุน", symbol: "♊", dates: "21 พ.ค. - 20 มิ.ย.", element: "ลม", quality: "สื่อสารเก่ง ปรับตัวไว", ruler: "Mercury" },
  { id: "cancer", name: "กรกฎ", symbol: "♋", dates: "21 มิ.ย. - 22 ก.ค.", element: "น้ำ", quality: "ลึกซึ้ง ใส่ใจบ้านและความรู้สึก", ruler: "Moon" },
  { id: "leo", name: "สิงห์", symbol: "♌", dates: "23 ก.ค. - 22 ส.ค.", element: "ไฟ", quality: "โดดเด่น สร้างแรงบันดาลใจ", ruler: "Sun" },
  { id: "virgo", name: "กันย์", symbol: "♍", dates: "23 ส.ค. - 22 ก.ย.", element: "ดิน", quality: "ละเอียด เป็นระบบ เห็นจุดแก้ไข", ruler: "Mercury" },
  { id: "libra", name: "ตุลย์", symbol: "♎", dates: "23 ก.ย. - 22 ต.ค.", element: "ลม", quality: "ประนีประนอม รสนิยมดี", ruler: "Venus" },
  { id: "scorpio", name: "พิจิก", symbol: "♏", dates: "23 ต.ค. - 21 พ.ย.", element: "น้ำ", quality: "เข้มข้น มองลึก เปลี่ยนวิกฤตเป็นพลัง", ruler: "Pluto" },
  { id: "sagittarius", name: "ธนู", symbol: "♐", dates: "22 พ.ย. - 21 ธ.ค.", element: "ไฟ", quality: "รักอิสระ มองไกล ชอบเรียนรู้", ruler: "Jupiter" },
  { id: "capricorn", name: "มังกร", symbol: "♑", dates: "22 ธ.ค. - 19 ม.ค.", element: "ดิน", quality: "มีวินัย รับผิดชอบ สร้างผลลัพธ์ระยะยาว", ruler: "Saturn" },
  { id: "aquarius", name: "กุมภ์", symbol: "♒", dates: "20 ม.ค. - 18 ก.พ.", element: "ลม", quality: "คิดใหม่ ชอบอิสระและเครือข่าย", ruler: "Uranus" },
  { id: "pisces", name: "มีน", symbol: "♓", dates: "19 ก.พ. - 20 มี.ค.", element: "น้ำ", quality: "มีจินตนาการ รับรู้อารมณ์คนอื่นไว", ruler: "Neptune" },
];

const chineseZodiac = [
  { animal: "ชวด", icon: "鼠", element: "น้ำ", trait: "ไหวพริบดี มองเห็นช่องทางไว" },
  { animal: "ฉลู", icon: "牛", element: "ดิน", trait: "หนักแน่น อดทน สร้างฐานได้ดี" },
  { animal: "ขาล", icon: "虎", element: "ไม้", trait: "กล้าเริ่ม กล้าปกป้องสิ่งสำคัญ" },
  { animal: "เถาะ", icon: "兔", element: "ไม้", trait: "นุ่มนวล มีเสน่ห์ แก้สถานการณ์ด้วยชั้นเชิง" },
  { animal: "มะโรง", icon: "龍", element: "ดิน", trait: "พลังสูง โดดเด่น เหมาะกับงานใหญ่" },
  { animal: "มะเส็ง", icon: "蛇", element: "ไฟ", trait: "ลึกซึ้ง รอบคอบ อ่านจังหวะคนเก่ง" },
  { animal: "มะเมีย", icon: "馬", element: "ไฟ", trait: "คล่องตัว รักอิสระ เดินหน้าเร็ว" },
  { animal: "มะแม", icon: "羊", element: "ดิน", trait: "สร้างสรรค์ อ่อนโยน แต่ใจแข็งเมื่อจำเป็น" },
  { animal: "วอก", icon: "猴", element: "โลหะ", trait: "ฉลาดพลิกแพลง เรียนรู้ไว" },
  { animal: "ระกา", icon: "雞", element: "โลหะ", trait: "ละเอียด ชัดเจน รู้จักนำเสนอ" },
  { animal: "จอ", icon: "狗", element: "ดิน", trait: "ซื่อสัตย์ ปกป้องทีมและคนรัก" },
  { animal: "กุน", icon: "豬", element: "น้ำ", trait: "ใจกว้าง รับโอกาสดีจากผู้คน" },
];

const tarotDeck = [
  { name: "The Magician", glyph: "I", theme: "การเริ่มลงมือ", image: "assets/tarot/cards/magician.png", meaning: "เครื่องมือที่ต้องใช้มีอยู่แล้ว เหลือเพียงการประกาศเจตนาให้ชัด" },
  { name: "The High Priestess", glyph: "II", theme: "สัญชาตญาณ", image: "assets/tarot/cards/high-priestess.png", meaning: "คำตอบบางส่วนอยู่ในสิ่งที่คุณรู้สึกแต่ยังไม่กล้าพูดออกมา" },
  { name: "The Empress", glyph: "III", theme: "การงอกงาม", image: "assets/tarot/cards/empress.png", meaning: "สิ่งที่ดูแลอย่างต่อเนื่องจะให้ผลตอบแทนเป็นรูปธรรม" },
  { name: "The Emperor", glyph: "IV", theme: "โครงสร้าง", image: "assets/tarot/cards/emperor.png", meaning: "ตั้งกติกาและขอบเขตให้ชัด แล้วพลังจะไม่กระจาย" },
  { name: "The Lovers", glyph: "VI", theme: "ทางเลือกของหัวใจ", image: "assets/tarot/cards/lovers.png", meaning: "การเลือกครั้งนี้ต้องซื่อสัตย์กับคุณค่าของตัวเอง" },
  { name: "The Chariot", glyph: "VII", theme: "แรงขับเคลื่อน", image: "assets/tarot/cards/chariot.png", meaning: "หากจับพลังสองด้านให้ไปทางเดียวกัน คุณจะผ่านด่านยากได้" },
  { name: "Strength", glyph: "VIII", theme: "ความกล้าที่อ่อนโยน", image: "assets/tarot/cards/strength.png", meaning: "ความนุ่มนวลจะมีพลังมากกว่าการฝืนชนตรงๆ" },
  { name: "Wheel of Fortune", glyph: "X", theme: "จังหวะเปลี่ยน", image: "assets/tarot/cards/wheel-of-fortune.png", meaning: "วงล้อกำลังหมุน ให้เตรียมรับโอกาสที่มาแบบไม่คาดคิด" },
  { name: "Justice", glyph: "XI", theme: "ความจริงและสมดุล", image: "assets/tarot/cards/justice.png", meaning: "ข้อมูลจริง เอกสาร และข้อตกลงจะเป็นตัวตัดสิน" },
  { name: "The Star", glyph: "XVII", theme: "ความหวัง", image: "assets/tarot/cards/star.png", meaning: "เป้าหมายระยะไกลยังสว่างอยู่ แม้วันนี้จะเห็นเพียงแสงบางๆ" },
  { name: "The Moon", glyph: "XVIII", theme: "หมอกและความฝัน", image: "assets/tarot/cards/moon.png", meaning: "อย่ารีบเชื่อภาพแรก ตรวจรายละเอียดก่อนตัดสินใจ" },
  { name: "The Sun", glyph: "XIX", theme: "ความสำเร็จที่ชัดเจน", image: "assets/tarot/cards/sun.png", meaning: "เมื่อคุณกล้าเผยงานหรือความรู้สึก ผลตอบรับจะอบอุ่นกว่าที่คิด" },
];

const modeCopy = {
  overview: {
    label: "Full Oracle",
    title: "ภาพรวมกำลังเปิดออก",
    focus: "ภาพรวม",
    advice: "วันนี้เหมาะกับการมองแผนทั้งระบบ แล้วเลือกหนึ่งเรื่องที่ทำให้ชีวิตเคลื่อนไปข้างหน้า",
  },
  love: {
    label: "Heart Oracle",
    title: "หัวใจกำลังเลือกภาษาใหม่",
    focus: "ความรัก",
    advice: "ใช้ความจริงใจนำหน้า แต่เว้นพื้นที่ให้กันและกันตอบสนองตามจังหวะของตัวเอง",
  },
  career: {
    label: "Work Oracle",
    title: "เส้นทางงานกำลังจัดรูป",
    focus: "งาน",
    advice: "งานที่มีโครงสร้างชัดและวัดผลได้จะพาคุณเด่นขึ้นเร็วกว่าไอเดียที่ยังลอยอยู่",
  },
  money: {
    label: "Fortune Coin",
    title: "กระแสเงินเริ่มเผยลายทาง",
    focus: "การเงิน",
    advice: "แยกเงินจำเป็น เงินลงทุน และเงินตามใจออกจากกัน โชคจะทำงานดีขึ้นเมื่อฐานนิ่ง",
  },
};

const adLinks = [
  {
    title: "LongNimit",
    subtitle: "Chinese Feng Shui Oracle",
    url: "https://longnimit.netlify.app/",
    tag: "ดูดวงจีน",
    tone: "jade",
    image: "assets/tarot/cards/star.png",
  },
  {
    title: "VegPOS Pro",
    subtitle: "ระบบจัดการผักและเห็ด",
    url: "https://vegpos-maoxiong.netlify.app/",
    tag: "ธุรกิจ",
    tone: "green",
    image: "assets/ad-images/veg-pos.png",
  },
  {
    title: "Longlai Intertrade",
    subtitle: "Luxury Furniture Solutions",
    url: "https://longlaiintertrade.netlify.app/",
    tag: "เฟอร์นิเจอร์",
    tone: "gold",
    image: "assets/ad-images/longlai-intertrade.png",
  },
  {
    title: "Construction AI OS",
    subtitle: "AI workspace for construction",
    url: "https://constructoraios.netlify.app/",
    tag: "AI Tool",
    tone: "steel",
    image: "assets/ad-images/constructor-ai-os.png",
  },
  {
    title: "QuantumFX Pro",
    subtitle: "AI Trading Intelligence",
    url: "https://quantumfxpro.netlify.app/",
    tag: "Finance",
    tone: "blue",
    image: "assets/ad-images/quantum-fx-pro.png",
  },
  {
    title: "I Think Sole",
    subtitle: "บริการติดโซลรองเท้า",
    url: "https://ithinksolebytao.netlify.app/",
    tag: "Lifestyle",
    tone: "rose",
    image: "assets/ad-images/i-think-sole.png",
  },
  {
    title: "Carever",
    subtitle: "Your Liver Buddy",
    url: "https://carever.netlify.app/",
    tag: "Health",
    tone: "mint",
    image: "assets/ad-images/carever.png",
  },
  {
    title: "Slow Date",
    subtitle: "The Right Soul at the Right Time",
    url: "https://slowdate-application.netlify.app/",
    tag: "Love",
    tone: "pink",
    image: "assets/ad-images/slowdate.png",
  },
  {
    title: "Eat Gourmand",
    subtitle: "ค้นหาร้านอาหารดีๆ ใกล้คุณ",
    url: "https://eatgourmand-application.netlify.app/",
    tag: "Food",
    tone: "amber",
    image: "assets/ad-images/eat-gourmand.png",
  },
  {
    title: "LongNimit Fortune",
    subtitle: "อ่านดวงรายวันและเลขมงคล",
    url: "https://longnimit.netlify.app/#fortune",
    tag: "Fortune",
    tone: "violet",
    image: "assets/tarot/cards/moon.png",
  },
];

const luckyColors = {
  ไฟ: ["ทอง", "แดงทับทิม", "ส้มสุริยะ"],
  ดิน: ["เขียวมะกอก", "ครีม", "น้ำตาลทอง"],
  ลม: ["ฟ้าเงิน", "ขาวมุก", "เหลืองอ่อน"],
  น้ำ: ["คราม", "เงิน", "เขียวทะเล"],
};

const dreamKeywords = [
  { key: "น้ำ", message: "อารมณ์และเงินหมุนเวียน เลขเด่น 2-7" },
  { key: "บ้าน", message: "ครอบครัวและฐานงานกำลังเรียกให้จัดระเบียบ เลขเด่น 4-6" },
  { key: "เดินทาง", message: "โอกาสใหม่มาจากคนไกลหรือช่องทางออนไลน์ เลขเด่น 3-9" },
  { key: "แสง", message: "ข่าวดีหรือการเปิดเผยความจริง เลขเด่น 1-8" },
];

const moonRhythms = [
  { phase: "New Moon", tone: "เริ่มต้น", guidance: "เหมาะกับการตั้งเจตนาใหม่ ล้างสิ่งค้างใจ และเริ่มโปรเจกต์เล็กๆ" },
  { phase: "Waxing Moon", tone: "ขยายตัว", guidance: "เหมาะกับการนัดหมาย เจรจา เปิดตัว หรือเพิ่มแรงส่งให้สิ่งที่เริ่มไว้" },
  { phase: "Full Moon", tone: "เปิดเผย", guidance: "เหมาะกับการสรุปผล พูดความจริง และมองเห็นคำตอบที่เคยคลุมเครือ" },
  { phase: "Waning Moon", tone: "ปล่อยวาง", guidance: "เหมาะกับการตัดสิ่งรบกวน ปรับแผน และคืนพลังให้ตัวเอง" },
];

const rituals = {
  ไฟ: "จุดเทียนหรือเปิดไฟอุ่นๆ 9 นาที แล้วเขียนสิ่งที่อยากเริ่มให้ชัดหนึ่งข้อ",
  ดิน: "จัดโต๊ะหรือกระเป๋าเงินให้เรียบร้อย แล้วเลือกหนึ่งงานที่ทำให้เสร็จได้ทันที",
  ลม: "เขียนข้อความสำคัญแบบสั้น ชัด และส่งในเวลาที่ใจนิ่ง",
  น้ำ: "ดื่มน้ำช้าๆ ตั้งใจปล่อยความกังวล แล้วฟังความรู้สึกแรกที่ผุดขึ้นมา",
};

const yesNoOracle = [
  "ใช่ แต่ต้องเริ่มจากก้าวเล็กและหลักฐานจริง",
  "ยังไม่ใช่ตอนนี้ รอข้อมูลอีกหนึ่งชิ้นก่อน",
  "มีแนวโน้มดี ถ้าคุณตั้งขอบเขตให้ชัด",
  "คำตอบอยู่ที่การพูดตรงๆ กับคนที่เกี่ยวข้อง",
  "เปิดทางได้ แต่ควรลดความคาดหวังที่เกินจริง",
];

const oracleGameData = {
  th: {
    crystals: [
      ["✦", "คริสตัลแสงทอง", "วันนี้เด่นเรื่องการเริ่มสิ่งที่เลื่อนมานาน เลือกงานหนึ่งอย่างแล้วทำให้จบก่อนพระอาทิตย์ตก"],
      ["◆", "คริสตัลหยก", "โชคมาจากการจัดระเบียบของเดิม ล้าง inbox หรือโต๊ะทำงานแล้วจะเห็นทางออก"],
      ["☾", "คริสตัลจันทร์", "คำตอบมาจากความรู้สึกแรก อย่ารีบปฏิเสธสัญชาตญาณของตัวเอง"],
    ],
    wheel: [
      ["+18%", "แรงส่งเพิ่ม", "เหมาะกับการส่งข้อความ นัดหมาย หรือเปิดตัวสิ่งที่เตรียมไว้"],
      ["2 ทาง", "ทางเลือกใหม่", "มีสองเส้นทางให้เลือก ให้เลือกทางที่ทำให้ใจโล่งกว่า"],
      ["7 วัน", "จังหวะรอผล", "เรื่องสำคัญอาจชัดขึ้นในหนึ่งสัปดาห์ อย่าเร่งจนเสียรูปเกม"],
    ],
    quests: [
      ["เขียน 3 บรรทัด", "จดสิ่งที่อยากให้เกิดขึ้น แล้วเลือกหนึ่งข้อที่เริ่มได้วันนี้"],
      ["ส่งหนึ่งข้อความ", "ทักคนที่เกี่ยวข้องกับโอกาสใหม่ด้วยประโยคที่ชัดและสุภาพ"],
      ["ปิดหนึ่งงานค้าง", "เคลียร์งานเล็กที่ค้างอยู่ จะเปิดพื้นที่ให้โชคใหม่เข้ามา"],
    ],
  },
  en: {
    crystals: [
      ["✦", "Golden crystal", "Today favors starting something you have postponed. Choose one task and finish it before sunset."],
      ["◆", "Jade crystal", "Luck comes from organizing what you already have. Clear your inbox or desk and a path will appear."],
      ["☾", "Moon crystal", "The answer comes from your first feeling. Do not dismiss your intuition too quickly."],
    ],
    wheel: [
      ["+18%", "Momentum rises", "Good for sending a message, booking a meeting, or launching something prepared."],
      ["2 paths", "New choice", "Two routes are opening. Choose the one that makes your body feel lighter."],
      ["7 days", "Wait for timing", "An important matter may become clearer within a week. Do not rush the shape of it."],
    ],
    quests: [
      ["Write 3 lines", "Write what you want to happen, then pick one item you can begin today."],
      ["Send one message", "Contact someone connected to a new opportunity with one clear, kind sentence."],
      ["Close one loop", "Finish a small pending task. It will make room for new luck."],
    ],
  },
  zh: {
    crystals: [
      ["✦", "金光水晶", "今天适合开始拖延已久的事。选一件事，在日落前完成。"],
      ["◆", "翡翠水晶", "好运来自整理旧有资源。清空收件箱或桌面，出口会出现。"],
      ["☾", "月光水晶", "答案来自第一直觉，不要太快否定自己的感受。"],
    ],
    wheel: [
      ["+18%", "动力上升", "适合发送讯息、安排会面，或推出准备好的事情。"],
      ["2 条路", "新的选择", "两条路正在打开，选择让身体感觉更轻松的那一条。"],
      ["7 天", "等待时机", "重要事情可能在一周内更清楚，不要急着破坏节奏。"],
    ],
    quests: [
      ["写 3 行", "写下你想发生的事，然后选一件今天就能开始的。"],
      ["发一条讯息", "用清楚温和的一句话，联系与新机会有关的人。"],
      ["完成一件小事", "清掉一个待办的小尾巴，会为新的好运腾出空间。"],
    ],
  },
};

const i18n = {
  th: {
    hero: {
      kicker: "Fortune Teller",
      subtitle: "เลือกราศี ปีเกิด และเปิดไพ่ทาโร่ ให้ลูกแก้วประกอบคำทำนายจากข้อมูลพื้นฐานจริงของจักรราศีและนักษัตรจีน",
    },
    inputs: { birthDate: "วันเกิด", zodiac: "ราศี", birthYear: "ปีเกิด" },
    facts: { zodiac: "ราศี", element: "ธาตุ", chinese: "นักษัตรจีน" },
    modes: { overview: "ภาพรวม", love: "ความรัก", career: "งาน", money: "เงิน" },
    actions: { read: "ทำนายจากลูกแก้ว", save: "เก็บคำทำนาย", saved: "เก็บแล้ว", shuffle: "สับไพ่" },
    fortune: {
      initialTitle: "ลูกแก้วรอข้อมูลของคุณ",
      initialText: "เลือกวันเกิด ปีเกิด หรือกดเปิดไพ่ แล้วรับคำทำนายที่รวมราศี นักษัตรจีน และทาโร่เข้าด้วยกัน",
      loadingTitle: "ลูกแก้วกำลังเชื่อมราศี ปีเกิด และไพ่",
      loadingText: "แสงในลูกแก้วกำลังเรียงข้อมูลเป็นคำทำนาย",
      reading: "Reading...",
    },
    tools: {
      kicker: "Oracle Tools",
      title: "เครื่องมือดูดวงเสริม",
      subtitle: "อ่านพลังวันนี้แบบละเอียดขึ้นจากราศี ปีเกิด ไพ่ทาโร่ และจังหวะประจำวัน",
    },
    games: {
      kicker: "Oracle Games",
      title: "เกมคำทำนาย",
      play: "เล่นอีกครั้ง",
      crystalPick: "เลือกคริสตัล",
      fateWheel: "หมุนวงล้อโชค",
      quest: "ภารกิจวันนี้",
      default: "กดเล่นเพื่อเปิดผลทำนายชุดใหม่",
    },
    sponsors: {
      kicker: "Sponsors",
      title: "พื้นที่ผู้สนับสนุน",
      subtitle: "รวมลิงก์แนะนำแบบเป็นหมวดหมู่ ไม่รบกวนการอ่านคำทำนาย",
      open: "เปิดดูเว็บไซต์",
    },
    tarotPositions: ["อดีต", "ปัจจุบัน", "คำแนะนำ"],
    readingLabels: {
      western: "ราศีตะวันตก",
      quality: "ลักษณะเด่น",
      chinese: "นักษัตรจีน",
      tarot: "ไพ่ทาโร่",
      tarotNote: "อ่านแบบ 3 ใบ: อดีต / ปัจจุบัน / คำแนะนำ",
    },
    modeCopy,
  },
  en: {
    hero: {
      kicker: "Fortune Teller",
      subtitle: "Choose your zodiac sign, birth year, and tarot spread. The crystal blends western astrology, Chinese zodiac, and cards into one reading.",
    },
    inputs: { birthDate: "Birth date", zodiac: "Zodiac", birthYear: "Birth year" },
    facts: { zodiac: "Zodiac", element: "Element", chinese: "Chinese zodiac" },
    modes: { overview: "Overview", love: "Love", career: "Career", money: "Money" },
    actions: { read: "Read the crystal", save: "Save reading", saved: "Saved", shuffle: "Shuffle" },
    fortune: {
      initialTitle: "The crystal is waiting",
      initialText: "Choose your birthday, birth year, or cards to receive a reading that combines zodiac, Chinese astrology, and tarot.",
      loadingTitle: "The crystal is linking your sign, year, and cards",
      loadingText: "The light inside the crystal is shaping your reading",
      reading: "Reading...",
    },
    tools: {
      kicker: "Oracle Tools",
      title: "Extra oracle tools",
      subtitle: "Explore today's energy through your sign, birth year, tarot cards, and daily rhythm.",
    },
    games: {
      kicker: "Oracle Games",
      title: "Fortune games",
      play: "Play again",
      crystalPick: "Pick a crystal",
      fateWheel: "Spin the wheel",
      quest: "Today's quest",
      default: "Play to reveal a fresh mini-reading",
    },
    sponsors: {
      kicker: "Sponsors",
      title: "Sponsor space",
      subtitle: "Curated links grouped neatly without interrupting your reading.",
      open: "Open website",
    },
    tarotPositions: ["Past", "Present", "Advice"],
    readingLabels: {
      western: "Western sign",
      quality: "Core trait",
      chinese: "Chinese zodiac",
      tarot: "Tarot cards",
      tarotNote: "Three-card spread: Past / Present / Advice",
    },
    modeCopy: {
      overview: {
        label: "Full Oracle",
        title: "The whole picture is opening",
        focus: "overall energy",
        advice: "Step back, review the full plan, then choose one action that moves your life forward.",
      },
      love: {
        label: "Heart Oracle",
        title: "The heart is learning a new language",
        focus: "love",
        advice: "Lead with honesty, while leaving enough space for the other person to respond in their own rhythm.",
      },
      career: {
        label: "Work Oracle",
        title: "Your work path is taking shape",
        focus: "career",
        advice: "Clear structure and measurable work will lift you faster than ideas that are still floating.",
      },
      money: {
        label: "Fortune Coin",
        title: "The money current is revealing its path",
        focus: "money",
        advice: "Separate essentials, investment, and personal spending. Luck works better when your base is stable.",
      },
    },
  },
  zh: {
    hero: {
      kicker: "占卜师",
      subtitle: "选择星座、出生年份并抽取塔罗牌，让水晶球结合西方星座、生肖与牌意给出指引。",
    },
    inputs: { birthDate: "生日", zodiac: "星座", birthYear: "出生年份" },
    facts: { zodiac: "星座", element: "元素", chinese: "生肖" },
    modes: { overview: "总览", love: "爱情", career: "事业", money: "财运" },
    actions: { read: "水晶占卜", save: "保存解读", saved: "已保存", shuffle: "洗牌" },
    fortune: {
      initialTitle: "水晶球正在等待",
      initialText: "选择生日、出生年份或塔罗牌，获得结合星座、生肖与塔罗的解读。",
      loadingTitle: "水晶球正在连接星座、年份与牌阵",
      loadingText: "水晶中的光正在整理成你的占卜讯息",
      reading: "解读中...",
    },
    tools: {
      kicker: "占卜工具",
      title: "进阶占卜工具",
      subtitle: "从星座、出生年份、塔罗牌与今日节奏中读取更细致的能量。",
    },
    games: {
      kicker: "占卜游戏",
      title: "命运小游戏",
      play: "再玩一次",
      crystalPick: "选择水晶",
      fateWheel: "转动命运轮",
      quest: "今日任务",
      default: "点击开始，揭开新的小占卜",
    },
    sponsors: {
      kicker: "赞助",
      title: "赞助专区",
      subtitle: "分类整理的推荐链接，不打断你的占卜体验。",
      open: "打开网站",
    },
    tarotPositions: ["过去", "现在", "建议"],
    readingLabels: {
      western: "西方星座",
      quality: "核心特质",
      chinese: "生肖",
      tarot: "塔罗牌",
      tarotNote: "三张牌阵：过去 / 现在 / 建议",
    },
    modeCopy: {
      overview: {
        label: "完整占卜",
        title: "整体图像正在展开",
        focus: "整体能量",
        advice: "适合退一步看全局，然后选择一件真正推动生活前进的事。",
      },
      love: {
        label: "心之占卜",
        title: "内心正在学习新的语言",
        focus: "爱情",
        advice: "以真诚开场，也给对方足够空间按自己的节奏回应。",
      },
      career: {
        label: "事业占卜",
        title: "工作道路正在成形",
        focus: "事业",
        advice: "清晰结构和可衡量成果，会比仍然飘着的想法更快带你出头。",
      },
      money: {
        label: "财富硬币",
        title: "金钱流向正在显现",
        focus: "财运",
        advice: "把必要支出、投资与随心消费分开。基础稳定时，好运更容易发挥。",
      },
    },
  },
};

const zodiacTranslations = {
  aries: { en: ["Aries", "Fire", "Fast-starting, brave, decisive"], zh: ["白羊座", "火", "行动快、勇敢、果断"] },
  taurus: { en: ["Taurus", "Earth", "Stable, patient, values clarity"], zh: ["金牛座", "土", "稳定、耐心、重视清晰"] },
  gemini: { en: ["Gemini", "Air", "Communicative and adaptable"], zh: ["双子座", "风", "善于沟通、适应力强"] },
  cancer: { en: ["Cancer", "Water", "Deep, caring, home-centered"], zh: ["巨蟹座", "水", "细腻、关怀、重视家庭"] },
  leo: { en: ["Leo", "Fire", "Radiant and inspiring"], zh: ["狮子座", "火", "耀眼、有感染力"] },
  virgo: { en: ["Virgo", "Earth", "Detailed, systematic, improvement-focused"], zh: ["处女座", "土", "细致、有系统、善于改进"] },
  libra: { en: ["Libra", "Air", "Balanced, tasteful, diplomatic"], zh: ["天秤座", "风", "平衡、有品味、善协调"] },
  scorpio: { en: ["Scorpio", "Water", "Intense, perceptive, transformative"], zh: ["天蝎座", "水", "深刻、敏锐、能转化危机"] },
  sagittarius: { en: ["Sagittarius", "Fire", "Free-spirited, broad-minded, curious"], zh: ["射手座", "火", "自由、开阔、爱学习"] },
  capricorn: { en: ["Capricorn", "Earth", "Disciplined, responsible, long-term builder"], zh: ["摩羯座", "土", "自律、负责、擅长长期建设"] },
  aquarius: { en: ["Aquarius", "Air", "Inventive, independent, network-minded"], zh: ["水瓶座", "风", "创新、独立、重视连接"] },
  pisces: { en: ["Pisces", "Water", "Imaginative and emotionally receptive"], zh: ["双鱼座", "水", "有想象力、情感敏锐"] },
};

const animalTranslations = {
  ชวด: { en: ["Rat", "Water", "quick-witted and good at spotting openings"], zh: ["鼠", "水", "机智，善于发现机会"] },
  ฉลู: { en: ["Ox", "Earth", "steady, patient, and good at building foundations"], zh: ["牛", "土", "稳重、有耐心，适合打基础"] },
  ขาล: { en: ["Tiger", "Wood", "brave, protective, and ready to begin"], zh: ["虎", "木", "勇敢，愿意开始并守护重要之事"] },
  เถาะ: { en: ["Rabbit", "Wood", "gentle, charming, and tactful"], zh: ["兔", "木", "温和、有魅力，善用策略化解局面"] },
  มะโรง: { en: ["Dragon", "Earth", "high-energy, visible, and suited for big work"], zh: ["龙", "土", "能量强、显眼，适合做大事"] },
  มะเส็ง: { en: ["Snake", "Fire", "deep, careful, and good at reading timing"], zh: ["蛇", "火", "深思熟虑，善于判断时机"] },
  มะเมีย: { en: ["Horse", "Fire", "mobile, freedom-loving, and fast-moving"], zh: ["马", "火", "灵活、爱自由、推进速度快"] },
  มะแม: { en: ["Goat", "Earth", "creative, gentle, and quietly firm"], zh: ["羊", "土", "有创造力、温柔，必要时很坚定"] },
  วอก: { en: ["Monkey", "Metal", "clever, flexible, and quick to learn"], zh: ["猴", "金", "聪明灵活，学习很快"] },
  ระกา: { en: ["Rooster", "Metal", "precise, clear, and presentation-minded"], zh: ["鸡", "金", "细致清晰，懂得表达"] },
  จอ: { en: ["Dog", "Earth", "loyal and protective of team and loved ones"], zh: ["狗", "土", "忠诚，守护团队和所爱之人"] },
  กุน: { en: ["Pig", "Water", "generous and helped by people-based luck"], zh: ["猪", "水", "宽厚，容易得到人缘带来的机会"] },
};

const tarotTranslations = {
  "The Magician": { en: ["Action begins", "You already have the tools. Clarify your intention and begin."], zh: ["开始行动", "需要的工具已经在手中，只差把意图说清楚并开始。"] },
  "The High Priestess": { en: ["Intuition", "Part of the answer lives in what you feel but have not said yet."], zh: ["直觉", "答案的一部分藏在你感受到却还没说出口的地方。"] },
  "The Empress": { en: ["Growth", "What you nurture consistently will become tangible."], zh: ["成长", "持续照顾的事物会慢慢结出实际成果。"] },
  "The Emperor": { en: ["Structure", "Set clear rules and boundaries so your energy does not scatter."], zh: ["结构", "设定清楚规则与边界，能量才不会分散。"] },
  "The Lovers": { en: ["Heart choice", "This choice asks you to be honest with your values."], zh: ["内心选择", "这次选择需要你忠于自己的价值。"] },
  "The Chariot": { en: ["Momentum", "Align two opposing forces and you can pass a difficult gate."], zh: ["推进力", "把两股力量带向同一方向，就能越过难关。"] },
  Strength: { en: ["Gentle courage", "Softness may be stronger than forcing your way through."], zh: ["温柔的勇气", "柔和有时比硬碰硬更有力量。"] },
  "Wheel of Fortune": { en: ["Turning point", "The wheel is moving. Be ready for an unexpected opening."], zh: ["转折", "命运之轮正在转动，准备迎接意外机会。"] },
  Justice: { en: ["Truth and balance", "Facts, documents, and agreements will decide the outcome."], zh: ["真实与平衡", "真实资料、文件和约定会成为关键。"] },
  "The Star": { en: ["Hope", "Your long-term goal still shines, even if the light is faint today."], zh: ["希望", "长远目标仍在发光，即使今天只看见微光。"] },
  "The Moon": { en: ["Mist and dreams", "Do not trust the first image. Check details before deciding."], zh: ["迷雾与梦", "不要急着相信第一眼的画面，决定前先查细节。"] },
  "The Sun": { en: ["Clear success", "When you reveal your work or feelings, the response may be warmer than expected."], zh: ["清晰成功", "当你公开作品或感受时，回应可能比想象更温暖。"] },
};

const extraTranslations = {
  colors: {
    ทอง: { en: "Gold", zh: "金色" },
    แดงทับทิม: { en: "Ruby red", zh: "红宝石色" },
    ส้มสุริยะ: { en: "Solar orange", zh: "太阳橙" },
    เขียวมะกอก: { en: "Olive green", zh: "橄榄绿" },
    ครีม: { en: "Cream", zh: "奶油色" },
    น้ำตาลทอง: { en: "Golden brown", zh: "金棕色" },
    ฟ้าเงิน: { en: "Silver blue", zh: "银蓝色" },
    ขาวมุก: { en: "Pearl white", zh: "珍珠白" },
    เหลืองอ่อน: { en: "Soft yellow", zh: "浅黄色" },
    คราม: { en: "Indigo", zh: "靛蓝色" },
    เงิน: { en: "Silver", zh: "银色" },
    เขียวทะเล: { en: "Sea green", zh: "海绿色" },
  },
  dreams: [
    { en: ["water", "Emotions and money are circulating. Lucky digits: 2-7"], zh: ["水", "情绪与金钱正在流动。幸运数字：2-7"] },
    { en: ["home", "Family and work foundations are asking for order. Lucky digits: 4-6"], zh: ["房子", "家庭与工作基础需要整理。幸运数字：4-6"] },
    { en: ["travel", "New chances arrive through distance or online channels. Lucky digits: 3-9"], zh: ["旅行", "新机会来自远方或线上渠道。幸运数字：3-9"] },
    { en: ["light", "Good news or truth may be revealed. Lucky digits: 1-8"], zh: ["光", "好消息或真相即将显现。幸运数字：1-8"] },
  ],
  moons: {
    "New Moon": { en: ["new beginning", "Good for setting intentions, clearing old feelings, and starting a small project."], zh: ["新开始", "适合设定意图、清理旧情绪并启动小项目。"] },
    "Waxing Moon": { en: ["growth", "Good for meetings, launches, negotiation, and adding momentum."], zh: ["扩张", "适合会面、发布、谈判并增加推动力。"] },
    "Full Moon": { en: ["revelation", "Good for conclusions, honest talks, and seeing answers that were unclear."], zh: ["显现", "适合总结、说出真相，并看见曾经模糊的答案。"] },
    "Waning Moon": { en: ["release", "Good for cutting distractions, adjusting plans, and restoring energy."], zh: ["释放", "适合减少干扰、调整计划并恢复能量。"] },
  },
  rituals: {
    ไฟ: { en: "Light a candle or warm lamp for 9 minutes, then write one thing you want to begin.", zh: "点蜡烛或暖灯 9 分钟，然后写下一件你想开始的事。" },
    ดิน: { en: "Tidy your desk or wallet, then finish one practical task immediately.", zh: "整理桌面或钱包，然后立刻完成一件实际的小事。" },
    ลม: { en: "Write one important message clearly and send it when your mind is calm.", zh: "把重要讯息写得简短清楚，在心定时发送。" },
    น้ำ: { en: "Drink water slowly, release one worry, and listen to the first feeling that appears.", zh: "慢慢喝水，放下一件担心，并听见第一个浮现的感受。" },
  },
  yesNo: [
    { en: "Yes, but begin with a small step and real evidence", zh: "可以，但要从小步骤和真实证据开始" },
    { en: "Not yet. Wait for one more piece of information", zh: "现在还不是时候，再等一个关键信息" },
    { en: "The trend is positive if you set clear boundaries", zh: "趋势不错，但要先设清楚边界" },
    { en: "The answer comes from speaking directly with the people involved", zh: "答案来自和相关的人直接沟通" },
    { en: "The door can open, but reduce unrealistic expectations", zh: "可以打开机会，但要降低不现实的期待" },
  ],
};

let currentLang = localStorage.getItem("crystalLanguage") || "th";

const canvas = document.querySelector("#aura");
const ctx = canvas.getContext("2d");
const crystalButton = document.querySelector("#crystalButton");
const crystalVision = document.querySelector("#crystalVision");
const readButton = document.querySelector("#readButton");
const saveButton = document.querySelector("#saveButton");
const shuffleButton = document.querySelector("#shuffleButton");
const fortuneCard = document.querySelector("#fortuneCard");
const cardLabel = document.querySelector("#cardLabel");
const fortuneTitle = document.querySelector("#fortuneTitle");
const fortuneText = document.querySelector("#fortuneText");
const detailGrid = document.querySelector("#detailGrid");
const birthDate = document.querySelector("#birthDate");
const birthYear = document.querySelector("#birthYear");
const zodiacSelect = document.querySelector("#zodiacSelect");
const zodiacFact = document.querySelector("#zodiacFact");
const elementFact = document.querySelector("#elementFact");
const chineseFact = document.querySelector("#chineseFact");
const tarotSpread = document.querySelector("#tarotSpread");
const miniOracleGrid = document.querySelector("#miniOracleGrid");
const oracleTools = document.querySelector("#oracleTools");
const oracleGames = document.querySelector("#oracleGames");
const adBoard = document.querySelector("#adBoard");
const tabs = [...document.querySelectorAll(".mode-tab")];
const languageButtons = [...document.querySelectorAll(".language-button")];

let width = 0;
let height = 0;
let activeMode = "overview";
let pointer = { x: 0.5, y: 0.45 };
let particles = [];
let savedFortunes = [];
let selectedTarot = [];
let gameState = {
  crystal: 0,
  wheel: 1,
  quest: 2,
};

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], i18n[currentLang]) || path;
}

function getLocalizedSign(sign) {
  const translated = zodiacTranslations[sign.id]?.[currentLang];
  if (!translated) {
    return { name: sign.name, element: sign.element, quality: sign.quality };
  }
  return { name: translated[0], element: translated[1], quality: translated[2] };
}

function getLocalizedAnimal(animal) {
  const translated = animalTranslations[animal.animal]?.[currentLang];
  if (!translated) {
    return { animal: animal.animal, element: animal.element, trait: animal.trait, icon: animal.icon };
  }
  return { animal: translated[0], element: translated[1], trait: translated[2], icon: animal.icon };
}

function getLocalizedTarot(card) {
  const translated = tarotTranslations[card.name]?.[currentLang];
  if (!translated) {
    return { name: card.name, theme: card.theme, meaning: card.meaning };
  }
  return { name: card.name, theme: translated[0], meaning: translated[1] };
}

function localizeExtra(group, key, fallback) {
  return extraTranslations[group]?.[key]?.[currentLang] || fallback;
}

function getLocalizedMode() {
  return i18n[currentLang].modeCopy[activeMode];
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang === "zh" ? "zh-Hans" : currentLang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll(".fact-strip div span").forEach((element, index) => {
    element.textContent = [t("facts.zodiac"), t("facts.element"), t("facts.chinese")][index];
  });
  tabs.forEach((tab) => {
    tab.textContent = t(`modes.${tab.dataset.mode}`);
  });
  document.querySelector(".oracle-games")?.setAttribute("aria-label", t("games.title"));
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getChineseZodiac(year) {
  const normalized = Number(year) || 1996;
  return chineseZodiac[((normalized - 4) % 12 + 12) % 12];
}

function zodiacFromDate(dateValue) {
  const date = dateValue ? new Date(`${dateValue}T00:00:00`) : new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const key = month * 100 + day;

  if (key >= 321 && key <= 419) return "aries";
  if (key >= 420 && key <= 520) return "taurus";
  if (key >= 521 && key <= 620) return "gemini";
  if (key >= 621 && key <= 722) return "cancer";
  if (key >= 723 && key <= 822) return "leo";
  if (key >= 823 && key <= 922) return "virgo";
  if (key >= 923 && key <= 1022) return "libra";
  if (key >= 1023 && key <= 1121) return "scorpio";
  if (key >= 1122 && key <= 1221) return "sagittarius";
  if (key >= 1222 || key <= 119) return "capricorn";
  if (key >= 120 && key <= 218) return "aquarius";
  return "pisces";
}

function getSelectedZodiac() {
  return zodiacSigns.find((sign) => sign.id === zodiacSelect.value) || zodiacSigns[0];
}

function populateZodiacSelect() {
  zodiacSelect.innerHTML = zodiacSigns
    .map((sign) => {
      const localized = getLocalizedSign(sign);
      const prefix = currentLang === "th" ? "ราศี" : "";
      return `<option value="${sign.id}">${sign.symbol} ${prefix}${localized.name}</option>`;
    })
    .join("");
  zodiacSelect.value = zodiacFromDate(birthDate.value);
}

function shuffleTarot() {
  selectedTarot = [...tarotDeck].sort(() => Math.random() - 0.5).slice(0, 3);
  renderTarot();
  revealFortune();
}

function renderTarot() {
  const positions = i18n[currentLang].tarotPositions;
  tarotSpread.innerHTML = selectedTarot
    .map(
      (card, index) => {
        const localized = getLocalizedTarot(card);
        const ariaPrefix = currentLang === "th" ? "ไพ่" : currentLang === "zh" ? "塔罗牌" : "Card";
        return `
        <button class="tarot-card revealed" type="button" data-index="${index}" aria-label="${ariaPrefix} ${positions[index]} ${card.name}">
          <span class="tarot-image-wrap">
            <img src="${card.image}" alt="${card.name}" loading="lazy" />
          </span>
          <span class="tarot-position">${positions[index]}</span>
          <strong>${card.name}</strong>
          <em>${localized.theme}</em>
        </button>
      `;
      },
    )
    .join("");
}

function updateFacts() {
  const sign = getSelectedZodiac();
  const animal = getChineseZodiac(birthYear.value);
  const localizedSign = getLocalizedSign(sign);
  const localizedAnimal = getLocalizedAnimal(animal);
  const planetLabel = currentLang === "th" ? "ดาว" : currentLang === "zh" ? "守护星" : "Ruler";
  const elementLabel = currentLang === "th" ? "ธาตุ" : currentLang === "zh" ? "元素" : "Element";
  zodiacFact.textContent = `${sign.symbol} ${localizedSign.name} (${sign.dates})`;
  elementFact.textContent = `${localizedSign.element} / ${planetLabel} ${sign.ruler}`;
  chineseFact.textContent = `${localizedAnimal.animal} ${elementLabel}${currentLang === "en" ? ": " : ""}${localizedAnimal.element}`;
  crystalVision.textContent = sign.symbol;
}

function composeReading() {
  const sign = getSelectedZodiac();
  const animal = getChineseZodiac(birthYear.value);
  const localizedSign = getLocalizedSign(sign);
  const localizedAnimal = getLocalizedAnimal(animal);
  const copy = getLocalizedMode();
  const spread = selectedTarot.length ? selectedTarot : tarotDeck.slice(0, 3);
  const tarotLine = spread.map((card) => card.name).join(" + ");
  const leadCard = spread[1] || spread[0];
  const localizedLeadCard = getLocalizedTarot(leadCard);
  const labels = i18n[currentLang].readingLabels;

  const title =
    currentLang === "th"
      ? `${copy.title}: ราศี${localizedSign.name} ปี${localizedAnimal.animal}`
      : currentLang === "zh"
        ? `${copy.title}：${localizedSign.name} · ${localizedAnimal.animal}年`
        : `${copy.title}: ${localizedSign.name} born in the year of the ${localizedAnimal.animal}`;

  const text =
    currentLang === "th"
      ? `ข้อมูลพื้นฐาน: ราศี${localizedSign.name}อยู่ช่วง ${sign.dates}, ธาตุ${localizedSign.element}, ดาวประจำราศีคือ ${sign.ruler}; ปีเกิดของคุณตรงกับนักษัตร${localizedAnimal.animal} ซึ่งเด่นเรื่อง${localizedAnimal.trait}. ไพ่กลางของชุดนี้คือ ${leadCard.name} (${localizedLeadCard.theme}) จึงชี้ว่า${localizedLeadCard.meaning} สำหรับ${copy.focus}: ${copy.advice}`
      : currentLang === "zh"
        ? `基础信息：${localizedSign.name} 的日期范围是 ${sign.dates}，元素为${localizedSign.element}，守护星是 ${sign.ruler}；你的出生年份对应生肖${localizedAnimal.animal}，重点是${localizedAnimal.trait}。本牌阵的中心牌是 ${leadCard.name}（${localizedLeadCard.theme}），提示：${localizedLeadCard.meaning} 关于${copy.focus}：${copy.advice}`
        : `Core data: ${localizedSign.name} covers ${sign.dates}, its element is ${localizedSign.element}, and its ruler is ${sign.ruler}. Your birth year connects with the ${localizedAnimal.animal}, known for being ${localizedAnimal.trait}. The center card is ${leadCard.name} (${localizedLeadCard.theme}), suggesting: ${localizedLeadCard.meaning} For ${copy.focus}: ${copy.advice}`;

  return {
    label: copy.label,
    title,
    text,
    details: [
      {
        label: labels.western,
        value: `${sign.symbol} ${localizedSign.name}`,
        note: currentLang === "th" ? `${sign.dates} · ธาตุ${localizedSign.element}` : `${sign.dates} · ${localizedSign.element}`,
      },
      {
        label: labels.quality,
        value: localizedSign.quality,
        note: currentLang === "th" ? `ดาวประจำราศี: ${sign.ruler}` : currentLang === "zh" ? `守护星：${sign.ruler}` : `Ruler: ${sign.ruler}`,
      },
      {
        label: labels.chinese,
        value: `${localizedAnimal.icon} ${localizedAnimal.animal}`,
        note: `${localizedAnimal.element} · ${localizedAnimal.trait}`,
      },
      { label: labels.tarot, value: tarotLine, note: labels.tarotNote },
    ],
  };
}

function seededNumber(seed, min, max) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash) % (max - min + 1) + min;
}

function getLuckyProfile() {
  const sign = getSelectedZodiac();
  const animal = getChineseZodiac(birthYear.value);
  const seed = `${birthDate.value}-${birthYear.value}-${sign.id}-${selectedTarot.map((card) => card.name).join("|")}`;
  const colors = luckyColors[sign.element] || luckyColors.ลม;
  const luckyNumber = `${seededNumber(seed, 1, 9)}${seededNumber(`${seed}-second`, 0, 9)}`;
  const matchIndex = seededNumber(`${seed}-match`, 0, zodiacSigns.length - 1);
  const match = zodiacSigns[matchIndex].id === sign.id ? zodiacSigns[(matchIndex + 4) % zodiacSigns.length] : zodiacSigns[matchIndex];
  const energy = seededNumber(`${seed}-energy`, 58, 96);
  const dreamIndex = seededNumber(`${seed}-dream`, 0, dreamKeywords.length - 1);
  const dream = dreamKeywords[dreamIndex];
  const moon = moonRhythms[seededNumber(`${seed}-moon`, 0, moonRhythms.length - 1)];
  const nameNumber = seededNumber(`${seed}-name-number`, 1, 9);
  const yesNoIndex = seededNumber(`${seed}-yesno`, 0, yesNoOracle.length - 1);
  const yesNo = yesNoOracle[yesNoIndex];
  const luckyColor = colors[seededNumber(`${seed}-color`, 0, colors.length - 1)];

  return {
    luckyNumber,
    luckyColor: localizeExtra("colors", luckyColor, luckyColor),
    match,
    energy,
    dream:
      currentLang === "th"
        ? dream
        : {
            key: extraTranslations.dreams[dreamIndex][currentLang][0],
            message: extraTranslations.dreams[dreamIndex][currentLang][1],
          },
    moon:
      currentLang === "th"
        ? moon
        : {
            phase: moon.phase,
            tone: extraTranslations.moons[moon.phase][currentLang][0],
            guidance: extraTranslations.moons[moon.phase][currentLang][1],
          },
    nameNumber,
    yesNo: currentLang === "th" ? yesNo : extraTranslations.yesNo[yesNoIndex][currentLang],
    animal,
  };
}

function renderMiniOracles() {
  const profile = getLuckyProfile();
  const sign = getSelectedZodiac();
  const localizedSign = getLocalizedSign(sign);
  const localizedMatch = getLocalizedSign(profile.match);
  const localizedAnimal = getLocalizedAnimal(profile.animal);

  if (currentLang !== "th") {
    miniOracleGrid.innerHTML = `
      <article>
        <span>${currentLang === "zh" ? "幸运数字" : "Lucky number"}</span>
        <strong>${profile.luckyNumber}</strong>
        <p>${currentLang === "zh" ? "根据生日、星座、出生年份与当前牌阵计算" : "Calculated from birth date, sign, birth year, and current cards"}</p>
      </article>
      <article>
        <span>${currentLang === "zh" ? "幸运色" : "Lucky color"}</span>
        <strong>${profile.luckyColor}</strong>
        <p>${currentLang === "zh" ? `结合${localizedSign.name}的元素与今日能量` : `Based on ${localizedSign.name}'s element and today's energy`}</p>
      </article>
      <article>
        <span>${currentLang === "zh" ? "助力星座" : "Supportive sign"}</span>
        <strong>${profile.match.symbol} ${localizedMatch.name}</strong>
        <p>${currentLang === "zh" ? "适合沟通、爱情或寻求建议" : "Helpful for work talks, love, or asking for advice"}</p>
      </article>
      <article>
        <span>${currentLang === "zh" ? "今日能量" : "Today's energy"}</span>
        <strong>${profile.energy}%</strong>
        <p>${currentLang === "zh" ? `${localizedAnimal.animal}年强调${localizedAnimal.trait}` : `The ${localizedAnimal.animal} year highlights ${localizedAnimal.trait}`}</p>
      </article>
    `;
    return;
  }

  miniOracleGrid.innerHTML = `
    <article>
      <span>เลขนำโชค</span>
      <strong>${profile.luckyNumber}</strong>
      <p>คำนวณจากวันเกิด ราศี ปีเกิด และไพ่ชุดปัจจุบัน</p>
    </article>
    <article>
      <span>สีมงคล</span>
      <strong>${profile.luckyColor}</strong>
      <p>อิงธาตุราศี${getSelectedZodiac().name}และพลังวันนี้</p>
    </article>
    <article>
      <span>คู่ราศีส่งเสริม</span>
      <strong>${profile.match.symbol} ${profile.match.name}</strong>
      <p>เหมาะกับการคุยงาน ความรัก หรือขอคำแนะนำ</p>
    </article>
    <article>
      <span>พลังวันนี้</span>
      <strong>${profile.energy}%</strong>
      <p>ปี${profile.animal.animal}เด่นเรื่อง${profile.animal.trait}</p>
    </article>
  `;
}

function renderOracleTools() {
  const profile = getLuckyProfile();
  const sign = getSelectedZodiac();
  const leadCard = selectedTarot[1] || selectedTarot[0] || tarotDeck[0];
  const localizedSign = getLocalizedSign(sign);
  const localizedMatch = getLocalizedSign(profile.match);
  const localizedAnimal = getLocalizedAnimal(profile.animal);
  const localizedCard = getLocalizedTarot(leadCard);

  if (currentLang !== "th") {
    oracleTools.innerHTML = `
      <article class="tool-card feature">
        <span>Daily Lucky Matrix</span>
        <strong>${profile.luckyNumber} · ${profile.luckyColor}</strong>
        <p>${currentLang === "zh" ? `今日数字与颜色结合了${localizedSign.name}、${localizedSign.element}元素、${localizedAnimal.animal}年与 ${leadCard.name}` : `Today's number and color combine ${localizedSign.name}, ${localizedSign.element}, the ${localizedAnimal.animal} year, and ${leadCard.name}`}</p>
      </article>
      <article class="tool-card">
        <span>Dream Decoder</span>
        <strong>${currentLang === "zh" ? "梦境关键词" : "Dream keyword"}</strong>
        <p>${profile.dream.message}</p>
      </article>
      <article class="tool-card">
        <span>Compatibility</span>
        <strong>${sign.symbol} ${localizedSign.name} × ${profile.match.symbol} ${localizedMatch.name}</strong>
        <p>${currentLang === "zh" ? "这组能量让沟通与决定更顺畅" : "This pairing helps words and decisions flow more easily"}</p>
      </article>
      <article class="tool-card">
        <span>Aura Meter</span>
        <strong>${profile.energy}%</strong>
        <div class="meter"><i style="width: ${profile.energy}%"></i></div>
      </article>
      <article class="tool-card">
        <span>Tarot Focus</span>
        <strong>${localizedCard.theme}</strong>
        <p>${localizedCard.meaning}</p>
      </article>
      <article class="tool-card">
        <span>Moon Rhythm</span>
        <strong>${profile.moon.phase}</strong>
        <p>${profile.moon.guidance}</p>
      </article>
      <article class="tool-card">
        <span>Ritual Suggestion</span>
        <strong>${currentLang === "zh" ? `${localizedSign.element}元素小仪式` : `${localizedSign.element} element ritual`}</strong>
        <p>${localizeExtra("rituals", sign.element, rituals[sign.element])}</p>
      </article>
      <article class="tool-card">
        <span>Name Number</span>
        <strong>${currentLang === "zh" ? `能量数字 ${profile.nameNumber}` : `Power number ${profile.nameNumber}`}</strong>
        <p>${currentLang === "zh" ? "可作为项目名称、文案或重要约定时间的灵感" : "Use it as inspiration for a project name, caption, or important appointment time"}</p>
      </article>
      <article class="tool-card">
        <span>Yes / No Oracle</span>
        <strong>${profile.yesNo}</strong>
        <p>${currentLang === "zh" ? "在点击占卜前，先把问题放在心里" : "Hold your question in mind before pressing read"}</p>
      </article>
    `;
    return;
  }

  oracleTools.innerHTML = `
    <article class="tool-card feature">
      <span>Daily Lucky Matrix</span>
      <strong>${profile.luckyNumber} · ${profile.luckyColor}</strong>
      <p>เลขและสีประจำวันนี้ผูกกับราศี${sign.name} ธาตุ${sign.element} ปี${profile.animal.animal} และไพ่ ${leadCard.name}</p>
    </article>
    <article class="tool-card">
      <span>Dream Decoder</span>
      <strong>ฝันเห็น${profile.dream.key}</strong>
      <p>${profile.dream.message}</p>
    </article>
    <article class="tool-card">
      <span>Compatibility</span>
      <strong>${sign.symbol} ${sign.name} × ${profile.match.symbol} ${profile.match.name}</strong>
      <p>คู่พลังนี้ช่วยให้คำพูดและการตัดสินใจไหลลื่นขึ้น</p>
    </article>
    <article class="tool-card">
      <span>Aura Meter</span>
      <strong>${profile.energy}%</strong>
      <div class="meter"><i style="width: ${profile.energy}%"></i></div>
    </article>
    <article class="tool-card">
      <span>Tarot Focus</span>
      <strong>${leadCard.theme}</strong>
      <p>${leadCard.meaning}</p>
    </article>
    <article class="tool-card">
      <span>Moon Rhythm</span>
      <strong>${profile.moon.phase}</strong>
      <p>${profile.moon.tone}: ${profile.moon.guidance}</p>
    </article>
    <article class="tool-card">
      <span>Ritual Suggestion</span>
      <strong>พิธีเล็กๆ ธาตุ${sign.element}</strong>
      <p>${rituals[sign.element]}</p>
    </article>
    <article class="tool-card">
      <span>Name Number</span>
      <strong>เลขพลัง ${profile.nameNumber}</strong>
      <p>ใช้เป็นเลขตั้งต้นสำหรับชื่อโปรเจกต์ แคปชัน หรือเวลานัดหมายสำคัญ</p>
    </article>
    <article class="tool-card">
      <span>Yes / No Oracle</span>
      <strong>${profile.yesNo}</strong>
      <p>ใช้ตอบคำถามที่คุณถือไว้ในใจก่อนกดทำนาย</p>
    </article>
  `;
}

function createAdCard(ad, size = "medium") {
  return `
    <a class="ad-card ${size} tone-${ad.tone}" href="${ad.url}" target="_blank" rel="noopener" aria-label="${ad.title} ${ad.subtitle}">
      <span class="ad-image"><img src="${ad.image}" alt="" loading="lazy" /></span>
      <span class="ad-pill">${ad.tag}</span>
      <strong>${ad.title}</strong>
      <p>${ad.subtitle}</p>
      <em>${t("sponsors.open")}</em>
    </a>
  `;
}

function renderAds() {
  adBoard.innerHTML = adLinks
    .map((ad, index) => createAdCard(ad, index === 0 || index === 9 ? "featured" : "compact"))
    .join("");
}

function getGameSeed(type) {
  const sign = getSelectedZodiac();
  const tarotNames = selectedTarot.map((card) => card.name).join("|");
  return `${type}-${birthDate.value}-${birthYear.value}-${sign.id}-${activeMode}-${tarotNames}`;
}

function playOracleGame(type) {
  const data = oracleGameData[currentLang];
  const group = type === "crystal" ? data.crystals : type === "wheel" ? data.wheel : data.quests;
  gameState[type] = seededNumber(`${getGameSeed(type)}-${Date.now()}`, 0, group.length - 1);
  renderOracleGames(type);
}

function renderOracleGames(activeType = "") {
  const data = oracleGameData[currentLang];
  const cards = [
    {
      type: "crystal",
      title: t("games.crystalPick"),
      item: data.crystals[gameState.crystal % data.crystals.length],
    },
    {
      type: "wheel",
      title: t("games.fateWheel"),
      item: data.wheel[gameState.wheel % data.wheel.length],
    },
    {
      type: "quest",
      title: t("games.quest"),
      item: data.quests[gameState.quest % data.quests.length],
    },
  ];

  oracleGames.innerHTML = cards
    .map(
      (card) => `
        <article class="game-card ${activeType === card.type ? "playing" : ""}">
          <div>
            <span class="game-symbol">${card.item[0]}</span>
            <strong>${card.title}</strong>
            <p>${t("games.default")}</p>
          </div>
          <div class="game-result">
            <strong>${card.item[1]}</strong>
            <p>${card.item[2]}</p>
          </div>
          <div class="game-actions">
            <button class="game-button" type="button" data-game="${card.type}">${t("games.play")}</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDetails(details) {
  detailGrid.innerHTML = details
    .map(
      (item) => `
        <article>
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.note}</p>
        </article>
      `,
    )
    .join("");
}

function revealFortune() {
  const reading = composeReading();

  crystalButton.classList.add("charging");
  fortuneCard.classList.add("revealing");
  cardLabel.textContent = t("fortune.reading");
  fortuneTitle.textContent = t("fortune.loadingTitle");
  fortuneText.textContent = t("fortune.loadingText");

  window.setTimeout(() => {
    cardLabel.textContent = reading.label;
    fortuneTitle.textContent = reading.title;
    fortuneText.textContent = reading.text;
    renderDetails(reading.details);
    renderMiniOracles();
    renderOracleTools();
    renderOracleGames();
    crystalButton.classList.remove("charging");
    fortuneCard.classList.remove("revealing");
  }, 620);
}

function setMode(mode) {
  activeMode = mode;
  tabs.forEach((tab) => {
    const isActive = tab.dataset.mode === mode;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  revealFortune();
}

function setLanguage(lang) {
  currentLang = i18n[lang] ? lang : "th";
  localStorage.setItem("crystalLanguage", currentLang);
  applyStaticTranslations();
  populateZodiacSelect();
  updateFacts();
  renderTarot();
  renderDetails(composeReading().details);
  renderMiniOracles();
  renderOracleTools();
  renderOracleGames();
  renderAds();
  revealFortune();
}

function saveCurrentFortune() {
  const text = `${cardLabel.textContent}: ${fortuneTitle.textContent} - ${fortuneText.textContent}`;
  savedFortunes = [text, ...savedFortunes.filter((item) => item !== text)].slice(0, 8);
  localStorage.setItem("crystalFortunes", JSON.stringify(savedFortunes));
  saveButton.textContent = t("actions.saved");
  fortuneCard.classList.add("saved");

  window.setTimeout(() => {
    saveButton.textContent = t("actions.save");
    fortuneCard.classList.remove("saved");
  }, 900);
}

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = createParticles();
}

function createParticles() {
  const count = Math.round(Math.min(180, Math.max(80, width / 10)));
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 2.6 + 0.45,
    drift: Math.random() * 0.9 + 0.25,
    angle: Math.random() * Math.PI * 2,
    hue: Math.random() > 0.55 ? "teal" : Math.random() > 0.5 ? "gold" : "rose",
  }));
}

function drawAura(time) {
  ctx.clearRect(0, 0, width, height);
  const glowX = pointer.x * width;
  const glowY = pointer.y * height;

  const gradient = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, Math.max(width, height) * 0.68);
  gradient.addColorStop(0, "rgba(71, 217, 194, 0.22)");
  gradient.addColorStop(0.32, "rgba(241, 197, 106, 0.08)");
  gradient.addColorStop(0.58, "rgba(111, 75, 216, 0.1)");
  gradient.addColorStop(1, "rgba(7, 6, 17, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (const particle of particles) {
    particle.angle += 0.004 * particle.drift;
    particle.y -= 0.1 * particle.drift;
    particle.x += Math.sin(particle.angle + time * 0.0004) * 0.28;

    if (particle.y < -12) {
      particle.y = height + 12;
      particle.x = Math.random() * width;
    }

    const alpha = 0.2 + Math.sin(time * 0.0015 + particle.angle) * 0.16;
    const color =
      particle.hue === "teal"
        ? `rgba(71, 217, 194, ${alpha})`
        : particle.hue === "gold"
          ? `rgba(241, 197, 106, ${alpha})`
          : `rgba(215, 122, 166, ${alpha})`;

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(drawAura);
}

function tiltCrystal(event) {
  const bounds = crystalButton.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  pointer = {
    x: event.clientX / Math.max(width, 1),
    y: event.clientY / Math.max(height, 1),
  };
  crystalButton.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 14}deg)`;
}

function resetTilt() {
  crystalButton.style.transform = "rotateX(0deg) rotateY(0deg)";
}

tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));
languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
readButton.addEventListener("click", revealFortune);
crystalButton.addEventListener("click", revealFortune);
shuffleButton.addEventListener("click", shuffleTarot);
crystalButton.addEventListener("pointermove", tiltCrystal);
crystalButton.addEventListener("pointerleave", resetTilt);
saveButton.addEventListener("click", saveCurrentFortune);
birthDate.addEventListener("change", () => {
  zodiacSelect.value = zodiacFromDate(birthDate.value);
  birthYear.value = birthDate.value ? new Date(`${birthDate.value}T00:00:00`).getFullYear() : birthYear.value;
  updateFacts();
  revealFortune();
});
birthYear.addEventListener("input", () => {
  updateFacts();
  revealFortune();
});
zodiacSelect.addEventListener("change", () => {
  updateFacts();
  revealFortune();
});
window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", (event) => {
  pointer = {
    x: event.clientX / Math.max(width, 1),
    y: event.clientY / Math.max(height, 1),
  };
});
oracleGames.addEventListener("click", (event) => {
  const button = event.target.closest("[data-game]");
  if (button) {
    playOracleGame(button.dataset.game);
  }
});

try {
  savedFortunes = JSON.parse(localStorage.getItem("crystalFortunes") || "[]");
} catch {
  savedFortunes = [];
}

applyStaticTranslations();
populateZodiacSelect();
selectedTarot = [...tarotDeck].sort(() => Math.random() - 0.5).slice(0, 3);
renderTarot();
updateFacts();
renderDetails(composeReading().details);
renderMiniOracles();
renderOracleTools();
renderOracleGames();
renderAds();
resizeCanvas();
requestAnimationFrame(drawAura);
