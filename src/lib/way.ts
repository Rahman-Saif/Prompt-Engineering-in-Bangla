

export type ChapterContentBlock =
  | { type: "h1"; text: string; id?: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "h4"; text: string; id?: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; lang?: string; code: string }
  | { type: "callout"; variant?: "note" | "tip" | "warning" | "key"; title?: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "divider" }
  | { type: "example"; title: string; prompt: string; output: string }
  | { type: "summary"; points: string[] }
  | { type: "markdown"; content: string };

export type Chapter = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  readingMinutes: number;
  partId: string;
  content?: ChapterContentBlock[]; // when missing -> placeholder rendering
  markdown?: string; // path to markdown file if using markdown
  tableOfContents?: Array<{ id: string; text: string; level: number }>;
};

export type Part = {
  id: string;
  title: string;
  description: string;
};

export const PARTS: Part[] = [
  { id: "foundations", title: "Part 1 — AI ও Prompt Engineering-এর ভিত্তি", description: "Core mental models for working with language models." },
  { id: "patterns", title: "Part 2 — Prompt লেখার মৌলিক কৌশল ", description: "Battle-tested patterns used by professionals every day." },
  { id: "advanced", title: "Part 3 —  ChatGPT Mastery ", description: "Agents, evaluation, safety, and shipping real systems." },

];

const richContent1: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ১: AI বিপ্লবের সূচনা" },

  { type: "p", text: "ভাবুন, আপনি এক সকালে ঘুম থেকে উঠে দেখলেন পৃথিবীর প্রায় প্রতিটি শিল্প—শিক্ষা, ব্যবসা, স্বাস্থ্য, সফটওয়্যার, এমনকি সৃজনশীল কাজ—সবকিছু আগের মতো নেই। মানুষ একা কাজ করছে না; তার পাশে আছে একটি নতুন “অদৃশ্য সহকারী” যেটা চিন্তা করতে পারে, লিখতে পারে, বিশ্লেষণ করতে পারে, এমনকি সিদ্ধান্ত নিতেও সাহায্য করতে পারে।" },

  { type: "p", text: "এই অদৃশ্য সহকারীর নামই কৃত্রিম বুদ্ধিমত্তা বা Artificial Intelligence (AI)।" },

  { type: "h2", text: "AI বিপ্লব কী?" },

  { type: "p", text: "AI বিপ্লব বলতে বোঝায় এমন একটি যুগের শুরু যেখানে মানুষের বুদ্ধিবৃত্তিক কাজের বড় অংশ কম্পিউটার বা AI সিস্টেম দ্বারা সম্পন্ন হচ্ছে বা সহায়তা পাচ্ছে। এটি শুধু একটি প্রযুক্তি নয়—এটি কাজ করার ধরন, শেখার পদ্ধতি এবং চিন্তা করার স্টাইলকে পরিবর্তন করে দিচ্ছে।" },

  { type: "callout", variant: "key", title: "সহজভাবে মনে রাখার উপায়", text: "AI বিপ্লব = মানুষের কাজ + মেশিনের বুদ্ধি" },

  { type: "h2", text: "AI কীভাবে শুরু হলো?" },

  { type: "ul", items: [
    "প্রথমে কম্পিউটার ছিল শুধু গণনা করার যন্ত্র",
    "পরে প্রোগ্রামিং দিয়ে কিছু নির্দিষ্ট কাজ শেখানো হলো",
    "তারপর machine learning এল, যেখানে ডেটা থেকে শেখা সম্ভব হলো",
    "এরপর deep learning, যা মানুষের মতো pattern চিনতে পারে",
    "আর এখন এসেছে generative AI, যা নতুন কনটেন্ট তৈরি করতে পারে"
  ]},

  { type: "p", text: "এই যাত্রা AI-কে একটি “tool” থেকে “assistant”-এ রূপান্তর করেছে।" },

  { type: "h2", text: "AI বিপ্লব কেন এত গুরুত্বপূর্ণ?" },

  { type: "ol", items: [
    "কাজের গতি বৃদ্ধি — আগে যে কাজ করতে ঘণ্টা বা দিন লাগত, এখন তা মিনিটে সম্ভব।",
    "জ্ঞান সবার জন্য সহজলভ্য — complex বিষয় সহজভাবে বোঝা সম্ভব।",
    "নতুন ধরনের কাজের সৃষ্টি — Prompt Engineering, AI Automation-এর মতো ক্যারিয়ার তৈরি হয়েছে।",
    "সিদ্ধান্ত গ্রহণে সহায়তা — ব্যবসা ও গবেষণায় AI সাহায্য করছে।"
  ]},

  { type: "h2", text: "AI কোথায় কোথায় প্রভাব ফেলছে?" },

  { type: "ul", items: [
    "শিক্ষা: AI tutor, personalized learning",
    "ব্যবসা: automation, market analysis",
    "সফটওয়্যার: code generation, debugging",
    "স্বাস্থ্য: diagnosis support, medical imaging",
    "কনটেন্ট: blog, video script, design"
  ]},

  { type: "h2", text: "মানুষের ভূমিকা কি শেষ হয়ে যাচ্ছে?" },

  { type: "p", text: "না। AI মানুষের বিকল্প নয়, বরং একটি শক্তিশালী সহকারী। AI তথ্য দিতে পারে, কিন্তু সিদ্ধান্ত নেওয়ার দায়িত্ব এখনো মানুষের।" },

  { type: "callout", variant: "tip", title: "গুরুত্বপূর্ণ ধারণা", text: "AI চিন্তা করে না মানুষের মতো অনুভব করে—সে pattern দেখে সিদ্ধান্তে সাহায্য করে।" },

  { type: "h2", text: "AI যুগে নতুন স্কিল" },

  { type: "ul", items: [
    "Prompt Engineering",
    "Critical Thinking",
    "Problem Solving",
    "AI Tool Usage",
    "Automation Understanding"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ" },

  { type: "p", text: "একজন ছাত্র এখন AI ব্যবহার করে সহজভাবে জটিল বিষয় বুঝতে পারে এবং নিজের মতো করে practice করতে পারে।" },

  { type: "p", text: "একজন developer এখন AI থেকে code suggestion, bug fix এবং architecture design সহায়তা পায়।" },

  { type: "h2", text: "AI বিপ্লবের ভবিষ্যৎ" },

  { type: "ul", items: [
    "আরও মানবসদৃশ assistant",
    "real-time decision system",
    "fully automated workflow",
    "personalized AI ecosystem"
  ]},

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "AI বিপ্লব হলো বুদ্ধিবৃত্তিক কাজের automation এবং augmentation-এর যুগ।",
    "এটি শিক্ষা, ব্যবসা, প্রযুক্তি এবং জীবনের সব ক্ষেত্রে পরিবর্তন আনছে।",
    "AI মানুষের বিকল্প নয়, বরং শক্তিশালী সহকারী।",
    "নতুন স্কিল শেখা এখন সময়ের দাবি।",
    "ভবিষ্যতে AI আরও গভীরভাবে আমাদের জীবনের অংশ হয়ে উঠবে।"
  ]}
];

// const quiz1: QuizQuestion[] = [
//   { q: "Which of these best describes a 'prompt'?", options: [
//     "A single user message sent to the model",
//     "Everything the model sees before generation: system, history, context, and user input",
//     "The model's response to a question",
//     "The fine-tuning dataset",
//   ], answer: 1, explain: "The prompt is the entire input window — not just the latest user message." },
//   { q: "Which is the cheapest first lever to improve LLM output?", options: [
//     "Fine-tuning the model",
//     "Switching to a larger model",
//     "Prompt engineering",
//     "Adding more GPUs",
//   ], answer: 2, explain: "Prompt changes cost nothing and ship in seconds." },
//   { q: "A great prompt usually contains all of the following EXCEPT…", options: [
//     "Role",
//     "Task",
//     "Format",
//     "The model's temperature setting",
//   ], answer: 3, explain: "Temperature is a sampling parameter, not part of the prompt body." },
//   { q: "Why are examples (few-shot) helpful?", options: [
//     "They give the model concrete patterns to imitate",
//     "They train the model permanently",
//     "They reduce the model's vocabulary",
//     "They are required by every API",
//   ], answer: 0, explain: "Examples steer the model toward the exact shape of output you want." },
// ];

const richContent2: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ২: Prompt Engineering কী?" },

  { type: "p", text: "ভাবুন, আপনি একজন খুবই intelligent সহকারীর সাথে কথা বলছেন—সে সব জানে, কিন্তু সমস্যা হলো সে আপনার মন পড়তে পারে না। আপনি যত ভালোভাবে প্রশ্ন বা নির্দেশনা দেবেন, সে তত ভালোভাবে কাজ করতে পারবে। আর আপনি যদি অস্পষ্টভাবে বলেন, তাহলে ফলাফলও অস্পষ্ট হবে।" },

  { type: "p", text: "এই “কীভাবে AI-কে ঠিকভাবে নির্দেশ দিতে হয়”—এই দক্ষতাকেই বলা হয় Prompt Engineering।" },

  { type: "h2", text: "Prompt Engineering কী?" },

  { type: "p", text: "Prompt Engineering হলো এমন একটি skill যেখানে আপনি AI (যেমন ChatGPT)-কে সঠিক, পরিষ্কার এবং কাঙ্ক্ষিত output পাওয়ার জন্য structured instruction (prompt) ডিজাইন করেন।" },

  { type: "callout", variant: "key", title: "সহজভাবে মনে রাখার উপায়", text: "Prompt Engineering = AI-কে সঠিকভাবে কী বলতে হবে সেটা ডিজাইন করার skill" },

  { type: "h2", text: "Prompt কী?" },

  { type: "p", text: "Prompt হলো আপনি AI-কে যে ইনপুট দেন—যেমন প্রশ্ন, নির্দেশনা বা context। উদাহরণ: “Explain AI simply”, “Write a blog post about AI”, “Solve this math problem step by step”" },

  { type: "h2", text: "Prompt Engineering কেন গুরুত্বপূর্ণ?" },

  { type: "p", text: "একই AI, কিন্তু আলাদা Prompt → আলাদা Result।" },

  { type: "p", text: "উদাহরণ:" },

  { type: "p", text: "❌ Weak Prompt: Tell me about AI → সাধারণ, অসংগঠিত উত্তর" },

  { type: "p", text: "✅ Strong Prompt: Explain Artificial Intelligence in simple terms for a beginner. Include real-life examples and keep it under 200 words → structured, clear, useful answer" },

  { type: "h2", text: "Prompt Engineering-এর লক্ষ্য" },

  { type: "ul", items: [
    "সঠিক তথ্য পাওয়া",
    "কাঠামোবদ্ধ (structured) উত্তর পাওয়া",
    "কম ভুল (hallucination) হওয়া",
    "নির্দিষ্ট format অনুযায়ী output পাওয়া"
  ]},

  { type: "h2", text: "Prompt Engineering কীভাবে কাজ করে?" },

  { type: "p", text: "Prompt Engineering মূলত AI-এর behavior guide করে। AI সাধারণভাবে pattern দেখে, context বোঝে এবং probability অনুযায়ী উত্তর তৈরি করে। আপনার prompt যত পরিষ্কার হবে, AI তত সঠিক pattern follow করবে।" },

  { type: "h2", text: "Prompt Engineering-এর মূল উপাদান" },

  { type: "ol", items: [
    "Instruction — AI-কে কী করতে হবে",
    "Context — কেন বা কোন situation-এ কাজটি করা হচ্ছে",
    "Input Data — যে তথ্য ব্যবহার করতে হবে",
    "Output Format — কেমন আকারে উত্তর চাই",
    "Constraints — শব্দ সংখ্যা, স্টাইল ইত্যাদি"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ" },

  { type: "p", text: "Poor Prompt: Write about machine learning" },

  { type: "p", text: "Good Prompt: Explain machine learning in simple terms for a beginner student. Use real-life examples and keep the explanation under 150 words in bullet points." },

  { type: "h2", text: "Prompt Engineering কোথায় ব্যবহার হয়?" },

  { type: "ul", items: [
    "ChatGPT ব্যবহার",
    "AI chatbot development",
    "Content creation",
    "Coding assistance",
    "Business automation",
    "Research support"
  ]},

  { type: "h2", text: "Prompt Engineering কেন একটি স্কিল?" },

  { type: "p", text: "আগে মানুষকে শুধু search skill দরকার ছিল, এখন দরকার AI communication skill। কারণ AI ব্যবহার করলেই ভালো result পাওয়া যায় না—ভালো result পেতে হলে ভালো prompt দরকার।" },

  { type: "h2", text: "Prompt Engineering vs Normal Questioning" },

  { type: "ul", items: [
    "Normal Questioning → অস্পষ্ট, general answer",
    "Prompt Engineering → structured, goal-oriented, optimized output"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ (Comparison)" },

  { type: "p", text: "❌ Tell me about marketing → generic answer" },

  { type: "p", text: "✅ Explain digital marketing strategies for small businesses in Bangladesh with practical examples and low-budget ideas → targeted, useful, actionable answer" },

  { type: "h2", text: "ভবিষ্যতে Prompt Engineering কেন গুরুত্বপূর্ণ হবে?" },

  { type: "p", text: "AI যত advanced হবে, prompt skill তত গুরুত্বপূর্ণ হবে। ভবিষ্যতে AI assistants সব কাজ করবে, মানুষ instruction দেবে এবং output নির্ভর করবে prompt-এর উপর।" },

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "Prompt Engineering হলো AI-কে সঠিকভাবে নির্দেশ দেওয়ার skill",
    "ভালো prompt মানে ভালো output",
    "এটি instruction, context, format এবং constraints নিয়ে গঠিত",
    "AI যুগে এটি একটি core skill হয়ে উঠছে",
    "ভবিষ্যতে AI ব্যবহারকারীদের জন্য এটি অপরিহার্য হবে"
  ]}
];

const richContent3: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ৩: AI কীভাবে চিন্তা করে?" },

  { type: "p", text: "ভাবুন, আপনি একজন বন্ধুকে একটা প্রশ্ন করলেন—“ঢাকা থেকে চট্টগ্রাম যেতে কত সময় লাগে?” সে সাথে সাথে একটা আন্দাজ দেয়, কিন্তু সে আসলে ভ্রমণ করে দেখে উত্তর দেয় না। বরং সে আগের অভিজ্ঞতা, শোনা তথ্য, আর সম্ভাব্যতার ভিত্তিতে একটা উত্তর তৈরি করে।" },

  { type: "p", text: "AI-ও ঠিক এভাবেই কাজ করে—সে মানুষের মতো “চিন্তা” করে না, বরং ডেটা এবং pattern দেখে সম্ভাব্য উত্তর তৈরি করে।" },

  { type: "h2", text: "AI আসলে কীভাবে চিন্তা করে?" },

  { type: "p", text: "AI মানুষের মতো অনুভব, যুক্তি বা সচেতন চিন্তা করে না। বরং এটি একটি mathematical system যা পরবর্তী শব্দ, সংখ্যা বা প্যাটার্ন predict করে।" },

  { type: "callout", variant: "key", title: "সহজভাবে মনে রাখার উপায়", text: "AI Thinking = Pattern Recognition + Probability Prediction" },

  { type: "h2", text: "AI-এর চিন্তার মূল ভিত্তি" },

  { type: "ol", items: [
    "Data (তথ্য) — AI প্রচুর টেক্সট, ছবি, কোড থেকে শেখে",
    "Patterns (প্যাটার্ন) — মানুষ কীভাবে লিখে বা প্রশ্ন করে তা শিখে",
    "Probability (সম্ভাবনা) — কোন উত্তর সবচেয়ে সম্ভাব্য সঠিক তা অনুমান করে"
  ]},

  { type: "h2", text: "একটি সহজ উদাহরণ" },

  { type: "p", text: "The capital of Bangladesh is ___" },

  { type: "p", text: "AI হাজার হাজার উদাহরণ দেখে যেখানে এই ফাঁকা স্থানে “Dhaka” এসেছে, তাই সবচেয়ে বেশি probability অনুযায়ী সে বলে: Dhaka। এটা knowledge না, এটা pattern prediction।" },

  { type: "h2", text: "AI মানুষের মতো কেন না?" },

  { type: "ul", items: [
    "মানুষ বুঝে, অনুভব করে, যুক্তি করে, অভিজ্ঞতা থেকে শেখে",
    "AI ডেটা দেখে pattern শিখে এবং probability অনুযায়ী output দেয়",
    "AI-এর কোনো self-awareness নেই"
  ]},

  { type: "h2", text: "AI-এর ভিতরের কাজ (Simple View)" },

  { type: "ol", items: [
    "Input গ্রহণ — user prompt দেয়",
    "Tokenization — sentence ছোট অংশে ভাগ হয়",
    "Processing — token-এর সম্পর্ক বিশ্লেষণ হয়",
    "Output Generation — সবচেয়ে সম্ভাব্য শব্দ দিয়ে উত্তর তৈরি হয়"
  ]},

  { type: "h2", text: "AI কীভাবে শেখে?" },

  { type: "p", text: "AI training-এর সময় কোটি কোটি sentence পড়ে এবং মানুষ কীভাবে লিখে তা শিখে। ভুল pattern এড়াতে চেষ্টা করে। এই প্রক্রিয়াকে Machine Learning বলা হয়।" },

  { type: "h2", text: "Deep Learning কী?" },

  { type: "p", text: "Deep Learning হলো AI-এর একটি উন্নত অংশ যেখানে neural networks ব্যবহার করা হয়। এটি মানুষের brain-inspired structure ব্যবহার করে layers of neurons, weighted connections এবং pattern hierarchy তৈরি করে।" },

  { type: "h2", text: "AI কি সত্যিই বোঝে?" },

  { type: "p", text: "না। AI meaning অনুভব করে না। এটি context mathematically analyze করে এবং সবচেয়ে likely response তৈরি করে।" },

  { type: "h2", text: "উদাহরণ" },

  { type: "p", text: "“আমি দুঃখিত” শুনে মানুষ অনুভব বুঝে সান্ত্বনা দেয়, কিন্তু AI দেখে এই ধরনের বাক্যের পরে সাধারণত কী response আসে এবং সেই অনুযায়ী উত্তর তৈরি করে।" },

  { type: "h2", text: "AI ভুল কেন করে?" },

  { type: "ul", items: [
    "knowledge perfect নয়",
    "training data biased হতে পারে",
    "probability সবসময় সত্য নয় (hallucination)"
  ]},

  { type: "h2", text: "AI চিন্তার সীমাবদ্ধতা" },

  { type: "ul", items: [
    "real understanding নেই",
    "emotion নেই",
    "real-world experience নেই",
    "context মাঝে মাঝে ভুল বোঝে"
  ]},

  { type: "h2", text: "AI চিন্তার শক্তি" },

  { type: "ul", items: [
    "দ্রুত pattern চিনতে পারে",
    "বিশাল ডেটা analyze করতে পারে",
    "consistent output দিতে পারে",
    "বহু domain-এ কাজ করতে পারে"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ" },

  { type: "p", text: "Text prediction: “I am going to…” → AI most common continuation predict করে (school, office, market)" },

  { type: "p", text: "Code suggestion: for i in range( → AI সাধারণ pattern অনুযায়ী n suggest করে" },

  { type: "h2", text: "সহজভাবে AI চিন্তা বোঝা" },

  { type: "p", text: "AI হলো এমন একজন সহকারী যে সব বই পড়েছে, সব উদাহরণ দেখেছে, কিন্তু নিজে কোনো অভিজ্ঞতা করেনি।" },

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "AI মানুষের মতো চিন্তা করে না, বরং pattern ও probability ব্যবহার করে",
    "এটি data, pattern এবং prediction-এর উপর ভিত্তি করে কাজ করে",
    "AI-এর কোনো অনুভূতি বা self-awareness নেই",
    "Deep Learning ও Machine Learning এর মাধ্যমে এটি শেখে",
    "AI শক্তিশালী হলেও এটি একটি statistical system, human mind নয়"
  ]}
];

