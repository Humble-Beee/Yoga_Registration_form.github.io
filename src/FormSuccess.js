  
import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
     <div className='form-success'>Payment Successful!</div>
      
      <img src='https://images.unsplash.com/photo-1608404862898-ca7de5c2eb4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80' width="400" 
     height="500" alt='success-image' className='form-img-2' />
    </div>
  );
};

export default FormSuccess;