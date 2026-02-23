import { Menu, BellRing, UserRound } from "lucide-react"
import tailwindcss from "tailwindcss"

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-center bg-[#e1d5c8] mx-auto pt-8 py-4 min-h-16 w-full">
    
            <div className="flex flex-row items-center justify-center gap-30">
                <a href="menu/" className="text-black hover:opacity-80">
                    <Menu size={24} />
                </a>
                <nav>
                    <ul className="flex items-center gap-10 no-underline bg-[#ada095] drop-shadow-4xl text-white text-l focus-within:shadow-gray-400 border-0 rounded-4xl px-10 py-3 ">
                        <li><a href="/" className="hover:[text-shadow:0_0_8px_rgba(255,255,255,0.9)]">Нүүр</a></li>
                        <li><a href="/dursgalt/" className="hover:[text-shadow:0_0_8px_rgba(255,255,255,0.9)]">35 Хаад </a></li>
                        <li><a href="/domog/" className="hover:[text-shadow:0_0_8px_rgba(255,255,255,0.9)]">Түүх Домог</a></li>                      
                        <li><a href="/test" className="hover:[text-shadow:0_0_8px_rgba(255,255,255,0.9)]">Мэдлэгээ сорьё</a></li>

                    </ul>
                </nav>

                <div className="flex flex-row items-center gap-4 ">
                    <a href="/notifcations/" className="hover:opacity-80"><BellRing size={22} /></a>
                    <a href="/Profile" className="hover:opacity-80"><UserRound size={22} /></a>
                </div>
                
            </div>
        </header>
    )
}