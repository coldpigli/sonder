import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Bookmarks, Feed, FindPeers, Landing, Login, Signup, Trending, UserProfile } from 'routes'

const RoutingConfigs = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/peers' element={<FindPeers/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path="/bookmarks" element={<Bookmarks/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>

  )
}

export default RoutingConfigs;