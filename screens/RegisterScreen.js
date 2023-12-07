import React, { useState, useLayoutEffect } from "react";
import {
	SafeAreaView,
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

import InputField from "../components/InputField";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import CustomButton from "../components/CustomButton";
import RegistrationSVG from "../assets/registration.svg";

const RegisterScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			<View style={{ paddingHorizontal: 25 }}>
				<Text
					style={{
						fontFamily: "Roboto-Medium",
						fontSize: 28,
						fontWeight: "500",
						color: "#333",
						marginBottom: 30,
					}}
				>
					Register
				</Text>

				<InputField
					label={"Full Name"}
					icon={
						<Ionicons
							name="person-outline"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
				/>

				<InputField
					label={"Email ID"}
					icon={
						<MaterialIcons
							name="alternate-email"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
					keyboardType="email-address"
				/>

				<InputField
					label={"Password"}
					icon={
						<Ionicons
							name="ios-lock-closed-outline"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
					inputType="password"
				/>

				<InputField
					label={"Confirm Password"}
					icon={
						<Ionicons
							name="ios-lock-closed-outline"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
					inputType="password"
				/>

				<InputField
					label={"10-digit phone number"}
					icon={
						<Ionicons
							name="person-outline"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
					inputType="text"
				/>

				<CustomButton label={"Register"} onPress={() => {}} />

				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						marginBottom: 30,
					}}
				>
					<Text>Already registered?</Text>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Text style={{ color: "#AD40AF", fontWeight: "700" }}> Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default RegisterScreen;
