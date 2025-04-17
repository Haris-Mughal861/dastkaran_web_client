import React from 'react'
import './auth.css';
import { TextField, Button } from '@mui/material';
import{Link} from 'react-router-dom'

function Register() {
  return (
    <div className='auth_main'>

        <div className ="auth_header">
            <span>Welcome</span>
            <span>Create New Account</span>
        </div>

        <div className='auth_container'>
            <TextField label='Name' type='text'size='small' fullWidth/>
            <TextField label='E-mail'type='email'size='small' fullWidth/>
            <TextField label='Password' type='password'size='small' fullWidth/>
           <Button variant='contained' fullWidth color='primary'>Register</Button>
           <div className='auth_options'>
            <Link to ='login'>already have an account?</Link>
           </div>



        </div>
      


    </div>
  )
}

export default Register
