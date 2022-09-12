import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../constants/colors'

const TrueFalseContainer = (props) => {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					props.isCorrect()
				}}
			>
				<Text style={styles.text}>True</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					props.isCorrect()
				}}
			>
				<Text style={styles.text}>False</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
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

export default TrueFalseContainer
