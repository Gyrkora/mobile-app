import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AddContainer from '../components/MathsGame/AddContainer'
import AlternativesContainer from '../components/MathsGame/AlternativesContainer'
import TrueFalseContainer from '../components/MathsGame/TrueFalseContainer'
import colors from '../constants/colors'
import { RandomNum } from '../functions/numbers'
colors

const MinusNumbers = (props) => {
	const randomValue1 = Math.floor(Math.random() * 900)
	const randomValue2 = Math.floor(Math.random() * 900)

	function resta() {
		let resta = randomValue1 - randomValue2
		return resta
	}

	const random = new RandomNum()
	const randomValue = random.generateRC(1000)
	const minus = [randomValue, resta()]
	const minusArray = minus[Math.floor(Math.random() * minus.length)]

	return (
		<View>
			<View style={styles.screen}>
				<AddContainer
					randomValue1={randomValue1}
					randomValue2={randomValue2}
					symbol={'-'}
					title={'Resta'}
				/>
			</View>

			<View>
				<AlternativesContainer valuesArray={minusArray} />
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						props.setAnswer(true)
					}}
				>
					<Text style={styles.text}>True</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						props.setAnswer(false)
					}}
				>
					<Text style={styles.text}>False</Text>
				</TouchableOpacity>
			</View>

			<Text style={{ fontSize: 25, textAlign: 'center', marginTop: 30 }}>
				Tu Puntaje: {props.score}
			</Text>
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

export default MinusNumbers
