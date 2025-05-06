import { Routes, Route } from 'react-router'

import Navbar from './components/nav/navbar.jsx'
import Home from './components/home/Home.jsx'

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/profile' element={<profileIndex />} />
        <Route path="/profiles/:profileId" element={<ProfileShow />} />
      </Routes>
    </>
  )
}

export default App
