import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { rem } from '../theme';
import { colors } from '../theme/colors';

export default function NotificationsScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.sub}>Здесь будет список уведомлений и вкладки</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background, padding: rem(18) },
    title: { color: colors.textPrimary, fontSize: rem(22), fontWeight: '700' },
    sub: { color: colors.textSecondary, marginTop: rem(8) },
});
