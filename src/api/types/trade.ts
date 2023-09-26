import { Game } from '@diablosnaps/common';

export interface DiabloItemAffixDto {
    id: number;
    name: string;
}

export interface DiabloItemDto {
    id: string;
    quality?: Game.ItemQuality;
    variant?: Game.ItemVariant;
    name?: string;
    power?: number;
    type?: Game.ItemType;
    dps?: number;
    armor?: number;
    socketCount?: number;
    socketType?: Game.ItemSocketType;
    requiredLevel?: number;
    classRestriction?: Game.Class;
    inherentAffix0?: DiabloItemAffixDto;
    inherentAffix0Value?: number;
    inherentAffix1?: DiabloItemAffixDto;
    inherentAffix1Value?: number;
    affix0?: DiabloItemAffixDto;
    affix0Value?: number;
    affix1?: DiabloItemAffixDto;
    affix1Value?: number;
    affix2?: DiabloItemAffixDto;
    affix2Value?: number;
    affix3?: DiabloItemAffixDto;
    affix3Value?: number;
    image?: string;
    deleted: boolean;
}

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
