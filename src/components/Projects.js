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
    <>
  
    <div className='grid mx-auto md:grid-cols-2 sm-grid-cols-1 gap-6 bg-slate-900 p-4 object-contain h-[full]'>

    {data.map((item,index) => {
  
      return(
    <div key={index}  className=' relative max-w-[1240px] min-h-80% bg-white mx-auto grid md:grid-row-2 sm:grid-row-2 w-fit h-fit rounded lg:h-[600px] md:h-[400px]  border-2 border-gray-200 bg-hero-lg object-contain h-90 transform transition-all hover:-translate-y-2'>
        <img src={item.images} alt={item.title} className='md:w-[500px] h-fit sm:w-[300px]'/>
        <div className='flex flex-col justify-center mx-12 h-40'>
        <h3 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 text-rose-600 '>{item.title}</h3>

        <p className='py-2 text-[1.5vw] tracking-widest h-fit'>{shortenText(item.details, 105)}
        </p>

        <span className='mt-2 flex justify-between items-center px-10 mb-4 bottom-1'> 
          <AiOutlineGithub className=' w-12 h-10 cursor-pointer'/>
            <Link to={`/projects/${item.id}`}><button className='w-[150px] h-10 font-bold border bg-rose-600 text-white rounded font-mont'> More details... </button>
            </Link>

     </span>
    </div>
    </div>
      )
    })}
    </div>
    </>
  )
}

export default Projects