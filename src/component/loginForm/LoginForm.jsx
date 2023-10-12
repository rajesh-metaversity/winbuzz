import logo from '../../assets/img/logo.png'
import CloseIcon from '@mui/icons-material/Close';
///styles
import "./styles.scss"
const LoginForm = () => {
    return (
        <div className="login_modal">
            <div className="cross_icon"><CloseIcon/></div>
            <div className="login_section">
                <div className="winbuaa_logo">
                    <img src={logo} alt="" />
                </div>
                <form className='login-form'>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                </form>
                <div className="login_buttons">
                 <button className="login">LOGIN</button>
                 <button className="login_with_demo">LOGINWITH DEMO ID</button>
                 <a href="#">Forgot Password</a>
                </div>
            </div>
        </div>
    )
}
export default LoginForm