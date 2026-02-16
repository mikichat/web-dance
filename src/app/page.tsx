
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold text-blue-600">리듬 댄스 스튜디오</h1>
      </header>
      
      <main className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            열정과 리듬이 넘치는 곳
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            K-POP, 힙합, 재즈, 발레 등 다양한 장르의 댄스를 기초부터 탄탄하게 배울 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300">
              상담 예약하기
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition duration-300">
              더 알아보기
            </button>
          </div>
        </div>
        
        <div className="bg-blue-600 p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">신뢰</div>
              <p className="text-blue-100">정직과 믿음을 최우선으로 합니다.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">전문성</div>
              <p className="text-blue-100">최고의 실력으로 보답합니다.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">속도</div>
              <p className="text-blue-100">빠르고 정확한 처리를 약속합니다.</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-full max-w-4xl py-10 text-center text-gray-500">
        <p>&copy; 2024 리듬 댄스 스튜디오. All rights reserved.</p>
      </footer>
    </div>
  );
}
