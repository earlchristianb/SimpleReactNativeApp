/** @format */


import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import ScreenTemplate from "../components/template/ScreenTemplate";
import COLORS from "../theme/colors";

const List = [
	{
		group_name: "Company",
		names_list: ["Junior", "Senior", "Founder", "CEO", "CTO", "HR Chief"],
		unpicked_list: ["Junior", "Senior", "Founder", "CEO", "CTO"],
		picked_list: [
			{
				picker: "Senior",
				picked: "HR Chief",
			},
		],
		status: "Ongoing",
	},
	{
		group_name: "My Family",
		names_list: ["Father", "Mother", "Sister1", "Sister2", "Uncle", "Brother"],
		unpicked_list: ["Father", "Mother", "Sister1", "Sister2", "Brother"],
		picked_list: [
			{
				picker: "Brother",
				picked: "Uncle",
			},
		],
		status: "Ongoing",
	},
];

const HomeScreen = ({ navigation }) => {
	const [list, setList] = useState(List);
	return (
		<ScreenTemplate navigation={navigation}>
			<View style={styles.bodyContainer}>
				<View style={styles.instructionContainer}>
					<Text style={styles.instructionText}>
						Select a List to start your Bunutan
					</Text>
				</View>
				{/* TODO:Create a custom component for the lists */}
				<View style={styles.listContainer}>
					<Pressable style={styles.tabContainer}>
						<Text>Name</Text>
						<Text>Unpicked Names</Text>
						<Text>Status</Text>
					</Pressable>
					<View style={styles.innerListContainer}>
						{list.map(
							(
								{ group_name, names_list, picked_list, unpicked_list, status },
								index
							) => {
								return (
									<Pressable key={index} style={styles.tabContainer}>
										<Text>{group_name}</Text>
										<Text>{unpicked_list.length}</Text>
										<Text style={status === "Ongoing" && styles.ongoingStatus}>
											{status}
										</Text>
									</Pressable>
								);
							}
						)}
					</View>

					<Pressable style={styles.tabContainer}>
						<Text style={styles.textCreateList}>Create a new List</Text>
					</Pressable>
				</View>
			</View>
		</ScreenTemplate>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	mainContainer: {
		paddingVertical: "10%",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		height: "100%",
	},
	bodyContainer: {
		padding: 20,
		width: "100%",
		height: "100%",
		backgroundColor: "orange",
	},
	instructionText: { fontSize: 16 },
	instructionContainer: {
		paddingTop: 5,
		height: "5%",
		width: "100%",
	},
	listContainer: {
		height: "80%",
		backgroundColor: COLORS.primary,
		width: "100%",
		borderWidth: 1,
		padding: 5,
	},
	innerListContainer: {
		height: "80%",
		width: "100%",
	},
	tabContainer: {
		backgroundColor: COLORS.white,
		height: "10%",
		borderWidth: 1,
		borderColor: COLORS.primary,
		padding: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	ongoingStatus: {
		color: COLORS.success.main,
	},
	textCreateList: {
		width: "100%",
		textAlign: "center",
	},
});