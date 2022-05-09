import { atom, PrimitiveAtom } from "jotai";
import { User, Permissions, Config } from "..";

export const themeAtom = atom<string>("light");

export const currentUserAtom = atom<User | undefined>(
  undefined
) as PrimitiveAtom<User | undefined>;

export const isLoggedInAtom = atom<boolean>(false);

export const permissionsAtom = atom<Permissions | undefined>(
  undefined
) as PrimitiveAtom<Permissions | undefined>;

export const configAtom = atom<Config | undefined>(
  undefined
) as PrimitiveAtom<Config | undefined>;

export const sessionToken = atom<string | null>(null) as PrimitiveAtom<string | null>;

export const localStorageAtom = atom<{[key: string]: string}>({}) as PrimitiveAtom<{[key: string]: string}>;

export const RTLAtom = atom<boolean>(false);
