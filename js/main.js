function validateForm(){
	function nombre(){ 
		var nombre = document.getElementById("name").value;
		if (nombre==="" || nombre===undefined || nombre.length===0)	{
			alert("Error, debe ingresar nombre");
		}
		else if (nombre.charAt(0)!=nombre.charAt(0).toUpperCase()){
			alert("Error, la primera letra de su nombre debe ser mayúscula");
		}
		else if (!(/^[A-Z][a-z]{3,19}$/).test(nombre)){
			alert("Error, debe ingresar solo letras");
		}
	}
	nombre();

	function apellido(){ 
		var apellido = document.getElementById("lastname").value;
		if (apellido==="" || apellido===undefined || apellido.length===0)	{
			alert("Error, debe ingresar apellido");
		}
		else if (apellido.charAt(0)!=apellido.charAt(0).toUpperCase()){
			alert("Error, la primera letra de su apellido debe ser mayúscula");
		}
		else if (!(/^[A-Z][a-z]{3,19}$/).test(apellido)){
			alert("Error, debe ingresar solo letras");
		}
	}
	apellido();

	function correo(){ 
		var correo = document.getElementById("input-email").value;
		if (correo==="" || correo===undefined || correo.length===0)	{
			alert("Error, debe ingresar email");
		}
		/*else if (correo.charAt(0)!=nombre.charAt(0).toUpperCase()){
			alert("Error, la primera letra debe ser mayúscula");
		}
		else if (!(/^[A-Z][a-z]{3,19}$/).test(nombre)){
			alert("Error, debe ingresar solo letras");
		}*/
	}
	correo();

	function password(){
		var contrasenia=document.getElementById("input-password").value;
		if (contrasenia==="" || contrasenia===undefined || contrasenia.length===0)	{
			alert("Error, debe ingresar contraseña");
		}
		else if (contrasenia==="123456" || contrasenia==="password" || contrasenia==="098754") {
			alert("Error, contraseña no debe ser 123456, 098754 o password");
		}
		else if (contrasenia.length<6)	{
			alert("Error, contraseña debe tener un mínimo de 6 caracteres");
		}
	}
	password();

	function opciones(){
	var seleccion=document.getElementsByTagName("select");
	for (var i=0; i<seleccion.length; i++){
		if(seleccion[i].value=="0"){
			alert("Debe elegir opción");
		}
	}
}
opciones();
}

