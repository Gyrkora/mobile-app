import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Worterbuch from '../pages/Wörterbuch'
import Home from '../pages/Home'
import MathGames from '../pages/MathGames'
import MatchCategories from '../pages/MatchCategories'
import MatchImage from '../pages/MatchImage'
import MatchWord from '../pages/MatchWord'
import MatchSound from '../pages/MatchSound'
import Shop from '../pages/Shop'
import ShopGame from '../pages/ShopGame'
import ShopProducts from '../pages/ShopProducts'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="MathGames" component={MathGames} />
				<Stack.Screen name="Worterbuch" component={Worterbuch} />
				<Stack.Screen name="Match" component={MatchCategories} />
				<Stack.Screen name="MatchImage" component={MatchImage} />
				<Stack.Screen name="MatchWord" component={MatchWord} />
				<Stack.Screen name="MatchSound" component={MatchSound} />
				<Stack.Screen name="Shop" component={ShopGame} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigation
