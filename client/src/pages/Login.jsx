import Header from "../compnents/LandingPageCompnent/Header"


function Login() {

    return (
        <div className="Login">
            <Header />
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login


