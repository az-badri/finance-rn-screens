import React from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationsHeader from "../components/Notifications/NotificationsHeader";
import NotificationsTabs from "../components/Notifications/NotificationsTabs";
import NotificationItem from "../components/Notifications/NotificationsItem";
import { notifications_data } from "../data/mock";
import {useNotificationsTabs} from "../hooks/useNotificationsTab";

export default function NotificationsScreen() {
    const { tabs, activeTab, setActiveTab } = useNotificationsTabs();
    const filteredNotifications =
        activeTab === 'All'
            ? notifications_data
            : notifications_data.filter(n => n.type === activeTab);


    return (
        <SafeAreaView style={styles.safe}>
            <NotificationsHeader />
            <NotificationsTabs tabs={tabs} activeTab={activeTab} onTabPress={setActiveTab} />

            <ScrollView>
                {filteredNotifications.map(({ id, headerDate, title, amount, date, avatar, isDot = false, description, description2 }) => (
                    <View key={id}>
                        {headerDate && <Text style={styles.section}>{headerDate}</Text>}
                        <NotificationItem
                            title={title}
                            amount={amount}
                            date={date}
                            avatar={avatar}
                            dot={isDot}
                            description={description}
                            description2={description2}
                        />
                    </View>
                ))}
                {!filteredNotifications.length && <Text style={styles.emptyMessage}>There are no messages yet</Text>}
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
    emptyMessage: {
        color: '#888',
        fontSize: 13,
        marginTop: 24,
        marginBottom: 8,
        paddingHorizontal: 20,
    }
});
