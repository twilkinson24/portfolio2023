import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';
import Image from 'next/image';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx('component')}>
      <Container>
        <div className={cx('footer')}>
          <div className={cx('social-links')}>
            <a href="#">
              <Image
                src="/images/twitter.svg"
                width={36}
                height={36}
                alt="Twitter icon"
                className={cx('main-img')}
              />
            </a>
            <a href="#">
              <Image
                src="/images/linkedin.svg"
                width={36}
                height={36}
                alt="Linkedin icon"
                className={cx('main-img')}
              />
            </a>
            <a href="#">
              <Image
                src="/images/github.svg"
                width={36}
                height={36}
                alt="Github icon"
                className={cx('main-img')}
              />
            </a>
            <a href="#">
              <Image
                src="/images/codewars.svg"
                width={36}
                height={36}
                alt="Taylor Wilkinson smiling while standing in front of some tropical plants"
                className={cx('main-img')}
              />
            </a>
          </div>
          <p className={cx('copyright')}>
            {`© ${year}`}, Built with <a href="https://faustjs.org/">FaustJS</a>{' '}
            And <a href="https://wordpress.org/">WordPress</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
