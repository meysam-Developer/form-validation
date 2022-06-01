import React ,{useState , useEffect} from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {validate} from './validate'
import {notify} from './notify'
import styles from "./form.module.css"
import {Link} from 'react-router-dom'

function Form()
{
    const [data , setData] = useState({
       
        email:"",
        password:"",
     

    })
    
    const [errors, setErrors]=useState({});
    const [touched, setTouched]=useState({});
    
    useEffect(()=>{

       setErrors(validate(data));
      
        console.log(errors)

    },[data,touched])

    const changeHandler = event =>{
     
     
        
            setData({...data, [event.target.name]: event.target.value})
        

        
    }

    const focusHandler = event=>{
        setTouched ({...touched,[event.target.name]:true})
    }
    
    const submitHandler = event => {
        event.preventDefault();
        
        if(!Object.keys(errors).length)
        {
            notify("success", "your login successfully")
        }
        else{
            notify("error", "your data invalid")
        }
        
    }

    return(
        <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.form}>
            <h2> Login</h2>
            
            <div className={styles.filed}>
                <label>Email</label>
                <input
                 className={(errors.email && touched.email )? styles.emptyInput : ""}
                 type="email"
                  name="email"
                   value={data.email}
                    onChange={changeHandler}
                     onFocus={focusHandler}/>
                {errors.email && touched.email && <span>{errors.email}</span>}

            </div>
            <div className={styles.filed}>
                <label>Password</label>
                <input
                 className={(errors.password && touched.password )? styles.emptyInput : ""}
                 type="password" 
                 name="password"
                  value={data.password}
                   onChange={changeHandler}  
                   onFocus={focusHandler}/>
                {errors.password && touched.password && <span>{errors.password}</span>}
 
            </div>
          
            
            <div className={styles.filedBtn}>
                <Link to="/signUp">Sign up</Link>
                <button>Login </button>
            </div>
        </form>
        <ToastContainer />
        </div>

    );
}

export default Form;