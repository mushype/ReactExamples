import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetContacts } from "./../../services/DummyData";

class contacts extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    //Axios call to get data...
    var data = GetContacts;
    this.setState({ contacts: data });
  }

  render() {
    return (
      <div>
        <h4>Contact Details</h4>
        {this.state.contacts.map(contact => {
          return (
            <div key={contact.id}>
              <table>
                <tbody>
                  <tr>
                    <td>{contact.id}</td>
                    <td>{contact.forename}</td>
                    <td>{contact.surname}</td>
                    <td>
                      {/* It is easier to use react routers Link component to navigate */}
                      {/* Below is a simple string template to create "/ContactDetails/id" */}
                      <Link to={`/ContactDetails/${contact.id}`}>
                        <button>View Contact</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}

export default contacts;
