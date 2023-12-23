import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*card*/}
        <div className='rounded-xl relative'>
           {/*overlay*/}
           <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, Bogo's Out</p>
            <p className='px-2'>Through 8/2344</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
           </div> 
           <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        </div>

           {/*card*/}
           <div className='rounded-xl relative'>
           {/*overlay*/}
           <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Hotel Bilal</p>
            <p className='px-2'>Through 8/2344</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
           </div> 
           <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>

           {/*card*/}
           <div className='rounded-xl relative'>
           {/*overlay*/}
           <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Hotel Hameed</p>
            <p className='px-2'>Through 8/2344</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
           </div> 
           <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
    </div>
  )
}

export default HeadLineCards