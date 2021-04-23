var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");
const express = require('express');
var router=express.Router();

  var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://bnight.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  //if (!firebase.apps.length)
  firebase.initializeApp(config);

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
		a={id:"0",name:"balala"};
	console.log(a);
firebase.database().ref('users/' + a.id).set(a);
res.send(a);


});

module.exports =router;
