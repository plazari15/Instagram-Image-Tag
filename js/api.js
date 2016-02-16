/**
 * Arquivo JS que permite o uso da API do instagram.
 * O Sistema permite o uso de multiplas tags em array como no esquema abaixo
 * Você pode usar uma única tag usando Array
 * Projeto mantido no GitHub https://github.com/plazari15/instagram-tag-api
 */
$(function(){
    $(document).ready(function(){
        var tags = ["piscina", "carnaval", "scarpely"];
        var client_id = "CLIENT-ID";
        var access = "CLIENT-SECRET";
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
