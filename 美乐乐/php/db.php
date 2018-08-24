<?php
  $mysqli=new mysqli("localhost","root","root","meilele");
  header('Content-Type:text/html;charset=utf-8');
  if($mysqli->errno){
    die("连接数据库失败");
  }else{
    echo "成功";}
  $mysqli->set_charset("utf8");
?>