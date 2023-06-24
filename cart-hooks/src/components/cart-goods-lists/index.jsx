import React from 'react';
import CartGoodsItem from '../cart-goods-item'
import './index.scss'

function CartGoodsList({ goodsList }) {

  return (
    <div className='cart-goods-list'>
      {
        goodsList.map((good, idx) =>
          <CartGoodsItem key={idx} {...good} />)
      }
    </div>
  )
}

export default CartGoodsList