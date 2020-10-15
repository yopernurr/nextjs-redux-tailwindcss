import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>

      {/* side nav */}
      {
        isOpen ?
        <div id="parent" className="default-width bg-gray-600 bg-opacity-75 fixed z-50 h-full cursor-pointer" onClick={(e) => {
          const data : any = e.target
          data.id == 'parent' ? setisOpen(false) : null
        }}>
          <div id="child" className="bg-white w-40 h-full shadow-md p-4 cursor-default">
            SideNav
          </div>
        </div>
        : null
      }

      <div className="w-full flex p-4 shadow-md">
        <div className="w-full flex justify-items-start">
          <button onClick={() => setisOpen(true)} className="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="w-full flex justify-end">
          <button onClick={() => {}} className="w-6 h-6 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a href={'/cart'} className="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default NavBar