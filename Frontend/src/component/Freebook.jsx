import React, { useEffect, useState } from 'react';
import list from "../../public/list.json"
import axios from 'axios';

const Freebook = () => {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async () =>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
        
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[]);
  const filterdata = book.filter((data)=> data.category === "free");
 

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-8'>
        <h1 className='text-2xl font-semibold pb-2'>Discover Our Free Books Collection</h1>
        <p className='pb-7'>Explore a variety of free books available for download. Enhance your knowledge with our curated selection.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-7'>
          {filterdata.map(({ id, img, heading, free, text, price, button }) => (
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
    </>
  );
};

export default Freebook;