const richContent4: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ৪: ভালো Prompt-এর গঠন" },

  { type: "p", text: "ভাবুন, আপনি একজন স্থপতিকে একটি বাড়ি বানানোর দায়িত্ব দিলেন। যদি শুধু বলেন, 'একটা বাড়ি বানান', তাহলে তিনি নিজের মতো করে ডিজাইন করবেন। কিন্তু যদি বলেন, 'তিন বেডরুমের একটি আধুনিক বাড়ি চাই, বাজেট ৫০ লাখ টাকা, সামনে একটি বাগান থাকবে এবং ডিজাইনটি মিনিমালিস্ট হতে হবে', তাহলে তিনি আপনার চাহিদা অনেক ভালোভাবে বুঝতে পারবেন।" },

  { type: "p", text: "AI-এর ক্ষেত্রেও ঠিক একই বিষয় ঘটে। আপনি যত স্পষ্টভাবে নির্দেশনা দেবেন, AI তত ভালোভাবে আপনার প্রত্যাশা অনুযায়ী উত্তর দিতে পারবে।" },

  { type: "h2", text: "ভালো Prompt কী?" },

  { type: "p", text: "ভালো Prompt হলো এমন একটি নির্দেশনা যা AI-কে পরিষ্কারভাবে জানিয়ে দেয় কী করতে হবে, কোন তথ্যের ভিত্তিতে করতে হবে, কী সীমাবদ্ধতা মেনে চলতে হবে এবং কী ধরনের আউটপুট দিতে হবে।" },

  { type: "callout", variant: "key", title: "মনে রাখার সহজ উপায়", text: "I-C-C-O-E → Instructions, Context, Constraints, Output, Examples" },

  { type: "h2", text: "ভালো Prompt কেন গুরুত্বপূর্ণ?" },

  { type: "ul", items: [
    "AI-এর উত্তর আরও নির্ভুল হয়",
    "ভুল বোঝাবুঝি কমে যায়",
    "কম Prompt-এ ভালো ফলাফল পাওয়া যায়",
    "আউটপুটের মান আরও ধারাবাহিক হয়",
    "জটিল কাজ সহজে সম্পন্ন করা যায়"
  ]},

  { type: "h2", text: "১. Clear Instructions" },

  { type: "p", text: "Clear Instruction হলো Prompt-এর সবচেয়ে গুরুত্বপূর্ণ অংশ। AI-কে কী করতে হবে তা স্পষ্টভাবে বলতে হবে।" },

  { type: "p", text: "দুর্বল Prompt: Python সম্পর্কে বলো।" },

  { type: "p", text: "ভালো Prompt: Python প্রোগ্রামিং ভাষার প্রধান বৈশিষ্ট্যগুলো ৫টি পয়েন্টে ব্যাখ্যা করো।" },

  { type: "ul", items: [
    "নির্দিষ্ট কাজ উল্লেখ করুন",
    "অপ্রয়োজনীয় অস্পষ্টতা এড়িয়ে চলুন",
    "পরিমাণ উল্লেখ করুন",
    "Action verb ব্যবহার করুন (ব্যাখ্যা করো, তুলনা করো, বিশ্লেষণ করো)"
  ]},

  { type: "h2", text: "২. Context" },

  { type: "p", text: "Context হলো অতিরিক্ত তথ্য যা AI-কে পরিস্থিতি বুঝতে সাহায্য করে। একই প্রশ্নের উত্তর Context অনুযায়ী পরিবর্তিত হতে পারে।" },

  { type: "p", text: "Context ছাড়া: একটি ইমেইল লিখো।" },

  { type: "p", text: "Context সহ: আমি একটি সফটওয়্যার কোম্পানির প্রজেক্ট ম্যানেজার। ক্লায়েন্টকে ৩ দিনের বিলম্বের জন্য একটি পেশাদার ইমেইল লিখো।" },

  { type: "ul", items: [
    "ব্যবহারকারীর পরিচয়",
    "লক্ষ্য শ্রোতা",
    "ব্যবসায়িক পরিস্থিতি",
    "শিক্ষাগত স্তর",
    "ডোমেইন জ্ঞান"
  ]},

  { type: "h2", text: "৩. Constraints" },

  { type: "p", text: "Constraints হলো সীমাবদ্ধতা বা নিয়ম যা AI-কে অনুসরণ করতে হবে। এটি আউটপুট নিয়ন্ত্রণ করতে সাহায্য করে।" },

  { type: "p", text: "উদাহরণ: বাংলাদেশের অর্থনীতি সম্পর্কে ১০০ শব্দের মধ্যে ব্যাখ্যা করো।" },

  { type: "ul", items: [
    "সর্বোচ্চ ৫টি পয়েন্ট",
    "২০০ শব্দের বেশি নয়",
    "টেবিল ব্যবহার করবে না",
    "শুধুমাত্র বাংলা ভাষা ব্যবহার করবে",
    "প্রযুক্তিগত জার্গন এড়িয়ে চলবে"
  ]},

  { type: "h2", text: "৪. Desired Output" },

  { type: "p", text: "Desired Output হলো আপনি AI-কে কোন ফরম্যাটে উত্তর দিতে চান তা নির্দিষ্ট করা।" },

  { type: "ul", items: [
    "Bullet Points",
    "Table",
    "JSON",
    "Markdown",
    "Essay",
    "Report",
    "Email",
    "Blog Post",
    "Source Code"
  ]},

  { type: "p", text: "উদাহরণ: বাংলাদেশের শীর্ষ ৫টি রপ্তানি পণ্য একটি টেবিলে উপস্থাপন করো।" },

  { type: "h2", text: "৫. Examples" },

  { type: "p", text: "Examples AI-কে কাঙ্ক্ষিত pattern বুঝতে সাহায্য করে। এটি Few-Shot Prompting নামে পরিচিত।" },

  { type: "p", text: "Input: Apple → Output: Fruit" },

  { type: "p", text: "Input: Carrot → Output: Vegetable" },

  { type: "p", text: "Input: Mango → Output: Fruit" },

  { type: "p", text: "Review: This product is amazing → Sentiment: Positive" },

  { type: "p", text: "Review: The quality is terrible → Sentiment: Negative" },

  { type: "h2", text: "সম্পূর্ণ Prompt-এর ধারণা" },

  { type: "p", text: "একটি ভালো Prompt-এ Instruction, Context, Constraints, Output এবং Examples একসাথে থাকে এবং এটি AI থেকে সর্বোচ্চ মানের ফলাফল বের করতে সাহায্য করে।" },

  { type: "h2", text: "AI Application-এ এর ব্যবহার" },

  { type: "ul", items: [
    "Chatbot তৈরি",
    "AI Agent ডিজাইন",
    "Content Generation",
    "Customer Support Automation",
    "RAG Application",
    "Code Assistant"
  ]},

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "ভালো Prompt-এর ৫টি মূল উপাদান আছে",
    "Instruction কাজ নির্ধারণ করে",
    "Context পরিস্থিতি বোঝায়",
    "Constraints আউটপুট নিয়ন্ত্রণ করে",
    "Desired Output ফরম্যাট নির্ধারণ করে",
    "Examples pattern শেখায়"
  ]}
];

const richContent5: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ৫: Zero-Shot Prompting" },

  { type: "p", text: "ভাবুন, আপনি একজন নতুন কর্মচারীকে প্রথম দিনেই একটি কাজ দিলেন। তাকে কোনো উদাহরণ দেখানো হলো না, কোনো নমুনা দেওয়া হলো না। শুধু কাজের নির্দেশনা বলা হলো এবং সে সেই নির্দেশনা অনুসারে কাজটি করার চেষ্টা করল।" },

  { type: "p", text: "Zero-Shot Prompting ঠিক এমনই একটি ধারণা। এখানে AI-কে কোনো উদাহরণ না দিয়ে সরাসরি নির্দেশনা দেওয়া হয় এবং AI তার পূর্বে শেখা জ্ঞানের ভিত্তিতে উত্তর তৈরি করে।" },

  { type: "h2", text: "Zero-Shot Prompting কী?" },

  { type: "p", text: "Zero-Shot Prompting হলো এমন একটি Prompting Technique যেখানে AI-কে কোনো Example বা Sample Output দেওয়া হয় না। শুধুমাত্র Task বা Instruction দেওয়া হয়। AI তার প্রশিক্ষণকালীন শেখা জ্ঞান ব্যবহার করে উত্তর তৈরি করে।" },

  { type: "callout", variant: "key", title: "মনে রাখার সহজ উপায়", text: "Zero-Shot = Zero Example → কোনো উদাহরণ ছাড়াই AI-কে কাজ করতে বলা" },

  { type: "h2", text: "Zero-Shot Prompting কেন গুরুত্বপূর্ণ?" },

  { type: "ul", items: [
    "দ্রুত Prompt লেখা যায়",
    "সহজ কাজের জন্য Example দরকার হয় না",
    "কম Token ব্যবহার হয়",
    "সাধারণ Task-এ কার্যকর ফলাফল দেয়",
    "Prompt Engineering শেখার প্রথম ধাপ"
  ]},

  { type: "h2", text: "Zero-Shot Prompting কীভাবে কাজ করে?" },

  { type: "ol", items: [
    "ব্যবহারকারী Prompt লিখে",
    "AI Prompt-এর উদ্দেশ্য বুঝে",
    "Training Data থেকে প্রাসঙ্গিক তথ্য খুঁজে",
    "সবচেয়ে সম্ভাব্য উত্তর তৈরি করে"
  ]},

  { type: "h2", text: "একটি সাধারণ উদাহরণ" },

  { type: "p", text: "Prompt: বাংলাদেশের স্বাধীনতা যুদ্ধ সম্পর্কে ৫টি বাক্যে ব্যাখ্যা করো।" },

  { type: "p", text: "এখানে AI-কে কোনো উদাহরণ দেওয়া হয়নি। শুধুমাত্র নির্দেশনা দেওয়া হয়েছে। এটিই Zero-Shot Prompting।" },

  { type: "h2", text: "আরও কিছু উদাহরণ" },

  { type: "h2", text: "উদাহরণ ১: অনুবাদ" },

  { type: "p", text: "Prompt: Translate the following sentence into Bangla: Artificial Intelligence is transforming the world." },

  { type: "h2", text: "উদাহরণ ২: সংক্ষিপ্তসার" },

  { type: "p", text: "Prompt: নিচের লেখাটির ৩ লাইনের সারসংক্ষেপ তৈরি করো।" },

  { type: "h2", text: "উদাহরণ ৩: Sentiment Analysis" },

  { type: "p", text: "Prompt: The product quality is excellent and delivery was fast." },

  { type: "p", text: "Output: Positive" },

  { type: "h2", text: "উদাহরণ ৪: কোড তৈরি" },

  { type: "p", text: "Prompt: Python-এ একটি Function লিখো যা দুটি সংখ্যার যোগফল বের করবে।" },

  { type: "h2", text: "Zero-Shot বনাম Few-Shot" },

  { type: "ul", items: [
    "Zero-Shot: কোনো উদাহরণ নেই → সরাসরি নির্দেশনা",
    "Few-Shot: এক বা একাধিক উদাহরণ দিয়ে pattern শেখানো"
  ]},

  { type: "h2", text: "কখন Zero-Shot Prompting ব্যবহার করবেন?" },

  { type: "ul", items: [
    "সাধারণ প্রশ্নোত্তর",
    "তথ্য অনুসন্ধান",
    "অনুবাদ",
    "সারসংক্ষেপ তৈরি",
    "কোড জেনারেশন",
    "ইমেইল লেখা",
    "কনটেন্ট আইডিয়া তৈরি"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ" },

  { type: "p", text: "Content Writing: বাংলাদেশের পর্যটন শিল্প নিয়ে ২০০ শব্দের একটি ব্লগ লিখো।" },

  { type: "p", text: "Programming: Python-এ একটি Stack Data Structure Implement করো।" },

  { type: "p", text: "Education: Photosynthesis সহজ ভাষায় ব্যাখ্যা করো।" },

  { type: "p", text: "Business: একটি নতুন Coffee Shop-এর জন্য Marketing Ideas দাও।" },

  { type: "h2", text: "Zero-Shot Prompting-এর সুবিধা" },

  { type: "ul", items: [
    "সহজ ও দ্রুত Prompt তৈরি করা যায়",
    "কম Token খরচ হয়",
    "দ্রুত ফলাফল পাওয়া যায়",
    "বহুমুখী কাজে ব্যবহার করা যায়"
  ]},

  { type: "h2", text: "সীমাবদ্ধতা" },

  { type: "ul", items: [
    "জটিল Task-এ ভুল হতে পারে",
    "নির্দিষ্ট Format সবসময় অনুসরণ নাও করতে পারে",
    "Consistency কম হতে পারে"
  ]},

  { type: "h2", text: "AI Application Development-এ এর গুরুত্ব" },

  { type: "ul", items: [
    "Chatbot Development",
    "AI Assistant",
    "Content Generation System",
    "Code Generation Tool",
    "Customer Support Automation",
    "Search Assistant"
  ]},

  { type: "p", text: "অনেক AI System প্রথমে Zero-Shot Prompt ব্যবহার করে, তারপর প্রয়োজনে Few-Shot Prompting যোগ করা হয়।" },

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "Zero-Shot Prompting-এ কোনো Example ব্যবহার করা হয় না",
    "শুধুমাত্র Instruction দিয়ে কাজ করানো হয়",
    "এটি সবচেয়ে সহজ Prompting Technique",
    "সাধারণ কাজের জন্য খুব কার্যকর",
    "জটিল কাজের জন্য Few-Shot বেশি ভালো হতে পারে"
  ]}
];

const richContent6: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ৬: One-Shot Prompting" },

  { type: "p", text: "ভাবুন, আপনি একজন নতুন কর্মচারীকে একটি কাজ শেখাচ্ছেন। যদি শুধু বলেন, 'এই রিপোর্টটি তৈরি করো', তাহলে সে হয়তো বুঝতে পারবে না আপনি ঠিক কী ধরনের রিপোর্ট চান। কিন্তু যদি একটি নমুনা রিপোর্ট দেখিয়ে বলেন, 'এমন একটি রিপোর্ট তৈরি করো', তাহলে সে আপনার প্রত্যাশা অনেক সহজে বুঝতে পারবে।" },

  { type: "p", text: "AI-এর ক্ষেত্রেও একই বিষয় ঘটে। অনেক সময় শুধু নির্দেশনা যথেষ্ট হয় না। তখন AI-কে একটি মাত্র উদাহরণ দেখানো হয়, যাতে সে কাঙ্ক্ষিত Pattern বা Format বুঝতে পারে। এই পদ্ধতিকেই বলা হয় One-Shot Prompting।" },

  { type: "h2", text: "One-Shot Prompting কী?" },

  { type: "p", text: "One-Shot Prompting হলো এমন একটি Prompting Technique যেখানে AI-কে একটি Example বা Sample দেওয়া হয় এবং তারপর একই ধরনের নতুন Task সম্পন্ন করতে বলা হয়। AI-কে একটি মাত্র উদাহরণ দেখিয়ে শেখানো হয় যে কাঙ্ক্ষিত Output কেমন হওয়া উচিত।" },

  { type: "callout", variant: "key", title: "মনে রাখার সহজ উপায়", text: "One-Shot = One Example → একটি মাত্র উদাহরণ দিয়ে AI-কে শেখানো" },

  { type: "h2", text: "One-Shot Prompting কেন গুরুত্বপূর্ণ?" },

  { type: "ul", items: [
    "AI কাঙ্ক্ষিত Pattern দ্রুত বুঝতে পারে",
    "Output-এর Format আরও নিয়ন্ত্রিত হয়",
    "ভুল বোঝাবুঝির সম্ভাবনা কমে",
    "Consistent Response পাওয়া সহজ হয়",
    "Zero-Shot এর তুলনায় নির্ভুলতা বাড়ে"
  ]},

  { type: "h2", text: "One-Shot Prompting কীভাবে কাজ করে?" },

  { type: "ol", items: [
    "AI-কে একটি Example দেখানো হয়",
    "Example-এর Input ও Output Pattern AI পর্যবেক্ষণ করে",
    "নতুন Input দেওয়া হয়",
    "AI একই Pattern অনুসরণ করে Output তৈরি করে"
  ]},

  { type: "h2", text: "একটি সাধারণ উদাহরণ" },

  { type: "p", text: "Review: The product is excellent → Sentiment: Positive" },

  { type: "p", text: "Review: The delivery was very slow → Sentiment: ?" },

  { type: "p", text: "Output: Negative" },

  { type: "p", text: "এখানে একটি Example দেওয়া হয়েছে এবং AI সেই Pattern অনুসরণ করেছে। এটিই One-Shot Prompting।" },

  { type: "h2", text: "আরও কিছু উদাহরণ" },

  { type: "h2", text: "উদাহরণ ১: ভাষা অনুবাদ" },

  { type: "p", text: "English: Good Morning → Bangla: সুপ্রভাত" },

  { type: "p", text: "English: Thank You → Bangla: ?" },

  { type: "p", text: "Output: ধন্যবাদ" },

  { type: "h2", text: "উদাহরণ ২: শ্রেণিবিন্যাস" },

  { type: "p", text: "Apple → Fruit" },

  { type: "p", text: "Car → ?" },

  { type: "p", text: "Output: Vehicle" },

  { type: "h2", text: "উদাহরণ ৩: ইমেইল লেখা" },

  { type: "p", text: "Subject: Meeting Reminder → Email: meeting reminder message..." },

  { type: "p", text: "Subject: Project Delay Notice → Email: ?" },

  { type: "p", text: "AI একই ধরনের ইমেইল তৈরি করবে।" },

  { type: "h2", text: "উদাহরণ ৪: কোড জেনারেশন" },

  { type: "p", text: "Input: Add two numbers → Output: function add(a,b){ return a+b }" },

  { type: "p", text: "Input: Multiply two numbers → Output: ?" },

  { type: "p", text: "AI একই Pattern অনুসরণ করে নতুন Function তৈরি করবে।" },

  { type: "h2", text: "Zero-Shot বনাম One-Shot" },

  { type: "ul", items: [
    "Zero-Shot: কোনো Example নেই → শুধু Instruction",
    "One-Shot: একটি Example আছে → Pattern শেখানো"
  ]},

  { type: "h2", text: "One-Shot Prompting কখন ব্যবহার করবেন?" },

  { type: "ul", items: [
    "Text Classification",
    "Translation",
    "Content Formatting",
    "Email Writing",
    "Data Extraction",
    "Code Generation",
    "Structured Output Creation"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ" },

  { type: "h2", text: "Customer Support" },

  { type: "p", text: "Customer: My order has not arrived → Response: apology message" },

  { type: "p", text: "Customer: I received a damaged product → Response: ?" },

  { type: "h2", text: "Resume Screening" },

  { type: "p", text: "Candidate: 5 years Python experience → Result: Qualified" },

  { type: "p", text: "Candidate: No programming experience → Result: ?" },

  { type: "h2", text: "Research Assistant" },

  { type: "p", text: "Paper Topic: Deep Learning → Category: Artificial Intelligence" },

  { type: "p", text: "Paper Topic: Database Optimization → Category: ?" },

  { type: "h2", text: "Content Writing" },

  { type: "p", text: "Title: Benefits of Cloud Computing → Summary: cloud benefits explanation" },

  { type: "p", text: "Title: Benefits of Artificial Intelligence → Summary: ?" },

  { type: "h2", text: "One-Shot Prompting-এর সুবিধা" },

  { type: "ul", items: [
    "একটি Example দিয়েই Pattern শেখানো যায়",
    "Consistent Output পাওয়া যায়",
    "কম Token খরচ হয়",
    "সহজভাবে Prompt তৈরি করা যায়"
  ]},

  { type: "h2", text: "সীমাবদ্ধতা" },

  { type: "ul", items: [
    "একটি Example সবসময় যথেষ্ট নাও হতে পারে",
    "জটিল Task-এ ভুল হতে পারে",
    "Bias তৈরি হওয়ার সম্ভাবনা থাকে",
    "Complex Reasoning-এর জন্য সীমিত"
  ]},

  { type: "h2", text: "AI Application Development-এ এর গুরুত্ব" },

  { type: "ul", items: [
    "Customer Support Bot",
    "Document Classification System",
    "Resume Screening Tool",
    "Data Extraction System",
    "AI Email Assistant",
    "Code Generation Platform"
  ]},

  { type: "p", text: "অনেক Production AI System-এ একটি Example ব্যবহার করেই কাঙ্ক্ষিত Output Format নিশ্চিত করা হয়।" },

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "One-Shot Prompting-এ একটি Example ব্যবহার করা হয়",
    "AI Example থেকে Pattern শিখে কাজ করে",
    "Zero-Shot-এর তুলনায় বেশি নিয়ন্ত্রিত Output দেয়",
    "Translation, Classification, Email Writing-এ কার্যকর",
    "কম Token ব্যবহার করে Consistency বজায় রাখে",
    "জটিল Task-এ আরও Example প্রয়োজন হতে পারে"
  ]}
];

