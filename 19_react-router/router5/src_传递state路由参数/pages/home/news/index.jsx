import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function News() {
  const {path} = useRouteMatch()
  console.log(path);
  return (
    <div style={{background: 'pink'}}>
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    </div>
  )
}
