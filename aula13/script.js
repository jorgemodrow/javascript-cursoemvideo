function ir() {
    var qtd = document.querySelector('input#num').value
    var res = document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    do {
        res.innerHTML += `${ano} ${qtd}</br>`
        qtd--
        ano--
    } while (qtd >= 0)
}