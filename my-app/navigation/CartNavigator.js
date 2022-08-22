import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../pages/Cart'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
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
				component={Cart}
				options={{ title: 'Orders' }}
			/>
		</Stack.Navigator>
	)
}

export default CartNavigator
