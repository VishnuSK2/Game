import React, { useRef, useState } from 'react'

function Player() {
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName]=useState(null);
    
    function handleClick(){
       setEnteredPlayerName(playerName.current.value)
       playerName.current.value="";
    }

  return (
    <section 
    id="player">
    <h2>Welcome {" "}
      {enteredPlayerName ?enteredPlayerName: "User"}
    </h2>

    <p>
      <input 
      type="text" 
      ref={playerName} 
      />
      <button onClick={handleClick}>Set Name</button>
    </p>

  </section>
  )
}
export default Player
