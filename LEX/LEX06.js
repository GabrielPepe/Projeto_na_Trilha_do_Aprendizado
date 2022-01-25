var maior=0 
var menor=9999999
var i
for(i=0; i<5;i++){
    var num=prompt('Digite um número:')
    if(num<menor){
        menor=num
    }
    if(num>maior)
        maior=num
}
alert('Menor número: '+menor)
alert('Maior número: '+maior)