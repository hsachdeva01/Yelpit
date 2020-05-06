import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndex from './business_index';

const BusinessIndexItem = props => (
  <div className="business-index-item">
    <Link className="business-photo" to={`/business/${props.business.id}`}>
      <img src={props.business.photoUrls[0]} />
    </Link>
    <div className="name">
      <Link className="business-name" to={`/businesses/${props.business.id}`}>
        {props.business.id} {". "} {props.business.name}{" "}
      </Link>
    </div>
    <div className="rating">
      <li className="business-rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />{" "}
      </li>
    </div>
    <div className="price-range">
      <p className="price-range">{props.business.price_range}</p>
    </div>
    <div className="address">
        <p className="business-address">{props.business.address}</p>
        {" "}
        </div>
        <div className="business-city-state-zip">
        {" "}
        
            {props.business.city}, {props.business.state} {" "}
            {props.business.zip_code}
          {" "}
      </div>
     </div>

);

export default BusinessIndexItem;