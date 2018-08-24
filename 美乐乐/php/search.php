<?php
header("content-type:text/html;charset=utf-8");

$mysqli = new mysqli('127.0.0.1:3306','root','root','meilele');

if($mysqli->connect_errno){
    die($mysqli->connect_error);
};

// //
$sz = $_GET["searchZ"];

$sz1 = '%'.$sz.'%';

$res= $mysqli->query("select * from mll_product where name like '$sz1' limit 40");

$arr=$res->fetch_all(MYSQLI_ASSOC);

$str=json_encode($arr);

echo $str;
?>