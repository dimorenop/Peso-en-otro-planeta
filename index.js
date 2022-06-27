//Variables del formulario para hacer los cálculos
      var peso =document.getElementById('CajaTexto1');
      var botonGo =document.getElementById('boton_Go');
      var botonReset = document.getElementById('boton_reset');

      //Escuchadores que permiten ejecutar la función de cada botó
      botonGo.addEventListener("click", realizarCalculos);
      botonGo.addEventListener("click", realizarCalculos);
      botonReset.addEventListener("click", reset);              
      
      //var peso = prompt("cuanto pesas?");
      
      //Función Para realizar los cálculos del peso
      function realizarCalculos(){
        var PesoTierra = parseFloat(peso.value);
        console.log(PesoTierra);

        var planeta1 = "la tierra";
        PesoTierra = PesoTierra.toFixed(2);

        var PesoMarte= (PesoTierra*3.7)/9.8;
        PesoMarte = PesoMarte.toFixed(2);

        var PesoJupiter = (PesoTierra*24.8)/9.8;
        PesoJupiter = PesoJupiter.toFixed(2);

        //Cambia el texto de salida de los cálculos
        var tierra = document.getElementById('Info_Tierra');
        tierra.innerHTML = " Tu peso en la "+ planeta1+" es: <strong1>"+ PesoTierra +"</strong1> kg";
        var marte = document.getElementById('Info_Marte');
        marte.innerHTML = " Tu peso en marte es: <strong2>"+ PesoMarte +"</strong2> kg";
        var jupiter = document.getElementById('Info_Jupiter');
        jupiter.innerHTML = " Tu peso en jupiter es: <strong3>"+ PesoJupiter +"</strong3> kg";

        if (isNaN(PesoTierra)){
            const parrafo = document.getElementById("contenido")
            parrafo.innerText = "Ingrese un número válido"
        }
        }

      //Funcion de Reseteo de la calculadora
      function reset()
      {
        window.location.reload(true);
      }