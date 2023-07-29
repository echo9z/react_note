import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

// 封装useQuery hooks
function useQuery() {
  const { search } = useLocation()
  console.log(new URLSearchParams(search))
  return React.useMemo(() => new URLSearchParams(search), [search])
}

export default function Detail(props) {
  console.log(props)
  const search = props.location.search
  console.log(new URLSearchParams(search))
  // const { messageId } = useParams()
  return (
    <div>
      <ul>
        <li>Id: {id}</li>
        <li>Title: {title}</li>
        <li>Content: 变得更强</li>
      </ul>
    </div>
  )
}
