import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Button.module.css';
import { type ButtonProps } from './Button.props.ts';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, icon, onClick, buttonClass, buttonActive }, ref) =>
{
	return (
		<button
			className={ classNames(styles['button'], {
				[styles[buttonClass || '']]: buttonClass,
				[styles[buttonActive || '']]: buttonActive
			}) }
			ref={ ref }
			onClick={ onClick }
		>
			{ icon ? <><img className={ classNames(styles['button-icon']) } src={ icon } alt="" /></> : '' }
			{ children }
		</button>
	);
});

export default Button;