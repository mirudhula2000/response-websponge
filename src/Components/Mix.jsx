import React from 'react'
import  './Mix.css'
import logo from '../Assets/dragonfly.png'
import search from '../Assets/search.png'
import home from '../Assets/home.png'
import news from '../Assets/newspaper.png'
import  list from '../Assets/list.png'
import user from '../Assets/user.png'
import notification from '../Assets/bell.png'
import share from '../Assets/share.png'
import profilepic from '../Assets/mountain.png'

const Mix = () => {
  return (
    <>
    <div className='front flex flex-row'>
    <nav className='nav-bar'>
        <div className='nav-bar div  hover:bg-teal-300 max-width[480px]:order-last'>
        <div className='space-y-3 mt-2'>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={logo} alt="logo"/>
            <img className='img-search  hover:bg-pink-300 p-1 rounded-lg' src={search} alt="search-btn"/>

        </div>
        <div className='space-y-3'>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={home} alt="home-btn"/>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={news} alt="news-btn"/>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={list} alt="list-btn"/>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={user} alt="user-btn"/>


        </div>
        <div className='space-y-3'>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={notification} alt="notification-btn"/>
            <img className='img-logo  hover:bg-pink-300 p-1 rounded-lg' src={share} alt="share-btn"/>

        </div>
        </div>
    </nav>

    <main  className='profile bg-lime-300'>
        <div className='prof'>
            <div>
                <img className='profpic' src={profilepic} alt="profile-pic" />
            </div>
            <div className='welcome-text mt-5 font-bold font-mono '>
                <p>Hi Mirudhula,
                    Welcome back...
                </p>
            </div>

        </div>
        <div className='daily-transac flex flex-col'>
        <div className='daily-activity'>
            <h4 className=' daily-head font-bold'>Today</h4>
            <div className='flex flex-col space-y-1 items-start mt-2'>
            <p  className='text-1 font-bold font-serif'>$4000</p>
            <p className='text-2 font-semibold'>Account Balance</p>
            <p  className='text-1 font-bold font-serif'>$4000</p>
            <p className='text-2 font-semibold'>Account Balance</p>
            <p  className='text-1 font-bold font-serif'>$4000</p>
            <p className='text-2 font-semibold'>Account Balance</p>
            
            </div>
        </div>
        <div className='transac'>
        <div>
            <h3 className='font-semibold font-mono text-pretty text-amber-900'>Transactions</h3>
            <div className='space-y-1 mt-2'>
            <p className='date'>27-12-2022</p>
            <p className='dep-widrw'>Withdrawal from bank account-XXX121</p>
            <hr className='divide'/>
            </div>
            <div className='space-y-1 mt-2'>
            <p className='date'>27-12-2022</p>
            <p className='dep-widrw'>Withdrawal from bank account-XXX121</p>
            <hr className='divide'/>
            </div>
            <div className='space-y-1 mt-2'>
            <p className='date'>27-12-2022</p>
            <p className='dep-widrw'>Withdrawal from bank account-XXX121</p>
            <hr className='divide'/>
            </div>
        </div>
        </div>
        </div>
    </main>
    </div>
    </>
  )
}

export default Mix