import React, { useEffect } from 'react'
import Paragraph from '../../component/paragraph/Paragraph'
import { LuUserRound } from 'react-icons/lu'
import { MdOutlineCastConnected, MdOutlineMail } from 'react-icons/md'
import { FaGithub, FaInstagram, FaLocationArrow, FaRegMessage } from 'react-icons/fa6'
import { CiLinkedin } from 'react-icons/ci'
import { useFormik } from 'formik';
import Message from '../../validation/message/Message'
import { getDatabase, push, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import ScrollReveal from "scrollreveal";

const Contact2 = () => {
    
     useEffect(() => {
          ScrollReveal().reveal(".contact", {
            delay: 400,
            distance: "50px",
            origin: "left",
            duration: 800,
            easing: "ease-in-out",
            reset: true, // Resets the animation when scrolling back
          });
        }, []);
        useEffect(() => {
            ScrollReveal().reveal(".input", {
              delay: 400,
              distance: "50px",
              origin: "bottom",
              duration: 800,
              easing: "ease-in-out",
              reset: true, // Resets the animation when scrolling back
            });
          }, []);
          useEffect(() => {
            ScrollReveal().reveal(".input", {
              delay: 400,
              distance: "50px",
              origin: "bottom",
              duration: 800,
              easing: "ease-in-out",
              reset: true, // Resets the animation when scrolling back
            });
          }, []);
          useEffect(() => {
            ScrollReveal().reveal(".send", {
              delay: 400,
              distance: "50px",
              origin: "left",
              duration: 800,
              easing: "ease-in-out",
              reset: true, // Resets the animation when scrolling back
            });
          }, []);
          useEffect(() => {
            ScrollReveal().reveal(".conect", {
              delay: 400,
              distance: "50px",
              origin: "top",
              duration: 800,
              easing: "ease-in-out",
              reset: true, // Resets the animation when scrolling back
            });
          }, []);
        

    const db = getDatabase();

    const initialvalue = {
        Name: '',
        email: '',
        message: ''
      }

    const formik = useFormik({
        initialValues: initialvalue,
        validationSchema: Message,
        onSubmit: (values , actions) => {
            set(push(ref(db, 'message')), {
                Name: values.Name,
                Email: values.email,
                Message: values.message
            }).then(()=>{
                toast("Message Successfully...!!!");
                actions.resetForm()
            })
        },
      });

  return (
    <>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        <div className='bg-[rgba(226,211,211,0.63)]  p-[10px] rounded-[15px]  w-[440px] mt-[40px] contact'>
            <div className='flex flex-col gap-y-[8px]'>
                <h1 className='text-[20px] font-semibold text-sky-500'>Get Touch</h1>
                <Paragraph paratext="Have something to lacusa Send me a message ond let's talk" paraclass="w-[300px] font-medium"/>
            </div>
        <form onSubmit={formik.handleSubmit}>
            <div className='flex input mt-[10px] flex-col gap-y-[10px]'>
                <div className='flex px-[5px] py-[8px] items-center w-[420px] rounded-[10px] gap-x-[5px] bg-[rgba(167,166,166,0.49)] '>
                    <LuUserRound />
                    <input 
                    id="Name"
                    name="Name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Name}
                    className='w-[400px] rounded-[10px] py-[7px] px-[5px]' placeholder='Your Name'/>
                </div>
                {formik.touched.Name && formik.errors.Name ? (
                    <div>{formik.errors.Name}</div>
                ) : null}
                <div className='flex px-[5px] py-[8px] items-center w-[420px] rounded-[10px] gap-x-[5px] bg-[rgba(167,166,166,0.49)]'>
                    <MdOutlineMail />
                    <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className='w-[400px] rounded-[10px] py-[7px] px-[5px]'  placeholder='Your Email'/>
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <div className='flex px-[5px] py-[8px] items-start w-[420px] rounded-[10px] gap-x-[5px] bg-[rgba(167,166,166,0.49)]'>
                    <span className='mt-[11px]'><FaRegMessage /></span>
                    <textarea 
                    id="message"
                    name="message"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    className='w-[400px] rounded-[10px] py-[7px] px-[5px]' placeholder='Your Message'></textarea>
                </div>
                {formik.touched.message && formik.errors.message ? (
                    <div>{formik.errors.message}</div>
                ) : null}
            </div>
            <button type="submit" className='flex items-center justify-center gap-[10px] my-[20px] bg-sky-400 w-[410px] py-[10px] rounded-[10px] cursor-pointer text-white text-[18px] send'><FaLocationArrow /> Send Message
            </button>
        </form>

            <div className='bg-[rgba(226,211,211,0.73)] conect p-[10px] rounded-[10px]'>
                <h1 className='text-[20px] flex items-center gap-x-[8px] font-bold'><span className='text-sky-500'>-</span>Connect With Me</h1>
                <div className='flex my-[12px] items-center justify-center gap-x-[8px] bg-sky-500 py-[10px] text-white rounded-[10px] text-[18px]'>
                <MdOutlineCastConnected />
                <p>Let's Connect</p>
                </div>
                <div className='flex flex-wrap items-center gap-[20px]'>
                    <div className='flex items-center justify-center text-[18px] gap-x-[5px] bg-sky-500 rounded-[10px] w-[190px] text-white p-[12px]'>
                        <FaInstagram />
                        <a href="https://www.instagram.com/" target='_blank'>Instagram</a>
                    </div>
                    <div className='flex items-center justify-center text-[18px] gap-x-[5px] bg-sky-500 rounded-[10px] w-[190px] text-white p-[12px]'>
                        <FaGithub />
                        <a href="https://github.com/aropdhar" target='_blank'>Github</a>
                    </div>
                    <div  className='flex items-center justify-center text-[20px] gap-x-[5px] bg-sky-500 rounded-[10px] w-[400px] text-white p-[12px]'>
                    <CiLinkedin />
                    <a href="https://www.linkedin.com/in/arop-dhar-81b614219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>Linkedin</a>
                    </div>
                </div>
            </div>
        </div>

        
    </>
  )
}

export default Contact2
