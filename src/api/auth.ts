export interface User {
    id: string;
    battleNetTag: string;
    discordName?: string;
}

export interface AuthCallbackParams {
    code: string
}

export interface AuthCallbackResponse {
    token: string;
    user: User;
}