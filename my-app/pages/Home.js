import { View, Text, StyleSheet, FlatList } from 'react-native'
import GridItem from '../components/GridItem'
import colors from '../constants/colors'
import { CATEGORIES } from '../data/categories'

const Home = ({ navigation }) => {
	const handleSelectedCategory = (item) => {
		navigation.navigate(item.route, {
			categoryId: item.id,
			name: item.title,
		})
	}

	const renderGridItem = ({ item }) => (
		<GridItem item={item} onSelected={handleSelectedCategory} />
	)

	return (
		<View style={styles.screen}>
			<Text style={styles.title}> 🤓 MultiBrain 🧠</Text>

			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={renderGridItem}
				numColumns={2}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},

	screenContainer: {
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginTop: 30,
	},

	button: {
		paddingVertical: 50,
		paddingHorizontal: 30,
		backgroundColor: colors.beige,
		borderRadius: 10,
		borderColor: colors.pink,
		borderWidth: 1,
		margin: 5,
	},
	title: {
		fontSize: 40,
		marginTop: 15,
		textAlign: 'center',
		marginBottom: 15,
	},

	subtitle: {
		color: colors.blue,
		fontWeight: 'bold',
		fontSize: 15,
		textAlign: 'center',
	},
})

export default Home

{
	/* <View style={styles.screenContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('MathGames')}
				>
					<Text style={styles.text}>Mathgames</Text>
					<Text style={styles.subtitle}>Practica lógica</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Worterbuch')}
				>
					<Text style={styles.text}>Wörterbuch</Text>
					<Text style={styles.subtitle}>Deutsch üben</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Match')}
				>
					<Text style={styles.text}>Match</Text>
					<Text style={styles.subtitle}>Match it all</Text>
				</TouchableOpacity>
			</View> */
}
