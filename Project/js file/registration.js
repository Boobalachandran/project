
$(document).ready(function(){
    $("#submit").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confoirm password=$("#cpassword").val();
        var dataString = '&name1='+ name + '&email1='+ email + '&password1='+ password + '&confirm password1='+ cpassword;
        if(name===''||email===''||password===''||cpassword==='')
        {
            alert("Please Fill All Fields");
        }
        var fnameRGEX=/^[A-Za-z]+$/;
        var fnResult = fnameRGEX.test(name);
    else if(fnResult=== false)
        {
            alert('Invalid UserName');
        }

        else
        {
            $.ajax({
                type: "POST",
                url: "registration.php",
                data: dataString,
                cache: false,
                success: function(result){
                    alert('Successfully Registered..');
                    window.open("login.html")
                }
            });
        }
        return false;
    });
});