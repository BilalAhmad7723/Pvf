import React from 'react'
import RecentNewscarousel from '../Carousels/RecentNewscarousel'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


const RecentNews = () => {
  return (
	<div className="content-block">
      			<div className="section-area section-sp2">
                <div className="container">
					<div className="row">
						<div className="col-md-12 heading-bx left">
							<h2 className="title-head">Recent <span>News</span></h2>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
						</div>
					</div>
					<RecentNewscarousel/>
	
				</div>
			</div>

   </div>
  )
}

export default RecentNews
