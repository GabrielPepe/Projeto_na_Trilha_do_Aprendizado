var v=[4,8,7,6]

//alert(v)

v[2]=3
//alert(v)

var soma = v[0]+v[3]

lista = ["Juquinha", 1910, "Rua A", "Irati", "PR", 80.5]
alert(lista)
alert(lista[0])

for(var i=0;i<lista.length;i++){
    document.write("<h2>"+lista[i]+"</h2>")
}
lista.push("84500-000") // insere um elemento na última posição

alert(lista)

lista.pop() //remove o último elemento da lista
alert(lista)
lista.shift() // remove o primeiro elemento da lista
lista.unshift("Zequinha") // adiciona na primeira posição da lista

var posicao

posicao=lista.indexOf("Irati") // retorna o índice do elemento procurado

alert(posicao)