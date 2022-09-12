import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import colors from '../../constants/colors'
import { addItem } from '../../store/actions/cart.action'
import GeneralButton from '../GeneralButton'

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

					<TouchableOpacity style={styles.button} onPress={handlerAddItemCart}>
						<Text style={styles.buttonText}>Agregar al carrito</Text>
					</TouchableOpacity>
					{/* <Button title="Agregar al carrito" onPress={handlerAddItemCart} /> */}
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
		backgroundColor: colors.beige,
	},

	container: {
		flex: 1,
		borderRadius: 6,
		shadowColor: 'black',
		borderWidth: 2,
		borderColor: colors.pink,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
	},

	button: {
		borderWidth: 1,
		borderColor: colors.blue,
		padding: 4,
		textAlign: 'center',
		borderRadius: 5,
		backgroundColor: colors.peach,
	},

	buttonText: {
		textAlign: 'center',
		color: colors.blue,
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
