//@ts-check
import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  clear,
  select,
  complement,
  rotate,
  rotateIntervals,
  invert,
  save,
  load,
  remove
} from '../../modules/clock'
import IntervalVector from './interval_vector'
import Diagram from './diagram'
import Operations from './operations'
import Sets from './sets'

const Clock = props => {

  return (
    <div className="flex flex-row content-center">
      <div className="flex flex-col w-1/2">
        <div className="flex-none">
            <IntervalVector vector={props.vector} />
        </div>
        <div className="flex-none mt-5">
          <Diagram
            notes={props.notes}
            select={props.select}
          />
        </div>
        <div className="flex-none mt-5">
          <Operations
            clear={props.clear}
            complement={props.complement}
            rotate={props.rotate}
            rotateIntervals={props.rotateIntervals}
            invert={props.invert}
            save={props.save}
          />
        </div>
      </div>
      <div className="flex-initial overflow-auto" style={{height: "24rem"}}>
        <Sets
          sets={props.sets}
          load={props.load}
          remove={props.remove}
        />
      </div>
    </div>
  )
}

const mapStateToProps = ({clock}) => ({
  vector: clock.vector,
  notes: clock.notes,
  sets: clock.sets
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clear,
      select,
      complement,
      rotate,
      rotateIntervals,
      invert,
      save,
      load,
      remove,
      changePage: () => push('/clock')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)
