const express = require('express');
var router=express.Router();
const handlebars = require('express-handlebars');
const f=require('./answer');
var path = require('path');
//app.use(express.static('public'));
router.post('/', (req, res) => {
	var f0=f(req.body);
	
res.render('main', {layout : 'index' , titr:f0[0],tex:f0[1],img:f0[2],params:f0[3],});
});

router.get('/', (req, res) => {
	
	if(typeof req.query.repi  != 'undefined')	
	{var f0=f(req.query);	 
	res.render('main0', {layout : 'index0' , titr:f0[0],tex:f0[1],img:f0[2],});}
	//res.render('main0', {layout : 'index0' , titr:f0[0],tex:f0[1],img:f0[2],params:f0[3],});}
	else
	{f0=f(req.query);
	res.render('main', {layout : 'index' , titr:f0[0],tex:f0[1],img:f0[2],params:f0[3],});}


});

module.exports =router;
