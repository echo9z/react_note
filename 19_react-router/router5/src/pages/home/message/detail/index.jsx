import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const { messageId } = useParams()
  return (
    <div>
      <ul>
        <li>Id: {messageId}</li>
        <li>Title: Message0{messageId}</li>
        <li>Content: 变得更强</li>
      </ul>
    </div>
  )
}
