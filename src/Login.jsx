function Login() {
    return(
        <div>
            <center>
            <h2>Login</h2>
            <input type="text" id="username" name="username" placeholder="username" required /><br/>
            <input type="password" id="password" name="password" placeholder="password" required /><br/><br/>
            <button type="submit">Login</button>
            <button type="button">Cancel</button><br/>
            </center>
        </div>
    )
}
export default Login;