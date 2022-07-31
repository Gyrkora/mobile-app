import { StyleSheet, Text, View } from 'react-native'
import AddContainer from '../components/MathsGame/AddContainer'
import AlternativesContainer from '../components/MathsGame/AlternativesContainer'
import colors from '../constants/colors'

const AddNumbers = () => {
	class RandomNum {
		generateRC() {
			const randomValue = Math.floor(Math.random() * 1700)
			return randomValue
		}
	}

	const random = new RandomNum()

	const randomValue1 = Math.floor(Math.random() * 900)
	const randomValue2 = Math.floor(Math.random() * 900)

	function suma() {
		let suma = randomValue1 + randomValue2
		return suma
	}

	return (
		<View>
			<View style={styles.screen}>
				<AddContainer randomValue1={randomValue1} randomValue2={randomValue2} />
			</View>

			<View>
				<AlternativesContainer random={random.generateRC()} suma={suma()} />
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
})

export default AddNumbers
