import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { rem } from '../theme';
import { colors } from '../theme/colors';
import { StyleSheet } from 'react-native';
import AvatarIcon from '../../assets/icons/AvatarIcon'
import ScannerIcon from "../../assets/icons/ScannerIcon";

type HeaderProps = { name?: string; onQrPress?: () => void; onAvatarPress?: () => void };

export default function Header({ name = 'Charlotte', onQrPress, onAvatarPress }: HeaderProps) {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
                <TouchableOpacity onPress={onAvatarPress} style={styles.avatarWrap} activeOpacity={0.8}>
                    <AvatarIcon size={36} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: rem(12) }}>
                    <Text style={styles.name}>{name} <Text style={styles.chev}>›</Text></Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: rem(8) }}>
                <TouchableOpacity onPress={onQrPress} style={{ padding: rem(6) }}>
                    <ScannerIcon size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignContent: 'center',
        height: rem(72),
        paddingHorizontal: rem(16),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
    },
    avatarWrap: { width: rem(34), height: rem(34), borderRadius: rem(20), overflow: 'hidden', backgroundColor: '#222' },
    avatar: { width: '100%', height: '100%' },
    name: { color: colors.textPrimary, fontSize: rem(16), fontWeight: '600' },
    chev: { color: '#999' },
});