const richContent6: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ৬: One-Shot Prompting" },

  { type: "p", text: "ভাবুন, আপনি একজন নতুন কর্মচারীকে একটি কাজ শেখাচ্ছেন। যদি শুধু বলেন, 'এই রিপোর্টটি তৈরি করো', তাহলে সে হয়তো বুঝতে পারবে না আপনি ঠিক কী ধরনের রিপোর্ট চান। কিন্তু যদি একটি নমুনা রিপোর্ট দেখিয়ে বলেন, 'এমন একটি রিপোর্ট তৈরি করো', তাহলে সে আপনার প্রত্যাশা অনেক সহজে বুঝতে পারবে।" },

  { type: "p", text: "AI-এর ক্ষেত্রেও একই বিষয় ঘটে। অনেক সময় শুধু নির্দেশনা যথেষ্ট হয় না। তখন AI-কে একটি মাত্র উদাহরণ দেখানো হয়, যাতে সে কাঙ্ক্ষিত Pattern বা Format বুঝতে পারে। এই পদ্ধতিকেই বলা হয় One-Shot Prompting।" },

  { type: "h2", text: "One-Shot Prompting কী?" },

  { type: "p", text: "One-Shot Prompting হলো এমন একটি Prompting Technique যেখানে AI-কে একটি Example বা Sample দেওয়া হয় এবং তারপর একই ধরনের নতুন Task সম্পন্ন করতে বলা হয়। AI-কে একটি মাত্র উদাহরণ দেখিয়ে শেখানো হয় যে কাঙ্ক্ষিত Output কেমন হওয়া উচিত।" },

  { type: "callout", variant: "key", title: "মনে রাখার সহজ উপায়", text: "One-Shot = One Example → একটি মাত্র উদাহরণ দিয়ে AI-কে শেখানো" },

  { type: "h2", text: "One-Shot Prompting কেন গুরুত্বপূর্ণ?" },

  { type: "ul", items: [
    "AI কাঙ্ক্ষিত Pattern দ্রুত বুঝতে পারে",
    "Output-এর Format আরও নিয়ন্ত্রিত হয়",
    "ভুল বোঝাবুঝির সম্ভাবনা কমে",
    "Consistent Response পাওয়া সহজ হয়",
    "Zero-Shot এর তুলনায় নির্ভুলতা বাড়ে"
  ]},

  { type: "h2", text: "One-Shot Prompting কীভাবে কাজ করে?" },

  { type: "ol", items: [
    "AI-কে একটি Example দেখানো হয়",
    "Example-এর Input ও Output Pattern AI পর্যবেক্ষণ করে",
    "নতুন Input দেওয়া হয়",
    "AI একই Pattern অনুসরণ করে Output তৈরি করে"
  ]},

  { type: "h2", text: "একটি সাধারণ উদাহরণ" },

  { type: "p", text: "Review: The product is excellent → Sentiment: Positive" },

  { type: "p", text: "Review: The delivery was very slow → Sentiment: ?" },

  { type: "p", text: "Output: Negative" },

  { type: "p", text: "এখানে একটি Example দেওয়া হয়েছে এবং AI সেই Pattern অনুসরণ করেছে। এটিই One-Shot Prompting।" },

  { type: "h2", text: "আরও কিছু উদাহরণ" },

  { type: "h2", text: "উদাহরণ ১: ভাষা অনুবাদ" },

  { type: "p", text: "English: Good Morning → Bangla: সুপ্রভাত" },

  { type: "p", text: "English: Thank You → Bangla: ?" },

  { type: "p", text: "Output: ধন্যবাদ" },

  { type: "h2", text: "উদাহরণ ২: শ্রেণিবিন্যাস" },

  { type: "p", text: "Apple → Fruit" },

  { type: "p", text: "Car → ?" },

  { type: "p", text: "Output: Vehicle" },

  { type: "h2", text: "উদাহরণ ৩: ইমেইল লেখা" },

  { type: "p", text: "Subject: Meeting Reminder → Email: meeting reminder message..." },

  { type: "p", text: "Subject: Project Delay Notice → Email: ?" },

  { type: "p", text: "AI একই ধরনের ইমেইল তৈরি করবে।" },

  { type: "h2", text: "উদাহরণ ৪: কোড জেনারেশন" },

  { type: "p", text: "Input: Add two numbers → Output: function add(a,b){ return a+b }" },

  { type: "p", text: "Input: Multiply two numbers → Output: ?" },

  { type: "p", text: "AI একই Pattern অনুসরণ করে নতুন Function তৈরি করবে।" },

  { type: "h2", text: "Zero-Shot বনাম One-Shot" },

  { type: "ul", items: [
    "Zero-Shot: কোনো Example নেই → শুধু Instruction",
    "One-Shot: একটি Example আছে → Pattern শেখানো"
  ]},

  { type: "h2", text: "One-Shot Prompting কখন ব্যবহার করবেন?" },

  { type: "ul", items: [
    "Text Classification",
    "Translation",
    "Content Formatting",
    "Email Writing",
    "Data Extraction",
    "Code Generation",
    "Structured Output Creation"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ" },

  { type: "h2", text: "Customer Support" },

  { type: "p", text: "Customer: My order has not arrived → Response: apology message" },

  { type: "p", text: "Customer: I received a damaged product → Response: ?" },

  { type: "h2", text: "Resume Screening" },

  { type: "p", text: "Candidate: 5 years Python experience → Result: Qualified" },

  { type: "p", text: "Candidate: No programming experience → Result: ?" },

  { type: "h2", text: "Research Assistant" },

  { type: "p", text: "Paper Topic: Deep Learning → Category: Artificial Intelligence" },

  { type: "p", text: "Paper Topic: Database Optimization → Category: ?" },

  { type: "h2", text: "Content Writing" },

  { type: "p", text: "Title: Benefits of Cloud Computing → Summary: cloud benefits explanation" },

  { type: "p", text: "Title: Benefits of Artificial Intelligence → Summary: ?" },

  { type: "h2", text: "One-Shot Prompting-এর সুবিধা" },

  { type: "ul", items: [
    "একটি Example দিয়েই Pattern শেখানো যায়",
    "Consistent Output পাওয়া যায়",
    "কম Token খরচ হয়",
    "সহজভাবে Prompt তৈরি করা যায়"
  ]},

  { type: "h2", text: "সীমাবদ্ধতা" },

  { type: "ul", items: [
    "একটি Example সবসময় যথেষ্ট নাও হতে পারে",
    "জটিল Task-এ ভুল হতে পারে",
    "Bias তৈরি হওয়ার সম্ভাবনা থাকে",
    "Complex Reasoning-এর জন্য সীমিত"
  ]},

  { type: "h2", text: "AI Application Development-এ এর গুরুত্ব" },

  { type: "ul", items: [
    "Customer Support Bot",
    "Document Classification System",
    "Resume Screening Tool",
    "Data Extraction System",
    "AI Email Assistant",
    "Code Generation Platform"
  ]},

  { type: "p", text: "অনেক Production AI System-এ একটি Example ব্যবহার করেই কাঙ্ক্ষিত Output Format নিশ্চিত করা হয়।" },

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "One-Shot Prompting-এ একটি Example ব্যবহার করা হয়",
    "AI Example থেকে Pattern শিখে কাজ করে",
    "Zero-Shot-এর তুলনায় বেশি নিয়ন্ত্রিত Output দেয়",
    "Translation, Classification, Email Writing-এ কার্যকর",
    "কম Token ব্যবহার করে Consistency বজায় রাখে",
    "জটিল Task-এ আরও Example প্রয়োজন হতে পারে"
  ]}
];

const richContent7: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ৭: Few-Shot Prompting" },

  { type: "p", text: "ভাবুন, আপনি একজন নতুন ডিজাইনারকে একটি লোগো ডিজাইন শেখাচ্ছেন। আপনি শুধু একটি উদাহরণ দেখালেন না, বরং ৩–৪টি ভিন্ন ভিন্ন লোগোর স্টাইল দেখালেন। তারপর তাকে বললেন, “এ ধরনের স্টাইলে নতুন একটি লোগো তৈরি করো।”" },

  { type: "p", text: "AI-এর ক্ষেত্রেও ঠিক একই বিষয় ঘটে। যখন আমরা একাধিক উদাহরণ দিয়ে AI-কে একটি Pattern শেখাই, তখন সেটিকে বলা হয় Few-Shot Prompting।" },

  { type: "h2", text: "Few-Shot Prompting কী?" },

  { type: "p", text: "Few-Shot Prompting হলো এমন একটি Prompting Technique যেখানে AI-কে একাধিক (২ বা তার বেশি) Example দেওয়া হয়, যাতে সে কাঙ্ক্ষিত Pattern, Format বা Logic শিখে নিতে পারে এবং সেই অনুযায়ী নতুন Output তৈরি করতে পারে।" },

  { type: "callout", variant: "key", title: "মনে রাখার সহজ উপায়", text: "Few-Shot = Few Examples → একাধিক উদাহরণ দিয়ে AI-কে শেখানো" },

  { type: "h2", text: "Few-Shot Prompting কেন গুরুত্বপূর্ণ?" },

  { type: "ul", items: [
    "AI আরও ভালোভাবে Pattern বুঝতে পারে",
    "Output অনেক বেশি accurate ও consistent হয়",
    "Complex Task সহজে solve করা যায়",
    "Structured output তৈরি করা সহজ হয়",
    "Real-world systems-এ বেশি reliable"
  ]},

  { type: "h2", text: "Few-Shot Prompting কীভাবে কাজ করে?" },

  { type: "ol", items: [
    "একাধিক Input-Output Example AI-কে দেখানো হয়",
    "AI সেই Examples থেকে Pattern শিখে",
    "নতুন Input দেওয়া হয়",
    "AI শেখা Pattern অনুযায়ী Output তৈরি করে"
  ]},

  { type: "h2", text: "একটি সাধারণ উদাহরণ" },

  { type: "p", text: "Review: This product is amazing → Sentiment: Positive" },
  { type: "p", text: "Review: The quality is very poor → Sentiment: Negative" },
  { type: "p", text: "Review: I love this app → Sentiment: Positive" },
  { type: "p", text: "Review: The service was terrible → Sentiment: ?" },

  { type: "p", text: "Output: Negative" },

  { type: "p", text: "এখানে AI একাধিক উদাহরণ দেখে Pattern বুঝেছে কীভাবে Sentiment classify করতে হয়। এটিই Few-Shot Prompting।" },

  { type: "h2", text: "আরও কিছু উদাহরণ" },

  { type: "h2", text: "উদাহরণ ১: ভাষা অনুবাদ" },

  { type: "p", text: "English: Good Morning → Bangla: সুপ্রভাত" },
  { type: "p", text: "English: Thank You → Bangla: ধন্যবাদ" },
  { type: "p", text: "English: How are you? → Bangla: আপনি কেমন আছেন?" },
  { type: "p", text: "English: Welcome → Bangla: ?" },

  { type: "p", text: "Output: স্বাগতম" },

  { type: "h2", text: "উদাহরণ ২: ক্যাটাগরি ক্লাসিফিকেশন" },

  { type: "p", text: "Apple → Fruit" },
  { type: "p", text: "Carrot → Vegetable" },
  { type: "p", text: "Rice → Food" },
  { type: "p", text: "Laptop → ?" },

  { type: "p", text: "Output: Electronics" },

  { type: "h2", text: "উদাহরণ ৩: ইমেইল রেসপন্স জেনারেশন" },

  { type: "p", text: "Customer: My order is late → Response: apology message with order ID request" },
  { type: "p", text: "Customer: I want a refund → Response: refund support message" },
  { type: "p", text: "Customer: The product is damaged → Response: ?" },

  { type: "p", text: "Output: We are really sorry for the inconvenience. Please share your order number so we can assist you further." },

  { type: "h2", text: "উদাহরণ ৪: কোড জেনারেশন" },

  { type: "p", text: "Task: Add two numbers → Code: function add(a,b){ return a+b }" },
  { type: "p", text: "Task: Multiply two numbers → Code: function multiply(a,b){ return a*b }" },
  { type: "p", text: "Task: Subtract two numbers → Code: ?" },

  { type: "p", text: "Output: function subtract(a,b){ return a-b }" },

  { type: "h2", text: "Few-Shot বনাম One-Shot ও Zero-Shot" },

  { type: "ul", items: [
    "Zero-Shot: কোনো Example নেই → শুধু Instruction",
    "One-Shot: একটি Example → Pattern বোঝানো",
    "Few-Shot: একাধিক Example → Strong Pattern Learning"
  ]},

  { type: "h2", text: "Few-Shot Prompting-এর Best Practices" },

  { type: "h2", text: "১. পরিষ্কার Pattern বজায় রাখো" },

  { type: "p", text: "সব Example যেন একই structure অনুসরণ করে।" },

  { type: "p", text: "❌ Apple → Fruit / Banana: Fruit / Car → Vehicle" },
  { type: "p", text: "✔️ Apple → Fruit / Banana → Fruit / Car → Vehicle" },

  { type: "h2", text: "২. Consistency বজায় রাখো" },

  { type: "p", text: "সব Example একই ধরনের logic follow করা উচিত।" },

  { type: "h2", text: "৩. খুব বেশি Example দিও না" },

  { type: "p", text: "২–৫টি Example সাধারণত যথেষ্ট। বেশি Example দিলে Token খরচ বাড়ে এবং confusion হতে পারে।" },

  { type: "h2", text: "৪. Real-world data ব্যবহার করো" },

  { type: "p", text: "Artificial বা unrelated Example দিলে model ভুল pattern শিখতে পারে।" },

  { type: "h2", text: "৫. Output format আগে define করো" },

  { type: "p", text: "Example-এ যে format দেখানো হয়, AI সাধারণত সেটাই follow করে।" },

  { type: "h2", text: "৬. Edge cases include করো" },

  { type: "p", text: "সব ধরনের scenario cover করার চেষ্টা করো।" },

  { type: "h2", text: "Few-Shot Prompting-এর সুবিধা" },

  { type: "ul", items: [
    "বেশি Accurate Output",
    "Complex Task Handle করা যায়",
    "Production-ready Result দেয়",
    "Better Control এবং Predictability"
  ]},

  { type: "h2", text: "সীমাবদ্ধতা" },

  { type: "ul", items: [
    "Token বেশি লাগে",
    "Prompt complex হয়",
    "Bad examples দিলে ভুল শেখে"
  ]},

  { type: "h2", text: "AI Application Development-এ এর গুরুত্ব" },

  { type: "ul", items: [
    "Advanced Chatbots",
    "NLP Classification Systems",
    "Data Extraction Pipelines",
    "AI Assistants",
    "Code Generation Tools",
    "Enterprise Automation Systems"
  ]},

  { type: "p", text: "Production-level AI systems প্রায় সবসময় Few-Shot Prompting ব্যবহার করে কারণ এটি stable এবং predictable output দেয়।" },

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "Few-Shot Prompting-এ একাধিক Example ব্যবহার করা হয়",
    "AI Example থেকে Pattern শিখে Output তৈরি করে",
    "এটি Zero-Shot ও One-Shot-এর তুলনায় বেশি accurate",
    "Complex Task-এর জন্য খুব কার্যকর",
    "২–৫টি Example সাধারণত যথেষ্ট",
    "Best Practices follow করলে output quality অনেক বাড়ে"
  ]}
];

const richContent8: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ৮: Role Prompting" },

  { type: "p", text: "ভাবুন, আপনি একজন অভিনেতাকে একটি নাটকে কাজ করতে বললেন। কিন্তু তাকে শুধু সংলাপ না দিয়ে বললেন—“তুমি একজন শিক্ষক হিসেবে এই বিষয়টা বোঝাবে” অথবা “তুমি একজন আইনজীবী হিসেবে এই কেসটা বিশ্লেষণ করবে।”" },

  { type: "p", text: "এখন সেই অভিনেতা শুধু তথ্য বলছে না, বরং একটি নির্দিষ্ট চরিত্রের দৃষ্টিকোণ থেকে কথা বলছে। AI-এর ক্ষেত্রেও একই ঘটনা ঘটে। যখন আমরা AI-কে একটি নির্দিষ্ট ভূমিকা বা Persona দিই, তখন তার উত্তর আরও প্রাসঙ্গিক, কাঠামোবদ্ধ এবং বাস্তবসম্মত হয়। এটাকেই বলা হয় Role Prompting।" },

  { type: "h2", text: "Role Prompting কী?" },

  { type: "p", text: "Role Prompting হলো এমন একটি Prompting Technique যেখানে AI-কে একটি নির্দিষ্ট ভূমিকা (Role) বা পরিচয় (Persona) গ্রহণ করতে বলা হয় এবং সেই ভূমিকার দৃষ্টিকোণ থেকে উত্তর দিতে নির্দেশনা দেওয়া হয়। সহজভাবে, AI-কে বলা হয় “তুমি কে?” এবং সেই অনুযায়ী সে উত্তর তৈরি করে।" },

  { type: "callout", variant: "key", title: "মনে রাখার সহজ উপায়", text: "Role Prompting = Assign a Role + Get Contextual Answer" },

  { type: "h2", text: "Role Prompting কেন গুরুত্বপূর্ণ?" },

  { type: "ul", items: [
    "AI-এর উত্তর আরও বাস্তবসম্মত হয়",
    "নির্দিষ্ট ডোমেইন অনুযায়ী উত্তর পাওয়া যায়",
    "Communication আরও structured হয়",
    "Complex problem সহজে ব্যাখ্যা করা যায়",
    "Professional-quality output তৈরি করা যায়"
  ]},

  { type: "h2", text: "১. Act as a Teacher" },

  { type: "p", text: "AI-কে Teacher হিসেবে ব্যবহার করলে সে ধাপে ধাপে, সহজ ভাষায় এবং উদাহরণসহ ব্যাখ্যা করে।" },

  { type: "p", text: "Prompt: Act as a teacher. Explain the concept of Artificial Intelligence in simple terms for a beginner student." },

  { type: "ul", items: [
    "সহজ ভাষা",
    "ধাপে ধাপে ব্যাখ্যা",
    "উদাহরণসহ বোঝানো",
    "শিক্ষামূলক টোন"
  ]},

  { type: "h2", text: "২. Act as a Lawyer" },

  { type: "p", text: "AI-কে Lawyer হিসেবে দিলে সে logical, structured এবং evidence-based বিশ্লেষণ করে।" },

  { type: "p", text: "Prompt: Act as a lawyer. Analyze the ethical and legal implications of data privacy in social media." },

  { type: "ul", items: [
    "Formal tone",
    "Logical argument",
    "Structured reasoning",
    "Legal perspective"
  ]},

  { type: "h2", text: "৩. Act as a Software Engineer" },

  { type: "p", text: "AI-কে Software Engineer হিসেবে ব্যবহার করলে সে technical এবং practical solution দেয়।" },

  { type: "p", text: "Prompt: Act as a software engineer. Design a simple authentication system for a web application." },

  { type: "ul", items: [
    "Technical explanation",
    "Code snippets",
    "System design thinking",
    "Step-by-step architecture"
  ]},

  { type: "h2", text: "৪. Persona Design" },

  { type: "p", text: "Persona Design হলো Role Prompting-এর advanced form যেখানে শুধু role নয়, বরং পুরো character তৈরি করা হয়।" },

  { type: "ul", items: [
    "Role (কে সে?)",
    "Experience (তার অভিজ্ঞতা কত?)",
    "Tone (কীভাবে কথা বলে?)",
    "Audience (কাকে বোঝাচ্ছে?)"
  ]},

  { type: "p", text: "You are a senior software engineer with 10 years of experience in scalable system design. Explain microservices architecture in a simple and practical way for junior developers." },

  { type: "h2", text: "Role Prompting কীভাবে কাজ করে?" },

  { type: "ol", items: [
    "AI একটি নির্দিষ্ট role assign পায়",
    "Role-এর knowledge pattern activate হয়",
    "AI সেই perspective থেকে reasoning করে",
    "Structured response তৈরি করে"
  ]},

  { type: "h2", text: "Role Prompting-এর বাস্তব উদাহরণ" },

  { type: "p", text: "Teacher: Explain Newton's Laws of Motion with real-life examples." },
  { type: "p", text: "Lawyer: Explain the consequences of breaking a contract." },
  { type: "p", text: "Software Engineer: Explain how a REST API works." },
  { type: "p", text: "Business Consultant: Suggest strategies to increase sales for a small e-commerce startup." },

  { type: "h2", text: "Role Prompting বনাম Normal Prompting" },

  { type: "ul", items: [
    "Normal Prompt: Artificial Intelligence কী? → সাধারণ ব্যাখ্যা",
    "Role Prompt: Act as a teacher. Explain Artificial Intelligence → structured, শিক্ষামূলক ব্যাখ্যা"
  ]},

  { type: "h2", text: "Role Prompting-এর সুবিধা" },

  { type: "ol", items: [
    "Context-aware output",
    "Better explanation quality",
    "Professional tone",
    "Multi-domain usage"
  ]},

  { type: "h2", text: "সীমাবদ্ধতা" },

  { type: "ul", items: [
    "সব সময় role ঠিকভাবে follow নাও করতে পারে",
    "কখনও role mix হয়ে যেতে পারে",
    "ভালো prompt design দরকার"
  ]},

  { type: "h2", text: "Best Practices" },

  { type: "h2", text: "১. Role স্পষ্টভাবে define করো" },

  { type: "p", text: "❌ Act as expert" },
  { type: "p", text: "✔️ Act as a senior data scientist with 8 years experience" },

  { type: "h2", text: "২. Audience উল্লেখ করো" },

  { type: "ul", items: [
    "Beginner",
    "Intermediate",
    "Expert"
  ]},

  { type: "h2", text: "৩. Tone define করো" },

  { type: "ul", items: [
    "Formal",
    "Friendly",
    "Technical",
    "Educational"
  ]},

  { type: "h2", text: "৪. Context যোগ করো" },

  { type: "p", text: "Role alone যথেষ্ট নয়, context দিলে output আরও ভালো হয়।" },

  { type: "h2", text: "৫. Output format নির্ধারণ করো" },

  { type: "p", text: "Role + Format = Best Result" },

  { type: "h2", text: "AI Application Development-এ এর গুরুত্ব" },

  { type: "ul", items: [
    "AI Tutors",
    "Legal Assistant Systems",
    "Code Assistants",
    "Business Advisory Tools",
    "Customer Support Bots",
    "AI Chat Agents"
  ]},

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "Role Prompting-এ AI-কে নির্দিষ্ট ভূমিকা দেওয়া হয়",
    "AI সেই role অনুযায়ী উত্তর তৈরি করে",
    "Teacher, Lawyer, Software Engineer সাধারণ roles",
    "Persona Design হলো advanced form",
    "Output structured ও professional হয়",
    "Role + Audience + Tone স্পষ্ট হলে best result পাওয়া যায়"
  ]}
];

const richContent9: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ৯: Chain of Thought Prompting" },

  { type: "p", text: "ভাবুন, আপনি একজন ছাত্রকে একটি গণিতের সমস্যা দিলেন। যদি সে শুধু উত্তর বলে দেয়, আপনি বুঝতে পারবেন না সে কীভাবে উত্তর পেল। কিন্তু যদি সে ধাপে ধাপে দেখায় কীভাবে সমাধান করেছে, তাহলে আপনি তার চিন্তাভাবনা পুরোপুরি বুঝতে পারবেন। AI-এর ক্ষেত্রেও একই বিষয় ঘটে।" },

  { type: "p", text: "এই ধাপে ধাপে চিন্তা করার প্রক্রিয়াকেই বলা হয় Chain of Thought Prompting, যেখানে AI শুধু final answer না দিয়ে reasoning process দেখিয়ে সমাধান করে।" },

  { type: "h2", text: "Chain of Thought Prompting কী?" },

  { type: "p", text: "Chain of Thought Prompting হলো এমন একটি Technique যেখানে AI-কে নির্দেশ দেওয়া হয় যেন সে সমস্যার সমাধান ধাপে ধাপে চিন্তা করে এবং সেই reasoning প্রক্রিয়া অনুসরণ করে উত্তর তৈরি করে। সহজভাবে, AI শুধু final answer না দিয়ে thinking process দেখিয়ে সমাধান করে।" },

  { type: "callout", variant: "key", title: "মনে রাখার সহজ উপায়", text: "Chain of Thought = Step-by-step Thinking" },

  { type: "h2", text: "Chain of Thought Prompting কেন গুরুত্বপূর্ণ?" },

  { type: "ul", items: [
    "জটিল সমস্যা সহজভাবে ভাঙা যায়",
    "ভুল কম হয় কারণ reasoning পরিষ্কার থাকে",
    "Mathematical এবং logical problem solving উন্নত হয়",
    "AI-এর decision-making process বোঝা যায়",
    "Explainable AI তৈরি করতে সাহায্য করে"
  ]},

  { type: "h2", text: "ধাপে ধাপে চিন্তা (Step-by-step Reasoning)" },

  { type: "p", text: "Chain of Thought Prompting-এর মূল ধারণা হলো সমস্যাকে ছোট ছোট ধাপে ভাগ করা। সাধারণভাবে প্রক্রিয়াটি হলো: সমস্যা বোঝা → তথ্য বের করা → ধাপে ধাপে সমাধান → final answer।" },

  { type: "h2", text: "Mathematical Reasoning" },

  { type: "p", text: "Chain of Thought Prompting গণিতের সমস্যায় সবচেয়ে বেশি কার্যকর, কারণ এটি প্রতিটি ধাপ পরিষ্কারভাবে দেখায়।" },

  { type: "h3", text: "উদাহরণ" },

  { type: "p", text: "একটি গাড়ি ৬০ কিমি/ঘণ্টা বেগে ৩ ঘণ্টা চলে। মোট দূরত্ব কত?" },

  { type: "ul", items: [
    "Step 1: Speed = 60 km/h",
    "Step 2: Time = 3 hours",
    "Step 3: Distance = Speed × Time",
    "Step 4: 60 × 3 = 180 km",
    "Final Answer: 180 km"
  ]},

  { type: "h2", text: "Logic Problems" },

  { type: "p", text: "Chain of Thought শুধু গণিত নয়, logic-based সমস্যাতেও খুব কার্যকর।" },

  { type: "p", text: "উদাহরণ: রহিম, করিম এবং সুমন তিনজনের মধ্যে একজন মিথ্যা বলছে। কে মিথ্যা বলছে তা ধাপে ধাপে বিশ্লেষণ করে বের করা যায়।" },

  { type: "h2", text: "Chain of Thought Prompting কীভাবে কাজ করে?" },

  { type: "ol", items: [
    "AI-কে ধাপে ধাপে চিন্তা করতে বলা হয়",
    "সমস্যাকে ছোট অংশে ভাগ করা হয়",
    "প্রতিটি অংশ আলাদাভাবে বিশ্লেষণ করা হয়",
    "শেষে final answer তৈরি করা হয়"
  ]},

  { type: "h2", text: "Direct Answer বনাম Chain of Thought" },

  { type: "p", text: "Direct Answer: 25% of 200 = 50 (শুধু final answer)" },

  { type: "p", text: "Chain of Thought: Step-by-step reasoning দেখিয়ে 50 পর্যন্ত পৌঁছানো হয়" },

  { type: "h2", text: "কখন Chain of Thought ব্যবহার করবেন?" },

  { type: "ul", items: [
    "Math Problems",
    "Logical Reasoning",
    "Coding Debugging",
    "Puzzle Solving",
    "Decision Making Problems",
    "Multi-step Calculations"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ" },

  { type: "p", text: "Programming: কোডে bug কোথায় আছে তা ধাপে ধাপে বিশ্লেষণ করো।" },
  { type: "p", text: "Business: নতুন প্রোডাক্ট launch করা উচিত কিনা বিশ্লেষণ করো।" },
  { type: "p", text: "Education: Photosynthesis প্রক্রিয়া ধাপে ধাপে ব্যাখ্যা করো।" },

  { type: "h2", text: "Chain of Thought Prompting-এর সুবিধা" },

  { type: "ol", items: [
    "Better Accuracy",
    "Transparent Reasoning",
    "Complex Problem Solving",
    "Debugging Friendly"
  ]},

  { type: "h2", text: "সীমাবদ্ধতা" },

  { type: "ul", items: [
    "বেশি Token ব্যবহার হয়",
    "Response তুলনামূলক ধীর হতে পারে",
    "Simple প্রশ্নে অপ্রয়োজনীয় দীর্ঘ উত্তর আসতে পারে"
  ]},

  { type: "callout", variant: "tip", title: "নোট", text: "সব সমস্যার জন্য Chain of Thought দরকার হয় না। Simple প্রশ্নে direct answer ভালো।" },

  { type: "h2", text: "AI Application Development-এ এর গুরুত্ব" },

  { type: "ul", items: [
    "AI Problem Solvers",
    "Math Tutor Systems",
    "Code Debugging Tools",
    "Decision Support Systems",
    "Intelligent Chatbots",
    "Research Assistants"
  ]},

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "Chain of Thought Prompting AI-কে ধাপে ধাপে চিন্তা করতে বাধ্য করে",
    "এটি reasoning-based problem solving উন্নত করে",
    "AI শুধু answer না দিয়ে process দেখায়",
    "Complex problem breakdown সহজ হয়",
    "Debugging এবং decision making উন্নত হয়",
    "সব ক্ষেত্রে প্রয়োজন হয় না",
    "Modern AI reasoning-এর একটি গুরুত্বপূর্ণ technique"
  ]}
];

const richContent10: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ১০: Self-Consistency Prompting" },

  { type: "p", text: "ভাবুন, আপনি একটি কঠিন সমস্যার সমাধান করতে তিনজন আলাদা বিশেষজ্ঞকে বললেন। একজন একভাবে সমাধান করল, আরেকজন আরেকভাবে, আর তৃতীয়জন ভিন্নভাবে চিন্তা করল। আপনি এবার শুধু একটি উত্তর না নিয়ে সবগুলো সমাধান তুলনা করে দেখলেন কোনটি সবচেয়ে যুক্তিসঙ্গত।" },

  { type: "p", text: "AI-এর ক্ষেত্রেও একই ধারণা কাজ করে। একাধিক reasoning path তৈরি করে সেখান থেকে সবচেয়ে consistent উত্তর নির্বাচন করার পদ্ধতিকে বলা হয় Self-Consistency Prompting।" },

  { type: "h2", text: "Self-Consistency Prompting কী?" },

  { type: "p", text: "Self-Consistency Prompting হলো এমন একটি technique যেখানে AI একই প্রশ্নের জন্য একাধিক ভিন্ন reasoning path তৈরি করে এবং তারপর সেই সব পথ থেকে সবচেয়ে বেশি consistent বা যুক্তিসঙ্গত উত্তরটি নির্বাচন করে। সহজভাবে, AI একাধিকভাবে চিন্তা করে এবং তারপর voting-এর মাধ্যমে সেরা উত্তরটি বেছে নেয়।" },

  { type: "callout", variant: "key", title: "মনে রাখার সহজ উপায়", text: "Self-Consistency = Multiple Thoughts + Best Answer Selection" },

  { type: "h2", text: "Self-Consistency Prompting কেন গুরুত্বপূর্ণ?" },

  { type: "ul", items: [
    "Complex problem-এর accuracy বাড়ে",
    "Single reasoning error কমে যায়",
    "More reliable output পাওয়া যায়",
    "Logical consistency নিশ্চিত হয়",
    "Chain of Thought-এর limitation কমায়"
  ]},

  { type: "h2", text: "Multiple Reasoning Paths" },

  { type: "p", text: "Self-Consistency Prompting-এর মূল শক্তি হলো একাধিক reasoning path তৈরি করা। একটি মাত্র solution না নিয়ে AI বিভিন্ন সম্ভাব্য সমাধান তৈরি করে।" },

  { type: "h3", text: "উদাহরণ" },

  { type: "p", text: "একটি সংখ্যা ২০% বৃদ্ধি পেয়ে ১২০ হয়েছে। মূল সংখ্যা কত?" },

  { type: "ul", items: [
    "Path 1: 120 ÷ 1.2 = 100",
    "Path 2: 100% = original → 120 = 120% → original = 100",
    "Path 3: 1.2x = 120 → x = 100"
  ]},

  { type: "p", text: "সব path একই answer দিচ্ছে: 100" },

  { type: "h2", text: "Voting Mechanism" },

  { type: "p", text: "Self-Consistency Prompting-এর দ্বিতীয় গুরুত্বপূর্ণ অংশ হলো Voting Mechanism, যেখানে একাধিক reasoning path-এর ফলাফল তুলনা করে সবচেয়ে frequent বা consistent answer নির্বাচন করা হয়।" },

  { type: "ol", items: [
    "একাধিক reasoning path তৈরি হয়",
    "প্রতিটি path একটি answer দেয়",
    "সব answers সংগ্রহ করা হয়",
    "Majority বা consistency অনুযায়ী final answer নির্বাচন করা হয়"
  ]},

  { type: "h2", text: "উদাহরণ (Voting)" },

  { type: "p", text: "Path 1 → A" },
  { type: "p", text: "Path 2 → B" },
  { type: "p", text: "Path 3 → A" },
  { type: "p", text: "Path 4 → A" },

  { type: "p", text: "Final Answer: A (majority vote)" },

  { type: "h2", text: "Chain of Thought বনাম Self-Consistency" },

  { type: "ul", items: [
    "Chain of Thought: একটিমাত্র reasoning path + single output",
    "Self-Consistency: একাধিক reasoning path + voting-based output"
  ]},

  { type: "h2", text: "কখন Self-Consistency ব্যবহার করবেন?" },

  { type: "ul", items: [
    "Math word problems",
    "Logical puzzles",
    "Complex reasoning tasks",
    "Decision-making problems",
    "Coding problem solving",
    "Ambiguous questions"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ" },

  { type: "p", text: "Math Problem: গাড়ি ৫০ কিমি/ঘণ্টা বেগে ২ ঘণ্টা চললে মোট দূরত্ব কত?" },
  { type: "p", text: "Logic Puzzle: তিনজনের মধ্যে কে মিথ্যা বলছে তা নির্ধারণ করো।" },
  { type: "p", text: "Coding Debugging: কোডে bug কোথায় আছে তা নির্ধারণ করো।" },

  { type: "h2", text: "Self-Consistency Prompting-এর সুবিধা" },

  { type: "ol", items: [
    "বেশি Accurate Output",
    "Robust Decision Making",
    "Complex Problem Handling",
    "Reliable AI Systems"
  ]},

  { type: "h2", text: "সীমাবদ্ধতা" },

  { type: "ul", items: [
    "বেশি computational cost",
    "Slower response time",
    "Complex implementation"
  ]},

  { type: "callout", variant: "tip", title: "নোট", text: "Accuracy speed-এর চেয়ে গুরুত্বপূর্ণ হলে Self-Consistency Prompting ব্যবহার করা উচিত।" },

  { type: "h2", text: "AI Application Development-এ এর গুরুত্ব" },

  { type: "ul", items: [
    "AI Problem Solvers",
    "Advanced Chatbots",
    "Mathematical Solvers",
    "Decision Support Systems",
    "Autonomous Agents",
    "Code Generation & Debugging Tools"
  ]},

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "Self-Consistency Prompting একাধিক reasoning path ব্যবহার করে",
    "AI বিভিন্ন solution তৈরি করে এবং voting করে best answer নির্বাচন করে",
    "এটি Chain of Thought-এর তুলনায় বেশি robust",
    "Complex reasoning সমস্যায় বেশি কার্যকর",
    "Accuracy বাড়ায় কিন্তু cost বেশি হয়",
    "Reliable AI systems তৈরিতে গুরুত্বপূর্ণ technique"
  ]}
];

