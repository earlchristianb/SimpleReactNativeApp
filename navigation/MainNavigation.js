/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Login Screen'
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Login Screen' component={LoginScreen} />
				<Stack.Screen
					name='RegistrationScreen'
					component={RegistrationScreen}
				/>
				<Stack.Screen name='HomeScreen' component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;
