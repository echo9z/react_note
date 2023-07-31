import React from 'react'
import {useRouteMatch, Redirect, Route, Switch, NavLink } from 'react-router-dom'
import News from './news'
import Message from './message'
import HomeView from './home-view'

import { HomeWrapper } from './style.js'
export default function Home({ routes }) {
  const match = useRouteMatch()
  console.log(routes)
  return (
    <HomeWrapper>
      <h2>Home view content</h2>
      <ul className='tag'>
        <li><NavLink to={`${match.url}/news`} >News</NavLink></li>
        <li><NavLink to={`${match.url}/message`} >Message</NavLink></li>
      </ul>
      <Switch>
        {/* 比如当请求 /home直接重定向到 /home/news */}
        {routes.map((route,idx) => (
          <Route key={idx} path={route.path} render={routeProps => (
            <route.component {...routeProps} routes={route.routes} />
          )}/>
        ))}
        {/* <Route path={`${match.path}/news`} component={News}/>
        <Route path={`${match.path}/message`} component={Message}/>
        <Route path={`${match.path}/:info`} component={HomeView}/> */}
        <Redirect from={match.url} to={`${match.url}/news`} />
      </Switch>
    </HomeWrapper>
  )
}