const richContent11: ChapterContentBlock[] = [
  { type: "h2", text: "অধ্যায় ১১: Tree of Thoughts" },

  { type: "p", text: "ভাবুন, আপনি একটি গোলকধাঁধার (maze) মধ্যে আছেন। সামনে একাধিক রাস্তা আছে। আপনি শুধু একটি পথ ধরে এগিয়ে গেলেন না, বরং প্রতিটি মোড়ে দাঁড়িয়ে কয়েকটি সম্ভাব্য পথ কল্পনা করলেন এবং দেখে নিলেন কোন পথ আপনাকে গন্তব্যে নিয়ে যেতে পারে।" },

  { type: "p", text: "AI-এর ক্ষেত্রেও জটিল সমস্যার সমাধানে একই ধরনের চিন্তা ব্যবহার করা হয়। একটিমাত্র চিন্তার পথ না নিয়ে বরং একটি tree structure তৈরি করে বিভিন্ন চিন্তার শাখা (branches) explore করে সমস্যা সমাধানের পদ্ধতিকে বলা হয় Tree of Thoughts।" },

  { type: "h2", text: "Tree of Thoughts কী?" },

  { type: "p", text: "Tree of Thoughts হলো এমন একটি advanced reasoning technique যেখানে AI একটি সমস্যা সমাধানের জন্য একাধিক চিন্তার শাখা (thought branches) তৈরি করে, সেগুলো evaluate করে এবং সেরা পথটি নির্বাচন করে সমাধানে পৌঁছে। সহজভাবে, AI একবারে একটি উত্তর না খুঁজে বরং চিন্তার একটি গাছ (tree) তৈরি করে বিভিন্ন সম্ভাব্য সমাধান explore করে।" },

  { type: "callout", variant: "key", title: "মনে রাখার সহজ উপায়", text: "Tree of Thoughts = Branching Ideas + Exploration + Selection" },

  { type: "h2", text: "Tree of Thoughts কেন গুরুত্বপূর্ণ?" },

  { type: "ul", items: [
    "Complex problem আরও গভীরভাবে analyze করা যায়",
    "Multiple solution path explore করা যায়",
    "Dead-end solutions বাদ দেওয়া যায়",
    "Better reasoning quality পাওয়া যায়",
    "Long-term planning সহজ হয়"
  ]},

  { type: "h2", text: "Decision Trees (চিন্তার গাছ)" },

  { type: "p", text: "Tree of Thoughts মূলত Decision Tree structure-এর উপর ভিত্তি করে কাজ করে যেখানে root node হলো সমস্যা, branches হলো সিদ্ধান্ত এবং leaves হলো final outcome।" },

  { type: "p", text: "উদাহরণ: Career Choice → Job / Startup / Study Further → বিভিন্ন ফলাফল" },

  { type: "h2", text: "Tree of Thoughts কীভাবে কাজ করে?" },

  { type: "ol", items: [
    "Problem Decomposition: সমস্যাকে ছোট অংশে ভাগ করা",
    "Thought Generation: একাধিক সম্ভাব্য চিন্তার শাখা তৈরি করা",
    "Evaluation: প্রতিটি শাখা বিশ্লেষণ করা",
    "Selection: সেরা path নির্বাচন করা"
  ]},

  { type: "h2", text: "একটি সাধারণ উদাহরণ" },

  { type: "p", text: "Prompt: একটি নতুন E-commerce startup কীভাবে সফল করা যায়?" },

  { type: "ul", items: [
    "Marketing: Social Media Ads, Influencer Marketing, SEO",
    "Product: Low Price, Premium, Niche Focus",
    "Technical: Fast Website, Mobile App, Recommendation System"
  ]},

  { type: "h2", text: "Problem Solving-এ Tree of Thoughts" },

  { type: "h3", text: "Math Problem" },

  { type: "p", text: "একটি সংখ্যা এমনভাবে ভাগ করো যাতে যোগফল ৫০ হয় এবং গুণফল সর্বোচ্চ হয়। বিভিন্ন partition explore করে best solution নির্বাচন করা হয়।" },

  { type: "h3", text: "Logic Problem" },

  { type: "p", text: "তিনটি দরজার মধ্যে একটি পুরস্কার আছে—AI বিভিন্ন strategy tree তৈরি করে optimal choice বের করে।" },

  { type: "h3", text: "Business Strategy" },

  { type: "ul", items: [
    "Paid Marketing",
    "Organic Growth",
    "Referral System",
    "Gamification Strategy"
  ]},

  { type: "h2", text: "Chain of Thought বনাম Tree of Thoughts" },

  { type: "ul", items: [
    "Chain of Thought: একক linear reasoning path",
    "Tree of Thoughts: multiple branching paths + exploration + selection"
  ]},

  { type: "h2", text: "Self-Consistency বনাম Tree of Thoughts" },

  { type: "ul", items: [
    "Self-Consistency: multiple independent answers + voting",
    "Tree of Thoughts: structured reasoning tree + pruning + path selection"
  ]},

  { type: "h2", text: "Tree Pruning (অপ্রয়োজনীয় শাখা কাটা)" },

  { type: "p", text: "সব branch অনুসরণ করা হয় না। যেসব path weak বা inefficient, সেগুলো বাদ দেওয়া হয়—এটাকেই pruning বলা হয়।" },

  { type: "callout", variant: "tip", title: "নোট", text: "Pruning = bad or low-value reasoning path remove করা" },

  { type: "h2", text: "কখন Tree of Thoughts ব্যবহার করবেন?" },

  { type: "ul", items: [
    "Complex problem solving",
    "Strategy planning",
    "Multi-step reasoning",
    "Optimization problems",
    "Decision making under uncertainty",
    "Game theory problems"
  ]},

  { type: "h2", text: "বাস্তব উদাহরণ" },

  { type: "p", text: "AI Product Design: chatbot design করা" },
  { type: "p", text: "Startup Planning: EdTech growth strategy" },
  { type: "p", text: "System Design: scalable microservices architecture" },

  { type: "h2", text: "Tree of Thoughts-এর সুবিধা" },

  { type: "ol", items: [
    "Deep reasoning সম্ভব হয়",
    "Better decision making",
    "Flexible problem solving",
    "High accuracy in complex tasks"
  ]},

  { type: "h2", text: "সীমাবদ্ধতা" },

  { type: "ul", items: [
    "High computational cost",
    "Slower execution",
    "Design complexity বেশি"
  ]},

  { type: "callout", variant: "tip", title: "নোট", text: "Tree of Thoughts তখনই ব্যবহার করা উচিত যখন problem highly complex এবং multiple solution path explore করা প্রয়োজন।" },

  { type: "h2", text: "AI Application Development-এ এর গুরুত্ব" },

  { type: "ul", items: [
    "Autonomous AI Agents",
    "Game Playing AI",
    "Strategic Planning Systems",
    "Complex Problem Solvers",
    "Research Assistants",
    "Multi-step Decision Systems"
  ]},

  { type: "h2", text: "📌 চ্যাপ্টার সারমর্ম" },

  { type: "ul", items: [
    "Tree of Thoughts হলো branching-based reasoning technique",
    "AI একাধিক চিন্তার শাখা তৈরি করে এবং evaluate করে",
    "Decision tree structure অনুসরণ করে",
    "Complex problem solving-এ খুব কার্যকর",
    "Chain of Thought-এর তুলনায় বেশি powerful",
    "Pruning ব্যবহার করে অপ্রয়োজনীয় path বাদ দেয়",
    "High cost হলেও reasoning quality উন্নত হয়"
  ]}
];

const richContent11: ChapterContentBlock[] = [
  {
    type: "p",
    text: "ভাবুন, আপনি একটি নতুন শহরে গিয়ে রাস্তা খুঁজছেন। শুধু মাথায় চিন্তা করে (reasoning) আপনি গন্তব্যে পৌঁছাতে পারবেন না। আবার শুধু হাঁটলেই (action) সঠিক পথে যাবেন না। আপনাকে চিন্তা করতে হবে, আবার সেই অনুযায়ী কাজও করতে হবে—এখন কোন দিকটা ঠিক হবে, তারপর গুগল ম্যাপ চেক করতে হবে, তারপর আবার চলতে হবে। AI-এর ক্ষেত্রেও একই বিষয় ঘটে। শুধুমাত্র চিন্তা (Reasoning) বা শুধুমাত্র কাজ (Action) আলাদাভাবে যথেষ্ট নয়। বরং চিন্তা + কাজ একসাথে মিলিয়ে সিদ্ধান্ত নেওয়ার পদ্ধতিকে বলা হয় ReAct Framework।"
  },

  {
    type: "h2",
    text: "ReAct Framework কী?"
  },
  {
    type: "p",
    text: "ReAct Framework হলো এমন একটি AI reasoning পদ্ধতি যেখানে মডেল একই সাথে Reasoning (চিন্তা করা) এবং Acting (কোনো টুল বা action ব্যবহার করা) করে সমস্যার সমাধান করে।"
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "ReAct = Reason + Act"
  },
  {
    type: "p",
    text: "সহজ ভাষায়, AI শুধু মাথায় ভাবেই না, বরং প্রয়োজনে বাহ্যিক টুল ব্যবহার করে বাস্তব কাজও সম্পন্ন করে।"
  },

  {
    type: "h2",
    text: "ReAct Framework কেন গুরুত্বপূর্ণ?"
  },
  {
    type: "ul",
    items: [
      "AI শুধু knowledge-based নয়, action-based কাজও করতে পারে।",
      "Real-world problems solve করা সহজ হয়।",
      "External tools (search, calculator, API) ব্যবহার করা যায়।",
      "Multi-step problem solving আরও শক্তিশালী হয়।",
      "Hallucination (ভুল তথ্য বানানো) কমে যায়।"
    ]
  },

  {
    type: "h2",
    text: "Reason + Act Flow"
  },
  {
    type: "p",
    text: "ReAct Framework সাধারণত একটি loop আকারে কাজ করে:"
  },
  {
    type: "ol",
    items: [
      "Reasoning → AI ভাবে কী করা দরকার",
      "Action → AI কোনো tool বা function ব্যবহার করে",
      "Observation → ফলাফল দেখে",
      "আবার Reasoning → নতুন সিদ্ধান্ত নেয়"
    ]
  },
  {
    type: "p",
    text: "এই loop চলতে থাকে যতক্ষণ না final answer পাওয়া যায়।"
  },

  {
    type: "h2",
    text: "একটি সাধারণ উদাহরণ"
  },
  {
    type: "p",
    text: "ধরুন আপনি জানতে চান বর্তমানে বাংলাদেশের জনসংখ্যা কত?"
  },
  {
    type: "ol",
    items: [
      "Reason: আমাকে আপডেটেড population data খুঁজতে হবে।",
      "Act: Search tool ব্যবহার করবে।",
      "Observation: Tool থেকে data আসবে।",
      "Reason: Data analyze করে final answer তৈরি করবে।"
    ]
  },

  {
    type: "h2",
    text: "Tool Usage (টুল ব্যবহার)"
  },
  {
    type: "p",
    text: "ReAct Framework-এর সবচেয়ে গুরুত্বপূর্ণ অংশ হলো Tool Usage। AI নিজে সব তথ্য না জেনে বাহ্যিক টুল ব্যবহার করতে পারে।"
  },
  {
    type: "ul",
    items: [
      "Web Search Tool",
      "Calculator",
      "Database Query",
      "API Calls",
      "Code Execution Tool"
    ]
  },

  {
    type: "h3",
    text: "উদাহরণ ১: Calculator ব্যবহার"
  },
  {
    type: "p",
    text: "একটি পণ্যের দাম ২৫% ছাড়ের পর ৭৫০ টাকা হয়েছে। আসল দাম কত?"
  },
  {
    type: "ol",
    items: [
      "Reason: মূল দাম বের করতে হবে",
      "Act: calculator ব্যবহার করা",
      "Observation: result বের হলো",
      "Reason: final answer তৈরি করা"
    ]
  },
  {
    type: "callout",
    variant: "tip",
    title: "Final Answer",
    text: "আসল দাম = 1000 টাকা"
  },

  {
    type: "h3",
    text: "উদাহরণ ২: Web Search Tool"
  },
  {
    type: "p",
    text: "OpenAI-এর latest GPT model কোনটি?"
  },
  {
    type: "ol",
    items: [
      "Reason: latest information দরকার",
      "Act: web search",
      "Observation: latest model data পাওয়া গেল",
      "Reason: final response তৈরি"
    ]
  },

  {
    type: "h3",
    text: "উদাহরণ ৩: Code Execution"
  },
  {
    type: "p",
    text: "Python কোড দিয়ে Fibonacci series বের করো এবং run করে দেখাও।"
  },
  {
    type: "ol",
    items: [
      "Reason: algorithm লিখতে হবে",
      "Act: code execution tool ব্যবহার",
      "Observation: output দেখা",
      "Reason: explanation তৈরি"
    ]
  },

  {
    type: "h2",
    text: "ReAct Framework কীভাবে কাজ করে?"
  },
  {
    type: "ol",
    items: [
      "Thought (Reasoning) → AI ভাবে কী করতে হবে",
      "Action → AI কোনো tool বা function call করে",
      "Observation → Tool থেকে ফলাফল পায়"
    ]
  },
  {
    type: "p",
    text: "তারপর আবার এই loop পুনরাবৃত্তি হয় যতক্ষণ না final answer পাওয়া যায়।"
  },

  {
    type: "h2",
    text: "Comparison"
  },
  {
    type: "table",
    headers: ["Chain of Thought", "ReAct Framework"],
    rows: [
      ["শুধুমাত্র reasoning", "reasoning + action"],
      ["কোনো external tool ব্যবহার করে না", "external tools ব্যবহার করে"],
      ["internal thinking-based", "real-world interaction সক্ষম"]
    ]
  },
  {
    type: "table",
    headers: ["Tree of Thoughts", "ReAct Framework"],
    rows: [
      ["multiple reasoning branches", "real-time tool interaction"],
      ["planning-focused", "execution-focused"],
      ["internal exploration", "environment-based decision making"]
    ]
  },

  {
    type: "h2",
    text: "কখন ReAct ব্যবহার করবেন?"
  },
  {
    type: "ul",
    items: [
      "Real-time information দরকার হলে",
      "Calculation-heavy সমস্যা",
      "API বা database ব্যবহার",
      "Web-based queries",
      "AI agents তৈরি করতে",
      "Automation systems"
    ]
  },

  {
    type: "h2",
    text: "বাস্তব উদাহরণ"
  },
  {
    type: "ul",
    items: [
      "AI Assistant: আজকের meeting schedule বের করো এবং reminder সেট করো।",
      "Research Assistant: Machine Learning-এর latest trends কী?",
      "E-commerce Bot: এই product-এর current price কত এবং discount আছে কি না বলো।"
    ]
  },

  {
    type: "h2",
    text: "ReAct Framework-এর সুবিধা"
  },
  {
    type: "ul",
    items: [
      "Real-world capability: AI শুধু text নয়, বাস্তব কাজও করতে পারে।",
      "Better Accuracy: External tools ব্যবহার করায় ভুল কমে।",
      "Dynamic Reasoning: Situation অনুযায়ী সিদ্ধান্ত নিতে পারে।",
      "Automation Friendly: AI agents তৈরি করা সহজ হয়।"
    ]
  },

  {
    type: "h2",
    text: "সীমাবদ্ধতা"
  },
  {
    type: "ul",
    items: [
      "Tool Dependency: Tool না থাকলে কাজ সীমিত হয়ে যায়।",
      "Latency: Multiple steps হওয়ায় response ধীর হতে পারে।",
      "Complexity: System design ও integration কঠিন।"
    ]
  },
  {
    type: "callout",
    variant: "tip",
    title: "নোট",
    text: "ReAct Framework হলো AI agents-এর backbone ধারণাগুলোর একটি, যেখানে thinking এবং acting একসাথে কাজ করে।"
  },

  {
    type: "h2",
    text: "AI Application Development-এ এর গুরুত্ব"
  },
  {
    type: "p",
    text: "ReAct Framework modern AI agents এবং automation systems-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।"
  },
  {
    type: "ul",
    items: [
      "AI Personal Assistants",
      "Autonomous Agents",
      "Research Automation Tools",
      "Customer Support Bots",
      "Data Retrieval Systems",
      "Workflow Automation Systems"
    ]
  },

  {
    type: "p",
    text: "ReAct-based systems বাস্তব জগতে AI-কে কার্যকরভাবে কাজ করতে সক্ষম করে।"
  },

  {
    type: "h2",
    text: "চ্যাপ্টার সারমর্ম"
  },
  {
    type: "ul",
    items: [
      "ReAct Framework হলো Reason + Act ভিত্তিক AI system।",
      "AI চিন্তা করে এবং প্রয়োজনে tool ব্যবহার করে কাজ করে।",
      "Reasoning + Action + Observation loop অনুসরণ করে।",
      "Chain of Thought শুধুমাত্র reasoning করে, কিন্তু ReAct বাস্তব কাজও করে।",
      "Web search, calculator, API ইত্যাদি tool ব্যবহার করা যায়।",
      "Real-world AI agent development-এর জন্য এটি খুব গুরুত্বপূর্ণ।"
    ]
  }
];

