import React from 'react'
// import Dashboard from './pages/Dashboard.jsx'
import HiringDetails from './pages/HiringDetails.jsx'
import AddJob from './pages/Addjob.jsx'
import JobList from './pages/JobList.jsx'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Dashboard2 from './pages/Dashboard2.jsx'

const App = () => {
  return (
    <div className='bg-gray-50 text-black'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Routes>
          <Route path='/' element={<></>}/>
          {/* <Route path='/admin-dashboard' element={<Dashboard />}/> */}
          <Route path='//hiring-detail' element={<HiringDetails />}/>
          <Route path='/add-job' element={<AddJob />}/>
          <Route path='/job-list' element={<JobList />}/>
          <Route path='/Query-detail' element={<Dashboard2 />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App