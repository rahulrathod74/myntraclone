
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from '../firebase/Setup'
import { signInWithPhoneNumber } from 'firebase/auth'
import Navbar from './Navbar'
const Login = () => {
    const [phone,setPhone]=useState("")
    const [user,setUser]=useState(null)
   
  return (
    <>
    <Navbar/>
    <div className='bg-rose-50 h-screen flex flex-col justify-center items-center'>
        <div className='h-96 w-96 bg-white flex flex-col justify-center items-center'>
            <h1 className='font-bold text-lg'>Login <span className='font-normal text-sm'> or </span> SignUp</h1>
            <div className='mt-4 text-xs text-gray-400'>
            <PhoneInput
            country={'in'}
            value={phone}
            onChange={phone => setPhone(phone )}
            placeholder='Mobile Number'
            buttonStyle={{backgroundColor:"white"}}
            inputStyle={{width:"320px"}}
            />
            </div>
           
            <h1 className='text-xs text-gray-400'>By clicking continue,you can <span className='text-rose-500 font-bold'> Login to this myntra clone</span></h1>
            <button class="mt-4 bg-rose-500 text-white w-80 font-bold py-2 px-4 text-sm">
            CONTINUE
            </button>
            <div  >
        
            </div>
            <input  className="border border-spacing-1   text-gray-900 font-normal outline-none text-sm rounded-sm   block w-80 p-2.5 mt-2 "  placeholder="Enter Otp" required />
            <button class="mt-4 bg-rose-500 text-white w-80 font-bold py-2 px-4 text-sm">
            Verify OTP
            </button>
            <h1 className='mt-3 text-xs text-gray-400'>Have trouble in? <span className='text-rose-500 font-bold'> Click continue</span></h1>
        </div>
    </div>
    </>
  )
}

export default Login