import classNames from 'classnames';
import styles from './Paragraph.module.css';

function Paragraph({ text }) {
	return (
		<p className={ classNames(styles['paragraph']) }>{ text }</p>
	);
}

export default Paragraph;