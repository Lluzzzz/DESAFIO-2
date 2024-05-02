
let a=prompt("ingrese n")
let r = (Math.sqrt(2 * Math.PI * a)) * ((a) / Math.E) ** a;

document.write("<h3><br> EL RESULTADO ES:</h3> "+r)

/*Verificación de MATLAB: 
factorial_de_20 = factorial(20);
disp(factorial_de_20); % Muestra el resultado en la consola
CONSOLA: 	2432902008176640000*/

document.write("<br><h3>Verificación de MATLAB PARA FACTORIAL DE 20:</h3> 2432902008176640000")
let error=(2432902008176640000-r)/2432902008176640000
document.write("<h3><br>El error es de:</h3> "+error)
