import { GameHeader } from "./components/GameHeader"
// const cardValues = [
//   "🍎",
//   "🍌",
//   "🍇",
//   "🍊",
//   "🍓",
//   "🥝",
//   "🍑",
//   "🍒",
//   "🍎",
//   "🍌",
//   "🍇",
//   "🍊",
//   "🍓",
//   "🥝",
//   "🍑",
//   "🍒",
// ];

function App() {
  return (
    <div className="app">
      <GameHeader score={0} moves={3} />
    </div>
  )
}

export default App
