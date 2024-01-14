import React from 'react'
import Navbar from '../Components/Navbar'
import Profile from '../Components/Profile'
import Main from '../Components/Main'
import Help from '../Components/Help'
import './Home.css'


const Home = () => {
  return (
    <>
        
        <div className='home'>
       
        <Profile/>
        <Main/>
        <Help/>
    </div>
    </>
   
  )
}

export default Home