import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Feed, FindPeers, Landing, Login, Signup, UserProfile } from 'routes'

const RoutingConfigs = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/find-peers' element={<FindPeers/>}/>
        <Route path='/profile/:userId' element={<UserProfile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>

  )
}

export default RoutingConfigs;