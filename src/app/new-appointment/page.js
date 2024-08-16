'use client'
import { useState } from "react"
import DatePicker from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker";

// https://shahabyazdi.github.io/react-multi-date-picker/
export default function NewAppointment() {
  const [value, setValue] = useState();

  console.log('value', value)
  return (
    <div>
      <Calendar/>
      <DatePicker
        value={"04/01/2024"}
        onChange={setValue}
        multiple={true}
        range={true}
        format={'MM/DD/YYYY'}
        disableYearPicker={true}
        numberOfMonths={3}
        highlightToday={false}
        inputClass="w-[750px] px-2 rounded-md"
        minDate={"04/01/2024"}
        maxDate={"06/30/2024"}
        rangeHover={true}
      />
    </div>
  )
}