import { Mockman } from 'components'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Bookmarks, Feed, FindPeers, Landing, Login, Signup, SinglePost, Trending, UserProfile } from 'routes'
import { PrivateRoutes } from './PrivateRoutes'

const RoutingConfigs = () => {
  return (
    <Routes>
        <Route index element={<Landing/>}/>
        <Route path="/" element={<PrivateRoutes/>}>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/post/:id" element={<SinglePost/>}/>
          <Route path='/peers' element={<FindPeers/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
          <Route path="/bookmarks" element={<Bookmarks/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
    </Routes>

  )
}

export default RoutingConfigs;