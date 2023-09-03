import { useLocation } from 'react-router-dom'

export default function News() {
  const location = useLocation()
  console.log(location);
  return (
    <div style={{background: 'pink'}}>
      <h3>news</h3>
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    </div>
  )
}
