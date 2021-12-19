import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CONTACT_DETAIL, LOGIN } from "../constants/routerNames";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown:false
        }}>
            <AuthStack.Screen name={LOGIN} component={Login} />
            <AuthStack.Screen name={CONTACT_DETAIL} component={SignUp} />
        </AuthStack.Navigator>
    );
}
export default AuthNavigator;