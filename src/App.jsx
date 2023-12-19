import Counter from "./components/Counter"

function App() {
  return (
  <>
     <h1>Hello {Math.floor(Math.random()*100)+1}</h1>
    <Counter start={1}/>
    <Counter start={1} bg="salmon"/>
    <Counter/>
  </>
  )
}

export default App
