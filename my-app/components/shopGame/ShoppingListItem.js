import { shoppingList } from '../../data/shoppingList'

import { View, Text, StyleSheet, ScrollView } from 'react-native'
import colors from '../../constants/colors'

const ShoppingListItem = () => {
	const list = shoppingList

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Mi Lista de Compras ✍️</Text>

			<View style={styles.listContainer}>
				{list.map((a) => {
					return (
						<View key={a} style={styles.list}>
							<Text style={styles.listItem}>⬜ {a.item1}</Text>
							<Text style={styles.listItem}>⬜ {a.item2}</Text>
							<Text style={styles.listItem}>⬜ {a.item3}</Text>
							<Text style={styles.listItem}>⬜ {a.item4}</Text>
							<Text style={styles.listItem}>⬜ {a.item5}</Text>
							<Text style={styles.listItem}>⬜ {a.item6}</Text>
							<Text style={styles.listItem}>⬜ {a.item7}</Text>
						</View>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},

	title: {
		fontSize: 25,
		textAlign: 'center',
		fontWeight: 'bold',
		color: colors.pink,
		marginTop: 10,
		marginBottom: 15,
	},

	listContainer: {
		alignItems: 'center',
	},

	list: {
		padding: 20,
		paddingLeft: 40,
		flexDirection: 'column',
		backgroundColor: colors.beige,
		height: '88%',
		width: '90%',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
		borderColor: colors.blue,
		borderWidth: 0.1,
		borderRadius: 5,
	},

	listItem: {
		marginVertical: 10,
		fontSize: 20,
		fontFamily: 'EducRegular',
		color: colors.blue,
	},
})

export default ShoppingListItem
