import axios from 'axios';
import React, { Component } from 'react';

export const callPutAsync = async (url, postdata) => {
    try{
        let res = axios.put(url, postdata );
    }catch{
        //TODO.  Better error handling
        alert("Error");
    }
}

export const callPatchAsync = async (url, postdata) => {
    try{
        let res = axios.patch(url, postdata );
        
    }catch{
        //TODO.  Better error handling
        alert("Error");
    }
}

export const callPostAsync = async (url, postdata) => {
    try{
        var response = await axios.post(url, postdata )
        const result = Object.keys(response).map((key) => response[key]);
        return{
            status: result[2],
            data: result[0]
        }
    }catch(e){
        return e;
    }
}

export const callGetAsync = async (url) => {
    try{
        var response = await axios.get(url)
        const result = Object.keys(response).map((key) => response[key]);
        return{
            status: result[2],
            data: result[0]
        }
        
    }catch(e){
        return e;
    }
}

export const callGet = (url) => {
    try{
        var response = axios.get(url)
        const result = Object.keys(response).map((key) => response[key]);
        return{
            status: result[2],
            data: result[0]
        }
        
    }catch(e){
        return e;
    }
}
