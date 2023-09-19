import { Game } from '@diablosnaps/common';
import { API } from '..';

export const TAGS = {
    POWERLEVELING: 1 << 0,
    BOSS_HELP: 1 << 1,
    UBER_LILITH: 1 << 2,
    CAPSTONE_BOOST: 1 << 3,
    EUROPE: 1 << 4,
    ASIA: 1 << 5,
    AMERICA: 1 << 6,
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

export interface ServiceDto {
    id: string;
    realmType: string;
    title: string;
    content: string;
    user: API.UserDto;
    userId: number;
    tags: number;
    maxAcceptedSlots: number;
    slots: API.ServiceSlotDto[];
    bumpedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    updatedBy: string;
    deleted: boolean;
}

export interface ServiceGetSearchQuery {
    serverType?: Game.ServerType;
    title?: string;
    tags?: number;
    userId?: string;
    deleted?: boolean;
    offset?: number;
    limit?: number;
}

export type ServiceGetSearchResponse = ServiceDto[];
