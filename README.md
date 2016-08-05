#Devido a todas as mudanças na API do instagram, este projeto está desativado!
# instagram-tag-api
Uma simples Api do Instagram para obter fotos por TAG, usando a última versão da API do Instagram. O JS exibe todas as imagens lado a lado em box, você pode colocar um lightbox ou qualquer outra coisa para permitir a melhor exibição de imagens

#Mudando as Keys
Você precisa gerar uma nova Key no Instagram. Precisa do ClientID e do Access Token. Podem ser gerados através do site do instagram...

#Recursos
Funciona com jQuery na versão 2.1.4 Minificado
Usa o Ajax do jQuery com método GET

#Tipos de Imagem 
<b>Imagem Thumbnail</b> : resposta.data[i].images.thumbnail.url<br>
<b>Imagem Baixa Resolução</b> : resposta.data[i].images.low_resolution.url<br>
<b>Imagem Resolução Padrão</b> : resposta.data[i].images.standard_resolution.url
