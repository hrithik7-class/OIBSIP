import React from 'react'
import {useState,useEffect} from 'react'

import Login from './Login';
import axios from 'axios';

export const Home = () => {
    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const token =  localStorage.getItem("token");
        if(token){
            axios.post('http://localhost:3000/auth/login',{
                header:{Authrization: `Bearer ${token}`},
            }).then((res)=>{  
                if(res === 200){
                    setLoading(true)
                    
                }
                else{
                    setLoading(false)
                    localStorage.removeItem("token");
                }  
            })
        }
    },[])

  return (
   <>
   {loading ?  <> <div className='min-h-screen  flex justify-center items-center bg-[url(/img.jpg)] '>
        <div className='lg:max-w-3xl   md:max-w-xl max-w-[340px] mx-auto p-8  bg-black text-white bg-opacity-50 rounded-lg shadow-lg'>
            <h1 className='lg:text-6xl md:text-4xl  text-2xl font-bold mb-4 '>Welcome to Home Page</h1>
            <p className='text-gray-200 md:text-lg text-sm'>This is the home page of our website. You can access all the features and services offered by our website here.</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 '>Let's Explore</button>
        </div>
    </div></> : <Login />}
   
   </>
  )
}