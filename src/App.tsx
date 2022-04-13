import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapComponent from './components/BootstrapComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<BootstrapComponent />} />
            <Route
              path="/class"
              element={
                <div>
                  <ClassComponent title="Hello Epicode!" subTitle="hello" />
                  {/* this error is happening because ClassComponent currently is not
          expecting to receive any prop from us, and we're instead passing a prop
          of 'title' which has a type of a string */}
                  <ClassComponent title="Hello again!" />
                </div>
              }
            />
            <Route
              path="/func"
              element={<FuncComponent title="Hello Epicode!" />}
            />
            <Route path="/fetch" element={<FetchComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
