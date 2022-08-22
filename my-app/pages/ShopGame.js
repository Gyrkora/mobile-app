import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from '../navigation/TabNavigator'

const ShopGame = () => {
	return (
		<NavigationContainer independent={true}>
			<TabNavigator />
		</NavigationContainer>
	)
}

export default ShopGame
