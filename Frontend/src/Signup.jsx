import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div id="my_modal_3" className="text-white">
        <div className="modal-box p-10 bg-gray-800 rounded-lg">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg mb-5 text-center">Signup!</h3>
            <div className='space-y-6'>
              <div className='space-y-2'>
                <span>Username</span>
                <br />
                <input
                  {...register("username", { required: true })}
                  type="text"
                  className='rounded w-full p-2'
                />
                {errors.username && (
                  <span className='text-red-500 font-semibold'>This field is required</span>
                )}
              </div>
              <div className='space-y-2'>
                <span>Email</span>
                <br />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className='rounded w-full p-2'
                />
                {errors.email && (
                  <span className='text-red-500 font-semibold'>This field is required</span>
                )}
              </div>
              <div className='space-y-2'>
                <span>Password</span>
                <br />
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className='rounded w-full p-2'
                />
                {errors.password && (
                  <span className='text-red-500 font-semibold'>This field is required</span>
                )}
              </div>
            </div>
            <div className='flex flex-col items-center mt-7 space-y-4'>
              <button type="submit" className='bg-pink-600 p-3 rounded hover:scale-105 transition-all w-full'>Signup</button>
              <p>Already have an account? <Link to="/" className='text-blue-500 underline'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
