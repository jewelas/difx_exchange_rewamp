import { atom, PrimitiveAtom } from 'jotai';
import { User } from '@difx/shared';

export const themeAtom = atom<string>('light');
export const currentUserAtom = atom<User | undefined>(undefined) as PrimitiveAtom<User | undefined>;