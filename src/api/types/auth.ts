export interface AuthUser {
    id: string;
    battleNetTag: string;
    discordId: string;
    discordName: string;
}

export interface AuthCallbackParams {
    code: string
}

export interface AuthCallbackResponse {
    token: string;
    user: AuthUser;
}