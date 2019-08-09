import React, { Component } from 'react';
import Address from './../Common/Address';



class Customers extends Component{

    Submit = () => {
        alert("submitting")
        var postData = {
            CustomerNumber: this.refs.RefCustomer.value,
            Address1: this.refs.RefAddress1.value,
            Address2: this.refs.RefAddress2.value,
            Address3: this.refs.RefAddress3.value,
            Address4: this.refs.RefAddress4.value,
            Address5: this.refs.RefAddress5.value,
        };
        alert(JSON.stringify(postData));
    }
    render(){
        return(
            <div>
                <h1>This is the Customers screen</h1>
                <label>Customer Number</label><input className="form-control" id="inputCustomer" type="text"  ref="RefCustomer" defaultValue=""/>
                {/* <Address /> */}
                <label>Address</label><input className="form-control" id="inputAddress1" type="text"  ref="RefAddress1" defaultValue=""/>
                <label>Address</label><input className="form-control" id="inputAddress2" type="text"  ref="RefAddress2" defaultValue=""/>
                <label>City</label><input className="form-control" id="inputAddress3" type="text"  ref="RefAddress3" defaultValue=""/>
                <label>County</label><input className="form-control" id="inputAddress4" type="text"  ref="RefAddress4" defaultValue=""/>
                <label>PostCode</label><input className="form-control" id="inputAddress5" type="text"  ref="RefAddress5" defaultValue=""/>
                <button onClick={this.Submit}>Submit</button>
                
            </div>
        )
    }
}

export default Customers;