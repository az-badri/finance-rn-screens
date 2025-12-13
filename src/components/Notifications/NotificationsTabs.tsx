import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {rem} from "../../theme";

const TABS = ['All', 'Payments', 'System', 'Delivery', 'Travel'];

export default function NotificationsTabs() {
    const [active, setActive] = useState('All');

    return (
        <View style={styles.container}>
            {TABS.map(tab => (
                <TouchableOpacity
                    key={tab}
                    onPress={() => setActive(tab)}
                    style={styles.tab}
                >
                    <Text
                        style={[
                            styles.text,
                            active === tab && styles.activeText,
                        ]}
                    >
                        {tab}
                    </Text>
                    {active === tab && <View style={styles.indicator} />}
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#1c1c1c',
        marginTop: rem(20),
        display: 'flex',
        justifyContent: 'center',
    },
    tab: {
        marginRight: 20,
        paddingBottom: 12,
    },
    text: {
        color: '#8a8a8a',
        fontSize: 15,
    },
    activeText: {
        color: '#ff6a00',
    },
    indicator: {
        height: 2,
        backgroundColor: '#ff6a00',
        marginTop: 6,
        borderRadius: 1,
    },
});
