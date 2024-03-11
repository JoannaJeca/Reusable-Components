import React from 'react'
import Hamburger from '../HOC/Hamburger'
import SideBar from './SideBar'
import HomeScreen from './HomeScreen'

const Layout = () => {
  return (
    <div>
        <Hamburger/>
        <div className="flex ">
            <SideBar/>
            <HomeScreen/>
        </div>
    </div>
  )
}

export default Layout