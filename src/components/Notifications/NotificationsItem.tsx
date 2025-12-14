import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
    title: string;
    description?: string;
    description2?: string;
    amount?: string;
    date: string;
    avatar?: any;
    dot?: boolean;
};

export default function NotificationItem({
                                             title,
                                             description,
                                             description2,
                                             amount,
                                             date,
                                             avatar,
                                             dot,
                                         }: Props) {
    return (
        <View style={styles.container}>
            {avatar ? (
                <Image source={avatar} style={styles.avatar} />
            ) : (
                <View style={styles.iconPlaceholder} />
            )}

            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>

                {amount && <Text style={styles.amount}>{amount}</Text>}

                {description && (
                    <Text style={styles.description}>{description}</Text>
                )}
                {description2 && (
                    <Text style={styles.description}>{description2}</Text>
                )}

                <Text style={styles.date}>{date}</Text>
            </View>

            {dot && <View style={styles.dot} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#1c1c1c',
    },
    avatar: {
        width: 44,
        height: 44,
        marginRight: 12,
    },
    iconPlaceholder: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#222',
        marginRight: 12,
    },
    content: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    amount: {
        color: '#ff6a00',
        fontSize: 21,
        fontWeight: '600',
        marginVertical: 4,
    },
    description: {
        color: '#9a9a9a',
        marginTop: 4,
    },
    date: {
        color: '#666',
        fontSize: 12,
        marginTop: 6,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ff6a00',
        marginLeft: 8,
        marginTop: 6,
    },
});
