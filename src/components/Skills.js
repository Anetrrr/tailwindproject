import React from "react";

const Skills = () => {
  const skills = ['HTML', 'CSS', 'TailwindCSS', 'SASS', 'Confluence', 'ClickUp', 'JavaScript', 'React', 'NodeJS', 'Linux','GitHub', 'Bitbucket', 'Material UI', 'Azure App Service' ]
  return (
  
  <div className="bg-gray-800 h-[full] w-[full] py-4">
    
     <div className="flex flex-wrap items-center space-x-5 max-w-full hidden-scrollbar scroll-auto ">
        {skills.map((item, index) => (
          <div key={index} className="rounded p-2 m-2 text-center bg-black hover:border-b-2 text-white">{item}</div>
         
        
        ))}
      </div>
   </div>
  )
};

export default Skills;
