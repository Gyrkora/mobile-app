import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native-web'
import colors from '../../constants/colors'

const AuthScreen = () => {
	const title = 'REGISTRO',
		message = '¿Ya tienes cuenta?',
		messageAction = 'Ingresar',
		messageTarget = 'login'

	return (
		<KeyboardAvoidingView behavior="height" style={styles.screen}>
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<Text>Formulario</Text>
				<View style={styles.prompt}>
					<Text style={styles.promptMessage}>{message}</Text>
					<TouchableOpacity onPress={() => console.log(messageTarget)}>
						<Text style={styles.promptButton}>{messageAction} </Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: ' center ',
		alignItems: ' center ',
	},
	title: {
		fontSize: 24,
		fontFamily: ' EducBold ',
		marginBottom: 18,
		textAlign: ' center ',
	},

	container: {
		width: '80 % ',
		maxWidth: 400,
		padding: 12,
		margin: 12,
		borderColor: ' #ccc ',
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: ' white ',
	},

	prompt: {
		alignItems: 'center',
	},
	promptMessage: {
		fontSize: 16,
		fontFamily: ' EducRegular ',
		color: '#333 ',
	},

	promptButton: {
		fontSize: 16,

		fontFamily: ' EducBold ',
		color: colors.pink,
	},
	button: {
		backgroundColor: colors.blue,
		marginVertical: 20,
	},
})
export default AuthScreen
