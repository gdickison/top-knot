'use client'
import { useState } from "react"


const CrewTabletView = () => {
  const [address, setAddress] = useState('1136 East E Street, Moscow, ID 83843')
  function handleAddressChange (e) {
    e.preventDefault()
    setAddress(e.target.value)
    console.log('address', address)
  }
  
  const GoogleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <>
      {/* Map View */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[1024px] h-[768px] rounded-2xl shadow-lg flex items-center bg-transparent border-[2rem] border-black">
          <div className="h-full w-1/3 rounded-l-lg flex flex-col gap-4 p-4">
            <h2>Crew No. 6</h2>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3>Current Job</h3>
                <div>
                  <p className="text-2xl">Customer Name</p>
                  <p className="text-2xl">Address</p>
                  <p className="text-2xl">Phone Number</p>
                  <p className="text-2xl">Email Address</p>
                </div>
                <button type="button" className="border-2 border-gray-500 rounded-lg py-1 w-48 text-xl" onClick={() => alert('On our way! We should be there in 2 hours.')}>
                  Directions to Next Job
                </button>
              </div>
              <div className="">
                <h3>Next Job</h3>
                <div>
                  <p className="text-2xl">Customer Name</p>
                  <p className="text-2xl">Address</p>
                  <p className="text-2xl">Phone Number</p>
                  <p className="text-2xl">Email Address</p>
                </div>
                <button type="button" className="border-2 border-gray-500 rounded-lg py-1 w-48 text-xl" onClick={() => alert('On our way! We should be there in 2 hours.')}>
                  On Our Way
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-2/3 h-full border border-gray-300 rounded-r-lg">
            <iframe
              width="100%"
              height="100%"
              frameborder="0" style={{border: 0}}
              src={`https://www.google.com/maps/embed/v1/place?key=${GoogleApiKey}&q=${address.replaceAll(' ', '+')}`} allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>

      {/* Single Job View */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[1024px] h-[768px] rounded-2xl shadow-lg flex items-center bg-transparent border-[2rem] border-black">
          <div className="h-full w-1/3 rounded-l-lg flex flex-col gap-4 p-4">
            <h2>Crew No. 6</h2>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3>Current Job</h3>
                <div>
                  <p className="text-2xl">Customer Name</p>
                  <p className="text-2xl">Address</p>
                  <p className="text-2xl">Phone Number</p>
                  <p className="text-2xl">Email Address</p>
                </div>
                <button type="button" className="border-2 border-gray-500 rounded-lg py-1 w-48 text-xl" onClick={() => alert('On our way! We should be there in 2 hours.')}>
                  Directions to Next Job
                </button>
              </div>
              <div className="">
                <h3>Next Job</h3>
                <div>
                  <p className="text-2xl">Customer Name</p>
                  <p className="text-2xl">Address</p>
                  <p className="text-2xl">Phone Number</p>
                  <p className="text-2xl">Email Address</p>
                </div>
                <button type="button" className="border-2 border-gray-500 rounded-lg py-1 w-48 text-xl" onClick={() => alert('On our way! We should be there in 2 hours.')}>
                  On Our Way
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-2/3 h-full border border-gray-300 rounded-r-lg">
            <iframe
              width="100%"
              height="100%"
              frameborder="0" style={{border: 0}}
              src={`http://localhost:3000/crew-job-tablet-view`} allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default CrewTabletView