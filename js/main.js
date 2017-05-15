function validateForm(){
	function nombre(){ 
		var nombre = document.getElementById("name").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(nombre)){
			var crearSpan= document.createElement("span");
			var mensaje= document.createTextNode("Nombre inválido, ingrese nuevamente");
			var fatherClass=document.getElementsByClassName("name-container input-box")[0];
			crearSpan.appendChild(mensaje);
			fatherClass.appendChild(crearSpan);
		}
	}
	nombre();

	function apellido(){ 
		var apellido = document.getElementById("lastname").value;
		if (!(/^[A-Z][a-z]{3,19}$/).test(apellido)){
			var crearSpan= document.createElement("span");
			var mensaje= document.createTextNode("Apellido inválido, ingrese nuevamente");
			var fatherClass=document.getElementsByClassName("lastname-container input-box")[0];
			crearSpan.appendChild(mensaje);
			fatherClass.appendChild(crearSpan);
		}
	}
	apellido();

		/*var correo = document.getElementById("input-email").value;
		if ( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {
			var crearSpan= document.createElement("span");
			var mensaje= document.createTextNode("Email inválido, ingrese nuevamente");
			var fatherClass=document.getElementsByClassName("email-container input-box")[0];
			crearSpan.appendChild(mensaje);
			fatherClass.appendChild(crearSpan);
		}
	}
	correo();*/

	function password(){
		var contrasenia=document.getElementById("input-password").value;
		if (!(/^(?=.*\d).{6,}$/).test(contrasenia)) {
			var crearSpan= document.createElement("span");
			var mensaje= document.createTextNode("Contraseña inválido, ingrese nuevamente");
			var fatherClass=document.getElementsByClassName("form-group input-box")[0];
			crearSpan.appendChild(mensaje);
			fatherClass.appendChild(crearSpan);
		}
	}
	password();

	function opciones(){
	var seleccion=document.getElementsByTagName("select");
	for (var i=0; i<seleccion.length; i++){
		if(seleccion[i].value=="0"){
			var crearSpan= document.createElement("span");
			var mensaje= document.createTextNode("Debe seleccionar una opción");
			var fatherClass=document.getElementsByClassName("form-group input-box")[1];
			crearSpan.appendChild(mensaje);
			fatherClass.appendChild(crearSpan);
		}
	}
}
opciones();
}

