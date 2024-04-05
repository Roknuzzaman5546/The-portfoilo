import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos';

const Services = () => {
    const [service, setService] = useState()
    // console.log(service);

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    useEffect(() => {
        Aos.init({
            duration: 400,
            offset: 300
        });
    }, []);

    const { user } = service || {};
    const { services } = user || {};
    // console.log(services);


    return (
        <div>
            <div
                data-aos="zoom-in-up"
                data-aos-anchor-placement="top-center"
                className=' p-5 md:p-10'>
                    {/* services header section */}
                <h2 className='text-3xl font-bold mb-10 border-b-[4px] border-[#ff714a] px-2 pb-2 text-white'>My Services</h2>
                {/* services body section */}
                <div className=' grid grid-cols-1 md:grid-clos-2 lg:grid-cols-3 gap-6'>
                    {
                        services?.map(item => (
                            <div key={item._id} className=' flex flex-col text-center items-center space-y-2'>
                                <div>
                                    <img className='w-72 h-48 rounded-sm mt-2' src={item?.image?.url} alt="" />
                                    <p className=" bg-[#4444] text-white p-1 rounded hover:bg-[#ff714a] transition-transform">{item?.charge}</p>
                                </div>
                                <div className=" p-2">
                                    <h1 className=' text-2xl font-bold text-white'>{item?.name}</h1>
                                    <p className='w-[300px] text-white text-center'>{item?.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;