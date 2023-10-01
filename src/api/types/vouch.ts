import { API } from '..';

export enum UserVouchState {
    Open = 0,
    Closed = 1,
}

export interface UserVouchDto {
    id: string;
    recipient: API.UserDto;
    recipientId: string;
    author: API.UserDto;
    authorId: string;
    reference: API.ServiceDto; // || API.ItemListingDto
    referenceId: string;
    referenceType: string;
    isPositive: boolean;
    rating: number;
    state: UserVouchState;
    description: string;
    createdAt: Date;
}
