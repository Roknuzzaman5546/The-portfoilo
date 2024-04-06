import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos';
import './Skills.css'

const Skills = () => {
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const [skill, setSkill] = useState()
    // console.log(skill);

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setSkill(data))
    }, [])

    useEffect(() => {
        Aos.init({
            duration: 400,
            offset: 300
        });
    }, []);

    const handleMouseEnter = (itemId) => {
        setHoveredItemId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    const { user } = skill || {};
    const { skills } = user || {};
    // console.log(skills);
    return (
        <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
            className=' p-5 md:p-10 min-h-screen'>
            {/* skills header section */}
            <h2 className='text-3xl font-bold border-b-[4px] border-[#ff714a] px-2 pb-2 text-white'>My Skills</h2>
            <h4 className=" text-right text-[#aaaa] text-xl mt-1">My skills</h4>
            {/* my skills bode part */}
            <div className=" flex flex-wrap gap-10 ml-12">
                {
                    skills?.map(item => (
                        <div key={item._id} className="relative cursor-pointer" onMouseEnter={() => handleMouseEnter(item._id)} onMouseLeave={handleMouseLeave}>
                            <img className={`w-40 h-40 item-img transition-shadow duration-500 ease-in-out transform hover:-translate-y-1`} src={item?.image?.url} alt="" />
                            <h2 className={`text-black bg-white font-bold px-2 py-1 top-3 left-2 absolute ${hoveredItemId === item._id ? 'block' : 'hidden'}`}>{item?.name}</h2>
                            <h2 className={`text-black bg-white px-2 py-1 bottom-2 left-2 absolute ${hoveredItemId === item._id ? 'block' : 'hidden'}`}>{item?.percentage}%</h2>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Skills;