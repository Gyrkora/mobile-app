import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AddContainer from '../components/MathsGame/AddContainer'
import AlternativesContainer from '../components/MathsGame/AlternativesContainer'
import TrueFalseContainer from '../components/MathsGame/TrueFalseContainer'
import colors from '../constants/colors'
import { RandomNum } from '../functions/numbers'

const AddNumbers = (props) => {
	const randomValue1 = Math.floor(Math.random() * 900)
	const randomValue2 = Math.floor(Math.random() * 900)
	function suma() {
		let suma = randomValue1 + randomValue2
		return suma
	}
	const random = new RandomNum()
	const randomValue = random.generateRC(1700)
	const values = [randomValue, suma()]
	const valuesArray = values[Math.floor(Math.random() * values.length)]

	return (
		<View>
			<View style={styles.screen}>
				<AddContainer
					randomValue1={randomValue1}
					randomValue2={randomValue2}
					symbol={'+'}
				/>
			</View>

			<View>
				<AlternativesContainer valuesArray={valuesArray} />
			</View>
			<TrueFalseContainer setAnswer={props.setAnswer} answer={props.answer} />
			<Text>{props.score}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.pink,
	},

	numberContainer: {
		backgroundColor: colors.pink,
	},
})

export default AddNumbers
