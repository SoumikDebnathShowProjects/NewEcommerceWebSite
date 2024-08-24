import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { Link } from 'react-router-dom'


const Login = () => {
// Storing email and password inside the usestates
const [showPassword,setPassword]=useState(false);
const [data,setData]=useState({
    email:"",
    password:""
})
//if the input is given handleOnCnange what will happen
const handleOnChange=(e)=>{
    const {name,value}=e.target;
    setData((prev)=>{
        return{
            ...prev,
            [name]:value
        }
        
    })

}
const handleSubmit=(e)=>{
    e.preventDefault();
}
console.log("data login:",data);




  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
              {/* login icon */}
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcons} alt='login icons'/>
                </div>
                {/* Signup form */}
                <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                    {/* email section */}
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type='email' 
                                    placeholder='enter email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                        </div>
                        {/* password section */}
                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type="password"
                                    placeholder='enter password'
                                    value={data.passwords}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'/>
                        
                            </div>


                        </div>
                        {/* the login button */}

                        <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                        Forgot password ?
                        </Link>
                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                        {/* if not sign up? sign up */}
                        <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
                </form>

            </div>

        </div>

    </section>
  )
}

export default Login
