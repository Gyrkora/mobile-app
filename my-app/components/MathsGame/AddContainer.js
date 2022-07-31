import { StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'

const AddContainer = (props) => {
	return (
		<View style={{ ...styles.container, ...props.style }}>
			<View style={{ ...styles.addedContainer }}>
				<Text style={styles.added}> {props.randomValue1}</Text>
			</View>
			<View>
				<Text style={{ ...styles.sumaSymbol }}>+</Text>
			</View>
			<View style={{ ...styles.addedContainer }}>
				<Text style={styles.added}> {props.randomValue2}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: colors.beige,
		justifyContent: 'space-evenly',
		alignContent: 'center',
		padding: 30,
		marginTop: 90,
		marginBottom: 60,
		borderRadius: 10,
	},

	addedContainer: {
		padding: 20,
		width: 100,
		alignItems: 'center',
		textAlign: 'center',
		margin: 7,
		backgroundColor: colors.pink,
		borderRadius: 10,
	},

	sumaSymbol: {
		alignItems: 'center',
		textAlign: 'center',
		marginTop: 30,
		width: 40,
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.blue,
	},

	added: {
		color: colors.beige,
		fontSize: 30,
	},
})

export default AddContainer
