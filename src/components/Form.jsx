export default function Form(props) {
    return(
        <div className="Form">
            <p>Login</p>
            <p>Welcome back! Please login to your acount.</p>
            <form action="">
                <input type="text" name="mail" placeholder="User Name" required/>
                <input type="password" name="password" placeholder="Password" required />
                <button>Login</button>
            </form>
        </div>
        )
}