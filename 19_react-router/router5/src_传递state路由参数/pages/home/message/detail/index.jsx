import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

// 封装useQuery hooks
function useQuery() {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

export default function Detail(props) {
  console.log(props)
  const state = useLocation().state || {}
  // const search = props.location.search
  // const query = new URLSearchParams(search)

  const query2 = useQuery()
  return (
    <div>
      <ul>
        <li>Id: {state.id || null}</li>
        <li>Title: {state.title || null}</li>
        <li>Content: 变得更强</li>
      </ul>
    </div>
  )
}
