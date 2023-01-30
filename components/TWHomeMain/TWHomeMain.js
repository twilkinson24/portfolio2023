import classNames from 'classnames/bind';
import * as SELECTORS from '../../constants/selectors';
import styles from './TWHomeMain.module.scss';
import Image from 'next/image';

let cx = classNames.bind(styles);

export default function TWHomeMain() {
  return (
    <div className={cx('main-flex')}>
      <div className={cx('main-img')}>
        <Image
          src="/images/TaylorWilkinsonWebDeveloper-sm2.jpg"
          width={280}
          height={280}
          alt="Taylor Wilkinson smiling while standing in front of some tropical plants"
          className={cx('main-img')}
        />
      </div>

      <div className={cx('main-content')}>
        <h2>I’m a web developer passionate about WordPress</h2>
        <p>
          …especially when it’s{' '}
          <a
            href="https://www.gatsbyjs.com/docs/glossary/headless-wordpress/"
            target="_blank"
          >
            headless.
          </a>
        </p>
        <p>
          I spend my days working with the awesome people at{' '}
          <a href="https://www.workwithperch.com/" target="_blank">
            Perch
          </a>{' '}
          and my nights on some{' '}
          <span className={cx('bold')}>cool side projects</span>
        </p>
        <h4 className={cx('bold')}>Read more about:</h4>
        <ul>
          <li>
            <a
              href="https://twilkinson.com/my-work/"
              target="_blank"
              className={cx('bold')}
            >
              The type of work I do
            </a>
          </li>
          <li>
            The{' '}
            <a
              href="https://twilkinson.com/tools/"
              target="_blank"
              className={cx('bold')}
            >
              tools I use every day
            </a>{' '}
            as a web dev
          </li>
        </ul>
      </div>
    </div>
  );
}
