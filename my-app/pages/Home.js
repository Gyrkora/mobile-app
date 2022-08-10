import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'

const Home = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Text style={{ fontSize: 40, marginTop: 15 }}>Welcome 🤓</Text>

			<View style={styles.screenContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('MathGames')}
				>
					<Text style={styles.text}>Mathgames</Text>
					<Text style={styles.subtitle}>Practica lógica</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Worterbuch')}
				>
					<Text style={styles.text}>Wörterbuch</Text>
					<Text style={styles.subtitle}>Deutsch üben</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	screenContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginTop: 30,
	},

	button: {
		paddingVertical: 50,
		paddingHorizontal: 30,
		backgroundColor: colors.beige,
		borderRadius: 10,
		borderColor: colors.pink,
		borderWidth: 1,
		margin: 5,
	},
	text: {
		color: colors.pink,
		fontWeight: 'bold',
		fontSize: 20,
	},

	subtitle: {
		color: colors.blue,
		fontWeight: 'bold',
		fontSize: 15,
		textAlign: 'center',
	},
})

export default Home
