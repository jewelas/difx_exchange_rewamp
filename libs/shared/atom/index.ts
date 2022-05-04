import { atom, PrimitiveAtom } from "jotai";
import { User } from "..";

export const themeAtom = atom<string>("light");
export const currentUserAtom = atom<User | undefined>(undefined) as PrimitiveAtom<User | undefined>;
export const isLoggedInAtom = atom<boolean>(false);
export const sessionToken = atom<string | null>(null) as PrimitiveAtom<string | null>;

// Sync data between localStorage and global state
export const localStorageAtom = atom<{[key: string]: string}>({}) as PrimitiveAtom<{[key: string]: string}>;

export const priceSelectedAtom = atom<number>(0);
