//@ts-check
import React from 'react'

const Interval = ({freq, interval, preview}) => (
  <div className="flex flex-col flex-none">
    <span className="mx-1">{symbol(freq)}</span>
    {preview ? "" : (<span className="text-gray-800 font-medium">{interval}</span>)}
  </div>
)

const IntervalVector = ({vector, preview}) => (
  <div id="interval-vector" className="flex flex-row justify-center text-center font-mono tracking-widest font-semibold">
      {"< "}{vector.map((freq, i) => <Interval key={i} freq={freq} interval={i+1} preview={preview}/>)}{" >"}
  </div>
)

const symbol = (number) => {
  switch (number) {
    case 10:
      return "T"
    case 11:
      return "E"
    case 12:
      return "C"
    default:
      return number
  }
}

export default IntervalVector