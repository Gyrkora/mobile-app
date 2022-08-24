import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { products as shopData } from '../data/products'
import ShopItems from '../components/shopGame/ShopItems'

const Shop = () => {
	const products = shopData

	const renderItem = (data) => <ShopItems item={data.item} />

	return (
		<View style={styles.screen}>
			<View>
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
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 30,
	},
})

export default Shop
