import React,{useState} from 'react'
import Emojis from './Emojis';

export default function Counter(props) {
    const [count,setCount] = useState(props.start|| Math.floor(Math.random()*10)); 
    const [bgColor, setBgColor] = useState(props.bg|| "white")
    const styleObj = {
        background:bgColor
    }
    const clickHandle = ()=>{
       setCount(count+1)
    }
    const decClick = ()=>{
       setCount(count-1)
    }
    const reset = ()=>{
        setCount(0);
    }
  return (
    <div style={styleObj}>
        <h2>current count: {count}</h2>
        <button onClick={clickHandle}>add one! currentCount: {count}</button>
        <button onClick={decClick}>subtract one! currentCount: {count}</button>
        <button onClick={reset}>reset to zero! currentCount: {count}</button>
        <input type="color" onChange={e=>setBgColor(e.target.value)}/>
        <br/>
        <Emojis number={count} setCount={setCount}/>
        <hr/>
    </div>
  )
}
