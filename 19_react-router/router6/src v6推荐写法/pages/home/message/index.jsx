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
                // history.push(`${url}/detail`, { 
                //   id: item.id,
                //   title: item.content
                // })
              }}>push</button> | <button onClick={() => {
                navigate('/home/message/detail',{ 
                  replace: true, 
                  state: { id: item.id, title: item.content }
                })
                // history.replace(`${url}/detail`, { 
                //   id: item.id,
                //   title: item.content
                // })
              }}>replace</button>
            </li>
          )
        }
      </ul>
      <Outlet />
    </div>
  )
}
