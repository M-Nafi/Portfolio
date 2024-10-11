<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): 
        header("Access-Control-Allow-Origin: https://www.nafi-mueftueoglu.de");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        
    case("POST"):
        header("Access-Control-Allow-Origin: https://www.nafi-mueftueoglu.de");
        header("Content-Type: application/json; charset=UTF-8");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'nafi-m@gmx.de';  
        $subject = "Contact From <$email>";
        $message = "From: " . htmlspecialchars($name) . "<br>" . nl2br(htmlspecialchars($message));

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: no-reply@nafi-mueftueoglu.de";

        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error']);
        }
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}
?>
