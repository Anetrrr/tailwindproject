import React from "react";

import { useParams } from "react-router-dom";
import projects from "../data/data";

const ProjectDetail = () => {
    const { id } = useParams()
    const project = projects.find((project) => +project.id === +id);
    // const { images, details, tools} = project;
    const tools = project.tools

    return (
        <>

            <div className="p-6 grid laptop:grid-cols-2 tablet:grid-cols-1 bg-hero-lg">
                <img src={project.images} alt={project.title} className="w-[70%]" />

                <div className="p-6 ">
                    <h2 className="text-rose-500 font-bold text-3xl mb-4">{project.title}</h2>
                    <p className="font font-roboto">{project.details}</p>

                    <button className="p-3 rounded-3xl text-white bg-rose-600 mt-6 laptop:w-[150px] tablet:w-[fit] mx-4 hover:bg-transparent hover:text-rose-500 border hover:border-rose-600">
                        <a href={project.live}>Go to Live Site</a>
                    </button>
                    <button className="p-3 laptop:w-[150px] tablet:w-[fit] rounded-3xl text-white bg- mt-6 bg-slate-900 border">
                        <a href={project.repo}>Repository</a>
                    </button>

                </div>



            </div>
            {tools.map((tool, index) => {
                return (

                    <span key={index} className="p-4 text-gray-600 font-mont mx-auto w-[full] justify-center items-center ">
                        {tool} |

                    </span>


                )
            }
            )}

            <form className="flex flex-col w-[60%] h-[40vh] mt-4 p-4 ">

                <h2 className="text-rose-500 font-bold text-3xl mb-4"> Leave a comment</h2>
                <input type="text" placeholder="Please leave a comment" className="h-[10vh] p-4 mb-2 border border-gray-400 rounded" />
                <input type="text" placeholder="Your email" className="h-[5vh] p-4 mb-2 border border-gray-400 rounded" />
                <input type="text" placeholder="Your name" className="h-[5vh] p-4 mb-2 border border-gray-400 rounded important" />
                <button className="p-3 md:w-[150px] tablet:w-[fit] rounded-3xl text-white bg- mt-2 bg-slate-900 border">Submit
                </button>
            </form>


        </>
    )
}

export default ProjectDetail;
