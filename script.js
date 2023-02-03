
var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector("#qtd").addEventListener("change", atualizaPreco)
document.querySelector("#js").addEventListener("change", atualizaPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizaPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizaPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana(s)`
    atualizaPreco()
})

function atualizaPreco(){
    const qtd = document.querySelector("#qtd").value
    const temJS = document.getElementById("js").checked
    const incluiLayout = document.getElementById("layout-sim").checked
    const prazo = document.getElementById("prazo").value


    let preco = qtd * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500

    let taxaUrgencia = 1 - prazo * 0.1
    preco *= 1 + taxaUrgencia
    
    document.querySelector("#preco").innerHTML = `Valor: R$ ${preco.toFixed(2)}`
}
