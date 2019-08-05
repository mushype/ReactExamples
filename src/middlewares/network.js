import axios from 'axios';

// Set URL globally
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InBldGVyZ29vY2giLCJBcHBsaWNhdGlvbk5hbWUiOiJWTVMgQWRtaW4iLCJMb2dpblR5cGUiOiJ1c2VyIiwibmJmIjoxNTY0NTgyMjQyLCJleHAiOjE1NjUxODcwNDIsImlhdCI6MTU2NDU4MjI0Mn0.Bpt9ao8FdjADiVwywSJknrtMd_MDlJ2lV9cWG367EZE";
axios.defaults.baseURL = 'http://localhost:64021/core';
 axios.defaults.headers.common = {
   'Authorization': `bearer ${token}`
 }