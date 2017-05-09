<?php
/**
 * Created by PhpStorm.
 * User: KilleR
 * Date: 05/05/2017
 * Time: 17:02
 */
$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);

require_once dirname(__FILE__).'/dbaccess.php';

session_start();
if(!empty($_POST) && !empty($_SESSION['loggedIn'])) {

    $params = array();
    $query = 'INSERT INTO posts (title, content, rating) VALUES (:title, :content, :rating)';
    $params[':title'] = $_POST['title'];
    $params[':content'] = $_POST['content'];
    $params[':rating'] = $_POST['rating'];

    PDOexecute_insert($query, $params);
    unset($query, $params);
}

$query = 'SELECT title, content, rating, createtime FROM posts ORDER BY createtime ASC';
$result = PDOexecute_select($query, array());

$assets = [];

foreach($result as $row) {
    $assets[] = [
        "title" => $row['title'],
        "content" => $row['content'],
        "rating" => $row['rating'],
        "createtime" => $row['createtime']
    ];
}

echo json_encode($assets);