import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './BookList.css'

const Book = (book) => {
  const [num, setNum] = useState(book.edition_count)
  const [cart, setCart] = useState(0)
  return (
    <div>
      <div className="book-item flex flex-column flex-sb">
        <div className="book-item-img">
          <img src={book.cover_img} alt="cover" />
        </div>
        <div className="book-item-info text-center">
          <Link to={`/book/${book.id}`} {...book}>
            <div className="book-item-info-item title fw-7 fs-18">
              <span>{book.title}</span>
            </div>
          </Link>

          <div className="book-item-info-item author fs-15">
            <span className="text-capitalize fw-7">Author: </span>
            <span>{book.author.join(', ')}</span>
          </div>

          <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">First Publish Year: </span>
            <span>{book.first_publish_year}</span>
          </div>

          <div className="book-item-info-item edition-count fs-15 mt-10">
            <span className="text-capitalize fw-7">Total Copies: </span>
            <span>{num}</span>
          </div>
          <button
            className="flex text-md h-20 w-full border-solid mt-3 rounded-full hover:bg-purple-200  justify-center p-2 border-black"
            onClick={() => {
              setNum(num - 1)
              setCart(cart + 1)
            }}
          >
            <p>add to cart</p>
            <img src="/shopping-cart.svg" className="ml-4 h-10 w-10" />
          </button>
          {cart ? (
            <p className="bg-purple-400 mt-10 rounded-full ml-2">
              added to cart {cart}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Book
