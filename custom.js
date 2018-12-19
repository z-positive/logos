//wp-content/themes/hestia

(function () {
    var res = document.location.pathname;
	
	if(res == "/"){
		//белый цвет для логотипа на главной
		var wrapper = document.getElementsByClassName('title-logo-wrapper');
		wrapper[0].firstElementChild.style = "color:white";
		
		//белый цвет для меню на главной
		var menu = document.getElementById('menu-menu-1');
		var lis = menu.children;
		
		for(var i = 0; i<lis.length; i++){
		
			lis[i].firstChild.style = "color:white";
		
		}
	
		//черный цвет меню при прокрутке вниз
		
		var nav = document.querySelector(".navbar");

		window.onscroll = function() {
			
			var scrolled = window.pageYOffset;
			//console.log( 'Позиция скрола: '+scrolled  );
			var menu = document.getElementById('menu-menu-1');
			var lis = menu.children;
			
			if(scrolled != 0){
				
				wrapper[0].firstElementChild.style = "color:black";
				for(var i = 0; i<lis.length; i++){
				
					lis[i].firstChild.style = "color:black";
				
				}
				
			}else{
			
				wrapper[0].firstElementChild.style = "color:white";
				for(var i = 0; i<lis.length; i++){
				
					lis[i].firstChild.style = "color:white";
				
				}
			
			}
			
		}; 
		
		//сделать черным меню при раскрытии бутерброда
		
		var btn = document.getElementById('butter');
		
		document.body.addEventListener('DOMSubtreeModified', function () {
			
			var stl = '';
			
			if(btn.getAttribute('aria-expanded') == 'true' ){
			
				stl = "color:black";
			
			}else{
			
				stl = "color:white";
			
			}
			
			for(var i = 0; i<lis.length; i++){
					
				lis[i].firstChild.style = stl;
					
			}
		}, false);
		
		
	}
	
 }());
 


