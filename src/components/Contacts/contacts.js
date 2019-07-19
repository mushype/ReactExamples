import React, { Component } from 'react';
import {GetContacts} from './../../services/DummyData';

class contacts extends Component{

    state = {
        contacts: []
    }

    componentDidMount(){
        //Axios call to get data...
        var data = GetContacts;
        this.setState({ contacts: data});

    }

    ClickView = () => {
        this.props.history.push("/ContactDetails");
    }

    render(){
        return(
            <div>
                <h4>Contact Details</h4>
                {this.state.contacts.map(contact => {
                    return(
                        <div key={contact.id}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{contact.id}</td>
                                        <td>{contact.forename}</td>
                                        <td>{contact.surname}</td>
                                        <td><button onClick={() => this.ClickView(contact.id)}>View Contact</button></td>
                                    </tr> 
                                </tbody>
                            </table>

                        </div>
                    );
                })}
            </div>
            
        )
    };
}

export default contacts