import { useEffect, useState } from 'react'

interface Book {
  id: number
  title: string
  price: string
  imageUrl: string
  description: string
}

const FetchComponent = () => {
  // this component will fetch some data using fetch()
  // we're going to put the data we fetch into a state variable
  // and then we're going to render the content of that state variable
  // in our JSX
  // 'https://striveschool-api.herokuapp.com/food-books'

  const [books, setBooks] = useState([])

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
        let data = await response.json()
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
      <h2>This books are fetched from the internet!</h2>
      {books.map((book) => (
        <div>{book.title}</div>
      ))}
    </div>
  )
}

export default FetchComponent
