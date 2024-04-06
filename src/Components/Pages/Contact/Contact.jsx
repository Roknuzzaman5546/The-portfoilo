import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import { GiConfirmed } from "react-icons/gi";
import { FaLocationArrow, FaPhone, FaVoicemail } from 'react-icons/fa';

const Contact = () => {
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
            className=' p-5 md:p-10 min-h-screen'>
            {/* contacts header section */}
            <h2 className='text-3xl font-bold border-b-[4px] border-[#ff714a] px-2 pb-2 text-white'>My Contacts</h2>
            <h4 className=" text-right text-[#aaaa] text-xl mt-1">Get in Touch</h4>
            {/* body part of contact section */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5'>
                <div className=' hover: bg-[#333333] border border-[#4444] text-center p-[25px] flex flex-col justify-center items-center'>
                    <span className=' text-2xl mb-1'><FaPhone></FaPhone></span>
                    <h2 className='font-bold text-white'>+880175543590</h2>
                </div>
                <div className=' bg-[#333333] border border-[#4444] text-center p-[25px] flex flex-col justify-center items-center'>
                    <span className=' text-2xl mb-1'><FaLocationArrow></FaLocationArrow></span>
                    <h2 className='font-bold text-white'>Dimla, Nilphamari</h2>
                </div>
                <div className=' bg-[#333333] border border-[#4444] text-center p-[25px] flex flex-col justify-center items-center'>
                    <span className=' text-2xl mb-1'><FaVoicemail></FaVoicemail></span>
                    <h2 className='font-bold text-white'>roknuzzamansojib78 <br />@gmail.com</h2>
                </div>
                <div className=' bg-[#333333] border border-[#4444] text-center p-[25px] flex flex-col justify-center items-center'>
                    <span className=' text-2xl mb-1'><GiConfirmed></GiConfirmed></span>
                    <h2 className='font-bold text-white'>Hire for free</h2>
                </div>
            </div>
            <div className=' lg:w-[70%] w-11/12  mx-auto mt-24'>
                <form className=' flex flex-col md:flex-row gap-5'>
                    <div className=' flex flex-col w-full md:w-[50%]'>
                        <input className='bg-[#222222] py-2 pl-2 border border-[#aaaa]' placeholder='Your name' type="text" name="" id="" />
                        <input className='bg-[#222222] py-2 pl-2 border border-[#aaaa] my-2' placeholder='Your email' type="email" name="" id="" />
                        <input className='bg-[#222222] py-2 pl-2 border border-[#aaaa]' placeholder='Your subject' type="text" name="" id="" />
                    </div>
                    <div className=' w-full md:w-[50%]'>
                        <textarea name="Message" className=' bg-[#222222] border border-[#aaaa]' id="" cols="50" rows="6.5"></textarea>
                    </div>
                </form>
                <button className=' button-orange hover:bg-[#ff714a] text-white'>
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default Contact;