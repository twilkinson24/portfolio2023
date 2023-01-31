import classNames from 'classnames/bind';
import * as SELECTORS from '../../constants/selectors';
import styles from './TWBackground.module.scss';

let cx = classNames.bind(styles);

export default function TWBackground({ children }) {
  return <div className={cx('background')}>{children}</div>;
}
