import React, { useState } from 'react'
import classnames from 'classnames'
import './style.css'

export default function Classnames() {
  const [isActive]=useState(true)
  return (
    <div>
      <h3 className={`${isActive? 'active' : ''}`}>132up up</h3>

      <div className={classnames({box: isActive})} >
        123
      </div>
    </div>
  )
}
