
        function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var cars = ["audi","bmw","bugatti","ferrari","fiat","ford","formula"];
var d = false;
 var main_image = document.getElementById('main_image');
	 var answ = document.getElementsByClassName("btn")
	
	var answers = {
		audi:["ferrari","audi","fiat","formula"],
		bmw: ["bmw","bugatti","ford","mustang"],
		bugatti:["ferrari","audi","bently","bugatti"],
		ferrari:["formula","bmw","ferrari","ford"],
		fiat:["fiat","ferrari","formula","ford"],
		ford:["ferrari","fiat","ford","formula"],
		formula:["ferrari","fiat","ford","formula"]
	}
	
	function initNext(){
		var rand = getRandomInt(0, cars.length-1);
		var carIndex = cars[rand];
		main_image.src = "images/" +carIndex  + ".png" ;
		cars.splice(rand,1);
		
		 for(var i = 0 ; i<answ.length;i++){
		  var randAnsw = getRandomInt(0,answers[carIndex].length-1);
		 answ[i].innerHTML =answers[carIndex][randAnsw] ;
		 answers[carIndex].splice(randAnsw,1);
		 answ[i].addEventListener('click', function() {
			 alert(this.innerHTML);
		 });
		
	 }
		
	}
  function myFunction(){
	  
	  
	;
	 
	 if(cars.length<1){
		     main_image.src = "images/finished.png";
		//alert("finished");
		  for(var i = 0 ; i<answ.length;i++){
		
		 answ[i].innerHTML ="finished" ;
		 
		
	 }
	 main_image.src = "images/finished.png";
	 
	 alert("finished");
	return false;
		 
	 }
	 
	 var rand = getRandomInt(0, cars.length-1);
	 var carIndex = cars[rand];
	  
	  
	 main_image.src = "images/" +carIndex  + ".png" ;
	
		 cars.splice(rand,1);
	 
	 d = true;
	
      for(var i = 0 ; i<answ.length;i++){
		  var randAnsw = getRandomInt(0,answers[carIndex].length-1);
		 answ[i].innerHTML =answers[carIndex][randAnsw] ;
		 answers[carIndex].splice(randAnsw,1);
		 answ[i].addEventListener('click', function() {
			 alert(this.innerHTML);
		 });
		
	 }
	 
	   clearInterval(downloadTimer);
	 var timeleft = 10;
   var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - --timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
},1000);
		

		}
	

			
 

	 