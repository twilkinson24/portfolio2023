import classNames from 'classnames/bind';
import React, {useState} from "react"


import { gql } from '@apollo/client';
import Link from 'next/link';
import flatListToHierarchical from '../../utilities/flatListToHierarchical';
import styles from './NavigationMenu.module.scss';
import stylesFromWP from './NavigationMenuClassesFromWP.module.scss';

let cx = classNames.bind(styles);
let cxFromWp = classNames.bind(stylesFromWP);



export default function NavigationMenu({ menuItems, className }) {
  if (!menuItems) {
    return null;
  }

  // Based on https://www.wpgraphql.com/docs/menus/#hierarchical-data
  const hierarchicalMenuItems = flatListToHierarchical(menuItems);


  const [navOpen, setNavOpen] = useState(false);

const toggleNavMenu = () => setNavOpen(prevNavOpen => !prevNavOpen);


  function renderMenu(items) {
    return (
      <ul className={cx('primary-menu-items')} aria-labelledby="menu-toggle-btn">
        {items.map((item) => {
          const { id, path, label, children, cssClasses } = item;

          // @TODO - Remove guard clause after ghost menu items are no longer appended to array.
          if (!item.hasOwnProperty('__typename')) {
            return null;
          }

          return (
            <li key={id} className={`primary-menu-item ${cxFromWp(cssClasses)}`}>
              <Link href={path ?? ''}>{label ?? ''}</Link>
              {children.length ? renderMenu(children, true) : null}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <nav 
      className={`${className} primary-menu ${navOpen ? 'active' : null}`}
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name}`}>
        <button 
          id="menu-toggle-btn" 
          aria-expanded={navOpen ? true : false}
          onClick={toggleNavMenu}
        >
          <span className="sr-only">
            Main Navigation Menu
          </span>
          <span className="toggle-icon">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </span>
          <span className="close-text">close</span>
        </button>
      {renderMenu(hierarchicalMenuItems)}
    </nav>
  );
}

NavigationMenu.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `,
};
