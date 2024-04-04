import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="flex gap-[2px] overflow-y-scroll">
            <div className=" w-[180px] bg-[#222222]">
                <Navbar></Navbar>
            </div>
            <div className="bg-[#222222] w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;