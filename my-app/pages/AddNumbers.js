import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AddContainer from '../components/MathsGame/AddContainer'
import AlternativesContainer from '../components/MathsGame/AlternativesContainer'
import colors from '../constants/colors'
import { RandomNum } from '../functions/classes'

const AddNumbers = () => {
	const randomValue1 = Math.floor(Math.random() * 900)
	const randomValue2 = Math.floor(Math.random() * 900)

	function suma() {
		let suma = randomValue1 + randomValue2
		return suma
	}

	const sumaTotal = suma()

	const random = new RandomNum()
	const randomValue = random.generateRC(1700)

	const values = [randomValue, suma()]

	const valuesArray = values[Math.floor(Math.random() * values.length)]

	const guessAnswer = (answer) => {
		if (answer === suma()) {
			console.log('correct')
		} else {
			console.log('false')
		}
	}

	return (
		<View>
			<View style={styles.screen}>
				<AddContainer randomValue1={randomValue1} randomValue2={randomValue2} />
			</View>

			<View>
				<AlternativesContainer valuesArray={valuesArray} />
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						guessAnswer(sumaTotal)
					}}
				>
					<Text style={styles.text}>True</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						guessAnswer(randomValue)
					}}
				>
					<Text style={styles.text}>False</Text>
				</TouchableOpacity>
			</View>
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

	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginTop: 30,
	},

	button: {
		paddingVertical: 15,
		paddingHorizontal: 30,
		backgroundColor: colors.beige,
		borderRadius: 10,
		borderColor: colors.pink,
		borderWidth: 1,
	},

	text: {
		color: colors.pink,
		fontWeight: 'bold',
		fontSize: 20,
	},
})

export default AddNumbers
