<?php
if( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m']) ){
	$n = $_POST['n'];
	$e = $_POST['e'];
	$m = $_POST['m'];
	$to = "jrschupak@gmail.com";
	$from = $e;
	$subject = "Contact Form Message My Website";
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e' <p>'.$m.'</p>';
	$headers = 'From: $from\n';
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo 'success';
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}

?>
