import { NavLink } from "react-router-dom";
import './Navbar.css'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=" w-full min-h-screen flex flex-col justify-between py-[30px]">
            {/* navbar profile section */}
            <div className=" flex flex-col items-center justify-center mb-[30px]">
                <img className=" w-[80px] max-h-[80px] object-cover rounded-lg mb-5" src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k" alt="" />
                <h3 className=" text-2xl font-bold text-white overflow-hidden">John</h3>
            </div>
            <div>
                {/* menu section */}
                <ul className=" text-center w-full flex flex-col">
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[12px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li"}>About</NavLink>

                    <NavLink to="/services" className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[12px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li"}>Services</NavLink>

                    <NavLink to="/skills" className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[12px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li"}>Skills</NavLink>

                    <NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[12px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li"}>Projects</NavLink>

                    <NavLink to="/timeline" className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[12px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li"}>Timeline </NavLink>

                    <NavLink to="/testimonial" className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[12px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li"}>Testimonial </NavLink>

                    <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li" : isActive ? " w-full text-white py-[12px] font-serif bg-[#333333] shadow-left" : "w-full border-t border-[#333] text-white py-[12px] font-serif active:bg-[#333333] li"}>Contact</NavLink>
                </ul>
                {/* Social link and copyright section */}
                <div className="text-center w-full flex items-center justify-center gap-3 mt-[30px]">
                    <span className=" bg-[#4444] text-[#aaaa] p-[6px] hover:bg-[#2578B4] hover:text-black">
                        <FaTwitter></FaTwitter>
                    </span>
                    <span className=" bg-[#4444] text-[#aaaa] p-[6px] hover:bg-[#2578B4] hover:text-black">
                        <FaLinkedin></FaLinkedin>
                    </span>
                    <span className=" bg-[#4444] text-[#aaaa] p-[6px] hover:bg-[#2578B4] hover:text-black">
                        <FaFacebook></FaFacebook>
                    </span>
                </div>
            </div>
            {/* copyright section */}
            <div className=" text-center mt-16 text-xs text-[#aaa]">
                © 2021 All rights
                reserved.
            </div>
        </div>
    );
};

export default Navbar;