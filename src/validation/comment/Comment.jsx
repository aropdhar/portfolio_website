import React from 'react'
import * as Yup from 'yup';

const Comment = Yup.object({
    Name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(4, 'Must be 4 characters')
      .required('Please Enter Your Name'),
    Comment: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .min(4, 'Must be 4 characters')
      .required('Please Enter Your Comment'),
    
  })

export default Comment
