import React from 'react';
import {Link} from 'react-router-dom';
import BusinesHeader from './business_header_container'
import BusinessIndexItem from './business_index_item'
import Footer from '../footer/footer';
import BusinessMap from './business_map';

class BusinessIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    // window.scrollTo(0, 0);
    this.props.fetchBusinesses();
  }


  render(){
    return (
      <div>
        <div className="business-header-import">
          <BusinesHeader />
        </div>
        <div className="business-div-box">
          <p id="browsing-sf">Browsing San Francisco, CA Businesses</p>
          {/* <div className="business-index-prie-range">
            <i className="fas fa-dollar-sign" /> Price Range{" "}
            <ul className="price-range-dropdown">
              <li onClick={() => this.update("$")}>$</li>
              <li onClick={() => this.update("$$")}>$$</li>
              <li onClick={() => this.update("$$$")}>$$$</li>
              <li onClick={() => this.update("$$$$")}>$$$$</li>
            </ul>
          </div> */}
        </div>
        <div className="business-item-render">
          {/* <BusinessMap /> */}
          <div className="individual-business">
            {this.props.business.map((business, idx) => (
              <div key={idx}>
                <BusinessIndexItem
                  business={business}
                  // key={business.id}
                />
              </div>
            ))}
          </div>
          <div className="test"><BusinessMap /> </div>
        </div>
        <div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BusinessIndex;