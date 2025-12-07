import { FlowerTheme, ContentStrings, Question, Language } from './types';

export const FLOWER_THEMES: FlowerTheme[] = [
  { id: 'rose', name: 'Rose', icon: '🌹', colors: { primary: 'bg-red-600', secondary: 'bg-red-50', accent: 'bg-red-700', text: 'text-red-900', gradient: 'from-red-500 to-pink-600' } },
  { id: 'lily', name: 'Lily', icon: '⚜️', colors: { primary: 'bg-slate-100', secondary: 'bg-white', accent: 'bg-slate-300', text: 'text-slate-800', gradient: 'from-slate-100 to-slate-300' } }, // White lily interpretation
  { id: 'sunflower', name: 'Sunflower', icon: '🌻', colors: { primary: 'bg-yellow-500', secondary: 'bg-yellow-50', accent: 'bg-yellow-600', text: 'text-yellow-900', gradient: 'from-yellow-400 to-orange-500' } },
  { id: 'orchid', name: 'Orchid', icon: '🌺', colors: { primary: 'bg-fuchsia-600', secondary: 'bg-fuchsia-50', accent: 'bg-fuchsia-700', text: 'text-fuchsia-900', gradient: 'from-fuchsia-500 to-purple-600' } },
  { id: 'lavender', name: 'Lavender', icon: '🪻', colors: { primary: 'bg-violet-500', secondary: 'bg-violet-50', accent: 'bg-violet-600', text: 'text-violet-900', gradient: 'from-violet-400 to-indigo-500' } },
  { id: 'tulip', name: 'Tulip', icon: '🌷', colors: { primary: 'bg-pink-500', secondary: 'bg-pink-50', accent: 'bg-pink-600', text: 'text-pink-900', gradient: 'from-pink-400 to-rose-500' } },
  { id: 'daisy', name: 'Daisy', icon: '🌼', colors: { primary: 'bg-sky-400', secondary: 'bg-sky-50', accent: 'bg-sky-500', text: 'text-sky-900', gradient: 'from-sky-300 to-blue-400' } },
  { id: 'cherry', name: 'Cherry Blossom', icon: '🌸', colors: { primary: 'bg-pink-300', secondary: 'bg-pink-50', accent: 'bg-pink-400', text: 'text-pink-800', gradient: 'from-pink-200 to-rose-300' } },
  { id: 'lotus', name: 'Lotus', icon: '🪷', colors: { primary: 'bg-rose-400', secondary: 'bg-rose-50', accent: 'bg-rose-500', text: 'text-rose-900', gradient: 'from-rose-300 to-pink-400' } },
  { id: 'jasmine', name: 'Jasmine', icon: '🌱', colors: { primary: 'bg-emerald-500', secondary: 'bg-emerald-50', accent: 'bg-emerald-600', text: 'text-emerald-900', gradient: 'from-emerald-400 to-teal-500' } },
  { id: 'hibiscus', name: 'Hibiscus', icon: '🌺', colors: { primary: 'bg-red-500', secondary: 'bg-red-50', accent: 'bg-orange-500', text: 'text-red-900', gradient: 'from-red-400 to-orange-500' } },
  { id: 'marigold', name: 'Marigold', icon: '🏵️', colors: { primary: 'bg-orange-500', secondary: 'bg-orange-50', accent: 'bg-orange-600', text: 'text-orange-900', gradient: 'from-orange-400 to-amber-500' } },
  { id: 'peony', name: 'Peony', icon: '💮', colors: { primary: 'bg-rose-500', secondary: 'bg-rose-50', accent: 'bg-rose-600', text: 'text-rose-900', gradient: 'from-rose-400 to-pink-500' } },
  { id: 'violet', name: 'Violet', icon: '🟣', colors: { primary: 'bg-purple-600', secondary: 'bg-purple-50', accent: 'bg-purple-700', text: 'text-purple-900', gradient: 'from-purple-500 to-violet-600' } },
  { id: 'poppy', name: 'Poppy', icon: '🔴', colors: { primary: 'bg-red-700', secondary: 'bg-red-50', accent: 'bg-red-800', text: 'text-red-950', gradient: 'from-red-600 to-red-800' } },
  { id: 'daffodil', name: 'Daffodil', icon: '🟡', colors: { primary: 'bg-yellow-400', secondary: 'bg-yellow-50', accent: 'bg-yellow-500', text: 'text-yellow-900', gradient: 'from-yellow-300 to-amber-400' } },
  { id: 'magnolia', name: 'Magnolia', icon: '🌳', colors: { primary: 'bg-stone-200', secondary: 'bg-stone-50', accent: 'bg-stone-400', text: 'text-stone-800', gradient: 'from-stone-100 to-stone-300' } },
  { id: 'iris', name: 'Iris', icon: '💠', colors: { primary: 'bg-blue-600', secondary: 'bg-blue-50', accent: 'bg-blue-700', text: 'text-blue-900', gradient: 'from-blue-500 to-indigo-600' } },
  { id: 'camellia', name: 'Camellia', icon: '💐', colors: { primary: 'bg-pink-600', secondary: 'bg-pink-50', accent: 'bg-pink-700', text: 'text-pink-900', gradient: 'from-pink-500 to-rose-600' } },
  { id: 'azalea', name: 'Azalea', icon: '🌸', colors: { primary: 'bg-fuchsia-500', secondary: 'bg-fuchsia-50', accent: 'bg-fuchsia-600', text: 'text-fuchsia-900', gradient: 'from-fuchsia-400 to-pink-500' } },
];

