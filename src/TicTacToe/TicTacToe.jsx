import React, { useState } from "react";

import './TicTacToe.css'

// Create the Script
const TicTacToe = () => {
	const [turn, setTurn] = useState('X')
	const [cells, setCells] = useState(Array(9).fill(null))
	const [winner, setWinner] = useState(null)
	

	const checkForWinner = (squares) => {
		// Possibilities
		let combos = {
			line: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8]
			],
			column: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8]
			],
			diagnol: [
				[0, 4, 8],
				[6, 4, 2]
			]
		}
		// Verify each possibilitie
		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === null ||
					squares[pattern[1]] === null ||
					squares[pattern[2]] === null
					) {
						// Pass
						return
					} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]])
				}
			})
		}}


	const handleClick = (num) => {
		let squares = [...cells]

		if (winner !== null) {
			alert(`The Winner is: ${winner}\nClick to Play Againg!`)
			return
		}

		if (cells[num] !== null) {
			alert("It's Already filled")
			return
		}
		
		if (turn === 'X') {
			squares[num] = turn
			setTurn('O')
		} else {
			squares[num] = turn
			setTurn('X')
		}
		checkForWinner(squares)
		setCells(squares)
	}

	const handlePlayAgaing = () => {
		setWinner(null)
		setCells(Array(9).fill(null))
		setTurn(winner)
	}

	
	const Cell = ({ num }) => {
		return (
		<td onClick={() => handleClick(num)}>{cells[num]}</td>
		)
	}

	return (
		<div className="container">
			<h1>Tic Tac Toe</h1>
			<p>Player: "{turn}"</p>
			<table>
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
			
			{winner ? 
			<>
			<p>Winner: {winner}</p>
			<button onClick={() => handlePlayAgaing()} >Play Again</button>
			</> :
			''
			}

		</div>
		)
}

export default TicTacToe
