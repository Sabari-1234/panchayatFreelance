import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav-root flex justify-between pl-2 pr-2 p-3 bg-slate-700 text-white">
      <div className="logo-name tracking-wider font-bold">PANCHAYAT</div>
      <div className="nav-cont flex gap-2">
        <Link>Home</Link>
        <Link>Logout</Link>
      </div>
    </div>
  );
};

export default Header;
