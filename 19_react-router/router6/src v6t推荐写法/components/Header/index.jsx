import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
  return (
    <div>
      <button type="primary" onClick={() => navigate(-1)}>后退</button>
      <button type="primary" onClick={() => navigate(1)}>前进</button>
    </div>
  )
}
export default Header
