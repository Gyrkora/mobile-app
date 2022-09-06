import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Shop from '../pages/Shop'
import ShopProducts from '../pages/ShopProducts'

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

			<Stack.Screen
				name="ShopProducts"
				component={ShopProducts}
				options={({ route }) => ({ title: route.params.name })}
			/>
		</Stack.Navigator>
	)
}

export default ShopNavigator
