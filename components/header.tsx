import { Menu, BellRing, UserRound } from "lucide-react"

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-center px-8 py-4 min-h-16 w-full">
    
            <div className="flex flex-row items-center justify-center gap-30">
                <a href="menu/" className="text-black hover:opacity-80">
                    <Menu size={24} />
                </a>
                <nav>
                    <ul className="flex flex-row items-center gap-12 whitespace-nowrap no-underline bg-[#3d539f] text-white text-l focus-within:shadow-amber-50 border-0 rounded-4xl px-10 py-3 ">
                        <li><a href="/" className="hover:[text-shadow:0_0_8px_rgba(255,255,255,0.9)]">Home</a></li>

                        <li><a href="/grammar-lesson">Дасгал даалгавар</a></li>
                        <li><a href="/translate-reading">Унших дасгал</a></li>
                        <li><a href="/exams" >Шалгалт өгөх</a></li>
                        <li><a href="/recommended-books" >Санал болгох номнууд</a></li>
                        <li><a href="/about_us">About Us</a></li>
                    </ul>
                </nav>

                {/* 3. Action Icons */}
                <div className="flex flex-row items-center gap-4 ">
                    <a href="/notifcations/" className="hover:opacity-80"><BellRing size={22} /></a>
                    <a href="/Profile" className="hover:opacity-80"><UserRound size={22} /></a>
                </div>
                
            </div>
        </header>
    )
}