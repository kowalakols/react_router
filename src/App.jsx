import { Routes, Route } from 'react-router'

import Navbar from './components/nav/navbar.jsx'
import Home from './components/home/Home.jsx'
import Activity from './components/Activities/Activities.jsx'
import ActivityShow from './components/ActivityShow/ActivitiesShow.jsx'
import ActivityCreate from './components/ActivityCreate/ActivityCreate.jsx'
import ActivityUpdate from './components/ActivitiesEdit/ActivitiesEdit.jsx'
function App() {

  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path="/activities" element={<Activity />} />
        <Route path="/activities/:activityId" element={<ActivityShow />} />
        <Route path="/activities/:activityId/edit" element={<ActivityUpdate />} />
        <Route path="/activities/new" element={<ActivityCreate />} />
      </Routes>
    </>
  )
}

export default App
