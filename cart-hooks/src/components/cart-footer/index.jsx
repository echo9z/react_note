import React from 'react'
// import PropTypes from 'prop-types'
import './index.scss'

function CartFooter({checkedAll, price, total, changeCheckedAll}) {
  return (
    <div className='cart-footer'>
      <div className=''>
        <input type="checkbox"
          className='checkbox'
          checked={checkedAll}
          id="footerCheck"
          onChange={e => changeCheckedAll(e.target.checked)} />
        <label htmlFor="footerCheck">全选</label>
      </div>
      <div>
        <span>合计：</span>
        <span className='price'>￥{price}</span>
      </div>
      <button type='button' className="footer-btn btn-primary">结算 ({total})</button>
    </div>
  )
}

CartFooter.propTypes = {}

export default CartFooter
