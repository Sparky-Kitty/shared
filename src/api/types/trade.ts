import { Game } from '@diablosnaps/common';

export type TradeSortDirection = 'asc' | 'desc';

// TODO: discuss
export type TradeSortField = 'listedAt' | 'price';

export interface TradeSort {
    field: TradeSortField;
    direction: TradeSortDirection;
}

export interface TradeItemFilter {
    type?: Game.ItemType;
    minPower?: number;
    maxRequiredLevel?: number;
    classRestriction?: Game.Class;
}

export interface TradeSeasonalFilter {
    socketType?: Game.ItemSocketType;
}

export interface TradeAffixOption {
    id?: Game.AffixId;
    minValue?: number;
}

export interface TradeAffixFilter {
    options?: TradeAffixOption[];
    count?: number;
}

export interface TradeQuery {
    item?: TradeItemFilter;
    seasonal?: TradeSeasonalFilter;
    affix?: TradeAffixFilter;
}

export interface TradeListingAccount {
    name: string;
    online: boolean;
    lastSeenAt: Date;
}

export interface TradeListing {
    id: string;
    account?: TradeListingAccount;
    expiresAt?: Date;
    // TODO: price, bidding info, etc
}

export interface TradeSearchPayload {
    query?: TradeQuery;
    sort?: TradeSort;
}

export interface TradeSearchResult {
    item: Game.Item;
    listing: TradeListing;
}

export interface TradeGetSearchQuery {
    serverType: Game.ServerType;
    /**
     * Serialized TradeSearchPayload
     */
    payload: string;
    page: number;
    pageSize?: number;
    timestamp?: number;
}
export interface TradeGetSearchResponse {
    results: TradeSearchResult[];
    hasMore: boolean;
    timestamp: number;
}
