//@ts-check
import React from 'react'

const Operations = ({clear, complement, rotate, rotateIntervals, invert, save}) => (
  <div className="flex flex-row justify-center">
    <button 
        className="operation-btn btn-invert"
        onClick={invert}
    > Invert </button>
    <button 
        className="operation-btn btn-complement"
        onClick={complement}
    > Complement </button>
    <button 
        className="operation-btn btn-rotate"
        onClick={() => rotate(-1)}
    > Rotate-L </button>
    <button 
        className="operation-btn btn-rotate"
        onClick={() => rotate(1)}
    > Rotate-R </button>
    <button 
        className="operation-btn btn-rotate-intervals"
        onClick={() => rotateIntervals()}
    > Rotate-Intervals (modes)</button>
    <button 
        className="operation-btn btn-clear"
        onClick={clear}
    > clear </button>
    <button 
        className="operation-btn btn-save"
        onClick={save}
    > save </button>
  </div>
)

export default Operations