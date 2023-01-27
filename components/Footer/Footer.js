import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx('component')}>
      <Container>
        <NavigationMenu menuItems={menuItems} />
        <p
          className={cx('copyright')}
        >{`© ${year}, Built with FaustJS And WordPress.`}</p>
      </Container>
    </footer>
  );
}
