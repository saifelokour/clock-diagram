//@ts-check
import React from 'react'
import { symbol } from './helpers/symbol.js'

const Note = ({note, onClick, coordinates, className}) => (
  <button className={className} style={coordinates} onClick={onClick}>
    {note}
  </button>
)

const point = (r, i) => {
  // (x + r cos(2iπ/n), y + r sin(2iπ/n))
  const x = r + r * Math.cos(2 * i * Math.PI/12 - Math.PI/2)
  const y = r + r * Math.sin(2 * i * Math.PI/12 - Math.PI/2)
  return [x, y]
}

const Diagram = ({notes, select, isPreview = false, r = 90, b = 40}) => {
  const containerSize = (r*2)+b
  // h-10 and w-10 = 40px
  return (
    <div id="clock" className="relative m-auto" style={{height: containerSize, width: containerSize}}>
      {notes.map((isSelected, i) => {
        const [x, y] = point(r, i)
        
        const onClick = isPreview ? () => "" : () => select(i)
        const classPredicates = {preview: isPreview, selected: isSelected}
        const classes = Object.keys(classPredicates)
          .filter(key => classPredicates[key])
          .map(key => key)
          .join(" ")

        return <Note
          key={i}
          note={symbol(i)}
          className={"note-btn " + classes}
          coordinates={{ left: x, top:  y }}
          onClick={onClick}
        />
      })}
    </div>
  )
}

export default Diagram
