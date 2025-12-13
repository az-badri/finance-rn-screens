import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { rem } from '../theme';
import { colors } from '../theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

type HeaderProps = { name?: string; onQrPress?: () => void; onAvatarPress?: () => void };

export default function Header({ name = 'Charlotte', onQrPress, onAvatarPress }: HeaderProps) {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={onAvatarPress} style={styles.avatarWrap} activeOpacity={0.8}>
                    <Image source={{ uri: 'https://i.pravatar.cc/127' }} style={styles.avatar} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: rem(12) }}>
                    <Text style={styles.name}>{name} <Text style={styles.chev}>›</Text></Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={onQrPress} style={{ padding: rem(6) }}>
                    <Ionicons name="qr-code" size={20} color={colors.textPrimary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: rem(72),
        paddingHorizontal: rem(16),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
    },
    avatarWrap: { width: rem(40), height: rem(40), borderRadius: rem(20), overflow: 'hidden', backgroundColor: '#222' },
    avatar: { width: '100%', height: '100%' },
    name: { color: colors.textPrimary, fontSize: rem(16), fontWeight: '600' },
    chev: { color: '#999' },
});
