import { API } from '..';

export enum REPORT_STATES {
    PENDING = 'PENDING',
    REVIEWING = 'REVIEWING',
    CANCELLED = 'CANCELLED',
    CLOSED = 'CLOSED',
}

export interface ReportTypeDto {
    typeDescription: string;
}

export interface ReportReasonDto {
    reportTypeId: number;
    reportType: ReportTypeDto; // Extra joined information
    reasonDescription: string;
}

export interface ReportDto {
    id: string; 
    reportTypeId: number;
    reportType: ReportTypeDto;
    reportReasonId: number;
    reportReason: ReportReasonDto;
    reportDescription: string;
    reportedByUserId: string;
    reportedByUser: API.UserDto;
    userAcceptedTermsOfUse: boolean;
    reportedReference: API.UserDto | API.DiabloItemDto | API.ServiceDto;
    reportedReferenceId: string;
    state: REPORT_STATES;
    assignedUserId: string;
    assignedUser: API.UserDto;
    updatedByUserId: string;
    updatedByUser: API.UserDto;
    deleted: boolean;
}