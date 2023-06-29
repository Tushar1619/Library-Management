import React from 'react'

import Man from '../FooterMan.png'
export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#BD02AA] from-70% to-[#02BDBD] h-48 w-11/12 mx-auto mt-40 mb-20">
        <div className="flex ml-w8 h-full text-white">

          <div className="flex  relative bottom-20 ml-8">
            <image src={Man} alt="image" className="h-72 w-36 " />
          </div>

          <div className="flex  items-center ml-6 mt-2">
            <div className=" text-center">
              <h1 className="text-lg font-medium">Quick Links</h1>
              <p className="text-xs my-2">About Us</p>
              <p className="text-xs my-2">Buy Notes</p>
              <p className="text-xs my-2">Sell Notes</p>
              <p className="text-xs my-2">Upload</p>
            </div>
          </div>
          <div className="w-1/2 ml-8 flex items-center">
            <div className="mx-auto ">
              <h4 className="mt-10 text-center text-lg font-medium">
                Contact Us
              </h4>
              <p className="text-xs mt-3 text-center">Contact@gmail.com</p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  className="h-10 mt-8 ml-20 placeholder:text-white placeholder:px-6 rounded-lg bg-pink-400 w-full"
                />
                <button className="hover:bg-transparent hover:border hover:border-green-500 bg-green-500 h-8 text-xs px-2 rounded-lg mt-7 relative right-6">
                  Subscribe{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
