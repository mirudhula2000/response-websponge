import React from 'react'
import  './Navbar.css'
import logo from '../Assets/dragonfly.png'
import search from '../Assets/search.png'
import home from '../Assets/home.png'
import news from '../Assets/newspaper.png'
import  list from '../Assets/list.png'
import user from '../Assets/user.png'
import notification from '../Assets/bell.png'
import share from '../Assets/share.png'

const Navbar = () => {
  return (
    <>
    <nav className='nav-bar'>
        <div className='nav-bar div  hover:bg-teal-300'>
        <div className='div1 space-y-3 mt-2'>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={logo} alt="logo"/>
            <img className='img-search  hover:bg-pink-300 p-1 rounded-lg' src={search} alt="search-btn"/>

        </div>
        <div className=' div1 space-y-3'>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={home} alt="home-btn"/>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={news} alt="news-btn"/>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={list} alt="list-btn"/>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={user} alt="user-btn"/>


        </div>
        <div className='div1 space-y-3'>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={notification} alt="notification-btn"/>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={share} alt="share-btn"/>

        </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar