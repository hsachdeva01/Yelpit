import React from 'react';


class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.props.formType === 'Sign Up' ? 
      this.state = {
        first_name = '',
        last_name = '',
        email: '',
        zip_code: '',
        birthday: '',
        password: ''
      } :
      this.state = {
        email: '',
        password: ''
      };
  }

  render(){
    return(
      <div>
        Session Form
      </div>
    )
  }
};


export default SessionForm;