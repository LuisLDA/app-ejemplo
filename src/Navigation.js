import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./componentes/home/Menu";
import { MaterialCommunityIcons } from "react-native-vector-icons"

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => {
                    return <MaterialCommunityIcons name="home" color={color} size={size} />
                },
            }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Navigation;