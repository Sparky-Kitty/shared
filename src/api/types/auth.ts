import { API } from "..";

export interface AuthUser {
    id?: string;
    name: string;
    battleNetTag: string;
    discordId?: string;
    discordName: string;
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
