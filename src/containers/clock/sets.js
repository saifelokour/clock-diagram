//@ts-check
import React from 'react'

import IntervalVector from './interval_vector'
import Diagram from './diagram'

const Sets = ({sets, load, remove}) => (
  <>
    <div className="flex-1 text-lg p-2 font-semibold border-b-2 w-64 text-center">Sets</div>
    { sets.size === 0 ?  
    (<div className="flex-1 text-gray-500 mt-2 text-sm text-center">You have no saved sets.</div>)
    : sets.map(([vector, notes], i) => (
        <div key={i} className="relative">
          <div className="flex flex-row  p-4 boder-b-2 cursor-pointer hover:bg-gray-100 " onClick={() => load(i)}>
            <div className="flex-initial my-auto">
              <Diagram
                notes={notes}
                isPreview={true}
                r={20}
                b={8}
              />
            </div>
            <div className="flex-initial text-xs self-center px-4">
              <IntervalVector
                vector={vector}
                preview={true}
              />
            </div>
          </div>  
          <div className="absolute top-0 right-0">
            <button className="text-red-900 bg-red-500 rounded-full p-1 m-1 w-4 h-4 text-center text-xs leading-none"
              onClick={() => remove(i)}
            ></button>
          </div>
        </div>
      ))
    }
  </>
)

export default Sets