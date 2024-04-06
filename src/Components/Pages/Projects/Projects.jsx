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
                            <div className="cart">
                                {/* project img and title */}
                                <div className=" overflow-hidden relative">
                                    <img className="background-image" src={item?.image?.url} alt="" />
                                    <p className=" absolute top-2 left-2 text-white block text-xs p-[2px] rounded-sm bg-[#222222]">{item?.title}</p>
                                </div>
                                {/* img details */}
                                <div className="rounded-b-md p-4 project-shadow">
                                    <div className=" flex justify-between items-center">
                                        <div>
                                            <p className=" text-xs text-[#aaaa]">{item?.techStack}</p>
                                            <h1 className=' text-xl font-bold text-[#aaaa] text-white'>{item?.title}</h1>
                                        </div>
                                        {/* details section */}
                                        <button className="button-project" onClick={() => document.getElementById('my_modal_3').showModal()}>details</button>
                                        <dialog id="my_modal_3" className="modal">
                                            <div className="modal-box w-[70%] max-w-5xl">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <div className=" flex items-center gap-5">
                                                    <img className=" h-full w-[50%]" src={item?.image?.url} alt="" />
                                                    <div className=" flex flex-col items-start justify-around gap-2">
                                                        <h3 className="text-3xl w-[50%] font-bold text-white">{item?.title}</h3>
                                                        <p className="text-xs text-[#aaaa]">{item?.techStack}</p>
                                                        <div className=" flex justify-between items-center gap-5 mt-3">
                                                            <button className=" button-orange hover:text-black hover:bg-[#ff714a] p-1">Live url</button>
                                                            <button className=" button-orange hover:text-black hover:bg-[#ff714a] p-1">Github url</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                    <p className='w-[300px] text-[#aaaa] text-xs'>{item?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;