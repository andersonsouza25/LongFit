var i=0;

var arrayCabelo=Array('img/cortes/imgCabelo/corte1.png','img/cortes/imgCabelo/corte2.png','img/cortes/imgCabelo/corte3.png','img/cortes/imgCabelo/corte4.png','img/cortes/imgCabelo/corte5.png','img/cortes/imgCabelo/corte6.png','img/cortes/imgCabelo/corte7.png','img/cortes/imgCabelo/corte8.png','img/cortes/imgCabelo/corte9.png','img/cortes/imgCabelo/corte10.png','img/cortes/imgCabelo/corte11.png');

var arrayBarba=Array('img/cortes/imgBarba/barba1.png','img/cortes/imgBarba/barba2.png','img/cortes/imgBarba/barba3.png');

var comandNext;

var comandAnt;
/*

function transition(){
	
	//document.getElementById('teste22').innerHTML="inicio"+i;
	
	document.getElementById('slide').src=lis[i];
	i=i+1;
	
setTimeout('transition()', 300);
	if(i>=sizelist){
		i=0;
	}
}
*/

function start(){
	document.getElementById('slide-c').src=arrayCabelo[i];
	document.getElementById('slide-b').src=arrayBarba[i];
}
function comandNextC(){
	i=i+1;
	if(i>=7){
		i=0;
	}
	document.getElementById('slide-c').src=arrayCabelo[i];
}

function comandNextB(){
	i=i+1;
	if(i>=arrayBarba.length){
		i=0;
	}
	document.getElementById('slide-b').src=arrayBarba[i];
}

function comandAntC(){
	i=i-1;
	if(i<0){
		i=arrayCabelo[i]-1;
	}
	document.getElementById('slide-c').src=arrayCabelo[i];	
}

function comandAntB(){
	i=i-1;
	if(i<0){
		i=arrayBarba.length-1;
	}
	document.getElementById('slide-b').src=arrayBarba[i];	
}

function showWorks(){
	addCorte();
	addCorteBarba();
}

function addCorte(){
	for(var i=0;i<arrayCabelo.length;i++){
		var imgcorte=document.createElement("img");
		imgcorte.src=arrayCabelo[i];
		
		imgcorte.style.width='auto';
		imgcorte.style.height='auto';
		imgcorte.style.margin='2px';
		imgcorte.style.border='groove 3px #FDD247';
		imgcorte.id="cabelo-"+i;
		document.getElementById('corteS').appendChild(imgcorte);
	}
}

function addCorteBarba(){
	
	for(var i=0; i < arrayBarba.length;i++){
		var imgBarba=document.createElement("img");
		imgBarba.src=arrayBarba[i];
		
		imgBarba.style.width='auto';
		imgBarba.style.height='auto';
		imgBarba.style.margin='2px';
		imgBarba.style.border='groove 3px #FDD247';
		imgBarba.id="barba-"+i;
		document.getElementById('barbasS').appendChild(imgBarba);
	}
}