const richContent12: ChapterContentBlock[] = [
  {
    type: "p",
    text: "ভাবুন, আপনি একজন অভিজ্ঞ শেফকে শুধু রান্না করতে বললেন না, বরং তাকে বললেন—এই ডিশটা আরও ভালো করার জন্য কীভাবে রেসিপিটা ডিজাইন করা উচিত? এখন সে শুধু রান্না করছে না, বরং পুরো রেসিপি নিজেই অপটিমাইজ করছে। AI-এর ক্ষেত্রেও একই ধারণা কাজ করে। আমরা যখন AI-কে শুধু উত্তর তৈরি করতে না বলে বরং ভালো Prompt কীভাবে লিখতে হবে বা Prompt কিভাবে উন্নত করা যায় তা শেখাতে ব্যবহার করি, সেটাকে বলা হয় Meta Prompting।"
  },

  {
    type: "h2",
    text: "Meta Prompting কী?"
  },
  {
    type: "p",
    text: "Meta Prompting হলো এমন একটি technique যেখানে AI-কে ব্যবহার করা হয় Prompt তৈরি, বিশ্লেষণ এবং উন্নত (optimize) করার জন্য।"
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "Meta Prompting = Prompt নিয়ে Prompt করা"
  },
  {
    type: "p",
    text: "সহজ ভাষায়, AI নিজেই Prompt Engineer-এর মতো কাজ করে এবং ভালো Prompt বানাতে সাহায্য করে।"
  },

  {
    type: "h2",
    text: "Meta Prompting কেন গুরুত্বপূর্ণ?"
  },
  {
    type: "ul",
    items: [
      "আরও শক্তিশালী এবং কার্যকর Prompt তৈরি করা যায়।",
      "AI-এর output quality অনেক উন্নত হয়।",
      "Manual Prompt Engineering-এর সময় কমে যায়।",
      "Complex task-এর জন্য optimized instruction তৈরি হয়।",
      "Iterative improvement সহজ হয়।"
    ]
  },

  {
    type: "h2",
    text: "AI দিয়ে Prompt তৈরি (AI-generated Prompt)"
  },
  {
    type: "p",
    text: "Meta Prompting-এর সবচেয়ে গুরুত্বপূর্ণ ব্যবহার হলো AI-কে দিয়ে নতুন Prompt তৈরি করানো।"
  },

  {
    type: "h3",
    text: "উদাহরণ"
  },
  {
    type: "p",
    text: "User Input: আমি একটি AI chatbot বানাতে চাই যা customer support handle করবে। আমার জন্য একটি ভালো prompt তৈরি করো।"
  },
  {
    type: "callout",
    variant: "tip",
    title: "AI Output (Optimized Prompt)",
    text: "You are a professional customer support AI assistant. Your task is to help users solve their problems politely and efficiently. Always ask clarifying questions when needed and provide step-by-step solutions. Maintain a friendly and professional tone."
  },
  {
    type: "p",
    text: "এখানে AI নিজেই একটি high-quality prompt তৈরি করেছে।"
  },

  {
    type: "h2",
    text: "Prompt Optimization"
  },
  {
    type: "p",
    text: "Meta Prompting-এর আরেকটি গুরুত্বপূর্ণ অংশ হলো Prompt Optimization। এখানে AI একটি existing prompt নিয়ে সেটাকে আরও ভালো, পরিষ্কার এবং কার্যকর করে তোলে।"
  },

  {
    type: "h3",
    text: "উদাহরণ"
  },
  {
    type: "p",
    text: "Weak Prompt: Explain AI."
  },
  {
    type: "callout",
    variant: "tip",
    title: "Optimized Prompt (AI Generated)",
    text: "Explain Artificial Intelligence in simple terms for beginners. Include real-world examples and explain how it is used in daily life. Keep the explanation short and easy to understand."
  },
  {
    type: "p",
    text: "AI prompt-কে আরও structured এবং effective করেছে।"
  },

  {
    type: "h2",
    text: "Meta Prompting কীভাবে কাজ করে?"
  },
  {
    type: "ol",
    items: [
      "Analyze Prompt → AI বর্তমান prompt বিশ্লেষণ করে দেখে কী missing বা unclear।",
      "Improve Structure → Prompt-কে আরও structured এবং specific করে।",
      "Generate Optimized Prompt → Final improved prompt তৈরি করে।"
    ]
  },

  {
    type: "h2",
    text: "উদাহরণ"
  },

  {
    type: "h3",
    text: "Content Writing Prompt"
  },
  {
    type: "p",
    text: "Input: Write about climate change."
  },
  {
    type: "callout",
    variant: "tip",
    title: "Optimized Prompt",
    text: "Write a 300-word article on climate change. Explain its causes, effects, and possible solutions. Use simple language and include real-world examples."
  },

  {
    type: "h3",
    text: "Coding Prompt"
  },
  {
    type: "p",
    text: "Input: Write a Python function."
  },
  {
    type: "callout",
    variant: "tip",
    title: "Optimized Prompt",
    text: "Write a Python function that takes a list of numbers as input and returns the sum of all even numbers. Include comments to explain each step."
  },

  {
    type: "h3",
    text: "Business Prompt"
  },
  {
    type: "p",
    text: "Input: Give marketing ideas."
  },
  {
    type: "callout",
    variant: "tip",
    title: "Optimized Prompt",
    text: "Suggest 5 marketing strategies for a new online clothing brand targeting young adults. Focus on low-budget digital marketing techniques such as social media and influencer collaboration."
  },

  {
    type: "h2",
    text: "Meta Prompting বনাম Normal Prompting"
  },
  {
    type: "table",
    headers: ["Normal Prompting", "Meta Prompting"],
    rows: [
      ["সরাসরি AI-কে প্রশ্ন করা", "Prompt নিজেই improve করা"],
      ["Output-only focus", "Instruction design focus"],
      ["Explain machine learning.", "Improve this prompt: Explain machine learning"]
    ]
  },

  {
    type: "h2",
    text: "Meta Prompting-এর সুবিধা"
  },
  {
    type: "ul",
    items: [
      "High-quality Output → Better prompt → better response",
      "Time Saving → Manual prompt tweaking কম লাগে",
      "Scalability → Large-scale AI systems design করা সহজ",
      "Consistency → Standardized prompt format তৈরি হয়"
    ]
  },

  {
    type: "h2",
    text: "সীমাবদ্ধতা"
  },
  {
    type: "ul",
    items: [
      "Over-optimization → Prompt অতিরিক্ত complex হয়ে যেতে পারে",
      "Dependency on AI → AI-এর উপর বেশি নির্ভরতা তৈরি হয়",
      "Less Human Creativity → কখনও কখনও human intuition কম ব্যবহার হয়"
    ]
  },
  {
    type: "callout",
    variant: "tip",
    title: "নোট",
    text: "Meta Prompting তখন সবচেয়ে কার্যকর যখন আপনি repeatedly high-quality prompts তৈরি করতে চান।"
  },

  {
    type: "h2",
    text: "AI Application Development-এ এর গুরুত্ব"
  },
  {
    type: "p",
    text: "Meta Prompting modern AI system design-এর একটি অত্যন্ত গুরুত্বপূর্ণ concept।"
  },
  {
    type: "ul",
    items: [
      "AI Prompt Engineering Tools",
      "Automated Chatbot Design",
      "Content Generation Systems",
      "AI Workflow Optimization",
      "Enterprise AI Solutions",
      "Agent-based AI Systems"
    ]
  },

  {
    type: "p",
    text: "অনেক advanced AI platform নিজেই meta-prompting ব্যবহার করে better prompts generate করে।"
  },

  {
    type: "h2",
    text: "চ্যাপ্টার সারমর্ম"
  },
  {
    type: "ul",
    items: [
      "Meta Prompting হলো Prompt নিয়ে কাজ করার technique।",
      "AI ব্যবহার করে Prompt তৈরি এবং optimize করা যায়।",
      "Prompt quality উন্নত করে output আরও accurate হয়।",
      "Weak prompt কে structured prompt-এ রূপান্তর করা যায়।",
      "AI নিজেই Prompt Engineer-এর মতো কাজ করতে পারে।",
      "Complex AI system design-এ এটি গুরুত্বপূর্ণ ভূমিকা রাখে।"
    ]
  }
];

const richContent13: ChapterContentBlock[] = [
  {
    type: "p",
    text: "ভাবুন, আপনি একটি রেস্টুরেন্টে খাবার অর্ডার করছেন। আপনি শুধু একবারেই সব কাজ শেষ করেন না—প্রথমে মেনু দেখেন, তারপর অর্ডার দেন, তারপর কিচেন রান্না করে, তারপর সার্ভার আপনাকে পরিবেশন করে। প্রতিটি ধাপ একে অপরের সাথে যুক্ত, কিন্তু আলাদা আলাদা কাজ। AI-এর ক্ষেত্রেও জটিল কাজ এক ধাপে শেষ করা যায় না। বরং একাধিক ছোট ছোট Prompt ধাপে ধাপে ব্যবহার করে পুরো কাজ সম্পন্ন করা হয়। এই প্রক্রিয়াকেই বলা হয় Prompt Chaining।"
  },

  {
    type: "h2",
    text: "Prompt Chaining কী?"
  },
  {
    type: "p",
    text: "Prompt Chaining হলো এমন একটি technique যেখানে একটি বড় কাজকে একাধিক ছোট Prompt-এ ভাগ করা হয় এবং প্রতিটি Prompt-এর output পরবর্তী Prompt-এর input হিসেবে ব্যবহার করা হয়।"
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "Prompt Chaining = Step-by-step AI Workflow"
  },
  {
    type: "p",
    text: "সহজ ভাষায়, এটি হলো: Multi-step Prompt Workflow = Prompt → Output → Next Prompt → Final Result"
  },

  {
    type: "h2",
    text: "Prompt Chaining কেন গুরুত্বপূর্ণ?"
  },
  {
    type: "ul",
    items: [
      "Complex কাজ সহজে ছোট অংশে ভাগ করা যায়।",
      "AI-এর accuracy বাড়ে।",
      "Debugging সহজ হয়।",
      "Automation workflow তৈরি করা যায়।",
      "Large-scale AI system design সহজ হয়।"
    ]
  },

  {
    type: "h2",
    text: "Multi-step Workflow"
  },
  {
    type: "p",
    text: "Prompt Chaining-এর মূল ধারণা হলো একটি workflow তৈরি করা যেখানে প্রতিটি ধাপ আলাদা কাজ করে।"
  },
  {
    type: "ol",
    items: [
      "প্রথম Prompt → Data collect করা",
      "দ্বিতীয় Prompt → Data analyze করা",
      "তৃতীয় Prompt → Output refine করা",
      "চতুর্থ Prompt → Final result তৈরি করা"
    ]
  },

  {
    type: "h3",
    text: "একটি সাধারণ উদাহরণ"
  },
  {
    type: "p",
    text: "ধরুন আপনি একটি ব্লগ পোস্ট লিখতে চান।"
  },

  {
    type: "callout",
    variant: "info",
    title: "Step 1: Outline তৈরি",
    text: "AI নিয়ে একটি ব্লগ পোস্টের outline তৈরি করো।"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 2: Content Expansion",
    text: "নিচের outline অনুযায়ী বিস্তারিত content লিখো।"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 3: Editing",
    text: "এই ব্লগ পোস্টটি আরও সহজ ও engaging করে rewrite করো।"
  },
  {
    type: "p",
    text: "👉 এখানে প্রতিটি step আলাদা Prompt, কিন্তু একসাথে পুরো কাজ complete হয়েছে।"
  },

  {
    type: "h2",
    text: "Automation-এর ভূমিকা"
  },
  {
    type: "p",
    text: "Prompt Chaining AI automation-এর একটি গুরুত্বপূর্ণ অংশ। এটি ব্যবহার করে বিভিন্ন AI workflow তৈরি করা যায়।"
  },
  {
    type: "ul",
    items: [
      "Content generation pipeline",
      "Data processing workflow",
      "AI agents",
      "Customer support systems",
      "Report generation systems"
    ]
  },

  {
    type: "h3",
    text: "উদাহরণ ১: Email Processing System"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 1: Email বুঝা",
    text: "এই ইমেইলটি বিশ্লেষণ করো এবং মূল সমস্যা বের করো।"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 2: Response Draft",
    text: "এই সমস্যার জন্য একটি professional reply লিখো।"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 3: Tone Adjustment",
    text: "এই ইমেইলটি আরও polite এবং professional করে rewrite করো।"
  },

  {
    type: "h3",
    text: "উদাহরণ ২: Data Analysis Workflow"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 1: Data Summary",
    text: "নিচের ডেটার summary তৈরি করো।"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 2: Insight Extraction",
    text: "এই ডেটা থেকে গুরুত্বপূর্ণ insights বের করো।"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 3: Report Generation",
    text: "এই insights ব্যবহার করে একটি business report তৈরি করো।"
  },

  {
    type: "h3",
    text: "উদাহরণ ৩: Code Development Pipeline"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 1: Requirement Analysis",
    text: "এই সমস্যার জন্য system requirements নির্ধারণ করো।"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 2: Code Generation",
    text: "এই requirements অনুযায়ী Python code লিখো।"
  },
  {
    type: "callout",
    variant: "info",
    title: "Step 3: Optimization",
    text: "এই কোডটি optimize করো এবং performance improve করো।"
  },

  {
    type: "h2",
    text: "Prompt Chaining কীভাবে কাজ করে?"
  },
  {
    type: "ol",
    items: [
      "Input Stage → User initial prompt দেয়",
      "Processing Stage → AI একাধিক intermediate steps তৈরি করে",
      "Transformation Stage → প্রতিটি step output refine করে",
      "Final Output Stage → শেষ refined result তৈরি হয়"
    ]
  },

  {
    type: "h2",
    text: "Prompt Chaining বনাম Single Prompt"
  },
  {
    type: "table",
    headers: ["Single Prompt", "Prompt Chaining"],
    rows: [
      ["একটি complete কাজ এক ধাপে", "Step-by-step workflow"],
      ["একবারে output তৈরি", "Multiple stages এ output তৈরি"],
      ["কম control", "বেশি control"],
      ["Hard to debug", "Easy to debug"]
    ]
  },

  {
    type: "h2",
    text: "Prompt Chaining-এর সুবিধা"
  },
  {
    type: "ul",
    items: [
      "Better Control → প্রতিটি step আলাদাভাবে control করা যায়",
      "Higher Accuracy → Complex কাজ ভাগ করলে error কমে",
      "Debug Friendly → কোন step-এ সমস্যা হচ্ছে বোঝা যায়",
      "Scalable Workflow → Large AI systems design সহজ হয়"
    ]
  },

  {
    type: "h2",
    text: "সীমাবদ্ধতা"
  },
  {
    type: "ul",
    items: [
      "বেশি Time লাগে → Multiple prompts execute করতে হয়",
      "Complex Design → Workflow planning দরকার হয়",
      "Dependency Risk → একটি step ভুল হলে পুরো chain প্রভাবিত হতে পারে"
    ]
  },
  {
    type: "callout",
    variant: "tip",
    title: "নোট",
    text: "Prompt Chaining তখনই best কাজ করে যখন কাজটি multi-step এবং structured output প্রয়োজন।"
  },

  {
    type: "h2",
    text: "AI Application Development-এ এর গুরুত্ব"
  },
  {
    type: "p",
    text: "Prompt Chaining modern AI systems-এর backbone workflow technique।"
  },
  {
    type: "ul",
    items: [
      "AI Content Pipelines",
      "Autonomous Agents",
      "Data Processing Systems",
      "Chatbot Workflows",
      "Report Generation Tools",
      "Workflow Automation Platforms"
    ]
  },
  {
    type: "p",
    text: "Real-world AI systems প্রায় সবই prompt chaining বা similar pipeline architecture ব্যবহার করে।"
  },

  {
    type: "h2",
    text: "চ্যাপ্টার সারমর্ম"
  },
  {
    type: "ul",
    items: [
      "Prompt Chaining হলো multi-step prompt workflow।",
      "বড় কাজকে ছোট ছোট prompt-এ ভাগ করা হয়।",
      "প্রতিটি step-এর output পরবর্তী step-এর input হয়।",
      "Automation এবং complex task handling-এর জন্য খুব কার্যকর।",
      "Debugging এবং control সহজ হয়।",
      "AI system design এবং agents তৈরিতে এটি গুরুত্বপূর্ণ technique।"
    ]
  }
];

