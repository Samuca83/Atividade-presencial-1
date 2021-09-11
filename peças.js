const listadepeças = ['peças de teste', 'AB', 'peça B']
console.log('quantidade de caracteres')

if (listadepeças.length <= 10) {
    
}
console.log('as peças podem ser cadastradas');

 for (let index =0; index < listadepeças.length; index++) {
     const peçaatual = listadepeças[index];
     if (peçaatual.length <3) {
         console.log (peçaatual + ':a peça possui nome inferior a 3 caracteres e não pode ser cadastrada')
     }else{
         console.log (peçaatual +  ':a peça pode ser cadastrada')
     }

}
         console.log ('peso da peça')
         
         const pesodapeçaemgramas = 50;
         if (pesodapeçaemgramas >= 100) {
             console.log ('peso suficiente')
         }else {
             console.log ('valor insuficiente')
     }