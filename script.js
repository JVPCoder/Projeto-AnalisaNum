let num = []

function adicionar() {
    let put = document.getElementById('txtn')
    let tab = document.getElementById('selnums')
    let n = Number(put.value)


    if(put.value.length == 0){
        alert('[ERRO] Campo vazio !!!')
    }else{
        if(n > 100 || n <= 0){
            alert('[ERRO] Apenas valores entre 1 e 100 !!!')
        }else{
            if(num.indexOf(n) == -1){
                num.push(n)
                let item = document.createElement('option')
                item.text = `Valor ${n} adicionado.`
                tab.appendChild(item)
            }else{
                alert('[ERRO] Número já existente no array')
            }
            
        }
        put.value = ``
        put.focus()  
    }
}

function finalizar() {
    if(num.length == 0 ){
        alert('[ERRO] Adicione algum valor para finalizar')
    }else{
        let res = document.getElementById('result')
        let size = num.length
        let greater = Math.max.apply(null, num)
        let less = Math.min.apply(null, num)
        let sum = 0
        for(let pos in num){
            sum += num[pos]
        }
          
        let media = sum/num.length

        res.innerHTML = ``        
        res.innerHTML += `<p>Ao todo, temos ${size} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior número encontrado é ${greater}.</p>`
        res.innerHTML += `<p>Já o menor número encontrado é ${less}.</p>`
        res.innerHTML += `<p>A soma de todos os valores resulta em ${sum}.</p>`
        res.innerHTML += `<p>E a média entre eles é de ${media}.</p>`
    }
}