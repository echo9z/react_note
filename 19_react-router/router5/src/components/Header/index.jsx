import React from 'react'
import { withRouter, /* useHistory */} from 'react-router-dom'
import { Button } from 'antd'
function Header(props) {
  // const history = useHistory()
  console.log(props, 'Header')
  const {history} = props
  return (
    <div>
      <Button type="primary" onClick={() => history.goBack()}>后退</Button>
      <Button type="primary" onClick={() => history.goForward()}>前进</Button>
    </div>
  )
}
export default withRouter(Header)
