import { Game } from '@diablosnaps/common';
import { AuthUser } from './';

export const TAGS = {
    POWERLEVELING: 1 << 0,
    BOSS_HELP: 1 << 1,
    UBER_LILITH: 1 << 2,
    CAPSTONE_BOOST: 1 << 3,
};

export const REGIONS = {
    EUROPE: 1 << 0,
    ASIA: 1 << 1,
    AMERICA: 1 << 2,
};

export const numberToTags = (numberValue: number): string[] => {
    const selectedTags: string[] = [];

    for (const tag in TAGS) {
        if ((numberValue & TAGS[tag]) !== 0) {
            selectedTags.push(tag.replace('_', ' '));
        }
    }
    return selectedTags;
};

export const numberToRegions = (numberValue: number): string[] => {
    const selectedRegions: string[] = [];

    for (const region in REGIONS) {
        if ((numberValue & REGIONS[region]) !== 0) {
            selectedRegions.push(region.replace('_', ' '));
        }
    }
    return selectedRegions;
};

export interface ServiceListing {
    id: string;
    realmType?: string;
    title?: string;
    content?: string;
    user?: AuthUser;
    userId?: number;
    tags?: number;
    regions?: number;
    maxAcceptedSlots?: number;
    updatedAt?: Date;
    deleted?: boolean;
}

export interface ServiceGetSearchQuery {
    serverType: Game.ServerType;
    title?: string;
    tags?: number;
    region?: number;
    userId?: number;
    deleted?: boolean;
    offset?: number;
    limit?: number;
}

export type ServiceGetSearchResponse = ServiceListing[];
