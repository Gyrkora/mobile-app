import { View, Text, FlatList, StyleSheet } from 'react-native'
import PlaceItem from './PlaceItem'

const PlacesList = ({ places }) => {
	if (!places || places.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					no places added yet - Start adding some
				</Text>
			</View>
		)
	}

	return (
		<FlatList
			data={places}
			keyExtractor={(item) => item.id}
			renderItem={(item) => <PlaceItem place={item} />}
		/>
	)
}

const styles = StyleSheet.create({
	fallbackContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	fallbackText: {
		fontSize: 16,
	},
})

export default PlacesList
