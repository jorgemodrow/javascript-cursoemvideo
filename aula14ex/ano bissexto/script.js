function clicar() {
    let ano = document.querySelector('input#ano').value
    let res = document.querySelector('div#res')

    if (ano % 400 == 0) {
        res.innerHTML="É bissexto"
    } else if (ano % 4 == 0 && ano % 100 != 0) {
        res.innerHTML="É bissexto"
    } else {
        res.innerHTML = "Não é bissexto"
    }
}