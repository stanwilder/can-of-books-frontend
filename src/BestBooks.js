import React from 'react';
import axios from "axios";
import { Carousel } from 'react-bootstrap';
// import 

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  postBook = async () => {
    try {
      let theBooks = await axios.get(`${SERVER}/books`);
      console.log(theBooks.data);
      this.setState({
        books: theBooks.data
      })
    } catch (error) {
      console.log('There is an error: ', error.response.data)
      /* TODO: Make a GET request to your API to fetch all the books from the database  */
    }
  }

  componentDidMount() {
    this.postBook()
  }

  // add book day 2
  addBook = async (b) => {
    try {
      let addBookUrl = `${SERVER}/add`
      let newBook = await axios.post(addBookUrl, b);
      this.setState({
        books: [...this.state.books, newBook]
      })


    } catch (error) {
      console.log('There is an error: ', error.response.data)

    }

  }


  render() {
    let books = this.state.books.map((book, idx) => (
      <p key={idx}>{book.title} Description {book.description}</p>
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
