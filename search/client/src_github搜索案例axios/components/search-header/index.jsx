import React, {useRef, useState, useEffect} from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'

function SearchHeader({changeList, changeStatus}) {
  const searchRef = useRef(null)
  const [keywords, setKeywords] = useState('')
  useEffect(() => {
    const getList = async () => {
      changeStatus({isLoading: true})
      const res = await axios.get(`/api/search/users?q=${keywords}`)
        .catch(err => changeStatus({isLoading: false, err: err.message}))
      if(res.status === 200) {
        changeList(res.data)
        changeStatus({isLoading: false})
      }
    }
    keywords !== '' && getList()
  }, [keywords])

  const search = () => {
    const { value:keywords } = searchRef.current
    setKeywords(keywords)
    changeStatus({ isFirst: false })
  }
  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input ref={searchRef} type="text" placeholder="enter the name you search"/>&nbsp;
        <button onClick={search}>Search</button>
      </div>
    </section>
  )
}

export default SearchHeader
