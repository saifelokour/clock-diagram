const { List, Set } = require('immutable')

export const SELECT = 'clock/SELECT'
export const CLEAR = 'clock/CLEAR'
export const COMPLEMENT = 'clock/COMPLEMENT'
export const ROTATE = 'clock/ROTATE'
export const NEXTINTERVAL = 'clock/NEXTINTERVAL'
export const INVERT = 'clock/INVERT'

export const SAVE = 'clock/SAVE'
export const LOAD = 'clock/LOAD'
export const DELETE = 'clock/DELETE'

const emptyVector = [0,0,0,0,0,0]
const emptyNotes = [...Array(12).keys()].map((note, i) => false)


const initialState = {
  vector: List(emptyVector),
  notes: List(emptyNotes),
  sets: Set([])
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        vector: List(emptyVector),
        notes: List(emptyNotes)
      }
    case SELECT:
      const newNotes = state.notes.set(action.payload, !state.notes.get(action.payload))
      return {
        ...state,
        vector: calculateIV(newNotes),
        notes: newNotes
      }
    case COMPLEMENT:
      const complement = state.notes.map(n => !n)
      return {
        ...state,
        vector: calculateIV(complement),
        notes: complement
      }
    case ROTATE:
      const rotated = arrayRotate(state.notes, action.rotate)
      return {
        ...state,
        vector: calculateIV(rotated),
        notes: rotated
      }
    case NEXTINTERVAL:
      const next = nextInterval(state.notes)
      return {
        ...state,
        notes: next
      }
    case INVERT:
      const inverted = invertNotes(state.notes)
      return {
        ...state,
        vector: calculateIV(inverted),
        notes: inverted
      }
    case SAVE:
      return {
        ...state,
        sets: state.sets.add(List([state.vector, state.notes]))
      }
    case LOAD:
      return {
        ...state,
        vector: state.sets.get(action.payload).get(0),
        notes: state.sets.get(action.payload).get(1)
      }
    case DELETE:
      return {
        ...state,
        sets: state.sets.delete(action.payload)
      }
    default:
      return state
  }
}

// calculate interval vector
// TODO: create a cache to aviod calculating each time
const calculateIV = (notes) => {
  const intervalVector = [0,0,0,0,0,0]
  for(let i = 0; i < notes.size - 1; i++) {
    if(notes.get(i)) {
      for(let j = i + 1; j < notes.size; j++) {
        if(notes.get(j))
          incrementIV(intervalVector, Math.abs(j - i))
      }
    }
  }
  return List(intervalVector)
}

const incrementIV = (vector, interval) => {
  interval > 6 ? vector[12-interval-1]++
  : vector[interval-1]++
}

const arrayRotate = (arr, count) => {
  if(count > 0) {
    return arr.takeLast(arr.size - count).concat(arr.take(count))
  } else {
    return arr.takeLast(-count).concat(arr.take(arr.size + count))
  }
}

const nextInterval = (notes) => {
  const index = notes.findIndex((n, i) => n && i !== 0)
  return arrayRotate(notes, index)
}

// this might be wrong see: https://youtu.be/7wTOLhufgBQ
const invertNotes = (notes, axis = 0) => {
  const first = notes.get(0)
  const last = notes.get(notes.size/2)
  const firstHalf = notes.skip(1).take(notes.size/2 - 1).push(last).reverse()
  const lastHalf = notes.takeLast(notes.size/2 - 1).reverse().unshift(first)
  
  return lastHalf.concat(firstHalf)
}

////////////////////////////////////
///////////// ACTIONS /////////////
////////////////////////////////////

export const select = (index) => {
  return dispatch => {
    dispatch({
      type: SELECT,
      payload: index
    })
  }
}

export const clear = () => {
  return dispatch => {
    dispatch({
      type: CLEAR
    })
  }
}

export const complement = () => {
  return dispatch => {
    dispatch({
      type: COMPLEMENT
    })
  }
}

export const invert = () => {
  return dispatch => {
    dispatch({
      type: INVERT
    })
  }
}

export const rotate = (direction) => {
  return dispatch => {
    dispatch({
      type: ROTATE,
      rotate: direction
    })
  }
}

export const rotateIntervals = () => {
  return dispatch => {
    dispatch({
      type: NEXTINTERVAL
    })
  }
}


export const save = () => {
  return dispatch => {
    dispatch({
      type: SAVE
    })
  }
}

export const load = (index) => {
  return dispatch => {
    dispatch({
      type: LOAD,
      payload: index
    })
  }
}

export const remove = (index) => {
  return dispatch => {
    dispatch({
      type: DELETE,
      payload: index
    })
  }
}
