/**
 * Created by nacaodesign on 10/28/15.
 */

$(function(){
    $(document).ready(function(){
        var tag = "partiu";
        var client_id = "cf6106fa329f44adb092e2f298e6e6fd";
        var access = "250273905.cf6106f.d30dd13d092e484aa2fd21e8da1aa8a0";
        var link = "https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id="+client_id+"&access_token="+access;

        var limit =  200;

        $.ajax({
            url: link,
            type: "GET",
            dataType: "jsonp",
            success: function( resposta ){
                console.log(resposta);
                for (var i=0; i<limit; i+=1){
                    $('#instagram').append("<li><a href='"+resposta.data[i].link+"' target='_blank'><img src='"+ resposta.data[i].images.thumbnail.url +"'></a></li>");
                }
            }

        })
    });
});//Fim da Funcao