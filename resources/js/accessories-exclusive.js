$(document).ready(function() {
	function setHeader(){
		if( $(document).scrollTop() > 160){
			if(!($("body").hasClass("scroll-header"))){
				$("body").addClass("scroll-header");
			}
		}else{
			if($("body").hasClass("scroll-header")){
				$("body").removeClass("scroll-header");
			}
		}
	}

	setHeader();

	$(document).scroll(function() {
	    setHeader();
	});
});