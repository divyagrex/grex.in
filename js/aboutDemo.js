/**
 * Created by Amritansh on 1/16/2015.
 */
$(document).ready(function(){

    $(".carousel-indicators").on("click","li", function () {

        $(".img1").attr('src',"image/icon/question.png");
        $(".img2").attr('src',"image/icon/workers1.png");
        $(".img3").attr('src',"image/icon/run.png");

        var element=$(this).find("img").attr("src");
        /*var element=$(this).attr("id");*/
        /*alert(element);*/



         if(element=="image/icon/workers1.png"){
            $(this).find("img").attr('src',"image/icon/workers1w.png");
            console.log("worker");


        }

        else if(element=="image/icon/run.png"){
            $(this).find("img").attr('src',"image/icon/runw.png");
            console.log("run");


        }
        else if(element=="image/icon/question.png"){
            console.log($(this).find("img").attr('src'));

            $(this).find("img").attr('src',"image/icon/questionw.png");
            console.log("?");

        }
    });

});