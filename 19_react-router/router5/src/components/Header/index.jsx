import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function Header(props) {
  // const history = useHistory()
  console.log(props, 'Header')
  const {history} = props
  return (
    <div>
      <button onClick={() => history.goBack()}>后退</button>
      <button onClick={() => history.goForward()}>前进</button>
    </div>
  )
}
export default withRouter(Header)
