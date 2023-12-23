import React, { useState, useLayoutEffect } from "react";
import {
	SafeAreaView,
	ScrollView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

// import { firebase } from "../config";
// import { AUTH_DOMAIN } from "@env";

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

import InputField from "../components/InputField";
import { firebase } from "../config";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import CustomButton from "../components/CustomButton";
// import RegistrationSVG from "../assets/registration.svg";

const RegisterScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNum, setPhoneNum] = useState("");

	function handleEmail(newEmail) {
		setEmail(newEmail);
	}

	function handlePassword(newPassword) {
		console.log("password : ", password);
		console.log("new password : ", newPassword);
		setPassword(newPassword);
	}

	function handleFirstName(newFirstName) {
		console.log("newFirstName: ", newFirstName);
		setFirstName(newFirstName);
	}

	function handleLastName(newLastName) {
		setLastName(newLastName);
	}

	function handlePhoneNum(newPhoneNum) {
		setPhoneNum(newPhoneNum);
	}

	const registerUser = (email, password, firstName, lastName, phoneNum) => {
		console.log("email :", email);
		console.log("password :", password);
		console.log("firstName :", firstName);
		console.log("lastName :", lastName);
		console.log(firebase.app().name);

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Handle successful signup
				console.log("User signed up:", userCredential.user.uid);

				// Add user details to Firestore
				firebase
					.firestore()
					.collection("users")
					.doc(userCredential.user.uid)
					.set({
						email: email,
						firstName: firstName,
						lastName: lastName,
						phoneNum: phoneNum,
						// Add more user details as needed
					})
					.then(() => {
						console.log("User details added to Firestore");
					})
					.catch((error) => {
						console.error("Error adding user details to Firestore:", error);
					});
			})
			.catch((error) => {
				// Handle signup errors
				console.error("Error signing up:", error);
			});
	};

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
					label={"First Name"}
					icon={
						<Ionicons
							name="person-outline"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
					textVal={firstName}
					changeHandler={handleFirstName}
				/>

				<InputField
					label={"Last Name"}
					icon={
						<Ionicons
							name="person-outline"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
					textVal={lastName}
					changeHandler={handleLastName}
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
					textVal={email}
					changeHandler={handleEmail}
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
					// textVal={password}
					changeHandler={handlePassword}
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
					textVal={phoneNum}
					changeHandler={handlePhoneNum}
				/>

				<CustomButton
					label={"Register"}
					onPress={() => {
						registerUser(email, password, firstName, lastName, phoneNum);
					}}
				/>

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
