import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import CardItem from './CardItem';
import { cards } from '../data/mock';
import { rem } from '../theme';
import { colors } from "../theme/colors";
import {Ionicons} from "@expo/vector-icons";

export default function CardSlider() {
    return (
        <View style={{ marginTop: rem(10) }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: rem(8) }}>
                {cards.map(c => (
                    <CardItem key={c.id} type={c.type} balance={c.balance} last4={c.last4} gradient={c.gradient as [string, string]} />
                ))}
                <View style={ styles.nextCard }>
                    <TouchableOpacity>
                        <Ionicons name="add" size={24} color={colors.textPrimary} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    nextCard :  { width: rem(40), height: rem(100), borderRadius: rem(14), backgroundColor: '#1c1c1c', alignItems: 'center', justifyContent: 'center' }
})