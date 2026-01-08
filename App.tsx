
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
      icon: 'M12 2.25c-2.203 0-3.882 1.631-4.045 4.156-.035.534.12 1.206.518 1.69.256.313.385.696.353 1.085l-.176.711c-.05.198-.27.284-.423.167l-1.34-1.018c-.611-.464-1.458-.363-1.928.225-.39.492-.308 1.173.18 1.564l1.246 1c.219.175.322.45.25.717l-.42 1.508c-.11.396.195.775.603.775h1.25c.306 0 .56.195.63.468l.38 1.5c.092.368.618.47.857.172l.812-1.026c.168-.212.43-.338.71-.338h.04c.28 0 .542.126.71.338l.812 1.026c.239.298.765.196.857-.172l.38-1.5c.07-.273.324-.468.63-.468h1.25c.408 0 .713-.379.603-.775l-.42-1.508c-.072-.267.031-.542.25-.717l1.246-1c.488-.391.57-1.072.18-1.564-.47-.588-1.317-.689-1.928-.225l-1.34 1.018c-.153.117-.373.031-.423-.167l-.176-.711c-.032-.389.097-.772.353-1.085.398-.484.553-1.156.518-1.69-.163-2.525-1.842-4.156-4.045-4.156z' 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/misho_64', 
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.788.306-1.457.715-2.122 1.38-.665.665-1.074 1.334-1.38 2.122-.296.763-.497 1.634-.554 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.554 2.911.306.788.715 1.457 1.38 2.122.665.665 1.334 1.074 2.122 1.38.763.296 1.634.497 2.911.554 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.788-.306 1.457-.715 2.122-1.38.665-.665 1.074-1.334 1.38-2.122.296-.763.497-1.634.554-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.554-2.911-.306-.788-.715-1.457-1.38-2.122-.665-.665-1.334-1.074-2.122-1.38-.763-.296-1.634-.497-2.911-.554-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' 
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@misho_64', 
      icon: 'M12.525.491v3.308c1.342 0 2.51.552 3.327 1.456.124.138.238.286.342.441a7.458 7.458 0 011.025 2.11c.142.505.219 1.033.219 1.579v.21c0 3.866-3.134 7-7 7a6.974 6.974 0 01-4.95-2.05A6.974 6.974 0 013.5 9.5c0-3.866 3.134-7 7-7v3.308c-2.039 0-3.692 1.653-3.692 3.692 0 2.039 1.653 3.692 3.692 3.692 2.039 0 3.692-1.653 3.692-3.692V.491h2.333c0 2.51 2.035 4.545 4.545 4.545v2.333a6.853 6.853 0 01-3.692-1.076V.491h-4.875z' 
    },
    { 
      name: 'Telegram', 
      url: 'https://t.me/misho_64', 
      icon: 'M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z' 
    },
  ];

  return (
    <div className="min-h-screen pb-40">
      {/* Hero Section */}
      <section className="pt-24 px-6 flex flex-col items-center text-center">
        <div className="w-28 h-28 rounded-[2rem] gradient-bg p-1 mb-8 shadow-2xl shadow-purple-500/20 rotate-3 transition-transform hover:rotate-0">
          <div className="w-full h-full rounded-[1.8rem] bg-[#0a0a0c] flex items-center justify-center overflow-hidden">
             <span className="text-4xl font-black gradient-text">M</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">مرحبا، أنا <span className="gradient-text">ميشو</span></h1>
        <p className="text-slate-400 text-lg max-w-lg leading-relaxed font-medium">مطور واجهات ومصمم تجارب مستخدم. هنا تجد كل حساباتي الرسمية.</p>
      </section>

      {/* Social Accounts Section */}
      <section className="mt-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-black mb-10 text-center text-white/50 tracking-[0.2em] uppercase">حساباتي الشخصية</h2>
        <div className="grid grid-cols-1 gap-4">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-6 rounded-[2rem] flex items-center justify-between group hover:bg-white/5 transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={social.icon} />
                  </svg>
                </div>
                <span className="font-bold text-xl text-slate-200 group-hover:text-white transition-colors">{social.name}</span>
              </div>
              <svg className="w-6 h-6 text-slate-600 group-hover:text-pink-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Floating Bottom Navigation */}
      <nav className="floating-nav glass px-10 py-5 rounded-full flex items-center gap-14 shadow-2xl shadow-black/50">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-purple-400 transition-all hover:scale-125">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        <button onClick={() => toggleModal('search')} className="text-white hover:text-pink-400 transition-all hover:scale-125">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button onClick={() => toggleModal('contact')} className="text-white hover:text-purple-400 transition-all hover:scale-125">
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
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl mb-6">
              <input 
                autoFocus 
                type="text" 
                placeholder="ما الذي تبحث عنه؟" 
                className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-slate-500 text-xl font-bold" 
              />
              <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2 text-right">أكثر بحثاً</p>
              {['المشاريع الجديدة', 'دروس البرمجة', 'السيرة الذاتية'].map(item => (
                <div key={item} className="p-4 hover:bg-white/5 rounded-2xl cursor-pointer text-slate-300 transition-colors text-right font-bold">
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
          <div className="glass w-full max-w-md p-10 rounded-[3rem] modal-enter relative z-10 shadow-2xl text-center">
            <div className="w-20 h-20 gradient-bg rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl rotate-6">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-black mb-10 gradient-text">تواصل معي</h2>
            
            <div className="space-y-4">
              <a href="mailto:lited@gmail.com" className="flex items-center gap-6 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-pink-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                   <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-bold mb-1">البريد الإلكتروني</p>
                  <p className="text-lg font-bold group-hover:text-pink-400 transition-colors">lited@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-5 rounded-3xl bg-white/5 border border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                   <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-bold mb-1">الموقع الجغرافي</p>
                  <p className="text-lg font-bold">القاهرة، مصر</p>
                </div>
              </div>
            </div>

            <button onClick={() => toggleModal(null)} className="mt-12 text-slate-500 hover:text-white transition-colors font-black text-sm uppercase tracking-widest">
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
