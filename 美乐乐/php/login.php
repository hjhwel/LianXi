<?php
    // 链接数据库
    $mysqli=new mysqli("127.0.0.1:3306","root","root","meilele");
    header("content-type:text/html;charset=utf-8");
    //收集表单提交数据
    $username = $_GET["username"];
    $password= $_GET["password"];

    // 查询数据库
    $res = $mysqli->query("select * from mll_user where username='$username' and password='$password'");
    $resultSet = $res->fetch_all(MYSQLI_ASSOC);
    // $str=json_encode($resultSet);
    // echo $str;
    
    if ($resultSet == null) {
        echo "用户名和密码错误！登陆失败！";
    }else{
        echo "用户名和密码正确！登陆成功！";
        
    };
?>