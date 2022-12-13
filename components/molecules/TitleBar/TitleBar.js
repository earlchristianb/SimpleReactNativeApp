/** @format */

import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../../../theme/colors";

const TitleBar = ({ navigation, title, children }) => {
	const goToLoginScreen = () => {
		navigation.navigate("LoginScreen");
	};
	return (
		<View style={styles.titleContainer}>
			<Pressable onPress={goToLoginScreen}>
				<Text style={styles.title}>{title}</Text>
			</Pressable>

			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	titleContainer: {
		backgroundColor: COLORS.primary,
		flexDirection: "row",
		width: "100%",
		padding: 10,
	},
	title: { fontSize: 30, color: COLORS.white, letterSpacing: 10 },
});

export default TitleBar;
