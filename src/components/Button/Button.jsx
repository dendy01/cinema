import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(({ text, icon, onClick, buttonClass, buttonActive }, ref) =>
{
	return (
		<button 
			className={ classNames(styles['button'], {
				[styles[buttonClass]]: buttonClass,
				[styles[buttonActive]]: buttonActive
			}) }
			ref={ ref }
			onClick={ onClick }
		>
			{ icon ? <><img className={ classNames(styles['button-icon']) } src={ icon } alt="" /></> : '' }
			{ text }
		</button>
	);
});

export default Button;