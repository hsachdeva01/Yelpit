import React from 'react';

const HomepageDisplay = props => (
  <div className="display">
    <p className="homepage-bottom">Find the Best Business in Town!</p>
    <div className="display-pictures">
      <div className="pictures">
        <a id="picture1" href="#/businesses">
          <img src="https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/16:9/w_1024,c_limit/Alo-Restaurant__2018_Raffi-Photo-2.jpg" />
        <div>
          <p>Restaurants</p>
        </div>
        </a>
      </div>
      <a id="picture2" href="#/businesses">
        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2019-11/26/19/campaign_images/29ba5bb0d258/22-underrated-bars-every-londoner-needs-to-visit--2-376-1574795531-0_dblbig.jpg" />
      <div>
        <p>Bars</p>
      </div>
      </a>
    </div>
  </div>
);

export default HomepageDisplay;