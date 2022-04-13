import { Card } from 'react-bootstrap'
import Book from '../types/Book'

interface BookComponentProps {
  book: Book
}

const BookComponent = ({ book }: BookComponentProps) => (
  <Card>
    <Card.Img variant="top" src={book.imageUrl} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text style={{ fontSize: '0.5em' }} className="text-dark">
        {book.description}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default BookComponent
