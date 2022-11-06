import React from 'react'
import UpcomingEventcarousel from '../Carousels/UpcomingEventcarousel'
const UpcomingEvents = () => {
  return (
	<div className="content-block">
      			<div className="section-area section-sp2">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center heading-bx">
							<h2 className="title-head m-b0">Upcoming <span>Events</span></h2>
							<p className="m-b0">Upcoming Education Events To Feed Brain. </p>
						</div>
					</div>
<UpcomingEventcarousel />
					<div className="text-center">
						<a href="#" className="btn">View All Events</a>
					</div>
				</div>
			</div>
    </div>
  )
}

export default UpcomingEvents
