//Declaración de variables
var nombreUsuario="Pepe Argento";
var limiteExtraccion=5000;
var saldoCuenta=10000;
var codigoOk="1234";
var sesionInic=false;
var cuentaAmiga=0;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
	
	iniciarSesion();
			
	if(sesionInic==true){
		
		cargarNombreEnPantalla();
		actualizarLimiteEnPantalla();
		actualizarSaldoEnPantalla();
	}
}

function sumaDinero (monto){
	
	saldoCuenta= monto + saldoCuenta;
	
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	
	if (sesionInic==true){
	
		var nuevoLim= parseInt(prompt("Ingrese nuevo limite de extraccion"));
		if (!isNaN(nuevoLim)){
				
			limiteExtraccion=nuevoLim;
			actualizarLimiteEnPantalla();
			alert("Su nuevo limite de extraccion es: $" + limiteExtraccion);
		}else return;
	}

}

function extraerDinero() {
	
	if (sesionInic==true){
		
		var extraccion=parseInt(prompt("Saldo actual: $" + saldoCuenta + ". Ingrese monto a retirar"));
		if (!isNaN(extraccion)){
		
			if (extraccion<=saldoCuenta){
			
				if (extraccion<=limiteExtraccion){
				
					var resto = extraccion%100;
				
					if (resto==0){
			
						saldoCuenta=saldoCuenta - extraccion;
					
						alert("Ha retirado: $" + extraccion + "\nSaldo actual: $" + saldoCuenta + "\nSaldo anterior: $" + (saldoCuenta+extraccion));
					
						actualizarSaldoEnPantalla();
					
					}else{
						alert ("Este cajero solo entrega billetes de $100");
					}
				
				}else{
					alert ("El monto ingresado excede el limite de extraccion");
				}
			
			}else{
				alert ("No tiene suficiente saldo para realizar esa extraccion");
			}
		}else return;
	}

}

function depositarDinero() {
	
	if (sesionInic==true){
		
		var deposito=parseInt(prompt("Ingrese monto a depositar"));
		if (!isNaN(deposito)){
		sumaDinero(deposito);
		actualizarSaldoEnPantalla();
		}else return;
	}else{
		iniciarSesion();
	}

}

function pagarServicio() {
	
	if (sesionInic==true){
		
		var servicio = parseInt(prompt("1- Agua: $350\n2- Telefono: $425\n3- Luz: $210\n4- Internet: $300"));
		
		if (!isNaN(servicio)){
		
		switch(servicio){
				
			case 1: if(saldoCuenta>=350){
					
						alert("Usted ha abonado servicio Agua por $350");
						saldoCuenta-=350;
						actualizarSaldoEnPantalla();
					}else alert("No tiene saldo suficiente");
					break;
				
			case 2: if(saldoCuenta>=425){
				
						alert("Usted ha abonado servicio Telefono por $425");
						saldoCuenta-=425;
						actualizarSaldoEnPantalla();
					}else alert("No tiene saldo suficiente");
					break;
				
			case 3: if(saldoCuenta>=210){ 
				
						alert("Usted ha abonado servicio Luz por $210");
						saldoCuenta-=210;
						actualizarSaldoEnPantalla();
					}else alert("No tiene saldo suficiente");
					break;
				
			case 4: if(saldoCuenta>=300){ 
				
						alert("Usted ha abonado servicio Internet por $300");
						saldoCuenta-=300;
						actualizarSaldoEnPantalla();
					}else alert("No tiene saldo suficiente");
					break;
			
			default: alert("Ha ingresado una opcion no valida");
				
					   }
	}else return;
	}

}

function transferirDinero() {
	
	if (sesionInic==true){
		
		var transferencia = parseInt(prompt("Ingrese monto a transferir"));
		
		if (!isNaN(transferencia)){
		
		if (transferencia<=saldoCuenta){
			
			cuentaAmiga = (prompt("Ingrese numero de cuenta a la que desea transferir"));
			
				if (cuentaAmiga=="1" || cuentaAmiga=="2"){
					
					saldoCuenta -= transferencia;
					alert("Se ha transferido: $" + transferencia + "\nDestino: Cuenta Amiga " + cuentaAmiga);
					actualizarSaldoEnPantalla();
					
				}else alert("Solo puede transferir dinero a una cuenta amiga")
			
		}else alert ("No tiene saldo suficiente para esta transferencia");
	}else return;
	}

}

function iniciarSesion() {
	

	var codigoIng=prompt("Ingrese su clave");
	if (codigoIng==codigoOk){
		
		alert("Bienvenido " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
		sesionInic=true;
		
		
		
	}else{
		
		alert("Codigo incorrecto, se ha retenido su dinero");
		saldoCuenta=0;
		actualizarSaldoEnPantalla();
		sesionInic=false;
	}

}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}