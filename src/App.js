import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Card from './components/Card'
import Cart from './components/Cart'
import styles from './App.module.scss'

function App () {
  const [cards, setCards] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favoriteCards, setFavoriteCards] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const renderCards = () => {
    return cards
      .filter(card =>
        card.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map(card => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          albumId={card.albumId}
          url={card.url}
          thumbnailUrl={card.thumbnailUrl}
          price={6784}
          addToCart={currentCard => addToCart(currentCard)}
        />
      ))
  }
  const getSearchValue = evt => {
    setSearchValue(evt.target.value)
    setCartItems(
      cartItems.filter(card => card.title.includes(evt.target.value))
    )
  }

  const handleCart = () => {
    setIsCartOpened(prev => !prev)
  }

  const addToCart = newCartItem => {
    setCartItems(prev => [...prev, newCartItem])
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => {
        // handle success
        setCards(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])

  return (
    <div className='wrapper clear'>
      <Header handleCart={handleCart} />
      <div className={styles.main}>
        {isCartOpened && (
          <Cart
            handleCart={handleCart}
            cartCards={cartItems.length ? cartItems : []}
          />
        )}
        <h1>{searchValue ? `Поиск по "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className={styles.searchBox}>
          <input
            className={styles.search}
            type='text'
            placeholder='Поиск товаров...'
            value={searchValue}
            onChange={getSearchValue}
          ></input>
          {searchValue && (
            <button
              className={styles.searchCleanerBtn}
              onClick={() => {
                setSearchValue('')
              }}
            >
              x
            </button>
          )}
        </div>
        <div className={styles.cards}>
          {renderCards().length ? renderCards() : <p className='mb-20'>Ничего не найдено</p>}
        </div>
      </div>
    </div>
  )
}

export default App
