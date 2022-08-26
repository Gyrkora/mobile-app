import { View, StyleSheet, Text } from 'react-native' //general React Native
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' //bottomTabs
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator' //navegador
import { Ionicons } from '@expo/vector-icons' //iconos
import ShoppingListNavigator from './ShoppingListNavigator'

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName="Shop"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBar,
			}}
		>
			<BottomTabs.Screen
				name="ShopList"
				component={ShoppingListNavigator}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.item}>
							<Ionicons
								name="list"
								size={24}
								color={focused ? 'blue' : 'black'}
							/>
							<Text>Your list</Text>
						</View>
					),
				}}
			/>
			<BottomTabs.Screen
				name="ShopTab"
				component={ShopNavigator}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.item}>
							<Ionicons
								name="md-home"
								size={24}
								color={focused ? 'blue' : 'black'}
							/>
							<Text>Tienda</Text>
						</View>
					),
				}}
			/>

			<BottomTabs.Screen
				name="CartTab"
				component={CartNavigator}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.item}>
							<Ionicons
								name="md-cart"
								size={24}
								color={focused ? 'blue' : 'black'}
							/>
							<Text>Carrito</Text>
						</View>
					),
				}}
			/>
		</BottomTabs.Navigator>
	)
}

const styles = StyleSheet.create({
	tabBar: {
		shadowColor: '#7f5df0',
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.25,
		shadowRadius: 0.25,
		elevation: 5,
		position: 'absolute',
		bottom: 25,
		left: 20,
		right: 20,
		borderRadius: 15,
		height: 90,
	},

	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default TabNavigator
