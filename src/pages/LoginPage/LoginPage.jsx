import Header from "../../components/layouts/Header/Header";
import LogInBox from "../../components/layouts/LogInBox/LogInBox";
import AuthBox from "../../components/layouts/AuthBox/AuthBox"
import './LoginPage.scss'
import {useState} from 'react';

const LoginPage = () =>{
    const [isLoginOpen, setIsLoginOpen] = useState(true);
    const [isAuthorizationOpen, setIsAuthorizationOpen] = useState(false);
  

    const openLoginBox = () => {
        setIsLoginOpen(true);
        setIsAuthorizationOpen(false);
    };

    const openAuthorizationBox = () => {
        setIsLoginOpen(false);
        setIsAuthorizationOpen(true);
    };
    return(
        <div className="loginPage">
                <div className="loginPage__button-and-box">
                    <div className="loginPage__button-and-box__buttons">
                        <button className={`loginPage__switch-login-button ${isAuthorizationOpen ? 'disabled' : ''}`} onClick={openLoginBox}>Вхід</button>
                        <button className={`loginPage__switch-login-button second ${isLoginOpen ? 'disabled' : ''}`} onClick={openAuthorizationBox}>Реєстрація</button>
                    </div> 
                    {isLoginOpen && <LogInBox />}
                    {isAuthorizationOpen && <AuthBox />}
                </div>
                
        </div>
    )
    
}

export default  LoginPage