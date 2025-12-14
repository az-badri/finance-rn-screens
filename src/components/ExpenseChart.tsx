import React from 'react';
import { View, StyleSheet } from 'react-native';
import { rem } from '../theme';
import { colors } from '../theme/colors';

export default function ExpenseChart() {
    return (
        <View style={styles.container}>
            <View style={styles.barBg}>
                <View style={[styles.barSegment, { width: '65%', backgroundColor: colors.accent }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginTop: rem(12), marginBottom: rem(8) },
    barBg: { height: rem(8), borderRadius: rem(8), backgroundColor: '#2A2A2A', overflow: 'hidden' },
    barSegment: { height: '100%' },
});
