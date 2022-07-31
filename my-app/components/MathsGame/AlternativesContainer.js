import { StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'

const AlternativesContainer = (props) => {
	const prueba = () => {
		console.log('funciona sin button')
	}

	return (
		<View style={styles.container}>
			<View
				style={styles.altContainer}
				onPress={() => {
					prueba()
				}}
			>
				<Text style={{ ...styles.alternatives, color: 'red' }}>
					{props.suma}
				</Text>
			</View>
			<View style={styles.altContainer}>
				<Text style={styles.alternatives}>{props.random}</Text>
			</View>

			<View style={styles.altContainer}>
				<Text style={styles.alternatives}>{props.random}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},

	altContainer: {
		backgroundColor: colors.blue,
		textAlign: 'center',
		padding: 10,
		borderRadius: 10,
		marginTop: 30,
	},

	alternatives: {
		fontSize: 20,
		color: colors.beige,
		width: 80,
		paddingTop: 10,
		paddingBottom: 10,
		textAlign: 'center',
		alignItems: 'center',
	},
})

export default AlternativesContainer
