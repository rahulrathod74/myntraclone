import axios from 'axios'
import React, { useEffect, useState } from 'react'
import shoes from "../images/shoes.jpg"
import furniture from "../images/furniture.jpg"
import clothes from "../images/clothes.jpg"
import electroincs from "../images/electroincs.jpg"
import kit from "../images/kit.jpg" 
import other from "../images/other.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
 
  return (
    <div className='p-10 flex justify-between'>
        <Link to="/products" state={{category:"Clothes"}}>
        <div style={{backgroundImage:`url(${clothes})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
        className='h-72 w-48 p-2 pt-48'  >
            <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
                <h1 className='text-lg'>Clothes</h1>
                <h1 className='text-xl font-bold'>40-50% OFF</h1>
                <h1 className='text-lg'>Shop Now</h1>
            </div>
        </div>
        </Link>
        <Link to="/products" state={{category:"Shoes"}}>
        <div style={{backgroundImage:`url(${shoes})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
        className='h-72 w-48 p-2 pt-48'  >
            <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
                <h1 className='text-lg'>Shoes</h1>
                <h1 className='text-xl font-bold'>50-70% OFF</h1>
                <h1 className='text-lg'>Shop Now</h1>
            </div>
        </div>
        </Link>
        <Link to="/products" state={{category:"Furniture"}}>
        <div style={{backgroundImage:`url(${furniture})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
        className='h-72 w-48 p-2 pt-48'  >
            <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
                <h1 className='text-lg'>Furniture</h1>
                <h1 className='text-xl font-bold'>45-60% OFF</h1>
                <h1 className='text-lg'>Shop Now</h1>
            </div>
        </div>
        </Link>
        <Link to="/products" state={{category:"Electroinces"}}>
        <div style={{backgroundImage:`url(${electroincs})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
        className='h-72 w-48 p-2 pt-48'  >
            <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
                <h1 className='text-lg'>Electronics</h1>
                <h1 className='text-xl font-bold'>30-40% OFF</h1>
                <h1 className='text-lg'>Shop Now</h1>
            </div>
        </div>
        </Link>
        <Link to="/products" state={{category:"Miscellaneous"}}>
        <div style={{backgroundImage:`url(${other})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
        className='h-72 w-48 p-2 pt-48'  >
            <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
                <h1 className='text-lg'>Other</h1>
                <h1 className='text-xl font-bold'>55-0% OFF</h1>
                <h1 className='text-lg'>Shop Now</h1>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Home