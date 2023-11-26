//fetch ele é o local onde você adiciona a URL da sua API, ou seja ele que "recebe" sua API, digamos assim. Sendo assim o que chamamos de requisição.
//then da um retorno de uma resposta em json da sua API
fetch(`https://cep.awesomeapi.com.br/json/05424020`).then(response=>{
    return response.json()
}).then(corpo=>{
    text = document.getElementById("span").innerHTML =corpo.cep
    console.log(corpo)
})
// E resumo imagine que você esta em um restaurante, o fetch e como se fosse o chefe ele fornece os alimentos, o then e como se fosse o garçom ele force o que você precisa de acordo com que você pede pra ele.
