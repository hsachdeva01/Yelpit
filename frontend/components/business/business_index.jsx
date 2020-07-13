import React from 'react';
import BusinesHeader from './business_header_container'
import BusinessIndexItem from './business_index_item'
import Footer from '../footer/footer';
import BusinessMap from './business_map';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: []
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusinesses();

  }

  componentWillReceiveProps(props) {
    let business = props.business;
    if (this.props.location.search != "") {

      const params = new URLSearchParams(this.props.location.search);
      const details = {
        keyword: params.get('keyword'),
        city: params.get('location')
      }

      let data = [];

      if (details.keyword && details.city) {
        data = business.filter(business => business.name.toLowerCase().includes(details.keyword.toLowerCase()) ||
          business.city.toLowerCase().includes(details.city.toLowerCase()));
      } else if (details.keyword) {
        data = business.filter(business => business.name.toLowerCase().includes(details.keyword.toLowerCase()));
      } else {
        data = business.filter(business => business.city.toLowerCase().includes(details.city.toLowerCase()));
      }


      this.setState({ business: data });

    } else {
      this.setState({ business: business });
    }
  }


  render() {

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
            {this.state.business.map((business, idx) => (
              <div key={idx}>
                <BusinessIndexItem
                  business={business}
                />
              </div>
            ))}
          </div>
          {/* <div className="test"><BusinessMap /> </div> */}
          {/* <div>{this.indexMap()}</div> */}
            <div className="business-map">
              <BusinessMap businesses={this.props.business} />
          </div>
        </div>
        <div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BusinessIndex;