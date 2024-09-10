import ToolBar from "../toolBar/index";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import useDesktop from "../../hooks/useDesktop";

const Layout = () => {
  const isDesktop = useDesktop();

  return (
    <>
      <ToolBar isDesktop={isDesktop} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
