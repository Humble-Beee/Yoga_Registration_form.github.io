import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleChange, values,handleSubmit,errors } = useForm(submitForm,validate);

    return (
        <div className='form-content-right'>
         <form className='form' onSubmit={handleSubmit}>
           <h1>Ragister</h1>
           <div className='form-inputs'>
            <label htmlFor='username'
            className='form-label'>
            Username
            </label>
            <input
            id='username'
            type='text'
            name='username'
            className='form-input'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            autoComplete="off"
            required
            />
            {errors.username && <p>{errors.username}</p>}
           </div>
        
           <div className='form-inputs'>
            <label htmlFor='email'
            className='form-label'>
            Email
            </label>
            <input
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            autoComplete="off"
            required
            />
            {errors.email && <p>{errors.email}</p>}
           </div>

           <div className='form-inputs'>
            <label htmlFor='phone'
            className='form-label'>
            Phone Number
            </label>
            <input
            id='phone'
            type='number'
            name='phone'
            className='form-input'
            placeholder='Enter your phone number'
            value={values.phone}
            onChange={handleChange}
            autoComplete="off"
            required
            />
            {errors.phone && <p>{errors.phone}</p>}
           </div>


           <div className='form-inputs'>
            <label htmlFor='password'
            className='form-label'>
            Password
            </label>
            <input
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            autoComplete="off"
            required
            />
            {errors.password && <p>{errors.password}</p>}
           </div>

           <div className='form-inputs'>
            <label htmlFor='password2'
            className='form-label'>
            Conform Password
            </label>
            <input
            id='password2'
            type='password'
            name='password2'
            className='form-input'
            placeholder='Enter your password'
            value={values.password2}
            onChange={handleChange}
            autoComplete="off"
            required
            />
            {errors.password2 && <p>{errors.password2}</p>}
           </div>

           <div className='form-inputs'>
            <label htmlFor='age'
            className='form-label'>
            Age
            </label>
            <input
            id='age'
            type='number'
            name='age'
            className='form-input'
            placeholder='Enter your age'
            value={values.age}
            onChange={handleChange}
            autoComplete="off"
            required
            />
            {errors.age && <p>{errors.age}</p>}
           </div>
           
           <div className='form-inputs' >
            <label htmlFor='time'
            className='form-label'>
            Class Schedule
            </label>
              <select className='select_container'>
              <option selected value="6-7 AM">6-7 AM</option>
              <option value="7-8 AM">7-8 AM</option>
              <option value="8-9 AM">8-9 AM</option>
              <option value="5-6 PM">5-6 PM</option>

            </select>
           
           </div>
           <button className='form-input-btn'
           type='submit'>
           Pay Rs.500
           </button>
           
        </form>
        </div>
    );
};

export default FormSignup;
