import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Book from '../types/Book'
import BookComponent from './BookComponent'

const FetchComponent = () => {
  // this component will fetch some data using fetch()
  // we're going to put the data we fetch into a state variable
  // and then we're going to render the content of that state variable
  // in our JSX
  // 'https://striveschool-api.herokuapp.com/food-books'

  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    // this is like componentDidMount!
    fetchThoseBooks()
  }, [])

  const fetchThoseBooks = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        let data: Book[] = await response.json()
        // assigning the Book[] type to data here is not mandatory,
        // but will help you out if you need to work with the array before
        // assigning it to the books state property
        // let newBooks = data.map(book => ({title: book.title, id: book.id}))
        setBooks(data)
      } else {
        alert('error in the request')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Container>
        <h2>This books are fetched from the internet!</h2>
        <Row className="row-cols-3">
          {books.map((book) => (
            <Col>
              <BookComponent book={book} key={book.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default FetchComponent
