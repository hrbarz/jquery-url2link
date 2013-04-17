(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

	$.fn.url2Link = function(){
	    this.each( function(){
	        
	        var replaced = replace_ur_2_html_link($(this).html());

	        $(this).html(replaced);

	    });
	}

	function replace_ur_2_html_link(text) {
    	
    	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    
    	return text.replace(exp,"<a href='$1'>$1</a>"); 
	
	}
}));