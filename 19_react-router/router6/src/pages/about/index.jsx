import { useState, useEffect } from 'react'
import { useNavigate, Navigate } from "react-router-dom"

export default function About() {
  const [sum, setSum] = useState(0)
  const navigate = useNavigate();
  useEffect(() => {
    if (sum === 2) navigate('/')
  }, [sum])

  return (
    <div>
      <h3>about</h3> <br/>
      {/* Navigate只要被渲染 就会触发路由跳转，replace=true为replace模式，如果为false为push模式 */}
      {sum === 2? <Navigate to='/'/> :  <p>当前sum: {sum}</p>}
      <button onClick={() => navigate('/')} >导航至/</button>
      <button onClick={() => setSum(2)} >sum值为2跳转 /</button>
    </div>
  )
}
