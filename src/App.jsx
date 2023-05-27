import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Components/LoginPage/LoginPage';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <LoginPage/> */}
        <Dashboard/>

        </div>

    </>
  )
}

export default App
