import { View, Text, StyleSheet, FlatList } from 'react-native'
import colors from '../constants/colors'
import { useSelector, useDispatch } from 'react-redux'
import GridItem from '../components/GridItem'
import { selectShopCategory } from '../store/actions/shopCategory.action'

const Shop = ({ navigation }) => {
	const dispatch = useDispatch()
	const shopCategories = useSelector(
		(state) => state.shopCategory.shopCategories
	)

	const handleSelectedCategory = (item) => {
		dispatch(selectShopCategory(item.id))
		navigation.navigate('ShopProducts', {
			name: item.title,
		})
	}

	const renderItem = ({ item }) => (
		<GridItem item={item} onSelected={handleSelectedCategory} />
	)

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>La Compra 🏠</Text>
			<View style={styles.list}>
				<FlatList
					data={shopCategories}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
					numColumns={2}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		marginTop: 30,
	},

	title: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 7,
		color: colors.pink,
		textAlign: 'center',
	},

	list: {
		height: '83%',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: colors.pink,
	},
})

export default Shop
