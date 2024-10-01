import LayoutCss from "../layout/Layout.module.css";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className={`${LayoutCss.layout}`}>
            <div className={`${LayoutCss.navbar}`}>
                <Navbar />
            </div>
            <div className={`${LayoutCss.content}`}>
                <Outlet />
            </div>
        </div>
    );
}
