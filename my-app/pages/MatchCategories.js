import { FlatList } from 'react-native'
import GridItem from '../components/GridItem'
import { matchCategories } from '../data/matchCategories'

const MatchCategories = ({ navigation }) => {
	const handleSelectedCategory = (item) => {
		navigation.navigate(item.game, {
			categoryId: item.id,
			name: item.title,
		})
	}

	const renderGridItem = ({ item }) => (
		<GridItem item={item} onSelected={handleSelectedCategory} />
	)

	return (
		<FlatList
			data={matchCategories}
			keyExtractor={(item) => item.id}
			renderItem={renderGridItem}
		/>
	)
}

export default MatchCategories
