    var operador1; 
    var operador2; 
    var operacion;
    var Limpiar = document.querySelector("#on");
    var Signo = document.getElementById("sign");
    var Raiz = document.getElementById("raiz");
    var Dividir = document.getElementById("dividido");
    var Multiplicar = document.getElementById("por");
    var Restar = document.getElementById("menos");
    var Sumar = document.getElementById("mas");
    var Igual = document.getElementById("igual");
    var Punto = document.getElementById("punto");
    var Uno = document.getElementById("1");
    var Dos = document.getElementById("2");
    var Tres = document.getElementById("3");
    var Cuatro = document.getElementById("4");
    var Cinco = document.getElementById("5");
    var Seis = document.getElementById("6");
    var Siete = document.getElementById("7");
    var Ocho = document.getElementById("8");
    var Nueve = document.getElementById("9");
    var Cero = document.getElementById("0");
    var Display = document.querySelector("#display");
    var Digito = Display.textContent;



    Limpiar.onmousedown = function apretar(e){
        Limpiar.style.padding = "3px 3px 3px 3px",
        Limpiar.style.transition = "padding 0.1s",
        Reiniciar()
        };  
    Limpiar.onmouseup= function alejar(e){
        Limpiar.style.padding = "0px",
        Limpiar.style.transition = "padding 0.1s"
        }

    Uno.onmousedown = function apretar(e){
        Uno.style.padding = "3px 3px 3px 3px",
        Uno.style.transition = "padding 0.1s",
        imprimir("1")
    }
    Uno.onmouseup= function alejar(e){
        Uno.style.padding = "0px",
        Uno.style.transition = "padding 0.1s"
        }
    Dos.onmousedown = function apretar(e){
        Dos.style.padding = "3px 3px 3px 3px",
        Dos.style.transition = "padding 0.1s",
        imprimir("2")
        };  
    Dos.onmouseup= function alejar(e){
        Dos.style.padding = "0px",
        Dos.style.transition = "padding 0.1s"
        }
    Tres.onmousedown = function apretar(e){
        Tres.style.padding = "3px 3px 3px 3px",
        Tres.style.transition = "padding 0.1s",
        imprimir("3")
        };  
    Tres.onmouseup= function alejar(e){
        Tres.style.padding = "0px",
        Tres.style.textContent = "padding 0.1s"
        }
    Cuatro.onmousedown = function apretar(e){
        Cuatro.style.padding = "3px 3px 3px 3px",
        Cuatro.style.transition = "padding 0.1s",
        imprimir("4")
        };  
    Cuatro.onmouseup= function alejar(e){
        Cuatro.style.padding = "0px",
        Cuatro.style.transition = "padding 0.1s"
        }
    Cinco.onmousedown = function apretar(e){
        Cinco.style.padding = "3px 3px 3px 3px",
        Cinco.style.transition = "padding 0.1s",
        imprimir("5")
        };  
    Cinco.onmouseup= function alejar(e){
        Cinco.style.padding = "0px",
        Cinco.style.transition = "padding 0.1s"
        }
    Seis.onmousedown = function apretar(e){
        Seis.style.padding = "3px 3px 3px 3px",
        Seis.style.transition = "padding 0.1s",
        imprimir("6")
        };  
    Seis.onmouseup= function alejar(e){
        Seis.style.padding = "0px",
        Seis.style.transition = "padding 0.1s"
        }
    Siete.onmousedown = function apretar(e){
        Siete.style.padding = "3px 3px 3px 3px",
        Siete.style.transition = "padding 0.1s",
        imprimir("7")
        };  
    Siete.onmouseup= function alejar(e){
        Siete.style.padding = "0px",
        Siete.style.transition = "padding 0.1s"
        }
    Ocho.onmousedown = function apretar(e){
        Ocho.style.padding = "3px 3px 3px 3px",
        Ocho.style.transition = "padding 0.1s",
        imprimir("8")
        };  
    Ocho.onmouseup= function alejar(e){
        Ocho.style.padding = "0px",
        Ocho.style.transition = "padding 0.1s"
        }
    Nueve.onmousedown = function apretar(e){
        Nueve.style.padding = "3px 3px 3px 3px",
        Nueve.style.transition = "padding 0.1s",
        imprimir("9")
        };  
    Nueve.onmouseup= function alejar(e){
        Nueve.style.padding = "0px",
        Nueve.style.transition = "padding 0.1s"
        }
    Cero.onmousedown = function apretar(e){
        Cero.style.padding = "3px 3px 3px 3px",
        Cero.style.transition = "padding 0.1s",
        imprimir("0")
        };  
    Cero.onmouseup= function alejar(e){
        Cero.style.padding = "0px",
        Cero.style.transition = "padding 0.1s"
        }
    Sumar.onmousedown = function apretar(e){
        Sumar.style.padding = "3px 3px 3px 3px",
        Sumar.style.transition = "padding 0.1s",
        operador1 = Display.textContent,
        operacion = "+",
        clean()
        };  
    Sumar.onmouseup= function alejar(e){
        Sumar.style.padding = "0px",
        Sumar.style.transition = "padding 0.1s"
        }
    Restar.onmousedown = function apretar(e){
        Restar.style.padding = "3px 3px 3px 3px",
        Restar.style.transition = "padding 0.1s",
        operador1 = Display.textContent,
        operacion = "-",
        clean()
        };  
    Restar.onmouseup= function alejar(e){
        Restar.style.padding = "0px",
        Restar.style.transition = "padding 0.1s"
        }
    Multiplicar.onmousedown = function apretar(e){
        Multiplicar.style.padding = "3px 3px 3px 3px",
        Multiplicar.style.transition = "padding 0.1s",
        operador1 = Display.textContent,
        operacion = "*",
        clean()
        };  
    Multiplicar.onmouseup= function alejar(e){
        Multiplicar.style.padding = "0px",
        Multiplicar.style.transition = "padding 0.1s"
        }
    Dividir.onmousedown = function apretar(e){
        Dividir.style.padding = "3px 3px 3px 3px",
        Dividir.style.transition = "padding 0.1s",
        operador1 = Display.textContent,
        operacion = "/",
        clean()
        };  
    Dividir.onmouseup= function alejar(e){
        Dividir.style.padding = "0px",
        Dividir.style.transition = "padding 0.1s"
        }
    Igual.onmousedown = function apretar(e){
        Igual.style.padding = "3px 3px 3px 3px",
        Igual.style.transition = "padding 0.1s",
        operador2 = Display.textContent,
        resolver()
        };  
    Igual.onmouseup= function alejar(e){
        Igual.style.padding = "0px",
        Igual.style.transition = "padding 0.1s"
        }
    Signo.onmousedown = function apretar(e){
        Signo.style.padding = "3px 3px 3px 3px",
        Signo.style.transition = "padding 0.1s",
        cambio()
        };  
    Signo.onmouseup= function alejar(e){
        Signo.style.padding = "0px",
        Signo.style.transition = "padding 0.1s"
        }
    Punto.onmousedown = function apretar(e){
        Punto.style.padding = "3px 3px 3px 3px",
        Punto.style.transition = "padding 0.1s",
        coma()
        };  
    Punto.onmouseup= function alejar(e){
        Punto.style.padding = "0px",
        Punto.style.transition = "padding 0.1s"
        }
function imprimir(num){ if (Display.textContent.length < 8){
        if (Display.textContent == "0") {Display.textContent = num} else {Display.textContent =  Display.textContent + num}
    }}
function resolver(){ if (Display.textContent.length < 8){
    var resultado = 0;
    switch (operacion){
        case "+" : resultado = parseFloat(operador1) + parseFloat(operador2); break;
        case "-" : resultado = parseFloat(operador1) - parseFloat(operador2); break;
        case "*" : resultado = parseFloat(operador1) * parseFloat(operador2); break;
        case "/" : resultado = parseFloat(operador1) / parseFloat(operador2); break;
    }
    Display.textContent = resultado;
}}

function Reiniciar(){
    Display.textContent= "0",
    operador1 = 0,
    operador2 = 0,
    operacion = ""
}
function clean(){
    Display.textContent= ""
}
function cambio(){
    Display.textContent = Display.textContent * -1
}
function coma(){
    if (Display.textContent.indexOf(".") == -1) {Display.textContent =  Display.textContent + "." } else {Display.textContent =  Display.textContent }
}
  



