import './Header.scss'
import UserLogo from '../../../assets/UserLogo.png'


const Header = () =>
{
    return (
        <header className='Header'>
            <text>Helper</text>
            <nav className='nav'>
                <a href='/'>Тести</a>
                <a href='/'>Інформація</a>
            </nav>
            <img className='logo' src={UserLogo} />

        </header>
    )
}


export default Header;