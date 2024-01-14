import React from 'react'
import './Main.css'


const Main = () => {

  return (
    <>
    
    <div className='main'>
      <div className='heading'>
        <p>Retirement Income</p>
        <p>Starting year 2056</p>
      </div>
      <div className='income-info flex flex-row space-x-10 mt-1 p-5 justify-between items-center'>
        <div className='space-y-2'>
          <p className='text'>$300,000</p>
          <p className='sub-heading'>Annual Income</p>
          <hr className='hr'/>
        </div>
        <div className='space-y-2'>
          <p className='text'>$300,000</p>
          <p className='sub-heading'>Annual Income</p>
          <hr className='hr'/>
        </div>
        <div className='space-y-2'> 
          <p className='text'>$300,000</p>
          <p className='sub-heading'>Annual Income</p>
          <hr className='hr'/>
        </div>
      </div>
      <div>
      <canvas id="myChart"></canvas>
      </div>
      <div>
        <div>
          <button>Age</button>
        </div>
        <div>
          <button>Salary</button>
        </div>
        <div>
          <button> Gender</button>
        </div>
      </div>
      <div>
      <div id="appearance7"></div>
      </div>
    </div>
    </>
  )
}

export default Main