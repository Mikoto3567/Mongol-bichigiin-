'use client'
import React, { useState } from 'react';

export default function DursgaltPage() {
  
const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const monuments = [
    { id: 1, img: "/image/1.jpg", title: "Гүюг хааны захиа", desc: "1246 онд Ромын папад Гүюг хааны илгээсэн хариу захидал." },
    { id: 2, img: "/image/2.jpg", title: "Гүюг хааны тамганы бичээс", desc: "1246-1248 оны Гүюг хааны тамганы дардас бичээс." },
    { id: 3, img: "/image/3.jpg", title: "Монгол хэлээр бичсэн дурсгал", desc: "13-14-р зууны монгол хэлээр бичсэн өр зээлийн бичээс." },
    { id: 4, img: "/image/4.jpg", title: "Чингисийн чулууны бичиг", desc: "“Чингис хааныг Сартуул иргэдийг дайлан мордож бууж хамаг монгол улсын ардыг Буга сочухайд хурсанд Есүнгэ 335 алдыг онолоо” гэж бичсэн ажээ." },
    { id: 5, img: "/image/5.jpg", title: "Их Төрийн нэвтрэх эрдэнэ нэрт зоос", desc: "Хайсан хүлэг хааны цутгуулсан мөнгөн зоос." },
    { id: 6, img: "/image/6.jpg", title: "Аргун хааны захидал", desc: "Аргун хаанаас Францын IV Филипп-д бичсэн захидал." },
    { id: 7, img: "/image/7.jpg", title: "Жигүнтэй даргачийн хөшөө", desc: "1338 онд босгосон Жигүнтэй даргачийн бичигт хөшөө.Жигүнтэй нь Төмөр хааны үед төрд үнэнчээр зүтгэж байсан түшмэл байжээ." },
    { id: 8, img: "/image/8.jpg", title: "Тамганы дардас", desc: "Лигдэн хутагт хааны хэрэглэж байсан тамганы дардас." },
    { id: 9, img: "/image/9.jpg", title: "Өгөөдэй хааны зарлиг", desc: "1240 оны Өгөөдэй хааны зарлигийн бичээс." },
    { id: 10, img: "/image/10.jpg", title: "Юань гүрний олдвор", desc: "Юань гүрний үеийн ханын зураг." },
    { id: 11, img: "/image/11.jpg", title: "Юань улсын мөнгөн зооснууд", desc: "Юань улсын үед гүйлгээнд байсан мөнгөн зооснууд." }
  ];

  return (
    <div className="min-h-screen bg-[#e1d5c8] pt-24 pb-16 relative">
      <h1 className="text-3xl font-bold text-center mb-12 text-[#4a3728]">Түүхэн дурсгалт зүйлс</h1>
      
      <div className="max-w-4xl mx-auto space-y-10 px-4">
        {monuments.map((item, index) => (
          <div key={item.id} className={`flex flex-col md:flex-row items-center gap-8 p-6 bg-[#f5efe6] rounded-2xl shadow-md border border-[#d4c3b0] ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl border-2 border-[#998a7d]">
              <img 
                src={item.img} 
                alt={item.title} 
                
                onClick={() => setSelectedImg(item.img)}
                className="w-full h-64 object-contain bg-white cursor-pointer hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-bold text-[#4a3728] mb-3 border-b border-[#998a7d] pb-2">{item.title}</h2>
              <p className="text-[#5d4a3a] leading-relaxed font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative">
            <button 
              className="absolute -top-10 right-0 text-white text-xl"
              onClick={() => setSelectedImg(null)}
            >
              Хаах
            </button>
            <img 
              src={selectedImg} 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
              alt="Zoomed"
            />
          </div>
        </div>
      )}
    </div>
  );
}