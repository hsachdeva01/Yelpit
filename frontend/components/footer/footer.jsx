import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => (
  <div className="footer">
    <div className="footer-container">
      <a className="github-btn-footer" href="https://github.com/hsachdeva01">
        <i className="fab fa-github" />
      </a>
      <a
        className="linkedin-btn"
        href="https://www.linkedin.com/in/hari-sachdeva-8748051a6/"
      >
        <i className="fab fa-linkedin" />
      </a>
      <img
        className="footer-image"
        src="https://s3-media0.fl.yelpcdn.com/assets/public/footer_cityscape.yelp-shared-styles.yji-573fa19c843556eac5a998fc6d1f80f8.png"
      />
    </div>
    <p>Copyright @2020 Yelpit - Yelp Clone</p>
  </div>
);

export default footer;