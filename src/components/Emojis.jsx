import React from 'react'

export default function Emojis(props) {
    function printSmiles(){
        const smiletags=[];
        const possibleMojis = ["😻","😈","🤙"]
        for (let i = 0; i < props.number; i++) {
            const smile = <span>{possibleMojis[Math.floor(Math.random()*possibleMojis.length)]}</span>
            smiletags.push(smile)
        }
        return smiletags
    }
  return (
    <div>
        {printSmiles()}
        <br/>
        <button onClick={()=>props.setCount(props.number+10)}>Add 10!</button>
    </div>
  )
}
