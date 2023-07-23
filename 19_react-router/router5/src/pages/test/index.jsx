import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function Test() {
  const {path} = useRouteMatch()
  console.log(path);
  return (
    <div style={{background: 'pink'}}>Test内容:{path}</div>
  )
}
