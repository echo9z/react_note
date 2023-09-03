import { useNavigate } from "react-router-dom"

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      about <br/>
      <button onClick={() => navigate('/')} >导航至/</button>
    </div>
  )
}
