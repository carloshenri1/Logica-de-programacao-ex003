var valor =  Number(prompt("Digite o valor da compra"))
var desconto = prompt("Digite o código de desconto")
var resultado = (valor -(valor/100*10))

if (desconto == "desc10"){
    alert(`O Valor da compra com desconto é de ${resultado}`)
}
else {
    alert("Cupom invalido")
    alert(`O valor da compra é ${valor}`)
}