export const CONTENT: Record<Language, ContentStrings> = {
  en: {
    title: "MD SubContract",
    subtitle: "Online Application System",
    heroText: "Full process, manufacturing, or sterilization process subcontracting made easy.",
    sections: {
      overview: "Overview",
      workflow: "Workflow",
      process: "Process",
      support: "Support",
      faq: "Q & A"
    },
    overview: {
      scope: "Subcontract Scope",
      docs: "Required Documents",
      approval: "Subcontract Approval Details",
      effectiveDate: "Effective Date: 2021-5-1",
      docList: ["Applicant License", "Subcontract Manufacturer License", "QMS/QSD License", "Contract"],
      approvalList: ["Name/Address of Manufacturer", "Name/Address of Applicant", "Subcontract Items (Device Category)", "Subcontract Process"]
    },
    workflow: {
      applicant: "Applicant",
      system: "Online Application System",
      review: "Online Review",
      result: "Application Results",
      notice: "Approval Notice (CM XXXX)",
      itCenter: "TFDA IT Center"
    },
    process: {
      anytime: "Anytime & Anywhere",
      steps: [
        { title: "Online Application", desc: "Submit your documents digitally." },
        { title: "Online Payment", desc: "Secure and fast processing fees." },
        { title: "Application Status", desc: "Track progress in real-time." },
        { title: "Application Results", desc: "Receive digital approval notices." }
      ]
    },
    support: {
      consulting: "Consulting",
      helpDesk: "Help Desk",
      training: "Training",
      contactInfo: "Contact Information"
    },
    faqTitle: "20 Comprehensive Follow-up Questions"
  },
  tc: {
    title: "醫療器材委託製造",
    subtitle: "線上申辦系統",
    heroText: "全製程委託製造、製程委託製造或滅菌製程委託製造。",
    sections: {
      overview: "系統總覽",
      workflow: "申辦流程",
      process: "使用流程",
      support: "支援服務",
      faq: "常見問答"
    },
    overview: {
      scope: "委託範圍",
      docs: "應備文件",
      approval: "核定事項",
      effectiveDate: "生效日期：2021-5-1",
      docList: ["申請者藥商許可執照", "受託製造廠製造許可", "QMS/QSD 許可", "委託契約"],
      approvalList: ["受託製造廠名稱及地址", "申請者名稱及地址", "委託品項 (器材類別)", "委託製程"]
    },
    workflow: {
      applicant: "申請者",
      system: "線上申辦系統",
      review: "線上審查",
      result: "審查結果",
      notice: "核定通知 (CM XXXX)",
      itCenter: "TFDA 資訊中心"
    },
    process: {
      anytime: "隨時隨地 輕鬆申辦",
      steps: [
        { title: "線上申請", desc: "數位化提交文件" },
        { title: "線上繳費", desc: "安全快速的規費繳納" },
        { title: "申辦進度", desc: "即時追蹤審查狀況" },
        { title: "審查結果", desc: "接收數位核定通知" }
      ]
    },
    support: {
      consulting: "諮詢服務",
      helpDesk: "服務窗口",
      training: "教育訓練",
      contactInfo: "聯絡資訊"
    },
    faqTitle: "20 個綜合後續問題"
  }
};

