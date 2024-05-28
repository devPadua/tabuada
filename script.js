function gerar(){
var txtn = document.getElementById('numero')
var n = Number(txtn.value)
var res = document.getElementById('res')
var c = 1
var multitxt = document.getElementById('multi')
var multi = Number(multitxt.value)
res.innerHTML = `Tabuada do ${n} até o ${multi}: <br>`
    while (c <= multi){
        var r =  c * n
        res.innerHTML += `<br> ${n} x ${c} = ${r} <br>`
        var c = c + 1
}

}
