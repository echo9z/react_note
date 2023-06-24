import React, { useState, useEffect } from 'react'
import CartFooter from '../cart-footer';
import CartHeader from '../cart-header';
import CartGoodsList from '../cart-goods-lists';
import request from '../../utils/request';
import CompContext from '../context';

export default function Cart() {
  const [goodsList, setGoodsList]  = useState([])
  const [checkedAll, setCheckAll] = useState(false)

  useEffect(() => {
    const getGoodsList = async () => {
      const data = await request('/goodsList', 'GET')
      // console.log(data);
      setGoodsList(data)

      // 设置全选
      setCheckAll(data.every(good => (good.goods_state)))
    }
    getGoodsList()
  }, [])

  const {Provider} = CompContext

  const changeGoodsState = (id, checked) => {
    const newList = goodsList.map((good) => {
      if(good.id === id) {
        return { ...good, goods_state: checked }
      }
      return good
    })
    setGoodsList(newList)

    setCheckAll(newList.every((good) => (good.goods_state)))
    // TODO: 请求接口修改为id的状态
  }
  const changeGoodsCount = (id, count) => {
    if (count < 1) return
    const newList = goodsList.map((good) => {
      if(good.id === id) {
        return { ...good, goods_count: count }
      }
      return good
    })
    // 将单个id商品状态进行修改
    setGoodsList(newList)
  }

  // const isCheckAll = () => {
  //   return goodsList.every((good) => (good.goods_state))
  // }

  const amount = () => {
    const isState = goodsList.filter((good) => (good.goods_state))
    if (isState) return
    const amount = isState.reduce((prev, good) => {
      console.log(prev, good);
      return prev.goods_price + good.goods_price
    })
    console.log(amount);
    // return goodsList.filter((good) => (good.goods_state))
  }
  
  const changeCheckedAll = (checked) => {
    console.log(checked);
    setCheckAll(checked)

    setGoodsList(goodsList.map((good) => {
      return { ...good, goods_state: checked }
    }))

    // TODO: 请求接口修改选中状态
  }

  const totalCount = goodsList.reduce((count, item) => {
    if (item.goods_state) {
      return count + item.goods_count;
    }
    return count;
  }, 0);

  const totalPrice = goodsList.reduce((count, item) => {
    if (item.goods_state) {
      return count + item.goods_count * item.goods_price;
    }
    return count;
  }, 0);

  return (
    <div>
      <Provider value={{
        changeState: changeGoodsState,
        changeCount: changeGoodsCount
      }}>
        <CartHeader>购物车</CartHeader>
        <CartGoodsList goodsList={goodsList} />
        <CartFooter
          checkedAll={checkedAll}
          amount={amount()}
          total={totalCount}
          price={totalPrice}
          changeCheckedAll={changeCheckedAll} />
      </Provider>
    </div>
  )
}
