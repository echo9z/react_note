// import logo from './logo.svg';
import { useState } from 'react';
import axios from 'axios'
import SearchHeader from './components/search-header'
import SearchList from './components/search-list'

import './App.css';

function App() {
  const [state, setState] = useState([])
  
  return (
    <div className="App">
      <div className="container">
        <SearchHeader />
        <SearchList />
      </div>
    </div>
  );
}

export default App;
