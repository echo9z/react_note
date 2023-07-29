import React from 'react'
import { Route, Link } from 'react-router-dom'

export default function ListItemLink({to, children, ...rest}) {
// export default function FadingRoute(props) {
  console.log({...rest});
  return (
    <Route
      path={to}
      children={(rootProps) => { // 结构
        console.log(rootProps)
        return (
          <li>
            <Link to={to} {...rest}
              className={rootProps.match ? "active" : ""}
            >{children}</Link>
          </li>)
      }}
    />
  )
}