$(document).ready(function(){
    $("#login").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        var dataString = '&name1='+ name + '&email1='+ email + '&password1='+ password;
        if( email ==='' || password ==='')
        {
            $('input[type="text"],input[type="password"]').css("border","2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
            alert("Please fill all fields...!!!!!!");
        }
        else
        {
            $.post("login.php",{ email1: email, password1:password},
                function(data) {
                    if(data==='Invalid Email.......')
                    {
                        $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
                        $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
                        alert(data);
                    }
                    else if(data==='Email or Password is wrong...!!!!'){
                        $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
                        alert(data);
                    }
                    else if(data==='Successfully Logged in...'){
                        $("form")[0].reset();

                        $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
                        alert(data);
                        window.location.href="profile.html";
                    }
                    else{
                        alert(data);
                    }
                });
        }
    });
});