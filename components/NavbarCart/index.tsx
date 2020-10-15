import React from 'react'

const NavBarCart = () => {
  return (
    <div className="w-full flex p-4 shadow-md">
      <div className="w-full flex justify-items-start">
        <a href="/" className="w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
        <div className="ml-4 font-medium">CART</div>
      </div>
    </div>
  )
}

export default NavBarCart