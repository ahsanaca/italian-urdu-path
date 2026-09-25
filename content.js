/* =====================================================================
   ITALIAN ACADEMY (URDU EDITION) — app config + content data.
   Same engine, same Italian course structure as the English edition —
   only the explanation language changes. This file must load BEFORE
   engine.js/voice-module.js — it sets the window.APP_* globals they read.
===================================================================== */

window.APP_ID = "italianAcademyUrdu";
window.APP_LANGUAGE_NAME = "اطالوی";
window.APP_VOICE_LANG = "it-IT";
window.APP_EXPLANATION_DIR = "rtl";
// No window.APP_TEXT_DIRECTION — the TARGET language (Italian) is still
// Latin-script/LTR. Only the explanation language (Urdu) is RTL.
// No window.firebaseConfig — this trial runs local-progress-only.

window.APP_BANNER = {
  line1: "🌱 مفت ٹرائل — رائے دیں!",
  line2: "یہ Italian Academy کا ابتدائی ٹرائل ورژن ہے، جو مکمل لانچ سے پہلے رائے لینے کے لیے بنایا گیا ہے۔ فی الحال پیش رفت صرف اسی ڈیوائس پر محفوظ ہوتی ہے۔ کوئی غلطی نظر آئے یا کچھ اور شامل کرنے کا مشورہ ہو تو براہ کرم بتائیں — یہی اس ٹرائل کا مقصد ہے۔"
};

window.APP_STRINGS = {
  allChapters: "← تمام اسباق",
  chooseTrack: "اپنا ٹریک منتخب کریں",
  chooseTrackDesc: "ہر ٹریک اس زبان کو ایک مختلف انداز میں سکھاتا ہے — وہ ٹریک منتخب کریں جو ابھی آپ کے لیے موزوں ہو۔ آپ کسی بھی وقت تبدیل کر سکتے ہیں؛ ہر ٹریک کی پیش رفت الگ محفوظ رہتی ہے۔",
  yourJourney: "آپ کا {lang} کا سفر",
  tapToStart: "شروع کرنے کے لیے کسی سبق پر ٹیپ کریں۔ نئے اسباق کورس کے ساتھ ساتھ کھلتے جائیں گے۔",
  voiceSetupLink: "🔊 آواز کی ترتیب کے مشورے — تلفظ کی آڈیو کوالٹی بہتر بنائیں",
  switchTrack: "🔀 ٹریک تبدیل کریں",
  trackLabel: "ٹریک:",
  requireFinishing: "اگلا سبق کھلنے سے پہلے ہر سبق کا {pct}%+ مکمل کرنا لازمی قرار دیں",
  xpEarned: "حاصل کردہ ایکس پی",
  dayStreak: "لگاتار دن",
  level: "سطح",
  overallProgress: "مجموعی پیش رفت",
  continueWhereLeftOff: "وہیں سے جاری رکھیں جہاں چھوڑا تھا",
  resume: "جاری رکھیں ←",
  readyToBegin: "شروع کرنے کے لیے تیار ہیں؟",
  startWith: "{chapter} سے شروع کریں",
  start: "شروع کریں ←",
  mixQuestions: "آپ کے کھلے ہوئے ہر سبق سے ملے جلے سوالات",
  testYourKnowledge: "🧠 اپنے علم کی جانچ",
  startRandomTest: "بے ترتیب ٹیسٹ شروع کریں ←",
  notBuiltYet: "ابھی تیار نہیں",
  needsChapter: "{chapter} درکار ہے",
  priorChapter: "پچھلا سبق",
  courseIndex: "کورس کی فہرست",
  courseIndexDesc: "ہر یونٹ اور سبق کا مختصر خاکہ — کسی بھی کھلے ہوئے سبق پر کلک کر کے فوراً وہاں پہنچیں۔",
  tabContent: "📖 سبق کا مواد",
  tabVocab: "📝 الفاظ",
  tabExercises: "✏️ مشقیں",
  tabSpeaking: "🎤 بولنا",
  continueVocab: "الفاظ کی طرف جائیں ←",
  continueExercises: "مشقوں کی طرف جائیں ←",
  continueSpeaking: "بولنے کی مشق کی طرف جائیں ←",
  nextChapter: "اگلا سبق: {icon} {label} ←",
  backToDashboard: "ڈیش بورڈ پر واپس جائیں ←",
  backToDashboardPlain: "ڈیش بورڈ پر واپس جائیں",
  checkAnswers: "میرے جوابات چیک کریں",
  tapWordsBelow: "نیچے دیے گئے الفاظ پر ٹیپ کریں ←",
  clear: "صاف کریں",
  submit: "جمع کروائیں",
  translateLabel: "ترجمہ کریں:",
  typeYourAnswer: "اپنا جواب لکھیں",
  creativeGoodFeedback: "بہت خوب — محفوظ ہو گیا۔ درستگی کے لیے کوئی استاد یا اطالوی زبان بولنے والا اسے دیکھ سکتا ہے۔",
  creativeEmptyFeedback: "پہلے کچھ لکھیں — ایک مختصر جملہ بھی کافی ہے!",
  score: "نتیجہ: {score} / {total}",
  levelBeginner: "ابتدائی",
  levelElementary: "بنیادی",
  levelIntermediate: "درمیانہ",
  levelAdvanced: "اعلیٰ",
  testMixedMcq: "🧠 ملے جلے کثیر الانتخابی سوالات",
  testMixedMcqDesc: "مختلف اسباق سے بے ترتیب سوالات۔",
  testMixedTranslate: "🧠 ملا جلا ترجمہ",
  testMixedTranslateDesc: "ہر جملے کا مفہوم لکھیں۔",
  testMixedMatching: "🧠 ملا جلا میچنگ",
  testMixedMatchingDesc: "کسی سوال پر ٹیپ کریں، پھر اس کے مطابق معنی پر ٹیپ کریں۔",
  testMixedSentence: "🧠 ملا جلا جملہ سازی",
  testMixedSentenceDesc: "لفظی ٹکڑوں کو درست ترتیب میں ٹیپ کریں۔",
  testHeading: "اپنے علم کی جانچ",
  testIntro: "آپ کے اب تک کھلے ہوئے ہر سبق سے بے ترتیب طور پر چنے گئے {n} سوالات۔ ہر حصہ حل کر کے چیک کریں — سب چیک ہونے کے بعد آپ کا مجموعی نتیجہ نیچے دکھایا جائے گا۔",
  testComplete: "ٹیسٹ مکمل! 🎉",
  testScoreLine: "آپ نے {score} / {total} ({pct}%) حاصل کیے — +{xp} ایکس پی ملا۔",
  noSpeakingPhrases: "اس سبق کے لیے ابھی بولنے کی کوئی مشق موجود نہیں۔",
  speakingInstructions: "فقرہ سننے کے لیے <strong>سنیں</strong> دبائیں، پھر فوری مماثلت اسکور کے لیے خود بول کر <strong>ریکارڈ</strong> کریں۔",
  listenBtn: "🔊 سنیں",
  recordBtn: "🎙️ ریکارڈ کریں اور چیک کریں",
  listeningBtn: "🎙️ سن رہا ہے...",
  prevBtn: "→ پچھلا",
  nextBtn: "اگلا ←",
  youSaid: "آپ نے کہا:",
  voiceSetupHeading: "🔊 اپنی ترتیب آزمائیں",
  voiceSetupIntro: "یہ ایپ آپ کے فون کی اپنی بلٹ اِن آواز کے ذریعے {lang} الفاظ اور فقرے بلند آواز میں پڑھتی ہے۔ زیادہ تر فونز میں یہ پہلے سے موجود ہوتی ہے، لیکن ایک بار کی ترتیب اسے واضح طور پر بہتر بنا دیتی ہے۔ اس میں تقریباً ایک منٹ لگتا ہے، اور ہر ڈیوائس پر صرف ایک بار کرنی ہوتی ہے — یہ کسی چیز کو روکتی نہیں، اس لیے چاہیں تو ابھی چھوڑ کر بعد میں واپس آ سکتے ہیں۔",
  voiceSetupAndroidStep2: "پسندیدہ انجن کو <strong>Google Text-to-speech Engine</strong> پر سیٹ کریں",
  voiceSetupAndroidStep3: "اس کی سیٹنگز گیئر پر ٹیپ کریں → Install voice data → {lang} → بہترین کوالٹی والا آپشن ڈاؤن لوڈ کریں",
  voiceSetupIosStep2: "{lang} تلاش کریں اور اسے ڈاؤن لوڈ کریں",
  voiceSetupIosStep3: "اگر آپشن ملے تو <strong>Enhanced</strong> یا <strong>Premium</strong> کوالٹی منتخب کریں",
  voiceSetupDone: "مکمل — ایپ میں جاری رکھیں ←",
  voiceSetupSkip: "ابھی چھوڑیں — بعد میں یاد دلائیں",
  ttsPlaying: "🔊 چل رہا ہے...",
  ttsPlaybackFailedDevice: "⚠️ آواز چلانے میں ناکامی — چیک کریں کہ اس ڈیوائس پر {lang} کا صوتی ڈیٹا انسٹال ہے۔",
  ttsNotSupported: "⚠️ یہ براؤزر آواز پڑھنے کو سپورٹ نہیں کرتا۔",
  ttsPlaybackFailedGeneric: "⚠️ آواز چلانے میں ناکامی۔",
  micPermissionDenied: "مائیکروفون/اسپیچ کی اجازت مسترد کر دی گئی — یہ خصوصیت استعمال کرنے کے لیے اپنی ڈیوائس کی سیٹنگز میں اجازت دیں۔",
  sttPrompt: "اب فقرہ بولیں",
  sttNotSupported: "⚠️ یہ براؤزر اسپیچ ریکگنیشن کو سپورٹ نہیں کرتا — براہ کرم ایپ استعمال کریں۔",
  couldntCaptureAudio: "آواز ریکارڈ نہیں ہو سکی ({err})۔ دوبارہ کوشش کریں۔",
  nothingRecognized: "(کچھ پہچانا نہیں گیا)",
  verdictExcellent: "بہترین! 🌟 ({pct}% مماثلت)",
  verdictClose: "قریب ہے — مشق جاری رکھیں۔ ({pct}% مماثلت)",
  verdictTryAgain: "دوبارہ کوشش کریں۔ ({pct}% مماثلت)"
};

