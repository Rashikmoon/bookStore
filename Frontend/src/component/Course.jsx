import React from 'react'
import Navbar from './Navbar'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className=''>
      <Navbar/>


      <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
       <div className='mt-9 justify-center text-center items-center'>
       <h1 className='text-3xl'>this is heading <span className='text-pink-500'>heading</span></h1>
       <p className='p-8 '>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus suscipit mollitia quo reiciendis? Dignissimos vero minus tempora maiores qui, delectus similique voluptatibus placeat possimus, minima soluta id laborum saepe.
       </p>
       <Link to='/' >
       <button className='bg-pink-500 px-3 py-2 rounded font-semibold pt border hover:scale-110 transition-all'>Back</button></Link>
       </div>
       
      <div className=' grid grid-cols-1 md:grid-cols-4 gap-6 mt-16'>
      {list.map(({ id, img, heading, free, text, price, button }) => (
            <div key={id} className='hover:scale-105 transition-all border p-4 rounded-lg shadow-lg'>
              <img src={img} className='w-full h-60 object-cover rounded-t-lg' alt={heading} />
              <div className='flex justify-between items-center mt-4'>
                <h1 className='font-semibold text-lg'>{heading}</h1>
                <span className='bg-pink-600 text-white font-bold px-2 py-1 text-sm rounded-full'>{free}</span>
              </div>
              <p className='mt-2 text-gray-700 text-sm line-clamp-3'>{text}</p>
              <div className='flex justify-between items-center mt-4'>
                <button className='border rounded-lg px-3 py-2 bg-gray-200 hover:bg-gray-300'>{price}</button>
                <button className='border rounded-lg px-3 py-2 bg-blue-600 text-white hover:bg-blue-700'>{button}</button>
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
    </>
  )
}

export default Course