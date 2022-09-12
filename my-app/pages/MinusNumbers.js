import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import GeneralButton from '../components/GeneralButton'
import AddContainer from '../components/MathsGame/AddContainer'
import AlternativesContainer from '../components/MathsGame/AlternativesContainer'
import colors from '../constants/colors'
import { RandomNum } from '../functions/numbers'

const MinusNumbers = ({ isCorrect, score }) => {
	const [answer, setAnswer] = useState('')
	const randomValue1 = Math.floor(Math.random() * 900)
	const randomValue2 = Math.floor(Math.random() * 900)

	let resta = randomValue1 - randomValue2

	const random = new RandomNum()
	const randomValue = random.generateRC(1000)
	const minus = [randomValue, resta]
	const minusArray = minus[Math.floor(Math.random() * minus.length)]

	const navigation = useNavigation()

	function nextPage() {
		navigation.navigate('AddNumbers')
	}

	function isCorrect(suma, result) {
		if (suma === result) {
			console.log('iguales')
			setAnswer('iguales')
		} else if (suma !== result) {
			console.log('diferentes, pero correcto')

			setAnswer('diferentes pero correcto')
		} else {
			console.log('otro')
			setAnswer('')
		}
	}

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
						isCorrect(resta, minusArray)
					}}
				>
					<Text style={styles.text}>True</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						isCorrect(resta, minusArray)
					}}
				>
					<Text style={styles.text}>False</Text>
				</TouchableOpacity>
			</View>

			<Text style={{ fontSize: 25, textAlign: 'center', marginTop: 30 }}>
				Tu Puntaje: {score}
			</Text>
			<GeneralButton onPress={nextPage}>Siguiente</GeneralButton>
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
