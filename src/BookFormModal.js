import { Form, Button } from 'react-bootstrap';
import Component from 'react';

class BookFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
}
}
handleSubmit = e => {
  e.preventDefault();
  let newBook = {
    title: e.target.title.value,
    description: e.target.description.value

  }
  this.props.addBook(newBook);
}
render() {
  return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId='title'>
    <Form.Label>Title</Form.Label>
    <Form.Control type='text'/>
      </Form.Group>
      <Form.Group controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control type='text'/>
      </Form.Group>
      <Button type='submit'>New Book!</Button>
    </Form>
    // help from Raul
  )
}
}  




export default BookFormModal;