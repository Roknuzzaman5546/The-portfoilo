/* eslint-disable react/no-unescaped-entities */
import webDevelopmentImg from '../../../assets/webdevlopment.jpg'
import marnStackImg from '../../../assets/marnstark.jpg'
import frontEndImg from '../../../assets/frontend.jpg'
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
            <div className=" flex flex-col md:flex-row h-full w-full">
                <div className=" w-full md:w-[50%] max-h-full">
                    <img className=" w-full h-full object-cover aspect-w-1 aspect-h-1" src="https://i.ibb.co/JpgFVxy/ROY-0012-1.jpg" alt="" />
                </div>
                <div className=" w-full md:w-[50%] p-[80px] flex flex-col justify-center items-center bg-[#333333] max-h-fit">
                    <div className=" table-cell align-middle">
                        <p className=" text-[#aaa]">Mern stack web Developer</p>
                        <h2 className=" text-5xl font-bold text-white my-4">Roknuzzaman sajib</h2>
                        <p className=" text-[#d5d5d5] leading-loose">👋 Hi there! I'm Roknuzzaman,
                            "Hello, I'm Roknuzzaman, a seasoned MERN stack developer passionate about crafting elegant solutions. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in building responsive web applications that scale seamlessly. My experience in designing full-stack architectures for diverse needs ensures quality deliverables, on time. Let's collaborate on challenging projects and transform ideas into robust, user-focused solutions."💻✨</p>
                        <button className="button-orange hover:bg-[#ff714a] mt-3 text-white font-serif hover:text-black text-xl">
                            contact
                        </button>
                    </div>
                </div>
            </div>
            {/* client and what i do section */}
            <div className=' p-[40px] md:p-[80px]'>
                <h1 className=' text-2xl font-bold inline-block border-b-[4px] border-[#ff714a] px-2'>What i do</h1>
                <div data-aos="flip-up" className=' mt-4'>
                    <div className=' grid grid-cols-1 md:grid-clos-2 lg:grid-cols-3 gap-6'>
                        <div className=' flex flex-col text-center items-center space-y-2'>
                            <img className=' h-40 rounded-sm mt-2' src={frontEndImg} alt="" />
                            <h1 className=' xl:text-2xl lg:text-xl md:text-xl text-2xl font-bold'>Front-End developer</h1>
                            <p className='w-[300px] md:text-sm text-xs'>I develop the websites. create high performance website with blazing fast speed.</p>
                        </div>
                        <div className=' flex flex-col text-center items-center space-y-2'>
                            <img className=' h-40 rounded-sm mt-2' src={marnStackImg} alt="" />
                            <h1 className=' xl:text-2xl lg:text-xl md:text-xl text-2xl font-bold'>MERN stack developer</h1>
                            <p className='w-[300px] md:text-sm text-xs'>I develop the websites. create high performance website with blazing fast speed.</p>
                        </div>
                        <div className=' flex flex-col text-center items-center space-y-2'>
                            <img className=' h-40 rounded-sm mt-2' src={webDevelopmentImg} alt="" />
                            <h1 className=' xl:text-2xl lg:text-xl md:text-xl text-2xl font-bold'>Web Development</h1>
                            <p className='w-[300px] md:text-sm text-xs'>I develop the websites. create high performance website with blazing fast speed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;