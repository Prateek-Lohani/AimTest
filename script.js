
window.alert('Click on the target to test your aim and reaction time');
//taking startime

var start=new Date().getTime();


/*
FOR RANDOM COLOR

	function randomColor(){
	var letters='0123456789ABCDEF'.split('');
	var color='#';
	for(var i=0;i<6;i++){
		color=color+letters[Math.floor(Math.random()*16)];
		}
	  return color;
	}
*/


//to make target

function target(){
	
	var top=Math.random()*600;
	var left=Math.random()*1200;
	var height=Math.random()*70+5;
	document.getElementById("shape").style.top=top+"px";
	document.getElementById("shape").style.left=left+"px";
	document.getElementById("shape").style.height=height+"px";
	document.getElementById("shape").style.width=height+"px";
	document.getElementById("shape").style.display="block";

//taking startime

	 start=new Date().getTime();
	
}

function appearAfterDelay(){
setTimeout(target,Math.random()*2000);

}
appearAfterDelay();

//setTimeout(target,Math.random()*2000);


document.getElementById("shape").onclick=function(){
  document.getElementById("shape").style.display= "none";


//taking endtime

var end=new Date().getTime();


//taking the time-difference

var timeinterval=end-start;  //result is in millisecond
var timeInSeconds=timeinterval/1000    //in seconds

document.getElementById("timetaken").innerHTML=timeInSeconds+" Sec";
appearAfterDelay();

}

