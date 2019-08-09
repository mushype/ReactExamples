import axios from 'axios';

// Set URL globally
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InRlc3RAYWFhLmNvbSIsIkFwcGxpY2F0aW9uTmFtZSI6IlZNUyBBZG1pbiIsIkxvZ2luVHlwZSI6InVzZXIiLCJuYmYiOjE1NjUyNjcyMDcsImV4cCI6MTU2NTg3MjAwNywiaWF0IjoxNTY1MjY3MjA3fQ.Zm95xHk2wiQ4JlatkrGYZLFTqTD1jpgo9bL5Of9pN4M";
axios.defaults.baseURL = 'http://localhost:64021/core';
 axios.defaults.headers.common = {
   'Authorization': `bearer ${token}`
 }