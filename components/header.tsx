import { BellRing, UserRound } from "lucide-react"
export default function Header() {
return (
    <header className="flex justify-between px-8 py-4 bg-white/80 backdrop-sepia-0 border-white/60">
            <div className="relative w-96">
                <input 
                type="text" 
                className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all    " 
                placeholder="Search"
                />
            </div>

            <div className="">
                <button className="p-2 w-10  text-gray-400 hover:bg-gray-100 rounded-full"> <BellRing /> </button>
                <button className="p-2 w-10  text-gray-400 hover:bg-gray-100 rounded-full"> <UserRound /> ..  </button>
            </div>

    </header>
)}
    


