import React, { useContext } from 'react'
import CompContext from '../context'
import CartCounter from '../cart-counter'
import './index.scss'

function GoodsItem({id, goods_count, goods_img, goods_name,goods_price,goods_state}) {
  const { changeState } = useContext(CompContext)
  return (
    <div className="cart-goods-item">
      <div className='left flex items-center'>
        <input className='checkbox' 
          type="checkbox" id={`checkbox-${id}`}
          checked={goods_state}
          onChange={e => changeState(id, e.target.checked)}
        />
        <label htmlFor={`checkbox-${id}`} className='custom-control-label'>
          <img src={goods_img} alt="" />
        </label>
      </div>
      <div className='right'>
        <div className='top'>{goods_name}</div>
        <div className='bottom'>
          <span className="price">¥{goods_price}</span>
          <CartCounter key={id} id={id} count={goods_count} />
        </div>
      </div>
    </div>
  )
}

export default GoodsItem