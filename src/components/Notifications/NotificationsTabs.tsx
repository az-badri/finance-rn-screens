import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { rem } from "../../theme";
import { NotificationTab } from "../../hooks/useNotificationsTab";

type Props = {
    tabs: NotificationTab[];
    activeTab: NotificationTab;
    onTabPress: (tab: NotificationTab) => void;
};

export default function NotificationsTabs({
                                              tabs,
                                              activeTab,
                                              onTabPress,
                                          }: Props) {
    return (
        <View style={styles.container}>
            {tabs.map(tab => (
                <TouchableOpacity
                    key={tab}
                    onPress={() => onTabPress(tab)}
                    style={styles.tab}
                >
                    <Text
                        style={[
                            styles.text,
                            activeTab === tab && styles.activeText,
                        ]}
                    >
                        {tab}
                    </Text>
                    {activeTab === tab && <View style={styles.indicator} />}
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
        marginLeft: rem(15),
        marginRight: rem(15),
    },
    text: {
        color: '#8a8a8a',
        fontSize: 15,
        paddingBottom: rem(6),
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
