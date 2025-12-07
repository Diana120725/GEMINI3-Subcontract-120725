import React, { useState } from 'react';
import { Menu, FileText, CheckCircle, Shield, Truck, Monitor, Phone, Mail, HelpCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Sidebar from './components/Sidebar';
import { FLOWER_THEMES, CONTENT, QUESTIONS } from './constants';
import { Language, FlowerTheme } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [currentTheme, setCurrentTheme] = useState<FlowerTheme>(FLOWER_THEMES[0]);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const t = CONTENT[language];
  const qna = QUESTIONS[language];
  
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${currentTheme.colors.secondary} transition-colors duration-500 ease-in-out`}>
      
      {/* Sidebar & Navigation */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        language={language}
        setLanguage={setLanguage}
        currentTheme={currentTheme}
        themes={FLOWER_THEMES}
        setTheme={setCurrentTheme}
      />

      {/* Floating Toggle Button (visible when sidebar is closed) */}
      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className={`fixed top-4 left-4 z-30 p-3 rounded-full shadow-lg text-white transition-all hover:scale-110 ${currentTheme.colors.primary}`}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-80' : 'ml-0'}`}>
        
        {/* Hero Section */}
        <header className={`relative text-white py-20 px-6 overflow-hidden bg-gradient-to-r ${currentTheme.colors.gradient}`}>
          <div className="absolute top-0 right-0 p-10 opacity-10 text-9xl transform rotate-12 select-none">
            {currentTheme.icon}
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              {t.title}
            </h1>
            <p className="text-2xl md:text-3xl font-light opacity-90 mb-8 border-l-4 border-white/50 pl-4">
              {t.subtitle}
            </p>
            <p className="max-w-2xl text-lg opacity-80 mb-8 leading-relaxed">
              {t.heroText}
            </p>
            <a 
              href="https://mdcm.fda.gov.tw/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white ${currentTheme.colors.text} font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all`}
            >
              <ExternalLink className="w-5 h-5" />
              mdcm.fda.gov.tw
            </a>
          </div>
        </header>

        {/* Section 1: Overview & Scope (Cards) */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-10 text-center ${currentTheme.colors.text}`}>
            {t.sections.overview}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Documents */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${currentTheme.colors.secondary}`}>
                <FileText className={`w-6 h-6 ${currentTheme.colors.text}`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{t.overview.docs}</h3>
              <ul className="space-y-3">
                {t.overview.docList.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className={`mt-1 w-2 h-2 rounded-full ${currentTheme.colors.primary}`}></span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Approval */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${currentTheme.colors.secondary}`}>
                <CheckCircle className={`w-6 h-6 ${currentTheme.colors.text}`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{t.overview.approval}</h3>
              <ul className="space-y-3">
                 {t.overview.approvalList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className={`mt-1 w-2 h-2 rounded-full ${currentTheme.colors.primary}`}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className={`text-sm font-semibold ${currentTheme.colors.text}`}>{t.overview.effectiveDate}</p>
              </div>
            </div>

            {/* Card 3: QR/System */}
            <div className={`p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center bg-gradient-to-br ${currentTheme.colors.gradient} text-white`}>
              <div className="bg-white p-2 rounded-lg mb-4 w-32 h-32 flex items-center justify-center">
                 {/* Placeholder for QR Code */}
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://mdcm.fda.gov.tw/" alt="QR Code" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scan to Apply</h3>
              <p className="text-white/80 text-sm">Access the MD SubContract System directly on your mobile device.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Workflow (Flowchart) */}
        <section className={`py-16 px-6 ${currentTheme.colors.secondary}`}>
           <div className="max-w-7xl mx-auto">
             <h2 className={`text-3xl font-bold mb-12 text-center ${currentTheme.colors.text}`}>
               {t.sections.workflow}
             </h2>

             {/* Workflow Diagram */}
             <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 overflow-x-auto pb-8">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center min-w-[150px]">
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 border-4 border-white">
                      <FileText className="w-8 h-8 text-slate-600" />
                   </div>
                   <span className="font-bold text-slate-800">{t.workflow.applicant}</span>
                </div>

                {/* Arrow */}
                <div className="hidden md:block h-1 flex-1 bg-slate-300 relative">
                   <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-4 border-r-4 border-slate-300 rotate-45"></div>
                </div>
                <div className="md:hidden w-1 h-12 bg-slate-300"></div>

                {/* Step 2 (Main System) */}
                <div className={`p-6 rounded-xl shadow-lg text-center text-white min-w-[200px] ${currentTheme.colors.primary}`}>
                   <Monitor className="w-10 h-10 mx-auto mb-2" />
                   <h3 className="font-bold text-lg">{t.workflow.system}</h3>
                   <p className="text-xs opacity-80 mt-1">{t.workflow.review}</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:block h-1 flex-1 bg-slate-300 relative">
                    <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-4 border-r-4 border-slate-300 rotate-45"></div>
                </div>
                <div className="md:hidden w-1 h-12 bg-slate-300"></div>

                {/* Step 3 (TFDA/Result) */}
                <div className="flex flex-col items-center text-center min-w-[150px]">
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 border-4 border-white">
                      <Shield className="w-8 h-8 text-slate-600" />
                   </div>
                   <span className="font-bold text-slate-800">{t.workflow.result}</span>
                   <span className="text-xs text-slate-500 mt-1">{t.workflow.notice}</span>
                </div>
             </div>
             
             {/* IT Center Note */}
             <div className="mt-8 text-center">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-sm font-medium shadow-sm ${currentTheme.colors.text}`}>
                  <Shield className="w-4 h-4" />
                  Secured by {t.workflow.itCenter}
                </span>
             </div>
           </div>
        </section>

        {/* Section 3: Process "Anytime & Anywhere" */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${currentTheme.colors.text}`}>{t.process.anytime}</h2>
            <div className={`h-1 w-24 mx-auto rounded-full ${currentTheme.colors.primary}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map((step, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-2">
                 <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-4 transition-colors ${currentTheme.colors.secondary} ${currentTheme.colors.text} group-hover:${currentTheme.colors.primary} group-hover:text-white`}>
                   {index + 1}
                 </div>
                 <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                 <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Support */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.sections.support}</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Image Illustration (Placeholder style) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800 min-h-[300px] flex items-center justify-center">
                {/* Abstract tech illustration */}
                <div className="text-slate-600">
                    <img src="https://picsum.photos/600/400" alt="Support Team" className="opacity-50 hover:opacity-75 transition-opacity" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-white">Online Help Desk</h3>
                  <a href="https://shorturl.at/hmsAS" className="text-blue-400 hover:text-blue-300 underline break-all">https://shorturl.at/hmsAS</a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-slate-800 ${currentTheme.colors.text.replace('text-', 'text-opacity-80 text-')}`}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{t.support.contactInfo}</h4>
                      <p className="text-slate-400 mt-1">TEL: 03-5732043</p>
                      <p className="text-slate-400">TEL: 03-5743868</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-slate-800">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">E-Mail</h4>
                      <p className="text-slate-400 mt-1">jywu6@itri.org.tw</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-slate-800">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{t.support.training}</h4>
                      <a href="https://tinyurl.com/5czmwvvp" className="text-blue-400 hover:text-blue-300 text-sm break-all">https://tinyurl.com/5czmwvvp</a>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: 20 Questions (Accordion) */}
        <section className={`py-20 px-6 ${currentTheme.colors.secondary}`}>
           <div className="max-w-4xl mx-auto">
             <div className="flex items-center justify-center gap-3 mb-10">
                <HelpCircle className={`w-8 h-8 ${currentTheme.colors.text}`} />
                <h2 className={`text-3xl font-bold ${currentTheme.colors.text}`}>{t.faqTitle}</h2>
             </div>

             <div className="space-y-4">
                {qna.map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'ring-2 ring-offset-2 ' + currentTheme.colors.accent.replace('bg-', 'ring-') : ''}`}
                  >
                    <button 
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <span className="font-semibold text-slate-800 pr-4">{index + 1}. {item.q}</span>
                      {activeAccordion === index ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {/* Content */}
                    <div 
                      className={`px-5 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      {item.a}
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} TFDA MD SubContract System. All rights reserved.</p>
          <p className="mt-2 text-xs">Styled with {currentTheme.name} Theme {currentTheme.icon}</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
