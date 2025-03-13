import React from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrump from '../../breacrump/BreadCrump'
import { GoArrowLeft } from 'react-icons/go'
import Paragraph from '../../component/paragraph/Paragraph'
import { FaCss3, FaGithub, FaHtml5 } from 'react-icons/fa6'
import { CiShare1, CiStar } from 'react-icons/ci'
import { MdOutlineCode } from 'react-icons/md'
import { IoCodeSlash, IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5'
import { RiReactjsFill, RiStopLargeFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiReactrouter } from 'react-icons/si'
import banner from '../../assets/p1.jpg'

const Details = () => {
  return (
    <div className='my-[40px]'>
      <div className='container'>
        <div className='flex items-center justify-between'>
            <div>
              <div className='flex items-center  gap-x-[5px]'>
                <div className='flex bg-[#15112a] px-[12px] text-white mt-[22px] rounded-[10px] cursor-pointer  shadow-lg shadow-blue-500/50 py-[5px] gap-x-[8px] items-center'>
                  <GoArrowLeft />
                  <NavLink to={'/home'} className="inline-block">Back</NavLink>
                </div>
                <div>
                    <BreadCrump/>
                </div>
              </div>
              <h1 className='header'>Chatting_App</h1>
              <Paragraph paratext=" This is a real-time chatting app built using modern web technologies. 
              It allows users to send and receive messages instantly. 
              The backend is powered by Node.js and Express.js, ensuring fast communication. 
              Firebase or MongoDB is used for real-time database management." paraclass="mt-[30px] w-[420px] leading-[35px] text-justify" />
              <div className='flex mt-[20px] items-center gap-x-[20px]'>
                 <div className='flex items-center py-[10px] px-[20px] rounded-[12px] cursor-pointer text-white bg-[#18192d] gap-x-[10px]'>
                    <CiShare1 />
                    <a href="#">Live Demo</a>
                 </div>
                 <div className='flex items-center py-[10px] px-[20px] cursor-pointer rounded-[12px] text-white bg-[#18192d] gap-x-[10px]'>
                    <FaGithub />
                    <a href="#">Github</a>
                 </div>
              </div>
              <div className='flex mt-[20px] items-center gap-x-[15px]'>
                <span className='inline-block text-[25px]'><IoCodeSlash /></span>
                <p className='text-[25px] font-bold'>Technology Used</p>
              </div>
              <div className='flex mt-[10px] items-center gap-[12px] flex-wrap w-[580px]'>
                <div className='bg-[#19082c] px-[20px] py-[10px] text-[#686492] flex items-center gap-x-[12px] rounded-[12px]'>
                  <FaHtml5 />
                  <h1>HTML</h1>
                </div>
                <div className='bg-[#19082c] px-[20px] py-[10px] text-[#686492] flex items-center gap-x-[12px] rounded-[12px]'>
                  <FaCss3 />
                  <h1>CSS</h1>
                </div>
                <div className='bg-[#19082c] px-[20px] py-[10px] text-[#686492] flex items-center gap-x-[12px] rounded-[12px]'>
                  <IoLogoJavascript />
                  <h1>JavaScript</h1>
                </div>
                <div className='bg-[#19082c] px-[20px] py-[10px] text-[#686492] flex items-center gap-x-[12px] rounded-[12px]'>
                  <RiReactjsFill />
                  <h1>React Js</h1>
                </div>
                <div className='bg-[#19082c] px-[20px] py-[10px] text-[#686492] flex items-center gap-x-[12px] rounded-[12px]'>
                  <IoLogoFirebase />
                  <h1>Firebase</h1>
                </div>
                <div className='bg-[#19082c] px-[20px] py-[10px] text-[#686492] flex items-center gap-x-[12px] rounded-[12px]'>
                  <RiTailwindCssFill />
                  <h1>Tailwind Css</h1>
                </div>
                <div className='bg-[#19082c] px-[20px] py-[10px] text-[#686492] flex items-center gap-x-[12px] rounded-[12px]'>
                  <SiReactrouter />
                  <h1>React Router Dom</h1>
                </div>
              </div>
            </div>
            <div className='flex mt-[40px] flex-col items-center gap-y-[20px]'>
               <div className='w-[450px] h-[250px] overflow-hidden'>
                  <img className='w-full h-full rounded-[20px] object-cover' src={banner} alt={banner}/>
               </div>
               <div className='bg-[#09061b] flex flex-col gap-y-[12px] w-[450px] rounded-[20px] p-[15px]'>
                <div className='flex font-bold text-[18px] items-center gap-x-[8px] text-white'>
                  <span className='text-[#7a8942]'><CiStar /></span>
                  <h1>Key Features</h1>
                </div>
                  <div className='flex text-white items-center gap-x-[10px]'>
                    <span className='inline-block w-[15px] h-[12px] bg-[#fff] rounded-[50%]'></span>
                    <Paragraph paratext="This is a real-time chatting application built with modern web technologies." paraclass="text-[#706e7c]"/>
                  </div>
                  <div className='flex text-white items-center gap-x-[10px]'>
                    <span className='inline-block w-[15px] h-[12px] bg-[#fff] rounded-[50%]'></span>
                    <Paragraph paratext="Users can send and receive messages instantly with a seamless experience." paraclass="text-[#706e7c]"/>
                  </div>
                  <div className='flex text-white items-center gap-x-[10px]'>
                    <span className='inline-block w-[15px] h-[12px] bg-[#fff] rounded-[50%]'></span>
                    <Paragraph paratext="The app uses **React** for the frontend, ensuring a dynamic and responsive UI." paraclass="text-[#706e7c]"/>
                  </div>
                  <div className='flex text-white items-center gap-x-[10px]'>
                    <span className='inline-block w-[15px] h-[12px] bg-[#fff] rounded-[50%]'></span>
                    <Paragraph paratext="The backend is powered by **Node.js** and **Express.js** for handling server requests." paraclass="text-[#706e7c]"/>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details
