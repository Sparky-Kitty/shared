import { API } from '..';

export enum ServiceSlotStates {
    PENDING = 'Pending',
    ACCEPTED = 'Accepted',
    REJECTED = 'Rejected',
    ENDED = 'Ended',
}

export interface ServiceSlot {
    id: string;
    state: ServiceSlotStates;
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
    state?: ServiceSlotStates;
    excludeEnded?: string;
    limit?: number;
}

export type ServiceSlotGetSearchResponse = ServiceSlot[];
