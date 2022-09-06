import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from '../navigation/TabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShopProducts from './ShopProducts'

const Stack = createNativeStackNavigator()

const ShopGame = () => {
	return (
		<NavigationContainer independent={true}>
			<TabNavigator />
		</NavigationContainer>
	)
}

export default ShopGame
