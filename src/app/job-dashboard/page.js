'use client'
/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

export default function JobDashboard () {
  const [address, setAddress] = useState('"RR+2+Box+800+Bollinger+County+Rd+524+Hazel+KY+49042"')
    function handleAddressChange (e) {
      e.preventDefault()
      setAddress(e.target.value)
      console.log('address', address)
    }

    const GoogleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    

    return (
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Single Job View</h1>
          <p className="text-sm text-blue-400 mb-6">All information can be edited by an admin</p>
          
          <div className="mb-4">
              <span className="font-bold">Job ID:</span> 230581-2025
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                  <label className="block text-gray-600">Full Name</label>
                  <input type="text" value="John Smith" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Cell Phone</label>
                  <input type="text" value="555-555-5555" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Email</label>
                  <input type="email" value="john@smithfarms.com" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                  <label className="block text-gray-600" htmlFor='address'>Farm Name & Address</label>
                  <textarea className="w-full border border-gray-300 p-2 rounded" rows="10" name='address' id='address' value={address} onChange={handleAddressChange}></textarea>
              </div>
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
          
          <div className="mb-4">
              <span className="font-bold text-red-500">Job Pending</span>
              <span className="font-bold text-yellow-500">Job Scheduled</span>
              <span className="font-bold text-green-500">Job Completed</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                  <label className="block text-gray-600">Available Dates</label>
                  <input type="text" value="6/1 - 6/15, 6/17 - 6/30" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Times</label>
                  <input type="text" value="AM, MID, PM" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Alpacas</label>
                  <input type="number" value="12" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Llamas</label>
                  <input type="number" value="6" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
          </div>
          
          <div className="mb-6">
              <label className="block text-gray-600">Notes</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="5">Grandchildren will be visiting this summer, so likely there will be children ages 8-14 who want to watch.</textarea>
          </div>
          
          <div className="mb-4">
              <span className="font-bold text-gray-600">(or, if scheduled)</span>
          </div>
          
          <div className="grid grid-cols-5 gap-4 mb-6">
              <div>
                  <label className="block text-gray-600">Date</label>
                  <input type="date" value="2025-06-19" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Crew</label>
                  <input type="number" value="1" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Time</label>
                  <input type="time" value="09:00" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Alpacas</label>
                  <input type="number" value="12" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Llamas</label>
                  <input type="number" value="6" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
          </div>
          
          <div className="mb-6">
              <label className="block text-gray-600">Notes</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="5">Grandchildren will be visiting this summer, so likely there will be children ages 8-14 who want to watch.
  
  Per the county road department, there may be construction on the main road. Check ahead about delays or going on Jones Road instead of Smith Road.</textarea>
          </div>
          
          <div className="mb-4">
              <span className="font-bold text-gray-600">(or, if completed)</span>
          </div>
          
          <div className="grid grid-cols-6 gap-4 mb-6">
              <div>
                  <label className="block text-gray-600">Date</label>
                  <input type="date" value="2025-06-19" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Crew</label>
                  <input type="number" value="1" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">(other info?)</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Alpacas</label>
                  <input type="number" value="12" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Llamas</label>
                  <input type="number" value="8" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
              <div>
                  <label className="block text-gray-600">Total Time</label>
                  <input type="text" value="5:20" className="w-full border border-gray-300 p-2 rounded"/>
              </div>
          </div>
          
          <div className="mb-6">
              <label className="block text-gray-600">Notes</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="5">Started late due to road construction delay - no alternative route. Since the job started late John wanted to feed us lunch. He also acquired two additional llamas that we were not told about ahead of time.</textarea>
          </div>
      </div>
    )
  }
