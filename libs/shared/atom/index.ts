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


