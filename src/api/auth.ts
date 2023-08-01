export interface User {
    id: string;
    battleNetTag: string;
    discordName?: string;
    // TODO: other stuff
}

export interface UserResponse {
    result: User;
}