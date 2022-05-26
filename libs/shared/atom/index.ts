import { atom, PrimitiveAtom } from "jotai";
import { User, Permissions, Config, Balance } from "..";

export const themeAtom = atom<string>("light");
export const anonymousTokenAtom = atom<string | null>(null) as PrimitiveAtom<string | null>;;
export const pageTitleAtom = atom<string>("DIFX | Cryptocurrency Spot Exchange");

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

export const RTLAtom = atom<boolean>(false);

// Sync data between localStorage and global state
export const localStorageAtom = atom<{[key: string]: any}>({}) as PrimitiveAtom<{[key: string]: any}>;

export const priceSelectedAtom = atom<number>(0);
export const marketPairAtom = atom<any | null>(null) as PrimitiveAtom<any | null>;
export const marketDrawerAtom = atom<boolean | null>(null) as PrimitiveAtom<boolean | null>;
export const marketModalAtom = atom<boolean | null>(null) as PrimitiveAtom<boolean | null>;
export const quickBuyTypeAtom = atom<string>("buy") as PrimitiveAtom<string>;

export const marketSpotListAtom = atom<any | null>(null) as PrimitiveAtom<any | null>;
export const marketFuturesListAtom = atom<any | null>(null) as PrimitiveAtom<any | null>;
export const marketSpotFavoritesListAtom = atom<any | null>(null) as PrimitiveAtom<any | null>;
export const marketFutureFavoritesListAtom = atom<any | null>(null) as PrimitiveAtom<any | null>;

export const convertSmallBalModalAtom = atom<boolean | null>(null) as PrimitiveAtom<boolean | null>;
export const userBalanceAtom = atom<Balance[]>([]) as PrimitiveAtom<Balance[]>;

export const layoutTypeAtom = atom<string | 'default' | 'compact' | 'pro'>('default');

export const candleTypeAtom = atom<string | 'greenUp' | 'redUp'>('greenUp');
