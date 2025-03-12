import React from 'react'
import { useEffect } from "react";
import { FaGithub } from 'react-icons/fa6';
import { IoCodeSlashSharp } from 'react-icons/io5';
import { LuUserRound } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import ScrollReveal from "scrollreveal";

const WelcomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      // Redirect to home page after 3 seconds
    const timer =  setTimeout(() => {
        navigate("/home");
      }, 4000);

      return () => clearTimeout(timer);
    }, [navigate]);
    
    useEffect(() => {
        ScrollReveal().reveal(".social1", {
          delay: 400,
          distance: "50px",
          origin: "top",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      useEffect(() => {
        ScrollReveal().reveal(".social2", {
          delay: 400,
          distance: "50px",
          origin: "bottom",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      useEffect(() => {
        ScrollReveal().reveal(".social3", {
          delay: 400,
          distance: "50px",
          origin: "right",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      useEffect(() => {
        ScrollReveal().reveal(".portfolio", {
          delay: 400,
          distance: "50px",
          origin: "left",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      useEffect(() => {
        ScrollReveal().reveal(".type", {
          delay: 400,
          distance: "50px",
          origin: "left",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      useEffect(() => {
        ScrollReveal().reveal(".type", {
          delay: 400,
          distance: "50px",
          origin: "bottom",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);

    return (
      <div className="flex justify-center items-center h-screen bg-[#130832] text-white">
        <div className='flex flex-col items-center justify-center gap-y-[20px]'>
            <div className='flex social items-center gap-x-[15px]'>
                <span className='social1 bg-violet-950 shadow-lg shadow-violet-500/50 flex items-center justify-center w-[50px] h-[50px] rounded-[50%] p-[5px]  text-[22px]'><IoCodeSlashSharp />
                </span>
                <span className='social2 bg-violet-950 shadow-lg shadow-violet-500/50 flex items-center justify-center w-[50px] h-[50px] rounded-[50%] p-[5px]  text-[22px]'><LuUserRound /></span>

                <span className='social3 bg-violet-950 shadow-lg shadow-violet-500/50 flex items-center justify-center w-[50px] h-[50px] rounded-[50%] p-[5px]  text-[22px]'><FaGithub />
                </span>
            </div>
            <h1 className="text-5xl portfolio text-center leading-[60px] font-bold flex flex-col animate-pulse">Welcome to My <span className='inline-block text-sky-500'>Portfolio Website.</span></h1>
            <div className='bg-[#160a3a] type'>
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                500,
                'www.aropdhar.com', // initially rendered starting point
                1000,
                'www.aropsutradhar.org',
                1000,
                ]}
                speed={50}
                style={{ fontSize: '2em' ,backgroundColor: "#1e0b42" ,color: "#3f2c8c" ,borderRadius: "20px" , paddingTop: "4px",paddingBottom: "4px",paddingLeft: "10px" , paddingRight: "10px"}}
                repeat={Infinity}
            />

            </div>
        </div>
        
      </div>
    );
}

export default WelcomePage
