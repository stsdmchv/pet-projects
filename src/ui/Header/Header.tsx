import Cart from '../../assets/cart.svg?react';
import Logo from '../../assets/logo.svg?react';
import User from '../../assets/user.svg';
import Search from '../../assets/search.svg';
import { useState } from 'react';

import "./Header.scss"

function Header() {
    const [showSearch, setSS] = useState<boolean>(false);
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="logo">
                        <img src={Logo} alt="" />
                    </a>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    Black
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    Green
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    White
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    Oolong
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    Pu-erh
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <ul className="user-actions">
                        <li className="user-actions__item">
                            <a href="#" className="user-actions__link">
                                <img src={Cart} alt="" />
                            </a>
                        </li>
                        <li className="user-actions__item">
                            <a href="#" className="user-actions__link">
                                <img src={User} alt="" />
                            </a>
                        </li>
                        <li className="user-actions__item user-actions__item-search">
                            <img
                                src={Search}
                                alt=""
                                onClick={() => setSS(!showSearch)}
                            />
                            {showSearch && (
                                <search>
                                    <form action="">
                                        <input type="search" />
                                        <button type="submit">Search</button>
                                    </form>
                                </search>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
