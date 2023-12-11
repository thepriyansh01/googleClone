import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
      <a href='https://www.gmail.com' className='headerLinks'>Gmail</a>
      <a href='https://photos.google.com' className='headerLinks'>Images</a>
      <div className='headerCircle'>
        <img style={{ width: "24px", objectFit: "contain", filter: "invert(100%)" }} src='https://ssl.gstatic.com/gb/images/bar/al-icon.png' alt='' />
      </div>
      <div className='headerCircle'>
        <img src='https://i.stack.imgur.com/34AD2.jpg' alt='' />
      </div>
    </div>
  )
}

export default Header