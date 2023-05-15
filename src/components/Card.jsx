import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ albumId, id, title, url, thumbnailUrl, price, addToCart }) => {
  const [btnChecked, setBtnChecked] = useState(false);

  const addCardToCart = () => {
    setBtnChecked((prev) => !prev);
    addToCart({ albumId, id, title, url, thumbnailUrl, price });
  };

  return (
    <div className={styles.card}>
      <span>{id}</span>
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
