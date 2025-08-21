import classNames from 'classnames';
import styles from './Input.module.css';

function Input({ placeholder, inputType, isIcon })
{
	const getClassIcon = () =>
	{
		return isIcon ? 'serch-icon' : '';
	};

	return (
		<label 
			className={ classNames(styles['label']) } 
			htmlFor={ inputType }
		>
			<img 
				className={ classNames(styles['serch'], getClassIcon()) }
				src="/icons/serch-icon.svg"
				alt="serch"
			/>
		    <input 
				className={ classNames(styles['input']) }
				id={ inputType }
				type={ inputType }
				placeholder={ placeholder }
			/>
		</label>
	);
}

export default Input;