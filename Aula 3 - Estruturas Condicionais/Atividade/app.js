let peso = prompt("Digite o seu peso em kg");
let altura= prompt("Digite sua altura em cm");
let genero =prompt("Digite se você é 1) Homi ou 2) Muiê");
let alturaEmMetros = altura/100;
let imc;

if(genero==="1")
{ imc=peso/(alturaEmMetros*alturaEmMetros);}
else if(genero==="2")
{imc=1.3*(peso/(alturaEmMetros*alturaEmMetros));}
else{alert("Digite o valor certo;")}

if(imc<18.5){alert("Abaixo do peso,coma mais.");}
else if(imc>=18.5 && imc<25)
{alert("Peso certo, continue assim");}
else if(imc>=25 && imc<30)
{alert("Acima do peso, coma menos");}
else{alert("Obeso.Fecha a boca.");}
