var indx=1;
const arraydiv= document.getElementsByClassName("ui-controlgroup ui-controlgroup-vertical ui-corner-all");
var radioat=document.getElementsByName("q1");
var mobile=true;
function next()
{
	console.log('zid');
	if( !$("input[name='q"+indx+"']:checked").val())
	{
		//$(".alert").show();
		

document.getElementById('fred').click();


	}
	else
	{
		/*$(".alert").hide();
		radioat=document.getElementsByName("q"+indx);*/
		centringelement(document.getElementById("page-wrap00"));
		if(indx<arraydiv.length-1)
	{
		
	arraydiv[indx].style.display = "block";
	arraydiv[indx-1].style.display = "none";
	 indx=indx+1;
}
	else
	{
		arraydiv[indx].style.display = "block";
	arraydiv[indx-1].style.display = "none";
		document.getElementById("next").style.display = "none";
document.getElementById("submiteur").style.display = "block";
}
}

}

function centringelement(elem)
{
	 elem.style.paddingTop=((screen.height-elem.offsetHeight)/2)+'px';
}

function detectwindow()
{
	if(screen.width>screen.height && mobile)//pc tablet
	{
		mobile=false;
		document.getElementById("page-wrap00").style=" width: 50%;";
	}
	else
	{	if(!mobile)//mobile
		{
			mobile=true;
			document.getElementById("page-wrap00").style="width: 100%;";
		}		
	}
}
function init()
{
	detectwindow();
	if(mobile)
	centringelement(document.getElementById("page-wrap00"));
}