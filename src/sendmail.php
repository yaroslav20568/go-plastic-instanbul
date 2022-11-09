<?php
$rdir = str_replace("\\", "/", __DIR__);
require $rdir.'/phpmailer/Exception.php';
require $rdir.'/phpmailer/PHPMailer.php';
require $rdir.'/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


$mail = new PHPMailer(true);

$mail->From = "noreply@dev.nbd.by";
$mail->FromName = $_POST['name'];


$mail->addAddress("yaroslav@nbd.by", "Recepient Name");
$mail->addAddress("yaroslav@nbd.by");



$mail->isHTML(true);

foreach ($_POST as $key => $value)
	if($key == 'name') {
		$message = "<b>Ваше имя:</b> ".$value."<br>";
	} else if($key == 'phone') {
		$message .= "<b>Телефон:</b> ".$value."<br>";
	} else if($key == 'email') {
		$message .= "<b>E-mail:</b> ".$value."<br>";
	} else if($key == 'message') {
		$message .= "<b>Сообщение:</b> ".$value."<br>";
	}

$mail->Subject = "Связаться с нами";
$mail->Body = $message;

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}