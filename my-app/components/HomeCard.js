import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import GridItem from './GridItem'
import colors from '../constants/colors'

const HomeCard = ({ item, onSelected }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={() => onSelected(item)}>
			<Text style={styles.text}>{item.title}</Text>
			<Text style={styles.subtitle}>{item.subtitle}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 50,
		paddingHorizontal: 30,
		backgroundColor: colors.beige,
		borderRadius: 10,
		borderColor: colors.pink,
		borderWidth: 1,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: colors.pink,
		fontWeight: 'bold',
		fontSize: 20,
		fontFamily: 'EducBold',
	},

	subtitle: {
		color: colors.blue,
		fontWeight: 'bold',
		fontSize: 15,
		textAlign: 'center',
	},
})

export default HomeCard
