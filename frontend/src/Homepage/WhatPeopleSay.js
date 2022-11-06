import React from 'react'
import WhatPeopleSaycarousel from '../Carousels/WhatPeopleSaycarousel'

const WhatPeopleSay = () => {
  return (
	<div className="content-block">
		      <div className="section-area section-sp2 bg-fix ovbl-dark bg_img" >
                <div className="container">
					<div className="row">
						<div className="col-md-12 text-white heading-bx left">
							<h2 className="title-head text-uppercase">what people <span>say</span></h2>
							<p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
						</div>
					</div>
					<WhatPeopleSaycarousel/>
				</div>
			</div>
  </div>
  )
}

export default WhatPeopleSay
