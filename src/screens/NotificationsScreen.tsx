import React from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationsHeader from "../components/Notifications/NotificationsHeader";
import NotificationsTabs from "../components/Notifications/NotificationsTabs";
import NotificationItem from "../components/Notifications/NotificationsItem";

const NOTIFICATIONS_DATA = [
    {
        headerDate: 'TODAY, 17 JUNE',
        title: "Received from Anna",
        amount: "+$110",
        date: "17 June 2025, 17:49 · Payments",
        avatar: "https://i.pravatar.cc/100",
        isDot: true,
    },
    {
        headerDate: 'YESTERDAY, 16 JUNE',
        title: "See our limited offer!",
        description: "Would you like to visit new countries?",
        date: "16 June 2025, 23:08 · Travel",
    },
    {
        title: "Sent to •• 2041",
        amount: "-$14.62",
        date: "16 June 2025, 06:18 · Payments",
        avatar: "https://i.pravatar.cc/100",
        isDot: true,
    },
    {
        headerDate: '24 MARCH, 2025',
        title: 'iOS 26.0.1 · 109.255.84.7 · Spain',
        date: "24 March 2025, 15:44 · Security",
    }
]


export default function NotificationsScreen() {
    return (
        <SafeAreaView style={styles.safe}>
            <NotificationsHeader />
            <NotificationsTabs />

            <ScrollView>
                {NOTIFICATIONS_DATA.map(({ headerDate, title, amount, date, avatar, isDot = false }) => (
                    <View>
                        <Text style={styles.section}>{headerDate}</Text>
                        <NotificationItem
                            title={title}
                            amount={amount}
                            date={date}
                            avatar={avatar}
                            dot={isDot}
                        />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#000',
    },
    section: {
        color: '#888',
        fontSize: 13,
        marginTop: 24,
        marginBottom: 8,
        paddingHorizontal: 20,
    },
});