const richContent14: ChapterContentBlock[] = [
  {
    type: "p",
    text: "ভাবুন, আপনি একটি খুব শক্তিশালী গাড়ি চালাচ্ছেন, কিন্তু আপনি শুধু স্টিয়ারিং আর ব্রেক ব্যবহার করছেন। অথচ সেই গাড়ির ভিতরে আরও অনেক advanced feature আছে—cruise control, driving modes, navigation automation—যেগুলো ব্যবহার করলে পুরো experience বদলে যায়। ChatGPT-ও ঠিক এমনই। বেশিরভাগ মানুষ শুধু সাধারণ প্রশ্ন করে ব্যবহার করে, কিন্তু এর ভিতরে কিছু powerful features আছে যেগুলো ব্যবহার করলে এটি একটি “personal AI system”-এ পরিণত হয়।"
  },

  {
    type: "h2",
    text: "ChatGPT-এর Hidden Features কী?"
  },
  {
    type: "p",
    text: "Hidden Features বলতে বোঝায় এমন কিছু advanced functionality যা ChatGPT-কে শুধু প্রশ্নোত্তর টুল না বানিয়ে একটি personalized AI assistant, memory-based system এবং research engine-এ পরিণত করে।"
  },
  {
    type: "callout",
    variant: "key",
    title: "এই অধ্যায়ে আমরা ৪টি গুরুত্বপূর্ণ feature দেখব",
    text: "Custom Instructions • Memory • Deep Research • Projects"
  },

  {
    type: "h2",
    text: "১. Custom Instructions"
  },
  {
    type: "p",
    text: "Custom Instructions হলো এমন একটি feature যেখানে আপনি ChatGPT-কে আগেই বলে দিতে পারেন সে কীভাবে আচরণ করবে এবং কী ধরনের উত্তর দেবে।"
  },

  {
    type: "h3",
    text: "Custom Instructions কী?"
  },
  {
    type: "p",
    text: "এটি এমন একটি সেটিং যেখানে আপনি AI-কে personal rules দিয়ে দেন।"
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "Custom Instructions = AI-এর Personal Behavior Settings"
  },

  {
    type: "h3",
    text: "কেন গুরুত্বপূর্ণ?"
  },
  {
    type: "ul",
    items: [
      "প্রতিবার একই কথা বলার দরকার হয় না।",
      "AI আপনার writing style বুঝে যায়।",
      "Personalized response পাওয়া যায়।",
      "Productivity অনেক বেড়ে যায়।"
    ]
  },

  {
    type: "h3",
    text: "বাস্তব ব্যবহার"
  },
  {
    type: "ul",
    items: [
      "IELTS preparation",
      "Coding learning assistant",
      "Research helper",
      "Content writing assistant"
    ]
  },

  {
    type: "h2",
    text: "২. Memory"
  },
  {
    type: "p",
    text: "Memory হলো ChatGPT-এর এমন একটি feature যেখানে এটি আপনার সম্পর্কে কিছু তথ্য মনে রাখতে পারে এবং ভবিষ্যতে সেই অনুযায়ী response personalize করতে পারে।"
  },

  {
    type: "h3",
    text: "Memory কী?"
  },
  {
    type: "p",
    text: "Memory মানে AI আপনার preference, goal বা important information ভবিষ্যতের জন্য store করে রাখে।"
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "Memory = AI remembers you across chats"
  },

  {
    type: "h3",
    text: "কী ধরনের তথ্য মনে রাখতে পারে?"
  },
  {
    type: "ul",
    items: [
      "আপনার learning goal",
      "আপনার writing style preference",
      "আপনার career interest",
      "আপনার preferred language"
    ]
  },

  {
    type: "h3",
    text: "কেন গুরুত্বপূর্ণ?"
  },
  {
    type: "ul",
    items: [
      "Repeated context দিতে হয় না",
      "Long-term personalization পাওয়া যায়",
      "User experience অনেক smooth হয়"
    ]
  },

  {
    type: "h3",
    text: "বাস্তব ব্যবহার"
  },
  {
    type: "ul",
    items: [
      "Personal tutor",
      "Career coach",
      "Long-term learning assistant"
    ]
  },

  {
    type: "h2",
    text: "৩. Deep Research"
  },
  {
    type: "p",
    text: "Deep Research হলো এমন একটি feature যেখানে ChatGPT শুধু সাধারণ উত্তর না দিয়ে multiple sources থেকে তথ্য বিশ্লেষণ করে গভীর research-based output তৈরি করে।"
  },

  {
    type: "h3",
    text: "Deep Research কী?"
  },
  {
    type: "p",
    text: "এটি একটি advanced research mode যেখানে AI বিভিন্ন তথ্য analyze করে structured report তৈরি করে এবং in-depth explanation দেয়।"
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "Deep Research = AI as a Research Analyst"
  },

  {
    type: "h3",
    text: "কেন গুরুত্বপূর্ণ?"
  },
  {
    type: "ul",
    items: [
      "Complex topic সহজে বোঝা যায়",
      "Reliable এবং structured information পাওয়া যায়",
      "Academic এবং professional কাজে ব্যবহারযোগ্য"
    ]
  },

  {
    type: "h3",
    text: "বাস্তব ব্যবহার"
  },
  {
    type: "ul",
    items: [
      "Academic paper writing",
      "Market research",
      "Technology analysis",
      "Business strategy development"
    ]
  },

  {
    type: "h2",
    text: "৪. Projects"
  },
  {
    type: "p",
    text: "Projects হলো এমন একটি feature যেখানে আপনি একটি নির্দিষ্ট topic বা goal-এর জন্য সব chat, files, এবং context এক জায়গায় organize করতে পারেন।"
  },

  {
    type: "h3",
    text: "Projects কী?"
  },
  {
    type: "p",
    text: "Projects হলো AI workspace যেখানে একটি নির্দিষ্ট কাজের সব তথ্য একসাথে থাকে।"
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "Projects = AI workspace for a specific goal"
  },

  {
    type: "h3",
    text: "কেন গুরুত্বপূর্ণ?"
  },
  {
    type: "ul",
    items: [
      "এক জায়গায় সব context থাকে",
      "Multiple related tasks manage করা যায়",
      "Long-term project tracking সহজ হয়"
    ]
  },

  {
    type: "h3",
    text: "বাস্তব ব্যবহার"
  },
  {
    type: "ul",
    items: [
      "Book writing",
      "Software development documentation",
      "Startup planning",
      "Research projects"
    ]
  },

  {
    type: "h2",
    text: "চারটি Feature একসাথে কিভাবে কাজ করে?"
  },
  {
    type: "p",
    text: "এই চারটি feature একসাথে ব্যবহার করলে ChatGPT একটি powerful AI system হয়ে যায়।"
  },
  {
    type: "ul",
    items: [
      "Custom Instructions → behavior set করে",
      "Memory → আপনাকে মনে রাখে",
      "Deep Research → গভীর বিশ্লেষণ করে",
      "Projects → কাজ organize করে"
    ]
  },
  {
    type: "callout",
    variant: "tip",
    title: "ফলাফল",
    text: "সব মিলিয়ে এটি একটি personal AI operating system-এর মতো কাজ করে।"
  },

  {
    type: "h2",
    text: "AI Application Development-এ এর গুরুত্ব"
  },
  {
    type: "p",
    text: "এই features modern AI systems design-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।"
  },
  {
    type: "ul",
    items: [
      "Personalized AI assistants",
      "Long-term learning systems",
      "AI research agents",
      "Productivity tools",
      "Knowledge management systems"
    ]
  },

  {
    type: "h2",
    text: "চ্যাপ্টার সারমর্ম"
  },
  {
    type: "ul",
    items: [
      "ChatGPT-এর advanced features এটিকে একটি powerful AI assistant বানায়।",
      "Custom Instructions AI-এর behavior customize করে।",
      "Memory ব্যবহারকারীর তথ্য মনে রাখে।",
      "Deep Research in-depth analysis প্রদান করে।",
      "Projects কাজকে organized রাখে।",
      "এই features একসাথে ব্যবহার করলে AI productivity অনেক বেড়ে যায়।"
    ]
  }
];

const richContent15: ChapterContentBlock[] = [
  {
    type: "p",
    text: "ভাবুন, আপনি একটি publishing house-এ কাজ করছেন যেখানে একজন অভিজ্ঞ লেখক, editor, SEO expert এবং researcher একসাথে বসে আপনার জন্য কনটেন্ট তৈরি করছে। কেউ আইডিয়া দিচ্ছে, কেউ ড্রাফট লিখছে, কেউ আবার সেটাকে SEO-friendly করছে, আর কেউ ফাইনাল এডিট করছে। ChatGPT ঠিক এমনই একটি multi-role writing assistant হিসেবে কাজ করতে পারে। আপনি শুধু নির্দেশনা দিলে এটি Blog, SEO article, Email এমনকি পুরো Book পর্যন্ত লিখতে সাহায্য করতে পারে।"
  },

  {
    type: "h2",
    text: "ChatGPT দিয়ে লেখালেখি কীভাবে কাজ করে?"
  },
  {
    type: "p",
    text: "ChatGPT লেখালেখিতে মূলত তিনটি ধাপে কাজ করে:"
  },
  {
    type: "ol",
    items: [
      "Idea Generation → কী লেখা হবে তা নির্ধারণ",
      "Content Creation → ড্রাফট তৈরি করা",
      "Refinement → উন্নত, SEO বা style অনুযায়ী ঠিক করা"
    ]
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "Write → Improve → Optimize"
  },

  {
    type: "h2",
    text: "১. Blog Writing"
  },
  {
    type: "p",
    text: "Blog Writing হলো ChatGPT-এর সবচেয়ে শক্তিশালী ব্যবহারগুলোর একটি। এটি একটি topic নিয়ে structured, engaging এবং explanatory content তৈরি করতে পারে।"
  },

  {
    type: "h3",
    text: "Blog Writing কীভাবে কাজ করে?"
  },
  {
    type: "ul",
    items: [
      "structure তৈরি করে",
      "section-wise content লেখে",
      "engaging tone ব্যবহার করে",
      "real-world উদাহরণ যোগ করে"
    ]
  },

  {
    type: "h3",
    text: "উদাহরণ Prompt"
  },
  {
    type: "p",
    text: "AI এবং ভবিষ্যৎ চাকরির উপর একটি blog post লিখো। সহজ ভাষা ব্যবহার করো এবং বাস্তব উদাহরণ দাও।"
  },

  {
    type: "h3",
    text: "Blog Structure সাধারণত এমন হয়"
  },
  {
    type: "ul",
    items: [
      "Introduction",
      "Problem Statement",
      "Main Explanation",
      "Real-world Examples",
      "Conclusion"
    ]
  },

  {
    type: "h3",
    text: "Blog Writing-এর সুবিধা"
  },
  {
    type: "ul",
    items: [
      "দ্রুত content তৈরি করা যায়",
      "beginner-friendly লেখা সম্ভব",
      "idea থেকে full article তৈরি হয়",
      "consistent structure বজায় থাকে"
    ]
  },

  {
    type: "h2",
    text: "২. SEO Content"
  },
  {
    type: "p",
    text: "SEO Content হলো এমন লেখা যা Google-এ rank করার জন্য optimize করা হয়। এটি keyword-based এবং search intent-focused লেখা।"
  },

  {
    type: "h3",
    text: "SEO Content কী?"
  },
  {
    type: "p",
    text: "SEO (Search Engine Optimization) content হলো এমন লেখা যা keyword ব্যবহার করে, search intent match করে এবং structured format follow করে।"
  },

  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "SEO Content = Rank + Traffic + Visibility"
  },

  {
    type: "h3",
    text: "উদাহরণ Prompt"
  },
  {
    type: "p",
    text: "\"AI tools for students\" keyword ব্যবহার করে SEO-friendly article লিখো। H2 headings ব্যবহার করো এবং সহজ ভাষায় লিখো।"
  },

  {
    type: "h3",
    text: "SEO Content-এর গুরুত্বপূর্ণ উপাদান"
  },
  {
    type: "ul",
    items: [
      "Keywords",
      "Headings (H1, H2, H3)",
      "Meta structure",
      "Readability",
      "Internal flow"
    ]
  },

  {
    type: "h3",
    text: "SEO Writing-এর সুবিধা"
  },
  {
    type: "ul",
    items: [
      "website traffic বাড়ে",
      "Google ranking improve হয়",
      "content structured থাকে",
      "marketing সহজ হয়"
    ]
  },

  {
    type: "h2",
    text: "৩. Email Writing"
  },
  {
    type: "p",
    text: "ChatGPT professional email writing-এ খুব কার্যকর, কারণ এটি tone এবং structure ঠিকভাবে বজায় রাখতে পারে।"
  },

  {
    type: "h3",
    text: "Email Writing কীভাবে কাজ করে?"
  },
  {
    type: "ul",
    items: [
      "formal tone ব্যবহার করে",
      "clear structure দেয়",
      "purpose অনুযায়ী message তৈরি করে"
    ]
  },

  {
    type: "h3",
    text: "উদাহরণ Prompt"
  },
  {
    type: "p",
    text: "একটি professional email লিখো যেখানে client-কে project delay সম্পর্কে জানানো হবে।"
  },

  {
    type: "h3",
    text: "Email Structure"
  },
  {
    type: "ul",
    items: [
      "Subject",
      "Greeting",
      "Main Message",
      "Explanation",
      "Closing"
    ]
  },

  {
    type: "h3",
    text: "Email Writing-এর সুবিধা"
  },
  {
    type: "ul",
    items: [
      "professional communication সহজ হয়",
      "time saving",
      "tone control করা যায়",
      "multiple variations তৈরি করা যায়"
    ]
  },

  {
    type: "h2",
    text: "৪. Book Writing"
  },
  {
    type: "p",
    text: "ChatGPT ব্যবহার করে পুরো book পর্যন্ত লেখা সম্ভব, কারণ এটি long-form structured content generate করতে পারে।"
  },

  {
    type: "h3",
    text: "Book Writing কীভাবে কাজ করে?"
  },
  {
    type: "ol",
    items: [
      "Outline তৈরি",
      "Chapter breakdown",
      "Chapter writing",
      "Editing & refinement"
    ]
  },

  {
    type: "h3",
    text: "উদাহরণ Prompt"
  },
  {
    type: "p",
    text: "Prompt Engineering নিয়ে একটি বইয়ের outline তৈরি করো।"
  },

  {
    type: "p",
    text: "এরপর ChatGPT প্রতিটি chapter লিখে দিতে পারে, examples যোগ করতে পারে এবং full book draft তৈরি করতে পারে।"
  },

  {
    type: "h3",
    text: "Book Writing-এর সুবিধা"
  },
  {
    type: "ul",
    items: [
      "long-form content সহজে তৈরি হয়",
      "structured writing সম্ভব",
      "idea থেকে full book পর্যন্ত যেতে পারে",
      "editing সহজ হয়"
    ]
  },

  {
    type: "h2",
    text: "Blog vs SEO vs Email vs Book"
  },
  {
    type: "table",
    headers: ["Type", "Focus", "Use Case"],
    rows: [
      ["Blog Writing", "storytelling + explanation", "general audience"],
      ["SEO Content", "keyword-focused", "Google ranking target"],
      ["Email Writing", "formal communication", "business use"],
      ["Book Writing", "long-form structured content", "deep explanation"]
    ]
  },

  {
    type: "h2",
    text: "ChatGPT দিয়ে লেখালেখির Best Workflow"
  },
  {
    type: "ol",
    items: [
      "Idea → একটি blog topic suggest করো AI নিয়ে।",
      "Outline → এই topic-এর জন্য outline তৈরি করো।",
      "Draft → এই outline অনুযায়ী blog লিখো।",
      "Improve → এই content আরও engaging করো।"
    ]
  },

  {
    type: "h2",
    text: "বাস্তব ব্যবহার"
  },
  {
    type: "ul",
    items: [
      "Content marketing",
      "Blogging websites",
      "Freelancing",
      "Corporate communication",
      "Academic writing",
      "Book publishing"
    ]
  },

  {
    type: "h2",
    text: "সীমাবদ্ধতা"
  },
  {
    type: "ul",
    items: [
      "Human editing দরকার — AI লেখা ১০০% perfect নাও হতে পারে।",
      "Creativity limitation — highly creative writing-এ human touch দরকার।",
      "SEO accuracy — keyword research আলাদাভাবে করতে হয়।"
    ]
  },

  {
    type: "callout",
    variant: "tip",
    title: "নোট",
    text: "ChatGPT হলো assistant writer, replacement writer নয়।"
  },

  {
    type: "h2",
    text: "AI Application Development-এ এর গুরুত্ব"
  },
  {
    type: "p",
    text: "ChatGPT writing capabilities ব্যবহার হয় বিভিন্ন AI-based content systems-এ।"
  },
  {
    type: "ul",
    items: [
      "Content generation tools",
      "Blogging platforms",
      "SEO automation systems",
      "Email assistants",
      "Book writing tools",
      "Marketing automation"
    ]
  },

  {
    type: "h2",
    text: "চ্যাপ্টার সারমর্ম"
  },
  {
    type: "ul",
    items: [
      "ChatGPT দিয়ে Blog, SEO, Email এবং Book লেখা যায়।",
      "লেখালেখি Idea → Draft → Improvement flow follow করে।",
      "SEO content keyword-based এবং ranking-focused।",
      "Email writing professional communication সহজ করে।",
      "Book writing long-form structured content তৈরি করে।",
      "ChatGPT writing assistant হিসেবে কাজ করে, final editor নয়।"
    ]
  }
];

const richContent16: ChapterContentBlock[] = [
  {
    type: "p",
    text: "ভাবুন, আপনি একটি বিশাল লাইব্রেরিতে বসে আছেন যেখানে হাজার হাজার গবেষণা পেপার, বই, আর রিপোর্ট ছড়িয়ে আছে। আপনি একা হলে সব পড়ে বোঝা প্রায় অসম্ভব। কিন্তু যদি এমন একজন সহকারী থাকে যে প্রতিটি বই পড়ে সারাংশ তৈরি করে দিতে পারে, গুরুত্বপূর্ণ পয়েন্ট বের করে দিতে পারে, আর কোন অংশে ‘gap’ আছে সেটাও দেখিয়ে দিতে পারে—তাহলে গবেষণা অনেক দ্রুত হয়ে যায়। ChatGPT ঠিক এই ধরনের একটি research assistant হিসেবে কাজ করতে পারে।"
  },

  {
    type: "h2",
    text: "ChatGPT দিয়ে গবেষণা কীভাবে কাজ করে?"
  },
  {
    type: "p",
    text: "ChatGPT গবেষণার ক্ষেত্রে সাধারণত চারটি ধাপে সাহায্য করে: Understanding, Summarization, Analysis এবং Insight Generation।"
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "Read → Summarize → Analyze → Discover"
  },

  {
    type: "h2",
    text: "১. Literature Review"
  },
  {
    type: "p",
    text: "Literature Review হলো কোনো গবেষণা বিষয়ের উপর পূর্বের কাজগুলো বিশ্লেষণ করা যেখানে পূর্ববর্তী গবেষণা বিশ্লেষণ করা হয়, বিভিন্ন author-এর কাজ তুলনা করা হয় এবং বর্তমান research context বোঝা হয়।"
  },
  {
    type: "h3",
    text: "ChatGPT কীভাবে সাহায্য করে?"
  },
  {
    type: "ul",
    items: [
      "বিভিন্ন গবেষণার summary তৈরি করতে পারে",
      "key findings বের করতে পারে",
      "themes categorize করতে পারে",
      "comparison table তৈরি করতে পারে"
    ]
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "AI-based mental health detection নিয়ে literature review তৈরি করো। প্রধান গবেষণাগুলো summarize করো।"
  },
  {
    type: "ul",
    items: [
      "বিভিন্ন paper-এর summary",
      "common findings",
      "limitations",
      "trends"
    ]
  },
  {
    type: "callout",
    variant: "key",
    title: "সুবিধা",
    text: "সময় অনেক বাঁচে, large dataset সহজে বোঝা যায় এবং structured review তৈরি হয়।"
  },

  {
    type: "h2",
    text: "২. Paper Summarization"
  },
  {
    type: "p",
    text: "Paper Summarization হলো একটি research paper-এর মূল বিষয়গুলো সংক্ষেপে বোঝানো যেখানে abstract, methodology, results এবং conclusion বিশ্লেষণ করা হয়।"
  },
  {
    type: "h3",
    text: "কীভাবে কাজ করে?"
  },
  {
    type: "ul",
    items: [
      "Abstract বুঝে",
      "Methodology analyze করে",
      "Results summarize করে",
      "Conclusion সহজ ভাষায় দেয়"
    ]
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "এই research paper-এর summary দাও এবং মূল contributions ব্যাখ্যা করো।"
  },
  {
    type: "ul",
    items: [
      "Problem statement",
      "Methodology",
      "Key results",
      "Contribution",
      "Limitations"
    ]
  },

  {
    type: "h2",
    text: "৩. Research Gap Finding"
  },
  {
    type: "p",
    text: "Research Gap হলো এমন একটি অংশ যেখানে আগের গবেষণাগুলো কিছু বিষয় cover করেনি—যেখানে knowledge missing আছে বা future research-এর সুযোগ রয়েছে।"
  },
  {
    type: "h3",
    text: "ChatGPT কীভাবে সাহায্য করে?"
  },
  {
    type: "ul",
    items: [
      "multiple papers compare করে",
      "missing areas identify করে",
      "future direction suggest করে"
    ]
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "এই topic-এর উপর research papers বিশ্লেষণ করে research gap বের করো।"
  },
  {
    type: "ul",
    items: [
      "Data limitation",
      "Methodology gap",
      "Population gap",
      "Application gap"
    ]
  },
  {
    type: "callout",
    variant: "key",
    title: "সুবিধা",
    text: "নতুন research idea তৈরি হয়, paper publish করা সহজ হয় এবং innovation opportunity খুঁজে পাওয়া যায়।"
  },

  {
    type: "h2",
    text: "৪. Citation Assistance"
  },
  {
    type: "p",
    text: "Citation হলো গবেষণায় ব্যবহৃত source উল্লেখ করা যা academic integrity বজায় রাখে এবং plagiarism এড়াতে সাহায্য করে।"
  },
  {
    type: "h3",
    text: "ChatGPT কীভাবে সাহায্য করে?"
  },
  {
    type: "ul",
    items: [
      "APA, IEEE, MLA citation format তৈরি করতে পারে",
      "reference list সাজাতে পারে",
      "in-text citation suggest করতে পারে"
    ]
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "এই research-এর জন্য APA style citation তৈরি করো।"
  },
  {
    type: "ul",
    items: [
      "APA",
      "IEEE",
      "MLA"
    ]
  },

  {
    type: "h2",
    text: "Research Workflow (ChatGPT দিয়ে)"
  },
  {
    type: "ol",
    items: [
      "Topic Understanding → এই topic explain করো।",
      "Literature Review → এই topic-এর উপর literature review দাও।",
      "Summarization → এই paper summarize করো।",
      "Gap Analysis → research gap খুঁজে বের করো।",
      "Citation → citation format তৈরি করো।"
    ]
  },

  {
    type: "h2",
    text: "বাস্তব ব্যবহার"
  },
  {
    type: "ul",
    items: [
      "Academic thesis writing",
      "PhD research",
      "Journal paper writing",
      "Market research",
      "Technology analysis",
      "Policy research"
    ]
  },

  {
    type: "h2",
    text: "সীমাবদ্ধতা"
  },
  {
    type: "ul",
    items: [
      "Source accuracy: ChatGPT সবসময় real-time verified source দেয় না",
      "Hallucination risk: ভুল reference generate করতে পারে",
      "Deep technical depth: advanced research-এর জন্য manual verification দরকার"
    ]
  },
  {
    type: "callout",
    variant: "warning",
    title: "নোট",
    text: "ChatGPT research assistant, database নয়।"
  },

  {
    type: "h2",
    text: "AI Application Development-এ এর গুরুত্ব"
  },
  {
    type: "ul",
    items: [
      "AI research assistants",
      "Academic writing tools",
      "Knowledge management systems",
      "Paper summarization tools",
      "Scientific assistants"
    ]
  },

  {
    type: "h2",
    text: "চ্যাপ্টার সারমর্ম"
  },
  {
    type: "ul",
    items: [
      "ChatGPT literature review, summarization, gap finding এবং citation-এ সাহায্য করে",
      "Research workflow সাধারণত Understand → Summarize → Analyze → Discover",
      "Literature review পূর্বের গবেষণা বিশ্লেষণ করে",
      "Paper summarization long content সহজ করে",
      "Research gap নতুন idea খুঁজে পেতে সাহায্য করে",
      "Citation academic integrity বজায় রাখতে সাহায্য করে"
    ]
  }
];

