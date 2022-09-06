import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CartItem = ({ item, onDelete }) => {
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.header}>{item.name}</Text>
			</View>
			<View style={styles.detail}>
				<View>
					<Text>Cantidad: {item.quantity}</Text>
					<Text>Id: {item.id}</Text>
				</View>
				<TouchableOpacity onPress={() => onDelete(item.id)}>
					<Ionicons name="trash" size={24} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flex: 1,
		padding: 8,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},

	header: {
		fontSize: 18,
		// fontFamily: '',
	},
	detail: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 16,
		fontFamily: 'OpenSans',
	},
})

export default CartItem
