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
            <div className=" flex flex-col md:flex-row ">
                <div className=" w-full md:w-[50%] max-h-full">
                    <img className=" w-full h-full aspect-auto object-top" src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k" alt="" />
                </div>
                <div className=" w-full md:w-[50%] p-[40px] md:p-[80px] bg-[#333333] max-h-fit table">
                    <div className=" table-cell align-middle">
                        <p className=" text-[#aaa]">Software Developer</p>
                        <h2 className=" text-5xl font-bold text-white my-4">John doe</h2>
                        <p className=" text-[#d5d5d5] leading-loose">As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.",
                            "quote": "Live the Life as you want</p>
                        <button className="button-orange hover:bg-[#ff714a] mt-3 text-white font-serif hover:text-black text-xl">
                            contact
                        </button>
                    </div>
                </div>
            </div>
            {/* client and what i do section */}
            <div className=' p-[40px] md:p-[80px]'>
                <h1 className=' text-2xl font-bold inline-block border-b-[4px] border-[#ff714a] px-2'>Clients</h1>
                <div className='flex justify-around items-around mt-2 flex-wrap gap-2'>
                    <img className=' h-9' src="https://i.ibb.co/bJ8W313/client-1.png" alt="" />
                    <img className=' h-9' src="https://i.ibb.co/7v9WVhj/client-2.png" alt="" />
                    <img className=' h-9' src="https://i.ibb.co/zNYrr2w/client-3.png" alt="" />
                    <img className=' h-9' src="https://i.ibb.co/0qs8JTL/client-4.png" alt="" />
                    <img className=' h-9' src="https://i.ibb.co/HpgJh15/client-5.png" alt="" />
                    <img className=' h-9' src="https://i.ibb.co/Sv5GwVf/client-6.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;