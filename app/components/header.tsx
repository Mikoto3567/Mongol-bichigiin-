import React from 'react';

const Header = () => {
    return (
        <header className="grid grid-cols-1 gap-5 bg-white">
            <div className="flex flex-col p-4">
                <div id='logo_zone' className='flex justify-between items-center gap-4'>
                    <p className="text-2xl font-bold text-blue-600">
                        Logo | Site Name
                    </p>
                    <div className='flex gap-4'>
                        <button className="border-none text-black px-4 py-2 rounded-lg">About Us</button>
                        <button className="border-none text-black px-4 py-2 rounded-lg">Sign-in</button>
                    </div>
                </div>
                <nav>
                    <ul className="flex flex-nowrap items-center justify-between gap-6 whitespace-nowrap">
                        <li><a href="/">Home</a></li>
                        <li><a href="/alphabet">Цагаан Толгой</a></li>
                        <li><a href="/grammar-lessons">Дүрмийн сан/Даалгавар</a></li>
                        <li><a href="/translate-reading">Хөрвүүлэлт/Уншлага</a></li>
                        <li><a href="/exams">Шалгалт өгөх</a></li>
                        <li><a href="/recommended-books">Санал болгох номнууд</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;