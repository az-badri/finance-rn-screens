import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { rem } from '../theme';
import { colors } from '../theme/colors';

type Props = { balance: string; last4: string; gradient?: [string, string] };

export default function CardItem({ balance, last4, gradient = [colors.accentBright, colors.accent] }: Props) {
    return (
        <LinearGradient colors={gradient} start={[0, 0]} end={[1, 1]} style={styles.card}>
            <View style={{ flex: 1 }} />
            <Text style={styles.balance}>{balance}</Text>
            <Text style={styles.sub}>•• {last4}</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    card: {
        width: rem(260),
        height: rem(120),
        marginRight: rem(12),
        borderRadius: rem(16),
        padding: rem(14),
        justifyContent: 'flex-end',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 12,
        elevation: 3,
    },
    balance: { color: '#fff', fontSize: rem(20), fontWeight: '700' },
    sub: { color: 'rgba(255,255,255,0.9)', fontSize: rem(13), marginTop: rem(8) },
});
