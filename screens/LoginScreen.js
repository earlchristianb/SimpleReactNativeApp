/** @format */

import React from "react";
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	Button,
	Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import COLORS from "../theme/colors";
import TitleBar from "../components/molecules/TitleBar/TitleBar";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
	const ButtonText = "Continue";

	const goToHomeScreen = () => {
		navigation.navigate("HomeScreen");
	};

	return (
		<SafeAreaView style={styles.mainContainer}>
			<StatusBar />
			<TitleBar title='Bunutan' />
			<View style={styles.bodyContainer}>
				<Text style={styles.textGreetings}>Happy Holidays!</Text>
				<Pressable style={styles.btnGoToHomeScreen} onPress={goToHomeScreen}>
					<Text style={styles.btnText}>{ButtonText}</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: "10%",
		height: "100%",
	},
	bodyContainer: {
		backgroundColor: COLORS.white,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	btnGoToHomeScreen: {
		padding: 10,
		borderRadius: 5,
		borderColor: COLORS.success,
		borderWidth: 1,
		marginBottom: "30%",
	},
	btnText: {
		color: COLORS.secondary,
		fontWeight: "800",
	},
	textGreetings: {
		color: COLORS.secondary,
		fontSize: 40,
		fontStyle: "italic",
		fontWeight: "bold",
		marginBottom: "30%",
		textShadowColor: COLORS.secondary,
		textShadowOffset: { height: 30, width: 20 },
		textShadowRadius: 60,
	},
});

export default LoginScreen;