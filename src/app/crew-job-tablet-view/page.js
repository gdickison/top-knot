'use client'
/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

export default function JobDashboard () {
  const [address, setAddress] = useState('5120 Robinson Park Rd, Moscow, ID 83843')
  function handleAddressChange (e) {
    e.preventDefault()
    setAddress(e.target.value)
    console.log('address', address)
  }

  const GoogleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">

      <div className="mb-4">
        <span className="font-bold">Job ID:</span> 230581-2025
      </div>
      
      <div className="">
        <div>
          <label className="block text-gray-600">Map view</label>
          <div className="w-full h-full border border-gray-300 rounded">
            <iframe
              width="100%"
              height="100%"
              frameborder="0" style={{border: 0}}
              src={`https://www.google.com/maps/embed/v1/place?key=${GoogleApiKey}&q=${address.replaceAll(' ', '+')}`} allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p className="text-gray-600 text-2xl">Alpacas: 12</p>
        </div>
        <div>
          <p className="text-gray-600 text-2xl">Llamas: 6</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="block text-gray-600 text-2xl">Customer Notes</p>
        <p className="w-full border border-gray-300 p-2 rounded" rows="5">Grandchildren will be visiting this summer, so likely there will be children ages 8-14 who want to watch. Per the county road department, there may be construction on the main road. Check ahead about delays or going on Jones Road instead of Smith Road.</p>
      </div>
      
      <div className="mb-4 flex gap-4 items-center">
        <label className="font-bold text-gray-600 text-2xl">Job Completed</label>
        <input type="checkbox" className="h-6 w-6" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-600">Start Time</label>
          <input type="datetime-local" value="12" className="w-full border border-gray-300 p-2 rounded"/>
        </div>
        <div>
          <label className="block text-gray-600">End Time</label>
          <input type="datetime-local" value="8" className="w-full border border-gray-300 p-2 rounded"/>
        </div>
      </div>

      <div className="mb-6">
      <label className="block text-gray-600 text-2xl">Job Notes</label>
        <textarea className="w-full border border-gray-300 p-2 rounded" rows="5">Started late due to road construction delay - no alternative route. Since the job started late John wanted to feed us lunch. He also acquired two additional llamas that we were not told about ahead of time.</textarea>
      </div>
    </div>
  )
  }
