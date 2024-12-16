import { atom } from 'recoil';
import { Email } from '@/types/emailTypes';

export const selectedEmailState = atom<Email | null>({
    key: 'selectedEmailState',
    default: null,
});