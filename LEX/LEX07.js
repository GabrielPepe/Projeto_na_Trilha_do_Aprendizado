var fem=0
var masc=0
var maioridade=0
var menoridade=0
var imax_h=0
var imin_h=999999
var imax_m=0
var imin_m=999999
var maioremasc=0
var maiorefem=0


for (i=0;i<5;i++){
    var idade = prompt('Qual a sua idade?')
    var sex = prompt('Qual o seu sexo?')


    if(idade>=18){
        maioridade++
    }
    else if(idade<18){
        menoridade++
    }
    if(sex=='masculino'){
        masc++
        if(idade>imax_h){
            imax_h=idade
        }
        else if(idade<imin_h){
            imin_h=idade
        }
        if(idade>=18){
            maioremasc++
        }
    }
    else if(sex=='feminino'){
        fem++
        if(idade>imax_m){
            imax_m=idade
        }
        else if(idade<imin_m){
            imin_m=idade
        }
        if(idade>=18){
            maiorefem++
        }
    }  
}
alert('Sexo masculino: '+masc+' e Sexo feminino: '+fem)
alert('Maiores de idade: '+maioridade+' Menores de idade: '+menoridade)
alert('Idade do Homem mais velho: '+imax_h+' Idade do homem mais novo: '+imin_h)
alert('Idade da Mulher mais velha: '+imax_m+' Idade da Mulher mais nova: '+imin_m)
alert('Homens maiores de idade: '+maioremasc+' Mulheres maiores de idades: '+maiorefem)