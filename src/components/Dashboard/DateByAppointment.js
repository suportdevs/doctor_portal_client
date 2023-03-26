import React from 'react';

const DateByAppointment = ({appointments, isLoading, isError, isSuccess}) => {
    
let services = "";
if(isError){
    services = <tbody className='text-center'><tr><td>Something went wrong!</td></tr></tbody>
}else if(isLoading){
    services = <tbody className='text-center'><tr><td>Loading...</td></tr></tbody>
} else if(isSuccess){
    services = appointments.map((appointment, index) => 
        <tbody>
        <tr>
            <td>{index + 1}</td>
            <td>{appointment.name}</td>
            <td>{new Date(appointment.date).toLocaleTimeString()}</td>
            <td><button className='bg_color p-1 rounded text-white'>Not Viewd</button></td>
        </tr>
        </tbody>
    )
}

    return (
        <div className="overflow-x-auto">
            <div className="flex justify-between py-3 pl-2">
                <div className="relative max-w-xs">
                    <label htmlFor="hs-table-search" className="sr-only">
                        Search
                    </label>
                    <input
                        type="text"
                        name="hs-table-search"
                        id="hs-table-search"
                        className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <svg
                            className="h-3.5 w-3.5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="relative">
                        
                    </div>
                </div>
            </div>

            <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className='text-left'>
                        <tr><th>Id</th><th>Name</th><th>Schedule</th><th>Action</th></tr>
                        </thead>
                        {services}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DateByAppointment;