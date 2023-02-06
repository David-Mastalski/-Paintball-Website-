<?php
    $admin = 'mastalskid79@gmail.com';
    $address_email = $_POST['email'];
    $message_title = 'FORMULARZ KONTAKTOWY | WWW.PAINTBALLGOSTWICA.PL';
    $formMessage = $_POST['message'];
    $message = "
        EMAIL NADAWCY | $address_email |
        WIADOMOSC | $formMessage |
    ";
    mail($admin,$message_title,$message);

    header("Location: http://www.paintballgostwica.pl/");
?>