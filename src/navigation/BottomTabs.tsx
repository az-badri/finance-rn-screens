import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/colors';
import HomeScreen from "../screens/HomeScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import HistoryScreen from "../screens/HistoryScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import ChatsScreen from "../screens/ChatsScreen";

export type BottomTabParamList = {
    Home: undefined;
    Payments: undefined;
    History: undefined;
    Analytics: undefined;
    Chats: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: colors.accent,
                tabBarInactiveTintColor: colors.inactive,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopWidth: 0,
                    height: 78,
                    paddingBottom: 8,
                },
                tabBarIcon: ({ color, size }) => {
                    let name: React.ComponentProps<typeof Ionicons>['name'] = 'home';
                    if (route.name === 'Home') name = 'home';
                    if (route.name === 'Payments') name = 'swap-horizontal';
                    if (route.name === 'History') name = 'time';
                    if (route.name === 'Analytics') name = 'pie-chart';
                    if (route.name === 'Chats') name = 'chatbubbles';
                    return <Ionicons name={name} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Payments" component={PaymentsScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Analytics" component={AnalyticsScreen} />
            <Tab.Screen name="Chats" component={ChatsScreen} />
        </Tab.Navigator>
    );
}
