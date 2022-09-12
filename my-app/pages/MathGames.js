import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import AddNumbers from './AddNumbers'
import colors from '../constants/colors'
import { useReducer } from 'react'

const MathGames = () => {
	const [answer, setAnswer] = useState('')
	const [, forceUpdate] = useReducer((x) => x + 1, 0)

	function next() {
		forceUpdate()
	}

	function isCorrect(suma, result) {
		if (suma === result) {
			console.log('iguales')
			setAnswer('iguales')
			next()
		} else if (suma !== result) {
			console.log('diferentes, pero correcto')
			next()
			setAnswer('diferentes pero correcto')
		} else {
			console.log('otro')
			setAnswer('')
			next()
		}
	}

	let content = <AddNumbers isCorrect={isCorrect} answer={answer} />

	return (
		<View>
			<Text style={styles.header}>Practica matemáticas</Text>
			{content}
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		fontSize: 30,
		color: colors.beige,
		backgroundColor: colors.pink,
		textAlign: 'center',
		paddingTop: 40,
	},
})

export default MathGames
