import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/data";

const ProjectDetail = () => {
    const { id }  = useParams()
    const project =  projects.find((project) => +project.id === +id);
    // const { images, details, tools} = project;
    const tools = project.tools
    

    
    
    return (
      <>
        
      <div className="p-6 grid md:grid-cols-2 sm:grid-cols-1 bg-hero-lg">
             <img src={project.images} alt={project.title} className="w-[70%]" />

            <div className="p-6 ">
                 <h2 className="text-rose-500 font-bold text-3xl mb-4">{project.title}</h2>
                 <p className="font font-roboto">{project.details}</p>

                  <button className="p-3 rounded-3xl text-white bg-rose-600 mt-6 hover:bg-transparent hover:text-rose-500 border hover:border-rose-600"><a href="#">Go to Live Site</a>
                  </button>

              </div>
               

  
      </div>
      {tools.map((tool, index)=> {
          return (
            
            <span key={index} className="p-4 text-gray-600 font-mont mx-auto w-[full] justify-center items-center ">
                {tool } |

            </span>
          
          
        )
        }
  )}
      
      <form className="flex flex-col w-[60%] h-[40vh] mt-4 p-4 ">

          <h2 className="text-rose-500 font-bold text-3xl mb-4"> Leave a comment</h2>
                  <input type="text" placeholder="Please leave a comment" className="h-[10vh] p-4 mb-2 border border-gray-400 rounded"/>
                  <input type="text" placeholder="Your email" className="h-[5vh] p-4 mb-2 border border-gray-400 rounded"/>
                  <input type="text" placeholder="Your name" className="h-[5vh] p-4 mb-2 border border-gray-400 rounded important"/>
        </form>

     
                  </>
    )}

export default ProjectDetail;
