
import React from 'react';
import { ArrowRight, Music, Calendar, Zap, Play, Instagram, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#DEFF00] selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-[#DEFF00] rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                <Zap size={20} className="text-black fill-black" />
              </div>
              <span className="text-2xl font-black italic tracking-tighter text-white group-hover:text-[#DEFF00] transition-colors">
                BEAT<span className="text-[#DEFF00]">BOX</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-10 text-sm font-bold uppercase tracking-widest text-gray-400">
              <a href="#classes" className="hover:text-white transition-colors">Classes</a>
              <a href="#instructors" className="hover:text-white transition-colors">Crew</a>
              <a href="#schedule" className="hover:text-white transition-colors">Timetable</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <button className="hidden md:block bg-white hover:bg-[#DEFF00] text-black px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(222,255,0,0.5)]">
              Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block border border-[#DEFF00] text-[#DEFF00] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-pulse">
            Seoul's Premier Dance Studio
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.9] tracking-tighter mb-8 mix-blend-difference text-white">
            FIND YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DEFF00] via-white to-[#00FFFF] italic pr-4">
              RHYTHM
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
            K-POP부터 스트릿 댄스까지. <br/>
            최고의 강사진과 함께 당신만의 스타일을 완성하세요.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#DEFF00] text-black px-10 py-4 rounded-full font-black text-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
              수강 상담 예약 <ArrowRight size={20} />
            </button>
            <button className="border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg backdrop-blur-md transition-all">
              시간표 확인하기
            </button>
          </div>
        </div>

        {/* Marquee Text */}
        <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap py-4 bg-[#DEFF00] text-black border-y border-black">
          <div className="animate-marquee inline-block text-2xl font-black italic tracking-widest">
            HIPHOP • K-POP • CHOREOGRAPHY • POPPING • LOCKING • WAACKING • HOUSE • VOGUING • HIPHOP • K-POP • CHOREOGRAPHY •
          </div>
        </div>
      </section>

      {/* Classes Grid - Diagonal Style */}
      <section id="classes" className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DEFF00]/10 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Classes</span>
            </h2>
            <p className="hidden md:block text-gray-400 max-w-xs text-right text-sm">
              초보자부터 전문가 과정까지<br/>체계적인 커리큘럼을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "K-POP", sub: "Cover Dance", img: "https://images.unsplash.com/photo-1621976498727-9e5d26388904?q=80&w=2070&auto=format&fit=crop" },
              { title: "HIPHOP", sub: "Street Basic", img: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2070&auto=format&fit=crop" },
              { title: "CHOREO", sub: "Original Style", img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974&auto=format&fit=crop" },
            ].map((item, idx) => (
              <div key={idx} className="group relative h-[500px] bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:border-[#DEFF00]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" style={{backgroundImage: `url(${item.img})`}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="text-[#DEFF00] text-sm font-bold tracking-widest mb-2 uppercase translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {item.sub}
                  </div>
                  <h3 className="text-5xl font-black italic tracking-tighter text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-full h-[1px] bg-white/30 mt-6 group-hover:bg-[#DEFF00] transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Banner */}
      <section className="py-20 bg-[#DEFF00] text-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
              Join the <br/> Revolution
            </h2>
            <p className="font-bold text-lg opacity-80">
              망설이지 말고 시작하세요. <br/>
              첫 방문 시 1회 무료 체험권 증정!
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Play fill="white" className="ml-1" />
            </button>
            <div className="h-20 flex items-center">
              <span className="text-xl font-bold tracking-tighter underline">WATCH PROMO VIDEO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#DEFF00] rounded-full"></div>
                <span className="text-2xl font-black italic text-white">BEATBOX</span>
              </div>
              <p className="text-gray-500 max-w-xs text-sm">
                춤을 통해 삶의 에너지를 충전하는 공간.
                누구나 쉽고 즐겁게 춤을 배울 수 있습니다.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-600 text-xs">
            &copy; 2024 BEATBOX DANCE STUDIO. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
