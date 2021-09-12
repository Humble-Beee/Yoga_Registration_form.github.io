export default function validateInfo(values) {
    let errors = {};

    if(!values.username.trim()) {
        errors.username = 'Username required';
    }
    
    if(!values.email) {
        errors.email = 'email required';
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email = 'Email address id invalid';
    }
    if(!values.phone){
        errors.phone = 'phone number required'
    }else if(values.phone.length<10 || values.phone.length>10){
         errors.phone = 'phone number must have size 10!'
    }
    if(!values.age){
        errors.age = 'Age required';
    }else if(values.age<18 || values.age>65){
        errors.age = 'Age should be between 18 and 65 inclusive'
    }

    if(!values.password) {
        errors.password = 'password is required';
    }else if(values.password.length < 5){
        errors.password = 'Password needs to be 5 character or more';
    }

    if(!values.password2){
        errors.password = 'password is required';
    }else if(values.password!==values.password2){
        errors.password = 'password do not match';
    }
    return errors;
}