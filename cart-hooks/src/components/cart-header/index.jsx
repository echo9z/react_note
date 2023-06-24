import React from 'react'

import './index.scss';

function CartHeader({children}) {
  return (
    <div className='cart-header'>{children}</div>
  )
}

export default CartHeader
