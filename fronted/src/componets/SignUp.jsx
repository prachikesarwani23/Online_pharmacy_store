import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
function SignUp() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    
    <>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
  <div className="modal-box ">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link  to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold  text-pink-600 text-2xl">SignUp</h3>
    <br/>
    <div>
        <span className='font-bold'>Name</span>
        <br />
        <input type="text" placeholder='Enter your full name'  className='w-80 px-3 border rounded-md outline-none'
         {...register("Name", { required: true })}
        />
         <br/>
         {errors.Name && <span className='text-red-400'>This field is required</span>}
        <br/>
        <br/>
        <span className='font-bold'>Email</span>
        <br/>
        <input type="email" placeholder='Enter your email'className='w-80 px-3 border rounded-md outline-none' 
        {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-red-400'>This field is required</span>}
        <br/>
        <br/>
        <span className='font-bold'>Password</span>
        <br/>
        <input type="Password" placeholder='Enter your password' className='w-80 px-3 border rounded-md outline-none'
    {...register("Password", { required: true })}
        />
        <br/>
        {errors.Password && <span className='text-red-400'>This field is required</span>}
        <br/>
        <br/>
         </div>

   

         {/*Button*/}

         <div className='flex justify-around mt-4'>
            <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:scale-95 duration-200'>SignUp</button>
            <p className='font-bold'>Have Account?{""} 
                <button className='underline text-blue-500 cursor-pointer'
                onClick={()=>document.getElementById("my_modal_3").showModal()}
                >
                Login
                </button>{""}
                <Login/>
                </p>                             
         </div>
         </form>
  </div>
</div>
    </div>
    </>
  );
}

export default SignUp;

