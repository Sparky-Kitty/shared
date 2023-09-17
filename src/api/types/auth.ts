import { API } from "..";

export interface AuthUser {
    id?: string;
    name: string;
    battleNetTag: string;
    discordId?: string;
    discordName: string;
    vouchRating: number;
    vouchScore: number;
}

export interface Notification {
    recipient: AuthUser;
    entity: API.ServiceSlot;
    message: string;
}

export interface AuthCallbackParams {
    code: string;
}

export interface AuthCallbackResponse {
    token: string;
    user: AuthUser;
}
