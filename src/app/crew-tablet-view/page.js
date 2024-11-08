'use client'
import { useState } from "react"


const CrewTabletView = () => {
  const [address, setAddress] = useState('"RR+2+Box+800+Bollinger+County+Rd+524+Hazel+KY+49042"')
  function handleAddressChange (e) {
    e.preventDefault()
    setAddress(e.target.value)
    console.log('address', address)
  }
  
  const GoogleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[1024px] h-[768px] bg-white border-4 border-gray-300 rounded-2xl shadow-lg">
        <div className="relativew-full h-full border border-gray-300 rounded">
          <iframe
            width="100%"
            height="100%"
            frameborder="0" style={{border: 0}}
            src={`https://www.google.com/maps/embed/v1/place?key=${GoogleApiKey}&q=${address.replaceAll(' ', '+')}`} allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default CrewTabletView