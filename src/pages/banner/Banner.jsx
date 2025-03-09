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
  return (
    <div className='mt-[120px]'>
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
                  <div className='flex bg-blue-900 py-[8px] px-[15px] shadow-regal-blue rounded-[5px] text-[18px] items-center gap-x-[10px] text-white cursor-pointer'>
                    <a href="#" className='flex items-center gap-x-[10px]'>Project</a>
                    <CiShare1 />
                  </div>
                    <div className='flex bg-blue-900 py-[8px] px-[15px] shadow-regal-blue rounded-[5px] text-[18px] items-center gap-x-[10px] text-white cursor-pointer'>
                        <a href="#"  target="_blank" className='flex items-center gap-x-[10px]'>Context </a>
                        <BiBookContent />
                    </div>
                </div>
                <div className='flex items-center gap-x-[10px]'>
                    <a className='bg-blue-400 p-[7px] rounded-[10px] text-[20px] text-white'  target="_blank" href="https://github.com/aropdhar"><FaGithub /></a>
                    <a className='bg-blue-400 p-[7px] rounded-[10px] text-[20px] text-white'  target="_blank" href="https://www.linkedin.com/in/arop-dhar-81b614219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
                    <a className='bg-blue-400 p-[7px] rounded-[10px] text-[20px] text-white' href="#"  target="_blank"><FaInstagram /></a>
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
