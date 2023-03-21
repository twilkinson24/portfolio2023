import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';
import Image from 'next/image';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems, frontPage }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx('component')}>
      <Container>
        <div className={cx('footer')}>
          {frontPage ? null : (
            <div className={cx('avatar-section')}>
              <a href="/" className={cx(['header-logo-link', 'avatar-link'])}>
                <Image
                  src="/images/twAvatar.png"
                  width={80}
                  height={80}
                  alt="Drawing of Taylor Wilkinson"
                  className={cx(['avatar-img'])}
                />
                <span className="screen-reader-text">Taylor Wilkinson</span>
              </a>
            </div>
          )}
          <div className={cx('social-links')}>
            <a href="https://twitter.com/coding4tacos" target="_blank">
              <Image
                src="/images/twitter.svg"
                width={36}
                height={36}
                alt="Twitter profile"
                className='footer-social-img'
              />
            </a>
            <a
              href="https://www.linkedin.com/in/taylor-wilkinson/"
              target="_blank"
            >
              <Image
                src="/images/linkedin.svg"
                width={36}
                height={36}
                alt="Linkedin profile"
                className='footer-social-img'
              />
            </a>
            <a href="https://github.com/twilkinson24" target="_blank">
              <Image
                src="/images/github.svg"
                width={36}
                height={36}
                alt="Github profile"
                className='footer-social-img'
              />
            </a>
            <a
              href="https://www.codewars.com/users/coding4tacos"
              target="_blank"
            >
              <Image
                src="/images/codewars.svg"
                width={36}
                height={36}
                alt="Taylor Wilkinson smiling while standing in front of some tropical plants"
                className='footer-social-img'
              />
            </a>
          </div>
          <p className={cx('copyright')}>
            {`© ${year}`}, Built with <a href="https://faustjs.org/" target="_blank" rel="noopener noreferrer">FaustJS</a>{' '}
            And <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
