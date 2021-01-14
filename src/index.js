import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import details from "./details.json";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
var login = document.getElementById("login");
var username = document.getElementById("username");
var password = document.getElementById("password");
function loginClick(){
  var admins = ["edison","andrew","mao","ethan","andy"];
  if (username.value !== "" && password.value !== ""){
    if(admins.includes(username.value.toLowerCase())){
      if(details[username.value.toLowerCase()] === password.value){
        //client.channels.get('742121910976118864').send('Hello here!');
        good_login();
      }
    }
  }
}

function good_login() {
  alert("memes");
}


login.addEventListener("click",loginClick);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
