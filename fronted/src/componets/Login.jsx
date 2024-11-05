import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
function Login() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    
    <>
    <div>
    <dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button   className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold  text-pink-600 text-2xl">Login</h3>
    <br/>
    <div>
        <span className='font-bold'>Email</span>
        <br />
        <input type="email" placeholder='Enter your email'  className='w-80 px-3 border rounded-md outline-none' 
         {...register("email", { required: true })}/>
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
            <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:scale-95 duration-200'>Login</button>
            <p className='font-bold'>Not Rigistered? <Link to="/signup" className='underline text-blue-400 cursor-pointer'>SignUp</Link>{""}</p>
         </div>
  </div>
</dialog>
    </div>
    </>
  );
}

export default Login;
