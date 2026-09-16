function calcular() {
    var numero = Number(document.querySelector('input#num').value)
    var div = document.querySelector('div')
    div.innerHTML = ''
    var um = 1
    for (um ; um <= 10 ; um++) {
        var res = numero * um
        div.innerHTML += `${numero} x ${um} = ${res}</br>`
    }
}