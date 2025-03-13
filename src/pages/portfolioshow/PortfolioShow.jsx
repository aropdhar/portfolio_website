import React, { useEffect, useState } from 'react'
import { AiOutlineDropbox } from 'react-icons/ai'
import { IoIosArrowRoundForward, IoIosCode, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io'
import { LiaCertificateSolid } from 'react-icons/lia'
import image from '../../assets/p1.jpg'
import { CiShare1 } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import image2 from '../../assets/banner.png'
import ScrollReveal from "scrollreveal";
import certificate1 from '../../assets/certificate.webp'
import { FaCss3, FaNode, FaReact } from 'react-icons/fa'
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiVite } from 'react-icons/si'
import { IoLogoFirebase } from 'react-icons/io5'

const PortfolioShow = () => {
    
    const [activeSection, setActiveSection] = useState("projects");
    const [share , setShare] = useState(false);
    

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
        ScrollReveal().reveal(".Certificate", {
          delay: 400,
          distance: "50px",
          origin: "bottom",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(".stack", {
          delay: 400,
          distance: "50px",
          origin: "right",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(".header", {
          delay: 400,
          distance: "50px",
          origin: "top",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);

      useEffect(() => {
        ScrollReveal().reveal(".button", {
          delay: 400,
          distance: "50px",
          origin: "bottom",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
     

  return (
    <div className='my-[120px]' id='portfolioshow'>
      <div className='container'>
        {/* header section */}
            <div className='flex flex-col items-center justify-center gap-y-[10px] header'>
                <h1 className='text-[40px] bg-gradient-to-r from-purple-400 via-pink-500 to-sky-500 bg-clip-text text-transparent'>Portfolio Showcase</h1>
                <p className='w-[600px] text-center text-[18px] font-normal'>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous leaming poth
                </p>
            </div>

        {/* button section */}
            <div className='flex mt-[40px] items-center justify-between bg-sky-400  shadow-lg shadow-sky-400/50 p-[10px] rounded-[10px] button'>
            <button className='flex flex-col gap-y-[4px] items-center justify-center w-[400px] p-[8px] cursor-pointer rounded-[8px] hover:bg-[rgba(245,245,245,0.68)] transition-transform ease-in-out transform duration-300 text-white hover:text-black text-[20px]' onClick={()=>setActiveSection("projects")}><IoIosCode /> Projects
            </button>
            <button className='flex flex-col gap-y-[4px] items-center justify-center w-[400px]  p-[8px] cursor-pointer rounded-[8px] hover:bg-[rgba(245,245,245,0.68)]   transition-transform ease-in-out transform text-white hover:text-black duration-300 text-[20px]' onClick={()=>setActiveSection("Certificate")}><LiaCertificateSolid /> Certificate
            </button>
            <button className='flex flex-col gap-y-[4px] items-center justify-center w-[400px]  p-[8px] cursor-pointer rounded-[8px] hover:bg-[rgba(245,245,245,0.68)] text-white hover:text-black  transition-transform ease-in-out transform duration-300 text-[20px]'onClick={() => setActiveSection("techstack")}><AiOutlineDropbox /> Tech Stack</button>
            </div>

        {/* body section 1 */}
        {activeSection == "projects" &&

         <div className='my-[20px] flex-wrap flex gap-[16px] project'>
            <div className='p-[10px] rounded-[10px] w-[400px] bg-[rgba(101,23,147,0.12)] '>
                <div className='w-[380px] h-[200px]  overflow-hidden'>
                    <img className='w-full h-full rounded-[10px] object-cover' src={image} alt={image} />
                </div>
                <div className='flex mt-[10px] flex-col gap-y-[8px]'>
                <h1 className='text-[18px] font-semibold'>Chatting App</h1>
                <p>AutoChat odolnost sends charms to Discord channels in a safe manner.</p>
                <div className='flex  items-center justify-between'>
                   <div className='flex cursor-pointer text-[18px] group items-center gap-x-[10px]'>
                      <a target='_blank' href="https://chattingsapp.netlify.app/">Live Link</a>
                      <span className='group-hover:translate-x-2 inline-block transform transition-transform duration-300 ease-in-out'><CiShare1 /></span>
                   </div>
                   <div className='flex gap-x-[2px] items-center bg-sky-400 text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold text-white'>
                    <NavLink to={'/Chatting_app'} className="inline-block items-center ">Details</NavLink>
                    <span className='inline-block font-bold group-hover:translate-x-2 transform transition-transform text-3xl duration-300 ease-in-out'><IoIosArrowRoundForward /></span>
                   </div>
                   
                </div>
                </div>
            </div>

            <div className='p-[10px] rounded-[10px] w-[400px] bg-[rgba(101,23,147,0.12)] '>
                <div className='w-[380px] h-[200px]  overflow-hidden'>
                    <img className='w-full h-full rounded-[10px] object-cover' src={image} alt={image} />
                </div>
                <div className='flex mt-[10px] flex-col gap-y-[8px]'>
                <h1 className='text-[18px] font-semibold'>Chatting App</h1>
                <p>AutoChat odolnost sends charms to Discord channels in a safe manner.</p>
                <div className='flex  items-center justify-between'>
                   <div className='flex cursor-pointer text-[18px] group items-center gap-x-[10px]'>
                      <a href="#">Live Link</a>
                      <span className='group-hover:translate-x-2 inline-block transform transition-transform duration-300 ease-in-out'><CiShare1 /></span>
                   </div>
                   <div className='flex gap-x-[2px] items-center bg-sky-400 text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold text-white'>
                    <NavLink className="inline-block items-center ">Details</NavLink>
                    <span className='inline-block font-bold group-hover:translate-x-2 transform transition-transform duration-300 ease-in-out'><IoIosArrowRoundForward /></span>
                   </div>
                   
                </div>
                </div>
            </div>

            <div className='p-[10px] rounded-[10px] w-[400px] bg-[rgba(101,23,147,0.12)] '>
                <div className='w-[380px] h-[200px]  overflow-hidden'>
                    <img className='w-full h-full rounded-[10px] object-cover' src={image} alt={image} />
                </div>
                <div className='flex mt-[10px] flex-col gap-y-[8px]'>
                <h1 className='text-[18px] font-semibold'>Chatting App</h1>
                <p>AutoChat odolnost sends charms to Discord channels in a safe manner.</p>
                <div className='flex  items-center justify-between'>
                   <div className='flex cursor-pointer text-[18px] group items-center gap-x-[10px]'>
                      <a href="#">Live Link</a>
                      <span className='group-hover:translate-x-2 inline-block transform transition-transform duration-300 ease-in-out'><CiShare1 /></span>
                   </div>
                   <div className='flex gap-x-[2px] items-center bg-sky-400 text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold text-white'>
                    <NavLink className="inline-block items-center ">Details</NavLink>
                    <span className='inline-block font-bold group-hover:translate-x-2 transform transition-transform duration-300 ease-in-out'><IoIosArrowRoundForward /></span>
                   </div>
                   
                </div>
                </div>
            </div>

            <div className='p-[10px] rounded-[10px] w-[400px] bg-[rgba(101,23,147,0.12)] '>
                <div className='w-[380px] h-[200px]  overflow-hidden'>
                    <img className='w-full h-full rounded-[10px] object-cover' src={image} alt={image} />
                </div>
                <div className='flex mt-[10px] flex-col gap-y-[8px]'>
                <h1 className='text-[18px] font-semibold'>Chatting App</h1>
                <p>AutoChat odolnost sends charms to Discord channels in a safe manner.</p>
                <div className='flex  items-center justify-between'>
                   <div className='flex cursor-pointer text-[18px] group items-center gap-x-[10px]'>
                      <a href="#">Live Link</a>
                      <span className='group-hover:translate-x-2 inline-block transform transition-transform duration-300 ease-in-out'><CiShare1 /></span>
                   </div>
                   <div className='flex gap-x-[2px] items-center bg-sky-400 text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold text-white'>
                    <NavLink className="inline-block items-center ">Details</NavLink>
                    <span className='inline-block font-bold group-hover:translate-x-2 transform transition-transform duration-300 ease-in-out'><IoIosArrowRoundForward /></span>
                   </div>
                   
                </div>
                </div>
            </div>

            <div className='p-[10px] rounded-[10px] w-[400px] bg-[rgba(101,23,147,0.12)] '>
                <div className='w-[380px] h-[200px]  overflow-hidden'>
                    <img className='w-full h-full rounded-[10px] object-cover' src={image} alt={image} />
                </div>
                <div className='flex mt-[10px] flex-col gap-y-[8px]'>
                <h1 className='text-[18px] font-semibold'>Chatting App</h1>
                <p>AutoChat odolnost sends charms to Discord channels in a safe manner.</p>
                <div className='flex  items-center justify-between'>
                   <div className='flex cursor-pointer text-[18px] group items-center gap-x-[10px]'>
                      <a href="#">Live Link</a>
                      <span className='group-hover:translate-x-2 inline-block transform transition-transform duration-300 ease-in-out'><CiShare1 /></span>
                   </div>
                   <div className='flex gap-x-[2px] items-center bg-sky-400 text-[18px] py-[2px] px-[15px] group text-white rounded-[5px] cursor-pointer font-semibold '>
                    <NavLink className="inline-block items-center ">Details</NavLink>
                    <span className='inline-block font-bold group-hover:translate-x-2 transform transition-transform duration-300 ease-in-out'><IoIosArrowRoundForward /></span>
                   </div>
                   
                </div>
                </div>
            </div>
            <div className='p-[10px] rounded-[10px] w-[400px] bg-[rgba(101,23,147,0.12)] '>
                <div className='w-[380px] h-[200px]  overflow-hidden'>
                    <img className='w-full h-full rounded-[10px] object-cover' src={image} alt={image} />
                </div>
                <div className='flex mt-[10px] flex-col gap-y-[8px]'>
                <h1 className='text-[18px] font-semibold'>Chatting App</h1>
                <p>AutoChat odolnost sends charms to Discord channels in a safe manner.</p>
                <div className='flex  items-center justify-between'>
                   <div className='flex cursor-pointer text-[18px] group items-center gap-x-[10px]'>
                      <a href="#">Live Link</a>
                      <span className='group-hover:translate-x-2 inline-block transform transition-transform duration-300 ease-in-out'><CiShare1 /></span>
                   </div>
                   <div className='flex gap-x-[2px] items-center bg-sky-400 text-[18px] text-white py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold'>
                    <NavLink className="inline-block items-center ">Details</NavLink>
                    <span className='inline-block font-bold group-hover:translate-x-2 transform transition-transform duration-300 ease-in-out'><IoIosArrowRoundForward /></span>
                   </div>
                   
                </div>
                </div>
            </div>
            
            
         </div>
        }
        {/* body section 2 */}
        {activeSection == "Certificate" &&
         <div className='mt-[40px] Certificate'>
            <div className='flex flex-wrap gap-[24px]'>
                <div className='bg-[rgba(101,23,147,0.12)]  p-[10px] w-[400px] rounded-[10px]'>
                    <div className='w-[380px] h-[300px] overflow-hidden'>
                       <img className='w-full h-full object-cover rounded-[10px]' src={certificate1} alt={certificate1} />
                    </div>
                </div>
                <div className='bg-[rgba(101,23,147,0.12)] p-[10px]  w-[400px] rounded-[10px]'>
                    <div className='w-[380px] h-[300px] overflow-hidden'>
                       <img className='w-full h-full object-cover rounded-[10px]' src={certificate1} alt={certificate1} />
                    </div>
                </div>
                <div className='bg-[rgba(101,23,147,0.12)] p-[10px]  w-[400px] rounded-[10px]'>
                    <div className='w-[380px] h-[300px] overflow-hidden'>
                       <img className='w-full h-full object-cover rounded-[10px]' src={certificate1} alt={certificate1} />
                    </div>
                </div>
                <div className='bg-[rgba(101,23,147,0.12)] p-[10px]  w-[400px] rounded-[10px]'>
                    <div className='w-[380px] h-[300px] overflow-hidden'>
                       <img className='w-full h-full object-cover rounded-[10px]' src={certificate1} alt={certificate1} />
                    </div>
                </div>
                <div className='bg-[rgba(101,23,147,0.12)] p-[10px]  w-[400px] rounded-[10px]'>
                    <div className='w-[380px] h-[300px] overflow-hidden'>
                       <img className='w-full h-full object-cover rounded-[10px]' src={certificate1} alt={certificate1} />
                    </div>
                </div>
                <div className='bg-[rgba(101,23,147,0.12)] p-[10px]  w-[400px] rounded-[10px]'>
                    <div className='w-[380px] h-[300px] overflow-hidden'>
                       <img className='w-full h-full object-cover rounded-[10px]' src={certificate1} alt={certificate1} />
                    </div>
                </div>
            </div>
         </div>
        }
        {activeSection == "techstack" &&

        <div className='mt-[40px] flex flex-wrap gap-[30px] stack'>
            <div className='bg-black flex flex-col  items-center p-[10px] rounded-[10px]'>
                <span className='text-[120px] text-yellow-500'><IoLogoHtml5 /></span>
                <p className='text-[20px] text-white'>HTML</p>
            </div>
            <div className='bg-black flex flex-col  items-center p-[10px] rounded-[10px]'>
                <span className='text-[120px] text-sky-400'><FaCss3 /></span>
                <p className='text-[20px] text-white'>CSS</p>
            </div>
            <div className='bg-black  flex flex-col  items-center p-[10px] rounded-[10px]'>
              <span className='text-[120px] text-yellow-500'><RiJavascriptFill /></span>
              <p className='text-[20px] text-white'>JavaScript</p>
            </div>
            <div className='bg-black flex flex-col  items-center p-[10px] rounded-[10px]'>
              <span className='text-[120px] text-pink-500'><RiTailwindCssFill />
              </span>
              <p className='text-[20px] text-white'>Tailwind Css</p>
            </div>
            <div className='bg-black flex flex-col  items-center p-[10px] rounded-[10px]'>
                <span className='text-[120px] text-blue-300'><FaReact />
                </span>
                <p className='text-[20px] text-white'>React Js</p>
            </div>
            <div className='bg-black flex flex-col  items-center p-[10px] rounded-[10px]'>
                <span className='text-[120px] text-sky-400'><SiVite /></span>
                <p className='text-[20px] text-white'>Vite</p>
            </div>
            <div className='bg-black flex flex-col  items-center p-[10px] rounded-[10px]'>
              <span className='text-[120px] text-green-400'><FaNode />
              </span>
              <p className='text-[20px] text-white'>Node js</p>
            </div>
            <div className='bg-black flex flex-col  items-center p-[10px] rounded-[10px]'>
              <span className='text-[120px] text-green-600'><SiMongodb />
              </span>
              <p className='text-[20px] text-white'>Mongo DB</p>
            </div>
            <div className='bg-black flex flex-col  items-center p-[10px] rounded-[10px]'>
                <span className='text-[120px] text-green-300'><SiExpress /></span>
                <p className='text-[20px] text-white'>Express Js</p>
            </div>
            <div className='bg-black flex flex-col  items-center p-[10px] rounded-[10px]'>
                <span className='text-[120px] text-yellow-300'><IoLogoFirebase />
                </span>
                <p className='text-[20px] text-white'>FireBase</p>
            </div>
        </div>

        }

      </div>
    </div>
  )
}

export default PortfolioShow
