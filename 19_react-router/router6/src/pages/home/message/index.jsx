import {useState} from 'react'
import { useNavigate, Link, Outlet } from "react-router-dom";

export default function Message() {
  const navigate = useNavigate()

  const [arr/* , setArr */] = useState([
    {id:1, content: 'message01'},
    {id:2, content: 'message02'},
    {id:3, content: 'message03'},
  ])
  return (
    <div>
      message
      <button onClick={() => navigate(-1)}>后退</button>
      <button onClick={() => navigate(1)}>前进</button>

      <ul>
        {
          arr.map((item) =>
            <li key={item.id} >
              {/* 在v5中传递state <Link to={{ path:'/a', state:{id, title} }} /> to传递一个对象
                v6中只写一个state参数 <Link to={{ path:'/a', state:{id, title} }} */}
              <Link to='/home/message/detail'
                state={{ 
                  id: item.id,
                  title: item.content
                }}>
                {`detail${item.id}`}
              </Link> &nbsp;
              <button onClick={() => {
                navigate('/home/message/detail', { 
                  state: { id: item.id, title: item.content }
                })
              }}>push</button> | <button onClick={() => {
                navigate('/home/message/detail',{ 
                  replace: true, 
                  state: { id: item.id, title: item.content }
                })
              }}>replace</button>
            </li>
          )
        }
      </ul>
      {/* 展示三级路由 /home/message/detail */}
      <Outlet />
    </div>
  )
}
