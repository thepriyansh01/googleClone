import React from 'react'
import './google.css'
import Header from './Header/Header'
import SearchBox from './SearchBox/searchBox'

const Google = () => {
  return (
    <div className='Google'>
      <Header />
      <div className='LogoContainer'>
        <img className='GoogleLogo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png' alt='Google' />
      </div>
      <SearchBox />
      <div className='btnContainer'>
        <div className='btn'>Google Search</div>
        <div className='btn' onClick={()=>window.location.href = "https://doodles.google/"}>I'm Feeling Lucky</div>
      </div>
    </div>
  )
}

export default Google