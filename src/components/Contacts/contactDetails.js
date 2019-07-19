import React, { Component } from 'react';
import {GetContactById} from './../../services/DummyData';

class contactDetails extends Component{

    state = {
        contact: {
            id: 1,
            forename: '',
            surname: '',
            address: {
                lineOne: '',
                lineTwo: '',
                postCode: ''
            },
            company:'',
            email: ''
        }
    }

    componentDidMount(){
        //Axios call to get data...
        //In the real world this should receive the 'Id' from the contacts.js screen and perform a 'getContactById(id)' call.   
        //So how do we get the id??
         var data = GetContactById;
         this.setState({ contact: data});
    }

    render(){
        return(
            <div>
               contact details
               <p>{this.state.contact.company}</p>
               
               {/* Gives error at runtime */}
               {/* <p>{this.state.contact.address}</p>   */}

               {/* Does not compile */}
               {/* <p>{this.state.contact.address}</p>   */}

               {/* No issue at runtime */}
               <p>{this.state.contact.lineone}</p>
            </div>
            
            
        )
    };
}

export default contactDetails