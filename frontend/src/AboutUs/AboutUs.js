import React from 'react'
import Footer from '../Homepage/Footer'
import WhatPeopleSay from '../Homepage/WhatPeopleSay'
import Navbar from '../Navbar/Navbar'
import ClientStats from './ClientStats'
import Introduction from './Introduction'
import Navigation from './Navigation'
import NewSkill from './NewSkill'
import OurStory from './OurStory'
import TitleSection from './TitleSection'

const AboutUs = () => {
  return (
<>
    <Navbar/>
	<TitleSection/>
	<Navigation/>
	<Introduction/>
	<OurStory/>
	<ClientStats/>
	<NewSkill/>
	<WhatPeopleSay/>
	<Footer/>
</>
  )
}

export default AboutUs
