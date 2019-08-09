import React, { Component } from 'react';
import Address from './../Common/Address';


class Users extends Component{
    Submit = () => {
        alert("submitting")
        var postData = {
            UserName: this.refs.RefName.value,
            Age: this.refs.RefAge.value,
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
                <h1>This is the Users screen</h1>
                <label>User Name</label><input className="form-control" id="inputName" type="text"  ref="RefName" defaultValue=""/>
                <label>Age</label><input className="form-control" id="inputAge" type="text"  ref="RefAge" defaultValue=""/>
                <Address />
                {/* <label>Address</label><input className="form-control" id="inputAddress1" type="text"  ref="RefAddress1" defaultValue=""/>
                <label>Address</label><input className="form-control" id="inputAddress2" type="text"  ref="RefAddress2" defaultValue=""/>
                <label>City</label><input className="form-control" id="inputAddress3" type="text"  ref="RefAddress3" defaultValue=""/>
                <label>County</label><input className="form-control" id="inputAddress4" type="text"  ref="RefAddress4" defaultValue=""/>
                <label>PostCode</label><input className="form-control" id="inputAddress5" type="text"  ref="RefAddress5" defaultValue=""/> */}
                <button onClick={this.Submit}>Submit</button>
                
            </div>
        )
    }
}

export default Users;