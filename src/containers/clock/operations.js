//@ts-check
import React from 'react'

const Operations = ({clear, complement, rotate, rotateIntervals, invert, save}) => (
  <div className="flex flex-row justify-center">
    <button 
        className="shadow-lg m-1 bg-teal-500 text-gray-200 h-8 p-2 text-xs hover:bg-teal-600 hover:text-gray-300 cursor-pointer rounded"
        onClick={invert}
    > Invert </button>
    <button 
        className="shadow-lg m-1 bg-blue-600 text-gray-200 h-8 p-2 text-xs hover:bg-yellow-400 hover:text-gray-800 cursor-pointer rounded"
        onClick={complement}
    > Complement </button>
    <button 
        className="shadow-lg m-1 bg-green-600 text-gray-200 h-8 p-2 text-xs hover:bg-green-500 hover:text-gray-100 cursor-pointer rounded"
        onClick={() => rotate(1)}
    > Rotate-R </button>
    <button 
        className="shadow-lg m-1 bg-green-600 text-gray-200 h-8 p-2 text-xs hover:bg-green-500 hover:text-gray-100 cursor-pointer rounded"
        onClick={() => rotate(-1)}
    > Rotate-L </button>
    <button 
        className="shadow-lg m-1 bg-pink-600 text-gray-200 h-8 p-2 text-xs hover:bg-pink-500 hover:text-gray-100 cursor-pointer rounded"
        onClick={() => rotateIntervals()}
    > Rotate-Intervals (modes)</button>
    <button 
        className="shadow-lg m-1 bg-gray-800 text-gray-200 h-8 p-2 text-xs hover:bg-gray-200 hover:text-gray-800 cursor-pointer rounded"
        onClick={clear}
    > clear </button>
    <button 
        className="shadow-lg m-1 bg-teal-300 text-teal-800 h-8 p-2 text-xs hover:bg-teal-200 hover:text-teal-800 cursor-pointer rounded"
        onClick={save}
    > save </button>
  </div>
)

export default Operations