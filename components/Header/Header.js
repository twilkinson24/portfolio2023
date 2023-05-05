import { useState } from 'react';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

/// https://betterprogramming.pub/a-complete-guide-to-implementing-dark-mode-in-react-47af893b22eb taylor dark mode

import classNames from 'classnames/bind';
import Link from 'next/link';
import {
  Container,
  NavigationMenu,
  SkipNavigationLink,
} from '../../components';
import styles from './Header.module.scss';
import Image from 'next/image';
import { FC, useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';


let cx = classNames.bind(styles);

export default function Header({
  title,
  description,
  menuItems,
}) {
  const [isNavShown, setIsNavShown] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  };


  return (
    <header className={cx('component')}>
      <SkipNavigationLink />
      <Container>
        <div className={cx('navbar')}>

          <a href="/" className={`header-logo-link`}>
            <Image
              src="/images/taylor-wilkinson-logo-orange-trans-bg.webp"
              width={100}
              height={100}
              alt={title}
            />
            <span className='screen-reader-text'>{title}</span>
          </a>

          {menuItems.length > 0 && <NavigationMenu
            className={cx([
              'primary-menu',
              isNavShown ? 'show' : undefined,
            ])}
            menuItems={menuItems}
          />}

          <div className={'dark-mode-toggle dark-flex-order'}>
            <button onClick={handleThemeChange}>
              <span className="sun"></span>
              <span className="moon"></span>
              {theme === 'light' ? 'dark' : 'light'} mode
            </button>
          </div>

        </div>
      </Container>
    </header>
  );
}
