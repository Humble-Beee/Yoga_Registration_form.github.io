import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css'
const Form = () => {
    const [isSubmitted,setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true);
    }
    return (
       <>
      
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://images.unsplash.com/photo-1526718583451-e88ebf774771?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' width="400" 
     height="500" alt='yoga' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
    );
};

export default Form;
