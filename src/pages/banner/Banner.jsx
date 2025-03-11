import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaGithub, FaInstagram, FaLinkedin, FaMagic } from 'react-icons/fa'
import Heading from '../../component/heading/Heading'
import { TypeAnimation } from 'react-type-animation'
import Paragraph from '../../component/paragraph/Paragraph'
import { CiShare1 } from 'react-icons/ci'
import { BiBookContent } from 'react-icons/bi'
import banner from '../../assets/banner.png'


const Banner = () => {
   useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        delay: 400,
        distance: "50px",
        origin: "left",
        duration: 800,
        easing: "ease-in-out",
        reset: true, // Resets the animation when scrolling back
      });
    }, []);
    useEffect(() => {
      ScrollReveal().reveal(".image", {
        delay: 400,
        distance: "50px",
        origin: "right",
        duration: 800,
        easing: "ease-in-out",
        reset: true, // Resets the animation when scrolling back
      });
    }, []);
    useEffect(() => {
      ScrollReveal().reveal(".project", {
        delay: 400,
        distance: "50px",
        origin: "left",
        duration: 800,
        easing: "ease-in-out",
        reset: true, // Resets the animation when scrolling back
      });
    }, []);
    useEffect(() => {
      ScrollReveal().reveal(".context", {
        delay: 400,
        distance: "50px",
        origin: "bottom",
        duration: 800,
        easing: "ease-in-out",
        reset: true, // Resets the animation when scrolling back
      });
    }, []);
    useEffect(() => {
      ScrollReveal().reveal(".social", {
        delay: 400,
        distance: "50px",
        origin: "top",
        duration: 800,
        easing: "ease-in-out",
        reset: true, // Resets the animation when scrolling back
      });
    }, []);
  return (
    <div className='mt-[120px]' id="banner">
       <div className='container'>
          <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-y-[10px] reveal'>
                <h4 className='flex items-center gap-[4px] bg-linear-to-r w-[175px] rounded-[5px] text-white text-[18px] py-[10px] px-[8px] from-cyan-500 to-blue-500 font-medium leading-[24px]'>
                <FaMagic /> Ready To Inspire</h4>
                <h1 className='text-[45px] flex flex-col'>Front-End <span className='text-blue-500 font-semibold '>Developer</span></h1>
                <TypeAnimation
                    sequence={['Front-End Developer', 800, 'Mern-Stack Developer', 800, 'React Native Developer', 800]}
                    style={{ fontSize: '22px'  }}
                    repeat={Infinity}
                />
                <Paragraph paratext='Creating Innovative, Functional, and User-Friendly Websites for Digital Solution' paraclass='w-[400px] text-[18px]'/> 
                <div className='flex items-center gap-x-[10px]'>
                    <div className=' py-[8px] px-[15px] rounded-[5px] bg-cyan-300 shadow-lg shadow-cyan-500/50 cursor-pointer'>
                       <span className='inline-block'>React Js</span> 
                    </div>
                    <div className=' py-[8px] px-[15px] rounded-[5px] bg-cyan-300 shadow-lg shadow-cyan-500/50 cursor-pointer'>
                       <span className='inline-block'>Javascript</span> 
                    </div>
                    <div className=' py-[8px] px-[15px] rounded-[5px] bg-cyan-300 shadow-lg shadow-cyan-500/50 cursor-pointer'>
                       <span className='inline-block'>Node Js</span> 
                    </div>
                    <div className=' py-[8px] px-[15px] rounded-[5px] bg-cyan-300 shadow-lg shadow-cyan-500/50 cursor-pointer'>
                       <span className='inline-block'>Tailwind Css</span> 
                    </div>
                </div>
                <div className='flex mt-[10px] items-center gap-x-[15px]'>
                  <div className='flex bg-blue-900 shadow-lg shadow-blue-900/50 py-[8px] px-[15px]  rounded-[5px] text-[18px] items-center gap-x-[10px] text-white cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110  group project'>
                    <a href="#" className='flex items-center gap-x-[10px] '>Project</a>
                    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2"><CiShare1 /></span>
                  </div>
                    <div className='flex bg-blue-900 shadow-lg shadow-blue-900/50 py-[8px] px-[15px]  rounded-[5px] text-[18px] items-center gap-x-[10px] text-white cursor-pointer group context transition-transform duration-300 ease-in-out transform hover:scale-110'>
                        <a href="#"  target="_blank" className='flex items-center gap-x-[10px]'>Context </a>
                        
                        <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2"><BiBookContent /></span>
                    </div>
                </div>
                <div className='flex items-center gap-x-[10px] social'>
                    <a className='bg-blue-500 shadow-lg shadow-blue-500/50 p-[7px] rounded-[10px] text-[20px] text-white'  target="_blank" href="https://github.com/aropdhar"><FaGithub /></a>
                    <a className='bg-blue-500 shadow-lg shadow-blue-500/50 p-[7px] rounded-[10px] text-[20px] text-white'  target="_blank" href="https://www.linkedin.com/in/arop-dhar-81b614219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
                    <a className='bg-blue-500 shadow-lg shadow-blue-500/50 p-[7px] rounded-[10px] text-[20px] text-white' href="#"  target="_blank"><FaInstagram /></a>
                </div>
              </div>
              <div className='w-[650px] h-[350px] overflow-hidden image'>
                   <img className='w-full h-full object-contain' src={banner} alt={banner} />
              </div>
          </div>
       </div>
    </div>
  )
}

export default Banner
