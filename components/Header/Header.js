import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import {
  Container,
  NavigationMenu,
  SkipNavigationLink,
} from '../../components';
import styles from './Header.module.scss';
import Image from 'next/image';

let cx = classNames.bind(styles);

export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems,
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header className={cx('component')}>
      <SkipNavigationLink />
      <Container>
        <div className={cx('navbar')}>
          {/* <button
            type="button"
            className={cx('nav-toggle')}
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={cx('primary-navigation')}
            aria-expanded={isNavShown}
          >
            ☰
          </button> */}
          <NavigationMenu
            className={cx([
              'primary-menu',
              'nav-flex',
              isNavShown ? 'show' : undefined,
            ])}
            menuItems={menuItems}
          />
          <div className={cx(['dark-mode-toggle', 'dark-flex-order'])}>
            <button>
              <span className="moon"></span>
              dark mode
            </button>
          </div>
          <a
            href="https://twilkinson.com/"
            className={cx(['header-logo-link', 'logo-flex-order'])}
          >
            <Image
              src="/images/taylor-wilkinson-logo-orange-trans-bg.webp"
              width={100}
              height={100}
            />
          </a>
          {/* <div className={cx('brand')}>
            <Link href="/">
              <a className={cx('title')}>{title}</a>
            </Link>
            {description && <p className={cx('description')}>{description}</p>}
          </div> */}
        </div>
      </Container>
    </header>
  );
}
