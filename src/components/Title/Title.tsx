import classNames from 'classnames';
import styles from './Title.module.css';
import type { TitleProps } from './Title.props.ts';

function Title({ children }: TitleProps) {
	return (
		<h1 className={ classNames(styles['title']) }>{ children }</h1>
	);
}

export default Title;