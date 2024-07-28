import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-auto overflow-hidden flex flex-col bg-gray-100 p-10 gap-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
