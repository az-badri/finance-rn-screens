import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { rem } from '../theme';
import { colors } from '../theme/colors';
import MasterIcon from "../../assets/icons/MasterIcon";

type Props = { balance: string; last4: string; gradient?: [string, string], type: string };

export default function CardItem({ balance, last4, gradient = [colors.accentBright, colors.accent], type }: Props) {
    return (
        <LinearGradient colors={gradient} start={[0, 0]} end={[1, 1]} style={styles.card}>
            <View>
                <View>
                    <MasterIcon size={36} color={colors.accent} />
                </View>
            </View>
            <View style={styles.balance}>
                <Text style={styles.balanceText}>{balance}</Text>
            </View>
            <View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>{type}</Text>
                    <Text style={styles.bottomText}>•• {last4}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: rem(142),
        height: rem(98),
        marginRight: rem(12),
        borderRadius: rem(16),
        padding: rem(12),
        gap: rem(13),
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 12,
        elevation: 3,
    },
    balance: {
        marginBottom: rem(-16),
    },
    balanceText: {
        color: '#fff',
        fontSize: rem(20),
        fontWeight: '700'
    },
    bottom: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomText: {
        color: "#fff",
    }
});
