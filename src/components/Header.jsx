import React from "react";
import styles from './Header.module.scss'

const Header = ({handleCart}) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center" >
        <img className={styles.logo}
          src="./img/logo.png"
          alt="Логотип кроссовок"
          width={40}
          height={40}
        />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.userNav}>
        <li>
          <img className="mr-15"
            src="./img/cart.svg"
            alt="Иконка корзины"
            width={20}
            height={20}
            onClick={handleCart}
          />
          <span>1205 руб.</span>
        </li>
        <li>
          <img className={styles.favoriteIcon} src='/img/favoriteUnchecked.svg' alt="all favorite cards" onClick={() => {}}/>
        </li>
        <li>
          <img
            src="./img/userpic.svg"
            alt="Иконка пользователя"
            width={20}
            height={20}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
