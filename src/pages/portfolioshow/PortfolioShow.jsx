import React, { useEffect, useState } from 'react'
import { AiOutlineDropbox } from 'react-icons/ai'
import { IoIosArrowRoundForward, IoIosCode } from 'react-icons/io'
import { LiaCertificateSolid } from 'react-icons/lia'
import image from '../../assets/p1.jpg'
import { CiShare1 } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import image2 from '../../assets/banner.png'
import ScrollReveal from "scrollreveal";

const PortfolioShow = () => {
    
    const [activeSection, setActiveSection] = useState("projects");

    

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
        ScrollReveal().reveal(".certifiate", {
          delay: 400,
          distance: "50px",
          origin: "top",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);

  return (
    <div className='my-[120px]' id='portfolioshow'>
      <div className='container'>
        {/* header section */}
            <div className='flex flex-col items-center justify-center gap-y-[10px]'>
                <h1 className='text-sky-500 text-4xl font-bold text-shadow-lg'>Portfolio Showcase</h1>
                <p className='w-[600px] text-center text-[18px] font-normal'>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous leaming poth
                </p>
            </div>

        {/* button section */}
            <div className='flex mt-[40px] items-center justify-between bg-sky-400 p-[10px] rounded-[10px]'>
            <button className='flex flex-col gap-y-[4px] items-center justify-center w-[400px]  p-[8px] cursor-pointer rounded-[8px] hover:bg-[rgba(245,245,245,0.68)] transition-transform ease-in-out transform duration-300 text-[20px]' onClick={()=>setActiveSection("projects")}><IoIosCode /> Projects
            </button>
            <button className='flex flex-col gap-y-[4px] items-center justify-center w-[400px]  p-[8px] cursor-pointer rounded-[8px] hover:bg-[rgba(245,245,245,0.68)]   transition-transform ease-in-out transform duration-300 text-[20px]' onClick={()=>setActiveSection("Certificate")}><LiaCertificateSolid /> Certificate
            </button>
            <button className='flex flex-col gap-y-[4px] items-center justify-center w-[400px]  p-[8px] cursor-pointer rounded-[8px] hover:bg-[rgba(245,245,245,0.68)]  transition-transform ease-in-out transform duration-300 text-[20px]'onClick={() => setActiveSection("techstack")}><AiOutlineDropbox /> Tech Stack</button>
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
                      <a href="#">Live Link</a>
                      <span className='group-hover:translate-x-2 inline-block transform transition-transform duration-300 ease-in-out'><CiShare1 /></span>
                   </div>
                   <div className='flex gap-x-[2px] items-center bg-[rgba(150,150,150,0.64)] text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold'>
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
                   <div className='flex gap-x-[2px] items-center bg-[rgba(150,150,150,0.64)] text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold'>
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
                   <div className='flex gap-x-[2px] items-center bg-[rgba(150,150,150,0.64)] text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold'>
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
                   <div className='flex gap-x-[2px] items-center bg-[rgba(150,150,150,0.64)] text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold'>
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
                   <div className='flex gap-x-[2px] items-center bg-[rgba(150,150,150,0.64)] text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold'>
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
                   <div className='flex gap-x-[2px] items-center bg-[rgba(150,150,150,0.64)] text-[18px] py-[2px] px-[15px] group rounded-[5px] cursor-pointer font-semibold'>
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
         <div className='certifiate'>
            certificate
         </div>
        }
      </div>
    </div>
  )
}

export default PortfolioShow
