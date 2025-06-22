import { atom } from 'recoil';
import { Email } from '@/types/emailTypes';

export const sidebarOpen = atom<boolean>({
    key: 'sidebarOpen',
    default: true,
});

export const selectedEmailState = atom<Email | null>({
    key: 'selectedEmailState',
    default: null,
});

export const mailEditorOpen = atom<boolean>({
    key: 'toggleMailEditor',
    default: false,
});