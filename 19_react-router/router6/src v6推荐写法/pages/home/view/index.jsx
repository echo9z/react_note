import { useParams } from 'react-router-dom'

export default function HomeView() {
  const { info } = useParams()
  return (
    <ul>
      { 
        Array.from({length: 3}).map((item, i) => 
          <li key={i}><a>{info}{i}</a></li>
        ) 
      }
    </ul>
  )
}