const units = [
  { id:"u0", track:"standard", title:"یونٹ 0 — بنیادی باتیں", desc:"گرامر شروع ہونے سے پہلے تلفظ اور حروفِ تہجی۔" },
  { id:"u1", track:"standard", title:"یونٹ 1 — سلام اور تعارف", desc:"سلام کرنا، اپنا تعارف کروانا، اور essere فعل سے ملاقات۔" },
  { id:"u2", track:"standard", title:"یونٹ 2 — آرٹیکلز، جنس اور تعداد", desc:"ہر اسم کی ایک جنس ہوتی ہے — اسے پہچاننا اور درست آرٹیکل لگانا سیکھیں۔" },
  { id:"u3", track:"standard", title:"یونٹ 3 — Avere اور ملکیت", desc:"\"رکھنا\" کا فعل، اور صفت کی بنیادی موافقت۔" },
  { id:"u4", track:"standard", title:"یونٹ 4 — حال کے افعال", desc:"باقاعدہ -are/-ere/-ire افعال، اور حقیقی جملے بنانا۔" },
  { id:"u5", track:"standard", title:"یونٹ 5 — گنتی، رنگ اور سوالات", desc:"گنتی، اشیاء کی وضاحت، اور کون/کیا/کہاں/کب/کیوں پوچھنا۔" },
  { id:"u6", track:"standard", title:"یونٹ 6 — آنا جانا", desc:"آپ کہاں جا رہے ہیں، اور وہاں پہنچانے والے حروفِ جار کے قواعد۔" },
  { id:"u7", track:"standard", title:"یونٹ 7 — لوگوں کی وضاحت", desc:"ملکیتی صفتیں، اور شکل و شخصیت بیان کرنے کے الفاظ۔" },
  { id:"u8", track:"standard", title:"یونٹ 8 — کھانا اور آرڈر دینا", desc:"ریستوران کے الفاظ، اور شائستگی سے کچھ مانگنے کا طریقہ۔" },
  { id:"u9", track:"standard", title:"یونٹ 9 — وقت اور روزمرہ معمولات", desc:"وقت بتانا، ہفتے کے دن، اور اضافی ضمیری افعال کا ابتدائی تعارف۔" },
  { id:"u10", track:"standard", title:"یونٹ 10 — جلد آ رہا ہے", desc:"مزید اسباق جلد شامل کیے جائیں گے۔" }
];

const tracks = [
  { id:"standard", icon:"🇮🇹", title:"اطالوی", desc:"حروفِ تہجی سے لے کر روزمرہ گفتگو تک ایک ہی ٹریک — معیاری اطالوی زبان، مرحلہ بہ مرحلہ۔" }
];

