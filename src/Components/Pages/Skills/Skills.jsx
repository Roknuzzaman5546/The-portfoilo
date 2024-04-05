import { useEffect, useState } from "react";

const Skills = () => {
    const [service, setService] = useState()
    // console.log(service);

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { user } = service || {};
    const { skills } = user || {};
    // console.log(skills);
    return (
        <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
            className=' p-5 md:p-10'>
            {/* services header section */}
            <h2 className='text-3xl font-bold border-b-[4px] border-[#ff714a] px-2 pb-2 text-white'>My Skills</h2>
            <h4 className=" text-right text-[#aaaa] text-xl mt-1">My skills</h4>
            {/* my skills bode part */}
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {
                    skills.map(item => (
                        <div key={item._id}>
                            <img className=" h-12" src={item?.image?.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;