
import React from 'react';
import { ArrowRight, Music, Users, Calendar, Star, MapPin, Phone, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Music size={16} className="text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                RHYTHM DANCE
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
              <a href="#classes" className="hover:text-pink-500 transition-colors">CLASSES</a>
              <a href="#instructors" className="hover:text-pink-500 transition-colors">INSTRUCTORS</a>
              <a href="#schedule" className="hover:text-pink-500 transition-colors">SCHEDULE</a>
              <a href="#contact" className="hover:text-pink-500 transition-colors">CONTACT</a>
            </div>
            <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
              무료 체험 신청
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545959570-a941cc57f4c9?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto mt-0 md:mt-[-5vh]">
          <span className="inline-block py-2 px-4 rounded-full bg-pink-500/20 border border-pink-500/50 text-pink-400 text-sm md:text-base font-bold tracking-widest mb-8 animate-fade-in-up">
            WELCOME TO THE STAGE
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-none tracking-tighter">
            MOVE YOUR BODY <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
              FEEL THE BEAT
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            K-POP, 힙합, 재즈, 코레오까지. <br className="hidden md:block"/>
            당신의 열정을 표현할 수 있는 최고의 공간, <span className="text-white font-bold">리듬 댄스 스튜디오</span>에서 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl shadow-pink-600/30 flex items-center justify-center gap-3 group">
              수강 상담 예약 <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white rounded-full font-bold text-xl transition-all backdrop-blur-sm hover:border-white">
              시간표 확인하기
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 hidden md:block">
          <div className="w-8 h-12 border-2 border-gray-500 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-500 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="border-y border-white/10 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "10+", label: "Professional Instructors" },
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Weekly Classes" },
              { number: "4.9", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-pink-500 transition-colors duration-300">{stat.number}</div>
                <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Classes Section */}
      <section id="classes" className="py-24 bg-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">OUR CLASSES</h2>
            <p className="text-gray-400">초보자부터 전문가 과정까지 다양한 레벨의 수업이 준비되어 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "K-POP COVER", desc: "최신 아이돌 안무를 가장 빠르게 마스터하는 클래스", img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop", color: "from-pink-500 to-rose-500" },
              { title: "HIPHOP BASIC", desc: "그루브와 리듬감을 익히는 힙합 기초 완성 클래스", img: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2070&auto=format&fit=crop", color: "from-purple-500 to-indigo-500" },
              { title: "CHOREOGRAPHY", desc: "트렌디한 음악에 맞춘 강사님만의 창작 안무 클래스", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop", color: "from-cyan-500 to-blue-500" },
              { title: "GIRLS HIPHOP", desc: "파워풀하면서도 섹시한 라인을 살리는 걸스힙합", img: "https://images.unsplash.com/photo-1552560229-edf05c4856a9?q=80&w=2076&auto=format&fit=crop", color: "from-red-500 to-orange-500" },
              { title: "KIDS DANCE", desc: "아이들의 성장판 자극과 자신감을 키워주는 키즈댄스", img: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2021&auto=format&fit=crop", color: "from-yellow-400 to-orange-400" },
              { title: "PRIVATE LESSON", desc: "오디션, 입시, 장기자랑 등 목적에 맞춘 1:1 집중 레슨", img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2070&auto=format&fit=crop", color: "from-green-400 to-emerald-600" },
            ].map((cls, idx) => (
              <div key={idx} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${cls.img})` }}></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent`}>
                  <div className={`w-12 h-1 mb-4 bg-gradient-to-r ${cls.color}`}></div>
                  <h3 className="text-2xl font-bold mb-2">{cls.title}</h3>
                  <p className="text-gray-300 text-sm">{cls.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Teaser */}
      <section id="schedule" className="py-24 bg-black text-center px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-900 border border-zinc-800 p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">이번 달 수업 시간표</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
            매월 업데이트되는 다양한 클래스 스케줄을 확인하세요. <br/>
            원하는 시간, 원하는 장르를 선택해 수강하실 수 있습니다.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors relative z-10 flex items-center gap-2 mx-auto">
            <Calendar className="w-5 h-5" />
            시간표 다운로드
          </button>
        </div>
      </section>

      {/* Call to Action & Footer */}
      <footer id="contact" className="bg-zinc-950 pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <Music size={16} className="text-white" />
                </div>
                <span className="text-xl font-bold">RHYTHM DANCE</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                춤을 통해 삶의 에너지를 충전하는 공간. <br/>
                누구나 쉽고 즐겁게 춤을 배울 수 있도록 <br/>
                최고의 강사진이 함께합니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">CONTACT US</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>서울시 강남구 테헤란로 123 <br/>리듬빌딩 3층</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>02-1234-5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>@rhythm_dance_official</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">QUICK LINKS</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-pink-500 transition-colors">학원 소개</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">강사진 프로필</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">수강료 안내</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">오시는 길</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">NEWSLETTER</h4>
              <p className="text-gray-400 text-sm mb-4">새로운 수업 소식을 받아보세요.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email Address" className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-pink-500 text-white" />
                <button className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-lg transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
            <p>&copy; 2024 RHYTHM DANCE STUDIO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
