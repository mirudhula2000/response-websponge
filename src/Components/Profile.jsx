import React from 'react'
import './Profile.css'
import profilepic from '../Assets/mountain.png'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <>
    <Navbar/>
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
    </main>

    </>
  )
}

export default Profile