<?php
/**
 * Created by PhpStorm.
 * User: KilleR
 * Date: 08/05/2017
 * Time: 16:37
 */

define('LOGIN_SEQUENCE', 'fortify');
$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);

session_start();
if(!isset($_SESSION['loginString'])) $_SESSION['loginString'] = '';
$_SESSION['loginString'] .= $_POST['loginField'];

if(stripos(LOGIN_SEQUENCE, $_SESSION['loginString']) === false) {
    $_SESSION['loginString'] = '';
    // after resetting re-try with the new keystroke
    $_SESSION['loginString'] .= $_POST['loginField'];
    if(stripos(LOGIN_SEQUENCE, $_SESSION['loginString']) === false) {
        $_SESSION['loginString'] = '';
    }
}

if ($_SESSION['loginString'] == LOGIN_SEQUENCE) {
    $_SESSION['loggedIn'] = true;
} else {
    unset($_SESSION['loggedIn']);
}

$output = array();

$output['loginField'] = $_POST['loginField'];
if(!empty($_SESSION['loggedIn'])) {
    $output['loggedIn'] = true;
}
echo json_encode($output);