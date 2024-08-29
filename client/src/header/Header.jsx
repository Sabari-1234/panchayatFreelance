import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav-root flex justify-between pl-2 pr-2 p-3 bg-[#0F172A] text-white ">
      <div className="logo-name tracking-wider font-bold">PANCHAYAT</div>
      <div className="nav-cont flex gap-2 text-[13px]">
        <Link to={"/"} className="font-semibold">
          Home
        </Link>
        <Link className="font-semibold">Logout</Link>
      </div>
    </div>
  );
};

export default Header;
