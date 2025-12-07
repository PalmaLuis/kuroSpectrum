// import Navbar from "@components/Navbar";
import "./main-layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main-layout">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
