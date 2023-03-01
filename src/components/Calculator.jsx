import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  const inputNum = (e) => {
    const numValue = e.target.value
    if (num === 0) {
      setNum(numValue)
    } else {
      setNum(num + numValue)

    }
  }

  function clear() {
    setNum(0)
  }

  function percentage() {
    setNum(num / 100)
  }

  function changeSign() {
    setNum(num * -1)
    // if (num > 0) {
    //   setNum(-num)
    // } else {
    //   setNum(Math.abs(num))
    // }
  }

  function operatorHandler(e) {
    const operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  function calculate() {
    if (operator === '/') {
      setNum(oldNum / num)
    }

    if (operator === 'x') {
      setNum(oldNum * num)
    }

    if (operator === '-') {
      setNum(oldNum - num)
    }

    if (operator === '+') {
      setNum(parseFloat(oldNum) + parseFloat(num))
    }
  }

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          
          <div className="result">{num}</div>

          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={percentage}>%</button>
          <button className="orange" onClick={operatorHandler} value="/">/</button>
          
          <button className="gray" onClick={inputNum} value={7}>7</button>
          <button className="gray" onClick={inputNum} value={8}>8</button>
          <button className="gray" onClick={inputNum} value={9}>9</button>
          <button className="orange" onClick={operatorHandler} value="x">X</button>

          <button className="gray" onClick={inputNum} value={4}>4</button>
          <button className="gray" onClick={inputNum} value={5}>5</button>
          <button className="gray" onClick={inputNum} value={6}>6</button>
          <button className="orange" onClick={operatorHandler} value="-">-</button>
          
          <button className="gray" onClick={inputNum} value={1}>1</button>
          <button className="gray" onClick={inputNum} value={2}>2</button>
          <button className="gray" onClick={inputNum} value={3}>3</button>
          <button className="orange" onClick={operatorHandler} value="+">+</button>
          
          <button className="gray double" onClick={inputNum} value="0">0</button>
          <button className="gray" onClick={inputNum} value={"."}>,</button>
          <button className="orange" onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  )
}

export default Calculator