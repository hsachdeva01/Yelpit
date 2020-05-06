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
  // {/* {props.business.photoUrls.slice(0,1).map((photo, idx) => {
  //     return (
  //       <img src={photo} alt="business-photo" key={idx}/>
  //     )
  //   })} */}
  // {/* <div className="business-pic">
  //   <Link to={`/business/${props.business.id}`}><img src={props.business.photos}/></Link>
  // </div> */}
  // {/* <Link
  //   className="business-pic"
  //   to={`/businesses/${props.business.id}`}
  // ></Link> */}

  // <div className="business-box">
  //   <div className="name-rating">
  //     <Link className="business-name" to={`/businesses/${props.business.id}`}>
  //       {props.business.id} {". "} {props.business.name}
  //     </Link>
  //     <li className="business-rating">
  //       <i className="fas fa-star" />
  //       <i className="fas fa-star" />
  //       <i className="fas fa-star" />
  //       <i className="fas fa-star" />
  //       <i className="fas fa-star" />
  //     </li>
  //   </div>

  //   <div className="price-category">
  //     <p className="price-range">{props.business.price_range}</p>
  //     <p className="business-category">{props.business.category}</p>
  //   </div>
  //   <div>
  //     <li className="business-address">{props.business.address}</li>
  //     <div className="business-city-state-zip">
  //       <li>
  //         {props.business.city}, {props.business.state}{" "}
  //         {props.business.zip_code}
  //       </li>
  //     </div>
  //   </div>
  //       {/*
  //       <li className="business-info">
  //         {props.business.phone_number}
  //         {props.business.website}
  //       </li> */}
  //   //   </div>
  //   // </div>
);

export default BusinessIndexItem;