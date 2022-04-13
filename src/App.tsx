import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapComponent from './components/BootstrapComponent'
// import ClassComponent from './components/ClassComponent'
// import FuncComponent from './components/FuncComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassComponent title="Hello Epicode!" subTitle="hello" />
        <ClassComponent title="Hello again!" /> */}
        {/* this error is happening because ClassComponent currently is not
        expecting to receive any prop from us, and we're instead passing a prop
        of 'title' which has a type of a string */}

        {/* <FuncComponent title="Hello Epicode!" /> */}
        <BootstrapComponent />
      </header>
    </div>
  )
}

export default App
