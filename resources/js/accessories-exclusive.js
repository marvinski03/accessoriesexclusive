jQuery(document).ready(function() {
	function setHeader(){
		if( jQuery(document).scrollTop() > 158){
			if(!(jQuery("body").hasClass("scroll-header"))){
				jQuery("body").addClass("scroll-header");
			}
		}else{
			if(jQuery("body").hasClass("scroll-header")){
				jQuery("body").removeClass("scroll-header");
			}
		}
	}

	setHeader();

	jQuery(document).scroll(function() {
	    setHeader();
	});


	jQuery("#search-toggle").click(function(){
		jQuery("header").toggleClass("activeSearch");
		jQuery("#flAutocompleteInputText").focus();
	});

});