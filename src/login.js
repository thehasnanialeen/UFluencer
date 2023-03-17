<!DOCTYPE html>
<html>

<head>
    <title>Login Here! </title>
    <link rel="stylesheet" type="text/css" href="app.css" />
</head>

<body>
    <div class="login-container">
        <main id="main-center">
            <div class="logincenter">

                <form class="loginsignupform" id="login-form" action="Need action"> 
                    <label id="loginsize"> Login </label>
                    <p class="input-field">
                        <label> Username: </label>
                        <br> 
                        <input type="text" class = "loginpass" name="loginusername" id="usernamelogin"/>
                    </p>    
                    <!-- <p id="userlgn" class="error hidden"> Username is invalid! should not have any spaces </p> -->
                    <p class="input-field">
                        <label> Password: </label>
                        <br>
                        <input type="password" class = "loginpass" name="loginpass" id="pwdlogin"/>
                    </p>
                    <!-- <p id="userPwd" class="error hidden"> Password is invalid! Should be 6 characters, atleast 1 non letter </p> -->
                    <p class="input-field">
                        <input type="submit" class="buttonlogin" value="Login"/> 
                    </p>
                </form>         
                <div class="otheroption">
                    <label> Don't have an account? </label>
                    <a href=""> Signup</a>
                </div>  
            <!-- <div class="otheroption">
                <label> Don't have an account? </label>
                <a href="signuppage.html"> signup</a>
            </div> -->
            </div>
        </main> 
       


    </div>
    </div>
    <script src="eventRegisterlogin.js"></script>
</body>

</html>
