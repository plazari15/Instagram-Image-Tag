# instagram-tag-api
Uma simples Api do Instagram para obter fotos por TAG

Não existem dificuldades na instalação desta API, tudo o que você precisa mudar está no arquivo api.js mude a var tag para algo que você queira usar a var client_id e a var access com o seu token de acesso que podem ser obtidos direto do site do instagram. 
#Link
Cada imagem vem com o seu link real no Instagram e as imagens foram definidas como Thumbnail. 

#Tipos de Imagem 
<b>Imagem Thumbnail</b> : resposta.data[i].images.thumbnail.url<br>
<b>Imagem Baixa Resolução</b> : resposta.data[i].images.low_resolution.url<br>
<b>Imagem Resolução Padrão</b> : resposta.data[i].images.standard_resolution.url
