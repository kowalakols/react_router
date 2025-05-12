import { Routes, Route } from 'react-router'

import Navbar from './components/nav/navbar.jsx'
import Home from './components/home/Home.jsx'
import Activity from './components/Activities/Activities.jsx'
import ActivityShow from './components/ActivityShow/ActivitiesShow.jsx'
import ActivityCreate from './components/ActivityCreate/ActivityCreate.jsx'
import ActivityUpdate from './components/ActivitiesEdit/ActivitiesEdit.jsx'
import Register from './components/Register/Register'
import Login from './components/Login/Login'


import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'

function App() {
  const { user } = useContext(UserContext)

  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path="/activities" element={<Activity />} />
        <Route path="/activities/:activityId" element={<ActivityShow />} />
        <Route path="/activities/:activityId/edit" element={<ActivityUpdate />} />
        <Route path="/activities/new" element={<ActivityCreate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
