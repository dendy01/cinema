import classNames from 'classnames';
import styles from './Loader.module.css';

function Loader()
{
    return (
        <div className={ classNames(styles['loader-icon']) }>
            <img
                src="/icons/loader-icon.svg"
                alt="loader"
                className={ classNames(styles['icon']) }
            />
        </div> 
    );
}

export default Loader;