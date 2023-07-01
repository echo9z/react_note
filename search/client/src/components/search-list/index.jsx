import React from 'react'
// import PropTypes from 'prop-types'

function TodoList({}) {

  return (
    <div className="row">
      {Array.from({ length: 6 }).map((item, idx) => {
        return (
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank" rel="noopener noreferrer">
              <img alt="" src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: '100px' }}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList
