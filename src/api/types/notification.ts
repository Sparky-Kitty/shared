import { API } from '..';

export interface UserNotificationDto {
    id: string;
    recipient: API.UserDto;
    recipientId?: string;
    reference: API.ServiceSlotDto | API.UserVouchDto; // | API.ItemListingBidDto
    referenceId?: string;
    referenceType: string;
    message: string;
    createdAt: Date;
}
