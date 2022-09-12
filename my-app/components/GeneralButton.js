import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const GeneralButton = ({ onPress, children }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		margin: 4,
		backgroundColor: colors.pink,
		elevation: 2,
		shadowColor: 'black',
		shadowOpacity: 0.15,
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
		borderRadius: 4,
	},

	pressed: {
		opacity: 0.7,
	},

	text: {
		textAlign: 'center',
		fontSize: 16,
		color: 'white',
	},
})

export default GeneralButton
