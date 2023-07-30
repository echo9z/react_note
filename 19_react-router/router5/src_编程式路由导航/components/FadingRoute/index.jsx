import React from 'react'
import { Route } from 'react-router-dom'

export default function FadingRoute({component: Component, ...rest}) {
// export default function FadingRoute(props) {
  // console.log({...rest});
  // ...rest类似于剩余参数，比如props {component computedMatch location path}这些对象属性，
  // 先结构component, 在通过..rest剩余参数将computedMatch location path 合并到...rest对象中
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Component {...routeProps} />
      )}
    />
  )
}
