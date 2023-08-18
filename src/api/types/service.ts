import { Game } from '@diablosnaps/common';

export type ServiceSortDirection = 'asc' | 'desc';

// TODO: discuss
export type ServiceSortField = 'listedAt' | 'price';

export interface ServiceSort {
    field: ServiceSortField;
    direction: ServiceSortDirection;
}

export interface ServiceTitleFilter {
    keywords?: string;
}

export interface ServiceTagsRegionFilter {
    tags?: number[];
    region?: number;
}

export interface ServiceQuery {
    title?: ServiceTitleFilter;
    tagsAndRegion?: ServiceTagsRegionFilter;
}

export interface ServiceListingAccount {
    name: string;
    online: boolean;
    lastSeenAt: Date;
}

export interface ServiceListing {
    id: string;
    account?: ServiceListingAccount;
    title?: string;
    content?: string;
    tags?: number[];
    region?: number;
    lastUpdated?: Date;
    // TODO: price, bidding info, etc
}

export interface ServiceSearchPayload {
    query?: ServiceQuery;
    sort?: ServiceSort;
}

export interface ServiceSearchResult {
    listing: ServiceListing;
}

export interface ServiceGetSearchQuery {
    serverType: Game.ServerType;
    /**
     * Serialized TradeSearchPayload
     */
    payload: string;
    page: number;
    pageSize?: number;
    timestamp?: number;
}
export interface ServiceGetSearchResponse {
    results: ServiceSearchResult[];
    hasMore: boolean;
    timestamp: number;
}