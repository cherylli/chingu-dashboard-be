import { Request } from "express";

type VoyageTeam = {
    teamId: number;
    memberId: number;
};

export type UserReq = {
    userId: string;
    email: string;
    roles: string[];
    voyageTeams: VoyageTeam[];
};

export interface CustomRequest extends Request {
    user: UserReq;
}
