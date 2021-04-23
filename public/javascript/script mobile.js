var indx=1;
var mobile=true;
const elem=document.getElementById("page-wrap00");
function detectwindow()
{
	if(screen.width>screen.height && mobile)//pc tablet
	{
		mobile=false;
		document.getElementById("im1").style.display = "block";
		document.getElementById("im2").style.display = "block";
		document.getElementById("im3").style.display = "block";
		document.getElementById("im4").style=" width: 27% ;left: 1%;right: auto; bottom :1%;height: 45%;";
		document.getElementById("page-wrap00").style=" width: 40%;";
	}
	else 
	{	
		
		
		if(!mobile)//mobile
	{
		mobile=true;
		document.getElementById("im1").style.display = "none";
		document.getElementById("im2").style.display = "none";
		document.getElementById("im3").style.display = "none";
		document.getElementById("im4").style="height: 20%;";
		document.getElementById("page-wrap00").style="width: auto;";
		//elem.style="width: auto;";
		
	}

	}
}


function init()
{
	detectwindow();
	if(mobile)
	{document.getElementById("page-wrap00").style="width: auto;";
	document.getElementById("page-wrap00").style.paddingBottom=((screen.height/5))+'px';}
}