import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos';

const Timeline = () => {
    const [timelines, setTimeline] = useState()

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setTimeline(data))
    }, [])

    useEffect(() => {
        Aos.init({
            duration: 400,
            offset: 300
        });
    }, []);

    const { user } = timelines || {};
    const { timeline } = user || {};
    // console.log(timeline);

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
            className=' p-5 md:p-10 min-h-screen'>
            {/* contacts header section */}
            <h2 className='text-3xl font-bold border-b-[4px] border-[#ff714a] px-2 pb-2 text-white'>My Timeline</h2>
            <h4 className=" text-right text-[#aaaa] text-xl mt-1">Get in Touch</h4>
            <div className="">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                    {
                        timeline?.map(item => (
                            <div key={item?._id} className="card card-compact bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className=" text-xl font-bold text-white">{item?.jobTitle}</h2>
                                    <p>{item?.summary}</p>
                                    <div className="justify-start flex flex-col gap-2">
                                        <button className=" button-orange font-bold">{item?.company_name}</button>
                                        <button className=" button-orange font-bold">{item?.jobLocation}</button>
                                    </div>
                                    <div>
                                        {
                                            item.bulletPoints?.map((text, index) => (
                                                <div key={index}>
                                                    <p>{text}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;