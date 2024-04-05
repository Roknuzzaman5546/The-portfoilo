import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos';
import './Project.css'

const Projects = () => {
    const [project, setProject] = useState()
    // console.log(project);

    useEffect(() => {
        fetch('/portfolio.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    useEffect(() => {
        Aos.init({
            duration: 400,
            offset: 300
        });
    }, []);

    const { user } = project || {};
    const { projects } = user || {};
    // console.log(projects);


    return (
        <div
            data-aos="zoom-in-up"
            data-aos-anchor-placement="top-center"
            className=' p-5 md:p-10 min-h-screen'>
            {/* services header section */}
            <h2 className='text-3xl font-bold border-b-[4px] border-[#ff714a] px-2 pb-2 text-white'>My Portfolio</h2>
            <h4 className=" text-right text-[#aaaa] text-xl mt-1">My Projects</h4>
            {/* projects details */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                {
                    projects?.map(item => (
                        <div key={item._id}>
                            <div className=" overflow-hidden">
                                <img className="background-image" src={item?.image?.url} alt="" />
                            </div>
                            <div className="rounded-b-md p-4 project-shadow">
                                <p className=" text-xs text-[#aaaa]">{item?.techStack}</p>
                                <h1 className=' text-xl font-bold text-[#aaaa] text-white'>{item?.title}</h1>
                                <p className='w-[300px] text-[#aaaa] text-xs'>{item?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;