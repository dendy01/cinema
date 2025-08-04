import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';

function App() {
	return (
		<>
			<Title text={'Поиск'}/>
			<br />
			<Title text={'Вход'}/>
			<br />
			<Button text={'Искать'}/>
			<Button text={'Войти в профиль'}/>
			<br />
			<Paragraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}/>
			<br />
			<Paragraph text={'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'}/>
		</>
	);
}

export default App;
