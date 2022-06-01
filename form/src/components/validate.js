export const validate = (data , type) => {

    const errors={};

  
    /////////////////

    if(!data.email)
    {
        errors.email="email required"
    }
    else if(!/\S+@\S+\.\S+/.test(data.email))
    {
        errors.email="invalid email"
    }
    else{
        delete errors.email
    }
    ////////////////

    if(!data.password)
    {
        errors.password="password required"
    }
    else if(data.password.length<6){
        errors.password="at least be 6 character or more"
    }
    else 
    {
        delete errors.password
    }
    ///////////////////////////////


 
   

    if (type == "signUp")
    {
        if(!data.name.trim())
        {
            errors.name="userName required"
        }else{
            delete errors.name
        }

        if(!data.confirmPassword)
        {
            errors.confirmPassword="confirmPassword required"
        }
        else if (data.confirmPassword !== data.password)
        {
            errors.confirmPassword="do not match password"
        }
        else
        {
            delete errors.confirmPassword
        }
        ////////////////////////////////////
    
        if(data.isAccepted){
            delete errors.isAccepted
        }
        else{
            errors.isAccepted="Accept our role please"
        }
    

    }
     return errors;
}