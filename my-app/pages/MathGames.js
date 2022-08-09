import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AddNumbers from './AddNumbers'
import colors from '../constants/colors'
import MinusNumbers from './MinusNumbers'

const MathGames = () => {
	const [answer, setAnswer] = useState()
	let score = 0

	let content = (
		<AddNumbers setAnswer={setAnswer} answer={answer} score={score} />
	)

	if (answer) {
		score += 1
		content = (
			<MinusNumbers score={score} setAnswer={setAnswer} answer={answer} />
		)
	}

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
