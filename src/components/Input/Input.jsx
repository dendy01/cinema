import './Input.css';

function Input({ placeholder, inputType, isIcon })
{
	const getClassIcon = () =>
	{
		return isIcon ? 'serchIcon' : '';
	};

	return (
		<label 
			className='label' 
			htmlFor={ inputType }
		>
			<img 
				className={ `serch ${ getClassIcon() }` }
				src="/icons/serch-icon.svg" 
				alt="serch"
			/>
		    <input 
				className='input' 
				id={ inputType } 
				type={ inputType } 
				placeholder={ placeholder }
			/>
		</label>
	);
}

export default Input;