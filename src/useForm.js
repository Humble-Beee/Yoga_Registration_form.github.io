import {useState, useEffect} from 'react'

const useForm =(callback,validate)=>{
    const [values, setValues] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
        age: '',
        time: ''
    });
    const [errors,setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        });
    };

   const handleSubmit = async (e) => {
       e.preventDefault();

       setErrors(validate(values));
       setIsSubmitting(true);
      
       const {username,email,phone,password,password2,age,time} = values;

      const res = await fetch("https://yoga-d49d0-default-rtdb.firebaseio.com/userdata.json",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
              username,
              email,
              phone,
              password,
              password2,
              age,
              time,
          })
      });
      

     
   }
   

   useEffect(()=>{
       if(Object.keys(errors).length === 0 && isSubmitting){
           
           callback()
       }
   },[errors])
    return {handleChange,values,handleSubmit,errors };
};

export default useForm;