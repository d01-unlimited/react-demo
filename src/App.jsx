import { useState } from 'react'
import './App.css'


function Header() {

  // STATE => Zustands-Variablen
  let [text, setText] = useState('Hello')
  // let text = "Hello"

  // EVENT HANDLER
  const handleClick = () => {
    // alert('Header clicked!')
    // text = "Hello World"
    setText("Hello World")
  }

  // DOM Update
  return (
    <header onClick={handleClick}>
      <h1>{text}</h1>
    </header>
  )
}

function Main() {

  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry'])

  // mappe alle fruits in ein <li> Element
  const fruitList = fruits.map( (fruit, index) => <li key={index}>{fruit}</li> )

  return (
    <main>
      <p>This is a simple React application demonstrating component structure.</p>
      <ul>
      { fruitList }
      </ul>
      <button onClick={() => setFruits([...fruits, 'Kiwi'])}>Add Fruit</button>
    </main>
  )
}

function Footer() {
  let style = { fontSize: '.8em', color: 'blueviolet' }
  style.color = 'green'
  return (
    <footer style={style}>
      <p>&copy; 2025 React Demo. All rights reserved.</p>
    </footer>
  )
}

function App() {

  return (
    <>
      <Header />
      <Main /> 
      {/* Main => Main() => returned HTML */}
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </>
  )
}

export default App
