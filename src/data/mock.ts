export type Card = {
    id: string;
    type: 'debit' | 'virtual';
    balance: string;
    last4: string;
    gradient?: [string, string];
};

export const cards: Card[] = [
    { id: '1', type: 'debit', balance: '$4,098.12', last4: '4385', gradient: ['#FF7A2A', '#FF6A00'] },
    { id: '2', type: 'virtual', balance: '$14.71', last4: '9081', gradient: ['#9B9B9B', '#8E8E8E'] },
];
export type Transaction = {
    id: string;
    title: string;
    subtitle?: string;
    amount: string;
    date: string;
    avatarUrl?: string;
    isIcon?: boolean;
};

export const transactions: Transaction[] = [
    { id: 't1', title: 'Matthew Billson', subtitle: 'Money Transfer', amount: '$56.19', date: 'Jun 9, 12:08', avatarUrl: 'https://i.pravatar.cc/96?img=5' },
    { id: 't2', title: 'Starbucks', subtitle: 'Food', amount: '$122.47', date: 'Jun 8, 19:21', isIcon: true },
    { id: 't3', title: 'Netflix', subtitle: 'Entertainment', amount: '$13.17', date: 'Jun 8, 08:53', isIcon: true },
];
