import React ,{useState , useEffect} from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {validate} from './validate'
import {notify} from './notify'
import { Link } from "react-router-dom";
import styles from "./form.module.css"

function Form()
{
    const [data , setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false

    })
    
    const [errors, setErrors]=useState({});
    const [touched, setTouched]=useState({});
    
    useEffect(()=>{

       setErrors(validate(data, "signUp"));
      
        console.log(errors)

    },[data,touched])

    const changeHandler = event =>{
        if(event.target.name==="isAccepted")
        {
            setData({...data, [event.target.name]: event.target.checked })
        }
        else
        {
            setData({...data, [event.target.name]: event.target.value})
        }

        
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
            <h2> Sign Up</h2>
            <div className={styles.filed}>
                <label>Name</label>
                <input
                 className={(errors.name && touched.name )? styles.emptyInput : ""}
                 type="text"
                  name="name"
                   value={data.name} 
                    onChange={changeHandler}
                     onFocus={focusHandler}/>
                {errors.name && touched.name &&<span>{errors.name}</span>}
            </div>
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
            <div className={styles.filed}>
                <label>ConfirmPassword</label>
                <input
                 className={(errors.confirmPassword && touched.confirmPassword )? styles.emptyInput : ""}
                 type="password" 
                 name="confirmPassword" 
                 value={data.confirmPassword} onChange={changeHandler}  onFocus={focusHandler}/>
                {errors.confirmPassword &&  touched.confirmPassword &&<span>{errors.confirmPassword}</span>}
                
            </div>
            <div className={styles.checkfiled} >
                <label>Accepted</label>
                <input type="checkbox" name="isAccepted" value={data.isAccepted } onChange={changeHandler}  onFocus={focusHandler}/>
                {errors.isAccepted &&  touched.isAccepted && <span>{errors.isAccepted}</span>}

            </div>
            <div className={styles.filedBtn}>
                <Link to="/login">login</Link>
                <button>Sign Up</button>
            </div>
        </form>
        <ToastContainer />
        </div>

    );
}

export default Form;