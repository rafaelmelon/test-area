<?php
//Importamos las variables del formulario de contacto
@$nombre = addslashes($_POST['nombre']);
@$email = addslashes($_POST['email']);
@$mensaje = addslashes($_POST['mensaje']);
 
//Preparamos el mensaje de contacto
$cabeceras = "From: $email\n" //La persona que envia el correo
. "Reply-To: $email\n";
$asunto = "Mensaje desde la pagina Web"; //asunto aparecera en la bandeja del servidor de correo
$email_to = "info@maria-diaz.es"; //cambiar por tu email
$contenido = "$nombre ha enviado un mensaje desde la web www.maria-diaz.es\n"
. "\n"
. "Nombre: $nombre\n"
. "Email: $email\n"
. "Mensaje: $mensaje\n"
. "\n";
 

//Enviamos el mensaje y comprobamos el resultado
if (@mail($email_to, $asunto ,$contenido ,$cabeceras )) {
 
//Si el mensaje se envía muestra una confirmación
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = 'http://maria-diaz.es';
</script>";
}else{
 
//Si el mensaje no se envía muestra el mensaje de error
die("Error: Su información no pudo ser enviada, intente más tarde");
}
?>

