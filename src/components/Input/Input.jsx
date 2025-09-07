import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({ placeholder, inputType, isIcon }, ref) =>
{
	return (
		<label 
			className={ classNames(styles['label']) } 
			htmlFor={ inputType }
		>
			<img 
				className={ classNames(styles['serch'], {
					[styles['serch-icon']]: isIcon
				}) }
				src="/icons/serch-icon.svg"
				alt="serch"
			/>
		    <input 
				className={ classNames(styles['input']) }
				id={ inputType }
				type={ inputType }
				placeholder={ placeholder }
				ref={ ref }
			/>
		</label>
	);
});

export default Input;