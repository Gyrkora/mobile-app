import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Worterbuch from '../pages/Wörterbuch'
import Home from '../pages/Home'
import MathGames from '../pages/MathGames'
// import MatchCategories from '../pages/MatchCategories'
// import MatchImage from '../pages/MatchImage'
// import MatchWord from '../pages/MatchWord'
// import MatchSound from '../pages/MatchSound'
import ShopGame from '../pages/ShopGame'
import AllPlaces from '../pages/AllPlaces'
import AddPlaces from '../pages/AddPlaces'
import IconButton from '../components/IconButton'
import colors from '../constants/colors'
import Map from '../pages/Map'
import PlacesDetails from '../pages/PlacesDetails'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: { backgroundColor: colors.pink },
					headerTintColor: 'white',
					contentStyle: { backgroundColor: colors.beige },
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen
					name="MathGames"
					component={MathGames}
					options={{
						title: 'Prueba tus Matemáticas',
					}}
				/>
				<Stack.Screen
					name="Worterbuch"
					component={Worterbuch}
					options={{
						title: 'Tu Diccionario',
					}}
				/>
				{/* <Stack.Screen name="Match" component={MatchCategories} />
				<Stack.Screen name="MatchImage" component={MatchImage} />
				<Stack.Screen name="MatchWord" component={MatchWord} />
				<Stack.Screen name="MatchSound" component={MatchSound} /> */}
				<Stack.Screen
					name="Shop"
					component={ShopGame}
					options={{
						title: 'Compras de la Semana',
					}}
				/>
				<Stack.Screen
					name="Places"
					component={AllPlaces}
					options={({ navigation }) => ({
						title: 'Tus Lugares Favoritos',
						headerRight: ({ tintColor }) => (
							<IconButton
								icon="add"
								size={24}
								color={tintColor}
								onPress={() => navigation.navigate('AddPlaces')}
							/>
						),
					})}
				/>
				<Stack.Screen
					name="AddPlaces"
					component={AddPlaces}
					options={{ title: 'Agrega un Nuevo Lugar' }}
				/>
				<Stack.Screen name="Map" component={Map} />

				<Stack.Screen
					name="PlaceDetails"
					component={PlacesDetails}
					options={{
						title: 'Cargando lugar...',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigation
