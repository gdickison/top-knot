import Link from "next/link"

const customers = [
  {
    id: '345578-2025',
    name: 'Smith, John',
    location: 'Picabo, ID',
    size: 18,
    priority: 1,
    unavailable_dates: '6/1 - 6/15',
    crew: 1,
    status: 'Unscheduled'
  },
  {
    id: '345579-2025',
    name: 'Brown, John',
    location: 'Troy, ID',
    size: 24,
    priority: 2,
    unavailable_dates: 'None',
    crew: null,
    status: 'Unscheduled'
  },
  {
    id: '345580-2025',
    name: 'Wilson, John',
    location: 'Cheyanne, WY',
    size: 55,
    priority: 1,
    unavailable_dates: '6/1 - 6/15, 7/10-7/15',
    crew: 1,
    status: 'Scheduled'
  },
  {
    id: '345577-2025',
    name: 'Brown, James',
    location: 'Moscow',
    size: 12,
    priority: 1,
    unavailable_dates: 'None',
    crew: 4,
    status: 'Completed'
  },
  // More customers...
]

export default function JobsTable() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-tk-cream">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="h3 font-semibold leading-6 text-gray-900">Jobs</h1>
          {/* <p className="mt-2 text-md text-gray-700">
            Click on a job to see full details.
          </p> */}
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-[#3169C6] px-3 py-2 text-center text-md font-semibold text-white shadow-sm hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3169C6]"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-900 sm:pl-0"
                  >
                    Select
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-900 sm:pl-0"
                  >
                    Customer ID
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-semibold text-gray-900"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-semibold text-gray-900"
                  >
                    Size
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-semibold text-gray-900"
                  >
                    Priority
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-semibold text-gray-900"
                  >
                    Unavailable Dates
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-semibold text-gray-900"
                  >
                    Crew
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-md font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">View / Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-tk-cream">
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-md text-gray-500 sm:pl-0">
                      <input type="checkbox" className="h-6 w-6" />
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-md text-gray-500 sm:pl-0">
                      {customer.id}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-md font-medium text-gray-900">
                      {customer.name}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-md text-gray-900">{customer.location}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-md text-gray-500">{customer.size}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-md text-gray-500">{customer.priority}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-md text-gray-500">{customer.unavailable_dates}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-md text-gray-500">{customer.crew}</td>
                    <td className={`whitespace-nowrap px-2 py-2 text-md ${customer.status === 'Completed' ? 'text-green-500' : customer.status === 'Unscheduled' ? 'text-red-500' : 'text-blue-500'}`}>{customer.status}</td>
                    <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-md font-medium sm:pr-0">
                      <a href="/job-dashboard" className="text-[#3169C6] hover:text-blue-800">
                        View / Edit<span className="sr-only">, {customer.id}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-evenly my-8">
        <button
          type="button"
          className="w-48 rounded-full bg-[#3169C6] px-4 py-2.5 text-md font-semibold text-white shadow-sm hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3169C6]"
        >
          Schedule Selected
        </button>
        <button
          type="button"
          className="w-48 rounded-full bg-[#3169C6] px-4 py-2.5 text-md font-semibold text-white shadow-sm hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3169C6]"
        >
          Schedule All
        </button>
      </div>
    </div>
  )
}
