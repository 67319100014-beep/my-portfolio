export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-cyan-950 hover:from-cyan-950 hover:to-slate-900 transition-all duration-1000 text-center">
      
      {/* Avatar */}
    <div className="text-8xl mb-9 hover:rotate-12 hover:scale-110 transition duration-300 cursor-pointer">👨🏿‍🦱</div>
      
      {/* ชื่อ */}
    <h1 className="text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-4">
      Hi I'm Freson
    </h1>
      
      {/* Tagline */}
     <p className="text-2xl text-white/80 mb-8">
        FREELANCE Graphic design . Video editor - Bangkok 
      </p>
      
      {/* 2 ปุ่ม */}
      <div className="flex gap-4">
      {/* ปุ่มแรก: สีขาว ตัวหนังสือม่วง */}
      <button className="px-6 py-3 bg-white text-purple-600 font-medium rounded-full shadow-lg hover:scale-105 transition cursor-pointer">
        ดูผลงาน (Projects)
      </button>
     {/* ปุ่มสอง: กรอบขาวโปร่งแสง */}
      <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/20 transition cursor-pointer">
      ติดต่อฉัน (Contact)
      </button>
      </div>
      
    </main>
  );
}