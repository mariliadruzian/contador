function contar() {
    let ini = document.querySelector('input.inicio')
    let fim = document.querySelector('input.fim')
    let intervalo = document.querySelector('input.intervalo')
    let res = document.querySelector('p.res')

    if (ini.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let int = Number(intervalo.value)
        
        if (int <= 0) {
            alert('Intervalo inválido! Considerando intervalo = 1.')
            int = 1;
        } if (i < f) {
            // contagem crescente
            for (let n = i; n <= f; n += int) {
                res.innerHTML += ` ${n},`
            }
        } else {
            // contagem decrescente
            for (let n = i; n >= f; n -= int) {
                res.innerHTML += ` ${n},`
            }
        }
        res.innerHTML += ' fim da contagem.'
    }
}