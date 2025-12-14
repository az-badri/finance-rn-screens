import { useState } from 'react';

export type NotificationTab =
    | 'All'
    | 'Payments'
    | 'System'
    | 'Delivery'
    | 'Travel';

export const NOTIFICATION_TABS: NotificationTab[] = [
    'All',
    'Payments',
    'System',
    'Delivery',
    'Travel',
];

export function useNotificationsTabs() {
    const [activeTab, setActiveTab] =
        useState<NotificationTab>('All');

    return {
        tabs: NOTIFICATION_TABS,
        activeTab,
        setActiveTab,
    };
}
