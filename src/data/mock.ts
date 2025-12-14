import Person1 from  '../../assets/images/Person1.png'
import NetflixIcon from  '../../assets/images/NetflixIcon.png'
import StarbucksIcon from  '../../assets/images/StarbucksIcon.png'
import WomanAva from  '../../assets/images/WomanAva.png'
import World from  '../../assets/images/World.png'
import IosArrow from  '../../assets/images/IosArrow.png'
import Security from  '../../assets/images/Security.png'

export type Card = {
    id: string;
    type: 'Debit' | 'Virtual';
    balance: string;
    last4: string;
    gradient?: [string, string];
};

export const cards: Card[] = [
    { id: '1', type: 'Debit', balance: '$4,098.12', last4: '4385', gradient: ['#FF7A2A', '#FF6A00'] },
    { id: '2', type: 'Virtual', balance: '$14.71', last4: '9081', gradient: ['#9B9B9B', '#8E8E8E'] },
];
export type Transaction = {
    id: string;
    title: string;
    subtitle?: string;
    amount: string;
    date: string;
    avatarUrl?: string;
    isIcon?: boolean;
    avatar?: any;
};

export const transactions: Transaction[] = [
    { id: 't1', title: 'Matthew Billson', subtitle: 'Money Transfer', amount: '$56.19', date: 'Jun 9, 12:08', isIcon: true, avatar: Person1 },
    { id: 't2', title: 'Starbucks', subtitle: 'Food', amount: '$122.47', date: 'Jun 8, 19:21', isIcon: true, avatar: StarbucksIcon },
    { id: 't3', title: 'Netflix', subtitle: 'Entertainment', amount: '$13.17', date: 'Jun 8, 08:53', isIcon: true, avatar: NetflixIcon },
];

export const notifications_data = [
    {
        id: '1',
        headerDate: 'TODAY, 17 JUNE',
        title: "Received from Anna",
        amount: "+$110",
        date: "17 June 2025, 17:49 · Payments",
        avatar: WomanAva,
        isDot: true,
    },
    {
        id: '2',
        headerDate: 'YESTERDAY, 16 JUNE',
        title: "See our limited offer!",
        description: "Would you like to visit new countries?",
        date: "16 June 2025, 23:08 · Travel",
        avatar: World,
    },
    {
        id: '3',
        title: "Sent to •• 2041",
        amount: "-$14.62",
        date: "16 June 2025, 06:18 · Payments",
        avatar: IosArrow,
        isDot: true,
    },
    {
        id: '4',
        headerDate: '24 MARCH, 2025',
        title: 'iOS 26.0.1 · 109.255.84.7 · Spain',
        date: "24 March 2025, 15:44 · Security",
        avatar: Security,
    }
]