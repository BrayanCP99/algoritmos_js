// document.body.onload = function(){
// alert("hola mundo")    
// }

function operaciones(){
    var A = 0 ;
    var B = 0 ;
    var suma = 0;
    var resta = 0;
    var multiplicacion = 0 ;
    var division=0;

    alert("Este algoritmo va a dar el resultado de las operaciones basicas de dos valores ingresados por el usuario");

    A = parseInt(prompt("Por favor digite el primer valor a sumar "));
    B = parseInt(prompt("Por favor digite el segundo valor a sumar "));

    suma = A + B ;
    resta = A - B ;
    multiplicacion = A * B;
    division = A /B ;

   
    alert("El resultado de la suma es: " + suma);
    alert("El resultado de la resta es: " + resta);
    alert("El resultado de la multiplicacion es: " + multiplicacion);
    alert("El resultado de la division es: " + division);
}

function Mayor_que_dos_numeros(){
    var A = 0 ;
    var B = 0 ;
    
    alert("Este algoritmo mostrara el numero mayor de dos numero ingresados por el usuario");

    A = parseInt(prompt("Por favor digite el primer valor a comparar"));
 
    B = parseInt(prompt("Por favor digite el segundo valor a comparar "));

    if (A==B) {
        alert("Los dos numeros ingresados son iguales ");
    } else if(A>B) {
        alert("El numero mayor de los dos es: "+ A);
    } else {
        alert("El numero mayor de los dos es: " + B);
    }
}
function Menor_de_tres_numeros(){
    var A = 0 ;
    var B = 0 ;
    var C = 0 ;

    alert ("Este algoritmo mostrara el numero menor de 3 ")
    
    A = parseInt(prompt("Por favor digite su primer valor a comparar "));
    B = parseInt(prompt("Por favor digite su segundo valor a comparar "));
    C = parseInt(prompt("Por favor digite su tercer valor a comparar "));

    if ((A>B)&&(B>C)){
        alert("El numero menor de los tres es: " + C);
    } else if ((A>B)&&(C>B)){
        alert("El numero menor de los tres es: " + B);
    } else {
        alert("El numero menor de tres es; " + A)
    }
    if ((A==B)&&(A==C)){
        alert("Los numeros ingresados son iguales ");
    }

}
function par_impar(){
    var A = 0;
    alert("Este algoritmo mostrara si un numero es par o impar")
    A = parseInt(prompt("Ingrese un numero "));
    if ((A % 2)===0){
        alert ("El numero es par " + A);
    } else { 
        alert ("El numero es impar " + A)
    }
    if (A = 0) {
        alert("El numero es CERO")
    }
}

function Algoritmo_que_da_el_cuadrado_de_un_numero(){
    var A = 0
    var cuadrado = 0
    alert("Este algoritmo mostrara el cuadrado de un  numero ingresado por el usuario ");
    
    A = parseInt(prompt("Por favor ingrese el numero a calcular el cuadrado "));

    cuadrado = A * A ;

    alert("EL cuadrado de su numero ingresado es de: " + cuadrado);
}
function Algoritmo_que_calculara_el_area_de_un_triangulo(){
    var base = 0
    var perimetro = 0
    var area = 0
    alert("Este algoritmo indicara el area de un triangulo segun su base y perimetro");
    
    base = parseInt(prompt("digite el valor de la base de su triangulo "));
    perimetro = parseInt(prompt("Digite el valor del perimetro de su triangulo "));

    area = base * perimetro /2
    alert("El area de su triangulo es: " + area);
}
function Algoritmo_que_dara_un_valor_en_cm_kilometros_pulgadas_segun_el_valor_que_usuario_ingrese_en_metros (){
    var A = 0
    var cm = 100 
    var kilometros = 1000
    var pulgadas = 39.37
    var resucm = 0
    var resukm = 0
    var resuplg = 0

    alert("Este algortimo dara en cm, kl,plg de el valor ingresado dado por el usuario en mts");

    A =parseInt(prompt("Por favor digite el valor que desea convertir "));
    resucm = A * cm;
    resukm = A * kilometros;
    resuplg = A * pulgadas; 

    alert ("El resultado de su numero transformado en cm es: " + resucm );
    alert ("El resultado de su numero transformado en km es: " + resukm );
    alert ("El resultado de su numero transformado en pulgadas es: " + resuplg );
}   

