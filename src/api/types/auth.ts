import { API } from '..';

export interface UserDto {
    id: string;
    discordName: string;
    discordId?: string;
    email?: string;
    battleNetTag: string;
    vouchScore?: number;
    vouchRating?: number;
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
