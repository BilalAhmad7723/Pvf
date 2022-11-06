import React from 'react'
import Footer from './Footer'
// import ImageSlider from './ImageSlider'
import RecentNews from './RecentNews'
import Search from './Search'
import Services from './Services'
import UpcomingEvents from './UpcomingEvents'
import WhatPeopleSay from './WhatPeopleSay'
import Navbar from '../Navbar/Navbar';
import Slidingcarousel from '../Carousels/HomepageTitlecarousel'

const Homepage = () => {
  return (
	<>
  <Navbar/>

		<Slidingcarousel/>
		 <Services />
		<Search/>
		<UpcomingEvents/>
		<WhatPeopleSay/>
		<RecentNews/>
		<Footer/> 
		</>
  )
}

export default Homepage
