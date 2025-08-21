import classNames from 'classnames';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Header from './components/Layout/Header/Header';
import MovieCards from './components/MovieCards/MovieCards';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';
import { cards } from './model/Cards';

function App() {
	const handleClick = (event) =>
	{
		console.log(event.target);
	};

	return (
		<div className={ classNames(styles['container']) }>
			<Header></Header>

			<div className={ classNames(styles['app-serch']) }>
				<Title text={'Поиск'}/>
				<Paragraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}/>
				<div className={ classNames(styles['app-serch__form']) }>
					<Input
						placeholder={ 'Введите название' }
						inputType={ 'serch' }
						isIcon={ 'true' }
					/>
					<Button
						text={'Искать'}
						onClick={ handleClick }
					/>
				</div>
			</div>
			<MovieCards cards={ cards }/>
		</div>
	);
}

export default App;
