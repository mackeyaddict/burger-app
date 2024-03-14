import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-zinc-950 drop-shadow-md">
      <div className="flex flex-wrap container items-center justify-between mx-auto p-4">
      <a className="text-3xl font-light text-white cursor-pointer hover:text-slate-400" onClick={() => {navigate("/")}}>BurgerAPP</a>
      <ul className="font-medium flex">
        <li><a className="block py-2 px-3 text-center text-white hover:text-slate-400 cursor-pointer" onClick={() => {navigate("/")}}>Home</a></li>
        <li><a className="block py-2 px-3 text-center text-white hover:text-slate-400 cursor-pointer" onClick={() => {navigate("/about")}}>About</a></li>
        <li><a className="block py-2 px-3 text-center text-white hover:text-slate-400 cursor-pointer" onClick={() => {navigate("/order")}}>Order</a></li>
      </ul>
      </div>
    </nav>
  );
}