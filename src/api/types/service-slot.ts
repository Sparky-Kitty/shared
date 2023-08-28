import { API } from '..';

export enum SERVICE_SLOT_STATES {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
    ENDED = 'ENDED',
}

export interface ServiceSlot {
    id: string;
    state: SERVICE_SLOT_STATES;
    service: API.ServiceListing;
    serviceId?: number;
    serviceOwner: API.AuthUser;
    serviceOwnerUserId: number;
    client: API.AuthUser;
    clientUserId: number;
    updatedAt: Date;
}

export interface ServiceSlotGetSearchQuery {
    clientId?: number;
    ownerId?: number;
    state?: SERVICE_SLOT_STATES;
    excludeEnded?: string;
    limit?: number;
}

export type ServiceSlotGetSearchResponse = ServiceSlot[]