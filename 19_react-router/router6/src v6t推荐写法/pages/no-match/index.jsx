import { useLocation } from 'react-router-dom'

export default function NoMatch() {
  const location = useLocation()
  return (
    <div>
      <h2>404</h2>
      <h3>no path <code>{location.pathname}</code></h3>
    </div>
  )
}
