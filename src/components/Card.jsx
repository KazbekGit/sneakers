import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ albumId, id, title, url, thumbnailUrl, price, addToCart, addToFavorite }) => {
  const [btnChecked, setBtnChecked] = useState(false);
  const [btnFavoriteChecked, setBtnFavoriteChecked] = useState(false);

  const addCardToCart = () => {
    setBtnChecked((prev) => !prev);
    (!btnChecked && addToCart({ albumId, id, title, url, thumbnailUrl, price }));
  };

  const addToFavoriteCart = (e) => {
    setBtnFavoriteChecked(!btnFavoriteChecked)
    console.log('in Cart onFav click' + e.target)

    addToFavorite({ albumId, id, title, url, thumbnailUrl, price })
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>{id}</span>
        <img onClick={addToFavoriteCart} src={btnFavoriteChecked ? 'img/favoriteChecked.svg' : 'img/favoriteUnchecked.svg'} alt="favorite" />
      </div>
      <img src={thumbnailUrl} alt="thumb" width={32} height={32} />
      <p>{title}</p>
      <div>
        <span>Price: </span>
        <b>{price} rub</b>
      </div>
      <button
        className={btnChecked ? styles.checked : styles.unChecked}
        onClick={addCardToCart}
      >
        {btnChecked ? 'Added' : 'Add to cart'}
      </button>
    </div>
  );
};

export default Card;
