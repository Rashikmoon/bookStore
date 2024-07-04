import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const modalRef = useRef(null);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div className=''>
      <dialog id="my_modal_3" className="modal text-white" ref={modalRef}>
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg mb-5">Login!</h3>
            <div className='space-y-9'>
              <div className='space-y-3'>
                <span>Email</span>
                <br />
                <input
                  defaultValue=""
                  {...register("email", { required: true })}
                  type="text"
                  className='rounded w-80 mx-2 px-1'
                />
                <br />
                {errors.email && (
                  <span className='text-red-500 font-semibold'>This field is required</span>
                )}
              </div>
              <div className='space-y-3'>
                <span>Password</span>
                <br />
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className='rounded w-80 mx-2 px-1'
                />
                <br />
                {errors.password && (
                  <span className='text-red-500 font-semibold'>This field is required</span>
                )}
              </div>
            </div>
            <div className='flex justify-around mt-7 items-center'>
              <button type="submit" className='bg-pink-600 p-3 rounded hover:scale-105 transition-all'>
                Login
              </button>
              <p>
                Don't have an account <Link to="/Signup" className='text-blue-500 underline'>Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
