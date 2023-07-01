import React from 'react'
// import PropTypes from 'prop-types'

function SearchHeader({}) {
  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search"/>&nbsp;<button>Search</button>
      </div>
    </section>
  )
}

export default SearchHeader
