import React from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationsHeader from "../components/Notifications/NotificationsHeader";
import NotificationsTabs from "../components/Notifications/NotificationsTabs";
import NotificationItem from "../components/Notifications/NotificationsItem";
import { notifications_data } from "../data/mock";

export default function NotificationsScreen() {
    return (
        <SafeAreaView style={styles.safe}>
            <NotificationsHeader />
            <NotificationsTabs />

            <ScrollView>
                {notifications_data.map(({ id, headerDate, title, amount, date, avatar, isDot = false }) => (
                    <View key={id}>
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