const richContent17: ChapterContentBlock[] = [
  {
    type: "p",
    text: "ভাবুন, আপনার পাশে একজন ব্যক্তিগত শিক্ষক আছে যিনি ২৪/৭ সময়ে আপনার প্রশ্নের উত্তর দিতে পারে, ভুল ধরিয়ে দিতে পারে, আবার একই টপিক সহজ করে বারবার বোঝাতে পারে—ক্লান্তি ছাড়াই। ChatGPT ঠিক এই ধরনের একটি AI tutor হিসেবে কাজ করতে পারে। শিক্ষার ক্ষেত্রে ChatGPT শুধু উত্তর দেয় না, বরং শেখার পুরো প্রক্রিয়াকে structured, personalized এবং interactive করে তোলে।"
  },

  {
    type: "h2",
    text: "ChatGPT দিয়ে শিক্ষা কীভাবে কাজ করে?"
  },
  {
    type: "p",
    text: "ChatGPT শিক্ষার ক্ষেত্রে সাধারণত তিনটি ধাপে কাজ করে: Concept Understanding, Practice & Application এবং Feedback & Improvement।"
  },
  {
    type: "callout",
    variant: "key",
    title: "মনে রাখার সহজ উপায়",
    text: "Learn → Practice → Improve"
  },

  {
    type: "h2",
    text: "১. IELTS"
  },
  {
    type: "p",
    text: "IELTS প্রস্তুতিতে ChatGPT একটি powerful speaking, writing এবং vocabulary assistant হিসেবে কাজ করতে পারে।"
  },

  {
    type: "h3",
    text: "ChatGPT কীভাবে সাহায্য করে?"
  },
  {
    type: "ul",
    items: [
      "Speaking practice (mock interview)",
      "Writing correction",
      "Vocabulary improvement",
      "Grammar feedback",
      "Band score estimation"
    ]
  },

  {
    type: "h3",
    text: "Speaking Practice"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "Act as an IELTS examiner. Ask me speaking part 2 questions one by one and evaluate my answers."
  },

  {
    type: "h3",
    text: "Writing Task"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "IELTS Writing Task 2 essay লিখো: 'Technology is replacing human jobs'. Band 7 level এ লিখো।"
  },

  {
    type: "ul",
    items: [
      "Real exam-like practice",
      "Instant feedback",
      "Confidence building",
      "Structured improvement"
    ]
  },

  {
    type: "h2",
    text: "২. GRE"
  },
  {
    type: "p",
    text: "GRE preparation-এ ChatGPT বিশেষ করে Quant, Verbal এবং Analytical Writing-এ সাহায্য করে।"
  },

  {
    type: "h3",
    text: "Quantitative Reasoning"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "GRE level-এর একটি algebra problem দাও এবং step-by-step সমাধান দেখাও।"
  },

  {
    type: "h3",
    text: "Verbal Reasoning"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "10টি GRE level vocabulary word দাও এবং তাদের meaning + example sentence দাও।"
  },

  {
    type: "h3",
    text: "Analytical Writing"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "GRE issue essay লিখো: 'Governments should invest more in education than military'."
  },

  {
    type: "ul",
    items: [
      "Concept clarity",
      "Practice questions",
      "Vocabulary building",
      "Essay structure learning"
    ]
  },

  {
    type: "h2",
    text: "৩. Programming"
  },
  {
    type: "p",
    text: "ChatGPT programming শেখার জন্য একজন beginner থেকে advanced level tutor হিসেবে কাজ করতে পারে।"
  },

  {
    type: "h3",
    text: "কীভাবে সাহায্য করে?"
  },
  {
    type: "ul",
    items: [
      "Code explanation",
      "Bug fixing",
      "Project ideas",
      "Algorithm understanding",
      "Interview preparation"
    ]
  },

  {
    type: "h3",
    text: "উদাহরণ ১: Basic Code"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "Python-এ loop কীভাবে কাজ করে সহজভাবে বুঝাও এবং example দাও।"
  },

  {
    type: "h3",
    text: "উদাহরণ ২: Debugging"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "এই কোডে error কোথায় আছে তা খুঁজে বের করো এবং ঠিক করো:"
  },

  {
    type: "h3",
    text: "উদাহরণ ৩: Project"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "Beginner level-এর জন্য ৫টি Python project idea দাও।"
  },

  {
    type: "ul",
    items: [
      "Instant coding help",
      "Concept breakdown",
      "Practice support",
      "Interview preparation"
    ]
  },

  {
    type: "h2",
    text: "৪. Mathematics"
  },
  {
    type: "p",
    text: "Mathematics শেখার ক্ষেত্রে ChatGPT step-by-step explanation দিতে পারে, যা concept clear করতে খুব কার্যকর।"
  },

  {
    type: "h3",
    text: "কীভাবে সাহায্য করে?"
  },
  {
    type: "ul",
    items: [
      "Step-by-step solution",
      "Formula explanation",
      "Concept visualization",
      "Problem solving practice"
    ]
  },

  {
    type: "h3",
    text: "উদাহরণ ১: Algebra"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "Quadratic equation solve করার নিয়ম সহজভাবে বুঝাও।"
  },

  {
    type: "h3",
    text: "উদাহরণ ২: Problem Solving"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "একটি সংখ্যা ২০% বাড়লে ১২০ হয়। মূল সংখ্যা কত? ধাপে ধাপে সমাধান করো।"
  },

  {
    type: "h3",
    text: "উদাহরণ ৩: Concept"
  },
  {
    type: "callout",
    variant: "tip",
    title: "উদাহরণ Prompt",
    text: "Probability কী সহজভাবে বুঝাও বাস্তব উদাহরণ দিয়ে।"
  },

  {
    type: "ul",
    items: [
      "Complex topic সহজ হয়",
      "Step-by-step learning",
      "Doubt clearing",
      "Practice support"
    ]
  },

  {
    type: "h2",
    text: "ChatGPT as Personal Tutor"
  },
  {
    type: "ul",
    items: [
      "IELTS coach",
      "GRE mentor",
      "Coding instructor",
      "Math teacher"
    ]
  },

  {
    type: "h2",
    text: "Best Learning Workflow"
  },
  {
    type: "ol",
    items: [
      "Learn Concept → এই topic সহজভাবে বুঝাও।",
      "Practice → এই topic নিয়ে practice question দাও।",
      "Feedback → আমার answer check করো এবং ভুল বলো।"
    ]
  },

  {
    type: "h2",
    text: "সীমাবদ্ধতা"
  },
  {
    type: "ul",
    items: [
      "Human guidance দরকার: exam strategy ও বাস্তব অভিজ্ঞতা AI থেকে সীমিত",
      "Over-reliance risk: শুধুমাত্র AI-এর উপর নির্ভর করা ঠিক নয়",
      "Accuracy issue: কিছু advanced topic-এ ভুল ব্যাখ্যা হতে পারে"
    ]
  },

  {
    type: "callout",
    variant: "warning",
    title: "নোট",
    text: "ChatGPT একটি assistant tutor, replacement teacher নয়।"
  },

  {
    type: "h2",
    text: "AI Application Development-এ এর গুরুত্ব"
  },
  {
    type: "ul",
    items: [
      "AI tutors",
      "Language learning apps",
      "Coding platforms",
      "Exam preparation tools",
      "Personalized learning systems"
    ]
  },

  {
    type: "h2",
    text: "চ্যাপ্টার সারমর্ম"
  },
  {
    type: "ul",
    items: [
      "ChatGPT একটি powerful AI tutor হিসেবে কাজ করে",
      "IELTS, GRE, Programming এবং Math শেখায় সাহায্য করে",
      "Learn → Practice → Improve workflow follow করা হয়",
      "Instant feedback এবং personalized learning সম্ভব হয়",
      "Human guidance এখনও গুরুত্বপূর্ণ",
      "AI education systems-এর ভবিষ্যৎ ChatGPT-এর মতো models-এর উপর নির্ভর করে"
    ]
  }
];

const quiz2: QuizQuestion[] = [
  { q: "Roughly how many characters does one English token represent?", options: ["1", "4", "10", "100"], answer: 1 },
  { q: "Which of the following is NOT directly affected by token count?", options: [
    "Cost per API call", "Context window usage", "Output latency", "Model accuracy on math",
  ], answer: 3, explain: "Math accuracy depends on the model and prompting, not token count itself." },
  { q: "Streaming output mainly improves…", options: [
    "Total cost", "Perceived latency", "Model accuracy", "Context window size",
  ], answer: 1 },
];

const quiz1: QuizQuestion[] = [
  { q: "Roughly how many characters does one English token represent?", options: ["1", "4", "10", "100"], answer: 1 },
  { q: "Which of the following is NOT directly affected by token count?", options: [
    "Cost per API call", "Context window usage", "Output latency", "Model accuracy on math",
  ], answer: 3, explain: "Math accuracy depends on the model and prompting, not token count itself." },
  { q: "Streaming output mainly improves…", options: [
    "Total cost", "Perceived latency", "Model accuracy", "Context window size",
  ], answer: 1 },
];

const quiz3: QuizQuestion[] = [
  { q: "Roughly how many characters does one English token represent?", options: ["1", "4", "10", "100"], answer: 1 },
  { q: "Which of the following is NOT directly affected by token count?", options: [
    "Cost per API call", "Context window usage", "Output latency", "Model accuracy on math",
  ], answer: 3, explain: "Math accuracy depends on the model and prompting, not token count itself." },
  { q: "Streaming output mainly improves…", options: [
    "Total cost", "Perceived latency", "Model accuracy", "Context window size",
  ], answer: 1 },
];

// const richContent4: ChapterContentBlock[] = [
//   { type: "p", text: "Temperature and top-p are sampling parameters that control how 'random' or 'deterministic' the model's output is. They don't change the model—they change how the model picks the next token." },
//   { type: "h2", text: "What is temperature?" },
//   { type: "p", text: "Temperature is a number between 0 and 2 (in OpenAI models) that controls output randomness. Lower = more focused & deterministic. Higher = more creative & random." },
//   { type: "table", headers: ["Temperature", "Behavior", "Use Case"], rows: [
//     ["0", "Always pick the highest-probability token", "Fact-based Q&A, code generation"],
//     ["0.5–0.7", "Mix of likely tokens", "Balanced: creative but coherent"],
//     ["1.0", "Default behavior", "General conversations"],
//     ["1.5–2.0", "Heavy randomness", "Creative writing, brainstorming"],
//   ]},
//   { type: "h3", text: "When to use low temperature" },
//   { type: "ul", items: [
//     "You need reproducible, consistent output.",
//     "The task is factual (math, code, Q&A).",
//     "You're building production systems where variation is a bug.",
//   ]},
//   { type: "h3", text: "When to use high temperature" },
//   { type: "ul", items: [
//     "You want diverse, creative options.",
//     "The task is open-ended (brainstorming, ideation).",
//     "You're sampling multiple responses to pick the best one.",
//   ]},
//   { type: "h2", text: "What is top-p?" },
//   { type: "p", text: "Top-p (nucleus sampling) is a different control. Instead of picking any token, only consider tokens that represent the top p% of probability mass. Usually between 0 and 1." },
//   { type: "callout", variant: "tip", title: "Tip", text: "Many use cases: set temperature to 0 and leave top-p at default (1.0). For creativity, lower top-p instead of raising temperature." },
//   { type: "h2", text: "Temperature vs. top-p" },
//   { type: "table", headers: ["Parameter", "Controls", "Range", "Recommendation"], rows: [
//     ["Temperature", "Randomness in probability distribution", "0–2", "Start at 0 for deterministic tasks"],
//     ["Top-p", "Vocabulary filtering", "0–1", "Usually leave at 1.0"],
//   ]},
//   { type: "h2", text: "Summary" },
//   { type: "p", text: "Temperature and top-p let you tune the model's behavior without changing your prompt. Most production systems use temperature=0. For creativity, lower top-p or raise temperature carefully, then test." },
// ];

// const quiz4: QuizQuestion[] = [
//   { q: "What does temperature=0 mean?", options: [
//     "The model refuses to respond",
//     "Always pick the single highest-probability token",
//     "Random output",
//     "The model is cold/unhappy",
//   ], answer: 1 },
//   { q: "For code generation, which temperature is best?", options: [
//     "0", "0.7", "1.5", "2.0",
//   ], answer: 0, explain: "Code needs to be consistent and correct, so low temperature (0) is best." },
//   { q: "Top-p controls…", options: [
//     "How creative the model is", "How many tokens to consider from the top of the probability distribution", "The model's accuracy", "Token cost",
//   ], answer: 1 },
// ];

const titles: Array<[string, string, string]> = [
  ["foundations", "What is Prompt Engineering?", "A clear definition and why this discipline exists."],
  ["foundations", "How LLMs Work (at a high level)", "Just enough internals to make better prompts."],
  ["foundations", "Tokens, Context Windows & Cost", "The economics underneath every API call."],
  ["foundations", "Temperature, Top-p & Sampling", "Controlling creativity vs. determinism."],
  ["foundations", "System, User & Assistant Roles", "Why role separation changes output drastically."],
  ["foundations", "Writing Crystal-Clear Instructions", "Plain-language techniques that always help."],
  ["foundations", "Specifying Output Format", "JSON, Markdown, tables — getting clean structure."],
  ["foundations", "Common Failure Modes", "Hallucination, drift, refusal, verbosity."],
  ["foundations", "Iterating on Prompts", "A repeatable loop for improving any prompt."],
  ["foundations", "Prompt Hygiene & Anti-Patterns", "Things to stop doing immediately."],

  ["patterns", "Zero-Shot Prompting", "When no example is enough."],
  ["patterns", "Few-Shot Prompting", "Teaching with 1–5 examples."],
  ["patterns", "Chain-of-Thought", "Asking the model to reason step by step."],
  ["patterns", "Self-Consistency", "Sampling multiple reasoning paths."],
  ["patterns", "ReAct: Reasoning + Acting", "Interleaving thoughts with tool calls."],
  ["patterns", "Role & Persona Prompting", "Borrowing expertise through framing."],
  ["patterns", "Delimiters & Structured Inputs", "Why quotes, tags, and XML matter."],
  ["patterns", "Retrieval-Augmented Generation", "Grounding outputs in your own data."],
  ["patterns", "Tool Use & Function Calling", "Letting the model trigger real code."],
  ["patterns", "Multi-Step Workflows", "Breaking big tasks into prompt pipelines."],

  ["advanced", "Agents 101", "Loops, planners, and when to use them."],
  ["advanced", "Memory & Long Conversations", "Summaries, rolling windows, vector recall."],
  ["advanced", "Evaluation: Did the Prompt Work?", "Measuring quality at scale."],
  ["advanced", "Safety & Guardrails", "Defending against bad inputs and outputs."],
  ["advanced", "Prompt Injection & Jailbreaks", "How attacks work and how to block them."],
  ["advanced", "Cost & Latency Optimization", "Shipping LLM features that don't break the bank."],
  ["advanced", "Fine-Tuning vs. Prompting", "Choosing the right lever."],
  ["advanced", "Multimodal Prompting", "Images, audio, and beyond."],
  ["advanced", "Designing Production Prompts", "Versioning, testing, and rollout."],
  ["advanced", "The Future of Prompt Engineering", "Where the field is headed next."],
];


function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const CHAPTERS: Chapter[] = titles.map(([partId, title, summary], i) => ({
  slug: slugify(`${i + 1}-${title}`),
  number: i + 1,
  title,
  summary,
  readingMinutes: 5 + ((i * 3) % 9),
  partId,
}));

// Attach rich content + quiz to chapters 1 and 3
CHAPTERS[0].content = richContent1; 
// CHAPTERS[0].quiz = quiz1; 
CHAPTERS[1].content = richContent2; 
//  CHAPTERS[2].quiz = quiz2; 
 CHAPTERS[2].content = richContent3; 
//  CHAPTERS[3].quiz = quiz3; 

 CHAPTERS[3].content = richContent4; 
 CHAPTERS[4].content = richContent5; 
 CHAPTERS[5].content = richContent6; 
 CHAPTERS[6].content = richContent7; 
 CHAPTERS[7].content = richContent8; 
 CHAPTERS[8].content = richContent9; 
 CHAPTERS[9].content = richContent10; 
 CHAPTERS[10].content = richContent11; 
 CHAPTERS[11].content = richContent12; 
 CHAPTERS[12].content = richContent13; 
 CHAPTERS[13].content = richContent14; 
 CHAPTERS[14].content = richContent15; 
 CHAPTERS[15].content = richContent16; 
 CHAPTERS[16].content = richContent17; 

export function getChapter(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function getChapterByNumber(n: number): Chapter | undefined {
  return CHAPTERS.find((c) => c.number === n);
}




 
 
