import { API } from '..';

export enum UserVouchState {
    Open = 0,
    Closed = 1,
}

export interface UserDto {
    id: string;
    discordName: string;
    discordId?: string;
    email?: string;
    battleNetTag: string;
    vouchScore: number;
    vouchRating: number;
}

export interface UserVouchDto {
    id: string;
    recipient: API.UserDto;
    recipientId: string;
    reference: API.ServiceDto; // || API.ItemListingDto
    referenceId: string;
    referenceType: string;
    isPositive: boolean;
    rating: number;
    state: UserVouchState;
    description: string;
    createdAt: Date;
}

export interface UserNotificationDto {
    id: string;
    recipient: UserDto;
    recipientId?: number;
    reference: API.ServiceSlotDto | UserVouchDto; // | API.ItemListingBidDto
    referenceId?: number;
    referenceType: string;
    message: string;
    createdAt: Date;
}

export interface Notification {
    recipient: UserDto;
    entity: API.ServiceSlotDto; // || API.ItemBidDto || API.VouchDto
    message: string;
}

export interface AuthCallbackParams {
    code: string;
}

export interface AuthCallbackResponse {
    token: string;
    user: UserDto;
}
