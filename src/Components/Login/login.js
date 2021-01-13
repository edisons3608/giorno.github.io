import loginPicture from "../../images/loginPic.png";
import "./login.css"
var Login = function login(){
    return(
        <div>
            <div id = "loginForm">
            <label id = "username__label" for="username"><b>Username</b></label>
            <input id = "username" placeholder = "Username..." type = "text"></input>
            <label id = "password__label" for="password"><b>Password</b></label>
            <input id = "password" placeholder = "Password..." type = "password"></input>
            </div>
            <input id = "login" src={loginPicture} alt="Log in" type="image"></input>
        </div>
    );
}
export default Login;