function Anio_en_que_nacio (){
    Edad = 0
    Anio_actual = 0
    Anio_nacimiento = 0
    alert("Este algoritmo mostrara el anio en que usted nacio");
    Edad = parseInt(prompt("Por favor ingrese su edad a cumplir en el anio actual"));
    Anio_actual = parseInt(prompt("Por favor ingrese el anio acutal "));

    Anio_nacimiento = Anio_actual - Edad
    
    alert("El anio en que usted nacio es: " + Anio_nacimiento )
}

function capital_invertido(){
    Capital = 0
    Anio_inver = 0
    Capital_final = 0
    alert("Este algoritmo indicara el capital final el cual el usuario invirtio en tantos anios ");

    Capital = parseInt(prompt("Por favor ingrese su capital a invertir "));
    Anio_inver = parseInt(prompt("Por favor ingrese los anios a invertir "));
        
    Capital_final = (Capital * Anio_inver) * 24;
    
    alert("El valor de su capital al finalizar los anios que solicito es de: " + Capital_final);
}
function Descuento_manzanas(){
    var precio, kilos, total, D1, D2, D3 = 0;
    alert("Este algoritmo le dira de cuanto es el descuento ");
    kilos =parseInt(prompt("Por favor ingrese la cantidad de kilos de manzanas que lleva "));
    precio=parseInt(prompt("Por favor indicaque el valor del precio sin descuento "));

    total = precio * kilos 
    D1 = (total * 10 ) /100
    D2 = (total * 15 ) /100
    D3 = (total * 20 ) /100

    if (kilos <= 2) {
        alert("El cliente no tiene descuento y debera pagar es de:" + total);
    }else{
      if(kilos <=5){
         alert("El cliente tiene un descuento del 10% y debe pagar: "+ (total-D1));
         alert("Su descuento es de: " + D1)
      }else{

     
        if (kilos <= 10) {
         alert("El cliente tiene un descuento del 15% y debera pagar: " + (total-D2))
         alert("Su descuento es de: " + D2) 
        }else{

     
            if (kilos >=10){
             alert("El cliente tiene un descuento del 20% y debera pagar: " + (total-D3))
             alert("Su descuento es de: " + D3)
            }
        }

    }
}
function Colegio (){
    var n1,n2,n3,n4,n5,total,promedio=0
    alert("Este algoritmo mostrara el promedio final de 5 notas ingresadas por el profesor para saber si el alumno aprobo o no ");
    alert("recuerde que las notas ingresadas va del 1 al 5 donde aprobar tendra que sacar un promedio de3.0")
    n1= parseInt(prompt("Por favor ingrese la primera nota del alumno "));
    n2= parseInt(prompt("Por favor ingrese la segunda nota del alumno "));
    n3= parseInt(prompt("Por favor ingrese la tercera nota del alumno "));
    n4= parseInt(prompt("Por favor ingrese la cuarta nota del alumno "));
    n5= parseInt(prompt("Por favor ingrese la quinta nota del alumno "));
    total=n1 + n2 + n3 + n4 + n5
    promedio = total/5
    if(promedio<2.9){
        alert("El alumnno reprobo con el promedio de: " + promedio);
    }else{
        alert("El alumno aprobo con el promedio de: " + promedio)
    }
}function Cifras (){
    var numero = 0
    alert("Este algoritmo determinara el total de cifras de un numero ingresado por el usuario ");
    numero= parseInt(prompt("Por favor ingrese cualquier numero "));
        if (numero<9){
         alert("Tiene una sola cifra " + numero);
            }else{

                if (numero<99){
                  alert("Tiene dos cifras " + numero);
                     }else{

                        if(numero<999){
                             alert("Tiene tres cifras " + numero);
                                 }else {

                                     if(numero<9999){
                                        alert("Tiene cuatro cifras " + numero);
                                              }else {
                                                 alert("Tiene mas de cuatro cifras " + numero)
                                              }
                                            }
                     } 
                }             

            }
}