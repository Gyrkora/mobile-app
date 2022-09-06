import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/actions/cart.action'

const ShopItems = ({ item, onSelected }) => {
	const dispatch = useDispatch()
	const handlerAddItemCart = () => dispatch(addItem(item))

	return (
		<View style={styles.gridItem}>
			<TouchableOpacity
				style={{
					...styles.container,
					backgroundColor: item.backgroundColor,
				}}
				onPress={() => onSelected(item)}
			>
				<View>
					<Text
						style={{ ...styles.title, color: item.color, textAlign: 'center' }}
					>
						{item.name}
					</Text>
					<Text
						style={{ ...styles.title, color: item.color, textAlign: 'center' }}
					>
						${item.price}
					</Text>
					<Text>Id: {item.id}</Text>
					<Button title="Agregar al carrito" onPress={handlerAddItemCart} />
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		borderRadius: 6,
		margin: 15,
		height: 150,
	},

	container: {
		flex: 1,
		borderRadius: 6,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		elevation: 3,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
	},

	title: {
		fontFamily: 'EducBold',
		color: 'black',
		fontSize: 20,
		textShadowColor: 'rgba(0, 0, 0, 0.50)',
		// textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 4,
	},
})

export default ShopItems
