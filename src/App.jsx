import Player from "./Components/Player"
import TimerChallenge from "./Components/TimerChallenge"

function App() {
  return (
    <>
    <Player />
    <div id="challenges">
      <TimerChallenge title='Easy' targetTime={1}/>
      <TimerChallenge title='Not Easy' targetTime={5}/>
      <TimerChallenge title='Getting Tough' targetTime={10}/>
      <TimerChallenge title='Pros Only' targetTime={15}/>
    </div>
    </>
  )
}

export default App
