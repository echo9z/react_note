import { useMemo } from 'react'
import { /* useParams, */ useLocation } from 'react-router-dom'

// 封装useQuery hooks
function useQuery() {
  const { search } = useLocation()
  
  return useMemo(() => new URLSearchParams(search), [search])
}

export default function Detail() {
  const state = useLocation().state || {}
  // const search = props.location.search
  // const query = new URLSearchParams(search)

  const query2 = useQuery()
  console.log("🚀 ~ Detail ~ query2:", query2)
  
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
