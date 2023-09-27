import React from 'react'
import Homelast from './Homelast'
import Homesect6 from './Homesect6'
import Homesect2 from './Homesect2'
import HomeBanner from './HomeComp/HomeBanner'
import HomeManufa from './HomeComp/HomeManufa'
import Homeinsta from './HomeComp/HomeInsta'
const Home = () => {
  return (
    <>
    <HomeBanner />
    <Homesect2 />
    <HomeManufa />
    <Homeinsta />
    <Homesect6/>
    <Homelast />

    </>
  )
}

export default Home