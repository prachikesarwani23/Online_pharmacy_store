import React from 'react';
import Login from './Login';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function contact() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit =async data => {
      const userInfo={
        name:data.name,
        email:data.email,
        message:data.message,
      }
     await axios.post("http://localhost:4001/contactes/contact",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success('Feedback sent Successfully');
        }
      
      })
      .catch((err)=>{
        toast.error("Feedback not sent" + err);
      })
    };
  return (
    <>
    <div>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
  <div className="modal-box ">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link  to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold  text-pink-600 text-2xl">Contact Us!</h3>
    <br/>
    <div>
        <span className='font-bold'>Name</span>
        <br />
        <input type="text" placeholder='Enter your full name'  className='w-80 px-3 border rounded-md outline-none'
         {...register("name", { required: true })}
        />
         <br/>
         {errors.name && <span className='text-red-400'>This field is required</span>}
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
        <span className='font-bold'>Your Feedback</span>
        <br/>
        <input type="Message" placeholder='Enter your message' className='w-80 px-3 border rounded-md outline-none'
    {...register("message", { required: true })}
        />
        <br/>
        {errors.message && <span className='text-red-400'>This field is required</span>}
        <br/>
        <br/>
         </div>

   

         {/*Button*/}

         <div className='flex justify-around mt-4'>
            <button className='bg-green-500 text-white rounded-md px-3 py-1 hover:scale-95 duration-200'>SUBMIT</button>
                                        
         </div>
         </form>
  </div>
</div>
    </div>
    </div>
    </>
  );
}

export default contact;
