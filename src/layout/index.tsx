import HeiHei from "../components/header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <HeiHei />

      <Outlet />
    </>
  );
}

export default Layout;
