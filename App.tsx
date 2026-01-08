
import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'search' | 'contact' | null>(null);

  const toggleModal = (modal: 'search' | 'contact' | null) => {
    setActiveModal(modal);
  };

  const socialLinks = [
    { 
      name: 'X (Twitter)', 
      url: 'https://x.com/misho_64', 
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' 
    },
    { 
      name: 'Snapchat', 
      url: 'https://www.snapchat.com/add/misho_64', 
      icon: 'M11.993 1.55c-2.527 0-4.195 1.826-4.195 4.385 0 1.09.333 2.203.864 3.031.115.188.156.406.104.615l-.312 1.187c-.063.24-.344.333-.531.177l-1.521-1.26c-.7-.584-1.698-.459-2.239.292-.448.615-.354 1.469.229 1.958l1.469 1.229c.26.219.375.562.281.896l-.521 1.885c-.135.5.25.969.76.969h1.417c.344 0 .635.229.719.562l.448 1.906c.125.52.792.646 1.104.208l1.031-1.448c.2-.281.521-.458.865-.458h.062c.344 0 .667.177.865.458l1.031 1.448c.312.438.979.312 1.104-.208l.448-1.906c.084-.333.375-.562.719-.562h1.417c.51 0 .896-.469.76-.969l-.521-1.885c-.094-.334.021-.677.281-.896l1.469-1.229c.583-.489.677-1.343.229-1.958-.541-.751-1.539-.876-2.239-.292l-1.521 1.26c-.187.156-.468.063-.531-.177l-.312-1.187c-.052-.209.01-.427.104-.615.531-.828.864-1.941.864-3.031 0-2.559-1.668-4.385-4.195-4.385z' 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/misho_64', 
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.788.306-1.457.715-2.122 1.38-.665.665-1.074 1.334-1.38 2.122-.296.763-.497 1.634-.554 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.554 2.911.306.788.715 1.457 1.38 2.122.665.665 1.334 1.074 2.122 1.38.763.296 1.634.497 2.911.554 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.788-.306 1.457-.715 2.122-1.38.665-.665 1.074-1.334 1.38-2.122.296-.763.497-1.634.554-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.554-2.911-.306-.788-.715-1.457-1.38-2.122-.665-.665-1.334-1.074-2.122-1.38-.763-.296-1.634-.497-2.911-.554-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' 
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@misho_64', 
      icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z' 
    },
    { 
      name: 'Telegram', 
      url: 'https://t.me/misho_64', 
      icon: 'M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z' 
    },
  ];

  return (
    <div className="min-h-screen pb-32">
      {/* Hero Section */}
      <section className="pt-20 px-6 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full gradient-bg p-1 mb-8 shadow-2xl shadow-purple-500/20">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
             <span className="text-4xl font-black gradient-text">L</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4">أهلاً بك في <span className="gradient-text">عالمي</span></h1>
        <p className="text-slate-400 text-lg max-w-md leading-relaxed">مطور واجهات ومصمم تجارب مستخدم شغوف بالتكنولوجيا والإبداع.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 w-full max-w-2xl">
          <div className="glass p-6 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400">مشاريعي</h3>
            <p className="text-sm text-slate-400">تصفح أحدث أعمالي في تطوير الويب.</p>
          </div>
          <div className="glass p-6 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400">مدونتي</h3>
            <p className="text-sm text-slate-400">أشارككم أفكاري وخبراتي التقنية.</p>
          </div>
        </div>
      </section>

      {/* Social Accounts Section */}
      <section className="mt-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center gradient-text">حساباتي</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-5 rounded-3xl flex items-center justify-between gap-4 hover:scale-105 transition-all group hover:border-pink-500/30"
            >
              <div className="text-right flex-1">
                <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{social.name}</span>
              </div>
              <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-white shadow-lg group-hover:shadow-pink-500/20">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.icon} />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Floating Bottom Navigation */}
      <nav className="floating-nav glass px-8 py-4 rounded-full flex items-center gap-12 shadow-2xl shadow-purple-900/40">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-purple-400 transition-colors">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        <button onClick={() => toggleModal('search')} className="text-white hover:text-pink-400 transition-colors">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button onClick={() => toggleModal('contact')} className="text-white hover:text-purple-400 transition-colors">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </nav>

      {/* Search Modal */}
      {activeModal === 'search' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 overlay" onClick={() => toggleModal(null)}></div>
          <div className="glass w-full max-w-md p-8 rounded-[2.5rem] modal-enter relative z-10 shadow-2xl">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl mb-6">
              <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                autoFocus 
                type="text" 
                placeholder="ابحث عن مشاريع أو مقالات..." 
                className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-slate-500 text-lg" 
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2 text-right">اقتراحات</p>
              {['تطوير تطبيقات الموبايل', 'تصميم الهوية البصرية', 'دروس ReactJS'].map(item => (
                <div key={item} className="p-3 hover:bg-white/5 rounded-xl cursor-pointer text-slate-300 transition-colors text-right">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {activeModal === 'contact' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 overlay" onClick={() => toggleModal(null)}></div>
          <div className="glass w-full max-w-md p-10 rounded-[2.5rem] modal-enter relative z-10 shadow-2xl text-center">
            <div className="w-20 h-20 gradient-bg rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-black mb-8">تواصل معي</h2>
            
            <div className="space-y-6">
              <a href="tel:01555" className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-bold uppercase">الهاتف</p>
                  <p className="text-xl font-bold group-hover:text-purple-400">01555</p>
                </div>
              </a>

              <a href="mailto:lited@gmail.com" className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-bold uppercase">البريد الإلكتروني</p>
                  <p className="text-lg font-bold group-hover:text-pink-400">lited@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-bold uppercase">الموقع</p>
                  <p className="text-md font-bold">مصر، القاهرة، وسط البلد</p>
                </div>
              </div>
            </div>

            <button onClick={() => toggleModal(null)} className="mt-10 text-slate-500 hover:text-white transition-colors font-bold text-sm">
              إغلاق النافذة
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
