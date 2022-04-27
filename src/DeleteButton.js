import Component from 'react';
import Button from 'react-bootstrap';
import axios from 'axios';

class DeleteButton extends Component{
  deleteBook = async (id) => {
    let bookUrl = `$(SERVER)/books$(id)`;
    await axios.delete(bookUrl);
    let bookDeleted = this.props.books.filter(
      book => book._id !== id
    );
    this.setState({
      books: bookDeleted
    })
  }
  render() {
    return(
      <>
      <Button onClick={() => this.bookDeleted(this.props.id)}></Button>
      </>
    )
  }
}
export default DeleteButton;