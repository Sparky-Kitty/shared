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
    socketType?: Game.ItemSocketType;
}

export interface AffixOption {
    id?: Game.AffixId;
    minValue?: number;
}

export interface AffixFilter {
    options?: AffixOption[];
    count?: number;
}

export interface Query {
    item?: ItemFilter;
    seasonal?: SeasonalFilter;
    affix?: AffixFilter;
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

export interface SearchPayload {
    query?: Query;
    sort?: Sort;
}

export interface SearchRequest {
    payload: SearchPayload;
    serverType: Game.ServerType;
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