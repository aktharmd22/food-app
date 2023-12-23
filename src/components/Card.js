import React, { useState } from 'react'
import { data } from '../Data/Data.js';

const Card = () => {
    
  return (
    <div>
         {data.map((item, index) => (
            <div className=' border-4 border-green-600 w-80 m-10' key={index}>
           
            <h2 className='p-5 text-center'>{item.name}</h2>
            <img className='mx-auto w-96 h-96' src={item.image}/>
            <button className='bg-sky-600 text-white hover:bg-blue-700 font-bold rounded m-20'>Add to Cart</button>
        </div>
         ))}
        
    </div>
  )
}

export default Card