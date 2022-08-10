import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Worterbuch from '../pages/Wörterbuch'
import Home from '../pages/Home'
import MathGames from '../pages/MathGames'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="MathGames" component={MathGames} />
				<Stack.Screen name="Worterbuch" component={Worterbuch} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigation
