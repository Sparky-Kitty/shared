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
    id: string;
    account: ListingAccount;
    expiresAt: Date;
    // TODO: price, bidding info, etc
}

export interface SearchResult {
    item: Game.Item;
    listing: Listing;
}

export interface SearchPayload {
    query?: Query;
    sort?: Sort;
}

export interface SearchGetRequestParams {
    payloadId: string;
}

export interface SearchGetResponse {
    payload: SearchPayload;
}

export interface SearchPostRequest {
    payload: SearchPayload;
}

export interface SearchPostResponse {
    payloadId: string;
    timestamp: number;
}

export interface FetchGetRequestParams {
    serverType: Game.ServerType;
    payloadId: string;
    timestamp: number;
    page: number;
}

export interface FetchGetResponse {
    results: SearchResult[];
    hasMore: boolean;
}