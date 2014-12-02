// Cache requests (eg. var document = $(document), var logo = $(".logo"), etc)
var doc = $(document);

doc.on("scroll", function(){
	if(doc.scrollTop()>200){
        //nav.addClass("fixed");
        //nav_logo.addClass("fixed-logo");
    } else{
    	//nav.removeClass("fixed");
        //nav_logo.removeClass("fixed-logo");
    }
});