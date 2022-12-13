/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TitleBar from "../../molecules/TitleBar/TitleBar";

const ScreenTemplate = ({ children, navigation }) => {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<StatusBar animated={true} />
			<TitleBar title='Bunutan' navigation={navigation} />
			{children}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		paddingVertical: "10%",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		height: "100%",
	},
});
export default ScreenTemplate;
