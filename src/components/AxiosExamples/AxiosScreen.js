import React, { Component } from 'react';
import {callPostAsync, callGetAsync, callGet} from './../../utilities/axiosUtilties'

class AxiosScreen extends Component{

    constructor(){
        super();
    }

    state = {
        locations: []
    }

    componentDidMount(){
        var results = callGet("api/v1/locations");
        this.setState((state) =>({locations: results}));
    }

    InsertPerson = async () => {
        var postData = {
            forename:"pete", 
            surname:"gooch",
            email:"abdddaaadc@ftiddsssddd.com"
        }
        try{
           var response = await callPostAsync("api/v1/people", postData);
           if (response.status !== "OK"){
            throw new Error("No records returned");
           }

           //Process the returned object (it is a 200 at this point)
           console.log(response.data);
           console.log("id of new record " + response.data.id);
        }catch(error){
            alert("record failed " + error);
        }
    }

    GetPerson = async () => {
        try{
           var response = await callGetAsync("api/v1/people/3")
            console.log(response.status);
            console.log(response.data);
            console.log(response.data.forename);

          // console.log(result[0].forename);
                      
           
        }catch(error){
            alert("record failed " + error);
        }
    }

    GetAllLocations = async () => {
        try{
            var response = await callGetAsync("api/v1/locations");
            if (response.status !== "OK"){
             throw new Error("No records returned");
            }
 
            //Process the returned object (it is a 200 at this point)
            console.log(response.data);
            //console.log("id of new record " + response.data.id);
            
         }catch(error){
             alert("record failed " + error);
         }
     }

    CheckOutDetails = (props) => {
        if (props.status === 1){
            return <h4>You checked out at {props.checkOutDateTime}</h4>
        }else{
            return <button className="btn btn-sm btn-danger btn-oval" type="button" >Check Out</button>
        }
    }

    DisplayLocations = (props) => {
        {this.state.locations.map(location => {
            return (
                <div key={location.id}>
                    <h1>item</h1>
                </div>
            );
        })}
        
        
    }



    render() {
        return(
            <div>Hello Axios Examples go here
                <button onClick={this.InsertPerson}>Insert Person</button>
                <button onClick={this.GetPerson}>Get Person</button>
                <button onClick={this.GetAllLocations}>Get All Locations</button>
                <this.CheckOutDetails status="one" checkOutDateTime="today" id="1" />
                {/* <this.DisplayLocations status="one" checkOutDateTime="today" id="1" /> */}
                
            </div>

        )
    }
}

export default AxiosScreen;