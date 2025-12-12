import React from 'react';
import { ScrollView, View } from 'react-native';
import CardItem from './CardItem';
import { cards } from '../data/mock';
import { rem } from '../theme';

export default function CardSlider() {
    return (
        <View style={{ marginTop: rem(10) }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: rem(8) }}>
                {cards.map(c => (
                    <CardItem key={c.id} balance={c.balance} last4={c.last4} gradient={c.gradient as [string, string]} />
                ))}
                <View style={{ width: rem(12) }} />
                <View style={{ width: rem(56), height: rem(120), borderRadius: rem(16), backgroundColor: '#1c1c1c', marginRight: rem(12), alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ fontSize: rem(28), color: '#fff' }}><View /></View>
                </View>
            </ScrollView>
        </View>
    );
}