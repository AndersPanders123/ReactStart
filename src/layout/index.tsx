import HeiHei from "../components/HeiHei";
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
