import Cart from '../../assets/cart.svg?react';
import Logo from '../../assets/logo.svg?react';
import User from '../../assets/user.svg';
import Search from '../../assets/search.svg';
import { useState } from 'react';

import {
  container,
  header__inner,
  logo,
  menu__list,
  user_actions,
  user_actions__item_search,
} from './Header.module.scss';

function Header() {
  const [showSearch, setSS] = useState<boolean>(false);
  return (
    <header>
      <div className={container}>
        <div className={header__inner}>
          <a href="#" className={logo}>
            <img src={Logo} alt="" />
          </a>
          <nav>
            <ul className={menu__list}>
              <li>
                <a href="#">Black</a>
              </li>
              <li>
                <a href="#">Green</a>
              </li>
              <li>
                <a href="#">White</a>
              </li>
              <li>
                <a href="#">Oolong</a>
              </li>
              <li>
                <a href="#">Pu-erh</a>
              </li>
            </ul>
          </nav>
          <ul className={user_actions}>
            <li>
              <a href="#">
                <img src={Cart} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={User} alt="" />
              </a>
            </li>
            <li className={user_actions__item_search}>
              <img src={Search} alt="" onClick={() => setSS(!showSearch)} />
              {/** TODO: Need realization */}
              {/*{showSearch && (*/}
              {/*  <search>*/}
              {/*    <form action="">*/}
              {/*      <input type="search" />*/}
              {/*      <button type="submit">Search</button>*/}
              {/*    </form>*/}
              {/*  </search>*/}
              {/*)}*/}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
