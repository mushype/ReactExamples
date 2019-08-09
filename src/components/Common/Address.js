import React, { Component } from 'react';


class Address extends Component{

    render(){
        return(
            <div>
                <h4>Address Information</h4>
                <label>Address</label><input className="form-control" id="inputAddress1" type="text"  ref="RefAddress1" defaultValue=""/>
                <label>Address</label><input className="form-control" id="inputAddress2" type="text"  ref="RefAddress2" defaultValue=""/>
                <label>City</label><input className="form-control" id="inputAddress3" type="text"  ref="RefAddress3" defaultValue=""/>
                <label>County</label><input className="form-control" id="inputAddress4" type="text"  ref="RefAddress4" defaultValue=""/>
                <label>PostCode</label><input className="form-control" id="inputAddress5" type="text"  ref="RefAddress5" defaultValue=""/>
            </div>
        )
    }
}

export default Address;