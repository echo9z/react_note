import {useState} from 'react'

export default function InlineStyle() {
  const [fontSize, setFontSize] = useState(20)
  return (
    <div>
      <button onClick={() => setFontSize(v => v+5)}>改变字体</button>
      <h2 style={{color: 'red', fontSize}}>inline-style</h2>
      <p style={{backgroundColor: 'skyblue'}}>
        this is inline content
      </p>
    </div>
  )
}
