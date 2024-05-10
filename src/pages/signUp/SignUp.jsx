import logo from '../../assets/img/logo.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
////styles
import './style.scss'
import DepositCard from './DepositCard';
const SignUp = () => {
    return (
        <div className="signup_section">
            <div className='signup_content'>
                <div className='signup_logo'><img src={logo} alt="" /></div>
                <form className='sign_up_form_input'>
                    <input type="number" placeholder='+91 Mobile no' />
                    <input type="password" placeholder='Choose your password' />
                    <input type="text" placeholder='Referral Code (Option)' />
                    <div className='check_main'>
                        <div className='check_section'>
                            <input className='check' type="checkbox" />
                            <label className='lebel' htmlFor="age">I have over 18 years old</label>
                            <div>
                                <input className='check' type="checkbox" />
                                <label className='lebel' htmlFor="age">I agree to the Terms&Conditions</label>
                            </div>
                        </div>
                    </div>
                </form>
                <p>By continuing you will receive a one-time verification code to your phone number by SMS</p>
                <div className='get_otp'>
                    <button className='otp_btn'>GET OTP</button>
                    <div className='or'><span>OR</span></div>
                </div>
                <div className='get_id_from_whatsapp_section'>
                    <p>Get Your Ready-Made ID From Whatsapp</p>
                    <button className='whatsapp_now'><span><WhatsAppIcon /></span>WHATSAPP NOW</button>
                </div>
                <div className='allready_have_account_section'>
                    <a href="#">Already have account</a>
                    <a href="#">Log In</a>
                </div>
                <div className='deposite_section'>
                    <DepositCard name="400% BONUS" bonus = "1ST DEPOSIT"/>
                    <DepositCard name="50% BONUS" bonus = "2ND DEPOSIT"/>
                    <DepositCard name="10% BONUS" bonus = "3RD DEPOSIT"/>

                </div>
            </div>
        </div>
    )
}

export default SignUp
