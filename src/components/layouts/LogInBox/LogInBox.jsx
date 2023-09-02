import './LogInBox.scss';
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button';
import {useState} from 'react';
import axios from '../../../axios.jsx'


const LogInBox = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.post('/auth', { user: username, pwd: password });
          if (response.status === 200) {
            window.location.href = '/main'; 
          }
          
        } catch (error) {
          console.error('Login error:', error);
        }
      };
    return(
    <div>
        <div className="loginBox__container">
        <div className="loginBox__input">
            <Input 
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={setUsername}
            />
        </div>
        <div className="loginBox__input">
            <Input
                type="text"
                value={password}
                placeholder="Enter your password"
                onChange={setPassword}
            />
        </div>
        <div className="loginBox__button">
            <Button  title="Log in" onClick={handleLogin}/>
        </div>

        </div>
        

    </div>
    )
}

export default LogInBox