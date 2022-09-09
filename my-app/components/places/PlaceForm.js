import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import colors from '../../constants/colors'

const PlaceForm = () => {
	const [enteredTitle, setEnteredTitle] = useState('')

	function changeTitleHanlder(enteredTitle) {
		setEnteredTitle(enteredText)
	}

	return (
		<ScrollView style={styles.form}>
			<View>
				<Text style={styles.label}>Title</Text>
				<TextInput
					onChangeText={changeTitleHanlder}
					value={enteredTitle}
					style={styles.input}
				/>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 24,
	},

	label: {
		fontWeight: 'bold',
		marginBottom: 4,
		color: colors.pink,
		fontSize: 17,
	},

	input: {
		marginVertical: 8,
		paddingHorizontal: 4,
		paddingVertical: 8,
		fontSize: 16,
		borderBottomColor: colors.blue,
		borderBottomWidth: 2,
		backgroundColor: colors.peach,
	},
})

export default PlaceForm
