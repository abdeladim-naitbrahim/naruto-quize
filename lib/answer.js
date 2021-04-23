/*const jsonfile = require('jsonfile')
var file = __dirname +'\\naruto.json';
 





function f(x)
{
	switch(x)
	{
	case '1':
	file=__dirname+'\\naruto.json';
	break;
		case '2':
	file=__dirname+'\\rock lee.json';
	break;
	}
	console.log(jsonfile.readFileSync(file).p);
return jsonfile.readFileSync(file).p;
}

module.exports =f;
*/

var path = require('path');
const jsonfile = require('jsonfile')
//var file = __dirname +'\\reponses.json'; 
var file =path.join(__dirname, 'reponses.json');
var data= jsonfile.readFileSync(file);





function f(x)
{
	var finalrep=data.gara;
	if(typeof x.repi!= 'undefined')
	{
		//console.log(x.repi);
		return data[x.repi];
		
	}
	
		
	var q1=parseInt(x.q1);
	var q2=parseInt(x.q2);
	var q3=parseInt(x.q3);
	var q4=parseInt(x.q4);
	var q5=parseInt(x.q5);
	//console.log("9raya"+x.q5);
	if(q5==5)
		finalrep=data.bzetsu;
	else if(q2==3)
		finalrep=data.wzetsu;
	else if(q1==1)
	{finalrep=data.gara;
    if(q4==2)
	{
		if(q2==1)
			finalrep=data.naruto;
		else if(q2==2)
			finalrep=data.sasuke;
	}
	else if(q4==1||q4==4)
	{
		if(q5==2 && q4==1)
			finalrep=data.gara;
		else if(q5==1 || q5==4)
			finalrep=data.chikamaru;
		else
			finalrep=data.deidara;
	}
	else if(q5==3)
	{
		if(q2==2)
			finalrep=data.orochimaro;
		else if(q2==1)
			finalrep=data.neji;
		else if(q2==4)
			finalrep=data.kapoto;
	}
	else if(q5==2)
	{
		if(q2==2)
			finalrep=data.hidan;
		else if(q2==1)
			finalrep=data.kilerB;		
		else
			finalrep=data.pain;
	}
	else if(q5==1)
	{
		if(q2==2)
			finalrep=data.madara;
		else if(q2==1)
			finalrep=data.kakachi;
	}
	else if(q5==4)
	{
		if(q2==2)
			finalrep=data.tobirama;
		else if(q2==1)
			finalrep=data.itachi;
	}
	}
	else
	{
		finalrep=data.ino;
		if(q5==1)
		{
			if(q2==2)
				finalrep=data.temari;
			else if(q2==1)
				finalrep=data.kaguya;
			else if(q2==4)
				finalrep=data.hinata;
		}
		else if(q5==3)
		{
			if(q2==2)
				finalrep=data.sunade;
			else if(q2==1)
				finalrep=data.sunade;
			else if(q2==4)
				finalrep=data.sakura;
		}
		if(q5==2)
		{
			if(q2==2)
				finalrep=data.konan;
			else if(q2==1)
				finalrep=data.karin;
			else if(q2==4)
				finalrep=data.mitsukage;
		}
	}
	//finalrep.push("%3F"+"repi%3D0"+"%26q1%3D"+q1+"%26q2%3D"+q2+"%26q3%3D"+q3+"%26q4%3D"+q4+"%26q5%3D"+q5);
	for(var myKey in data) 
	{
		//console.log(myKey);
		if(finalrep[0]==data[myKey][0])
		{
			finalrep.push("%3F"+"repi%3D"+myKey);
			break;
		}
	   
	}
	
	return finalrep;

}

module.exports =f;
