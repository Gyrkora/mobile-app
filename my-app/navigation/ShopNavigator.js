import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Shop from '../pages/Shop'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Orders"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
			}}
		>
			<Stack.Screen
				name="Orders"
				component={Shop}
				options={{ title: 'Orders' }}
			/>
		</Stack.Navigator>
	)
}

export default ShopNavigator
