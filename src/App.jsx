import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Header from './components/Layout/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';

function App() {
	const handleClick = (event) =>
	{
		console.log(event.target);
	};

	return (
		<div className='container'>
			<Header></Header>

			<Title text={'Поиск'}/>
			<br />
			<Input 
				placeholder={ 'Введите название' }
				inputType={ 'serch' } 
				isIcon={ 'true' }
			/>
			<br />
			<br />
			<Input 
				placeholder={ 'Ваше имя' }
				inputType={ 'text' }
			/>
			<br />
			<Title text={'Вход'}/>
			<br />
			<Button 
				text={'Искать'}
				onClick={ handleClick }
			/>
			<Button text={'Войти в профиль'}/>
			<br />
			<Paragraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}/>
			<br />
			<Paragraph text={'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'}/>
		</div>
	);
}

export default App;
