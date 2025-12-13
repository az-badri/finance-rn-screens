import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import CategoryTabs from '../components/CategoryTabs';
import CardSlider from '../components/CardSlider';
import ExpenseChart from '../components/ExpenseChart';
import TransactionItem from '../components/TransactionItem';
import { rem } from '../theme';
import { colors } from '../theme/colors';
import { transactions } from '../data/mock';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView style={styles.safe} edges={['top']}>
            <View style={styles.screen}>
                <Header onAvatarPress={() => navigation.navigate('Notifications')} />
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    <CategoryTabs />
                    <CardSlider/>
                    <View />
                        <Text style={styles.sectionTitle}>Expenses in <Text style={{ color: colors.accent }}>June</Text></Text>
                        <Text style={styles.sum}>$5,091</Text>
                        <ExpenseChart />
                        <Text style={styles.subHeader}>Today</Text>
                        {transactions.slice(0, 1).map(t => (
                            <TransactionItem key={t.id} title={t.title} subtitle={t.subtitle} amount={t.amount} date={t.date} avatarUrl={t.avatarUrl} isIcon={t.isIcon} />
                        ))}
                        <Text style={[styles.subHeader, { marginTop: rem(18) }]}>Yesterday</Text>
                        {transactions.slice(1).map(t => (
                            <TransactionItem key={t.id} title={t.title} subtitle={t.subtitle} amount={t.amount} date={t.date} avatarUrl={t.avatarUrl} isIcon={t.isIcon} />
                        ))}
                    <View style={{ height: rem(120) }} />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    screen: { flex: 1, backgroundColor: colors.background },
    sectionTitle: { color: colors.textPrimary, fontSize: rem(22), fontWeight: '700', marginTop: rem(18) },
    sum: { color: colors.textSecondary, fontSize: rem(18), alignSelf: 'flex-end' },
    subHeader: { color: colors.textPrimary, fontSize: rem(16), marginTop: rem(6), fontWeight: '600' },
});
