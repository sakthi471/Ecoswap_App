import React from 'react'
// import NotFoundImage from '/no_data.'; // replace with your image path

const DataNotFound = ({ message = 'No Data Found' }) => {
    return (
        <div className="flex flex-col w-full  max-w-[150px]  p-2 items-center justify-center gap-2 ">
            <img src={'/no_data.svg'} alt="Data not found" className=" " />
            <span className=" font-semibold text-center text-gray-400  py-3">{message}</span>

        </div>
    )
}

export default DataNotFound