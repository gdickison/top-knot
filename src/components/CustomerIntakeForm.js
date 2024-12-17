'use client'
/* eslint-disable @next/next/no-img-element */
import { useForm, Controller } from "react-hook-form"
import { useEffect, useRef, useState } from "react";
import { format, startOfMonth, getDaysInMonth, addMonths } from 'date-fns';

export default function CustomerIntakeForm () {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [addressDetails, setAddressDetails] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);

  const formatPhoneNumber = (input) => {
    // Remove all non-digit characters
    const cleaned = input.replace(/\D/g, '');
    
    // Format the number
    let formatted = '';
    if (cleaned.length > 0) {
      formatted += '(' + cleaned.substr(0, 3);
      if (cleaned.length > 3) {
        formatted += ') ' + cleaned.substr(3, 3);
        if (cleaned.length > 6) {
          formatted += '-' + cleaned.substr(6, 4);
        }
      }
    }

    return formatted;
  };

  const GoogleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  const { register, control, handleSubmit, reset, setValue, formState: { isDirty } } = useForm({
    defaultValues: {}
  });

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GoogleApiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initAutocomplete;
      document.head.appendChild(script);
    };

    const initAutocomplete = () => {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: ['us'] }
      });
  
      autocompleteRef.current.addListener('place_changed', handlePlaceChange);
    };

    loadGoogleMapsScript();
  
  }, [GoogleApiKey]);


  const handlePlaceChange = () => {
    const place = autocompleteRef.current.getPlace();
    if (!place.geometry) {
      setAddressDetails(null);
      return;
    }

    let streetNumber = '';
    let route = '';
    let locality = '';
    let administrativeAreaLevel1 = '';
    let country = '';
    let postalCode = '';

    for (const component of place.address_components) {
      const componentType = component.types[0];

      switch (componentType) {
        case 'street_number':
          streetNumber = component.long_name;
          break;
        case 'route':
          route = component.long_name;
          break;
        case 'locality':
          locality = component.long_name;
          break;
        case 'administrative_area_level_1':
          administrativeAreaLevel1 = component.short_name;
          break;
        case 'country':
          country = component.long_name;
          break;
        case 'postal_code':
          postalCode = component.long_name;
          break;
      }
    }

    const address = `${streetNumber} ${route}, ${locality}, ${administrativeAreaLevel1} ${postalCode}, ${country}`;

    setAddressDetails({
      fullAddress: address,
      street: `${streetNumber} ${route}`,
      city: locality,
      state: administrativeAreaLevel1,
      country,
      postalCode,
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng()
    });
  };

  const submitProfile = async (data) => {

    data.map_address = addressDetails

    console.log('data', data)

    // try {
    //   const result = await createOrUpdateUserProfile(data)
    //   console.log('result', result)
    // } catch (error) {
    //   console.log('Error creating user profile: ', error)
    //   alert('Error creating user profile: ', error)
    // }
  };

  const generateMonth = (monthIndex) => {
    const baseDate = new Date(2025, monthIndex, 1); // monthIndex: 3=April, 4=May, 5=June
    const daysInMonth = getDaysInMonth(baseDate);
    const monthStart = startOfMonth(baseDate);
    const startDay = monthStart.getDay(); // 0-6, representing Sunday-Saturday

    const days = [];
    // Add empty cells for days before the 1st
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(2025, monthIndex, i));
    }
    return days;
  };

  const toggleDate = (date) => {
    if (!date) return;
    const dateStr = format(date, 'yyyy-MM-dd');
    setSelectedDates(prev => {
      if (prev.includes(dateStr)) {
        return prev.filter(d => d !== dateStr);
      }
      return [...prev, dateStr];
    });
  };

  useEffect(() => {
    setValue('unavailable_dates', selectedDates.join('; '));
  }, [selectedDates, setValue]);

  return (
    <div className="max-w-[96rem] divide-y divide-gray-900/10 mx-auto rounded-3xl md:rounded-t-none my-2 md:my-0 z-10 relative px-6 pb-6 min-h-screen">
      {/* Top full width section */}


      {/* Begin two column section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left column */}
        <form id="profile_primary" className="p-4 rounded-3xl shadow-lg w-full h-fit bg-yellow-600/5" onSubmit={handleSubmit(submitProfile)}>
          <div className="space-y-12">
            <div className="pb-12">

              <div className="pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                  <h3 className="block sm:col-span-6 text-medium font-medium leading-6 text-gray-900 mt-4">Appointment Request</h3>
                  <label className="block sm:col-span-3 text-medium font-medium leading-6 text-gray-900">
                    First name
                    <input
                      {...register("first_name", {
                        required: true
                      })}
                      type="text"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e02e4] sm:text-medium sm:leading-6 bg-gray-100"
                    />
                  </label>

                  <label className="block sm:col-span-3 text-medium font-medium leading-6 text-gray-900">
                    Last name
                    <input
                      {...register("last_name", {
                        required: true
                      })}
                      type="text"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e02e4] sm:text-medium sm:leading-6 bg-gray-100"
                    />
                  </label>

                  <label className="block sm:col-span-3 text-medium font-medium leading-6 text-gray-900">
                    Email address
                    <input
                      {...register("email", {
                        required: true
                      })}
                      type="email"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e02e4] sm:text-medium sm:leading-6 bg-gray-100"
                      placeholder="email@example.com"
                    />
                  </label>

                  <label className="block sm:col-span-3 text-medium font-medium leading-6 text-gray-900">
                    Phone Number
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: 'Phone number is required' }}
                      render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <>
                          <input
                            type="tel"
                            id="phone"
                            className={`mt-2 block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e02e4] sm:text-medium sm:leading-6 bg-gray-100 ${
                              error ? 'border-red-500' : ''
                            }`}
                            placeholder="(123) 456-7890"
                            value={value}
                            onChange={(e) => {
                              const formattedNumber = formatPhoneNumber(e.target.value);
                              onChange(formattedNumber);
                            }}
                            maxLength={14}
                          />
                          {error && (
                            <p className="mt-1 text-sm text-red-600">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </label>
                  <label className="block sm:col-span-6 text-medium font-medium leading-6 text-gray-900">
                    Physical Address
                    <input
                      ref={inputRef}
                      type="text"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e02e4] sm:text-medium sm:leading-6 bg-gray-100"
                      placeholder="What you enter in to Google Maps to find your ranch"
                    />
                  </label>
                  {addressDetails && (
                    <div className="bg-gray-100 p-4 rounded sm:col-span-6">
                      <h2 className="text-xl font-semibold mb-2">Address Details:</h2>
                      <p><strong>Full Address:</strong> {addressDetails.fullAddress}</p>
                      <p><strong>Street:</strong> {addressDetails.street}</p>
                      <p><strong>City:</strong> {addressDetails.city}</p>
                      <p><strong>State:</strong> {addressDetails.state}</p>
                      <p><strong>Country:</strong> {addressDetails.country}</p>
                      <p><strong>Postal Code:</strong> {addressDetails.postalCode}</p>
                      <p><strong>Latitude:</strong> {addressDetails.latitude}</p>
                      <p><strong>Longitude:</strong> {addressDetails.longitude}</p>
                    </div>
                  )}

                  <div className="sm:col-span-6 space-y-4">
                    <label className="block text-medium font-medium leading-6 text-gray-900">
                      <p className="font-semibold">Unavailable Dates</p>
                      {addressDetails && (
                        <div className="my-2">
                          <p>Last year we were at your farm on June 25th.</p>
                          <p>This year we will likely be at your farm between June 20th and August 10th.</p>
                          <p>Are there any days between June 20th and August 10th when you will absolutely not be available?</p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {[3, 4, 5].map((monthIndex) => (
                          <div key={monthIndex} className="border rounded-lg p-4">
                            <h4 className="text-center font-semibold mb-2">
                              {format(new Date(2025, monthIndex), 'MMMM yyyy')}
                            </h4>
                            <div className="grid grid-cols-7 gap-1">
                              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                <div key={day} className="text-center text-sm font-medium">
                                  {day}
                                </div>
                              ))}
                              {generateMonth(monthIndex).map((date, i) => (
                                <div
                                  key={i}
                                  onClick={() => toggleDate(date)}
                                  className={`
                                    text-center p-2 cursor-pointer rounded
                                    ${!date ? 'invisible' : 'hover:bg-gray-100'}
                                    ${date && selectedDates.includes(format(date, 'yyyy-MM-dd'))
                                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                                      : ''}
                                  `}
                                >
                                  {date ? format(date, 'd') : ''}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {selectedDates.length > 0 && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <p className="font-medium">Selected Dates:</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedDates.sort().map(date => (
                              <span
                                key={date}
                                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                                onClick={() => toggleDate(new Date(date))}
                              >
                                {format(new Date(date), 'MMM d, yyyy')}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <input
                        type="hidden"
                        {...register("unavailable_dates")}
                      />
                    </label>
                  </div>

                  <label className="block sm:col-span-3 text-medium font-medium leading-6 text-gray-900">
                    Number of Alpacas
                    <input
                      {...register("number_of_alpacas")}
                      type="number"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e02e4] sm:text-medium sm:leading-6 bg-gray-100"
                      placeholder="0"
                    />
                  </label>
                  <label className="block sm:col-span-3 text-medium font-medium leading-6 text-gray-900">
                    Number of Llamas
                    <input
                      {...register("number_of_llamas")}
                      type="number"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e02e4] sm:text-medium sm:leading-6 bg-gray-100"
                      placeholder="0"
                    />
                  </label>
                  <label className="block sm:col-span-6 text-medium font-medium leading-6 text-gray-900">
                    Notes
                    <textarea
                      className="mt-2 block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4e02e4] sm:text-medium sm:leading-6 bg-gray-100"
                      placeholder="What do you want us to know about your animals?"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="px-4 py-1 border-[1px] border-blue-600 rounded-md bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white"
              disabled={!isDirty}
            >
              Request Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
