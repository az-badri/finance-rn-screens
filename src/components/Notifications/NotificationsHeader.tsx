import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import NotifInbox from "../../../assets/icons/NofiInbox";

export default function NotificationsHeader() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.title}>Notifications</Text>

            <TouchableOpacity style={styles.inboxIcon}>
                <NotifInbox size={18} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    inboxIcon: {
        marginRight: 6,
    }
});
