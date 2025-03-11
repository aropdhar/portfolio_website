import Heading from '../../component/heading/Heading'
import { GiButterflyFlower } from 'react-icons/gi'
import Paragraph from '../../component/paragraph/Paragraph'
import { TypeAnimation } from 'react-type-animation'
import { LuCodeXml } from 'react-icons/lu'
import { CgProfile } from 'react-icons/cg'
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { IoCode } from 'react-icons/io5'
import { LiaCertificateSolid } from 'react-icons/lia'

const About = () => {
    useEffect(() => {
        ScrollReveal().reveal(".about", {
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
        ScrollReveal().reveal(".download", {
          delay: 400,
          distance: "50px",
          origin: "bottom",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      useEffect(() => {
        ScrollReveal().reveal(".view", {
          delay: 400,
          distance: "50px",
          origin: "top",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      useEffect(() => {
        ScrollReveal().reveal(".about1", {
          delay: 400,
          distance: "50px",
          origin: "top",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      useEffect(() => {
        ScrollReveal().reveal(".about2", {
          delay: 400,
          distance: "50px",
          origin: "bottom",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      useEffect(() => {
        ScrollReveal().reveal(".about3", {
          delay: 400,
          distance: "50px",
          origin: "right",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
  return (
    <div className='my-[120px]' id='about'>
      <div className='container'>
        <div className='flex flex-col gap-y-[5px] items-center justify-center'>
            <Heading headtext='About Me' headclass='text-[40px] text-sky-500 font-semibold'/>
            <div className='flex items-center gap-x-[10px]'>
               <span className='inline-block text-2xl'><GiButterflyFlower /></span> 
               <Paragraph paratext="Transforming ideas into digital experiences" paraclass="text-[18px] font-medium"/>
               <span className='inline-block text-2xl'><GiButterflyFlower /></span> 
            </div>
        </div>

        <div className='flex mt-[30px] items-center justify-between'>
            <div className='flex flex-col gap-y-[12px] about'>
               <h1 className='text-[35px] font-bold text-sky-500'>Hello, I am</h1>
               <TypeAnimation
                    sequence={['Arop Sutra Dhar', 800, 'Front-End Developer', 800]}
                    style={{ fontSize: '35px'  }}
                    repeat={Infinity}
                />
               <Paragraph paratext="A Computer Science & Engineering student who is interested in Mern-Stack Developer And Front-End development. I focus on creating engaging digital experiences and always strive to provide the best solutions in every project." paraclass="w-[600px] text-justify leading-[30px]"/>
               <div className='flex items-center gap-x-[10px]'>
                    <div className='download'>
                        <a className='bg-sky-400 py-[10px] rounded-[8px] px-[20px] text-[18px] inline-block text-white' href="/Arop Resume.pdf" download="Arop Resume.pdf">
                            Download CV
                        </a>
                    </div>
                    <div className='view border flex items-center gap-x-[8px] py-[10px] px-[20px]  border-sky-600 rounded-[10px]'>
                        <span className='inline-block cursor-pointer text-[18px]'><LuCodeXml /></span>
                        <a href="#" className='inline-block text-[18px]'>
                        View Project</a>
                    </div>
               </div>
            </div>
            <div className='image'>
              <span className='inline-block text-white font-normal bg-linear-to-r rounded-[50%] from-cyan-500 to-blue-500 bg-indigo-500 shadow-lg shadow-indigo-500/50 text-[260px]'><CgProfile /></span>
            </div>
        </div>

        <div className='flex  items-center mt-[30px] justify-between'>
           <div className='bg-blue-300 shadow-lg shadow-blue-500/50 flex items-start justify-between rounded-[15px] w-[400px] p-[10px] about1'>
            <div className='flex flex-col gap-y-[10px]'>
                <span className='flex items-center justify-center itw w-[50px] text-[22px] rounded-[50%] h-[50px] bg-[rgba(245,245,245,0.68)] shadow-lg shadow-blue-500/50'><IoCode /></span>
                <h4 className='text-[18px] font-semibold'>Total Project</h4>
                <Paragraph paratext="Refers to creating a React project."/>
            </div>
             <div>
                <span className='text-[35px]'>7</span>
             </div>
           </div>
           <div className='bg-blue-300 shadow-lg shadow-blue-500/50 flex items-start justify-between rounded-[15px] w-[400px] p-[10px] about2'>
             <div className='flex flex-col gap-y-[10px]'>
                <span className='flex items-center justify-center itw w-[50px] text-[22px] rounded-[50%] h-[50px] bg-[rgba(245,245,245,0.68)] shadow-lg shadow-blue-500/50'><LiaCertificateSolid /></span>
                <h4 className='text-[18px] font-semibold'>Certificate</h4>
                <Paragraph paratext="Instruction to get the certificate."/>
             </div>
             <div>
                <span className='text-[35px]'>3</span>
             </div>
           </div>
           <div className='bg-blue-300 shadow-lg shadow-blue-500/50 flex items-start justify-between rounded-[15px] w-[400px] p-[10px] about3'>
              <div className='flex flex-col gap-y-[10px]'>
               <span className='flex items-center justify-center itw w-[50px] text-[22px] rounded-[50%] h-[50px] bg-[rgba(245,245,245,0.68)] shadow-lg shadow-blue-500/50'><LiaCertificateSolid /></span>
               <h4 className='text-[18px] font-semibold'>Years Of Experience</h4>
               <Paragraph paratext="Front-End Expertise Gained"/>
              </div>
             <div>
                <span className='text-[35px]'>1.5</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default About
