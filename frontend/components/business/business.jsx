import React from 'react';
import {Link} from 'react-router-dom';

class Business extends React.Component{
  constructor(props){
    super(props);
    // console.log(props)
    // debugger
  }

  render(){
    // debugger
    // debugger
    return(
      <div className="business-index">
        <Link className="business-name" to={`/business${this.props.business.id}`}>{this.props.business.name}</Link>
        <li className="business-index-item-rating">
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          <i className="fas fa-star"/>
          </li>
        <span className="price-category">
          <ul>
            <li className="price">{this.props.business.price_range}</li>
            <li className="category">Category</li>
          </ul>
        </span>
        <p className="business-description">
          {this.props.business.description}
        </p>
        <div className="additional-info">
          <p>{this.props.business.phone_number}</p>
          <p>{this.props.business.website}</p>
          <p>{this.props.business.address}</p>
          <p>{this.props.business.state}</p>
          <p>{this.props.business.city}</p>
          <p>{this.props.business.zip_code}</p>
        </div>
        
      <div>Business Page</div>
      {this.props.business.name}
      </div>

    )
  }
}

export default Business;