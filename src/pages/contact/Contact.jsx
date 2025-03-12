import React, { useEffect, useState } from 'react'
import Paragraph from '../../component/paragraph/Paragraph'
import { MdOutlineCastConnected, MdOutlineMail } from 'react-icons/md'
import { LuUserRound } from 'react-icons/lu'
import { FaRegMessage } from 'react-icons/fa6'
import { FaGithub, FaInstagram, FaLocationArrow, FaRegComment } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { useFormik } from 'formik';
import Comment from '../../validation/comment/Comment'
import { getDatabase, push, ref, set , onValue} from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import Contact2 from './Contact2'
import ScrollReveal from "scrollreveal";

const Contact = () => {
    
    useEffect(() => {
        ScrollReveal().reveal(".contact", {
          delay: 400,
          distance: "50px",
          origin: "top",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);
      
      useEffect(() => {
        ScrollReveal().reveal(".header", {
          delay: 400,
          distance: "50px",
          origin: "bottom",
          duration: 800,
          easing: "ease-in-out",
          reset: true, // Resets the animation when scrolling back
        });
      }, []);

    const db = getDatabase();
    const [image , setImage] = useState(null);
    const [commentarr , setCommentarr] = useState([]);

    useEffect(()=>{
        const CommentCountRef = ref(db, 'comments');
        onValue(CommentCountRef, (snapshot) => {      
            let arr = [];
           snapshot.forEach((item)=>{
               arr.push({...item.val() , id:item.key});
           })
           setCommentarr(arr)
        });
        
    },[]);
    

    const handleimage = (event) =>{
        const file = event.target.files[0];
        if(file){
            setImage(URL.createObjectURL(file));
        }
        
    }
    
    const intialvalue = {
        Name: '',
        Comment: ''
    }
   

    const formik = useFormik({
        initialValues: intialvalue,
        validationSchema: Comment,
        onSubmit: (values , actions) => {
          
          set(push(ref(db, 'comments')), {
              Name: values.Name,
              Comment: values.Comment
          }).then(()=>{
            toast("Comment Successfully....!!");
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
    
        <div className='mb-[120px]' id='contact'>
            <div className='container'>
        {/* header section */}
            <div className='flex header flex-col  items-center justify-center gap-y-[10px]'>
                <h1 className='text-[40px] bg-gradient-to-r from-purple-400 via-pink-500 to-sky-500 bg-clip-text text-transparent'>Contact Me</h1>
                <Paragraph paratext="Oct a question? Send me a message and ill get back to you so" paraclass="text-[18px]"/>
            </div>
        {/* body section */}
            <div className='flex  items-center justify-between'>
                <Contact2/>
                <div className='bg-[rgba(226,211,211,0.63)] contact   p-[10px] rounded-[15px] overflow-y-scroll scroll-smooth hide-scrollbar w-[740px] h-[652px] mt-[40px]'>
                    <div className='flex items-center gap-x-[8px]'>
                        <FaRegComment />

                        <h1 className='text-[20px] font-semibold text-sky-500'>Comment{`(${commentarr.length})`}</h1>
                    </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex mt-[10px] flex-col gap-y-[10px]'>
                        <label htmlFor="">Name</label>
                        <div className='flex px-[5px] py-[8px] items-center w-[720px] rounded-[10px] gap-x-[5px] bg-[rgba(167,166,166,0.49)]'>
                            <LuUserRound />
                                <input id="Name"
                                name="Name"
                                type="text" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.Name}
                                placeholder='Your Name' 
                                className='w-[710px] rounded-[10px] py-[7px] px-[5px]'/>  
                        </div>
                        {formik.touched.Name && formik.errors.Name ? (
                                <div className='text-red-500'>{formik.errors.Name}</div>
                        ) : null}
                        <label htmlFor="">Comment</label>
                        <div className='flex px-[5px] py-[8px] items-start w-[720px] rounded-[10px] gap-x-[5px] bg-[rgba(167,166,166,0.49)]'>
                            <span className='mt-[11px]'><FaRegMessage /></span>
                            <textarea id="Comment"
                            name="Comment"
                            type="text"  
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Comment}
                            className='w-[710px] rounded-[10px] py-[7px] px-[5px]' placeholder='Your Comment'></textarea>
                        </div>
                        {formik.touched.Comment && formik.errors.Comment ? (
                                <div className='text-red-500'>{formik.errors.Comment}</div>
                        ) : null}
                        <div className="flex flex-col items-center justify-center p-5">
                            <label className="cursor-pointer bg-blue-500 w-[720px] flex items-center justify-center text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
                                Upload Image
                                <input type="file" className="hidden" onChange={handleimage}/>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className='flex items-center justify-center gap-[10px] my-[20px] bg-sky-400 w-[720px] py-[10px] rounded-[10px] cursor-pointer text-white text-[18px]'><FaLocationArrow /> Post Comment
                    </button>
                </form>
                    
                        <div className='flex flex-col gap-y-[12px]'>
                        {commentarr.map((item,index)=>(
                            <div key={index} className='flex p-[10px] rounded-[10px] bg-red-200  items-center gap-x-[10px]'>
                            <div className='w-[60px] h-[60px] overflow-hidden bg-amber-400 rounded-[50%]'>
                                <img className='w-full h-full object-cover rounded-[50%] flex items-center justify-center' src={image} alt="Not found" />
                            </div>
                            <div className='flex flex-col gap-y-[10px]'>
                                <h1>{item.Name}</h1>
                                <p className='truncate'>{item.Comment}</p>
                            </div>
                        </div> 
                        ))

                        }                     
                        </div>
                </div>
                
            </div>
            </div>
        </div>
    </>
  )
}

export default Contact
