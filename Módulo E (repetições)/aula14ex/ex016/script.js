var inicio = document.querySelector(`input#inicio`)
var fim = document.querySelector(`input#fim`)
var passo = document.querySelector(`input#passo`)
var div = document.querySelector('div#res')
var cont = document.querySelector('input#contar')


function contar() {
    div.innerHTML = ''
    var fi1 = fim.value
    var pas1 = passo.value
    var in1 = inicio.value

    var f = Number(fi1)
    var p = Number(pas1)
    var i = Number(in1)

    if (in1.length == 0 || fi1.length == 0 || pas1.length == 0) {
        div.innerHTML = `Confira os dados e tente novamente!`
        fim.style.borderColor = 'red'
        inicio.style.borderColor = 'red'
        passo.style.borderColor = 'red'
    } else if (p <= 0) {
        fim.style.borderColor = 'black'
        inicio.style.borderColor = 'black'
        passo.style.borderColor = 'red'
        div.innerHTML = 'Passo inválido!'
    } else {
        fim.style.borderColor = 'black'
        inicio.style.borderColor = 'black'
        passo.style.borderColor = 'black'

        if (i < f) {
            // Contagem crescente
            for (i ; i <= f ; i = i + p) {
                div.innerHTML += `${i} ➡️ `
            }
        } else {
            // Contagem regressiva
            for (i ; i >= f ; i = i - p) {
                div.innerHTML += `${i} ➡️ `
            }
        }
        
        div.innerHTML += ' 🏁'
    }
}

function mover() {
    cont.style.background = 'lightgreen'
}

function sair() {
    cont.style.background = 'green'
}