export const QUESTIONS: Record<Language, Question[]> = {
  en: [
    { q: "What is the primary purpose of the MD SubContract Online System?", a: "To streamline the application process for medical device subcontracting, including manufacturing and sterilization processes." },
    { q: "What is the official URL for the system?", a: "https://mdcm.fda.gov.tw/" },
    { q: "When did the system become effective?", a: "The system became effective on May 1st, 2021." },
    { q: "Which types of licenses are required for application?", a: "Applicant license, Subcontract manufacturer license, and QMS/QSD license are required." },
    { q: "Is a physical contract required?", a: "A digital copy of the Contract is required as part of the application documents." },
    { q: "What information is included in the Subcontract Approval?", a: "It includes names and addresses of both parties, subcontract items (device category), and the specific process." },
    { q: "Who performs the online review?", a: "The review is conducted by the TFDA (Food and Drug Administration)." },
    { q: "What is the role of the TFDA IT Center?", a: "They manage the cybersecurity and infrastructure of the Online Application System." },
    { q: "Can I pay the application fees online?", a: "Yes, the system supports Online Payment." },
    { q: "How can I track my application status?", a: "You can check the 'Application Status' section within the online portal." },
    { q: "What format is the approval notice issued in?", a: "It is issued as a digital notice (e.g., CM XXXX)." },
    { q: "What are the key benefits of using this system?", a: "It allows applications 'Anytime & Anywhere', reducing paper usage and travel time." },
    { q: "Is there support for training?", a: "Yes, the TFDA provides training resources and online learning materials." },
    { q: "How can I contact the E-submission help desk?", a: "You can email jywu6@itri.org.tw or call the provided phone numbers." },
    { q: "What are the help desk phone numbers?", a: "03-5732043 and 03-5743868." },
    { q: "Is there an online help desk available?", a: "Yes, accessible via https://shorturl.at/hmsAS." },
    { q: "Where can I find online learning resources?", a: "Resources are available at https://tinyurl.com/5czmwvvp." },
    { q: "Does the system handle cybersecurity?", a: "Yes, the TFDA IT Center ensures cybersecurity protocols are in place." },
    { q: "What happens if my QMS/QSD license is expired?", a: "A valid QMS/QSD license is a mandatory document; expired licenses will likely lead to rejection." },
    { q: "Can this system be used for foreign manufacturers?", a: "Yes, provided they have the necessary QSD compliance and local applicant representation." }
  ],
  tc: [
    { q: "MD SubContract 線上系統的主要目的是什麼？", a: "簡化醫療器材委託製造（包含製造及滅菌製程）的申請流程。" },
    { q: "系統的官方網址是什麼？", a: "https://mdcm.fda.gov.tw/" },
    { q: "系統何時生效？", a: "該系統於 2021 年 5 月 1 日生效。" },
    { q: "申請需要哪些許可執照？", a: "需要申請者藥商許可執照、受託製造廠製造許可及 QMS/QSD 許可。" },
    { q: "需要實體合約嗎？", a: "申請文件中需要上傳合約的數位副本。" },
    { q: "委託製造核定內容包含哪些資訊？", a: "包含雙方名稱與地址、委託品項（器材類別）及委託製程。" },
    { q: "誰負責進行線上審查？", a: "由食品藥物管理署 (TFDA) 進行審查。" },
    { q: "TFDA 資訊中心的角色是什麼？", a: "他們負責管理線上申辦系統的資安與基礎設施。" },
    { q: "我可以線上繳費嗎？", a: "可以，系統支援線上繳費功能。" },
    { q: "如何追蹤我的申請進度？", a: "您可以在線上平台中的「申辦進度」區塊查詢。" },
    { q: "核定通知以何種格式發出？", a: "以數位通知形式發出 (例如 CM XXXX)。" },
    { q: "使用此系統的主要好處是什麼？", a: "它可以實現「隨時隨地」申辦，減少紙張使用與往返時間。" },
    { q: "是否有提供教育訓練支援？", a: "有的，TFDA 提供教育訓練資源及線上學習教材。" },
    { q: "如何聯繫電子送件服務窗口？", a: "您可以發送電子郵件至 jywu6@itri.org.tw 或撥打提供的電話號碼。" },
    { q: "服務窗口的電話號碼是多少？", a: "03-5732043 和 03-5743868。" },
    { q: "是否有線上諮詢平台？", a: "有的，可透過 https://shorturl.at/hmsAS 存取。" },
    { q: "哪裡可以找到線上學習資源？", a: "資源位於 https://tinyurl.com/5czmwvvp。" },
    { q: "系統是否具備資安防護？", a: "是的，TFDA 資訊中心確保資安協定到位。" },
    { q: "如果我的 QMS/QSD 許可過期了怎麼辦？", a: "有效的 QMS/QSD 許可是必要文件，過期的許可可能會導致退件。" },
    { q: "國外製造廠可以使用此系統嗎？", a: "可以，前提是具備必要的 QSD 合規性及在地申請者代表。" }
  ]
};
