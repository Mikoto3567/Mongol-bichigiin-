"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; 

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cards = [
    {
      id: 1,
      title: `Алтан Урагийн 37 Хаан ба тэдний Хатад`,
      description:
        `Монголын түүхийн алтан урагийн хаадын намтар, үйл хэрэг, амьдралын түүхүүд`,
      icon: "",
      path: "/king/1.chingis",
    },
    {
      id: 2,
      title: `Түүх домог`,
      description:
        `Монголын Нууц Товчооны эмхэтгэсэн хэлбэр, домог, аман яриануудыг агуулсан түүхийн сан`,
      icon: "",
      path: `/domog`,
    },
    {
      id: 3,
      title: `Дурсгалт өв`,
      description:
        `Монголын түүх, соёлын дурсгалт өвүүдийн тухай мэдээлэл, зураг, түүхийн баримтуудыг агуулсан сан`,
      icon: "",
      path: `/dursgalt`,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#eee9e2] relative">
      <main className="pt-24 pb-16">
        <section id="home" className="container mx-auto px-6 py-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative group">
              <img
                src="/image/hero-flag2.png"
                alt="Map of Mongolia"
                className="w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <p className="text-center text-white text-sm md:text-base lg:text-lg max-w-md leading-relaxed drop-shadow-lg">
                  Би монголын түүхийг бичээгүй, Монголчууд өөрсдийнхөө түүхийг
                  биччихсэн юм.
                  <br />
                  <span className="block mt-2 text-xs md:text-sm opacity-90">
                    Эрдэмтэн Л.Н. Гумилев
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cards.map((card) => (
              <Link href={card.path} key={card.id} className="block group">
                <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#c4b5a0]/20 cursor-pointer">
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#5a4f42] mb-3 group-hover:text-[#8b7355]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#7a6f62] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#5a4f42] mb-4">
              Монголын түүх соёл
            </h2>
            <p className="text-[#7a6f62] leading-relaxed text-lg">
              Энэхүү цахим сан нь Монголын баялаг түүх, соёл, уран зохиолын
              өвийг цуглуулан хадгалж, ирээдүй үедээ өвлүүлэх зорилготой юм.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
