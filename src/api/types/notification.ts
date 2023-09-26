import { API } from "..";

export interface UserNotificationDto {
    id: string;
    recipient: API.UserDto;
    recipientId?: number;
    reference: API.ServiceSlotDto | API.UserVouchDto; // | API.ItemListingBidDto
    referenceId?: number;
    referenceType: string;
    message: string;
    createdAt: Date;
}