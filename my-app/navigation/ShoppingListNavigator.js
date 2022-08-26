import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShoppingList from '../pages/ShoppingList'
const Stack = createNativeStackNavigator()

const ShoppingListNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Orders"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
			}}
		>
			<Stack.Screen
				name="Shopping List"
				component={ShoppingList}
				options={{ title: 'Orders' }}
			/>
		</Stack.Navigator>
	)
}

export default ShoppingListNavigator
