import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { rem } from '../theme';
import { colors } from '../theme/colors';

type Props = {
    title: string;
    subtitle?: string;
    amount: string;
    date: string;
    avatarUrl?: string;
    isIcon?: boolean;
    icon?: any;
};

export default function TransactionItem({ title, subtitle, amount, date, avatarUrl, isIcon, icon }: Props) {
    return (
        <TouchableOpacity style={styles.wrap} activeOpacity={0.8}>
            {isIcon ? <View style={styles.iconPlaceholder} >{icon}</View> : <Image source={{ uri: avatarUrl }} style={styles.avatar} />}
            <View style={{ flex: 1, marginLeft: rem(12) }}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: rem(6) }}>
                    <View style={styles.dot} />
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.amount}>{amount}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrap: {
        marginTop: rem(12),
        backgroundColor: colors.surface,
        borderRadius: rem(14),
        padding: rem(12),
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: { width: rem(48), height: rem(48), borderRadius: rem(12) },
    iconPlaceholder: { width: rem(48), height: rem(48), borderRadius: rem(12), backgroundColor: '#1E1E1E' },
    title: { color: colors.textPrimary, fontSize: rem(16), fontWeight: '700' },
    subtitle: { color: colors.textSecondary, fontSize: rem(13) },
    dot: { width: rem(8), height: rem(8), borderRadius: rem(4), backgroundColor: colors.accent, marginRight: rem(8) },
    amount: { color: colors.textPrimary, fontWeight: '700', fontSize: rem(15) },
    date: { color: colors.textSecondary, fontSize: rem(12), marginTop: rem(6) },
});
