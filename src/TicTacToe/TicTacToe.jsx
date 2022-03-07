import React, { useState } from "react";

import './TicTacToe.css'


const TicTacToe = () => {
    const [turn, setTurn] = useState('X')
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (num) => {

        if (turn !== 'X') {
            setTurn('X')
        } else {
            setTurn('O')
        }
    }
    
    const Cell = ({ num }) => {
        return (
        <td onClick={() => handleClick(num)}>{num}</td>
        )
    }

    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <table>
                <p>Player "{turn}"</p>
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </table>
        </div>
        )
}

export default TicTacToe
