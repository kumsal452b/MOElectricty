import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from "../constants/routerNames";
import Contact from "../screens/Contacts";
import ContactDetail from "../screens/ContactsDetails";
import CreateContact from "../screens/CreateContact";
import Settıngs from "../screens/Settings";

const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contact} />
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
            <HomeStack.Screen name={SETTINGS} component={Settıngs} />
        </HomeStack.Navigator>
    )
}
export default HomeNavigator;