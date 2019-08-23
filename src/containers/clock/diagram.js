//@ts-check
import React from 'react'

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

const circleClass = (selected, preview) => (preview 
  ? circlePreviewClasses(selected) 
  : circleClasses(selected)
)

const circleClasses = (selected) => (selected 
  ? "border-solid border-2 border-gray-700" 
  : "border-2 border-gray-100"
)

const circlePreviewClasses = (selected) => (selected ? "bg-gray-700" : "bg-gray-300")

const Note = ({note, onClick, coordinates, preview}) => (
  <button
    className="absolute lg:h-10 lg:w-10 h-4 w-4 rounded-full shadow-lg cursor-pointer text-gray-700 lg:text-xl text-xs"
    style={{
      ...coordinates,
      "outline": "none",
      "background": "center"
    }}
    onClick={onClick}
  >
    {symbol(note)}
  </button>
)

const point = (r, i) => {
  // (x + r cos(2iπ/n), y + r sin(2iπ/n))
  const x = r + r * Math.cos(2 * i * Math.PI/12 - Math.PI/2)
  const y = r + r * Math.sin(2 * i * Math.PI/12 - Math.PI/2)
  return [x, y]
}

const Diagram = ({notes, select, preview = false, r = 90, b = 40}) => {
  const containerSize = (r*2)+b
  // h-10 and w-10 = 40px
  return (
    <div id="clock" className="relative m-auto" style={{height: containerSize, width: containerSize}}>
      {notes.map((selected, i) => {
        const [x, y] = point(r, i)

        const size = preview ? "h-2 w-2" : "lg:h-10 lg:w-10 h-4 w-4"
        return (
          <div
            key={i}
            className={"absolute " + size + " rounded-full bg-transparent " + circleClass(selected, preview)} 
            style={{
              left: x,
              top: y
            }}
          ></div>
        )
      })}

      {preview ? "" : [...Array(12).keys()].map(i => {
        const [x, y] = point(r, i)

        return <Note
          key={i}
          note={i}
          coordinates={{
            left: x, 
            top:  y
          }}
          onClick={() => select(i)}
        />
        }
      )}
    </div>
  )
}

export default Diagram