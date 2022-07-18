import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function List(props) {
	const { itemList, onHandlerModal } = props

	return (
		<FlatList
			data={itemList}
			renderItem={(data) => (
				<TouchableOpacity
					style={styles.item}
					onPress={() => onHandlerModal(data.item.id)}
				>
					<Text style={styles.words}>{data.item.value}</Text>
					<Text style={styles.words}>=</Text>
					<Text style={styles.listDefinition}>{data.item.definition} </Text>
				</TouchableOpacity>
			)}
			// showsHorizontalScrollIndicator={false}
			keyExtractor={(item) => item.id}
		/>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#1154B3',
		borderRadius: 10,
		padding: 10,
		marginBottom: 13,
		borderColor: '#1154B3',
	},
	words: {
		fontSize: 20,
		color: '#B35719',
	},
	listDefinition: {
		fontSize: 20,
		color: '#1154B3',
	},
})
