import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import DefaultLayout from './layout/defaultLayout'
import MainPage from './pages/mainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
            <Route index element={<MainPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
