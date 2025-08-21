import './Button.css';

function Button({ text, icon, onClick, buttonClass }) {

	return (
		<button 
			className={ `button ${ buttonClass ? buttonClass : '' }` }
			onClick={ onClick }
		>
			{ icon ? <><img className='button-icon' src={ icon } alt="" /></> : '' }
			{ text }
		</button>
	);
}

export default Button;