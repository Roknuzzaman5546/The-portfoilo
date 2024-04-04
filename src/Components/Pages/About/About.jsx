/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import './About.css'

const About = () => {
    useEffect(() => {
        Aos.init({
            duration: 400,
            offset: 300
        });
    }, []);

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
        >
            {/* about banner section */}
            <div className=" flex flex-col md:flex-row h-screen">
                <div className=" w-full md:w-[50%] max-h-full">
                    <img className=" w-full h-full aspect-auto object-top" src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k" alt="" />
                </div>
                <div className=" w-full md:w-[50%] p-[40px] md:p-[80px] bg-[#333333] max-h-fit table">
                    <div className=" table-cell align-middle">
                        <p className=" text-[#aaa]">Software Developer</p>
                        <h2 className=" text-5xl font-bold text-white my-4">John doe</h2>
                        <p className=" text-[#d5d5d5] leading-loose">As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.",
                            "quote": "Live the Life as you want</p>
                        <button className="button-primary hover:bg-[#ff714a] mt-3 text-white font-serif hover:text-black">
                            contact
                        </button>
                    </div>
                </div>
            </div>
            {/* client and what i do section */}
            <div className=' p-[40px] md:p-[80px]'>

            </div>
        </div>
    );
};

export default About;