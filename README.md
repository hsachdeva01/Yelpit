# README

[Yelpit Live](https://yelp-it.herokuapp.com/)

Yelpit is a single page application inspired by Yelp. A website where you can find a list of businesses and leave reviews. 

![](/Yelpit.png)



## Technologies Used

* React.js and Redux
* JavaScript
* Ruby on Rails (Backend)
* PostgresSql
* AWS
* HTML and CSS

## API

* Google Map JavaScript API

## Key Features


### User Authentication
![](/app/assets/images/Yelpit-UserAuth.gif)
* Users have limited access to features without logging in.
* Users can create a new account.
* A demo login is availble for visitors to browse around the website.

```
  demoLogin() {
    const email = this.demoEmail;
    const password = this.demoPassword;
    const Speed = 35;

    document.getElementById("demo-button").disabled = true;
    this.setState({ email: "", password: "" });

    for (let i = 0; i < email.length; i++) {
      setTimeout(() => {
        this.setState({ email: this.state.email + email[i] });
      }, i * Speed);
    }
    for (let j = 0; j < password.length; j++) {
      setTimeout(() => {
        this.setState({ password: this.state.password + password[j] });
      }, (email.length * Speed) + j * Speed);
    }
    setTimeout(() => {
      this.props.processForm(this.state).then(() => this.props.history.push("/"));
    }, (email.length * Speed) + (password.length * Speed) + Speed);

  }
```

### Business Page

* The Business Page has set of photos of each business that is being hosted my AWS S3.
* It also uses Google API that pin points exactly where the restaurant is located based on longitude and latitude. 
* The user can review and rate their experience with the business.

![](/app/assets/images/Yelpit-BusinessShow.gif)

```
<div className="business-header">
  <BusinessHeader />
 </div>
 
<div className="business-picture">
  {this.props.business.photoUrls.map((photo, idx) => (
    <img src={photo} key={idx} />
  ))}
</div>
```

```
  mapOptions() {
    if (this.props.businesses.length === 1) {
      return {
        center: {
          lat: this.props.businesses[0].latitude,
          lng: this.props.businesses[0].longitude
        },
        zoom: 13,
        fullScreen: false,
        streetView: false,
        streetViewControl: false,
        zoomControl: this.props.zoom,
        zoomOptions: {
          position: google.maps.ControlPosition.TOP_LEFT
        },
        gestureHandling: 'none'
      };
    } else {
      return ({
        center: { lat: 37.8014, lng: -122.40163 },
        zoom: 13
      })
    }
  };
 ```
