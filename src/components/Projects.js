import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data/data'
import {AiOutlineGithub} from 'react-icons/ai'

const Projects = () => {
  const shortenText = (text, n) => {
    if (text.length > n) {
        const shortenedText = text.substring(0, n).concat('...')
        return shortenedText;
    }
    return text;
  }
  return (
    <div id="projects" className=' min-w-[400px]'>
  
    <div className='grid mx-auto md:mx-5 grid desktop:grid-cols-3 w-[100%] tablet-grid-cols-1 tablet:gap-4 gap-4 bg-slate-900 p-4 object-contain h-[full] ' >

    {data.map((item,index) => {
  
      return(
    <div key={index}  className=' relative max-w-[1240px] bg-white mx-2 grid  w-[70%] rounded lg:h-[100%] tablet:w-[70%] md:h-[100%] md:mx-5 justify-center sm:h-[100%] border-2 border-gray-200 bg-hero-lg object-contain transform transition-all hover:-translate-y-2'>
        <img src={item.images} alt={item.title} className='md:w-[500px] h-fit object-contain sm:w-[300px] mb-4'/>
        <div className='flex flex-col justify-center mx-6 '>
        <h3 className='md:text-2xl sm:text-xl text-xl font-bold mt-2  text-rose-600 '>{item.title}</h3>

        <p className='py-2 text-xl tracking-widest w-fit h-fit'>{shortenText(item.details, 55)}
        </p>

        <span className='mt-2 flex justify-between items-center mb-6 bottom-1 h-[50%]'> 
         <a href={item.repo} target='_blank' rel="noopener noreferrer"> <AiOutlineGithub className=' w-12 h-10 cursor-pointer'/></a>
            <Link to={`/projects/${item.id}`}><button className='w-[100%] p-2 h-10 font-bold border bg-rose-600 text-white rounded font-mont'> More details... </button>
            </Link>

     </span>
    </div>
    </div>
      )
    })}
    </div>
    </div>
  )
}

export default Projects