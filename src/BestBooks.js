import React from 'react';
import axios from "axios";
import { Carousel } from 'react-bootstrap';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    try {
      let theBooks = await axios.get(`${SERVER}/books`);
      this.setState({
        books: theBooks.data
      })
    } catch (error) {
      console.log('There is an error: ', error.response.data)
      /* TODO: Make a GET request to your API to fetch all the books from the database  */
    }
  }

  componentDidMount() {
    this.getBooks()
  }


  render() {
    let books = this.state.books.map((book, idx) => (
      <p key ={idx}>{book.title} Author {book.author}</p>
    ))
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <Carousel>
          {/* added carousel here to render a book when books are returned */}

        {this.state.books.length > 0 ? (
          <>
        {books}

        </>  
        ) : (
          <h3>No Books Found</h3>
          )}
          </Carousel>
          {/* help from TA */}
      </>
    )
  }
}

export default BestBooks;
