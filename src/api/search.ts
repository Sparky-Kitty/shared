import { Game } from '@diablosnaps/common';

export type SortDirection = 'asc' | 'desc';

// TODO: discuss
export type SortField = 'listedAt' | 'price';

export interface Sort {
    field: SortField;
    direction: SortDirection;
}

export interface ItemFilter {
    type?: Game.ItemType;
    minPower?: number;
    maxRequiredLevel?: number;
    classRestriction?: Game.Class;
}

export interface SeasonalFilter {
    socketType: Game.ItemSocketType;
}

export interface AffixFilter {
    id: Game.AffixId;
    minValue?: number;
}

export interface Query {
    item?: ItemFilter;
    seasonal?: SeasonalFilter;
    affixes?: AffixFilter[];
}

export interface ListingAccount {
    name: string;
    online: boolean;
    lastSeenAt: Date;
}

export interface Listing {
    account: ListingAccount;
    expiresAt: Date;
    // TODO: price, bidding info, etc
}

export type FetchId = string;

export interface FetchResult {
    id: FetchId;
    item: Game.Item;
    listing: Listing;
}




export interface SearchRequest {
    query?: Query;
    sort?: Sort;
}

export interface SearchResponse {
    total: number;
    results: FetchId[];
}

export interface FetchRequest {
    ids: FetchId[];
}

export interface FetchResponse {
    results: FetchResult[];
}