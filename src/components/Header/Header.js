import React from 'react'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
  return (
    <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-center'>
      
      <div className='flex gap-4 text-xl'>
        <CustomLink to='/'>HOME</CustomLink>
        <CustomLink to='/reviews'>REVIEWS</CustomLink>
        <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
        <CustomLink to='/blogs'>BLOGS</CustomLink>
        <CustomLink to='/about'>ABOUT</CustomLink>
      </div>
    </div>
  )
}

export default Header
