import classNames from 'classnames';
import styles from './Paragraph.module.css';
import type { ParagraphProps } from './Paragraph.props.ts';

function Paragraph({ children }: ParagraphProps) {
	return (
		<p className={ classNames(styles['paragraph']) }>{ children }</p>
	);
}

export default Paragraph;