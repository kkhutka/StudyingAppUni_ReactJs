import './Button.scss'

const Button = ({title, onClick}) => {
  return (
      <button className='defaultButton' onClick={onClick}>{title}</button>
  );
};

export default Button