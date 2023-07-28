import React from 'react'
import {useRouteMatch, Redirect, Route, Switch, NavLink, useParams} from 'react-router-dom'
import News from './news'
import Message from './message'
import { HomeWrapper } from './style.js'
export default function Home() {
  const match = useRouteMatch()

  return (
    <HomeWrapper>
      <h2>Home view content</h2>
      <ul className='tag'>
        <li><NavLink to={`${match.url}/news`} >News</NavLink></li>
        <li><NavLink to={`${match.url}/message`} >Message</NavLink></li>
      </ul>
      <Switch>
        {/* 比如当请求 /home直接重定向到 /home/news */}
        <Redirect exact from={match.url} to={`${match.url}/news`} />
        <Route exact path={`${match.path}/news`} component={News}/>
        <Route exact path={`${match.path}/message`} component={Message}/>
        <Route exact path={`${match.path}/:info`} component={HomeView}/>
      </Switch>
    </HomeWrapper>
  )
}
function HomeView() {
  const { info } = useParams()
  return (
    <ul>
      { 
        Array.from({length: 3}).map((item, i) => 
          <li key={i}><a>{info}{i}</a></li>
        ) 
      }
    </ul>
  )
}
