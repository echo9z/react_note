import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import CompContext from '../context'

function CartCounter({id, count = 1}) {
  const { changeCount } = useContext(CompContext)
  const change = (type, id) => {
    switch (type) {
      case 'add':
        changeCount(id, count+1)
        break;
      case 'sub':
        changeCount(id, count-1)
        break;
      default:
        break;
    }
  }
  return (
    <div className='cart-counter'>
      <span onClick={() => change('sub')} >-</span>
      <input type="number" value={count}
        onChange={(e) => changeCount(id, +e.target.value) } />
      <span onClick={() => change('add', id)} >+</span>
    </div>
  )
}

CartCounter.propTypes = {
  count: PropTypes.number.isRequired,
}

export default CartCounter
