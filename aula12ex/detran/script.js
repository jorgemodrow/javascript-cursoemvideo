var h1 = document.querySelector('h1')
        var ver = document.querySelector('input#ver')

        function segurar() {
            ver.style.border = 'thin'
            ver.style.borderColor = 'black'
        }
        
        function verificar() {
            var km = document.querySelector('input#kmh')
            var kmh = km.value
            var res = document.querySelector('div#res')
            if (kmh > 60) {
                res.style.color = 'black'
                res.innerHTML = `Sua velocidade atual é de <strong>${kmh}km/h</strong>`
                res.innerHTML += `<p>Você está <strong>multado</strong> por excesso de velocidade!</p>`
                res.innerHTML += `<p>Dirija sempre com cinto de segurança.</p>`
                km.style.borderColor = 'black'
            } else if (kmh.length < 1) {
                res.style.color = 'red'
                res.innerHTML = 'Preencha este campo.</br>'
                km.style.borderColor = 'red'
            } else if (kmh <= 0) {
                res.style.color = 'red'
                res.innerHTML = 'Velocidade inválida!</br>'
                km.style.borderColor = 'red'
            } else {
                res.innerHTML = `Sua velocidade atual é de <strong>${kmh}km/h</strong></br>`
                res.style.color = 'black'
                res.innerHTML += `<p>Dirija sempre com cinto de segurança.</p>`
                km.style.borderColor = 'black'
            }
        }