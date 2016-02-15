/**
 * Created by nacaodesign on 10/28/15.
 * Edited by Vitor Leonel - www.fb.me/vitorleoneloficial on 15/02/2015.
 */

$(function(){
    $(document).ready(function(){
        var tags = ["piscina", "carnaval", "scarpely"];
        var client_id = "cf6106fa329f44adb092e2f298e6e6fd";
        var access = "250273905.cf6106f.d30dd13d092e484aa2fd21e8da1aa8a0";
        var limit =  200;

        for (var i = 0; i < tags.length; i++) {
            var link = "https://api.instagram.com/v1/tags/"+tags[i]+"/media/recent?client_id="+client_id+"&access_token="+access;

            $.ajax({
                url: link,
                type: "GET",
                dataType: "jsonp",
                success: function(resposta){
                    for (var i = 0; i < limit; i++){
                        $('#instagram').append("<li><a href='"+resposta.data[i].link+"' target='_blank'><img src='"+ resposta.data[i].images.thumbnail.url +"'></a></li>");
                    }
                }

            }) /* fim da função ajax */
        }; /* fim do for para verificar a quantidade de tags */
    })
}); /* fim da função */
