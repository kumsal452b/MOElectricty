
import React from "react"
import HomeNavigator from "./HomeNavigator";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HOME_NAVIGATOR } from "../constants/routerNames";

const DrawerNavigator = () => {
    const DrawerStack = createDrawerNavigator();
    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} options={{headerShown:false}}/>
        </DrawerStack.Navigator>
    )
}
export default DrawerNavigator;