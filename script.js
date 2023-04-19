function suma()
{
    var suma1, suma2, resul;
    suma1=prompt("Escribe un número", "");
    suma2=prompt("Escribe otro número", "");
    resul=parseInt(suma1)+parseInt(suma2);
    alert("La suma es: "+resul);
}

function resta()
{
    var resta1, resta2, resul;
    resta1=prompt("Escribe un número", "");
    resta2=prompt("Escribe otro número", "");
    resul=parseInt(resta1)-parseInt(resta2);
    alert("La resta es: "+resul);
}

function multiplica()
{
    var num1, num2, resul;
    num1=prompt("Escribe un número", "");
    num2=prompt("Escribe otro número", "");
    resul=parseInt(num1)*parseInt(num2);
    alert("La multiplicación es: "+resul);
}

function divide()
{
    var div1, div2, resul;
    div1=prompt("Escribe un número", "");
    div2=prompt("Escribe otro número", "");
    resul=parseInt(div1)/parseInt(div2);
    alert("La división es: "+resul);
}

function posneg()
{
    var num;
    num=prompt("Escribe un número", "");
    if (parseInt(num)>0)
    {
        alert("El número es positivo");
    }
    else
    {
        alert("El número es negativo");
    }
}