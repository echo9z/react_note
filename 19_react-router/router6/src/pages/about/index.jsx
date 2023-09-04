import { useState, useEffect } from 'react'
import { useNavigate, Navigate } from "react-router-dom"

export default function About() {
  const [sum, setSum] = useState(0)
  const navigate = useNavigate();
  useEffect(() => {
    if (sum === 2) navigate('/')
  }, [sum])

  const goDetail = () => {
    navigate('/home/message/detail', {
      replace: true, // 将最近一条历史记录替换为 /home/message/detail
      state: { id: 999, title: '编程跳转' }
    })
  }

  return (
    <div>
      <h3>about</h3> <br/>
      {/* Navigate只要被渲染 就会触发路由跳转，replace=true为replace模式，如果为false为push模式 */}
      {sum === 2? <Navigate to='/'/> :  <p>当前sum: {sum}</p>}
      <button onClick={() => navigate('/')} >导航至/</button>
      <button onClick={() => goDetail()} >导航至/home/message/detail</button>
      <button onClick={() => setSum(2)} >sum值为2跳转 /</button>
    </div>
  )
}
