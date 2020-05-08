import React from 'react';
import { Link } from 'react-router-dom';
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
    // window.scrollTo(0, 0);
    this.props.fetchBusinesses();
    //console.log(this.props.match.params);

    //this.setState({test: "hey"});

  }

  componentWillReceiveProps(props) {
    // Obtain the search params, then use them to update the state.
    let business = props.business;

    // console.log(this.props.location)
    // console.log(typeof(this.props.location.search));
    console.log(business)
    if (this.props.location.search != "") {
      // filter
      // http://localhost:3000/#/businesses/search/details?keyword=pink&location=davis

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

      console.log(business)

      this.setState({ business: data });

    } else {
      // Just set the props to state.
      this.setState({ business: business });
    }


    // console.log(business);
    // console.log(data);

  }


  render() {
    //console.log(this.props);
    console.log(this.state.business);

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