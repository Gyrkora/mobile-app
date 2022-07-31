import { StyleSheet, Text, View } from 'react-native'

const AlternativesContainer = (props) => {
	return (
		<View style={styles.container}>
			<Text style={{ color: 'red' }}>{props.suma}</Text>

			<Text>{props.random}</Text>
			<Text>{props.random}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
})

export default AlternativesContainer
