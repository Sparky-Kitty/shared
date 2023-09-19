import { API } from '..';

export enum ServiceSlotStates {
    Pending = 'PENDING',
    Accepted = 'ACCEPTED',
    Rejected = 'REJECTED',
    Ended = 'ENDED',
}

export interface ServiceSlotDto {
    id: string;
    state: API.ServiceSlotStates;
    service: API.ServiceDto;
    serviceId?: number;
    serviceOwner: API.UserDto;
    serviceOwnerUserId: number;
    client: API.UserDto;
    clientUserId: number;
    updatedAt: Date;
}

export interface ServiceSlotGetSearchQuery {
    userId?: string;
    state?: ServiceSlotStates;
    excludeEnded?: boolean;
    limit?: number;
}

export type ServiceSlotGetSearchResponse = ServiceSlotDto[];
