  import React from 'react';
  import { Link } from 'react-router-dom';
  import { useForm } from "react-hook-form";
  import axios from 'axios';
  import toast, { Toaster } from 'react-hot-toast';
  function Login() {
      const { register, handleSubmit,  formState: { errors }, } = useForm();
      const onSubmit = async(data) => {
        const userInfo={
        
          email:data.email,
          password:data.password,
                };
              await axios.post("http://localhost:4001/user/login",userInfo)
                .then((res)=>{
          console.log(res.data);
          if(res.data){
         
            toast.success('Login Successfully');
            // document.getElementById("my_model_3").close();
            // window.location.reload();
        }
          localStorage.setItem("Users",JSON.stringify (res.data.user));
                })
               .catch((err)=>{
                  // console.log(err)
                  // alert("error" +err)
                  if(err.response){
                    console.log(err);
                
                    toast.error("error"+err.response.data.message);
                  }
                });
      };
    return (
    
      <>
      <div>
      <dialog id="my_modal_3" className="modal ">
   <div className="modal-box dark:bg-slate-900 dark:text-white">
       <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
        {/* if there is a button in form, it will close the modal */}
       <button
          className="btn  btn-circle btn-ghost absolute right-2 bottom-2 bg-green-500 text-white rounded-md px-3 py-1 hover:scale-95 duration-200"
          //  onClick={()=>document.getElementById("my_model_3").close()}
          >Login</button>
      </form> 
      <h3 className="font-bold  text-pink-600 text-2xl"
      >Login</h3>
      <br/>
      <div>
          <span className='font-bold '>Email</span>
          <br />
          <input type="email" placeholder='Enter your email'  className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white' 
           {...register("email", { required: true })}/>
           <br/>
            {errors.email && <span className='text-red-400'>This field is required</span>}
          <br/>
          <br/>

          <span className='font-bold'>Password</span>
          <br/>
          <input type="Password" placeholder='Enter your password' className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
           {...register("password", { required: true })}
          />
          <br/>
           {errors.password && <span className='text-red-400'>This field is required</span>}
         <br/>
          <br/>
           </div>


           {/*Button*/}
           
           <div className='flex justify-around mt-4'>
              {/* <button   type="submit" className='bg-green-500 text-white rounded-md px-3 py-1 hover:scale-95 duration-200'>✕</button> */}
          
              <p className='font-bold'>Not Rigistered? <Link to="/signup" className='underline text-blue-400 cursor-pointer'>SignUp</Link>{" "}</p>
           </div> 
    </div>
  </dialog>
      </div>
      </>
    );
  }

 export default Login;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// function Login() {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = async (data) => {
//         const userInfo = {
//             email: data.email,
//             password: data.password,
//         };
        
//         try {
//             const res = await axios.post("http://localhost:4001/user/login", userInfo);
//             console.log(res.data);
//             if (res.data) {
//                 toast.success('Login Successfully');
//                 localStorage.setItem("Users", JSON.stringify(res.data.user));
//                 // Optionally close the modal here if you use state to manage modal visibility
//                 // document.getElementById("my_modal_3").close();
//             }
//         } catch (err) {
//             console.error(err);
//             if (err.response) {
//                 toast.error("Error: " + err.response.data.message);
//             } else {
//                 toast.error("Network error: Please try again later.");
//             }
//         }
//     };

//     return (
//         <>
//             <Toaster /> {/* Include toast notifications here */}

//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box dark:bg-slate-900 dark:text-white">
//                     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//                         {/* Close button */}
//                         <Link 
//                             to="/" 
//                             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                              onClick={() => document.getElementById("my_modal_3").close()} // Close the modal
//                         >
//                             ✕
//                         </Link>
//                     </form>

//                     <h3 className="font-bold text-pink-600 text-2xl">Login</h3>
//                     <br />
//                     <div>
//                         <span className='font-bold'>Email</span>
//                         <br />
//                         <input
//                             type="email"
//                             placeholder='Enter your email'
//                             className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
//                             {...register("email", { required: true })}
//                         />
//                         <br />
//                         {errors.email && <span className='text-red-400'>This field is required</span>}
//                         <br /><br />

//                         <span className='font-bold'>Password</span>
//                         <br />
//                         <input
//                             type="password"
//                             placeholder='Enter your password'
//                             className='w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
//                             {...register("password", { required: true })}
//                         />
//                         <br />
//                         {errors.password && <span className='text-red-400'>This field is required</span>}
//                         <br /><br />
//                     </div>

//                     {/* Submit Button */}
//                     <div className='flex justify-around mt-4'>
//                         <button 
//                             type="submit" 
//                             className='bg-green-500 text-white rounded-md px-3 py-1 hover:scale-95 duration-200'
//                         >
//                             Login
//                         </button>

//                         <p className='font-bold'>
//                             Not Registered? 
//                             <Link to="/signup" className='underline text-blue-400 cursor-pointer'>
//                                 SignUp
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </dialog>
//         </>
//     );
// }

// export default Login;

