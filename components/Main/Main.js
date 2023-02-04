import classNames from 'classnames/bind';
import * as SELECTORS from '../../constants/selectors';

export default function Main({ children, className, ...props }) {
  return (
    <main
      id={SELECTORS.MAIN_CONTENT_ID}
      tabIndex={-1}
      {...props}
    >
      {children}
    </main>
  );
}
