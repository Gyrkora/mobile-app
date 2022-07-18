import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function InputAddItem(props) {
	const {
		textItem,
		onHandlerChangeItem,
		onHanlderAddItem,
		onHanlderChangeDef,
		definition,
	} = props

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.inputLabel}>Wort</Text>
			<TextInput
				placeholder="palabra"
				style={styles.input}
				value={textItem}
				onChangeText={onHandlerChangeItem}
			/>
			<Text style={styles.inputLabel}>Definitionen | Übersetzung</Text>
			<TextInput
				placeholder="definición | traducción"
				style={styles.input}
				value={definition}
				onChangeText={onHanlderChangeDef}
			/>

			<Button
				title="Add"
				color="#1154B3"
				onPress={onHanlderAddItem}
				disabled={textItem.length === 0 ? true : false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 30,
	},
	input: {
		width: '100%',
		borderColor: 'black',
		borderWidth: 2,
		color: 'black',
		height: 50,
		marginBottom: 20,
		borderRadius: 10,
		textAlign: 'center',
		borderColor: '#BC8440',
	},
	inputLabel: {
		fontSize: 20,
		marginBottom: 5,
		fontWeight: 'bold',
		color: '#B35C22',
	},
})
