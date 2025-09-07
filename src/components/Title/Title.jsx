import classNames from 'classnames';
import styles from './Title.module.css';

function Title({ text }) {
	return (
		<h1 className={ classNames(styles['title']) }>{ text }</h1>
	);
}

export default Title;