const chapters = [
  {
    id: 0,
    unit: "u0",
    label: "بنیادی باتیں",
    difficulty: 1,
    requires: null,
    icon: "🔤",
    title: "اطالوی تلفظ اور حروفِ تہجی",
    arabicTitle: "Pronuncia e Alfabeto",
    desc: "اطالوی کو بلند آواز میں پڑھنا سیکھیں — قواعد جان لیں تو یہ تقریباً مکمل طور پر ہجے کے مطابق ہے۔",
    locked: false,

    content: [
      { type:"p", text:"اطالوی کے ہجے حیرت انگیز حد تک ایک جیسے (consistent) ہوتے ہیں — چند قواعد سیکھ لیں تو تقریباً ہر لفظ کو صرف پڑھ کر درست تلفظ کر سکتے ہیں۔ گرامر شروع ہونے سے پہلے یہ باب انہی قواعد پر مشتمل ہے۔" },
      { type:"h", text:"حروفِ تہجی" },
      { type:"p", text:"اطالوی زبان لاطینی حروفِ تہجی کے 26 میں سے 21 حروف اصل طور پر استعمال کرتی ہے (j، k، w، x، y صرف بیرونی زبانوں سے لیے گئے الفاظ میں آتے ہیں)۔ حروفِ علت (vowels) صاف اور ہمیشہ یکساں آواز دیتے ہیں: a، e، i، o، u ہمیشہ ایک ہی طرح بولے جاتے ہیں، انگریزی کے برعکس۔" },
      { type:"h", text:"مشکل حروف: C اور G" },
      { type:"p", text:"C اور G ہر ایک کی دو آوازیں ہیں — سخت (hard) اور نرم (soft) — اور یہ اگلے حرف پر منحصر ہے۔ a، o، u سے پہلے → سخت آواز (انگریزی کے \"k\"/\"g\" جیسی)۔ e، i سے پہلے → نرم آواز (\"ch\"/\"j\" جیسی)۔ e یا i سے پہلے سخت آواز برقرار رکھنے کے لیے اطالوی میں h شامل کر دیا جاتا ہے: che، chi، ghe، ghi۔" },
      { type:"note", html:"<strong>فوری یاد دہانی:</strong> ca/co/cu = \"k\" کی آواز · ce/ci = \"ch\" کی آواز · che/chi = پھر \"k\" کی آواز · ga/go/gu = سخت \"g\" · ge/gi = \"j\" کی آواز · ghe/ghi = پھر سخت \"g\"۔" },
      { type:"h", text:"خاص مجموعے" },
      { type:"p", text:"چند حروف کے مجموعے مل کر ایک ہی آواز بناتے ہیں: gli کی آواز انگریزی لفظ \"million\" کے \"lli\" جیسی ہے؛ gn کی آواز \"canyon\" کے \"ny\" جیسی ہے؛ sc اگر e یا i سے پہلے آئے تو \"sh\" جیسی آواز دیتا ہے، لیکن a، o، u سے پہلے \"sk\" جیسی۔" },
      { type:"h", text:"زور اور علامتِ لہجہ (Accent)" },
      { type:"p", text:"زیادہ تر اطالوی الفاظ میں زور آخر سے پہلے والے حرفِ علت پر ہوتا ہے۔ جب زور آخری حرفِ علت پر آئے تو اسے ایک علامت (accent) سے ظاہر کیا جاتا ہے: città (شہر)، perché (کیوں/کیونکہ)، caffè (کافی)۔ درست زور دینا اہم ہے — اس سے لفظ کا مطلب بدل سکتا ہے۔" }
    ],

    vocabCategories: [
      { name:"مشق کے لیے آوازیں", words:[
        {icon:"", ar:"casa", translit:"KAH-za", en:"گھر (سخت c)"},
        {icon:"", ar:"cena", translit:"CHEH-na", en:"رات کا کھانا (نرم c)"},
        {icon:"", ar:"gatto", translit:"GAHT-toh", en:"بلی (سخت g)"},
        {icon:"", ar:"gelato", translit:"jeh-LAH-toh", en:"آئس کریم (نرم g)"},
        {icon:"", ar:"gli", translit:"lyee", en:"the (مذکر جمع) — gli کی آواز"},
        {icon:"", ar:"gnocchi", translit:"NYOHK-kee", en:"آلو کے چھوٹے پکوڑے — gn کی آواز"},
        {icon:"", ar:"sciarpa", translit:"SHAR-pa", en:"مفلر — sc+i کی آواز"},
        {icon:"", ar:"perché", translit:"pehr-KEH", en:"کیوں / کیونکہ — علامتِ لہجہ والا زور"}
      ]}
    ],

    exercises: [
      {
        id:"it-a-ex1", type:"mcq", title:"مشق 1 — سخت یا نرم؟",
        instructions:"نیچے خط کشیدہ حرف کی آواز کیا ہے؟",
        items:[
          { promptText:"\"cena\" (رات کا کھانا) میں C کی آواز کیسی ہے؟", options:["k","ch","g"], correct:1 },
          { promptText:"\"casa\" (گھر) میں C کی آواز کیسی ہے؟", options:["k","ch","sh"], correct:0 },
          { promptText:"\"gelato\" میں G کی آواز کیسی ہے؟", options:["سخت g","j","gh"], correct:1 },
          { promptText:"i سے پہلے کون سا ہجہ سخت \"k\" کی آواز برقرار رکھتا ہے؟", options:["ci","chi","ce"], correct:1 }
        ]
      },
      {
        id:"it-a-ex2", type:"matching", title:"مشق 2 — آواز ملائیں",
        instructions:"مجموعے کو اس کی آواز سے ملائیں۔",
        pairs:[
          { left:"gli", right:"\"million\" کے \"lli\" جیسی آواز" },
          { left:"gn", right:"\"canyon\" کے \"ny\" جیسی آواز" },
          { left:"sci", right:"\"sh\" کی آواز" },
          { left:"che", right:"\"k\" کی آواز" }
        ]
      },
      {
        id:"it-a-ex3", type:"translate", title:"مشق 3 — مطلب کیا ہے؟",
        instructions:"ابھی سیکھے گئے الفاظ کا مطلب لکھیں۔",
        items:[
          { icon:"🏠", ar:"casa", keywords:["گھر"] },
          { icon:"🍨", ar:"gelato", keywords:["آئس کریم"] },
          { icon:"🐱", ar:"gatto", keywords:["بلی"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"", ar:"casa", plain:"casa", translit:"KAH-za", meaning:"گھر" },
      { icon:"", ar:"cena", plain:"cena", translit:"CHEH-na", meaning:"رات کا کھانا" },
      { icon:"", ar:"gelato", plain:"gelato", translit:"jeh-LAH-toh", meaning:"آئس کریم" },
      { icon:"", ar:"perché", plain:"perché", translit:"pehr-KEH", meaning:"کیوں / کیونکہ" }
    ]
  },

  {
    id: 1,
    unit: "u1",
    label: "سبق 1",
    difficulty: 1,
    requires: 0,
    icon: "👋",
    title: "سلام اور تعارف",
    arabicTitle: "Saluti e Presentazioni",
    desc: "سلام کرنا، اپنا تعارف کروانا، اور فعل essere (ہونا) سے ملاقات۔",
    locked: false,

    content: [
      { type:"p", text:"آئیے زبان کے سب سے مفید فعل سے شروع کرتے ہیں: essere (\"ہونا\")۔ آپ اسے مسلسل استعمال کریں گے، تعارف سے ہی شروعات ہوتی ہے۔" },
      { type:"h", text:"Essere — حال کا صیغہ" },
      { type:"pattern", ar:"io sono · tu sei · lui/lei è", translit:"EE-oh SO-no · too SEH-ee · loo-EE / LEH-ee EH", desc:"میں ہوں · تم ہو (غیر رسمی) · وہ ہے — یہ تین صورتیں سب سے زیادہ استعمال ہوتی ہیں جب کسی سے پہلی بار ملاقات ہو۔" },
      { type:"p", text:"غور کریں کہ اطالوی زبان اکثر فاعل کا ضمیر (io، tu، lui/lei) استعمال ہی نہیں کرتی، کیونکہ فعل کی صورت سے ہی پتا چل جاتا ہے کہ بات کس کی ہو رہی ہے — \"Sono Marco\" (میں مارکو ہوں) اکیلے بھی بالکل فطری جملہ ہے۔" },
      { type:"h", text:"بنیادی سلام" },
      { type:"examples", items:[
        { icon:"👋", ar:"Ciao!", translit:"chow", meaning:"ہیلو! / الوداع! (غیر رسمی، کسی بھی وقت)" },
        { icon:"☀️", ar:"Buongiorno", translit:"bwohn-JOR-no", meaning:"صبح بخیر / دن بخیر (رسمی)" },
        { icon:"🌆", ar:"Buonasera", translit:"bwoh-na-SEH-ra", meaning:"شام بخیر" },
        { icon:"🌙", ar:"Buonanotte", translit:"bwoh-na-NOHT-teh", meaning:"شب بخیر" }
      ]},
      { type:"note", html:"<strong>رسمی اور غیر رسمی:</strong> Ciao صرف دوستوں، خاندان اور ہم عمر لوگوں کے لیے ہے۔ کسی ایسے شخص سے جسے آپ اچھی طرح نہیں جانتے — خاص طور پر بزرگ افراد یا کاروباری ماحول میں — Buongiorno/Buonasera استعمال کریں۔" }
    ],

    vocabCategories: [
      { name:"کسی سے ملاقات", words:[
        {icon:"", ar:"Come ti chiami?", translit:"KOH-meh tee kee-AH-mee", en:"تمہارا نام کیا ہے؟ (غیر رسمی)"},
        {icon:"", ar:"Mi chiamo...", translit:"mee kee-AH-mo", en:"میرا نام ... ہے"},
        {icon:"", ar:"Piacere", translit:"pya-CHEH-reh", en:"آپ سے مل کر خوشی ہوئی"},
        {icon:"", ar:"Come stai?", translit:"KOH-meh sty", en:"تم کیسے ہو؟ (غیر رسمی)"},
        {icon:"", ar:"Sto bene, grazie", translit:"stoh BEH-neh GRAH-tsee-eh", en:"میں ٹھیک ہوں، شکریہ"},
        {icon:"", ar:"E tu?", translit:"eh too", en:"اور تم؟"},
        {icon:"", ar:"Di dove sei?", translit:"dee DOH-veh sey", en:"تم کہاں سے ہو؟"},
        {icon:"", ar:"Sono di...", translit:"SOH-no dee", en:"میں ... سے ہوں"}
      ]}
    ],

    exercises: [
      {
        id:"it1-ex1", type:"mcq", title:"مشق 1 — Essere اور سلام",
        instructions:"درست جواب منتخب کریں۔",
        items:[
          { promptText:"اطالوی میں \"میں ہوں\" کیا ہے؟", options:["tu sei","io sono","lui è"], correct:1 },
          { promptText:"کون سا سلام صرف دوستوں/خاندان کے لیے ہے؟", options:["Buongiorno","Ciao","Buonasera"], correct:1 },
          { promptText:"\"Piacere\" کا مطلب کیا ہے؟", options:["برائے مہربانی","آپ سے مل کر خوشی ہوئی","الوداع"], correct:1 },
          { promptText:"\"Come ti chiami?\" کس چیز کا سوال ہے؟", options:["تم کیسے ہو؟","تمہارا نام کیا ہے؟","تم کہاں سے ہو؟"], correct:1 }
        ]
      },
      {
        id:"it1-ex2", type:"matching", title:"مشق 2 — جملہ ملائیں",
        instructions:"کسی فقرے پر ٹیپ کریں، پھر اس کے معنی پر ٹیپ کریں۔",
        pairs:[
          { left:"Ciao", right:"ہیلو / الوداع" },
          { left:"Sto bene, grazie", right:"میں ٹھیک ہوں، شکریہ" },
          { left:"Di dove sei?", right:"تم کہاں سے ہو؟" },
          { left:"Mi chiamo...", right:"میرا نام ... ہے" }
        ]
      },
      {
        id:"it1-ex3", type:"translate", title:"مشق 3 — ترجمہ کریں",
        instructions:"اردو مفہوم لکھیں۔",
        items:[
          { icon:"👋", ar:"Buongiorno, come stai?", keywords:["صبح بخیر","کیسے ہو"] },
          { icon:"🙂", ar:"Sono di Roma", keywords:["روم"] },
          { icon:"🤝", ar:"Piacere di conoscerti", keywords:["مل کر خوشی"] }
        ]
      },
      {
        id:"it1-ex4", type:"sentence", title:"مشق 4 — جملہ بنائیں",
        instructions:"الفاظ کو درست ترتیب میں ٹیپ کریں۔",
        items:[
          { words:["sono","Marco","Io"], answer:["Io","sono","Marco"] },
          { words:["stai?","Come"], answer:["Come","stai?"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"👋", ar:"Ciao, come stai?", plain:"Ciao, come stai?", translit:"chow KOH-meh sty", meaning:"ہیلو، تم کیسے ہو؟" },
      { icon:"🙂", ar:"Mi chiamo Sara", plain:"Mi chiamo Sara", translit:"mee kee-AH-mo SAH-ra", meaning:"میرا نام سارہ ہے" },
      { icon:"🤝", ar:"Piacere di conoscerti", plain:"Piacere di conoscerti", translit:"pya-CHEH-reh dee ko-NO-sher-tee", meaning:"آپ سے مل کر خوشی ہوئی" },
      { icon:"🌆", ar:"Buonasera a tutti", plain:"Buonasera a tutti", translit:"bwoh-na-SEH-ra ah TOOT-tee", meaning:"سب کو شام بخیر" }
    ]
  },

  {
    id: 2,
    unit: "u2",
    label: "سبق 2",
    difficulty: 2,
    requires: 1,
    icon: "📘",
    title: "آرٹیکلز، جنس اور تعداد",
    arabicTitle: "Articoli, Genere e Numero",
    desc: "ہر اطالوی اسم کی ایک جنس ہوتی ہے — اسے پہچاننا اور درست آرٹیکل لگانا سیکھیں۔",
    locked: false,

    content: [
      { type:"p", text:"ہر اطالوی اسم یا تو مذکر ہے یا مؤنث — کوئی غیر جانبدار (neutral) صورت نہیں ہوتی۔ خوش قسمتی سے لفظ کا آخری حرف عام طور پر بتا دیتا ہے کہ جنس کیا ہے: -o پر ختم ہونے والے زیادہ تر الفاظ مذکر ہوتے ہیں، -a پر ختم ہونے والے زیادہ تر مؤنث۔" },
      { type:"h", text:"معرف آرٹیکلز (\"the\")" },
      { type:"pattern", ar:"il libro · la casa · l'amico · lo studente", translit:"eel LEE-bro · la KAH-za · la-MEE-ko · lo stoo-DEHN-teh", desc:"il (مذکر، ہم صوت سے پہلے) · la (مؤنث، ہم صوت سے پہلے) · l' (کسی بھی حرفِ علت سے پہلے) · lo (مذکر، s+ہم صوت یا z سے پہلے)۔" },
      { type:"h", text:"جمع بنانا" },
      { type:"p", text:"کسی اسم کو جمع بنانے کے لیے آخری حرفِ علت بدل دیں: -o بن جاتا ہے -i، اور -a بن جاتا ہے -e۔ -e پر ختم ہونے والے الفاظ (خواہ مذکر ہوں یا مؤنث) جمع میں -i بن جاتے ہیں۔" },
      { type:"examples", items:[
        { icon:"📕", ar:"il libro → i libri", translit:"eel LEE-bro → ee LEE-bree", meaning:"کتاب → کتابیں" },
        { icon:"🏠", ar:"la casa → le case", translit:"la KAH-za → leh KAH-zeh", meaning:"گھر → گھر (جمع)" },
        { icon:"🔑", ar:"la chiave → le chiavi", translit:"la kee-AH-veh → leh kee-AH-vee", meaning:"چابی → چابیاں" }
      ]},
      { type:"note", html:"<strong>غیر معرف آرٹیکلز (\"ایک\")</strong> بھی اسی جنس کے اصول پر چلتے ہیں: un libro (ایک کتاب)، una casa (ایک گھر)، un amico (ایک دوست، حرفِ علت سے پہلے)، uno studente (s+ہم صوت سے پہلے)۔" }
    ],

    vocabCategories: [
      { name:"عام اسماء", words:[
        {icon:"📕", ar:"il libro", translit:"eel LEE-bro", en:"کتاب (مذکر)"},
        {icon:"🏠", ar:"la casa", translit:"la KAH-za", en:"گھر (مؤنث)"},
        {icon:"🍞", ar:"il pane", translit:"eel PAH-neh", en:"روٹی (مذکر)"},
        {icon:"🚗", ar:"la macchina", translit:"la MAHK-kee-na", en:"گاڑی (مؤنث)"},
        {icon:"🐕", ar:"il cane", translit:"eel KAH-neh", en:"کتا (مذکر)"},
        {icon:"👨", ar:"l'amico", translit:"la-MEE-ko", en:"دوست (مرد)"},
        {icon:"👩", ar:"l'amica", translit:"la-MEE-ka", en:"دوست (عورت)"},
        {icon:"🎓", ar:"lo studente", translit:"lo stoo-DEHN-teh", en:"طالب علم (مرد)"}
      ]}
    ],

    exercises: [
      {
        id:"it2-ex1", type:"mcq", title:"مشق 1 — درست آرٹیکل چنیں",
        instructions:"درست آرٹیکل منتخب کریں۔",
        items:[
          { promptText:"___ libro (کتاب)", options:["il","la","lo"], correct:0 },
          { promptText:"___ casa (گھر)", options:["il","la","l'"], correct:1 },
          { promptText:"___ amico (دوست، حرفِ علت سے پہلے)", options:["il","la","l'"], correct:2 },
          { promptText:"\"la casa\" کی جمع کیا ہے؟", options:["i casi","le case","le casi"], correct:1 }
        ]
      },
      {
        id:"it2-ex2", type:"matching", title:"مشق 2 — واحد سے جمع",
        instructions:"واحد اسم کو اس کی جمع سے ملائیں۔",
        pairs:[
          { left:"il libro", right:"i libri" },
          { left:"la casa", right:"le case" },
          { left:"la chiave", right:"le chiavi" },
          { left:"il cane", right:"i cani" }
        ]
      },
      {
        id:"it2-ex3", type:"translate", title:"مشق 3 — ترجمہ کریں",
        instructions:"اردو مفہوم لکھیں۔",
        items:[
          { icon:"📕", ar:"il libro", keywords:["کتاب"] },
          { icon:"🚗", ar:"la macchina", keywords:["گاڑی"] },
          { icon:"👩", ar:"l'amica", keywords:["دوست"] }
        ]
      },
      {
        id:"it2-ex4", type:"sentence", title:"مشق 4 — فقرہ بنائیں",
        instructions:"الفاظ کو درست ترتیب میں ٹیپ کریں۔",
        items:[
          { words:["cane", "il", "mio"], answer:["il","mio","cane"] },
          { words:["libri", "i", "sono qui"], answer:["i","libri","sono qui"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"📕", ar:"il libro", plain:"il libro", translit:"eel LEE-bro", meaning:"کتاب" },
      { icon:"🏠", ar:"la casa", plain:"la casa", translit:"la KAH-za", meaning:"گھر" },
      { icon:"👨", ar:"l'amico", plain:"l'amico", translit:"la-MEE-ko", meaning:"دوست" },
      { icon:"🐕", ar:"i cani", plain:"i cani", translit:"ee KAH-nee", meaning:"کتے" }
    ]
  },

  {
    id: 3,
    unit: "u3",
    label: "سبق 3",
    difficulty: 2,
    requires: 2,
    icon: "🤲",
    title: "Avere اور ملکیت",
    arabicTitle: "Avere e il Possesso",
    desc: "\"رکھنا\" کا فعل، اور اسم کی جنس کے مطابق صفت کی موافقت۔",
    locked: false,

    content: [
      { type:"p", text:"Avere (\"رکھنا\") دوسرا بنیادی فعل ہے — یہ ملکیت، عمر بتانے، اور چند ایسے تراکیب کے لیے استعمال ہوتا ہے جہاں انگریزی میں \"to be\" آتا ہے۔" },
      { type:"h", text:"Avere — حال کا صیغہ" },
      { type:"pattern", ar:"io ho · tu hai · lui/lei ha", translit:"EE-oh oh · too eye · loo-EE / LEH-ee ah", desc:"میرے پاس ہے · تمہارے پاس ہے (غیر رسمی) · اس کے پاس ہے۔ h ہمیشہ خاموش رہتا ہے۔" },
      { type:"note", html:"<strong>عمر بتانے کے لیے avere استعمال ہوتا ہے، essere نہیں:</strong> \"Ho venticinque anni\" کا لفظی مطلب ہے \"میرے پاس پچیس سال ہیں\" — یعنی اطالوی میں یوں کہا جاتا ہے \"میں پچیس سال کا ہوں\"۔" },
      { type:"h", text:"صفت کی موافقت" },
      { type:"p", text:"اطالوی صفتیں اس اسم کی جنس اور تعداد کے مطابق بدل جاتی ہیں جس کی وہ وضاحت کر رہی ہوں۔ -o پر ختم ہونے والی صفتوں کی چار صورتیں ہوتی ہیں (-o/-a/-i/-e)؛ -e پر ختم ہونے والی صفتیں صرف تعداد کے لیے بدلتی ہیں، جنس کے لیے نہیں۔" },
      { type:"examples", items:[
        { icon:"📕", ar:"un libro piccolo", translit:"oon LEE-bro PEEK-ko-lo", meaning:"ایک چھوٹی کتاب (مذکر)" },
        { icon:"🏠", ar:"una casa piccola", translit:"OO-na KAH-za PEEK-ko-la", meaning:"ایک چھوٹا گھر (مؤنث)" },
        { icon:"🚗", ar:"una macchina grande", translit:"OO-na MAHK-kee-na GRAHN-deh", meaning:"ایک بڑی گاڑی (-e صفت، جنس کے لیے نہیں بدلتی)" }
      ]}
    ],

    vocabCategories: [
      { name:"خاندان اور اشیاء", words:[
        {icon:"👨‍👩‍👧", ar:"la famiglia", translit:"la fa-MEE-lya", en:"خاندان"},
        {icon:"👦", ar:"il fratello", translit:"eel fra-TEHL-lo", en:"بھائی"},
        {icon:"👧", ar:"la sorella", translit:"la so-REHL-la", en:"بہن"},
        {icon:"👴", ar:"il nonno", translit:"eel NOHN-no", en:"دادا / نانا"},
        {icon:"🔑", ar:"le chiavi", translit:"leh kee-AH-vee", en:"چابیاں"},
        {icon:"📱", ar:"il telefono", translit:"eel teh-LEH-fo-no", en:"فون"},
        {icon:"✨", ar:"grande", translit:"GRAHN-deh", en:"بڑا"},
        {icon:"🤏", ar:"piccolo/a", translit:"PEEK-ko-lo/la", en:"چھوٹا"}
      ]}
    ],

    exercises: [
      {
        id:"it3-ex1", type:"mcq", title:"مشق 1 — Avere اور صفتیں",
        instructions:"درست جواب منتخب کریں۔",
        items:[
          { promptText:"اطالوی میں \"میرے پاس ہے\" کیا ہے؟", options:["io sono","io ho","io hai"], correct:1 },
          { promptText:"عمر بتانے کے لیے اطالوی میں کون سا فعل استعمال ہوتا ہے؟", options:["essere","avere","کوئی نہیں"], correct:1 },
          { promptText:"\"ایک چھوٹا گھر\" (casa مؤنث ہے) کیا ہے؟", options:["un casa piccolo","una casa piccola","una casa piccolo"], correct:1 },
          { promptText:"\"grande\" (بڑا) کس چیز کے لیے بدلتا ہے؟", options:["صرف جنس کے لیے","صرف تعداد کے لیے","جنس اور تعداد دونوں کے لیے"], correct:1 }
        ]
      },
      {
        id:"it3-ex2", type:"matching", title:"مشق 2 — خاندان کا لفظ ملائیں",
        instructions:"کسی لفظ پر ٹیپ کریں، پھر اس کے معنی پر ٹیپ کریں۔",
        pairs:[
          { left:"il fratello", right:"بھائی" },
          { left:"la sorella", right:"بہن" },
          { left:"il nonno", right:"دادا / نانا" },
          { left:"la famiglia", right:"خاندان" }
        ]
      },
      {
        id:"it3-ex3", type:"translate", title:"مشق 3 — ترجمہ کریں",
        instructions:"اردو مفہوم لکھیں۔",
        items:[
          { icon:"🤲", ar:"Ho un fratello", keywords:["بھائی"] },
          { icon:"🔑", ar:"Ho le chiavi", keywords:["چابیاں"] },
          { icon:"🏠", ar:"una casa grande", keywords:["بڑا گھر","گھر"] }
        ]
      },
      {
        id:"it3-ex4", type:"sentence", title:"مشق 4 — جملہ بنائیں",
        instructions:"الفاظ کو درست ترتیب میں ٹیپ کریں۔",
        items:[
          { words:["un","Ho","fratello"], answer:["Ho","un","fratello"] },
          { words:["piccola", "casa", "una", "Ho"], answer:["Ho","una","casa","piccola"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🤲", ar:"Ho un fratello e una sorella", plain:"Ho un fratello e una sorella", translit:"oh oon fra-TEHL-lo eh OO-na so-REHL-la", meaning:"میرا ایک بھائی اور ایک بہن ہے" },
      { icon:"🎂", ar:"Ho venticinque anni", plain:"Ho venticinque anni", translit:"oh vehn-tee-CHEEN-kweh AHN-nee", meaning:"میں پچیس سال کا ہوں" },
      { icon:"🏠", ar:"La mia casa è piccola", plain:"La mia casa è piccola", translit:"la MEE-ah KAH-za eh PEEK-ko-la", meaning:"میرا گھر چھوٹا ہے" },
      { icon:"📱", ar:"Ho il telefono", plain:"Ho il telefono", translit:"oh eel teh-LEH-fo-no", meaning:"میرے پاس فون ہے" }
    ]
  },

  {
    id: 4,
    unit: "u4",
    label: "سبق 4",
    difficulty: 3,
    requires: 3,
    icon: "🗣️",
    title: "حال کے افعال",
    arabicTitle: "I Verbi al Presente",
    desc: "تین باقاعدہ فعل خاندان — -are، -ere، -ire — اور ان سے حقیقی جملے بنانا۔",
    locked: false,

    content: [
      { type:"p", text:"تقریباً ہر اطالوی فعل تین خاندانوں میں سے کسی ایک سے تعلق رکھتا ہے، جن کے نام ان کے مصدری خاتمے (infinitive ending) پر رکھے گئے ہیں: -are، -ere یا -ire۔ ایک بار قاعدہ سیکھ لیں تو سینکڑوں افعال کا صیغہ بنا سکتے ہیں۔" },
      { type:"h", text:"-are افعال: parlare (بولنا)" },
      { type:"pattern", ar:"io parlo · tu parli · lui/lei parla", translit:"PAR-lo · PAR-lee · PAR-la", desc:"-are ہٹا کر io/tu/lui-lei کے لیے -o / -i / -a لگائیں۔" },
      { type:"h", text:"-ere افعال: scrivere (لکھنا)" },
      { type:"pattern", ar:"io scrivo · tu scrivi · lui/lei scrive", translit:"SKREE-vo · SKREE-vee · SKREE-veh", desc:"-ere ہٹا کر -o / -i / -e لگائیں۔" },
      { type:"h", text:"-ire افعال: dormire (سونا)" },
      { type:"pattern", ar:"io dormo · tu dormi · lui/lei dorme", translit:"DOR-mo · DOR-mee · DOR-meh", desc:"-ire ہٹا کر -o / -i / -e لگائیں — یہ خاتمے -ere افعال جیسے ہی ہیں۔" },
      { type:"note", html:"<strong>غور کریں:</strong> \"io\" کی صورت ہمیشہ -o پر ختم ہوتی ہے، اور \"tu\" کی صورت ہمیشہ -i پر — چاہے فعل کسی بھی خاندان کا ہو۔ صرف یہی بات سیکھ لینا بہت آگے لے جاتا ہے۔" }
    ],

    vocabCategories: [
      { name:"روزمرہ افعال", words:[
        {icon:"🗣️", ar:"parlare", translit:"par-LAH-reh", en:"بولنا"},
        {icon:"✍️", ar:"scrivere", translit:"skree-VEH-reh", en:"لکھنا"},
        {icon:"😴", ar:"dormire", translit:"dor-MEE-reh", en:"سونا"},
        {icon:"🍝", ar:"mangiare", translit:"man-JAH-reh", en:"کھانا"},
        {icon:"📖", ar:"leggere", translit:"LEHD-jeh-reh", en:"پڑھنا"},
        {icon:"🎧", ar:"sentire", translit:"sehn-TEE-reh", en:"سننا / محسوس کرنا"},
        {icon:"🇮🇹", ar:"l'italiano", translit:"lee-ta-LYAH-no", en:"اطالوی زبان"},
        {icon:"📧", ar:"l'email", translit:"lee-MEH-eel", en:"ای میل"}
      ]}
    ],

    exercises: [
      {
        id:"it4-ex1", type:"mcq", title:"مشق 1 — صیغہ بنائیں",
        instructions:"درست صیغہ منتخب کریں۔",
        items:[
          { promptText:"Io ___ italiano (میں اطالوی بولتا ہوں)۔", options:["parlo","parli","parla"], correct:0 },
          { promptText:"Tu ___ un'email (تم ای میل لکھتے ہو)۔", options:["scrivo","scrivi","scrive"], correct:1 },
          { promptText:"Lei ___ molto (وہ بہت سوتی ہے)۔", options:["dormo","dormi","dorme"], correct:2 },
          { promptText:"کون سا خاتمہ تینوں خاندانوں میں \"io\" (میں) کی صورت بتاتا ہے؟", options:["-o","-i","-e"], correct:0 }
        ]
      },
      {
        id:"it4-ex2", type:"matching", title:"مشق 2 — فعل ملائیں",
        instructions:"کسی فعل پر ٹیپ کریں، پھر اس کے معنی پر ٹیپ کریں۔",
        pairs:[
          { left:"parlare", right:"بولنا" },
          { left:"scrivere", right:"لکھنا" },
          { left:"dormire", right:"سونا" },
          { left:"mangiare", right:"کھانا" }
        ]
      },
      {
        id:"it4-ex3", type:"translate", title:"مشق 3 — ترجمہ کریں",
        instructions:"اردو مفہوم لکھیں۔",
        items:[
          { icon:"🗣️", ar:"Io parlo italiano", keywords:["اطالوی بولتا"] },
          { icon:"🍝", ar:"Lui mangia la pasta", keywords:["پاستا","کھاتا"] },
          { icon:"📖", ar:"Tu leggi un libro", keywords:["کتاب پڑھتے"] }
        ]
      },
      {
        id:"it4-ex4", type:"sentence", title:"مشق 4 — جملہ بنائیں",
        instructions:"الفاظ کو درست ترتیب میں ٹیپ کریں۔",
        items:[
          { words:["italiano","parlo","Io"], answer:["Io","parlo","italiano"] },
          { words:["un'email","Lei","scrive"], answer:["Lei","scrive","un'email"] }
        ]
      },
      {
        id:"it4-ex5", type:"creative", title:"مشق 5 — خود لکھیں",
        instructions:"اس سبق کے کسی بھی فعل کا استعمال کرتے ہوئے اپنے بارے میں ایک سچا جملہ لکھیں۔",
        items:[
          { prompt:"نمونہ: Io + فعل + کوئی چیز۔ (\"Io parlo inglese\" — میں انگریزی بولتا ہوں۔)" }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🗣️", ar:"Io parlo un po' di italiano", plain:"Io parlo un po' di italiano", translit:"EE-oh PAR-lo oon poh dee ee-ta-LYAH-no", meaning:"میں تھوڑی سی اطالوی بولتا ہوں" },
      { icon:"🍝", ar:"Lui mangia la pasta", plain:"Lui mangia la pasta", translit:"LOO-ee MAN-ja la PAH-sta", meaning:"وہ پاستا کھاتا ہے" },
      { icon:"📖", ar:"Tu leggi molto", plain:"Tu leggi molto", translit:"too LEHD-jee MOHL-to", meaning:"تم بہت پڑھتے ہو" },
      { icon:"😴", ar:"Dormo otto ore", plain:"Dormo otto ore", translit:"DOR-mo OHT-toh OH-reh", meaning:"میں آٹھ گھنٹے سوتا ہوں" }
    ]
  },

  {
    id: 5,
    unit: "u5",
    label: "سبق 5",
    difficulty: 3,
    requires: 4,
    icon: "🔢",
    title: "گنتی، رنگ اور سوالات",
    arabicTitle: "Numeri, Colori e Domande",
    desc: "ایک سے دس تک گنیں، رنگوں سے اشیاء کی وضاحت کریں، اور کون/کیا/کہاں/کب/کیوں پوچھیں۔",
    locked: false,

    content: [
      { type:"h", text:"گنتی 1 سے 10" },
      { type:"pattern", ar:"uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci", translit:"OO-no, DOO-eh, treh, KWAHT-tro, CHEEN-kweh, seh-ee, SEHT-teh, OHT-toh, NOH-veh, dee-EH-chee", desc:"انہیں اچھی طرح یاد کر لینا مفید ہے — قیمتوں، وقت اور عمر بتانے کے لیے مسلسل کام آئیں گے۔" },
      { type:"h", text:"رنگ" },
      { type:"p", text:"رنگ بھی صفتیں ہیں، اس لیے یہ اسم کے مطابق بدلتے ہیں — بالکل ویسے ہی جیسے سبق 3 میں سیکھا تھا: una macchina rossa (ایک سرخ گاڑی)، un libro rosso (ایک سرخ کتاب)۔" },
      { type:"h", text:"سوالیہ الفاظ" },
      { type:"p", text:"اطالوی سوالات کے لیے انگریزی \"do you...\" جیسی خاص ترتیب کی ضرورت نہیں — بس جملے کے شروع میں سوالیہ لفظ رکھ دیں، یا ہاں/نہیں کے سوال کے لیے صرف آخر میں آواز کا زور بلند کر دیں۔" },
      { type:"examples", items:[
        { icon:"❓", ar:"Chi", translit:"kee", meaning:"کون" },
        { icon:"❓", ar:"Cosa", translit:"KOH-za", meaning:"کیا" },
        { icon:"❓", ar:"Dove", translit:"DOH-veh", meaning:"کہاں" },
        { icon:"❓", ar:"Quando", translit:"KWAHN-do", meaning:"کب" },
        { icon:"❓", ar:"Perché", translit:"pehr-KEH", meaning:"کیوں / کیونکہ" }
      ]},
      { type:"note", html:"<strong>ہاں/نہیں کے سوالات</strong> بالکل جملے جیسی ترتیب میں ہوتے ہیں — \"Parli italiano?\" (کیا تم اطالوی بولتے ہو؟) دراصل \"Parli italiano.\" ہی ہے، بس آواز کا زور بلند کر کے یا تحریر میں سوالیہ نشان لگا کر۔" }
    ],

    vocabCategories: [
      { name:"رنگ", words:[
        {icon:"🔴", ar:"rosso/a", translit:"ROHS-so/sa", en:"سرخ"},
        {icon:"🔵", ar:"blu", translit:"bloo", en:"نیلا"},
        {icon:"🟢", ar:"verde", translit:"VEHR-deh", en:"سبز"},
        {icon:"🟡", ar:"giallo/a", translit:"JAHL-lo/la", en:"پیلا"},
        {icon:"⚫", ar:"nero/a", translit:"NEH-ro/ra", en:"کالا"},
        {icon:"⚪", ar:"bianco/a", translit:"BYAHN-ko/ka", en:"سفید"}
      ]}
    ],

    exercises: [
      {
        id:"it5-ex1", type:"mcq", title:"مشق 1 — گنتی اور سوالات",
        instructions:"درست جواب منتخب کریں۔",
        items:[
          { promptText:"اطالوی میں \"پانچ\" کیا ہے؟", options:["quattro","cinque","sei"], correct:1 },
          { promptText:"اطالوی میں \"کہاں\" کیا ہے؟", options:["Chi","Dove","Quando"], correct:1 },
          { promptText:"ایک سرخ گاڑی (macchina مؤنث ہے) کیا ہے؟", options:["una macchina rosso","una macchina rossa","un macchina rossa"], correct:1 },
          { promptText:"کسی جملے کو ہاں/نہیں کے سوال میں بدلنے کے لیے اطالوی کیا کرتی ہے؟", options:["شروع میں \"do\" لگاتی ہے","فعل اور فاعل کی جگہ بدلتی ہے","بس آواز کا زور بلند کرتی ہے / سوالیہ نشان لگاتی ہے"], correct:2 }
        ]
      },
      {
        id:"it5-ex2", type:"matching", title:"مشق 2 — عدد ملائیں",
        instructions:"کسی عدد کے لفظ پر ٹیپ کریں، پھر اس کے ہندسے پر ٹیپ کریں۔",
        pairs:[
          { left:"tre", right:"3" },
          { left:"sette", right:"7" },
          { left:"nove", right:"9" },
          { left:"dieci", right:"10" }
        ]
      },
      {
        id:"it5-ex3", type:"translate", title:"مشق 3 — ترجمہ کریں",
        instructions:"اردو مفہوم لکھیں۔",
        items:[
          { icon:"❓", ar:"Dove abiti?", keywords:["کہاں رہتے"] },
          { icon:"🔴", ar:"una macchina rossa", keywords:["سرخ گاڑی","گاڑی"] },
          { icon:"❓", ar:"Perché studi l'italiano?", keywords:["کیوں","اطالوی سیکھتے"] }
        ]
      },
      {
        id:"it5-ex4", type:"sentence", title:"مشق 4 — سوال بنائیں",
        instructions:"الفاظ کو درست ترتیب میں ٹیپ کریں۔",
        items:[
          { words:["abiti?", "Dove"], answer:["Dove","abiti?"] },
          { words:["italiano?", "studi", "Perché", "l'"], answer:["Perché","studi","l'","italiano?"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🔢", ar:"Uno, due, tre, quattro, cinque", plain:"Uno, due, tre, quattro, cinque", translit:"OO-no DOO-eh treh KWAHT-tro CHEEN-kweh", meaning:"ایک، دو، تین، چار، پانچ" },
      { icon:"❓", ar:"Dove abiti?", plain:"Dove abiti?", translit:"DOH-veh AH-bee-tee", meaning:"تم کہاں رہتے ہو؟" },
      { icon:"🔴", ar:"Mi piace il colore rosso", plain:"Mi piace il colore rosso", translit:"mee PYA-cheh eel ko-LOH-reh ROHS-so", meaning:"مجھے سرخ رنگ پسند ہے" },
      { icon:"❓", ar:"Perché studi l'italiano?", plain:"Perché studi l'italiano?", translit:"pehr-KEH STOO-dee lee-ta-LYAH-no", meaning:"تم اطالوی زبان کیوں سیکھ رہے ہو؟" }
    ]
  },

  {
    id: 6,
    unit: "u6",
    label: "سبق 6",
    difficulty: 4,
    requires: 5,
    icon: "🧭",
    title: "حروفِ جار اور Andare (جانا)",
    arabicTitle: "Preposizioni e Andare",
    desc: "فعل andare، اور وہ حروفِ جار جو آپ کو منزل تک پہنچاتے ہیں۔",
    locked: false,

    content: [
      { type:"p", text:"اطالوی میں چھوٹے الفاظ بھی بڑا کردار ادا کرتے ہیں۔ اس سبق میں andare (\"جانا\") سیکھیں گے — ایک بے قاعدہ فعل جو آپ مسلسل استعمال کریں گے — اور اس کے ساتھ آنے والے حروفِ جار بھی۔" },
      { type:"h", text:"Andare — حال کا صیغہ" },
      { type:"pattern", ar:"io vado · tu vai · lui/lei va", translit:"VAH-do · VAH-ee · vah", desc:"میں جاتا/جاتی ہوں · تم جاتے/جاتی ہو (غیر رسمی) · وہ جاتا/جاتی ہے۔ یہ فعل بے قاعدہ ہے — سبق 4 کے -are قاعدے پر عمل نہیں کرتا، اس لیے اسے الگ سے یاد کرنا بہتر ہے۔" },
      { type:"h", text:"A بمقابلہ In" },
      { type:"p", text:"دونوں کا مطلب تقریباً \"کی طرف\" ہے، لیکن انتخاب منزل پر منحصر ہے: کسی شہر یا \"اسکول\" جیسے مقررہ محاورے سے پہلے a؛ کسی ملک یا بند جگہ سے پہلے in۔" },
      { type:"examples", items:[
        { icon:"🏫", ar:"Vado a scuola", translit:"VAH-do ah SKWOH-la", meaning:"میں اسکول جاتا ہوں" },
        { icon:"🏢", ar:"Vado in ufficio", translit:"VAH-do een oof-FEE-cho", meaning:"میں دفتر جاتا ہوں" },
        { icon:"🇮🇹", ar:"Vado in Italia", translit:"VAH-do een ee-TAH-lya", meaning:"میں اٹلی جاتا ہوں" }
      ]},
      { type:"note", html:"<strong>\"گھر\" خاص ہے:</strong> جیسے انگریزی میں \"I go home\" کہا جاتا ہے (بغیر \"to the\" کے)، ویسے ہی اطالوی میں <em>vado a casa</em> کہا جاتا ہے — یہاں بھی کسی آرٹیکل کی ضرورت نہیں۔" }
    ],

    vocabCategories: [
      { name:"جگہیں", words:[
        {icon:"🏫", ar:"la scuola", translit:"la SKWOH-la", en:"اسکول"},
        {icon:"💼", ar:"il lavoro", translit:"eel la-VOH-ro", en:"کام / نوکری"},
        {icon:"🛒", ar:"il mercato", translit:"eel mehr-KAH-to", en:"بازار"},
        {icon:"🏢", ar:"l'ufficio", translit:"loof-FEE-cho", en:"دفتر"},
        {icon:"🍽️", ar:"il ristorante", translit:"eel ree-sto-RAHN-teh", en:"ریستوران"},
        {icon:"✈️", ar:"l'aeroporto", translit:"la-eh-ro-POR-to", en:"ہوائی اڈا"},
        {icon:"🚉", ar:"la stazione", translit:"la sta-tsee-OH-neh", en:"اسٹیشن"},
        {icon:"🌳", ar:"il parco", translit:"eel PAR-ko", en:"پارک"}
      ]}
    ],

    exercises: [
      {
        id:"it6-ex1", type:"mcq", title:"مشق 1 — Andare اور حروفِ جار",
        instructions:"درست جواب منتخب کریں۔",
        items:[
          { promptText:"Io ___ a scuola (میں اسکول جاتا ہوں)۔", options:["vado","vai","va"], correct:0 },
          { promptText:"Tu ___ in ufficio (تم دفتر جاتے ہو)۔", options:["vado","vai","va"], correct:1 },
          { promptText:"کون سا حرفِ جار کسی ملک، جیسے \"Italia\"، سے پہلے آتا ہے؟", options:["a","in","di"], correct:1 },
          { promptText:"کون سا حرفِ جار مقررہ فقرے \"go to school\" کے ساتھ آتا ہے؟", options:["a","in","di"], correct:0 }
        ]
      },
      {
        id:"it6-ex2", type:"matching", title:"مشق 2 — جگہ ملائیں",
        instructions:"کسی جگہ پر ٹیپ کریں، پھر اس کے معنی پر ٹیپ کریں۔",
        pairs:[
          { left:"la scuola", right:"اسکول" },
          { left:"il lavoro", right:"کام" },
          { left:"il ristorante", right:"ریستوران" },
          { left:"l'aeroporto", right:"ہوائی اڈا" }
        ]
      },
      {
        id:"it6-ex3", type:"translate", title:"مشق 3 — ترجمہ کریں",
        instructions:"اردو مفہوم لکھیں۔",
        items:[
          { icon:"🧭", ar:"Vado a scuola", keywords:["اسکول"] },
          { icon:"🧭", ar:"Vado in Italia", keywords:["اٹلی"] },
          { icon:"🛒", ar:"Il mercato è grande", keywords:["بازار"] }
        ]
      },
      {
        id:"it6-ex4", type:"sentence", title:"مشق 4 — جملہ بنائیں",
        instructions:"الفاظ کو درست ترتیب میں ٹیپ کریں۔",
        items:[
          { words:["scuola","a","Vado"], answer:["Vado","a","scuola"] },
          { words:["Italia","in","Vado"], answer:["Vado","in","Italia"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🏫", ar:"Vado a scuola", plain:"Vado a scuola", translit:"VAH-do ah SKWOH-la", meaning:"میں اسکول جاتا ہوں" },
      { icon:"💼", ar:"Vado in ufficio", plain:"Vado in ufficio", translit:"VAH-do een oof-FEE-cho", meaning:"میں دفتر جاتا ہوں" },
      { icon:"❓", ar:"Dove vai?", plain:"Dove vai?", translit:"DOH-veh vah-EE", meaning:"تم کہاں جا رہے ہو؟" },
      { icon:"🇮🇹", ar:"Vado in Italia con un amico", plain:"Vado in Italia con un amico", translit:"VAH-do een ee-TAH-lya kohn oon a-MEE-ko", meaning:"میں ایک دوست کے ساتھ اٹلی جا رہا ہوں" }
    ]
  },

  {
    id: 7,
    unit: "u7",
    label: "سبق 7",
    difficulty: 4,
    requires: 6,
    icon: "🎨",
    title: "ملکیتی صفتیں اور لوگوں کی وضاحت",
    arabicTitle: "Aggettivi Possessivi e Descrizioni",
    desc: "\"میرا\" اور \"تمہارا\"، اور شکل و شخصیت بیان کرنے کے الفاظ۔",
    locked: false,

    content: [
      { type:"p", text:"اطالوی میں \"میرا\" اور \"تمہارا\" جیسے ملکیتی الفاظ دراصل صفتیں ہیں — یعنی یہ اس چیز کے مطابق بدلتے ہیں جو رکھی گئی ہے، نہ کہ اس شخص کے مطابق جو رکھتا ہے۔ یہ بات بہت سے سیکھنے والوں کو الجھا دیتی ہے، اس لیے اسے آہستگی سے سمجھنا بہتر ہے۔" },
      { type:"h", text:"Mio/Mia (میرا)" },
      { type:"pattern", ar:"il mio libro · la mia casa · i miei libri · le mie case", translit:"eel MEE-oh LEE-bro · la MEE-ah KAH-za · ee mee-EH-ee LEE-bree · leh MEE-eh KAH-zeh", desc:"میری کتاب · میرا گھر · میری کتابیں · میرے گھر — mio/mia/miei/mie سب کا مطلب \"میرا\" ہے، لیکن خاتمہ اس چیز کے مطابق بدلتا ہے جو رکھی گئی ہے، کبھی بھی رکھنے والے کے مطابق نہیں۔" },
      { type:"h", text:"Tuo/Tua (تمہارا)" },
      { type:"p", text:"\"تمہارا\" (غیر رسمی) بالکل اسی قاعدے پر چلتا ہے: il tuo libro، la tua casa، i tuoi libri، le tue case۔" },
      { type:"h", text:"لوگوں کی وضاحت" },
      { type:"examples", items:[
        { icon:"📏", ar:"Lui è alto", translit:"loo-EE eh AHL-to", meaning:"وہ (مرد) لمبا ہے" },
        { icon:"😊", ar:"Lei è simpatica", translit:"lehy eh seem-PAH-tee-ka", meaning:"وہ (عورت) مہربان/اچھی ہے" },
        { icon:"🧠", ar:"Sono intelligente", translit:"SOH-no een-tel-lee-JEHN-teh", meaning:"میں ذہین ہوں (یہی لفظ ہر جنس کے لیے)" }
      ]},
      { type:"note", html:"<strong>سبق 3 یاد ہے؟</strong> intelligente کا خاتمہ -e پر ہے، اس لیے — grande کی طرح — یہ جنس کے لیے بالکل نہیں بدلتا، صرف تعداد کے لیے بدلتا ہے (intelligente → intelligenti)۔" }
    ],

    vocabCategories: [
      { name:"لوگوں کی وضاحت", words:[
        {icon:"📏", ar:"alto/a", translit:"AHL-to/ta", en:"لمبا"},
        {icon:"📏", ar:"basso/a", translit:"BAHS-so/sa", en:"چھوٹا قد"},
        {icon:"😊", ar:"simpatico/a", translit:"seem-PAH-tee-ko/ka", en:"مہربان، اچھا"},
        {icon:"😳", ar:"timido/a", translit:"TEE-mee-do/da", en:"شرمیلا"},
        {icon:"🧠", ar:"intelligente", translit:"een-tel-lee-JEHN-teh", en:"ذہین"},
        {icon:"👤", ar:"il mio / la mia", translit:"eel MEE-oh / la MEE-ah", en:"میرا"},
        {icon:"👤", ar:"il tuo / la tua", translit:"eel TOO-oh / la TOO-ah", en:"تمہارا"}
      ]}
    ],

    exercises: [
      {
        id:"it7-ex1", type:"mcq", title:"مشق 1 — ملکیتی الفاظ اور صفتیں",
        instructions:"درست جواب منتخب کریں۔",
        items:[
          { promptText:"\"میری کتاب\" (libro مذکر ہے) کیا ہے؟", options:["il mio libro","la mia libro","il tuo libro"], correct:0 },
          { promptText:"\"میرا گھر\" (casa مؤنث ہے) کیا ہے؟", options:["il mio casa","la mia casa","il mio case"], correct:1 },
          { promptText:"کون سی صفت دونوں جنسوں کے لیے بالکل ایک جیسی رہتی ہے؟", options:["alto","simpatica","intelligente"], correct:2 },
          { promptText:"\"Lei è simpatica\" کا مطلب کیا ہے؟", options:["وہ لمبی ہے","وہ مہربان ہے","وہ شرمیلی ہے"], correct:1 }
        ]
      },
      {
        id:"it7-ex2", type:"matching", title:"مشق 2 — وضاحت ملائیں",
        instructions:"کسی لفظ پر ٹیپ کریں، پھر اس کے معنی پر ٹیپ کریں۔",
        pairs:[
          { left:"alto", right:"لمبا" },
          { left:"basso", right:"چھوٹا قد" },
          { left:"timido", right:"شرمیلا" },
          { left:"intelligente", right:"ذہین" }
        ]
      },
      {
        id:"it7-ex3", type:"translate", title:"مشق 3 — ترجمہ کریں",
        instructions:"اردو مفہوم لکھیں۔",
        items:[
          { icon:"🤝", ar:"Il mio amico è simpatico", keywords:["دوست","مہربان"] },
          { icon:"🏠", ar:"La tua casa è grande", keywords:["گھر","بڑا"] },
          { icon:"😳", ar:"Sono timido", keywords:["شرمیلا"] }
        ]
      },
      {
        id:"it7-ex4", type:"sentence", title:"مشق 4 — جملہ بنائیں",
        instructions:"الفاظ کو درست ترتیب میں ٹیپ کریں۔",
        items:[
          { words:["alto","è","Lui"], answer:["Lui","è","alto"] },
          { words:["mia","È","casa","la"], answer:["È","la","mia","casa"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"📏", ar:"Il mio amico è alto", plain:"Il mio amico è alto", translit:"eel MEE-oh a-MEE-ko eh AHL-to", meaning:"میرا دوست لمبا ہے" },
      { icon:"😊", ar:"La mia sorella è simpatica", plain:"La mia sorella è simpatica", translit:"la MEE-ah so-REHL-la eh seem-PAH-tee-ka", meaning:"میری بہن مہربان ہے" },
      { icon:"😳", ar:"Sono timido", plain:"Sono timido", translit:"SOH-no TEE-mee-do", meaning:"میں شرمیلا ہوں" },
      { icon:"📕", ar:"Il tuo libro è grande", plain:"Il tuo libro è grande", translit:"eel TOO-oh LEE-bro eh GRAHN-deh", meaning:"تمہاری کتاب بڑی ہے" }
    ]
  },

  {
    id: 8,
    unit: "u8",
    label: "سبق 8",
    difficulty: 5,
    requires: 7,
    icon: "🍕",
    title: "کھانا اور آرڈر دینا",
    arabicTitle: "Cibo e Ordinare",
    desc: "ریستوران کے الفاظ، اور شائستگی سے کچھ مانگنے کا طریقہ۔",
    locked: false,

    content: [
      { type:"p", text:"اب جو کچھ سیکھا ہے اسے عملی جگہ استعمال کرنے کا وقت ہے: ریستوران۔ اس سبق میں شائستگی سے آرڈر دینا اور دستیاب چیزوں کے بارے میں بات کرنا سیکھیں گے۔" },
      { type:"h", text:"Vorrei (میں چاہوں گا/گی)" },
      { type:"pattern", ar:"Vorrei...", translit:"vor-RAY", desc:"میں ... چاہوں گا/گی — کچھ آرڈر کرنے یا مانگنے کا شائستہ طریقہ۔ voglio (میں چاہتا ہوں) سے کہیں زیادہ نرم، اور یہی وہ لفظ ہے جو آپ ریستورانوں میں حقیقتاً سنیں گے۔" },
      { type:"h", text:"C'è / Ci sono (ہے / ہیں)" },
      { type:"examples", items:[
        { icon:"🍕", ar:"C'è pizza?", translit:"cheh PEET-tsa", meaning:"کیا پیزا ہے؟" },
        { icon:"☕", ar:"Ci sono due caffè", translit:"chee SOH-no DOO-eh kaf-FEH", meaning:"دو کافیاں ہیں" }
      ]},
      { type:"note", html:"<strong>c'è</strong> واحد چیزوں کے لیے ہے، اور <strong>ci sono</strong> جمع کے لیے — بالکل وہی واحد/جمع کا احساس جو آپ اطالوی میں پہلے ہی کہیں اور استعمال کر چکے ہیں۔" }
    ],

    vocabCategories: [
      { name:"کھانا اور مشروبات", words:[
        {icon:"🍕", ar:"la pizza", translit:"la PEET-tsa", en:"پیزا"},
        {icon:"🍝", ar:"la pasta", translit:"la PAH-sta", en:"پاستا"},
        {icon:"☕", ar:"il caffè", translit:"eel kaf-FEH", en:"کافی"},
        {icon:"💧", ar:"l'acqua", translit:"LAHK-kwa", en:"پانی"},
        {icon:"🍷", ar:"il vino", translit:"eel VEE-no", en:"شراب"},
        {icon:"🍨", ar:"il gelato", translit:"eel jeh-LAH-to", en:"آئس کریم"},
        {icon:"🧾", ar:"il conto", translit:"eel KOHN-to", en:"بل"},
        {icon:"🙏", ar:"per favore", translit:"pehr fa-VOH-reh", en:"براہ کرم"}
      ]}
    ],

    exercises: [
      {
        id:"it8-ex1", type:"mcq", title:"مشق 1 — شائستگی سے آرڈر دینا",
        instructions:"درست جواب منتخب کریں۔",
        items:[
          { promptText:"\"میں چاہوں گا/گی\" کہنے کا شائستہ طریقہ کیا ہے؟", options:["voglio","vorrei","ho"], correct:1 },
          { promptText:"\"کیا پیزا ہے؟\" کیا ہے؟", options:["C'è pizza?","Ci sono pizza?","È pizza?"], correct:0 },
          { promptText:"\"دو کافیاں ہیں\" کیا ہے؟", options:["C'è due caffè","Ci sono due caffè","Sono due caffè"], correct:1 },
          { promptText:"\"بل، براہ کرم\" کیا ہے؟", options:["Il conto, per favore","Il vino, per favore","La pasta, per favore"], correct:0 }
        ]
      },
      {
        id:"it8-ex2", type:"matching", title:"مشق 2 — کھانا ملائیں",
        instructions:"کسی لفظ پر ٹیپ کریں، پھر اس کے معنی پر ٹیپ کریں۔",
        pairs:[
          { left:"la pizza", right:"پیزا" },
          { left:"il caffè", right:"کافی" },
          { left:"l'acqua", right:"پانی" },
          { left:"il gelato", right:"آئس کریم" }
        ]
      },
      {
        id:"it8-ex3", type:"translate", title:"مشق 3 — ترجمہ کریں",
        instructions:"اردو مفہوم لکھیں۔",
        items:[
          { icon:"🍕", ar:"Vorrei una pizza", keywords:["پیزا"] },
          { icon:"🍷", ar:"C'è vino?", keywords:["شراب"] },
          { icon:"🧾", ar:"Il conto, per favore", keywords:["بل"] }
        ]
      },
      {
        id:"it8-ex4", type:"sentence", title:"مشق 4 — جملہ بنائیں",
        instructions:"الفاظ کو درست ترتیب میں ٹیپ کریں۔",
        items:[
          { words:["pizza","una","Vorrei"], answer:["Vorrei","una","pizza"] },
          { words:["favore","conto","per","Il"], answer:["Il","conto","per","favore"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🍕", ar:"Vorrei una pizza", plain:"Vorrei una pizza", translit:"vor-RAY OO-na PEET-tsa", meaning:"میں ایک پیزا چاہوں گا/گی" },
      { icon:"🍨", ar:"C'è gelato?", plain:"C'è gelato?", translit:"cheh jeh-LAH-to", meaning:"کیا آئس کریم ہے؟" },
      { icon:"🧾", ar:"Il conto, per favore", plain:"Il conto, per favore", translit:"eel KOHN-to pehr fa-VOH-reh", meaning:"بل، براہ کرم" },
      { icon:"☕", ar:"Vorrei un caffè e un'acqua", plain:"Vorrei un caffè e un'acqua", translit:"vor-RAY oon kaf-FEH eh oo-NAHK-kwa", meaning:"میں ایک کافی اور ایک پانی چاہوں گا/گی" }
    ]
  },

  {
    id: 9,
    unit: "u9",
    label: "سبق 9",
    difficulty: 5,
    requires: 8,
    icon: "🕐",
    title: "وقت اور روزمرہ معمولات",
    arabicTitle: "L'Ora e la Routine Quotidiana",
    desc: "وقت بتانا، ہفتے کے دن، اور اضافی ضمیری افعال کا ابتدائی تعارف۔",
    locked: false,

    content: [
      { type:"h", text:"وقت بتانا" },
      { type:"pattern", ar:"Che ore è? · Sono le tre", translit:"keh OH-reh EH · SOH-no leh treh", desc:"وقت کیا ہوا ہے؟ · تین بج رہے ہیں — اطالوی زیادہ تر اوقات کے لیے \"sono le\" (لفظی معنی \"وہ ہیں\") استعمال کرتی ہے۔" },
      { type:"h", text:"اضافی ضمیری افعال: ایک ابتدائی جھلک" },
      { type:"p", text:"کچھ روزمرہ کام ایک چھوٹے اضافی ضمیر (mi) کے ساتھ آتے ہیں، فعل سے پہلے — لفظی معنی \"میں خود کو جگاتا ہوں\"، \"میں خود کو اٹھاتا ہوں\"۔ مکمل قاعدہ آپ کسی بعد کے سبق میں سیکھیں گے؛ ابھی صرف یہ دو عام فقرے پہچان لیں۔" },
      { type:"examples", items:[
        { icon:"⏰", ar:"Mi sveglio presto", translit:"mee ZVEH-lyo PREHS-to", meaning:"میں جلدی جاگتا ہوں" },
        { icon:"🧍", ar:"Mi alzo presto", translit:"mee AHL-tso PREHS-to", meaning:"میں جلدی اٹھتا ہوں" }
      ]},
      { type:"note", html:"<strong>ہفتے کے دن</strong> اطالوی میں بڑے حرف سے شروع نہیں ہوتے (انگریزی کے برعکس) — lunedì، نہ کہ Lunedì — اور ہفتہ اتوار سے نہیں بلکہ پیر سے شروع ہوتا ہے۔" }
    ],

    vocabCategories: [
      { name:"وقت اور دن", words:[
        {icon:"📅", ar:"lunedì", translit:"loo-neh-DEE", en:"پیر"},
        {icon:"📅", ar:"martedì", translit:"mar-teh-DEE", en:"منگل"},
        {icon:"📅", ar:"mercoledì", translit:"mehr-ko-leh-DEE", en:"بدھ"},
        {icon:"📅", ar:"giovedì", translit:"joh-veh-DEE", en:"جمعرات"},
        {icon:"📅", ar:"venerdì", translit:"veh-nehr-DEE", en:"جمعہ"},
        {icon:"⏰", ar:"mi sveglio", translit:"mee ZVEH-lyo", en:"میں جاگتا ہوں"},
        {icon:"🧍", ar:"mi alzo", translit:"mee AHL-tso", en:"میں اٹھتا ہوں"},
        {icon:"⏱️", ar:"presto", translit:"PREHS-to", en:"جلدی"},
        {icon:"📆", ar:"oggi", translit:"OHD-jee", en:"آج"}
      ]}
    ],

    exercises: [
      {
        id:"it9-ex1", type:"mcq", title:"مشق 1 — وقت اور معمولات",
        instructions:"درست جواب منتخب کریں۔",
        items:[
          { promptText:"\"وقت کیا ہوا ہے؟\" کیا ہے؟", options:["Che ore è?","Che giorno è?","Dove sei?"], correct:0 },
          { promptText:"\"پیر\" کیا ہے؟", options:["martedì","lunedì","venerdì"], correct:1 },
          { promptText:"\"میں جاگتا ہوں\" کیا ہے؟", options:["mi alzo","mi sveglio","sono sveglio"], correct:1 },
          { promptText:"زیادہ تر اوقات کے لیے اطالوی \"یہ ہے...\" کہنے کے لیے کیا استعمال کرتی ہے؟", options:["è le","sono le","ho le"], correct:1 }
        ]
      },
      {
        id:"it9-ex2", type:"matching", title:"مشق 2 — دن ملائیں",
        instructions:"کسی دن پر ٹیپ کریں، پھر اس کے معنی پر ٹیپ کریں۔",
        pairs:[
          { left:"lunedì", right:"پیر" },
          { left:"mercoledì", right:"بدھ" },
          { left:"giovedì", right:"جمعرات" },
          { left:"venerdì", right:"جمعہ" }
        ]
      },
      {
        id:"it9-ex3", type:"translate", title:"مشق 3 — ترجمہ کریں",
        instructions:"اردو مفہوم لکھیں۔",
        items:[
          { icon:"⏰", ar:"Mi sveglio presto", keywords:["جاگتا","جلدی"] },
          { icon:"📆", ar:"Oggi è lunedì", keywords:["پیر"] },
          { icon:"🕐", ar:"Che ore è?", keywords:["وقت"] }
        ]
      },
      {
        id:"it9-ex4", type:"sentence", title:"مشق 4 — جملہ بنائیں",
        instructions:"الفاظ کو درست ترتیب میں ٹیپ کریں۔",
        items:[
          { words:["è","lunedì","Oggi"], answer:["Oggi","è","lunedì"] },
          { words:["presto","sveglio","Mi"], answer:["Mi","sveglio","presto"] }
        ]
      }
    ],

    speakingPhrases: [
      { icon:"🕐", ar:"Che ore è?", plain:"Che ore è?", translit:"keh OH-reh EH", meaning:"وقت کیا ہوا ہے؟" },
      { icon:"⏰", ar:"Mi sveglio presto", plain:"Mi sveglio presto", translit:"mee ZVEH-lyo PREHS-to", meaning:"میں جلدی جاگتا ہوں" },
      { icon:"📆", ar:"Oggi è lunedì", plain:"Oggi è lunedì", translit:"OHD-jee eh loo-neh-DEE", meaning:"آج پیر ہے" },
      { icon:"🧍", ar:"Mi alzo presto", plain:"Mi alzo presto", translit:"mee AHL-tso PREHS-to", meaning:"میں جلدی اٹھتا ہوں" }
    ]
  },

  {
    id: 10,
    unit: "u10",
    label: "سبق 10",
    difficulty: 6,
    requires: 9,
    icon: "🚧",
    title: "مزید اسباق — جلد آ رہے ہیں",
    arabicTitle: "Presto...",
    desc: "اگلا سبق تیار کیا جا رہا ہے — مکمل اضافی ضمیری افعال، ماضی کا صیغہ، اور مزید روزمرہ اطالوی زبان جلد شامل ہوگی۔",
    locked: true
  }
];
