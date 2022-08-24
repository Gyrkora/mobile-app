import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from 'react-native'
import React from 'react'
// import ShopProducts from './ShopProducts'
import { products as shopProducts } from '../../data/products'
import colors from '../../constants/colors'

const ShopItems = ({ item }) => {
	const products = shopProducts

	// const renderItem = (data) => <ShopProducts item={data.item} />

	return (
		<View style={styles.screen}>
			<View style={styles.questionContainer}>
				<Text style={styles.question}>{item.question}</Text>
			</View>

			<View style={styles.buttons}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textProduct}>{item.prod1}</Text>
					<Text style={styles.textProduct}>{item.price1}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textProduct}>{item.prod2}</Text>
					<Text style={styles.textProduct}>{item.price2}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textProduct}>{item.prod3}</Text>
					<Text style={styles.textProduct}>{item.price3}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textProduct}>{item.prod4}</Text>
					<Text style={styles.textProduct}>{item.price4}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		marginBottom: 15,
	},

	questionContainer: {
		marginHorizontal: 5,
		marginVertical: 5,
	},

	question: {
		fontSize: 16,
		textAlign: 'center',
	},

	buttons: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 5,
	},

	button: {
		borderColor: colors.blue,
		borderWidth: 1,
		padding: 5,
		marginVertical: 15,
	},

	textProduct: {
		textAlign: 'center',
	},
})

export default ShopItems
