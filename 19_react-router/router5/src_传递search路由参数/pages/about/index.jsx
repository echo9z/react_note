import React from 'react'

export default function About(props) {
  console.log(props);
  return (
    <div>
      About789
      <Test {...props} />
    </div>
  )
}

function Test({children}) {
  return (
    <div>{children}</div>
  )
}