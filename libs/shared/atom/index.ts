import { atom, PrimitiveAtom } from 'jotai';
import { User } from './../type/User';
import { themeAtom } from './../../core-ui/src/lib/Header';

const currentUserAtom = atom<User | undefined>(undefined) as PrimitiveAtom<User | undefined>;

export {
    themeAtom,
    currentUserAtom
}