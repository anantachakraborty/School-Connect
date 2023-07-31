 <?php

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$bd=$_POST['DAY'];
$bm=$_POST['MONTH'];
$by=$_POST['YEAR'];
$uname=$_POST['uname'];
$pword=$_POST['pword'];
$msg = "Hello ". $fname . " " . $lname .". Thank You For Registering";
    mail($email,"Registration Successful",$msg);
    echo " Thank You For Registering ";
$connection=mysqli_connect("sql313.epizy.com" , "epiz_29281295" , "74tVgHJv6M2xvJ" , "epiz_29281295_nhsreg");
$insert="INSERT INTO nhsregister SET first_name='$fname' , last_name='$lname' , email='$email' , phone='$phone' , bday_date='$bd' , bday_month='$bm' , bday_year='$by' , username='$uname' , password='$pword' ";
$connection->query($insert);

?>  
