<?php
    include"db.php";  
    $username=$_POST["username"];
    $password=$_POST["password"];
    $phone=$_POST["phone"];
    echo $username;
    echo $password;
    echo $phone;
    $sql="INSERT INTO mll_user(username,pass_word,phone)VALUES('$username','$password','$phone')";    
    $result=$mysqli->query($sql);
    var_dunmp($result);
    // $result=$mysqli->query("insert into mll_user (username,pass_word,phone) values ('$username','$password','$phone')");
    // echo $sql;   
    if(var_dump($result)){
        echo json_encode(array('code'=>0,'msg'=>'注册成功'));
    }else{
        
        echo json_encode(array('code'=>1,'msg'=>'注册失败'));
    }
?>
