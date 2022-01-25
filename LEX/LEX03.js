var n1=prompt('Digite a nota número 1 :')
var n2=prompt('Digite a nota número 2 :')
var n3=prompt('Digite a nota número 3 :')
var n4=prompt('Digite a nota número 4 :')

var med= (Number(n1)+Number(n2)+Number(n3)+Number(n4))/4

if(med<7){
    alert('O conceito é D')
}
else if(med==7 || med<=7.9){
    alert('O conceito é C')
}
else if(med>=8 & med<=8.9){
    alert('O conceito é B')
}
else if(med>=9 & med<=10){
    alert('O conceito é A')
}