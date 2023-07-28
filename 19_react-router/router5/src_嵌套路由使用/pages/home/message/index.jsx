import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function Message() {
  const {path} = useRouteMatch()
  console.log(path);
  return (
    <div>
      <ul>
        <li><a href="#" >message01</a></li>
        <li><a href="#" >message02</a></li>
        <li><a href="#" >message03</a></li>
      </ul>
    </div>
  )
}
