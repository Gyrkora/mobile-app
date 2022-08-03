import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import colors from '../../constants/colors'

const AddContainer = (props) => {
	const { height, width } = useWindowDimensions()

	return (
		<View>
			<Text style={styles.title}>{props.title}</Text>

			<View
				style={{
					...styles.container,
					...props.style,
					marginBottom: height > 600 ? 60 : 20,
					width: width * 0.9,
				}}
			>
				<View style={{ ...styles.addedContainer }}>
					<Text style={styles.added}> {props.randomValue1}</Text>
				</View>
				<View>
					<Text style={{ ...styles.sumaSymbol }}>{props.symbol}</Text>
				</View>
				<View style={{ ...styles.addedContainer }}>
					<Text style={styles.added}> {props.randomValue2}</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		color: colors.blue,
		textAlign: 'center',
		marginTop: 10,
		fontFamily: 'EducSemibold',
	},

	container: {
		flexDirection: 'row',
		backgroundColor: colors.beige,
		justifyContent: 'space-evenly',
		alignContent: 'center',
		padding: 30,
		marginTop: 10,
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
		fontFamily: 'EducBold',
	},
})

export default AddContainer
