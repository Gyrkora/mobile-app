import {
	Button,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Pressable,
} from 'react-native'
import AddContainer from '../components/MathsGame/AddContainer'
import AlternativesContainer from '../components/MathsGame/AlternativesContainer'
import colors from '../constants/colors'
import { RandomNum } from '../functions/numbers'

const AddNumbers = ({ isCorrect, score, answer }) => {
	const randomValue1 = Math.floor(Math.random() * 900)
	const randomValue2 = Math.floor(Math.random() * 900)

	let suma = randomValue1 + randomValue2

	const random = new RandomNum()
	const randomValue = random.generateRC(1700)
	const values = [randomValue, suma]
	const valuesArray = values[Math.floor(Math.random() * values.length)]

	if (answer === 'iguales') {
		score = 'Súper'
	} else if (answer === 'diferentes pero correcto') {
		score = 'Claro, no es la suma correcta'
	} else {
		score = 'Será mejor a la próxima'
	}

	return (
		<View>
			<View style={styles.screen}>
				<AddContainer
					randomValue1={randomValue1}
					randomValue2={randomValue2}
					symbol={'+'}
					title={'Suma'}
				/>
			</View>

			<View>
				<AlternativesContainer valuesArray={valuesArray} />
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => isCorrect(suma, valuesArray)}
				>
					<Text style={styles.text}>True</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => isCorrect(suma, valuesArray)}
				>
					<Text style={styles.text}>False</Text>
				</TouchableOpacity>
			</View>

			<Text
				style={[
					styles.score,
					answer === 'iguales' || 'diferentes pero correcto'
						? styles.same
						: styles.different,
				]}
			>
				{score}
			</Text>
		</View>
	)

	//, answer === 'iguales' && styles.correct
}

const styles = StyleSheet.create({
	screen: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.pink,
	},

	score: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 30,
	},

	same: {
		color: 'green',
	},

	different: {
		color: 'red',
	},

	button: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		margin: 4,
		backgroundColor: colors.pink,
		elevation: 2,
		shadowColor: 'black',
		shadowOpacity: 0.15,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
		borderRadius: 4,
	},

	numberContainer: {
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
