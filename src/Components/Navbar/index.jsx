import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-zinc-950 drop-shadow-md relative">
      <div className="flex flex-wrap container items-center justify-between mx-auto p-4">
        <a className="text-3xl font-light text-white cursor-pointer hover:text-slate-400" onClick={() => {navigate("/")}}>BurgerAPP</a>
        <button className="md:hidden text-white space-y-1" onClick={toggleMenu}>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
        <ul className={`font-medium md:flex ${menuOpen ? 'block absolute bg-zinc-950 top-full left-0 right-0' : 'hidden'}`}>
          <li><a className="block py-2 px-3 text-center text-white hover:text-slate-400 cursor-pointer" onClick={() => {navigate("/")}}>Home</a></li>
          <li><a className="block py-2 px-3 text-center text-white hover:text-slate-400 cursor-pointer" onClick={() => {navigate("/about")}}>About</a></li>
          <li><a className="block py-2 px-3 text-center text-white hover:text-slate-400 cursor-pointer" onClick={() => {navigate("/order")}}>Order</a></li>
        </ul>
      </div>
    </nav>
  );
}
