import React from "react";
import styles from "./Cart.module.scss";

const Cart = ({ handleCart, cartCards }) => {
  return (
    <>
      <div className={styles.overlay} onClick={handleCart}></div>
      <div className={styles.cart}>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            {cartCards.map((card) => {
              return (
                <div className={styles.card} key={card.id}>
                  <span>{card.id}</span>
                  <img
                    src={card.thumbnailUrl}
                    alt="thumb"
                    width={32}
                    height={32}
                  />
                  <p>{card.title}</p>
                  <div>
                    <span>Price: </span>
                    <b>{card.price} rub</b>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.buttonsBlock}>
            <button>BUY</button>
            <button onClick={handleCart}>CLOSE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
