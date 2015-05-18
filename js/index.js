

var bg=[".bg1",".bg2",".bg3"];
var index=0;
var appUrl = "http://grex.in/";
var loginUrl = "http://grex.in/in-grex-gcp-server/jsps/common/login.jsp";


$(document).ready(function(){
	$("#loginRedirectLink").attr("href",loginUrl);
	$.get( appUrl + "/in-grex-gcp-server/rest/common/redirecturl", function(data) {
			if (data && data.statusCode && data.statusCode == "SUCCESS") {
				$("#loginRedirectLink").html("Dashboard").attr("href" , appUrl + data.responseMessage);
			}
		});
		
	function tabChange(){
		
		
		
		 $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
					
					var url=window.location;
					url=String(url);
					var pos=url.indexOf("#");
  					var tab=url.substring(pos+1);
  					$(".showContent").removeClass("showContent");
          			$(".active1").removeClass("active1");
  
          			tab1="#"+tab;
          			
          			 if(tab1=="#whoisbehindit"){
       	$(".content").addClass("whoisbehinditheight");
       }
       
       else{
       	$(".content").removeClass("whoisbehinditheight");
       }
          
  
          			$(tab1).addClass("showContent");
          			$("."+tab).addClass("active1");

		
	}
	
				$(window).on('hashchange',tabChange);
				
				
				if(window.location.hash) {
					tabChange();
										
					}
				else {
  				
					}

    /* open respective tab*/

  /*
    var tab= $.cookie("tab");
      if(tab!=""){
          
          $(".showContent").removeClass("showContent");
          $(".active1").removeClass("active1");
  
          tab1="#"+tab;
          
  
          $(tab1).addClass("showContent");
          $("."+tab).addClass("active1");
          $.cookie("tab","");
  
      }
  */
  
  

    /* end open respective tab*/

    function changeBg(){
        $(".active").removeClass("active");
        $(bg[index]).addClass("active");
        index++;

        if(index==3){
            index=0;
        }

    }

     setInterval(changeBg,5000);


    var login=0;
    var reg=0;
    var dropDown=0;

    /* changing bg*/



    /* end changing bg*/


   $(".LoginPush").on("click",function(){
       /*alert("hel");*/
        if(login==0) {
            $(".mainText").addClass("moveLeft");
            $(".loginFormPage").removeClass("moveRight");
            $(".registerPage").removeClass("moveReg");
            login=1;
            reg=0;
        }

       else{
            $(".mainText").removeClass("moveLeft");
            $(".loginFormPage").addClass("moveRight");
            login=0;

        }
   });

    $(".registerPush").on("click",function(){
        /*alert("hel");*/
        if(reg==0) {
            $(".mainText").addClass("moveLeft");
            $(".registerPage").addClass("moveReg");
            $(".loginFormPage").addClass("moveRight");

            console.log("not");
            reg=1;
            login=0
        }

        else{
            $(".mainText").removeClass("moveLeft");
            $(".registerPage").removeClass("moveReg");
            reg=0;

        }

    });


    $(".demoButton").on("click",function(){
        if($(this).next().hasClass("openDropdown")!=true) {
            $(".openDropdown").removeClass("openDropdown");
            $(this).next().addClass("openDropdown");
            $(this).find(".glyphicon-chevron-down").addClass("glyphicon-chevron-up");
            $(this).find(".glyphicon-chevron-down").removeClass("glyphicon-chevron-down");
            dropDown=1;
        }

        else{
            $(this).next(".dropDown").removeClass("openDropdown");
            $(this).find(".glyphicon-chevron-up").addClass("glyphicon-chevron-down");
            $(this).find(".glyphicon-chevron-up").removeClass("glyphicon-chevron-up");
            dropDown=0;
        }
    });

    $(".footer1").on("click",function(){

        /*alert("helo");*/
        $('html, body').animate({
            scrollTop: $(".footer").offset().top
        }, 1000);

    });


    $(".footer1").on("click",function(e){

        if($(this).attr("id")!="why") {
            if ($(".footer").hasClass("moveFooter")) {
                $(".moveFooter").removeClass("moveFooter");
                $(".showDropUp").removeClass("showDropUp");
            }
            else {
                $(".footer").addClass("moveFooter");
                $(".dropUp").addClass("showDropUp");
            }
            e.preventDefault();
        }
    });


    $(".dropLink").on("click",function(){
       var id=$(this).attr("id");
        $.cookie("tab",id);

    });



    /*carousel*/

    $(".carousel-indicators").on("click","li", function () {
       $(".active1").removeClass("active1");
        $(this).addClass("active1");
    });

    /*end carousel*/

    /* internal page code*/

    $(".nav1 ").on("click","a",function(e){

       var target1=$(this).data("target");
       if(target1=="#whoisbehindit"){
       	$(".content").addClass("whoisbehinditheight");
       }
       
       else{
       	$(".content").removeClass("whoisbehinditheight");
       }
        $(".showContent").removeClass("showContent");
        $(target1).addClass("showContent");

        $(".active1").removeClass("active1");
        $(this).parent().addClass("active1");

       
       /* new code */
       if(history.pushState) {
    history.pushState(null, null, $(this).attr('data-target')); // URL is now /inbox/N
    // showMailItem(); // example function to show email based on link clicked
  }
      /* end new code */
       
        e.preventDefault();

    });
    
    var popped = ('state' in window.history && window.history.state !== null), initialURL = location.href;

    /* end internal page code*/
   
   $(".moveDownButton").on("click",function(){

		  /* $(".mainBody").scrollTop($(".mainBody").scrollTop() + $("#screen2").position().top);*/
		   
		      $('.mainBody').animate({
                scrollTop: ($(".mainBody").scrollTop() + $("#screen2").position().top)
            }, 1000);

	
   });
});
