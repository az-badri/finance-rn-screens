import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { rem } from '../theme';
import { colors } from '../theme/colors';

const categories = [
    { key: 'travel', label: 'Travel', icon: 'airplane' },
    { key: 'delivery', label: 'Delivery', icon: 'cube' },
    { key: 'bonuses', label: 'Bonuses', icon: 'gift' },
    { key: 'support', label: 'Support', icon: 'headset' },
];

export default function CategoryTabs() {
    return (
        <View style={styles.row}>
            {categories.map(c => (
                <TouchableOpacity key={c.key} style={styles.item} activeOpacity={0.8}>
                    <View style={styles.icon}>
                        <Ionicons name={c.icon as any} size={20} color={colors.accent} />
                    </View>
                    <Text style={styles.label}>{c.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: { marginTop: rem(10),  marginBottom: rem(10), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: rem(6) },
    item: { alignItems: 'center', width: (rem(390) - rem(36)) / 4 - rem(6) },
    icon: { width: rem(46), height: rem(46), borderRadius: rem(12), backgroundColor: '#111', alignItems: 'center', justifyContent: 'center' },
    label: { marginTop: rem(8), color: colors.textPrimary, fontSize: rem(12) },
});
