// useContext: simple Counter
import React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

function CountProvider(props) {
  // 🐨 get the count state and setCount updater with React.useState
  const [count, setCount] = React.useState(0)
  // 🐨 create a `value` object with count and setCount properties
  const value = {count, setCount}
  // 🐨 return your context provider with the value assigned to that object and forward all the other props
  // 💰 more specifically, we need the children prop forwarded to the context provider
  return <CountContext.Provider value={value} {...props}/>
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const {count} = React.useContext(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const {setCount} = React.useContext(CountContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:
http://ws.kcd.im/?ws=advanced%20react%20hooks&e=03&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}
Usage.title = 'useContext: simple Counter'

export default Usage
