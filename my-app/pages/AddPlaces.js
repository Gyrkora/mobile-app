import PlaceForm from '../components/places/PlaceForm'
import { insertPlace } from '../data/database'

const AddPlaces = ({ navigation }) => {
	async function createPlaceHandler(place) {
		await insertPlace(place)
		navigation.navigate('Places')
	}

	return <PlaceForm onCreatePlace={createPlaceHandler} />
}

export default AddPlaces
