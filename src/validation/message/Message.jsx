import React from 'react'
import * as Yup from 'yup';

let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Message =  Yup.object({
    Name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(4 , 'minimum 4 character')
      .required('Please Enter Your Name'),
    email: Yup.string()
      .email('Invalid email address')
      .matches(emailregex , 'Please valid email address example@gmail.com')
      .required('Please Enter Your Email Address'),
    message: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .min(4, 'minimum 4 character less')
      .required('Please Enter Your Message'),
    
  })

export default Message
