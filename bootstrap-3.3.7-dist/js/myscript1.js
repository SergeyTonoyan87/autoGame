$(document).ready(function(){
    
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	var cars = ["audi","bmw","bugatti","ferrari","fiat","ford","formula"];
	
	var answers = {
		audi:["ferrari","audi","fiat","formula"],
		bmw: ["bmw","bugatti","ford","mustang"],
		bugatti:["ferrari","audi","bently","bugatti"],
		ferrari:["formula","bmw","ferrari","ford"],
		fiat:["fiat","ferrari","formula","ford"],
		ford:["ferrari","fiat","ford","formula"],
		formula:["ferrari","fiat","ford","formula"]
	};
	var main_image = $("#main_image");
	var answ = $(".btn");
	
	
		main_image.click(function() {
					initNext();
					
				});
		answ.click(function() {
			
			   
				if(sharedVal ==$(this).text()){
					    $(this).css("border", "0px solid green").animate({
							'borderWidth': '4px',
							'borderColor': 'green'
						},200);
                  $(this).animate({
        'borderWidth':'0px',
        'borderColor':'green'
    },200);
				 
				 
				}else{
					alert("sxal e");
				}
					initNext();	
				});
	
	
	  

	function initNext(){
		
		var rand = getRandomInt(0, cars.length-1);
		var carIndex = cars[rand];
		window.sharedVal = carIndex;
		
		if(cars.length < 1){
			main_image.attr('src',"images/finished.png");
			
			answ.each(function(){
			  
			$(this).text("finished");
			
					});
			
			
			
		}else{
			main_image.attr('src',"images/" +carIndex  + ".png");
		
		cars.splice(rand,1);
		
		 
		  
		  answ.each(function(){
			  var randAnsw = getRandomInt(0,answers[carIndex].length-1);
			$(this).text(answers[carIndex][randAnsw]);
			answers[carIndex].splice(randAnsw,1);
					
					
					
					});
				
				
	
			}
			
			
		}
		
		
		
		
	
	
});
