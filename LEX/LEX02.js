var dol = 5.42
var valor
var res

var conv = prompt('Para qual valor você deseja converter?')
if(conv=='real'){
    valor=prompt('Qual o valor em dolar?')
    res=Number(valor)*Number(dol)
    alert(valor+' Dólares valem: '+res+'reais')
}
else{
    valor=prompt('Qual o valor em Real?')
    res=Number(valor)/Number(dol)
    alert(valor+' Reais valem: '+res+'dólares')
}

