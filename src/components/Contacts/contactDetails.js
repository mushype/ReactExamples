import React, { Component } from "react";
import { GetContacts } from "./../../services/DummyData";
import AuthService from './../../services/AuthService';
import store from 'store';

class contactDetails extends Component {
  constructor(){
    super();

    this.Auth = new AuthService();
}

  state = {
    contact: {
      id: 1,
      forename: "",
      surname: "",
      address: {
        lineOne: "",
        lineTwo: "",
        postCode: ""
      },
      company: "",
      email: ""
    }
  };

  componentDidMount() {
    //Axios call to get data...
    //Changed this slightly to use the array in dummy data just to show the use of Id
    //You can access query parameters in the 'match' prop of a component wrapped with react router.
    //so match.params.id, gives you the id from /ContactDetails/:id
    var id = this.props.match.params.id;
    var data = GetContacts.find(contact => contact.id == id);
    this.setState({ contact: data });
    var token = store.get('token');
    console.log("token pete=" + token);
  }

  render() {
    return (
      <div>
           
        contact details
        {/* These render fine */}
        <p>{this.state.contact.forename}</p>
        <p>{this.state.contact.surname}</p>
        <p>{this.state.contact.emailaddress}</p>
      </div>
    );
  }
}

export default contactDetails;
