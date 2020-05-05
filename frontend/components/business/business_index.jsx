import React from 'react';
import {Link} from 'react-router-dom';
import BusinesHeader from './business_header_container'
import BusinessIndexItem from './business_index_item'
import Footer from '../footer/footer';

class BusinessIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
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
          {/* <div className="business-index-page-container-subheader-2">
            <i className="fas fa-dollar-sign" /> Price Range{" "}
            <ul className="business-index-page-container-subheader-2-dropdown">
              <li onClick={() => this.update("$")}>$</li>
              <li onClick={() => this.update("$$")}>$$</li>
              <li onClick={() => this.update("$$$")}>$$$</li>
              <li onClick={() => this.update("$$$$")}>$$$$</li>
            </ul>
          </div> */}
        </div>
        <div className="business-item-render">
          <div className="individual-business">
            {this.props.business.map((business, idx) => (
              <div>
                <BusinessIndexItem
                  business={business}
                  // key={business.id}
                  key={idx}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BusinessIndex;