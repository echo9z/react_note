// import logo from './logo.svg';
import { Suspense, useEffect, useState } from 'react';
import SearchHeader from './components/search-header'
import SearchList from './components/search-list'

// import './App.css';

function App() {
  const [list, setList] = useState([])
  const [status, setStatus] = useState({
    isFirst: true,
    isLoading: false,
    err: ''
  })

  const changeList = (listData) => {
    setList(listData.items)
  }
  const changeStatus = (status) => {
    setStatus(v => ({...v, ...status}))
  }

  return (
    <div className="App">
      <div className="container">
        <SearchHeader changeList={changeList} changeStatus={changeStatus} />
        <SearchList list={list} status={status}/>
      </div>
    </div>
  );
}

export default App;
