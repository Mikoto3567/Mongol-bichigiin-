import React from "react";

const Header = () => {
  return (
    <header className="">
        
      <div className="">
        <button className="border-none text-black px-4 py-2 rounded-lg">
          About Us
        </button>
        <button className="border-none text-black px-4 py-2 rounded-lg">
          Sign-in
        </button>
      </div>

      <aside>

        <div id="logo_zone" className="">
            <p className="text-2xl font-bold text-blue-600">Logo | Site Name</p>
        </div>

        <ul className="">
          <li><a href="/">Home</a></li>
          <li><a href="/alphabet">Цагаан Толгой</a></li>
          <li><a href="/grammar-lessons">Дүрмийн сан / Даалгавар</a></li>
          <li><a href="/translate-reading">Хөрвүүлэлт / Уншлага</a></li>
          <li><a href="/exams">Шалгалт өгөх</a></li>
          <li><a href="/recommended-books">Санал болгох номнууд</a></li>
        </ul>

      </aside>
    </header>
  );
};

export default Header;
