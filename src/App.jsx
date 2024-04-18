
import './App.css'
import { TextField } from '@mui/material'
import React,  { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // js code

  const [Register,setRegister]=useState({
    Username:'',
    Email:'',
    Password:'',
    ConfirmPassword:''
  })


  const [error,setError]=useState({})



  const submit=(e)=>{
    e.preventDefault()
    console.log(Register);

    const validateError={}

    if(!Register.Username){
      validateError.Username='Username is required'
    }else if(!/^[a-zA-Z0-9]{4,}$/.test(Register.Username)){
      validateError.Username='Username should contain at least 4 character'
    }

    if(!Register.Email){
      validateError.Email='Email is required'
    }else if(  !/^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/.test(Register.Email )){
      validateError.Email='Invalid Email'
    }

    if(!Register.Password){
      validateError.Password='Password is required'
    }else if( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(Register.Password)){
      validateError.Password='Must contain at least one number and one uppercase and lowercase letter, and at least 8  characters'
    }

    if(!Register.ConfirmPassword){
      validateError.ConfirmPassword='Confirm password is required'
    }else if(Register.ConfirmPassword !== Register.Password){
      validateError.ConfirmPassword='Password not match'
    }

    setError(validateError)

   if(Object.keys(validateError).length===0){
    toast.success('Registered Successfully')
   }

  }

  const handleInput=(e)=>{
      const {name,value}=e.target 
      console.log(name)
      console.log(value);

      setRegister({...Register,[name]:value})

  }



  return (
    <>
  
    
    <div className="container-fluid ">
    

      <div className="row">

        <div className="col-md-4"></div>

        <div className="col-md-4">

        <div className=' d-flex align-items-center justify-content-center' style={{height:'100vh',}}>
        <div className=' form-bg d-flex align-items-center justify-content-center p-5 rounded flex-column' style={{width:'500px'}} >
        <h1 className='text-primary'>Sign-Up</h1>

        <form onSubmit={submit} className='w-100'>
        <div className='mb-4 mt-4'>
        <TextField id="outlined-basic" label="Username" variant="outlined" className='w-100' required
         name='Username' 
         value={Register.Username}
         onChange={(e)=>handleInput(e)}
       
         />
         {error.Username && <p style={{ color: 'red' }}>{error.Username}</p>}

      </div>

        <div className='mb-4'>
        <TextField id="outlined-basic" label="Email" variant="outlined" className='w-100' required
         name='Email' 
         value={Register.Email}
         type='email'
        onChange={(e)=>handleInput(e)}
       
        />
          {error.Email && <p style={{ color: 'red' }}>{error.Email}</p>}


  
        </div>

        <div className='mb-4'>
        <TextField id="outlined-basic" label="Password" variant="outlined"   className='w-100'  required
        name='Password' 
        type='password'
        value={Register.Password} 
        onChange={(e)=>handleInput(e)} 
        />

{error.Password && <p style={{ color: 'red' }}>{error.Password}</p>}
  
        </div>

        <div className='mb-4'>
        <TextField id="outlined-basic" label="Confirm_Password" variant="outlined" className='w-100' required
         name='ConfirmPassword'
          value={Register.ConfirmPassword}  
          onChange={(e)=>handleInput(e)}
          type='password'
         />

{error.ConfirmPassword && <p style={{ color: 'red' }}>{error.ConfirmPassword}</p>}


        </div>

        <div className=' d-flex align-items-center justify-content-center flex-column'>
          <p>Already have an account? <span style={{textDecoration:'underline',color:"blue"}}>Sign in</span></p>
          <button className=' btn btn-primary border rounded  p-2' type='submit'>Sign Up</button>
        </div>
         </form>

       </div>
      
          </div>
        </div>

        <div className="col-md-4"></div>
      </div>
    </div>
    
    <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
  }

export default App
