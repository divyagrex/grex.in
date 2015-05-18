/**
 * Created by Admin on 2/2/15.
 */


	

$(document).ready(function(){

/*
	var contentHeightOg;


$(".content").load(function(){
	contentHeightOg=+$(".content").height();
	console.log("main height="+contentHeightOg);
});
*/

 /*
    $(".pictures img").on("click",function(){
                 alert("hi");
         var active=$(this).hasClass("active");
         var nextPictures=$(this).parent().parent().next();
         var contain=nextPictures.hasClass("slide");
         var parent=$(this).parent().parent().hasClass("last");
 
 
 
         if(contain==true && active==true || (parent==true && active==true)){
             $(".slide").removeClass("slide");
             $(".curtain").removeClass("curtainShow");
             $(".active").removeClass("active");
             $(".show").removeClass("show");
             $()
         }
 
         else{
             $(".slide").removeClass("slide");
             nextPictures.addClass("slide");
             $(this).parent().parent().nextAll().addClass("slide");
 
             $(".show").removeClass("show");
 
             $(this).next().addClass("show");
             $(".active").removeClass("active");
 
             $(this).addClass("active");
 
             var moveTo=$(this).parent().parent().prev();
             $('html, body').animate({
                 scrollTop: moveTo.offset().top
             }, 1000);
 
         }
         
 
 
     });
 */
 
    $(".curtain").on("click",function(){
    	
    	
        var active=$(this).prev().prev().hasClass("active123");
        var nextPictures=$(this).parent().parent().next();
        var contain=nextPictures.hasClass("slide");
        var parent=$(this).parent().parent().hasClass("last");



        if(contain==true && active==true ){
            $(".slide").removeClass("slide");
            $(".curtain").removeClass("curtainShow");
            $(".active123").removeClass("active123");
            $(".show").removeClass("show");
            
            $(".content").removeClass("shifted");
            $()
        }

        else{
            $(".slide").removeClass("slide");
            nextPictures.addClass("slide");
            $(".content").addClass("shifted");
            $(this).parent().parent().nextAll().addClass("slide");

            $(".show").removeClass("show");

            $(this).prev().addClass("show");
            $(".active123").removeClass("active123");


            $(".curtain").addClass("curtainShow");
            $(this).removeClass("curtainShow");
            var moveTo=$(this).parent().parent().prev();
            
                        $(this).prev().prev("img").addClass("active123");


        }
        
            $('html, body').animate({
                scrollTop: moveTo.offset().top
            }, 1000);

   
    });

    $("li").on("click",function(){
        /*alert("helo");*/
       $(this).nextAll().css("background","red");
    });

});