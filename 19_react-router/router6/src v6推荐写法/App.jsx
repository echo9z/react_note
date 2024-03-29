// import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './router'
import './App.css'

function App() {
  return (
    <>
      <h2>router V6</h2>
      {/* 之前同 element = useRouter([...]) */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
