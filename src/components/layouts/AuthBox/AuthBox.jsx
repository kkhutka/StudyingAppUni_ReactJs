import './AuthBox.scss';
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button';
import {useState} from 'react';
import axios from '../../../axios.jsx'; // Import the axios library

const AuthBox = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegistration = async () => {
        try {
            console.log({
                user: username,
                email: email,
                pwd: password,
              });
          const response = await axios.post('/register', {
            user: username,
            email: email,
            pwd: password,
          });
          if (response.status === 201) {
            window.location.href = '/login'; 
          }
        } catch (error) {
          console.error('Registration error:', error);
        }
      };

    return(
    <div>
        <div className="AuthBox__container">
        <div className="AuthBox__input">
            <Input 
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={setUsername}
            />
        </div>
        <div className="AuthBox__input">
            <Input
                type="text"
                value={email}
                placeholder="Enter your email"
                onChange={setEmail}
            />
        </div>
        <div className="AuthBox__input">
            <Input
               type="text"
               value={password}
               placeholder="Enter your password"
               onChange={setPassword}
            />
        </div>
        <div className="AuthBox__button">
            <Button  title="Create account" onClick={handleRegistration}/>
        </div>

        </div>
        

    </div>
    )
}

export default AuthBox