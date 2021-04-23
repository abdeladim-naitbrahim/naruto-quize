var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");
const express = require('express');
var router=express.Router();

  var config = {
	  appId:"1:172794801456:android:8ed96e1affdd19e82e2cf5",
    apiKey: "AIzaSyDxD6uN3apm56lgtJtzSk6wemf77cjHvk0",
    authDomain: "bnighte-games.firebaseapp.com",
    databaseURL: "https://bnighte-games.firebaseio.com/",
    storageBucket: "bnighte-games.appspot.com"
  };
    /*if (!firebase.apps.length)
  firebase.initializeApp(config);*/
  var secondApp = firebase.initializeApp(config,"mysecondapp");
  //if (!firebase.apps.length) 
  

  // Get a reference to the database service
  var database = firebase.database();





function sendtoserver(response)
{
	writeUserData(response.id,response);


}
function writeUserData(userId, response) {
  firebase.database().ref('users/' + userId).set(response);
}


router.post('/', (req, res) => {
	var a=req.body;
	if(a.id===null)
		a={username:"0",data:"balala"};
	console.log(a);
//FirebaseDatabase.getInstance(secondApp).ref('bounceBalle/' + a.id).set(a);
secondApp.database().ref('bounceBalle/users').child(a.username).set(a.data);
res.send(a);


});

module.exports =router;
