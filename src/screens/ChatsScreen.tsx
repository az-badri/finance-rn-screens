import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { rem } from '../theme';
import { colors } from '../theme/colors';

export default function ChatsScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Chats</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' },
    title: { color: colors.textPrimary, fontSize: rem(18), fontWeight: '700' },
});
