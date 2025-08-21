import classNames from 'classnames';
import styles from './Button.module.css';

function Button({ text, icon, onClick, buttonClass, buttonActive }) {
	return (
		<button 
			className={ classNames(styles['button'], {
				[styles[buttonClass]]: buttonClass,
				[styles[buttonActive]]: buttonActive
			}) }
			onClick={ onClick }
		>
			{ icon ? <><img className={ classNames(styles['button-icon']) } src={ icon } alt="" /></> : '' }
			{ text }
		</button>
	);
}

export default Button;