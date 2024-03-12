let idade=prompt("Digite sua idade");
let possuiCarteira = 
prompt("Informe se possui carteira: 1)sim 2)não");
let problemasFisico=
prompt("Informe se tem problema de visão ou mobilidade: 1)sim 2)não");
let problemasPsicologicos=
prompt("Informe se tem vicios com alcool ou entorpecentes: 1)Tenho 2)Não tenho");

if(idade>=18)
{
    if(possuiCarteira==="1")
    {
       if(problemasFisico==="2" && problemasPsicologicos==="2")
       {
        alert("Ok está apto");
       }
       else{alert("Procure um médico");}
    }
    else{alert("Vá fazer a sua carteira");}
}
else{alert("Não tem idade para dirigir");}