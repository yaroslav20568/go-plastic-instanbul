<?php
	$to = "ravlushevich.iarek@mail.ru";
	$tema = "Связаться с нами";
	foreach($_POST as $key => $value){
		$message = "Ваше имя: ".$_POST[$key]."<br>";
	}
	foreach ($_POST as $key => $value)
		if($key == 'name') {
			$message = "Ваше имя: ".$value."<br>";
		} else if($key == 'phone') {
			$message .= "Телефон: ".$value."<br>";
		} else if($key == 'email') {
			$message .= "E-mail: ".$value."<br>";
		} else if($key == 'message') {
			$message .= "Сообщение: ".$value."<br>";
		}
	// $message = "Ваше имя: ".$_POST['name']."<br>";
	// $message .= "E-mail: ".$_POST['email']."<br>";
	// $message .= "Сообщение: ".$_POST['message']."<br>";
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	mail($to, $tema, $message, $headers);
?>