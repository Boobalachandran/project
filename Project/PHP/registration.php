
<?php
$connection = mysqli_connect("localhost", "root", "");
mysqli_select_db($connection,'db');

$name2=$_POST['name1'];
$email2=$_POST['email1'];
$password2=$_POST['password1'];
$cpassword2=$_POST['cpassword1'];


$s="insert into customer(name, email, password,cpassword) values ('$name2', '$email2','$password2','$cpassword2')";
$result =  mysqli_query($connection,$s);
echo "Form Submitted Succesfully";
mysqli_close($connection);
?>
