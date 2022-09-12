import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import CartItem from '../components/shopGame/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { confirmCart, removeItem } from '../store/actions/cart.action'
import colors from '../constants/colors'

const Cart = () => {
	const dispatch = useDispatch()
	const { items, total } = useSelector((store) => store.cart) //cart.reducer
	const handlerConfirmCart = () => dispatch(confirmCart(items, total)) //cart.action
	const handlderDeleteItem = (id) => dispatch(removeItem(id)) //cart.action
	const renderItem = ({ item }) => (
		<CartItem item={item} onDelete={handlderDeleteItem} />
	)

	return (
		<View style={styles.container}>
			<View style={styles.list}>
				<FlatList
					data={items}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
				/>
			</View>

			<View style={styles.footer}>
				<TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
					<Text style={{ color: 'white' }}>Confirmar</Text>
					<View>
						<Text style={styles.text}>Total</Text>
						<Text style={styles.text}>{total}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		backgroundColor: '#fff',
		paddingBottom: 129,
	},
	list: {
		flex: 1,
	},
	footer: {
		padding: 12,
		borderTopColor: colors.pink,
		borderTopWidth: 1,
	},

	confirm: {
		backgroundColor: colors.pink,
		borderRadius: 10,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	total: {
		flexDirection: 'row',
	},

	text: {
		fontSize: 18,
		color: 'white',
		// fontFamily: 'OpenSansBold',
		padding: 8,
	},
})

export default Cart
