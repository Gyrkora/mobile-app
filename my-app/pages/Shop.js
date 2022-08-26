import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { products as shopData } from '../data/products'
import ShopItems from '../components/shopGame/ShopItems'
import colors from '../constants/colors'

const Shop = () => {
	const products = shopData

	const renderItem = (data) => <ShopItems item={data.item} />

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>La Compra 🏠</Text>
			<View style={styles.list}>
				<FlatList
					data={products}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		// flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
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
