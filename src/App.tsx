import './App.css'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent title="Hello Epicode!" />
        {/* this error is happening because ClassComponent currently is not
        expecting to receive any prop from us, and we're instead passing a prop
        of 'title' which has a type of a string */}
      </header>
    </div>
  )
}

export default App
